import React, { useState } from 'react'
import NavbarEz from './NavbarTop'
import { Outlet, Link } from "react-router-dom";


import Carousel from './Carousel'
import Timer from '@joseavilasg/react-compound-timer'
import cimage from '../imgs/Frame 560.png'
import aimage from '../imgs/Frame 600.png'
import mimage from '../imgs/ps5-slim-goedkope-playstation_large 1.png'
import bimage from '../imgs/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png'
import zimage from '../imgs/652e82cd70aa6522dd785109a455904c.png'
import ximage from '../imgs/attractive-woman-wearing-hat-posing-black-background 1.png'



import ItemCard from './ItemCard'
import GeneralCard from './GeneralCard'
import NewCard from './NewCard'
import Footer from './Footer'


export default function HomePage() {
  const [favs, setFavs] = useState([]);
  const [favslen,setLen]=useState()

  const addToFavs = (itemId, itemDesc) => {
    // Check if the item already exists in favs before adding it
    const existingItemIndex = favs.findIndex(item => item.itemId === itemId);
    if (existingItemIndex === -1) {
      setFavs([...favs, { itemId, itemDesc }]);
    }
    setLen(
    favslen=favs.length()
    )
  };
  return (
    <div>
      <div>
        <NavbarEz favs={favslen}></NavbarEz>

      </div>
      <section className='pb-[147px]'>
        <div className='flex flex-row'>
          <div className='basis-1/4'>
            <ul className='shop-sections text-left pl-20 items-center'>


              <div className='flex items-center justify-between relative '>
                <li className='womens'>Woman’s Fashion</li>
                <svg className='absolute right-5' width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z" fill="black" />
                </svg>
              </div>

              <div className='flex items-center justify-between relative'>

                <li className='mens'>Men’s Fashion</li>


                <svg className='absolute right-5' width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <section >
        <div className='pl-20 pr-20 flex justify-between items-center'>
          <div>
          <p className='flex justify-start tab items-center'>Today's</p>
          <div className='flex gap-[87px] items-center'>

            <h1 className='flex justify-start section-title '>Flash Sales</h1>

            <div className='flex gap-[17px] timer-text items-center timer-clock'>
              <Timer
                initialTime={3133355000}
                direction="backward"
              >
                {() => (
                  <React.Fragment>
                    <div className='items-start'>
                      <p className='font-[500] text-[12px]'>Days</p>
                      <Timer.Days className="font-[700] text-[32px]" />
                    </div>
                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#E07575" />
                      <circle cx="2" cy="14" r="2" fill="#E07575" />
                    </svg>

                    <div className='items-start'>
                      <p className='font-[500] text-[12px]'>Hours</p>
                      <Timer.Hours  className="font-[700] text-[32px]" />
                    </div>
                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#E07575" />
                      <circle cx="2" cy="14" r="2" fill="#E07575" />
                    </svg>

                    <div className='items-start'>
                      <p className='font-[500] text-[12px]'>Minutes</p>
                      <Timer.Minutes className="font-[700] text-[32px]" />
                    </div>
                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#E07575" />
                      <circle cx="2" cy="14" r="2" fill="#E07575" />
                    </svg>

                    <div className='items-start'>
                      <p className='font-[500] text-[12px]'>Seconds</p>
                      <Timer.Seconds className="font-[700] text-[32px]" />
                    </div>
                  </React.Fragment>
                )}
              </Timer>
            </div>
         
          </div>
          </div>
          <div>
          <div className='flex justify-end'>
              <div className='flex'>
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                  <path d="M22 16L15 23L22 30M15 23H31" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                  <path d="M14.5 23H31M31 23L24 16M31 23L24 30" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>


              </div>
            </div>
          </div>
        </div>

        <div className='overflow-hidden'>
          <ItemCard addToFavs={addToFavs}></ItemCard>
        </div>

        <div className='flex justify-center pb-10  '>
          <h1 className='text-white p-[10px] px-[48px] bg-[#DB4444] rounded-md '> View All Products</h1>
        </div>
        <div className=' flex justify-center items-center pb-[80px]'>
          <div className='bottom-sep'>  </div>
        </div>
      </section>
      <section>

        <div className='pl-20 pr-20'>
          <p className='flex justify-start tab items-center'>Categories</p>
          <div className='flex justify-between items-center'>
            <h1 className='flex justify-start section-title '>Browse By Category </h1>


            <div className='flex justify-end'>
              <div className='flex'>
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                  <path d="M22 16L15 23L22 30M15 23H31" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                  <path d="M14.5 23H31M31 23L24 16M31 23L24 30" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>


              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center pt-[60px]'>
          <div className='flex px-10 phone'>
            <div className='min-w-[170px]  sec-card min-h-[145px] justify-center border-solid border-[1px] border-[#0000004D] rounded-md flex-col flex items-center' >
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_904_868)">
                  <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M25.6667 7H31.1354" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M28 44.0052V44.0305" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <line x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" stroke="black" stroke-width="2" />
                </g>
                <defs>
                  <clipPath id="clip0_904_868">
                    <rect width="56" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className='font-[24px] font-[400]'>Phones</p>
            </div>

          </div>

          <div className='flex px-10 computer  '>
            <div className='min-w-[170px]  sec-card min-h-[145px] justify-center border-solid border-[1px] border-[#0000004D] rounded-md flex-col flex items-center' >
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_904_613)">
                  <path d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.3333 46.6666H39.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21 37.3334V46.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M35 37.3334V46.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8 32H48" stroke="black" stroke-width="2" stroke-linecap="round" />
                </g>
                <defs>
                  <clipPath id="clip0_904_613">
                    <rect width="56" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className='font-[24px] font-[400]'>Computers</p>
            </div>

          </div>


          <div className='flex px-10 smartwatch  '>
            <div className='min-w-[170px] sec-card min-h-[145px] justify-center border-solid border-[1px] border-[#0000004D] rounded-md flex-col flex items-center' >
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_904_629)">
                  <path d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21 42V49H35V42" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21 14V7H35V14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <line x1="24" y1="23" x2="24" y2="34" stroke="black" stroke-width="2" stroke-linecap="round" />
                  <line x1="28" y1="28" x2="28" y2="34" stroke="black" stroke-width="2" stroke-linecap="round" />
                  <line x1="32" y1="26" x2="32" y2="34" stroke="black" stroke-width="2" stroke-linecap="round" />
                </g>
                <defs>
                  <clipPath id="clip0_904_629">
                    <rect width="56" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>


              <p className='font-[24px] font-[400]'>Smartwatch</p>
            </div>

          </div>

          <div className='flex px-10 Camera '>
            <div className='min-w-[170px] sec-card min-h-[145px] justify-center border-solid border-[1px] border-[#0000004D] rounded-md flex-col flex items-center' >
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_904_6)">
                  <path d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_904_6">
                    <rect width="56" height="56" fill="black" />
                  </clipPath>
                </defs>
              </svg>


              <p className='font-[24px] font-[400]'>Camera</p>
            </div>

          </div>

          <div className='flex px-10 Headphones  '>
            <div className='min-w-[170px] sec-card min-h-[145px] justify-center border-solid border-[1px] border-[#0000004D] rounded-md flex-col flex items-center' >
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_904_644)">
                  <path d="M16.3333 30.3334H14C11.4227 30.3334 9.33331 32.4227 9.33331 35V42C9.33331 44.5774 11.4227 46.6667 14 46.6667H16.3333C18.9106 46.6667 21 44.5774 21 42V35C21 32.4227 18.9106 30.3334 16.3333 30.3334Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M42 30.3334H39.6667C37.0893 30.3334 35 32.4227 35 35V42C35 44.5774 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5774 46.6667 42V35C46.6667 32.4227 44.5773 30.3334 42 30.3334Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.33331 35V28C9.33331 23.0493 11.3 18.3014 14.8007 14.8007C18.3013 11.3 23.0493 9.33337 28 9.33337C32.9507 9.33337 37.6986 11.3 41.1993 14.8007C44.7 18.3014 46.6666 23.0493 46.6666 28V35" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_904_644">
                    <rect width="56" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>



              <p className='font-[24px] font-[400]'>Headphones</p>
            </div>

          </div>

          <div className='flex px-10 gaming '>
            <div className='min-w-[170px] sec-card min-h-[145px] justify-center border-solid border-[1px] border-[#0000004D] rounded-md flex-col flex items-center' >
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_904_809)">
                  <path d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M14 28H23.3333M18.6667 23.3334V32.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M35 25.6666V25.6908" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M42 30.3333V30.3574" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_904_809">
                    <rect width="56" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>




              <p className='font-[24px] font-[400]'>Gaming</p>
            </div>

          </div>

        </div>
        <div className=' flex justify-center items-center pb-[80px]'>
          <div className='bottom-sep pt-[70px]'>  </div>
        </div>

      </section>
      <section>
        <div className='pl-20 pr-20'>
          <p className='flex justify-start tab items-center'>This Month</p>
          <div className='flex justify-between items-center'>

            <h1 className='flex justify-start section-title '>Best Selling Products</h1>
            <div className='flex justify-end'>

              <div className='flex justify-center  '>
                <h1 className='text-white px-[48px] py-[13px] bg-[#DB4444] rounded-md '> View All</h1>
              </div>

            </div>
          </div>
        </div>
        <div className='overflow-hidden'>        <ItemCard></ItemCard>
        </div>

      </section>
      <section>
        <div className='flex justify-center'>
          <img src={aimage}></img>
        </div>
      </section>
      <section>
      <div className='overflow-hidden'>  
        <GeneralCard></GeneralCard>
        </div>
      </section>
      <section>
      <div className='overflow-hidden'>  
        <NewCard></NewCard>
        </div>
        <div className='flex justify-center pb-10  '>
          <h1 className='text-white p-[10px] bg-[#DB4444] rounded-md '> View All Products</h1>
        </div>
      </section>
      <section>
        <div className='pl-20 pr-20'>
          <p className='flex justify-start tab items-center'>Featured</p>
          <div className='flex justify-between items-center'>

            <h1 className='flex justify-start section-title '>New Arrivals</h1>
            <div className='flex justify-end'>



            </div>
          </div>
        </div>
        <div className='flex gap-[30px] justify-center'>
          <div className=''>
            <div className='max-w-[570px] max-h-[600px] bg-[#000000] ml-20 flex items-center relative text-[#FFFFFF] pl-5'>
              <img className='pt-[89px]' src={mimage}></img>
              <div className='absolute bottom-5   text-left '>
                <div className='max-w-[242px]'>
                  <h1 className='font-[600] text-[24px]'>Playstation 5</h1>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <p className='underline'>Shop Now</p>
                </div>
              </div>
            </div>
          </div>
          <div className=' flex flex-col gap-[32px]'>
            <div className='max-w-[570px] max-h-[284px] bg-[#0D0D0D]  flex items-center justify-center relative text-[#FFFFFF] '>
              <img   src={ximage}></img>
              <div className='absolute bottom-5 left-2 text-left '>
                <div className='max-w-[255px]'>
                  <h1 className='font-[600] text-[24px]'>Women’s Collections</h1>
                  <p>Featured woman collections that give you another vibe.</p>
                  <p className='underline'>Shop Now</p>
                </div>
              </div>
            </div>
            <div className='flex gap-[32px] '>
              <div className='w-[270px] h-[284px] bg-[#000000]  flex items-center justify-center relative text-[#FFFFFF] '>
                <img className='' src={bimage}></img>
                <div className='absolute bottom-5  left-2 text-left '>
                  <div>
                    <h1 className='font-[600] text-[24px]'>Speakers</h1>
                    <p>Amazon wireless speakers.</p>
                    <p className='underline'>Shop Now</p>
                  </div>
                </div>
              </div>
              <div className='w-[270px] h-[284px] bg-[#000000]  flex items-center justify-center  relative text-[#FFFFFF] '>
                <img className='' src={zimage}></img>
                <div className='absolute bottom-5  left-2 text-left '>
                  <div>
                    <h1 className='font-[600] text-[24px]'>Perfume</h1>
                    <p>GUCCI INTENSE OUD EDP.</p>
                    <p className='underline'>Shop Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
<div className='flex justify-center gap-[88px] pt-[88px] pb-[140px]'>
   
  <div className=' flex flex-col items-center '>
      <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z" fill="#2F2E30"/>
<circle cx="40.5" cy="40" r="29" fill="black"/>
<g clip-path="url(#clip0_969_331)">
<path d="M32.1667 51.6667C34.0076 51.6667 35.5 50.1743 35.5 48.3333C35.5 46.4924 34.0076 45 32.1667 45C30.3257 45 28.8333 46.4924 28.8333 48.3333C28.8333 50.1743 30.3257 51.6667 32.1667 51.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.8333 51.6667C50.6743 51.6667 52.1667 50.1743 52.1667 48.3333C52.1667 46.4924 50.6743 45 48.8333 45C46.9924 45 45.5 46.4924 45.5 48.3333C45.5 50.1743 46.9924 51.6667 48.8333 51.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.8333 48.3335H27.5C26.3954 48.3335 25.5 47.4381 25.5 46.3335V41.6668M23.8333 28.3335H40.1666C41.2712 28.3335 42.1666 29.2289 42.1666 30.3335V48.3335M35.5 48.3335H45.5M52.1667 48.3335H53.5C54.6046 48.3335 55.5 47.4381 55.5 46.3335V38.3335M55.5 38.3335H42.1666M55.5 38.3335L51.0826 30.9712C50.7211 30.3688 50.0701 30.0002 49.3676 30.0002H42.1666" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.5 48H27.1667C26.0621 48 25.1667 47.1046 25.1667 46V41.3333M23.5 28H39.8333C40.9379 28 41.8333 28.8954 41.8333 30V48M35.5 48H45.1667M52.5 48H53.1667C54.2712 48 55.1667 47.1046 55.1667 46V38M55.1667 38H41.8333M55.1667 38L50.7493 30.6377C50.3878 30.0353 49.7368 29.6667 49.0343 29.6667H41.8333" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.5 31.8184H32.1667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.3182 35.4546H28.9848" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.5 39.0908H32.1667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_969_331">
<rect width="40" height="40" fill="white" transform="translate(20.5 20)"/>
</clipPath>
</defs>
</svg>

<h1 className='text-[20px] font-[600]'>FREE AND FAST DELIVERY </h1>
<p className='text-[14px] font-[400]'>Free delivery for all orders over $140</p>
</div>
<div className='flex flex-col items-center'>
<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z" fill="#2F2E30"/>
<circle cx="40" cy="40" r="29" fill="black"/>
<g clip-path="url(#clip0_969_348)">
<path d="M33.3334 44.9998C33.3334 43.1589 31.841 41.6665 30 41.6665C28.1591 41.6665 26.6667 43.1589 26.6667 44.9998V48.3332C26.6667 50.1741 28.1591 51.6665 30 51.6665C31.841 51.6665 33.3334 50.1741 33.3334 48.3332V44.9998Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M53.3334 44.9998C53.3334 43.1589 51.841 41.6665 50 41.6665C48.1591 41.6665 46.6667 43.1589 46.6667 44.9998V48.3332C46.6667 50.1741 48.1591 51.6665 50 51.6665C51.841 51.6665 53.3334 50.1741 53.3334 48.3332V44.9998Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.6667 44.9998V39.9998C26.6667 36.4636 28.0714 33.0722 30.5719 30.5717C33.0724 28.0713 36.4638 26.6665 40 26.6665C43.5362 26.6665 46.9276 28.0713 49.4281 30.5717C51.9286 33.0722 53.3334 36.4636 53.3334 39.9998V44.9998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M50 51.6665C50 52.9926 48.9464 54.2644 47.0711 55.202C45.1957 56.1397 42.6522 56.6665 40 56.6665" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_969_348">
<rect width="40" height="40" fill="white" transform="translate(20 20)"/>
</clipPath>
</defs>
</svg>
<p className='text-[20px] font-[600]'>24/7 CUSTOMER SERVICE</p>
<p className='text-[14px] font-[400]'>Friendly 24/7 customer support</p>
</div>
<div className='flex flex-col items-center'>
<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z" fill="#2F2E30"/>
<circle cx="40" cy="40" r="29" fill="black"/>
<path d="M28.0991 50.5992L28.0988 50.5991C27.2261 49.9483 26.4255 48.9206 25.8427 47.759C25.2599 46.5973 24.9166 45.3451 24.9166 44.2666V31.8666C24.9166 29.5074 26.6715 26.9618 28.8911 26.1351L28.8921 26.1348L37.2083 23.0183C37.2084 23.0182 37.2085 23.0182 37.2086 23.0182C37.9621 22.7366 38.9615 22.5874 39.9833 22.5874C41.0051 22.5874 42.0045 22.7366 42.758 23.0182C42.7581 23.0182 42.7582 23.0182 42.7582 23.0183L51.0745 26.1348L51.0755 26.1351C53.2951 26.9618 55.05 29.5074 55.05 31.8666V44.2499C55.05 45.3371 54.7066 46.5892 54.124 47.7483C53.5415 48.9073 52.741 49.9313 51.8678 50.5824L51.8675 50.5826L44.7009 55.9326L44.7008 55.9325L44.6946 55.9373C43.4119 56.9264 41.724 57.4332 40 57.4332C38.2773 57.4332 36.5851 56.927 35.2648 55.9486C35.2647 55.9484 35.2645 55.9483 35.2644 55.9482L28.0991 50.5992ZM37.7418 24.4315L37.7412 24.4317L29.4245 27.5484L29.4238 27.5486C28.5962 27.8602 27.855 28.5225 27.3241 29.2906C26.793 30.059 26.4333 30.9898 26.4333 31.8832V44.2666C26.4333 45.161 26.7439 46.1892 27.2009 47.101C27.6578 48.0126 28.2932 48.8722 29.0008 49.4005L29.0009 49.4006L36.1672 54.7503C37.2292 55.5445 38.6282 55.9249 40.002 55.9249C41.376 55.9249 42.7782 55.5445 43.8477 54.7516L43.8491 54.7506L51.0157 49.4006L51.0166 49.3999C51.7314 48.8638 52.3668 48.005 52.8222 47.0943C53.2775 46.1837 53.5833 45.16 53.5833 44.2666V31.8666C53.5833 30.9804 53.2229 30.0538 52.6925 29.2864C52.162 28.5189 51.4223 27.854 50.5976 27.5338L50.5976 27.5338L50.5921 27.5317L42.2754 24.415L42.2755 24.4149L42.2664 24.4117C41.6282 24.1865 40.8001 24.0831 40.0007 24.0853C39.202 24.0875 38.3751 24.1951 37.7418 24.4315Z" fill="#FAFAFA" stroke="#FAFAFA"/>
<path d="M37.4131 41.0536L37.7667 41.4071L38.1202 41.0536L44.4036 34.7703C44.6916 34.4822 45.1751 34.4822 45.4631 34.7703C45.7512 35.0583 45.7512 35.5417 45.4631 35.8298L38.2965 42.9965C38.1452 43.1478 37.9579 43.2167 37.7667 43.2167C37.5755 43.2167 37.3882 43.1478 37.2369 42.9965L34.5536 40.3131C34.2655 40.0251 34.2655 39.5417 34.5536 39.2536C34.8416 38.9655 35.3251 38.9655 35.6131 39.2536L37.4131 41.0536Z" fill="#FAFAFA" stroke="#FAFAFA"/>
</svg>
<h1 className='text-[20px] font-[600]'>MONEY BACK GUARANTEE</h1>
<p className='text-[14px] font-[400]'>We return money within 30 days</p>
</div>
</div>
      </section>
      <section>
      <Footer></Footer>
                </section>
      </div>
  )
}
