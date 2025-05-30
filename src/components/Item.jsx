export const Item = ({ imgURL, imgAlt, itemTitle, itemDesc }) => {
  return (
    <div className="card">
      <img src={imgURL} className="card-img-top" alt={imgAlt}></img>
      <div className="card-body">
        <h5 className="card-title">{itemTitle}</h5>
        <p className="card-text">{itemDesc}</p>
      </div>
    </div>
  );
};
