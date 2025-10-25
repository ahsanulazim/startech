'use client'

import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function ImageCarousel() {

  const images = [
    { id: 1, src: "/Carousel/carousel (1).webp", alt: "Carousel 1" },
    { id: 2, src: "/Carousel/carousel (2).webp", alt: "Carousel 2" },
    { id: 3, src: "/Carousel/carousel (3).webp", alt: "Carousel 3" },
  ]

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={true}
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="w-full col-span-12 lg:col-span-9 row-span-2 rounded-md"
      dotListClass="!bottom-4"
      draggable
      ssr={true}
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 1
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 1
        }
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {images.map((image) => (
        <Link href="#" key={image.id}><img src={image.src} alt={image.alt} className='w-full rounded-lg' /></Link>
      ))}
    </Carousel>
  )
}
