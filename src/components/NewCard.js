

import * as React from 'react';
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
import {
  CardActionArea
} from '@mui/material';

import {
  CardActions
} from '@mui/material'
import { red } from '@mui/material/colors';


const items = [

  {  
    "id": 1,
    "Name": "Marcos Hahn",
    "Discount": 30,
    "orignal-price": 105,
    "discount-price": 34996,
    "Review": 59279,
    "Stars":Math.floor(Math.random() * 5),
    "Image":"https://res.cloudinary.com/dm3ienizb/image/upload/v1715755509/gammaxx-l240-argb-1-500x500_1_zjrmcs.png"
    ,"status":"new"
  },
  {
    "id": 2,
    "Name": "Dr. Brandy Bins",
    "Discount": 10,
    "orignal-price": 649,
    "discount-price": 33286,
    "Review": 73287,
    "Stars":Math.floor(Math.random() * 5),
    "Image":"https://res.cloudinary.com/dm3ienizb/image/upload/v1715755508/curology-j7pKVQrTUsM-unsplash_1_d8vqzn.png"
     ,"variants": ["red", "yellow", "green"]
  }
  ,
  {
    "id": 3,
    "Name": "Iris Jaskolski",
    "Discount": 43,
    "orignal-price": 502,
    "discount-price": 79438,
    "Review": 4466,
    "Stars":Math.floor(Math.random() * 5),
    "Image":"https://res.cloudinary.com/dm3ienizb/image/upload/v1715755509/GP11_PRD3_1_aa3pww.png"

  },
  {
    "id": 4,
    "Name": "Sonya Schoen",
    "Discount": 39,
    "orignal-price": 990,
    "discount-price": 28849,
    "Review": 95529,
    "Stars":Math.floor(Math.random() * 5),
    "Image":"https://res.cloudinary.com/dm3ienizb/image/upload/v1715755508/Copa_Sense_1_l9aloz.png"
    ,"status":"new",
    "variants": ["violet", "yellow"]
  },
  {
    "id": 5,
    "Name": "Ira Okuneva",
    "Discount": 37,
    "orignal-price": 617,
    "discount-price": 69612,
    "Review": 55565,
    "Stars":Math.floor(Math.random() * 5),
    "Image":"https://res.cloudinary.com/dm3ienizb/image/upload/v1715755507/g92-2-500x500_1_bqyerd.png"
  }, {
    "id": 6,
    "Name": "Mrs. Tabitha Sporer",
    "Discount": 50,
    "orignal-price": 614,
    "discount-price": 87510,
    "Review": 372,
    "Stars":Math.floor(Math.random() * 5),
    "Image":"https://res.cloudinary.com/dm3ienizb/image/upload/v1715755509/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash_1_u4hgv2.png"
    ,"status":"new",
    "variants": ["lightgreen", "orange"]
}
]


export default function NewCard() {
  const [emblaRef] = useEmblaCarousel({ loop: false })

  return (
    <div  className="embla" ref={emblaRef} > 

    <div className=' embla__container flex gap-[1rem]' >
 {items.map(item => (
      <div key={item.id} className='p-10 relative'>

        <Card className='card-01 embla__slide' sx={{ maxWidth: 270, minWidth:270, backgroundColor: "#F5F5F5", boxShadow: 'none' }}>
          
        
          <div className='flex justify-between absolute gap-[8.5rem]'>
 


            
        {
          item.status  === 'new' ?           <div className='bg-[#00FF66]  ml-[12px] mt-[12px] max-w-[55px] max-h-[26px]  rounded-md'>
          <p className='py-[4px] px-[10px] text-white text-[12px]'>NEW</p>
          </div>           : <div className='text-[#F5F5F5]'>     oldsss  </div>
        } 

    
    
            <div className='flex flex-col '>
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
            <div className='flex gap-[5px] items-center'>
              <p className='text-[#DB4444] text-[16px] font-[500] '>${item['orignal-price']}</p>
        
         
      
              <Button size="small" color="primary">
                <StarRating readOnly='true' initialRating={item.Stars} theme={{ size: 20 }} />

              </Button>

            <p className='text-[#00000082]'>
              ({item.Review})
            </p>
          </div>
        <div>

        {
          item.variants  ?           <div className='flex gap-5 pt-[5px]' >


{/* 
let styleTag = document.getElementsByClassName(`${a}`);
    console.log(styleTag)
    for (let i = 0; i < styleTag.length; i++) {
        styleTag[i].classList.add("clicked"); // Replace "your_text" with the text you want to add to the class name
    } */}


        
{item.variants.map((variant, index) => (
        <div  key={index}>
        <button  className={`${item.Name}-${variant}`} 
        >
          <div className='w-[20px] h-[20px] rounded-3xl' style={{backgroundColor:`${variant}`}}>
          &nbsp;
          </div>
          </button>
          {/* Add other variant details here */}
        </div>
      ))}
              
          </div>          : <div></div>
        } 
  
        </div>
 </CardContent>
  
        </Card>

      </div>))}

      </div>

    </div>
  )
}
