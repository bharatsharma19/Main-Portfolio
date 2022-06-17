import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Website Development",
      desc:
        "Development, which is required for each business whether it is small scale or large scale industry. ",
      img:
        "https://github.com/Bharatsharma19",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "UI/UX Design",
      desc:
        "Designing is most important part as we can easily sell more products through our designs.",
      img:
        "https://github.com/Bharatsharma19",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Machine Learning",
      desc:
        "As we can see, ML is one of the fastest developing field and very helpful while creation of projects.",
      img:
        "https://github.com/Bharatsharma19",
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "Security Services",
      desc:
        "Security is most important nowadays and we have to secure our each and every information as it is the digital World.",
      img:
        "https://github.com/Bharatsharma19",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
