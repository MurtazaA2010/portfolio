import { auto } from "@popperjs/core";
import React from "react";

import Slider from "react-slick";

const Testimonials = ({ classicHeader, darkTheme }) => {
  const reviews = [
    {
      name: "Paul Martin",
      position: "Lead Developer",
      src: "images/clients/paulimg.jpg",
      desc: "Abdullah has been an invaluable asset to our React development team. His expertise and passion for React have greatly contributed to the success of our projects.His deep understanding of React's core concepts and best practices has allowed us to build robust and scalable applications. Abdullah's attention to detail and commitment to writing clean and maintainable code have significantly improved our development workflow.Not only is Abdullah a skilled developer, but he is also an excellent team player. He actively collaborates with other team members, sharing his knowledge and offering support whenever needed. His strong problem-solving skills and ability to think critically have been instrumental in overcoming complex challenges during our React projects.When it comes to support, Abdullah goes above and beyond. He is always available to lend a helping hand, whether it's troubleshooting an issue, providing guidance on architectural decisions, or offering insights on performance optimization. His prompt and thorough responses demonstrate his dedication to ensuring the success of our projects.Overall, Abdullah's expertise in React development and his unwavering support make him an outstanding team member. We are grateful to have him on board and highly recommend him to any team in need of a skilled and reliable React developer.",
      rating: 5,
    },
    {
      "": "",
      rating: 5
    }
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section
      id="testimonial"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Testimonial
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Client Speak
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    " rounded p-5 " + (darkTheme ? "bg-dark" : "bg-light")
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    <img
                      className="img-fluid rounded-circle border d-inline-block w-auto"
                      style={{width: auto}}
                      src={value.src}
                      alt=""
                    />
                    <p className="ms-3 mb-0">
                      <strong
                        className={
                          "d-block fw-600 " +
                          (darkTheme ? "text-white" : "text-dark")
                        }
                      >
                        {value.name}
                      </strong>
                      <span className="text-muted fw-500">
                        {" "}
                        {value.position}{" "}
                      </span>
                    </p>
                  </div>
                  <p
                    className={
                      " fw-500 mb-4 " + (darkTheme ? "text-white" : "text-dark")
                    }
                  >
                    “{value.desc}”
                  </p>
                  <span className="text-2">
                    {[...Array(value.rating)].map((value, i) => (
                      <i className="fas fa-star text-warning" key={i} />
                    ))}
                  </span>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
