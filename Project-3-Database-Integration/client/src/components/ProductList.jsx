import ProductCard from "./ProductCard.jsx";

function ProductList({ products, onDelete, onEdit }) {
  if (!products.length) {
    return (
      <div className="empty-state">
        <span>0</span>
        <h3>No inventory records found</h3>
        <p>Add your first product or change the current search/filter.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          onDelete={onDelete}
          onEdit={onEdit}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;
