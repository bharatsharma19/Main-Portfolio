import "./testimonial.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Biz Stone",
      title: "Founder",
      img:
        "https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg",
      icon: "assets/twitter.png",
      desc:
        "It's fine to celebrate success but it is more important to heed the lessons of failure.",
    },
    {
      id: 2,
      name: "Bill Gates",
      title: "Founder",
      img:
        "https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg",
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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
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
