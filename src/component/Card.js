

function Card({title,imglink}){
    return (
        <div className='img_card'>

       
        <div className="card">
            <img src={imglink} alt={title} />
        </div>
        <h2 className="img_title">{title}</h2>
         </div>
    )
}

export default Card;