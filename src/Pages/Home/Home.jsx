import React  from "react";
import Navbar from "../../components/Navbar/Navbar"
import Skills from "../../components/Skills/Skills"
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Arrow from '../../images/arrow-bottom.svg'
import Projects from "../../components/Projects/Projects";
import FormContact from "../../components/FormContact/FormContact";
import Footer from "../../components/Footer/Footer";

const Header = () => {

  return (
    <>
    <Navbar/>
    <div className="containerHeader">
      <section>
        <div className="content">
          <h2 className="nameAnimation">Lucas</h2>
          <h2 className="nameAnimation">Lucas</h2>
        </div><br className="mobile"/><br className="mobile"/>
        <div className="textHeader typewriter">
          <h1 className="desktop text-presentation">Bonjour, je suis développeur full-stack </h1>
          <h1 className="mobile text-presentation">Bonjour, je suis développeur full-stack</h1>
        </div>
        <div className="linkSocialHome">
          <a className="linkSocial" href="https://github.com/Lucasss12"><FontAwesomeIcon icon={faGithub} className="iconGit icon-size" /></a>
          <a className="linkSocial" href="https://www.linkedin.com/in/lucas-m%C3%A9n%C3%A9-5a8942251/"> <FontAwesomeIcon icon={faLinkedin} className="icon-size"/> </a>
        </div>
        <div className='logoArrowBottom'>
          <p className="fontSize">Clique sur la flèche <br className="desktop"/>pour voir mes compétences</p>
          <Link className="fontSize nav-link active" to="skills" smooth={true} duration={10}><img className='logoArrow'src={Arrow}/></Link>
        </div>
      </section>
    </div>
    <Skills/>
    <Projects/>
    <FormContact/>
    <Footer/>
    </>
  )
}

export default Header