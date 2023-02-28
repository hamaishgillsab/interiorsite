import React from 'react';
import { SwipeableTextMobileStepper } from "../Slider/Slider";
import "react-multi-carousel/lib/styles.css";
// import Carousel from 'react-multi-carousel';
// import LightSpeed from 'react-reveal/LightSpeed';


const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <SwipeableTextMobileStepper />
      {/* <h3>We are <b>One Source</b> for all your <b>interior needs</b>.</h3>
      <Carousel responsive={responsive}>
        <div><img src='05.jpeg' style={{width:"50%"}}/></div>
        <div><img src='06.jpeg' style={{width:"50%"}}/></div>
        <div><img src='07.jpeg' style={{width:"50%"}}/></div>
        <div><img src='08.jpg' style={{width:"50%"}}/></div>
        <div><img src='09.jpeg' style={{width:"50%"}}/></div>
        <div><img src='10.jpg' style={{width:"50%"}}/></div>
        <div><img src='11.jpeg' style={{width:"50%"}}/></div>
      </Carousel> */}

      {/* <h3>About us</h3>
      <div style={{display:"flex"}}>
        <LightSpeed left>
          <p><b>Abeer Alamal Technical Works</b> ... A Company - A Team of Professionals with ambition, passion and more importantly years of success stories</p>
          <img src='12.jpeg' style={{width:"30%"}} />
        </LightSpeed>
      </div> */}

      {/* <h3>Service</h3>
      <div>
        <p>
        At Abeer Alamal Technical Works, we focus on life after the sale.
Believing furniture and systems are only as good as how they’re used and maintained, our service and support personnel and systems are setting industry benchmarks for understanding the needs of our customers and implementing best practices across organizations.
        </p>
      </div> */}


    </div>
  )
}

export default Home;
