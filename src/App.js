import React, { useEffect, useState } from 'react';
import  './App.css';
import Navbar from './NavBar';
import HomeCarousel from './HomeCarousel';
import Imagecard from './Imagecard';
// import data from './data';


const ncard =(val)=>{
  return(
    <Imagecard
    title={val.title}
    imgurl={val.images[0]}
    desc={val.desc}
    />
  )
}

function App() {
  const [Data, SetData]=useState([]);
  useEffect(()=>{
    const fetchdata = async ()=>{
      try{

        const response = await fetch ("https://dummyjson.com/products");
        const Data = await response.json();
        console.log(Data.products)
        SetData(Data.products);

        

      }
      catch (error){
        console.log("Error occured", error);
      }
    };
    fetchdata();
  
  },[]);
  return (
    <div>
       <Navbar />
       <HomeCarousel />
       
      
       <div className='ProjectCard'>
        {
          Data.map((val,index)=>(
            <div key={val.id} className='col-md-3'>
              {ncard(val)}
            </div>
          ))
        }
       </div>
    </div>

  );
}

export default App;
