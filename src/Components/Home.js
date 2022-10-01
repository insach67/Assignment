import React from 'react'
import  "./Style.css";
import image1 from "../image/image1.jpg"
import image2 from "../image/image2.jpg"
import image3 from "../image/image3.jpg"
function Home() {
  return (
    <>
    <div class="header">
    <h2 id='headertext' >Runner's Workout</h2>
  </div>

  <section class="container" >
    <div class="imagebox">
      <div class="box"><img src={image1} alt="image1"  width="700" height="450" class="img"/><span
          class="text">STRENGTH</span>
        <span class="icon"><a href="#"><i class="fas fa-chevron-circle-right color"></i></a></span>
      </div>
      <div class="box"><img src={image2} alt="image2" width="700" height="450" class="img"/><span
          class="text">MOBILITY</span>
        <span class="icon"><a href="#"><i class="fas fa-chevron-circle-right color"></i></a></span>
      </div>
      <div class="box"><img src={image3} alt="image3"  width="700" height="450" class="img"/><span
          class="text">DRILLS</span>
        <span class="icon"><a href="#"><i class="fas fa-chevron-circle-right color"></i></a></span>
      </div>
    </div>
  </section>
    </>
  )
}

export default Home