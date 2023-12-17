import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();
  

  const filters = {
    WEB:"Web",
    REACT: "React",
    OTHER: "Others",
  };

  const projectsData = [
    {
      title: "Paul Martin",
      projectInfo:
        "This is the first ever portfolio website I have created as a web developer. There is some mistakes in that site. But This site is nice",
      client: "Paul Martin",
      technologies: "HTML, CSS, JS, Bootstrap",
      industry: "Web",
      date: "24 July, 2022",
      url: {
        name: "Paul Martin",
        link: "https://paulmartin1125.w3spaces.com/",
      },
      socialLinks: { 
        github : 'https://github.com/MurtazaA2010/Paul-Martin-Portfolio',
        twitter: "https://twitter.com/gru1125",
        mail: "mailto:pauljamartin@gmail.com",
      },
      thumbImage: "images/projects/paulmain.png",
      sliderImages: [
        "images/projects/paulmain.png",
        "images/projects/paulabt.png",
        
      ],
      categories: [filters.WEB],
    },
    {
      title: "IOS Calculator Clone",
      projectInfo:
        "This is the clone of IOS/Iphone calculator. Created using JavaScript.",
      client: null,
      technologies: "JavaScript, HTML, CSS",
      industry: "Web",
      date: "2023",
      url: {
        name: "IOS Calculator Clone",
        link: "https://murtazaa2010.github.io/ios-calculator-clone/",
      },
      socialLinks: {
        github: "https://github.com/MurtazaA2010/ios-calculator-clone",
        facebook: null
      },
      thumbImage: "images/projects/cal1.png",
      sliderImages: [
        "images/projects/cal2.png",
        "images/projects/cal3.png",
      ],
      categories: [filters.OTHER],
    },
    {
      title: "React-blog-app",
      projectInfo:
        "This is a blog-site created using React.Js Here you can post, view and delete blogs. It's a nice example of API usage in React.Js",
      client: null,
      technologies: "React Js, JSON(database)",
      industry: "Web",
      date: "2023",
      url: {
        name: 'React-blog-app',
        link: null,
      },
      socialLinks: {
        github: "https://github.com/MurtazaA2010/react-blog-app",
        facebook: null,
        
      },
      thumbImage: "images/projects/blog1.png",
      sliderImages: [
        "images/projects/blog2.png",
        "images/projects/blog3.png",
        "images/projects/blog4.png",
      ],
      categories: [filters.REACT],
    },
    {
      title: "React-ShoppingCart-app",
      projectInfo:
        "In this e-commerce site you can add item to cart and see the price.",
      client: null,
      technologies: "React Js, JSON(database)",
      industry: "Web",
      date: "2023",
      url: {
        name: 'React-ShoppingCart-app',
        link: null,
      },
      socialLinks: {
        github: "https://github.com/MurtazaA2010/react-ShoppingCart-app",
        facebook: null,
        
      },
      thumbImage: "images/projects/c1.png",
      sliderImages: [
        "images/projects/c2.png",
        "images/projects/c3.png",
        "images/projects/c4.png",
      ],
      categories: [filters.REACT],
    }
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">{project.categories}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
