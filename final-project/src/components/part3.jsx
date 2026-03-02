import React, { useState } from "react";

import CarCard from "./carCard";

export default function Part3() {
  const [showSUV, setShowSUV] = useState(false);

  return (
    <div>
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
        <CarCard className="small-car" name="Lamborghini Huracan" image="/media/lamborgene car.png" price={1000} reviews="4.8 (1,950 reviews)" />

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
    </div>
  );
}
