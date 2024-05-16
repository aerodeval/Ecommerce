import React from 'react'
import NavbarEz from './NavbarTop'
import Carousel from './Carousel'
import Timer from '@joseavilasg/react-compound-timer'
import cimage from '../imgs/Frame 560.png'
import aimage from '../imgs/Frame 600.png'
import mimage from '../imgs/ps5-slim-goedkope-playstation_large 1.png'

import ItemCard from './ItemCard'
import GeneralCard from './GeneralCard'
import NewCard from './NewCard'
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
      <section className=''>
        <div className='pl-20 pr-20'>
          <p className='flex justify-start tab items-center'>Today's</p>
          <div className='flex justify-between items-center'>

            <h1 className='flex justify-start section-title '>Flash Sales</h1>

            <div className='flex gap-10 timer-text items-center'>
              <Timer
                initialTime={3133355000}
                direction="backward"
              >
                {() => (
                  <React.Fragment>
                    <div className='items-start'>
                      <p>Days</p>
                      <Timer.Days />
                    </div>
                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#E07575" />
                      <circle cx="2" cy="14" r="2" fill="#E07575" />
                    </svg>

                    <div className='items-start'>
                      <p>Hours</p>
                      <Timer.Hours />
                    </div>
                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#E07575" />
                      <circle cx="2" cy="14" r="2" fill="#E07575" />
                    </svg>

                    <div className='items-start'>
                      <p>Minutes</p>
                      <Timer.Minutes />
                    </div>
                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#E07575" />
                      <circle cx="2" cy="14" r="2" fill="#E07575" />
                    </svg>

                    <div className='items-start'>
                      <p>Seconds</p>
                      <Timer.Seconds />
                    </div>
                  </React.Fragment>
                )}
              </Timer>
            </div>
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
          <ItemCard></ItemCard>
        </div>

        <div className='flex justify-center pb-10  '>
          <h1 className='text-white p-[10px] bg-[#DB4444] rounded-md '> View All Products</h1>
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
            <div className='min-w-[170px] min-h-[145px] justify-center border-solid border-[1px] border-[#0000004D] rounded-md flex-col flex items-center' >
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

          <div className='flex px-10 computer '>
            <div className='min-w-[170px] min-h-[145px] justify-center border-solid border-[1px] border-[#0000004D] rounded-md flex-col flex items-center' >
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


          <div className='flex px-10 smartwatch '>
            <div className='min-w-[170px] min-h-[145px] justify-center border-solid border-[1px] border-[#0000004D] rounded-md flex-col flex items-center' >
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
            <div className='min-w-[170px] min-h-[145px] justify-center border-solid border-[1px] border-[#0000004D] rounded-md flex-col flex items-center' >
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

          <div className='flex px-10 Headphones '>
            <div className='min-w-[170px] min-h-[145px] justify-center border-solid border-[1px] border-[#0000004D] rounded-md flex-col flex items-center' >
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
            <div className='min-w-[170px] min-h-[145px] justify-center border-solid border-[1px] border-[#0000004D] rounded-md flex-col flex items-center' >
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
        <ItemCard></ItemCard>

      </section>
      <section>
        <div className='flex justify-center'>
          <img src={aimage}></img>
        </div>
      </section>
      <section>

        <GeneralCard></GeneralCard>
      </section>
      <section>
        <NewCard></NewCard>
        <div className='flex justify-center pb-10  '>
          <h1 className='text-white p-[10px] bg-[#DB4444] rounded-md '> View All Products</h1>
        </div>
      </section>
      <section>
        <div className='pl-20 pr-20'>
          <p className='flex justify-start tab items-center'>This Month</p>
          <div className='flex justify-between items-center'>

            <h1 className='flex justify-start section-title '>Best Selling Products</h1>
            <div className='flex justify-end'>



            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='w-1/2'>
            <div className='max-w-[570px] max-h-[600px] bg-[#000000] ml-20 flex items-center relative text-[#FFFFFF] pl-5'>
              <img className='pt-[89px]' src={mimage}></img>
              <div className='absolute bottom-5 text-left '>
                <div>
                  <h1>Playstation 5</h1>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <p className='underline'>Shop Now</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2 flex flex-col'>
            <div className='max-w-[570px] max-h-[284px] bg-[#000000] ml-20 flex items-center relative text-[#FFFFFF] pl-5'>
              <img className='pt-[89px]' src={mimage}></img>
              <div className='absolute bottom-5 text-left '>
                <div>
                  <h1>Playstation 5</h1>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <p className='underline'>Shop Now</p>
                </div>
              </div>
            </div>
            <div className='flex'>
              <div className='max-w-[270px] max-h-[284px] bg-[#000000] ml-20 flex items-center relative text-[#FFFFFF] pl-5'>
                <img className='pt-[89px]' src={mimage}></img>
                <div className='absolute bottom-5 text-left '>
                  <div>
                    <h1>Playstation 5</h1>
                    <p>Black and White version of the PS5 coming out on sale.</p>
                    <p className='underline'>Shop Now</p>
                  </div>
                </div>
              </div>
              <div className='max-w-[270px] max-h-[284px] bg-[#000000] ml-20 flex items-center relative text-[#FFFFFF] pl-5'>
                <img className='' src={mimage}></img>
                <div className='absolute bottom-5 text-left '>
                  <div>
                    <h1>Playstation 5</h1>
                    <p>Black and White version of the PS5 coming out on sale.</p>
                    <p className='underline'>Shop Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
