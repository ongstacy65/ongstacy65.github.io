import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import resume from '../assets/file/resume.pdf';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(75 - Math.random() * 25);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web", "Back-end", "Java", "API", "Kafka"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(125);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>Stacy Keisha Ong</h1>
                  <h2><span className="txt-rotate" data-period="500" data-rotate='[ "Java Developer" ]'>I'm a <span className="wrap">{text}</span> Developer</span></h2>
                  <span className="navbar-text">
                    <div className="social-icon">
                      <a href="mailto:stacy.keisha.ong@gmail.com"><img src={navIcon4} alt="gmail" /></a>
                      <a href="https://www.linkedin.com/in/stacy-keisha-ong-4455b2146"><img src={navIcon1} alt="linkedin" /></a>
                      <a href="https://github.com/ongstacy65"><img src={navIcon3} alt="github" /></a>
                      <a href="https://www.facebook.com/stacy.ong.3"><img src={navIcon2} alt="facebook" /></a>
                    </div>
                  </span>
                  <a href={resume} download="stacy-keisha-ong-java-developer-resume" target='_blank'>
                    <button>Check me out! <ArrowRightCircle size={25} /></button>
                  </a>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
