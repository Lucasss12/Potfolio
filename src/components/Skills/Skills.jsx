import { Element } from 'react-scroll';
import JsLogo from '../../images/js.svg';
import RubyLogo from '../../images/ruby.svg';
import HtmlLogo from '../../images/html.svg';
import CssLogo from '../../images/css.svg';
import ScssLogo from '../../images/scss.svg';
import ReactLogo from '../../images/react.svg';
import NodeJSLogo from '../../images/nodejs.svg';
import RailsLogo from '../../images/rails.svg';
import { Link } from 'react-scroll';
import Arrow from '../../images/arrow-bottom.svg'


const Skills =() => {
    return (
        <Element name="skills">
        <>
        <div className="containerSkills">
            <div className="titleMySkill">
                <h1>// Mes compétences</h1>
            </div>
            <div className="containerLangage">
                <div className="boxLangage">
                    <div className="boxSkills">
                        <img src={JsLogo} className='logoSkills' alt="JavaScript logo" /> <p className='textSkillsLangage'>Javascript</p>
                    </div>
                    <div className="boxSkills">
                        <img src={RubyLogo} className='logoSkills' alt="Ruby logo" /> <p className='textSkillsLangage'>Ruby</p>
                    </div>
                    <div className="boxSkills">
                        <img src={HtmlLogo} className='logoSkills' alt="Html logo" /> <p className='textSkillsLangage'>HTML</p>
                    </div>
                    <div className="boxSkills">
                        <img src={CssLogo} className='logoSkills' alt="Css logo" /> <p className='textSkillsLangage'>CSS</p>
                    </div>
                </div>
                <div className="boxFramework">
                    <div className="boxSkills">
                        <img src={ReactLogo} className='logoSkills' alt="React logo" /> <p className='textSkillsLangage'>React</p>
                    </div>
                    <div className="boxSkills">
                        <img src={NodeJSLogo} className='logoSkills' alt="Node JS logo" /> <p className='textSkillsLangage'>Node</p>
                    </div>
                    <div className="boxSkills">
                        <img src={RailsLogo} className='logoSkills' alt="Rails logo" /> <p className='textSkillsLangage'>Rails</p>
                    </div>
                    <div className="boxSkills">
                        <img src={ScssLogo} className='logoSkills' alt="Scss logo" /> <p className='textSkillsLangage'>SASS</p>
                    </div>
                </div>
            </div>
            <div className='logoArrowBottom'>
          <p className="fontSize">Clique sur la flèche <br className="desktop"/>pour voir mes projects</p>
          <Link className="fontSize nav-link active" to="projets" smooth={true} duration={10}><img className='logoArrow'src={Arrow}/></Link>
        </div>
        </div>
        </>
        </Element>
    );
};

export default Skills;