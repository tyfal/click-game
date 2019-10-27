import React from "react";

function Square(props) {
    return (
        <div className="grid-container">
            {
                props.characters.map(char => {
                    return(
                        <div key={`${char}-key`} className="grid-item" onClick={props.handleClick} data={char}>
                            <img src={`${char}.png`} alt={char} />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Square;