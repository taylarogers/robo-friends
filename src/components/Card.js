import React from 'react';

// Get the property values sent in from index.js by destructuring
const Card = ({ name, email, id}) => {
    return (
        <div className='tc bg-black-20 dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* Define image - ?200x200 species the size that the API must send back */}
            <img src={`https://robohash.org/${id}?200x200`} alt="robot profile"/>
            
            {/* Display contact info */}
            <div>
                <h2> {name} </h2>
                <p> {email} </p>
            </div>
        </div>
    );
}

export default Card;