import Navbar from "./components/Navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skill/skills";
import Works from "./components/Work/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
}

export default App;
