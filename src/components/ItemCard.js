

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import conitem from '../imgs/items/controller.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import {StarRating} from 'star-rating-react-ts'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {
  CardActionArea
} from '@mui/material';
 
import {
  CardActions
} from '@mui/material'
import { red } from '@mui/material/colors';



export default function ItemCard() {
  return (
<div className='pl-20 pb-20 relative'>

    <Card className='card-01'  sx={{ maxWidth:270, backgroundColor:"#F5F5F5",boxShadow:'none'}}>
   <div className='flex justify-between absolute gap-[8.5rem]'>
      <div className='bg-[#DB4444]  ml-[12px] mt-[12px] max-w-[55px] max-h-[26px]  rounded-md'>
        <p className='py-[4px] px-[20px] text-white text-[12px]'>40%</p>
      </div>

<div className='flex flex-col'>
      <CardActions className='p-0'>
        <Button >
        <div className=' bg-[#FFFFFF] w-[34px] h-[34px] rounded-[20px]'>
      <FavoriteBorderOutlinedIcon className='mt-1.5 text-black'></FavoriteBorderOutlinedIcon>
      </div>
      </Button>
      </CardActions>
      <CardActions>
      <Button >
        <div className=' bg-[#FFFFFF] w-[34px] h-[34px] rounded-[20px]'>
      <RemoveRedEyeOutlinedIcon className='mt-1.5 text-black'></RemoveRedEyeOutlinedIcon>
      </div>
      </Button>
      </CardActions>
     
      </div>
      </div>
      <CardMedia
        className='max-w-50 p-10'
        component="img"
        height="140"
        image={conitem}
        alt="green iguana"
      />

      <div className='h-[41px] text-[#FFFFFF] py-[8px] bg-[#000000] add-to-cart'>
        <h1>Add to Cart</h1>
      </div>
      <CardContent className=' bg-[#FFFFFF] text-left'>
        <p className='card-title' >
        HAVIT HV-G92 Gamepad
        </p>
        <div className='flex'>
          <p className='text-[#DB4444] text-[16px] font-[500] pr-5'>$120</p>
          <p className='line-through text-[16px] font-[500] text-[#00000082] '>$160</p>
        </div>
      </CardContent>
    <div className='flex items-center bg-[#FFFFFF]'>
    <CardActions className='bg-[#FFFFFF]'>
      <Button size="small" color="primary">
      <StarRating readOnly='true' initialRating={5} theme={ {size:25}}  />
  
      </Button>
      
    </CardActions>
    <p className='text-[#00000082]'>     
        (88)
      </p>
      </div>
  </Card>

  </div>
  )
}
