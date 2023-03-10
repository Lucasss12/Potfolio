import { Link } from 'react-scroll';

const Navbar = () => {
      
    return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="fontSize navbar-brand" href="#"><span>&lt;Lucas /&gt;</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="linkNavbar fontSize nav-link active" to="skills" smooth={true} duration={50}>// Mes compétences</Link>
                </li>
                <li className="nav-item">
                <Link className="linkNavbar fontSize nav-link active" to="projets" smooth={true} duration={50}>// Mes projets</Link>

                </li>
            </ul>
            </div>
        </div>
    </nav>
    </>
);
};
export default Navbar