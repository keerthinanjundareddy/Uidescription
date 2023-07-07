import React from 'react'
import './Singlepage.css'
import ClothingLogo from '../src/Images/RenergiiLogo_Blue.png'
import urbantiller from '../src/Images/ut.png'
import Ayatana from '../src/Images/Ayatana_logo_final 2.png'

import mycovation from '../src/Images/cr=w_365,h_365.png'
import feedworkz from '../src/Images/rs=w_365,h_183,cg_true (1).png'
import untact from '../src/Images/unta.png'


import facebook from '../src/Images/facebook-round-color-2021-icon.png'
import instagram from '../src/Images/linkedin-app-icon (1).png'

import { Link } from 'react-router-dom';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import Email from '../images/Emails.png';
// import Phone from '../images/phone.png';

function Singlepage() {

  function handleFeedworkz(){
    window.open('https://www.feedwerkz.com/', '_blank');

  }

  function handleAyatana(){
    window.open('http://ayatana.world/', '_blank');
  }

  function handleuntact(){
    window.open('', '_blank');
  }

  function handlemycovation(){
    window.open('https://www.mycovation.asia/', '_blank');
  }

  function handleurbantiller(){
    window.open('https://urbantiller.sg/', '_blank');
  }

  function handlefacebook(){
    window.open('https://www.facebook.com/renergii/', '_blank');
  }


  function handleinstagram(){
    window.open('https://www.linkedin.com/company/renergii', '_blank');
  }


  return (
    <>
      <div className='full-page-containers' >
       
        <div className="Aboutus-first-header-section" style={{textAlign:"center"}} >
                 <img src={ClothingLogo} alt="logo" className='Aboutuslogo-icon'  />
        </div>

      
        {/* <div style={{color:"black"}}>WHAT'S BUILDING</div> */}

        <div className='flexbox-container'>


        <div class="card-container">
           {/* <img src={urbantiller} alt="Avatar" style={{width:"100%"}} /> */}
             {/* <div class="container"> */}
    {/* <h4><b>John Doe</b></h4>  */}
    <p className='heading-tag'><b>WHAT'S BUILDING</b> </p> 
  </div>
{/* </div> */}


         


       




<div class="card">

  <div>
  
    <img src={urbantiller} alt="Avatar" style={{width:"100%"}} onClick={handleurbantiller} />
  
  </div>
             <div class="container">
    {/* <h4><b>John Doe</b></h4>  */}
   
    <p><b>Urban Tiller</b> is a full-stack AgTech company building a direct-to-consumer platform to deliver #Fresh, #Safe and #SustainablyGrown produce  </p> 
    
  </div>
</div>



<div class="card">

  <div> <img src={mycovation} alt="Avatar" style={{width:"100%"}} onClick={handlemycovation} />
  </div>
             <div class="container">
    {/* <h4><b>John Doe</b></h4>  */}
    <p><b>Mycovation</b>is an alternative food products company transforming mycelium (the root system of mushrooms) into exciting food products. </p> 
  </div>
</div>

<div class="card">
 <img src={feedworkz} alt="Avatar" style={{width:"100%"}}  onClick={handleFeedworkz} />
             <div class="container">
    {/* <h4><b>John Doe</b></h4>  */}
    <p><b>FeedWerkz</b> is a sustainable nutrients startup delivering custom-blended proteins and other additives to the pet food, aquafeed, pharma and human wellness industries</p> 
  </div>
</div>

<div class="card">
<img src={Ayatana} alt="Avatar" style={{width:"100%"}}  onClick={handleAyatana} />
             <div class="container">
    {/* <h4><b>John Doe</b></h4>  */}
    <p><b>Ayatana</b> A retail experience company which is aimed at redefining the way retail is experienced. Ayatana focuses around Phygital at retail stores giving some interesting immersive product experience for the consumers</p> 
  </div>
</div>


<div class="card">
 <img src={untact} alt="Avatar" style={{width:"100%"}} onClick={handleuntact}/>
             <div class="container">
    {/* <h4><b>John Doe</b></h4>  */}
    <p><b>Untact</b>With a powerful technology infrastructure, artificial intelligence, and readily available telecallers, our outsourcing platform effortlessly handles your outbound calling operations.</p> 
  </div>
</div>


<div class="card">
           {/* <img src={untact} alt="Avatar" style={{width:"100%"}} /> */}
             <div class="container-twos">
              <div>
             <img src={facebook} alt="Avatar" width={30} height={30} onClick={handlefacebook}  />
             </div>
             <div>
             <img src={instagram} alt="Avatar"  width={30} height={30} onClick={handleinstagram} />
             </div>
    {/* <h4><b>John Doe</b></h4>  */}
    {/* <p><b>Untact</b>With a powerful technology infrastructure, artificial intelligence, and readily available telecallers, our outsourcing platform effortlessly handles your outbound calling operations.</p>  */}
  </div>
</div>


<div class="card">
           {/* <img src={untact} alt="Avatar" style={{width:"100%"}} /> */}
             <div class="container-threes">
            <div>COPYRIGHT © 2021 RENERGII VENTURES - ALL RIGHTS RESERVED.</div> 
             {/* <img src={facebook} alt="Avatar" /> */}
             {/* <img src={instagram} alt="Avatar" /> */}
    {/* <h4><b>John Doe</b></h4>  */}
    {/* <p><b>Untact</b>With a powerful technology infrastructure, artificial intelligence, and readily available telecallers, our outsourcing platform effortlessly handles your outbound calling operations.</p>  */}
  </div>
</div>



          </div>


              </div>
   
      
    </>
  )
}

export default Singlepage