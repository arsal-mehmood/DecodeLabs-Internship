import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required."],
      trim: true,
      maxlength: [100, "Product name cannot exceed 100 characters."],
    },
    sku: {
      type: String,
      required: [true, "SKU is required."],
      trim: true,
      uppercase: true,
      unique: true,
      maxlength: [40, "SKU cannot exceed 40 characters."],
    },
    category: {
      type: String,
      required: [true, "Category is required."],
      trim: true,
      enum: {
        values: [
          "Electronics",
          "Clothing",
          "Accessories",
          "Home",
          "Books",
          "Other",
        ],
        message: "Please select a valid category.",
      },
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
      min: [0, "Price cannot be negative."],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required."],
      min: [0, "Quantity cannot be negative."],
      validate: {
        validator: Number.isInteger,
        message: "Quantity must be a whole number.",
      },
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters."],
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

productSchema.index({ name: "text", sku: "text", description: "text" });

export default mongoose.model("Product", productSchema);
