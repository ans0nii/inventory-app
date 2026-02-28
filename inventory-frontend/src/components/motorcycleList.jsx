
function MotorcycleList({ motorcycles}) {

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
