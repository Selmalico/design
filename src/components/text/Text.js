import React from 'react';
import "./Text.css"
const Text = ({info,size,weight,color, lineheight}) => {
    return (
        <div className={`family ${size} ${weight} ${lineheight} ${color}`}> 
            {info}
        </div>
    );
}

export default Text;