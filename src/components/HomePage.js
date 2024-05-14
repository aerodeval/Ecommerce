import React from 'react'
import NavbarEz from './NavbarTop'
import Carousel from './Carousel'
import cimage from '../imgs/Frame 560.png'
import ItemCard from './ItemCard'
export default function HomePage() {
  return (
    <div>

      <header className='bg-black h-20 text-center text-white py-4 flex justify-between'>
        <div></div>
        <div className='flex justify-items-center'>
          <div>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </div>
          <div className='underline font-bold px-5'>
            Shop Now
          </div>
        </div>

        <div className='flex justify-end px-10'>
          <div>


          </div>
        </div>
      </header>
      <div>
        <NavbarEz></NavbarEz>

      </div>
<section>
      <div className='flex flex-row'>
      <div className='basis-1/4'>
        <ul className='shop-sections text-left pl-20 items-center'>


          <div className='flex items-center justify-between relative '>
          <li className='womens'>Woman’s Fashion</li>
          <svg  className='absolute right-5' width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z" fill="black" />
                </svg>
                </div>
             
            <div className='flex items-center justify-between relative'>
        
                <li  className='mens'>Men’s Fashion</li>
             
             
                <svg  className='absolute right-5' width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z" fill="black" />
                </svg>

            </div>
                    <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li> Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>



      </div>
      <div className='carousel' >
 {/* <Carousel></Carousel> */}
     <img src={cimage}></img>
      </div>


      </div>
      </section>
      <section>
        <div className='pl-20 pr-20'>  
          <p className='flex justify-start tab items-center'>Today's</p>
          <div className='flex justify-between'>
        <h1 className='flex justify-start section-title'>Flash Sales</h1>
        <div className='flex justify-end'>
          <div className='flex'>
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="23" cy="23" r="23" fill="#F5F5F5"/>
<path d="M22 16L15 23L22 30M15 23H31" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="23" cy="23" r="23" fill="#F5F5F5"/>
<path d="M14.5 23H31M31 23L24 16M31 23L24 30" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


          </div>
        </div>
        </div>
        </div>

        <div>
          <ItemCard></ItemCard>
        </div>
      </section>

    </div>
  )
}
