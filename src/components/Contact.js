import React, { Component } from "react";
import NavbarEz from "./NavbarTop";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";

export default class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <Breadcrumbs></Breadcrumbs>
                </div>

                <div className="row container mt-[80px] mb-[140px]">
                    <div className="col-3 flex flex-col container ">
                        <div className="row flex flex-col text-left  pb-[32px]">
                            <div className="flex items-center gap-2 pb-[20px] pt-[32px]">
                                <div className="bg-[#DB4444] flex justify-center rounded-full w-[58px] h-[58px]">
                                    <i class="las la-phone"></i>
                                </div>
                                <p> Call to Us</p>
                            </div>
                            <p>We are available 24/7, 7 days a week.</p>
                            <p>Phone: +8801611112222</p>
                        </div>
                        <hr></hr>
                        <div className="row flex flex-col text-left">
                            <div className="flex items-center gap-2 pb-[20px] pt-[32px]">
                                <div className="bg-[#DB4444] flex justify-center rounded-full w-[58px] h-[58px]">
                                    <i class="las la-envelope"></i>
                                </div>
                                <p> Write To US</p>
                            </div>
                            <p >Fill out our form and we will contact you within 24 hours.</p>
                            <p>Emails: customer@exclusive.com</p>
                            <p>Emails: support@exclusive.com</p>
                        </div>
                    </div>

                    <div className="col-8 flex gap-4">
                        <div className="row gap-2">
                        
                        <input className='border-none bg-[#F5F5F5] text-[16px] col-sm-12 col-xl-3 rounded-lg  p-2' placeholder='Your Name'></input>
                       
                        
                        
                        <input className='border-none bg-[#F5F5F5] text-[16px] rounded-lg col-sm-12 col-xl-3  p-2' placeholder='Your Email'></input>
                       
                        
                        
                        <input className='border-none bg-[#F5F5F5] text-[16px] rounded-lg col-sm-12 col-xl-3 p-2' placeholder='Your Phone'></input>
                       
                        

                
                        <div  className="col-12 ">
                        <input className='border-none bg-[#F5F5F5] col-12 text-[16px] rounded-lg h-[207px]  p-2' placeholder='Your Message'></input>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
