import React from "react";

function FriendCard(props) {
    console.log(props);

    return (
        <div className="card">
            <img src={props.image}/>
            <strong>{props.name}</strong>
            <strong>{props.occupation}</strong>
            <strong>{props.location}</strong>
        </div>
    );
}

export default FriendCard;
