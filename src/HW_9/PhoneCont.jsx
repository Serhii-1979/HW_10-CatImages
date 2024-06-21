// import React from "react";
import React, { useState, useEffect } from 'react';
import Google from './Google'
import "./PhoneCont.css";
import Footer from './Footer'
import image1 from '../assets/battery-full.svg'
import image11 from '../assets/battery-half.svg'
import image12 from '../assets/battery-min.svg'
import image2 from '../assets/reception-4.svg'
import image3 from '../assets/house.svg'
import image4 from '../assets/star.svg'
import image5 from '../assets/three.svg'


function PhoneCont() {

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }));

  const [batteryLevel, setBatteryLevel] = useState(77);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }));
    }, 60000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const batteryTimer = setInterval(() => {
      setBatteryLevel(prev => prev ? prev - 1 : 0)
    }, 10000);
    return () => clearInterval(batteryTimer)
  })

  const getBatteryImg = () => {
    if(batteryLevel === 0) {
      setBatteryLevel(100);
    }else if(batteryLevel <= 10) {
      alert('Зарядите телефон');
      return image12;      
    }else if (batteryLevel <= 50) {
      return image11;
    }else{
      return image1;     
    }
  }

  return (
    <div className="phoneCont_3">
    <div className="phoneCont_2">
      <div className="phoneCont_1">
        <div className="phoneCont">
          <div className="phoneCont_header">
            <div className="phoneCont_header-top">
                <div className="phoneCont_header-topRight">
                    <p>{currentTime}</p>
                </div>
                <div className="phoneCont_header-topLeft">
                    <img src={image2} alt="img" />
                    <p>{batteryLevel}%</p>
                    <div className="phoneCont_header-topLeft-battery"><img src={getBatteryImg()} alt="img" /></div>
                    
                </div>
            </div>
            <div className="phoneCont_header-bottom">
                <div className="phone_home"><img src={image3} alt="img" /></div>
                <div className="phone_search"><p>https://google.com/<span>search?</span> </p></div>
                <div className="phone_star"><img src={image4} alt="img" /></div>
                <p className="phone_num">3</p>
                <div className="phone_punct"><img src={image5} alt="img" /></div>
            </div>
          </div>

            <Google />
            <Footer />

        </div>
      </div>
    </div>
    </div>
  );
}
export default PhoneCont;
