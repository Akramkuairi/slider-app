import { useState,useEffect,useRef } from "react"
import {motion} from "framer-motion"
import images from "./images"
import "./App.css"

function App() {
  const carouselRef =useRef()
 const [width, setWidth] = useState(0)

 useEffect(() => {
  // console.log(carouselRef.current.scrollWidth)
  // console.log(carouselRef.current.scrollWidth)
  setWidth(carouselRef.current.scrollWidth - carouselRef.current.scrollWidth)
 }, [])
 
// NOW i WANT acess the item  main comtainer by using useRef , useRef same query selctore 

  console.log(images)
  return (
    <div >
     <motion.div ref={carouselRef} className="carousel" whileTap={{cursor:"grabbing"}}> {/* main comtainer  for slider*/}
      <motion.div
       drag= "x"
      dragConstraints ={{right:0 ,left: - width}}
      className="inner-carousel"> {/* I use inner carousel to make the carousel horizal or vertical  , inside inner carousel I put the images by using map */}
       {images.map((image)=>(
        <motion.div className="item" key={image}> {/*this DIV is container for image  */}
           <img  src={image} alt="carousel-image"/>
        </motion.div>
       ))  }
      </motion.div>

     </motion.div>
    </div>
  );
}

export default App;
