"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`/product/gt710 (${i + 1}).jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="/product/gt710 (1).jpg" alt='gt7101' />
        </div>
        <div>
          <img src="/product/gt710 (2).jpg" alt='gt7102' />
        </div>
        <div>
          <img src="/product/gt710 (3).jpg" alt='gt7103' />
        </div>
        <div>
          <img src="/product/gt710 (4).jpg" alt='gt7104' />
        </div>
      </Slider>
    </div>
  );
}

export default Gallery;
