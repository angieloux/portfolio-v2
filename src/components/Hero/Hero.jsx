import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, resume } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title}{'✨'}
            <br/>
            {`I'm`}<span className="text-color-main"> {name}</span>{'.'}
            <br />
            {subtitle}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta}
              </Link>
              </span>
              <span className="cta-btn cta-btn--hero">
              <Link to="#" smooth duration={1000}>
                {resume}
              </Link>
            </span>
          </p>
          <span className="back-to-top">
          <Link to="about" smooth duration={900}>
            <i className="fa fa-angle-down fa-2x" aria-hidden="true" id="nav-arrow"/>
          </Link>
        </span>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
