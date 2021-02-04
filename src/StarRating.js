import React, {useState} from "react";

function Star({selected = false, onSelect}) {
    return <span 
        style={{color: selected ? 'yellow' : 'gray', cursor: 'pointer'}}
        onClick={onSelect}
    >&#9733;</span>;
}

function StarRating({totalStars = 10}) {

    const createArray = (length) => {
        return [...Array(length)]
    }

    const [selectedStars, onStarSelected] = useState(0);

    return (
        createArray(totalStars).map((item, i) => {
            return <Star 
                key={i}
                selected={selectedStars > i}
                onSelect={() => onStarSelected(i + 1)}
            ></Star>
        })
    );
}
  
export default StarRating;