import { Link } from 'react-router-dom';

export const Card = ({
  imgURL,
  imgAlt,
  itemName,
  itemDescription,
  linkURL,
  linkText,
}) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="{imgURL}" className="card-img-top" alt="{imgAlt}" />
      <div className="card-body">
        <h5 className="card-title">{itemName}</h5>
        <p className="card-text">{itemDescription}</p>
        <Link href="{linkURL}" className="btn btn-primary">
          {linkText}
        </Link>
      </div>
    </div>
  );
};
