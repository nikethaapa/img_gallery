// src/components/Card.js


function Card({ title, img }) {
  return (
    <div className='img_card'>
      <div className="card">
        <img src={img} alt={title} />
      </div>
      <h2 className="img_title">{title}</h2>
    </div>
  );
}

export default Card;