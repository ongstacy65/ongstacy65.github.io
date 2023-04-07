import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center text-sm-end">
            <div className="social-icon">
              <a href="mailto:stacy.keisha.ong@gmail.com"><img src={navIcon4} alt="gmail" /></a>
              <a href="https://www.linkedin.com/in/stacy-keisha-ong-4455b2146"><img src={navIcon1} alt="linkedin" /></a>
              <a href="https://github.com/ongstacy65"><img src={navIcon3} alt="github" /></a>
              <a href="https://www.facebook.com/stacy.ong.3"><img src={navIcon2} alt="facebook" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
