import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // Return the collection of cards
    return (
        <div>
            {
                // Going through all the robots in the list and creating a card component for them
                robots.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;