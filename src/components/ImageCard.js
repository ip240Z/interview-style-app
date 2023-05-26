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
                <img style={likeStyle} src={`${data.url}`} alt="Cat Image" className="catImage" />
            <h3 className="postId">{data.id}</h3>
            <p>This is best I could do with the limited info this api sends back. 
                Image source: {data.url}</p>
            <div className="btnWrapper">
                <button className="likeBtn" style={likeStyle} onClick={handleLike}>Like</button>
            </div>
        </article>
    )
}

export default ImageCard