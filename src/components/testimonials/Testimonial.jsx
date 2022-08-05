import "./testimonial.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Biz Stone",
      title: "Founder",
      img:
        "assets/biz.jpg",
      icon: "assets/twitter.png",
      desc:
        "It's fine to celebrate success but it is more important to heed the lessons of failure.",
    },
    {
      id: 2,
      name: "Bill Gates",
      title: "Founder",
      img:
        "assets/bill.jpg",
      icon: "assets/youtube.png",
      desc:
        "“I’ve missed more than 9000 shots in my career I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.”. ",
      featured: true,
    },
    {
      id: 3,
      name: "Elon Musk",
      title: "CEO",
      img:
        "assets/elon.jpg",
      icon: "assets/linkedin.png",
      desc:
      "“All you need is the plan, the road map, and the courage to press on to your destination.”",
    },
  ];
  return (
    <div className="testimonials" id="testimonial">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
