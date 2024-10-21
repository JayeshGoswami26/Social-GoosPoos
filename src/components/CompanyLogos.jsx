import { companyLogos } from "../constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/90">
        {/* Effortlessly Transform Digital Traffic into Real Sales. */}
        Elevate your brand visibility on:
      </h5>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 3, 
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5, 
            spaceBetween: 20,
          },
        }}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,     
          disableOnInteraction: true, 
        }}
        className="flex"
      >
        {companyLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-[5rem] lg:h-[8.5rem]">
              <img className="filter brightness-0 invert" src={logo} width={134} height={28} alt={logo} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CompanyLogos;
