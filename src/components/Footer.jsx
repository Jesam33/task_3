import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const Footer = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-4  py-9 px-11 bg-[#2C2C2C] text-[#fff]'>
      <div className="logo block">
      <img src="/src/assets/Group 11 1.png" width={100} alt="logo" />
      </div>
      <div className="information">
        <h2 className='mb-4 mt-8 md:mt-0 text-[18px] font-[400]'>Informatiom</h2>
        <div className="dov flex text-center items-center md:text-left flex-wrap gap-3 md:block">
        <p className='mt-3 text-[13px]'>Main</p>
        <p className='mt-3 text-[13px]'>Gallery</p>
        <p className='mt-3 text-[13px]'>Projects</p>
        <p className='mt-3 text-[13px]'>Certifications</p>
        <p className='mt-3 text-[13px]'>Contact</p>
        </div>
        
      </div>
      <div className="contacts mt-10 md:mt-0 block">
        <h2 className='mb-4 text-[18px] '>Contacts</h2>
        <p className='mt-3 text-[13px]'> <span><PlaceIcon  /> </span>1234 Sample street <br/> Austin Texas 78704</p> 
        <p className='mt-5 text-[13px]'> <span><PhoneIcon /> </span> 512.333.2222</p>
        <p className=' mt-4 md:mt-8 text-[13px]'> <span><MailIcon /> </span> sampleemail@gmail.com</p>
      </div>
      <div className="socials items-center  mt-10 md:mt-0 ">
        <h2 className='mb-2 text-[17px] '>Social Media</h2>
        <div className="flex gap-4 items-center">
        <p><FacebookRoundedIcon /></p>
        <p><XIcon /></p>
        <p><LinkedInIcon /></p>
        <p><PinterestIcon /></p>
        </div>
      </div>
    </div>
    <div className="copyright"></div>
    </>
  )
}

export default Footer
