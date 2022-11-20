import React from "react";

export function Photo (img) {
    return(
    <div className="gallery" key={img.id}>
        <div className="gallery__column">
            <a href={img.urls.full} target="_blank" className="gallery__link">
                <figure className="gallery__thumb">
                    <img src={img.urls.regular} alt={img.user.name} className="gallery__image"/>
                    <figcaption className="gallery__caption">{img.user.name} Likes: {img.likes}</figcaption>
                </figure>
            </a>
        </div>
    </div>
    )
}