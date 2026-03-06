import { useState } from "react";
import styles from "./addmotorcycleform.module.css";
function AddMotorCycleForm({ onMotorcycleAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    year: "",
    description: "",
    category_id: 1,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sanitizeInput = (input) => {
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      .replace(/javascript:/gi, "")
      .replace(/on\w+="[^"]*"/gi, "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizeInput(value),
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.brand.trim()) {
      setError("Name and brand are required");
      return;
    }

    if (formData.name.trim().length < 2) {
      setError("Name must be at least 2 characters");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://inventory-app-production-49ee.up.railway.app/api/items",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            price: parseInt(formData.price) || 0,
            year: parseInt(formData.year) || 0,
          }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP ${response.status}`);
      }

      const newMotorcycle = await response.json();
      onMotorcycleAdded(newMotorcycle);

      setFormData({
        name: "",
        brand: "",
        price: "",
        year: "",
        description: "",
        category_id: 1,
      });
    } catch (error) {
      console.log("Full error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.motorcycleForm}>
      {error && <div className={styles.error}>Error: {error}</div>}

      <form onSubmit={handleSubmit}>
        <div className={styles.formItem}>
          <label>Model: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formItem}>
          <label>Brand: </label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formItem}>
          <label>Price: </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formItem}>
          <label>Year: </label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formItem}>
          <label>Description: </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            maxLength="50"
          />
        </div>

        <div className={styles.formItem}>
          <label>Category: </label>
          <select
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
          >
            <option value={1}>Sport</option>
            <option value={2}>Supersport</option>
            <option value={3}>Touring</option>
          </select>
        </div>

        <button type="submit" disabled={loading} className={styles.submitBtn}>
          {loading ? "Adding..." : "Add Motorcycle"}
        </button>
      </form>
    </div>
  );
}

export default AddMotorCycleForm;
