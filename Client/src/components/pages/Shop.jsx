export default function Shop() {
  return (
    <section>
      <h1>PRODUCTS</h1>
      {/* <div className="displayCart"></div> */}
      {/* <section className="products">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className={`card ${product.type}`} style={{ width: '18rem' }}>
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{`${product.scent} - ${product.size}`}</p>
                <p>${product.price}</p>
                <button data-id={product.id} id="cartAdd" className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </section> */}
    </section>
  );
}
