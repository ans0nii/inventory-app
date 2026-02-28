import { useState, useEffect } from "react";
import MotorcycleList from "./components/motorcycleList";
import AddMotorCycleForm from "./components/motorcycleform";
import "./App.css";

function App() {
  const [motorcycles, setMotorcycles] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div>Loading app...</div>;

  return (
    <div className="App">
      <AddMotorCycleForm onMotorcycleAdded={handleMotorcycleAdded} />
      <MotorcycleList motorcycles={motorcycles} />
    </div>
  );
}

export default App;
