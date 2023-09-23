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
            <div>
                
            </div>
        </div>
    </div>
    </>
    
    
  )
}

export default HeroSection;
