import React, { useState } from 'react';
import "./Project.css";
import CloseIcon from '@mui/icons-material/Close';
import Img1 from '../../img/01.jpg';
import Img2 from '../../img/02.jpg';
import Img3 from '../../img/03.jpg';
import Img4 from '../../img/04.jpg';
import Img5 from '../../img/05.jpeg';
import Img6 from '../../img/06.jpeg';
import Img7 from '../../img/07.jpeg';
import Img8 from '../../img/08.jpeg';
import Img9 from '../../img/09.jpg';
import Img10 from '../../img/10.jpeg';
import Img11 from '../../img/11.jpeg';
import Img12 from '../../img/12.jpeg';
import Img13 from '../../img/13.jpeg';
import Img14 from '../../img/14.jpeg';
import Img15 from '../../img/15.jpeg';
import Img16 from '../../img/06.jpeg';
import Img17 from '../../img/17.jpeg';
import Img18 from '../../img/18.jpeg';
import Img19 from '../../img/19.jpg';
import Img20 from '../../img/20.jpg';
import Img21 from '../../img/21.jpg';
import Img22 from '../../img/22.jpg';
import Img23 from '../../img/23.jpg';
import Img24 from '../../img/24.jpg';
import Img25 from '../../img/25.jpg';
import Img26 from '../../img/26.jpeg';
import Img27 from '../../img/27.jpeg';
import Img28 from '../../img/28.jpeg';
import Img29 from '../../img/29.jpeg';
import Img30 from '../../img/30.jpeg';
import Img31 from '../../img/31.jpeg';
import Img32 from '../../img/32.jpeg';
import Img33 from '../../img/33.jpeg';
import Img34 from '../../img/34.jpeg';
import Img35 from '../../img/35.jpeg';
import Img36 from '../../img/36.jpeg';
import Img37 from '../../img/37.jpeg';
import Img38 from '../../img/38.jpeg';
import Img39 from '../../img/39.jpeg';
import Img40 from '../../img/40.jpeg';
import Img41 from '../../img/41.jpeg';
import Img42 from '../../img/42.jpeg';
import Img43 from '../../img/43.jpg';
import Img44 from '../../img/44.jpeg';
import Img45 from '../../img/45.jpeg';


const Projects = () => {
  const image = [
    {
      id: 1,
      imgSrc : Img1,
    },
    {
      id: 2,
      imgSrc : Img2,
    },
    {
      id: 3,
      imgSrc : Img3,
    },
    {
      id: 4,
      imgSrc : Img4,
    },
    {
      id: 5,
      imgSrc : Img5,
    },
    {
      id: 6,
      imgSrc : Img6,
    },
    {
      id: 7,
      imgSrc : Img7,
    },
    {
      id: 8,
      imgSrc : Img8,
    },
    {
      id: 9,
      imgSrc : Img9,
    },
    {
      id: 10,
      imgSrc : Img10,
    },
    {
      id: 11,
      imgSrc : Img11,
    },
    {
      id: 12,
      imgSrc : Img12,
    },
    {
      id: 13,
      imgSrc : Img13,
    },
    {
      id: 14,
      imgSrc : Img14,
    },
    {
      id: 15,
      imgSrc : Img15,
    },
    {
      id: 16,
      imgSrc : Img16,
    },
    {
      id: 17,
      imgSrc : Img17,
    },
    {
      id: 18,
      imgSrc : Img18,
    },
    {
      id: 19,
      imgSrc : Img19,
    },
    {
      id: 20,
      imgSrc : Img20,
    },
    {
      id: 21,
      imgSrc : Img21,
    },
    {
      id: 22,
      imgSrc : Img22,
    },
    {
      id: 23,
      imgSrc : Img23,
    },
    {
      id: 24,
      imgSrc : Img24,
    },
    {
      id: 25,
      imgSrc : Img25,
    },
    {
      id: 26,
      imgSrc : Img26,
    },
    {
      id: 27,
      imgSrc : Img27,
    },
    {
      id: 28,
      imgSrc : Img28,
    },
    {
      id: 29,
      imgSrc : Img29,
    },
    {
      id: 30,
      imgSrc : Img30,
    },
    {
      id: 31,
      imgSrc : Img31,
    },
    {
      id: 32,
      imgSrc : Img32,
    },
    {
      id: 33,
      imgSrc : Img33,
    },
    {
      id: 34,
      imgSrc : Img34,
    },
    {
      id: 35,
      imgSrc : Img35,
    },
    {
      id: 36,
      imgSrc : Img36,
    },
    {
      id: 37,
      imgSrc : Img37,
    },
    {
      id: 38,
      imgSrc : Img38,
    },
    {
      id: 39,
      imgSrc : Img39,
    },
    {
      id: 40,
      imgSrc : Img40,
    },
    {
      id: 41,
      imgSrc : Img41,
    },
    {
      id: 42,
      imgSrc : Img42,
    },
    {
      id: 43,
      imgSrc : Img43,
    },
    {
      id: 44,
      imgSrc : Img44,
    },
    {
      id: 45,
      imgSrc : Img45,
    },
  ]
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTemimgSrc] = useState('');

  const getImg =(imgSrc)=>{
    setTemimgSrc(imgSrc);
    setModel(true);

  }
  return (
    <>
    <h2>Our Project</h2>
    <div className={model? "model open" : "model"}>
      <img src={tempimgSrc} />
      <CloseIcon onClick={() => setModel(false)}/>
    </div>
        <div className='gallery'>
          {image.map((item, index)=>{
            return(
              <div className='pics' key={index} onClick={()=> getImg(item.imgSrc)}>
                <img src={item.imgSrc} style={{width: '100%'}}  />
              </div>
            )
          })}

        </div>
    </>
    )
  }
  
  export default Projects
  