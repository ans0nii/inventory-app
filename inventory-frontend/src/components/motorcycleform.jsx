import { useState } from "react";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

      const response = await fetch("http://localhost:3000/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          price: parseInt(formData.price) || 0,
          year: parseInt(formData.year) || 0,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add motorcycle");
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
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "20px" }}>
      <h2>Add New Motorcycle</h2>

      {error && <div>Error: {error}</div>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Brand: </label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Price: </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Year: </label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Description: </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Motorcycle"}
        </button>
      </form>
    </div>
  );
}
