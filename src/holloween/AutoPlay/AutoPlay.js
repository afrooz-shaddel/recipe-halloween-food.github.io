
  import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';
  // install Swiper modules
//   SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function AutoPlay(){
    return(
        <>
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
      "delay": 2500,
      "disableOnInteraction": false
    }} pagination={{
      "clickable": true
    }} navigation={true} className="mySwiper">
      <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </>

    )
}


  
  
  