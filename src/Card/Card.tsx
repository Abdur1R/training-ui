import "./Card.scss";

const Card = ({ image, alt }: any) => (
    <div>
        <img className="projectCard" src={image} alt={alt} />
    </div>
);

export default Card;