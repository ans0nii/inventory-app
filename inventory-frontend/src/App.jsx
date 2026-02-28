import { useState, useEffect } from "react";
import MotorcycleList from "./components/motorcycleList";
import AddMotorCycleForm from "./components/motorcycleform";
import "./App.css";

function App() {
  const [motorcycles, setMotorcycles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchMotorcycles();
  }, []);

  const fetchMotorcycles = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/items");

      if (!response.ok) {
        throw new Error(`HTTP Error! status : ${response.status}`);
      }

      const data = await response.json();
      setMotorcycles(data);
    } catch (error) {
      console.error("Error fetching motorcycle:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMotorcycleAdded = (newMotorcycle) => {
    setMotorcycles((prev) => [...prev, newMotorcycle]);
  };

  const handleMotorcycleDeleted = (deletedId) => {
    setMotorcycles((prev) => prev.filter((bike) => bike.id !== deletedId));
  };

  const filteredMotorcycles = motorcycles.filter((bikes) =>
    bikes.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading) return <div>Loading app...</div>;

  return (
    <div className="App">
      <button onClick={() => setShowForm(!showForm)}>
        {" "}
        {showForm ? "Hide Form" : "Add New Motorcycle"}
      </button>

      {showForm && (
        <AddMotorCycleForm onMotorcycleAdded={handleMotorcycleAdded} />
      )}
      <h1 className="moto-title">Motorycle Inventory</h1>
      <div className="moto-search">
        <label>Search Motorcycles :</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by model..."
        />
      </div>
      <MotorcycleList
        motorcycles={filteredMotorcycles}
        onMotorcycleDeleted={handleMotorcycleDeleted}
      />
    </div>
  );
}

export default App;
