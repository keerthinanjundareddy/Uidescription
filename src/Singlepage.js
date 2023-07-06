import React from 'react'
import './Singlepage.css'
import ClothingLogo from '../src/Images/Circular logo.png'
import Ayatana from '../src/Images/Ayatana_logo_final 2.png'
import Untact from '../src/Images/Untact (2).png'
import Riilearn from '../src/Images/Riilearn (2).png'
import Optifarm from '../src/Images/Optifarm (2).png'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import Email from '../images/Emails.png';
// import Phone from '../images/phone.png';

function Singlepage() {

    const handleClick = () => {
        window.location.href = 'http://xircular.io/';
      };


  return (
    <>
      <div className='full-page-containers' >
       
        <div className="Aboutus-first-header-section">
                 <img src={ClothingLogo} alt="logo" className='Aboutuslogo-icon'  />
        </div>

        {/* <div className='card-container'> */}


        <div className='flexbox-container'>
       
           <div className='flexbox-containers-two'>
                <div  className='item-sectionss' >
                    {/* <div style={{width:"100%",height:"100%"}}><img src={Ayatana} alt='images' style={{width:"100%",height:"100%",objectFit:"contain"}} /></div> */}
                    <div className='text-container'><b>Ayatana</b></div>
                 </div>

                 
                <div  className='item-sections'>
                    {/* <div style={{width:"100%",height:"100%"}}><img src={Untact} alt='images' style={{width:"100%",height:"100%",objectFit:"cover"}} /></div> */}
                    <div  className='text-container'><b>Untact</b></div>
                    </div>

                    <div  className='item-sections'>
                    {/* <div style={{width:"100%",height:"100%"}}><img src={Riilearn} alt='images' style={{width:"100%",height:"100%",objectFit:"cover"}} /></div> */}
                    <div  className='text-container'><b>Riilearn</b></div>
                    </div>

                    <div  className='item-sections'>
                    {/* <div style={{width:"100%",height:"100%"}}><img src={Optifarm } alt='images' style={{width:"100%",height:"100%",objectFit:"cover"}} /></div> */}
                    <div  className='text-container'><b>Optifarm</b></div>
                    </div>


                    </div>

                    </div>
    
        </div> 
        <div className='contact-information'>
            <div>
                     <h1 style={{textAlign:"center"}}>Contact Details</h1>
            </div>

        </div>

    {/* </div> */}
      
    </>
  )
}

export default Singlepage