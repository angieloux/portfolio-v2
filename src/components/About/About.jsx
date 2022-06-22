import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import resume from '../../assets/resume.pdf'

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, uni1, uni2, uni1Url, uni2Url } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={700} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                <p className="font-weight-bold">TL;DR:</p>{paragraphOne ||
                    ``}
                </p>
                <p className="about-wrapper__info-text">
                  <p className="font-weight-bold">SKILLS:</p> {paragraphTwo ||
                    ``}
                </p>
                <p className="about-wrapper__info-text">
                <p className="font-weight-bold">EDUCATION:</p>
                  <ul>
                    <li>
                      {paragraphThree || ""}
                      <a href={uni1Url} className="font-weight-bold about-links" target="_blank">({uni1})</a>
                    </li>
                    <li>
                      {paragraphFour || ""}
                      <a href={uni2Url} className="font-weight-bold about-links" target="_blank">({uni2})</a>
                    </li>
                   </ul>
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                      download
                    >
                      download my resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
