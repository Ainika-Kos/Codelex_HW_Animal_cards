import React, { FC, useState } from 'react';
import '../Cards/cards.css';

export type CardsType = {
    img: string;
    description: string;
    name: string;
}

export const Cards: FC<CardsType> = ({ img, description, name}) => {
    
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className="card">
            { !showDescription ? 
            (<div className="card__image-wrapper">
                <img 
                src={img} 
                className="card__image" 
                alt={name}
                onClick={() => setShowDescription(true)}
                />
            </div>
            ) : (
            <div className="card__description-wrapper">
                <p className="card__description">{description}</p>
                <button
                    onClick={() => setShowDescription(false)}
                >Show description</button>
                </div>
            )}
        </div>
    )

}