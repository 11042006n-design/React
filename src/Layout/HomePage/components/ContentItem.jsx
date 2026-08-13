const ContentItem=(props)=>{
    return (
  <div >
      {props.setOfLabels.map((item,index) => (
        <div key={index} className="card m-3" key={index} style={{ width: '18rem', margin: '10px' }}>
          <img 
            src={`https://loremflickr.com/${200 + index}/200`}
            className="card-img-top" 
            alt="Card image" 
          />
          <div className="card-body">
            <h5 className="card-title">{item.title.slice(0,30)}</h5>
            <p className="card-text">{item.body.slice(0,50)}</p>
          </div>
        </div>
      ))}
    </div>
    );
}

export default ContentItem;