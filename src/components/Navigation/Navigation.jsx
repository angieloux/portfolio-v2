import React, {useContext, useEffect, useState } from 'react'
import {Link} from 'gatsby'
import PortfolioContext from '../../context/context';



import {Container, Nav, Navbar } from 'react-bootstrap'


const Navigation = () => {
  //   const [colorChange, setColorchange] = useState(false);
  //   const changeNavbarColor = () =>{
  //     if(window.scrollY >= 80){
  //       setColorchange(true);
  //     }
  //     else{
  //       setColorchange(false);
  //     }
  //  };
  //  window.addEventListener('scroll', changeNavbarColor);

    const { nav } = useContext(PortfolioContext)
    const { links } = nav
    
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
<Navbar sticky="top" expand="lg" collapseOnSelect={true}>
<Container fluid>
      <Navbar.Brand id="nav-brand" href="https://www.angelajohnson.dev">angela johnson {`//`} web developer </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Nav
          className="ml-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
          >
          {links &&
            links.map((link) => {
              const { id, name, url, underConstruction} = link;
              return (
                <Nav.Link 
                  href={url} 
                  key={id}
                  aria-label={name}
                  activeClass='active'
                  id='navigation-link'
                >{name}
                  
                </Nav.Link>
              );
            })}
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
)

}


  

export default Navigation