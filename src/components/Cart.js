import React from 'react'
import Footer from './Footer'
import NavbarEz from './NavbarTop'
import Breadcrumbs from './Breadcrumbs'
export default function Cart() {
    return (
        <div>
         


            <section className='pt-[40px] container'>

                <Breadcrumbs> </Breadcrumbs>
            </section>

            <section className='container'>
                <table className='quant-table'>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    <tr>

                        <td>
                            <div>
                                <p>LCD Monitor</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>$650</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <input type="number" id="quantity" name="quantity" min="1" max="5" />
                            </div>
                        </td>
                        <td>
                            <p>$650</p>
                        </td>
                    </tr>
                </table>
                <div className='row flex'>
                    <div className='col flex justify-start'><button class="px-[45px] py-[16px] border-solid border-2 border-[#00000080]">Return to Shop</button>  </div>
                    <div className='col  flex justify-end'><button class="px-[45px] py-[16px] border-solid border-2 border-[#00000080]">Update Cart</button>  </div>
                </div>
                <div className='row mt-[80px] mb-[20px] container flex gap-4 justify-between'>
                    <div className='col-md-6'>
                        <div className='row flex gap-6'>
                            <input placeholder='Coupon code' className='col-md-12 col-xl-6 py-[16px] pl-[24px] border-[#00000080] border-[1px] border-solid'></input>
                            <button class="col-md-12 col-xl-5 px-[45px] py-[16px] bg-[#DB4444] text-white border-solid border-2 ">Apply Coupon</button>
                        </div>
                    </div>
                    <div className='col-md-4 border-[1.5px] flex flex-col gap-10 border-solid border-[#000000]'>
                        <div className='row justify-start'>
                            <p className='text-left px-[12px] pt-[32px]'>Cart Total</p>
                        </div>
                        <div className='row border-b-[1.5px] border-b-solid'>
                            <div className='col text-left '>
                                <p>Subtotal</p>
                            </div>
                            <div className='col'>
                                <p className=" text-right">$1450</p>
                            </div>
                        </div>
                        <div className='row text-left  border-b-[1.5px] border-b-solid' >
                            <div className='col'>
                                <p>Shipping</p>
                            </div>
                            <div className='col'>
                                <p className='text-right'>Free</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col text-left'>
                                <p>Total</p>
                            </div>
                            <div className='col text-right'>
                                <p>$1750</p>
                            </div>
                        </div>
                        <div className='row px-[60px] mb-[20px]'>
                        <button class="col px-[30px] py-[16px] bg-[#DB4444] text-white border-solid border-2  ">Proceed to Checkout</button>

                        </div>

                    </div>

                </div>
            </section>
  
        </div>

    )
}
