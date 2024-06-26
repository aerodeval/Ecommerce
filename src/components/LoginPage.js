import React from 'react'
import Footer from './Footer'
import NavbarEz from './NavbarTop'
import { Link } from 'react-router-dom'
export default function LoginPage() {

    const database = [
        {
          username: "user1",
          password: "pass1"
        }
      ];

    function handleClick( username,password){
        if(username==database[0].username && password==database[0].password){
            console.log("loggedin")
                
        }
    }
  return (
    <div>


    <div className='flex gap-[129px]  items-center pt-[60px] pb-[140px]'>
      <div className='w-1/2  hidden md:block'>
    <img src={require('../imgs/Side Image.png')} />
    </div>
    <div className='w-[371px]  flex flex-col justify-center  container col '>
      <h1 className='text-[36px] font-[500] text-left'>Log in to Exclusive</h1>
      <p className='text-[16px] font-[400] text-left'>Enter your details below</p>
      <div className='flex flex-col gap-[40px] pt-[48px] pb-[40px]'>
      <input  id='uname' className=' text-[16px] sign-up p-2' placeholder='Email or Phone Number'></input>  
      <input id='pass'  className=' text-[16px] sign-up p-2' placeholder='Password'></input>
      </div>
      <div className='log-pass-section flex gap-[87px] items-center'>
          <div className='bg-[#DB4444] mb-[16px] rounded-md ' >
        <button type='submit'  onClick={()=>{  
            const username=document.getElementById('uname').value
            const password=document.getElementById('pass').value

                handleClick(username,password)}} className='text-white py-[16px]  px-[48px] '>Login </button>
        </div>
        <div>
            <p className='text-[#DB4444]'>Forgot Password</p>
        </div>
        </div>

   

    </div>
    </div>
 
</div>
  )
}
