import './intro.scss'
import Typical from 'react-typical';

export default function intro() {

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I' m</h2>
          <h1>Bharat Sharma</h1>
          <h3>
            <Typical
              loop={Infinity}
              steps={[
                'Full Stack Developer', 2000,
                'Software Developer',
                2000,
                'Machine Learning',
                2000,
                'Ethical Hacker',
                2000
              ]}
            />
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
