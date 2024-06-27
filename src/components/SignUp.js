import React from 'react'
import NavbarEz from './NavbarTop'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
<div>

    <div className='flex gap-[129px] justify-center  items-center pt-[60px] pb-[140px]'>
      <div className='w-1/2 hidden md:block'>
    <img src={require('../imgs/Side Image.png')} />
    </div>
    <div className='w-[371px] flex flex-col justify-center  '>
      <h1 className='text-[36px] font-[500] text-left'>Create an account</h1>
      <p className='text-[16px] font-[400] text-left'>Enter your details below</p>
      <div className='flex flex-col gap-[40px] pt-[48px] pb-[40px]'>
      <input className='border-b-[#000000] text-[16px] sign-up w-[370px] p-2' placeholder='Name'></input>
      <input className='w-[370px] text-[16px] sign-up p-2' placeholder='Email or Phone Number'></input>  
      <input type='password' className='w-[370px] text-[16px] sign-up p-2' placeholder='Password'></input>
      </div>
      <div className='bg-[#DB4444] mb-[16px]' >
        <button className='text-white py-[16px]  rounded-md'>Create Account </button>
        </div>
        <div className='flex flex-col gap-[32px]'>          <div  className='flex justify-center border-solid border-[1px] border-[#00000063] rounded-md'>        
            
            <button className='flex gap-[16px]  px-[66px] py-[16px] '>
        <div><img src={require('../imgs/Icon-Google.png')} ></img></div>
        <div >Sign Up With Google</div>
        </button>
        </div>

      
      
      <div className='flex gap-[10px] justify-center'>
        <h1>
    Already have account? </h1>


    <Link to="/LogIn" className='underline'>Log in</Link>
      </div>
      </div>

    </div>
    </div>

</div>
  )
}
