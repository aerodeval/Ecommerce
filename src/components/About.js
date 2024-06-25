import React, { Component } from 'react'
import Breadcrumbs from './Breadcrumbs'
import { Icon } from '@mui/material'
import Footer from './Footer'
import NavbarEz from './NavbarTop'

export default class About extends Component {
  render() {
    return (
      <div>
        <NavbarEz></NavbarEz>
      <div className='container'>
        <section>
          <Breadcrumbs></Breadcrumbs>
          <div className='row'>
            <div className='col flex justify-center flex-col'>
              <h1 className='text-left text-[54px] font-[600]'>Our Story</h1>
              <p className='text-left text-[16px] font-[400] leading-[26px] pt-[40px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
              <p className='text-left text-[16px] font-[400] leading-[26px] pt-[24px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <div className='col'>
              <img src={require('../imgs/about-us-image.png')} />


            </div>

          </div>
        </section>
        <section className='my-[140px] container'>
          <div className='row gap-5 flex justify-center'>
            <div className='col-lg-4 col-xl-2 flex flex-col items-center px-[35px] py-[30px] border-solid border-[1px] rounded-md border-[#0000004D]'>
              <div className='bg-[#bfbfbf] flex justify-center items-center rounded-full w-[80px] h-[80px]'>
                <div className='bg-[#000000] flex justify-center rounded-full w-[58px] h-[58px]'>
                  <i className="las la-store-alt"></i>
                </div>
              </div>
              <p className=' text-[24px] font-[700]'>33k</p>
              <span className='text-[16px] font-[400]'>Monthly Product Sale</span>
            </div>

            <div className='col-lg-4 col-xl-2 flex flex-col items-center px-[35px] py-[30px] border-solid border-[1px] rounded-md border-[#0000004D]'>
              <div className='bg-[#bfbfbf] flex justify-center items-center rounded-full w-[80px] h-[80px]'>
                <div className='bg-[#000000] flex justify-center rounded-full w-[58px] h-[58px]'>
                  <i class="las la-dollar-sign"></i>            </div>
              </div>
              <p className=' text-[24px] font-[700]'>45.5k</p>
              <span className='text-[16px] font-[400]'>Customer active in our site</span>
            </div>
            <div className='col-lg-4 col-xl-2 flex flex-col items-center px-[35px] py-[30px] border-solid border-[1px] rounded-md border-[#0000004D]'>
              <div className='bg-[#bfbfbf] flex justify-center items-center rounded-full w-[80px] h-[80px]'>
                <div className='bg-[#000000] flex justify-center rounded-full w-[58px] h-[58px]'>
                  <i class="las la-shopping-bag"></i>
                </div>
              </div>
              <p className=' text-[24px] font-[700]'>10.5k</p>
              <span className='text-[16px] font-[400]'>Sallers active our site</span>
            </div>
            <div className='col-lg-4 col-xl-2 flex flex-col items-center px-[35px] py-[30px] border-solid border-[1px] rounded-md border-[#0000004D]'>
              <div className='bg-[#bfbfbf] flex justify-center items-center rounded-full w-[80px] h-[80px]'>
                <div className='bg-[#000000] flex justify-center rounded-full w-[58px] h-[58px]'>
                  <i class="las la-money-bill-wave"></i>
                </div>
              </div>
              <p className=' text-[24px] font-[700]'>10.5k</p>
              <span className='text-[16px] font-[400]'>Sallers active our site</span>
            </div>
          </div>
        </section>

        <section>
          <div className='row flex justify-center'>
          <div className='col-sm-auto col-lg-4 flex flex-col items-center  '>
            <div>
              <img src={require('../imgs/tom.png')} />

            </div>
            <div className='text-center'>
              <p className='font-[500] text-[24px] pt-[32px]'>Tom Cruise</p>
              <p className='text-[16px] font-[400] pb-[16px]'>
                Founder & Chairman
              </p>
        
            <div className='row justify-center'>
              <div className='col-auto flex items-center'>
                <i class="fa-brands fa-x-twitter"></i>
              </div>
              <div className='col-auto flex items-center'>
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div className='col-auto flex items-center'>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>

            </div>
            </div>
          </div>
          <div className='col-sm-auto col-lg-4 flex flex-col items-center '>
            <div>
              <img src={require('../imgs/emma.png')} />

            </div>
            <div className='text-center'>
              <p className='font-[500] text-[24px] pt-[32px]'>Emma Watson</p>
              <p className='text-[16px] font-[400] pb-[16px]'>
               Brand Strategist
              </p>
        
            <div className='row justify-center'>
              <div className='col-auto'>
                <i class="fa-brands fa-x-twitter"></i>
              </div>
              <div className='col-auto'>
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div className='col-auto'>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>

            </div>
            </div>
          </div>
          <div className='col-sm-auto col-lg-4 flex flex-col items-center '>
            <div>
              <img src={require('../imgs/will.png')} />

            </div>
            <div className='text-center'>
              <p className='font-[500] text-[24px] pt-[32px]'>Will Smith</p>
              <p className='text-[16px] font-[400] pb-[16px]'>
              Product Manager
              </p>
        
            <div className='row justify-center'>
              <div className='col-auto'>
                <i class="fa-brands fa-x-twitter"></i>
              </div>
              <div className='col-auto'>
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div className='col-auto'>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>

            </div>
            </div>
          </div>
       
          </div>
        </section>

        <section>
        <div className='flex justify-center gap-[88px] pt-[88px] pb-[140px] row'>
   
   <div className=' flex flex-col items-center col '>
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
 <div className='flex flex-col items-center col'>
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
 <div className='flex flex-col items-center col'>
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

      </div>
      <Footer></Footer>
      </div>
    )
  }
}
