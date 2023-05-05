import { useState,useEffect,useRef } from "react"
import {motion} from "framer-motion"
import images from "./images"
import "./App.css"

function App() {
  const carouselRef =useRef()
 const [width, setWidth] = useState(0)

 useEffect(() => {
 
  setWidth(carouselRef.current.scrollWidth - carouselRef.current.scrollWidth)
 }, [])
 


  console.log(images)
  return (
    <div >
     <motion.div ref={carouselRef} className="carousel" whileTap={{cursor:"grabbing"}}> {/* main comtainer  for slider*/}
      <motion.div
       drag= "x"
      dragConstraints ={{right:0 ,left: - width}}
      className="inner-carousel"> 
       {images.map((image)=>(
        <motion.div className="item" key={image}> 
           <img  src={image} alt="carousel-image"/>
        </motion.div>
       ))  }
      </motion.div>

     </motion.div>
    </div>
  );
}

export default App;
