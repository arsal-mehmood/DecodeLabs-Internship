import { useCallback, useEffect, useMemo, useState } from "react";
import ProductForm from "./components/ProductForm.jsx";
import ProductList from "./components/ProductList.jsx";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api/products";

const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Accessories",
  "Home",
  "Books",
  "Other",
];

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const showMessage = (type, text) => {
    setMessage({ type, text });
    window.setTimeout(() => setMessage({ type: "", text: "" }), 3500);
  };

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();

      if (search.trim()) params.set("search", search.trim());
      if (category !== "All") params.set("category", category);

      const response = await fetch(`${API_URL}?${params.toString()}`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to load products.");
      }

      setProducts(result.data);
    } catch (error) {
      showMessage("error", error.message);
    } finally {
      setLoading(false);
    }
  }, [search, category]);

  useEffect(() => {
    const timer = window.setTimeout(loadProducts, 250);
    return () => window.clearTimeout(timer);
  }, [loadProducts]);

  const saveProduct = async (payload) => {
    try {
      setBusy(true);

      const isEditing = Boolean(editingProduct);
      const url = isEditing ? `${API_URL}/${editingProduct._id}` : API_URL;

      const response = await fetch(url, {
        method: isEditing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to save product.");
      }

      setEditingProduct(null);
      showMessage("success", result.message);
      await loadProducts();
      return true;
    } catch (error) {
      showMessage("error", error.message);
      return false;
    } finally {
      setBusy(false);
    }
  };

  const deleteProduct = async (product) => {
    const confirmed = window.confirm(
      `Delete "${product.name}"? This action cannot be undone.`
    );
    if (!confirmed) return;

    try {
      const response = await fetch(`${API_URL}/${product._id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to delete product.");
      }

      if (editingProduct?._id === product._id) {
        setEditingProduct(null);
      }

      showMessage("success", result.message);
      await loadProducts();
    } catch (error) {
      showMessage("error", error.message);
    }
  };

  const stats = useMemo(() => {
    const totalUnits = products.reduce((sum, item) => sum + item.quantity, 0);
    const totalValue = products.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    const lowStock = products.filter((item) => item.quantity <= 5).length;

    return { totalUnits, totalValue, lowStock };
  }, [products]);

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">SP</span>
          <div>
            <strong>StockPilot</strong>
            <small>DecodeLabs • Project 3</small>
          </div>
        </div>
        <span className="mern-badge">MERN DATABASE INTEGRATION</span>
      </header>

      <section className="hero">
        <div>
          <span className="eyebrow">Persistent data. Practical CRUD.</span>
          <h1>Inventory that survives the refresh.</h1>
          <p>
            A full-stack inventory manager demonstrating MongoDB persistence,
            schema validation, RESTful CRUD operations, filtering, and safe data handling.
          </p>
        </div>
      </section>

      {message.text && (
        <div className={`message ${message.type}`}>{message.text}</div>
      )}

      <section className="dashboard">
        <aside>
          <ProductForm
            busy={busy}
            editingProduct={editingProduct}
            onCancel={() => setEditingProduct(null)}
            onSave={saveProduct}
          />
        </aside>

        <section className="content">
          <div className="stats-grid">
            <div>
              <span>Visible records</span>
              <strong>{products.length}</strong>
            </div>
            <div>
              <span>Total units</span>
              <strong>{stats.totalUnits}</strong>
            </div>
            <div>
              <span>Inventory value</span>
              <strong>Rs. {stats.totalValue.toLocaleString()}</strong>
            </div>
            <div>
              <span>Low / out of stock</span>
              <strong>{stats.lowStock}</strong>
            </div>
          </div>

          <div className="toolbar">
            <input
              aria-label="Search inventory"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search product, SKU or description..."
              value={search}
            />

            <select
              aria-label="Filter by category"
              onChange={(event) => setCategory(event.target.value)}
              value={category}
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          {loading ? (
            <div className="loading">Loading inventory…</div>
          ) : (
            <ProductList
              onDelete={deleteProduct}
              onEdit={setEditingProduct}
              products={products}
            />
          )}
        </section>
      </section>

      <footer>
        DecodeLabs Industrial Training • Full Stack Development • Project 3
      </footer>
    </main>
  );
}

export default App;
