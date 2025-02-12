// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'


import bgimg1 from '../assets/images/carousel1.jpg'
import bgimg2 from '../assets/images/carousel2.jpg'
import bgimg3 from '../assets/images/carousel3.jpg'
import Slide from './Slider';

export default function Carousel() {
  return (
    <div className='container my-10 mx-auto  w-full h-full'>
      <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper shadow-lg'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            
        
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
           
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
           
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}