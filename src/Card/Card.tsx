import "./Card.scss";

const Card = ({ image, alt }: any) => (
    <div className="card">
        <img className="projectCard" src={image} alt={alt} />
        <div style={{ marginBottom: '20px' }}>{alt}</div>
    </div>
);

export default Card;