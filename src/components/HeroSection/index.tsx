import React from 'react'
import style from './style.module.scss'
import Image from 'next/image';
import image1 from '../../../public/images/57533 [Converted] 1.png'
import image_2 from '../../../public/images/GovLogo.png'
import Elephantlogo from '../../../public/images/Elephantlogo.png'
import KumarSwamy from '../../../public/images/Kumarswamy.png'
import DkshivrajKumar from '../../../public/images/dkshivkumar.png'
import hcmadevappa from '../../../public/images/hcmadevappa.png'
import shivraj from '../../../public/images/shivraj.png'
import Elephant from '../../../public/images/Elephant.png'
import GoldenStick from '../../../public/images/GoldenStick.png'
import stick from '../../../public/images/stick (2).png'

function HeroSection() {
  return (
    <>
    <div className={style.bg}>
      <div className={style.bg_arch}>
        <div>
        <div className='flex justify-center items-center w-full'>
            <Image className='mt-4' unoptimized src={image1} alt={"image1"} width={180} height={100}/>
        </div>
        <div className='flex justify-between items-center px-4 gap-12'>
            <p className='font-bold text-3xl ' style={{color:"#FFF504"}}><span className='text-center pl-12 '>ನಾಡ ಹಬ್ಬ</span> <br />ಮೈಸೂರು ದಸರಾ - ೨೦೨೩</p>
            <Image className='mt-8 mr-8' unoptimized src={image_2} alt={"image1"} width={150} height={120}/>
          

            <Image className={`mt-8 mr-8 ${style.redlogobg}`} unoptimized src={Elephantlogo} alt={"image1"} width={155} height={120}/>
           
            <p className='font-bold text-3xl pr-4' style={{color:"#FFF504"}}><span className='text-center pl-8 '>Naada Habba</span> <br />Mysore Dasara - 2023</p>
            
        </div>
        <div className='flex justify-between items-center px-8'>
            <div className='flex gap-12'>
               <Image src={KumarSwamy} alt={'KumarSwamy'} width={150} height={120} />
               <Image src={DkshivrajKumar} alt={'DkshivrajKumar'} width={150} height={120} /> 

            </div>
            <div className='flex gap-12'>
               <Image src={hcmadevappa} alt={'hcmadevappa'} width={150} height={120}/>
               <Image src={shivraj} alt={'shivraj'} width={150} height={120}/> 

            </div>
            
         </div>
       
            <div className='flex justify-center items-center'>
            <div className={style.bg_elephant}>

              </div>
            </div>
            
        </div>
        
      </div>
      
    </div>
    <div className={style.Time_bg}>
        <div className='mx-auto' style={{margin:"0 auto" ,maxWidth:"1200px"}}>
            <div className='flex justify-center items-center  pt-24 '>
               <p className='text-7xl font-semibold' style={{color:"#FFF504", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>ಕ್ಷಣಗಣನೆ ಪ್ರಾರಂಭ!</p> 
            </div>
            <div className='mt-12'>
                <Image src={stick} alt={'GoldenStick'}/>
            </div>
            <div className='flex justify-center items-center   '>
               <p className='text-7xl font-semibold' style={{color:"#FFF504", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>ನಾಡ ಹಬ್ಬ ಮೈಸೂರು ದಸರಾ</p> 
            </div>
            <div className='flex justify-center items-center pt-8' style={{color:"#fff"}}>
                <p className=' w-[70%] break-word '>‘ಮೈಸೂರು ದಸರಾ ಎಷ್ಟೊಂದು ಸುಂದರ’..... ಸಾಂಸ್ಕೃತಿಕ ನಗರಿ ಮೈಸೂರಿನಲ್ಲಿ ಸುಂದರ, ಸಡಗರ, ಸಂಭ್ರಮಕ್ಕಿರುವ ಇನ್ನೊಂದು ಹೆಸರೇ ದಸರಾ. ವಿಜಯನಗರ ಅರಸರಿಂದ ಆರಂಭವಾದ ಈ ಭವ್ಯ ವೈಭವಕ್ಕೆ ನಾಡಿನಲ್ಲಿ ಸಾಕಷ್ಟು ಮನ್ನಣೆ, ಪ್ರಾಮುಖ್ಯತೆ ದೊರಕಿದೆ. ಸುದೀರ್ಘ ಇತಿಹಾಸವಿರುವ ದಸರಾ ‘ಕರ್ನಾಟಕದ ನಾಡಹಬ್ಬ’ ಎಂದೇ ಪ್ರಸಿದ್ಧಿಯಾಗಿದೆ. ವಿಶ್ವವಿಖ್ಯಾತ ಮೈಸೂರು ದಸರಾ ಕರ್ನಾಟಕ ಸರ್ಕಾರ ನಡೆಸಿಕೊಂಡು ಬರುತ್ತಿರುವ ಅತ್ಯಂತ ದೊಡ್ಡ ಹಬ್ಬವಾಗಿದೆ.</p>
            </div>
            <div className='mt-12'>
                <Image src={GoldenStick} alt={'GoldenStick'}/>
            </div>
        </div>
    </div>
    </>
    
    
  )
}

export default HeroSection;
