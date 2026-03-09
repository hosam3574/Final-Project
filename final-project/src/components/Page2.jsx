import React, { useState } from "react";

import CarCard from "./carCard";

export default function Part3() {
  const [showSUV, setShowSUV] = useState(false);

  return (
    <div>


<img className="ChatGPT" src="/media/ChatGPT Image 9 مارس 2026، 05_21_15 م.png" alt="logo" />

<br /><br /><br /><br /><br /> 




      <div className="hgit">
        <button className="button">
          <p>POPULAR RENTAL</p>
        </button>
        <h1 style={{
          marginLeft:"35%"
        }}>Most popular cars rental deals</h1>
      </div>

      <div className="allcars">
        {/* أول 4 سيارات أصغر */}
        <CarCard className="small-car" name="Jaguar XE L P250" image="/media/jaguar car.png" price={800} reviews="4.8 (2,436 reviews)" />
        <CarCard className="small-car" name="Audi R8" image="/media/Audi 1 (2).png" price={700} reviews="4.7 (2,120 reviews)" />
        <CarCard className="small-car" name="BMW M3" image="/media/bmw m3.png" price={900} reviews="4.9 (3,100 reviews)" />
        <CarCard className="small-car" name="Lamborghini Huracan" image="/media/Lamborghini-Logo-history-and-meaning-_-Body-1-19-8-22-1024x640.png" price={1000} reviews="4.8 (1,950 reviews)" />

        {/* السيارات بالحجم العادي */}
        <CarCard name="New GLC – 2023" image="/media/car19-660x440.jpg.png" price={1200} reviews="4.6 (2,000 reviews)" />
        <CarCard name="Ford Explorer 2023" image="/media/Container (1).png" price={950} reviews="4.7 (1,850 reviews)" />
        <CarCard name="Audi A6 3.5 – New" image="/media/car12-660x440.jpg.png" price={850} reviews="4.8 (2,400 reviews)" />
        <CarCard name="T-Cross – 2023" image="/media/Container.png" price={780} reviews="4.6 (1,950 reviews)" />
      </div>

 <div
  style={{
    textAlign: 'center',
    color: 'blue',
    marginTop:'5',
    padding: '20px',
    borderRadius: '10px',
    fontSize: '25px',
    fontWeight: 'bold',
    
  }}
>
  
  <div style={{ fontSize: '28px', marginTop: '10px', animation: 'bounceDown 1.5s infinite' }}>
    ⬇️⬇️⬇️
  </div>
</div>



      {/* زر إظهار السيارات العالية */}
      <div style={{ textAlign: "center", margin: "30px 0" ,}}>
        <button style={{fontSize:"30px",
          backgroundColor:" darkblue",
          border:"5px",
          borderRadius:"15px",
          color:"whitesmoke"
        }}
          className="show-suv-btn"
          onClick={() => setShowSUV(!showSUV)}
        >
          {showSUV ? "High-visibility car cover" : "Click if you want high 6 seater cars"}
        </button>
      </div>

      {showSUV && (
        <div className="allcars">
          {/* 8 سيارات SUV */}
          <CarCard name="Toyota Land Cruiser 2024" image="/media/white-suv-on-transparent-background-3d-rendering-illustration-free-png.webp" price={1500} reviews="4.9 (1,200 reviews)" />
          <CarCard name="Jeep Grand Cherokee 2023" image="/media/jeepgrand.png.avif" price={1300} reviews="4.8 (1,100 reviews)" />
          <CarCard name="Ford Expedition 2023" image="/media/2025-ford-expedition-tremor-3.jpg" price={1400} reviews="4.7 (1,050 reviews)" />
          <CarCard name="Chevrolet Tahoe 2023" image="/media/Tahoe2025-HighCountry-DarkAshMetallic-640w.webp" price={1350} reviews="4.8 (980 reviews)" />
          <CarCard name="Nissan Patrol 2024" image="/media/nissan-patril-astar.webp" price={1450} reviews="4.9 (1,100 reviews)" />
          <CarCard name="Land Rover Discovery 2023" image="/media/2023_land-rover_discovery_4dr-suv_p300-r-dynamic-s_fq_oem_1_1600.avif" price={1380} reviews="4.8 (1,020 reviews)" />
          <CarCard name="Mercedes GLS 2024" image="/media/2024_Mercedes_Benz_GLS_A_O.jpg" price={1550} reviews="4.9 (1,150 reviews)" />
          <CarCard name="BMW X7 2023" image="/media/images.jpeg" price={1500} reviews="4.8 (1,080 reviews)" />
        </div>
        
      )}

<br /><br /><br /><br />
 <button
  className="home-btn"
  onClick={() => (window.location.href = "/")}
>
  العودة للصفحة الرئيسية
</button>

<br /><br /><br /><br /><br />






<div className="part5">


    



<img className="hosamedit" src="/media/Vector (3).png" alt="logo" />
<div className="buttonfinal">

<div className="alltrad">
<h1 className="buttoh1">Download Rentcars <br></br>  App for <span className="colerfree">FREE</span> </h1>
<p>For faster, easier booking and exclusive deals.</p>

</div>
 <div className="icons">
  <a href="https://play.google.com/store/apps/details?id=com.rentalcars.online&hl=ar"><img className="im1" src="/media/image 2.png" alt="Logo"/></a>

<a href="https://apps.apple.com/us/app/%D8%AA%D8%A3%D8%AC%D9%8A%D8%B1-%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA-%D8%AA%D8%A7%D8%AC%D9%8A%D8%B1-%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA/id1613929322?l=ar"><img className="im2" src="/media/image 3.png" alt="Logo"/></a>


 </div>
 <img className=" iphone " src=" /media/iphone.png" alt="logo"  />

 </div>

 <div>

 
<img  className=" iphone2 " src="/media/iPhone 14 Pro Space Black Mockup label.png" alt="Logo"/>
</div>



</div>
    
<div>


<button className="finshall"> 



<div>

  <ul>

<li>

<img className="coler" src=" /media/Frame 993 (2).png" alt="logo"  /></li>

<li>
  <div>
<img className="coler2" src=" /media/Frame 1005.png" alt="logo"  /></div>
</li>


<hr className="hr"/><br></br>
Copyright 2023 ・ Rentcars, All Rights Reserved <br></br><br></br><br></br><br></br>
  </ul>

</div>







  <div className="ulli">
    


<ul>

<li className="libig">
Our Product
</li>
<br></br>

<li className="li" >  Career</li>  <br/>

<li className="li" >car</li><br/>

<li className="li" >Packages </li><br/>
    
<li className="li" >Features</li><br/>


</ul>


<div className="div2">

<ul>

<li className="libig">Resources </li>

<br></br>

<li className="li">Download </li><br/>
<li className="li">Help Centre</li><br/>
<li className="li"> Guides </li><br/>
<li className="li"> Partner Network </li><br/>
<li className="li"> Cruises </li><br/>
<li className="li"> Developer </li><br/>



</ul>
</div>



<div className="div3">
<ul>

<li className="libig"> About Rentcars </li>

<br></br>

<li className="li" > Why choose us </li><br/>
<li className="li" > Our Story </li><br/>
<li className="li" > Investor Relations </li><br/>
<li className="li" > Press Center </li><br/>
<li className="li" > Advertise </li><br/>


</ul>
</div>



<div>

<ul className="div3">
  <li className="libig" > Follow Us </li>
<br></br>
 <a href="https://www.facebook.com/groups/538920657585875/"> <img src=" /media/facbook.png " alt="" />
   </a>
</ul>



</div>








</div>








</button>



</div>






    </div>
  );
}
