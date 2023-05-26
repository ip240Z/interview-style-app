import React, { useState } from "react"
import "./ImageCard.css"

let ImageCard = (props) => {

    const [data, setData] = useState(props.data)

    const [likeStatus, setLikeStatus] = useState(false);

    let handleLike = (e) => {
        e.preventDefault();
        console.log(likeStatus);
        return setLikeStatus(!likeStatus);
    }


    let likeStyle = {
        backgroundColor: likeStatus === true ? "blue" : "white",
        border: likeStatus  === true ? "3px solid blue" : "2px solid black",
        color: likeStatus ? "white" : "black",
    }

    return (
        <article className="cell">
            <div>
                <img style={likeStyle} src={`${data.url}`} alt="Cat Image" className="catImage" />
            </div>
            <h3 className="postId">{data.id}</h3>
            <div className="btnWrapper">
                <button className="likeBtn" style={likeStyle} onClick={handleLike}>Like</button>
            </div>
        </article>
    )
}

export default ImageCard