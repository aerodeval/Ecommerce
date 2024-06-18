import React from 'react'

import { FavContext } from '../FavContext';
import { useState, createContext, useContext } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import conitem from '../imgs/items/controller.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { StarRating } from 'star-rating-react-ts'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import useEmblaCarousel from 'embla-carousel-react'
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import {
    CardActions
  } from '@mui/material'
import NavbarEz from './NavbarTop';
import Footer from './Footer';

export default function Favourites(props) {
    const { favs } = useContext(FavContext);

    const [newfavs, setFavs] = useState(
  favs
    );
    const DeleteList = (id) => {
      console.log(id + " has been deleted");
 
      setFavs(prevFavs => {
        const index = prevFavs.findIndex(item => item.id === id);
        if (index !== -1) {
          // Create a new array without the item at the specified index
          
          return [...prevFavs.slice(0, index), ...prevFavs.slice(index + 1)];
        }
        return prevFavs;
      }
 
    );
    }
    return (
    <div>
      <NavbarEz></NavbarEz>
        <div className='display-section mt-[80px] mx-[135px] mb-[140px]'>
          <div className='columns-2 flex justify-between items-center'>
        <div>
          <p>Wishlist ({newfavs.length})</p> </div>
        <div>
          <button  className='px-[45px] py-[16px] border-solid border-2 border-[#00000080]'>Move to bag</button>  </div>
        </div>
        <div className='favs-section mt-20 flex gap-[30px]'>

       {newfavs.length === 0 ? (
        <p>No favorites available</p>
      ) :
        (newfavs.map(item => (
        <div key={item.id}>
        
        <Card className='card-01 embla__slide' sx={{ maxWidth: 270, minWidth:270, backgroundColor: "#F5F5F5", boxShadow: 'none' }}>
          <div className='flex justify-between absolute gap-[8.5rem]'>
            <div className='bg-[#DB4444]  ml-[12px] mt-[12px] max-w-[55px] max-h-[26px]  rounded-md'>
              <p className='py-[4px] pl-[16px] pr-[20px] text-white text-[12px]'>{item.Discount}%</p>
            </div>

            <div className='flex flex-col'>
         
              <CardActions>
                <Button onClick={()=>{ DeleteList (item.id)}}      >
                  <div className=' bg-[#FFFFFF] w-[34px] h-[34px] rounded-[20px] '>
                <div className='m-[7px]'>  <svg  width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 3.57143H2.33333L3.66667 19H14.3333L15.6667 3.57143H1M9 7.42857V15.1429M12.3333 7.42857L11.6667 15.1429M5.66667 7.42857L6.33333 15.1429M6.33333 3.57143L7 1H11L11.6667 3.57143" stroke="black" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>

                  </div>
                </Button>
              </CardActions>

            </div>
          </div>
          <div className='h-[250px]'> 
          <CardMedia
            className='max-w-50 p-10 '
            component="img"
            height="140px"
            image={item.Image}
            alt="green iguana"
          /></div>

          <div className='h-[41px] text-[#FFFFFF] py-[8px] bg-[#000000] add-to-cart'>
            <h1>Add to Cart</h1>
          </div>
          <CardContent className=' bg-[#FFFFFF] text-left'>
            <p className='card-title' >
         {item.Name}
            </p>
            <div className='flex'>
              <p className='text-[#DB4444] text-[16px] font-[500] pr-5'>${item['discount-price']}</p>
              <p className='line-through text-[16px] font-[500] text-[#00000082] '>${item['orignal-price']}</p>
            </div>
          </CardContent>
       
          <div className='flex items-center bg-[#FFFFFF]'>
            <CardActions className='bg-[#FFFFFF]'>
              <Button size="small" color="primary">
                <StarRating readOnly='true' initialRating={item.Stars} theme={{ size: 25 }} />

              </Button>

            </CardActions>
            <p className='text-[#00000082]'>
              ({item.Review})
            </p>
          </div>
        </Card>
      
        </div>
      )))}</div>
      </div>
      <Footer></Footer>
      </div>
  )
}
