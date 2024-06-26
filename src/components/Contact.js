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

                <div className="row  mt-[80px] mb-[140px] gap-10 justif">
                    <div className="col-xl-3 col-lg-12 flex flex-col ml-[30px] ">
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

                    <div className="col-md-12 col-xl-7 flex gap-4 contents">
                        <div className="col-md-12 col-xl-7 flex flex-col gap-2 justify-center "> 
                        <div className="row  flex justify-center gap-2 ">
                        
                        <input className='border-none bg-[#F5F5F5] max-w-[235px] text-[16px] col-4 rounded-lg  p-2' placeholder='Your Name'></input>
                       
                        
                        
                        <input className='border-none bg-[#F5F5F5] max-w-[235px] text-[16px] col-4  rounded-lg   p-2' placeholder='Your Email'></input>
                       
                        
                        
                        <input className='border-none bg-[#F5F5F5] max-w-[235px] text-[16px] col-4 rounded-lg  p-2' placeholder='Your Phone'></input>
                       
                        

                
                        
                        </div>
                        <div className="row flex justify-center">
                        <div  className="col-xl-12 flex justify-center max-w-[737px] ">
                        <input className='border-none bg-[#F5F5F5] col-12 text-[16px] rounded-lg h-[207px]  p-2' placeholder='Your Message'></input>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
