import React, { Component } from 'react'
import Breadcrumbs from './Breadcrumbs'
import { Icon } from '@mui/material'

export default class About extends Component {
  render() {
    return (
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
        <section>
            <div className='row'> 
            <div className='col flex flex-col items-center'>
            <div  className='bg-[#bfbfbf] flex justify-center items-center rounded-full w-[80px] h-[80px]'>
            <div className='bg-[#000000] flex justify-center rounded-full w-[58px] h-[58px]'>
            <i className="las la-store-alt"></i>
            </div>
            </div>  
            <p className=' text-[32px] font-[700]'>33k</p>
            <span className='text-[16px] font-[400]'>Monthly Product Sale</span>
            </div>
            
            <div className='col flex flex-col items-center'>
            <div  className='bg-[#bfbfbf] flex justify-center items-center rounded-full w-[80px] h-[80px]'>
            <div className='bg-[#000000] flex justify-center rounded-full w-[58px] h-[58px]'>
            <i class="las la-dollar-sign"></i>            </div>
            </div>  
            <p className=' text-[32px] font-[700]'>45.5k</p>
            <span className='text-[16px] font-[400]'>Customer active in our site</span>
            </div>
            <div className='col flex flex-col items-center'>
            <div  className='bg-[#bfbfbf] flex justify-center items-center rounded-full w-[80px] h-[80px]'>
            <div className='bg-[#000000] flex justify-center rounded-full w-[58px] h-[58px]'>
            <i class="las la-shopping-bag"></i>
            </div>
            </div>  
            <p className=' text-[32px] font-[700]'>10.5k</p>
            <span className='text-[16px] font-[400]'>Sallers active our site</span>
            </div>
            <div className='col flex flex-col items-center'>
            <div  className='bg-[#bfbfbf] flex justify-center items-center rounded-full w-[80px] h-[80px]'>
            <div className='bg-[#000000] flex justify-center rounded-full w-[58px] h-[58px]'>
            <i class="las la-money-bill-wave"></i>
            </div>
            </div>  
            <p className=' text-[32px] font-[700]'>10.5k</p>
            <span className='text-[16px] font-[400]'>Sallers active our site</span>
            </div>
            </div>
        </section>
        </div>
    )
  }
}
