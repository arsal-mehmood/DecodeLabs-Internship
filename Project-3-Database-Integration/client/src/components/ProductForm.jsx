import { useEffect, useState } from "react";

const emptyForm = {
  name: "",
  sku: "",
  category: "Electronics",
  price: "",
  quantity: "",
  description: "",
};

const categories = [
  "Electronics",
  "Clothing",
  "Accessories",
  "Home",
  "Books",
  "Other",
];

function ProductForm({ editingProduct, onCancel, onSave, busy }) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (editingProduct) {
      setForm({
        name: editingProduct.name,
        sku: editingProduct.sku,
        category: editingProduct.category,
        price: editingProduct.price,
        quantity: editingProduct.quantity,
        description: editingProduct.description || "",
      });
    } else {
      setForm(emptyForm);
    }
  }, [editingProduct]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const success = await onSave({
      ...form,
      price: Number(form.price),
      quantity: Number(form.quantity),
    });

    if (success && !editingProduct) {
      setForm(emptyForm);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <div>
          <span className="kicker">{editingProduct ? "Update record" : "New record"}</span>
          <h2>{editingProduct ? "Edit Product" : "Add Inventory"}</h2>
        </div>
        {editingProduct && (
          <button className="text-button" onClick={onCancel} type="button">
            Cancel
          </button>
        )}
      </div>

      <div className="form-grid">
        <label>
          Product name
          <input
            maxLength={100}
            name="name"
            onChange={handleChange}
            placeholder="Wireless Keyboard"
            required
            value={form.name}
          />
        </label>

        <label>
          SKU
          <input
            maxLength={40}
            name="sku"
            onChange={handleChange}
            placeholder="ELEC-001"
            required
            value={form.sku}
          />
        </label>

        <label>
          Category
          <select name="category" onChange={handleChange} value={form.category}>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </label>

        <label>
          Price
          <input
            min="0"
            name="price"
            onChange={handleChange}
            placeholder="4999"
            required
            step="0.01"
            type="number"
            value={form.price}
          />
        </label>

        <label>
          Quantity
          <input
            min="0"
            name="quantity"
            onChange={handleChange}
            placeholder="12"
            required
            step="1"
            type="number"
            value={form.quantity}
          />
        </label>

        <label className="full-field">
          Description
          <textarea
            maxLength={500}
            name="description"
            onChange={handleChange}
            placeholder="Optional product notes..."
            rows="4"
            value={form.description}
          />
        </label>
      </div>

      <button className="primary-button" disabled={busy} type="submit">
        {busy ? "Saving..." : editingProduct ? "Save Changes" : "Add Product"}
      </button>
    </form>
  );
}

export default ProductForm;
