const ContentItem=()=>{
    return (
  <div >

    <div className="row">
      {Array.from({ length: 5 }, (_, index) => (
        <div className="card m-3" key={index} style={{ width: '18rem', margin: '10px' }}>
          <img 
            src={`https://loremflickr.com/${200 + index}/200`}
            className="card-img-top" 
            alt="Card image" 
          />
          <div className="card-body">
            <h5 className="card-title">Card title {index + 1}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <button className="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      ))}
    </div>
  </div>
    );
}

export default ContentItem;