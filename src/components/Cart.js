import React from 'react'
import Footer from './Footer'
import NavbarEz from './NavbarTop'
import Breadcrumbs from './Breadcrumbs'
export default function Cart() {
    return (
        <div>
            <NavbarEz></NavbarEz>


            <section className='pt-[40px] container'>

                <Breadcrumbs> </Breadcrumbs>
            </section>

            <section className='container'>
                <table>
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
                <div className='row'>
                    <div className='col'><button class="px-[45px] py-[16px] border-solid border-2 border-[#00000080]">Return to Shop</button>  </div>
                    <div className='col'><button class="px-[45px] py-[16px] border-solid border-2 border-[#00000080]">Update Cart</button>  </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className='row'>
                            <input placeholder='Coupon code' className='col py-[16px] pl-[24px] pr-[124px] border-[#00000080] border-[1px] border-solid'></input>
                            <button class="col px-[45px] py-[16px] bg-[#DB4444] text-white border-solid border-2 ">Apply Coupon</button>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='row'>
                            <p>Cart Total</p>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p>Subtotal</p>
                            </div>
                            <div className='col'>
                                <p>$1450</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p>Shipping</p>
                            </div>
                            <div className='col'>
                                <p>Free</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p>Total</p>
                            </div>
                            <div className='col'>
                                <p>$1750</p>
                            </div>
                        </div>
                        <div className='row'>
                        <button class="col px-[45px] py-[16px] bg-[#DB4444] text-white border-solid border-2 ">Proceed to Checkout</button>

                        </div>

                    </div>

                </div>
            </section>
            <Footer></Footer>

        </div>

    )
}
