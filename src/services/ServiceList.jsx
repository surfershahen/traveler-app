import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import { weatherImg, guide, customizationImg } from "../assets/images";
const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ",
  },
  {
    imgUrl: guide,
    title: "Best Tour Guide",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ",
  },
];

const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
