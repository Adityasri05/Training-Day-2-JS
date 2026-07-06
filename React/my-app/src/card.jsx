import Title from "./titles";
const Card = ({ title, description, image }) => {
  return (
    <div className="card">
        <img
          src={image}
          alt="Nature"
          className="card-image"
        />

        <div className="card-content">
            <Title title={title} />
            <p className="card-description">
            {description}</p>
            <button className="card-btn">Explore More</button>
        </div>
    </div>
  );
}
export default Card;