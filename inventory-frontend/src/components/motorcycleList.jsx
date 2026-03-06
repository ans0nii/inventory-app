import styles from "./motorcyclelist.module.css";

function MotorcycleList({ motorcycles, onMotorcycleDeleted }) {
  const handleDelete = async (motorcycleId, motorcycleName) => {
    if (
      !window.confirm(`Are you sure you want to delete ${motorcycleName}? `)
    ) {
      return;
    }

    try {
      const response = await fetch(
        `http://inventory-app-production-49ee.up.railway.app/api/items/${motorcycleId}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to delete motorcycle");
      }

      onMotorcycleDeleted(motorcycleId);
      alert(`${motorcycleName} has been deleted.`);
    } catch (error) {
      console.log("Failed to delete", error);
      alert(`Failed to delete motorcycle`);
    }
  };
  return (
    <div>
      {motorcycles.length === 0 ? (
        <p className={styles.noMotorcycles}>No motorcycles found</p>
      ) : (
        <div className={styles.bikeInfo}>
          {motorcycles.map((bike) => (
            <div key={bike.id} className={styles.bikeCard}>
              <h3>
                {bike.year} {bike.brand} ({bike.name})
              </h3>
              <p>
                <strong>Price:</strong> ${Number(bike.price).toLocaleString()}
              </p>
              <p>
                <strong>Description:</strong> {bike.description}
              </p>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(bike.id, bike.name)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MotorcycleList;
