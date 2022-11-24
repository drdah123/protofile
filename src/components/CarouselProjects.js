import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { Grid, Pagination } from 'swiper';
import ProjectCard from './ProjectCard';

const CarouselProjects = ({ projects }) => {
  return (
    <div className="project-carousel">
      <Swiper
        grid={{
          rows: 2,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1020: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        pagination={{
          type: 'progressbar',
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {projects?.map((project) => (
          <SwiperSlide key={project.name}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProjects;