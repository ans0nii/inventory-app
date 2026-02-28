function MotorcycleList({ motorcycles, onMotorcycleDeleted }) {
  const handleDelete = async (motorcycleId, motorcycleName) => {
    if (
      !window.confirm(`Are you sure you want to delete ${motorcycleName}? `)
    ) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/items/${motorcycleId}`,
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
        <p>No motorcycles found</p>
      ) : (
        <div className="bike-info">
          {motorcycles.map((bike) => (
            <div key={bike.id}>
              <h3>
                {bike.year} {bike.brand} ({bike.name})
              </h3>
              <p>
                <strong>Price:</strong> ${Number(bike.price).toLocaleString()}
              </p>
              <p>
                <strong>Description:</strong> {bike.description}
              </p>
              <button onClick={() => handleDelete(bike.id, bike.name)}>
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
