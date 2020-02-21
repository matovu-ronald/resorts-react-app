import React from 'react';

const Room = ({room}) => {
    const { name, slug, images, price } = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImage } alt={name} />
                <div className="price-top">
                    <h6>UGX {price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link" >Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

export default Room;