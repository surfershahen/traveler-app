import React from "react";
import Slider from "react-slick";
import { ava1, ava2, ava3 } from "../../assets/images";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipesToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eaque.
          Quo tempora eum minus voluptatibus sint ullam exercitationem. Hic
          sequi est quos, soluta quidem suscipit sit tenetur quia dolorem nemo!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava1} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Shahen Hamdan</h6>
            <p> Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eaque.
          Quo tempora eum minus voluptatibus sint ullam exercitationem. Hic
          sequi est quos, soluta quidem suscipit sit tenetur quia dolorem nemo!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava2} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Shahen Hamdan</h6>
            <p> Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eaque.
          Quo tempora eum minus voluptatibus sint ullam exercitationem. Hic
          sequi est quos, soluta quidem suscipit sit tenetur quia dolorem nemo!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava3} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Shahen Hamdan</h6>
            <p> Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eaque.
          Quo tempora eum minus voluptatibus sint ullam exercitationem. Hic
          sequi est quos, soluta quidem suscipit sit tenetur quia dolorem nemo!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava3} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Shahen Hamdan</h6>
            <p> Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eaque.
          Quo tempora eum minus voluptatibus sint ullam exercitationem. Hic
          sequi est quos, soluta quidem suscipit sit tenetur quia dolorem nemo!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava3} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Shahen Hamdan</h6>
            <p> Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
