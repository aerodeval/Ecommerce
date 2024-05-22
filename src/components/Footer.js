import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#000000]'>
    <div className='flex  text-[#FFFFFF] gap-[87px] justify-center text-left pt-[80px] '>
        <div className=' flex flex-col gap-[16px] '> 

            <h1 className='font-[700] text-[24px]'>Exclusive</h1>
            <p className='text-[20px] font-[500]'>Subscribe</p>
            <p className='text-[16px]'>Get 10% off your first order</p>
            <div className='flex send-email items-center'>
                <div className='w-[180px] py-[12px] pl-[16px] pr-[32px]'>
                    <input className='w-[180px] bg-[#000000]' placeholder='Enter your email'></input>
                
                </div>
                <div className='pr-[15px]'><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.91199 9.9998H2.99999L1.02299 2.1348C1.01033 2.0891 1.00262 2.04216 0.999989 1.9948C0.977989 1.2738 1.77199 0.773804 2.45999 1.1038L21 9.9998L2.45999 18.8958C1.77999 19.2228 0.995989 18.7368 0.999989 18.0288C1.00201 17.9655 1.01313 17.9029 1.03299 17.8428L2.49999 12.9998" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    
                </div>

            </div>
        </div>
        <div className=' flex flex-col gap-[16px] '>
            <h1 className='text-[20px] font-[500]'>Support</h1>
            <p className='text-[16px]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p className='text-[16px]' >exclusive@gmail.com</p>
            <p className='text-[16px]'>+88015-88888-9999</p>
        </div>
        <div className=' flex flex-col gap-[16px] '>
            <h1 className='text-[20px] font-[500]'>Account</h1>
            <p className='text-[16px]'>My Account</p>
            <p className='text-[16px]' >Login / Register</p>
            <p className='text-[16px]'>Cart</p>
            <p className='text-[16px]'>Wishlist</p>
            <p className='text-[16px]'>Shop</p>
        </div>
        <div className=' flex flex-col gap-[16px] '>
            <h1 className='text-[20px] font-[500]'>Quick Link</h1>
            <p className='text-[16px]'>Privacy Policy</p>
            <p className='text-[16px]'>Terms of use</p>
            < p className='text-[16px]'>FAQ</p>
            <p className='text-[16px]'>Contact</p>
            
        </div>
        <div className=' flex flex-col gap-[16px] '>
            <h1 className='text-[20px] font-[500]'>Download App</h1>
            <p>Save $3 with App New User Only</p>
            <div className='flex gap-[8px]'>
                <div>
                <img src={require('../imgs/Qrcode 1.png')} />


                </div>
                <div className='download flex flex-col gap-[4px]'>
                <img src={require('../imgs/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png')} />
                <img src={require('../imgs/download-appstore.png')} />


                </div>

            </div>
            <div className='flex gap-[24px]'>
            <img src={require('../imgs/Icon-Facebook.png')} />
            <img src={require('../imgs/Icon-Twitter.png')} />
            <img src={require('../imgs/icon-instagram.png')} />
            <img src={require('../imgs/Icon-Linkedin.png')} />


            </div>
        </div>
    </div>
    {/* <hr className='divider'></hr> */}
    <p>Copyright Rimel 2022. All right reserved</p>
    </div>
  )
}
