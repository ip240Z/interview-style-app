import { useEffect, useState } from "react"
import ImageCard from "./ImageCard";
import "./CardContainer.css"

let CardContainer = () => {

    let APIKEY = process.env.REACT_APP_APIKEY;
    
    const [images, setImages] = useState([]);
    
    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&api_key${APIKEY}`)
            if (!response.ok) {
                throw new Error('Error fetching Images')
            }
            const data = await response.json();
            console.log('Images', data);
            setImages(data)
        } catch (error) {
            console.log('An error occurred: ', error)
        }
    }
    useEffect(() => {
        fetchData()
    }, []); 
    
    const createMore = () => {
       return images.map((img, index) => <ImageCard key={index} data={img} />)
    }
        
    
  let handleClick = () => {
    fetchData()
  }
    
    return (
        <main className="appWrapper">
            <header>
                <h2>Interview</h2>
            </header>
            <section className="imageContainer">
                {images.map((img, index) => <ImageCard key={index} data={img} />)}
            </section>
            <button onClick={handleClick}>Load more images</button>
        </main>
    )
}

export default CardContainer;