function ProductCard({ product, onDelete, onEdit }) {
  const status =
    product.quantity === 0
      ? "Out of stock"
      : product.quantity <= 5
      ? "Low stock"
      : "In stock";

  return (
    <article className="product-card">
      <div className="product-topline">
        <span className="category-pill">{product.category}</span>
        <span className={`status ${status.toLowerCase().replaceAll(" ", "-")}`}>
          {status}
        </span>
      </div>

      <h3>{product.name}</h3>
      <p className="sku">{product.sku}</p>

      <div className="product-metrics">
        <div>
          <span>Price</span>
          <strong>Rs. {Number(product.price).toLocaleString()}</strong>
        </div>
        <div>
          <span>Quantity</span>
          <strong>{product.quantity}</strong>
        </div>
      </div>

      <p className="description">
        {product.description || "No description added for this product."}
      </p>

      <div className="card-actions">
        <button onClick={() => onEdit(product)} type="button">
          Edit
        </button>
        <button className="danger-button" onClick={() => onDelete(product)} type="button">
          Delete
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
