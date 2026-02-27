import { useState, useEffect } from "react";

function MotorcycleList() {
  const [motorcycles, setMotorcycles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMotorcycles();
  }, []);

  const fetchMotorcycles = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/items");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMotorcycles(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading motorcycles...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1> Motorcycle Inventory</h1>
      {motorcycles.length === 0 ? (
        <p>No motorcycles found</p>
      ) : (
        <div>
          {motorcycles.map((bike) => (
            <div key={bike.id}>
              <h3>
                {bike.name} ({bike.year})
              </h3>
              <p>
                <strong>Brand:</strong> {bike.brand}
              </p>
              <p>
                <strong>Price:</strong> {bike.price}
              </p>
              <p>
                <strong>Description:</strong> {bike.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MotorcycleList;
