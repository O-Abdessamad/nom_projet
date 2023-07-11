import { Link , NavLink} from "react-router-dom";

function Header() {
    return (
      <>
        <header>
          <div>
            <h1><Link className="naavlink" to="/">LOGO</Link></h1>
          </div>
          <div className="menu">
            <h2 className="titreH2"><NavLink className="naavlink" to="/javascript">JavaScript</NavLink></h2>
            <h2 className="titreH2"><NavLink className="naavlink" to="/html">Html</NavLink></h2>
            <h2 className="titreH2"><NavLink className="naavlink" to="/css">Css</NavLink></h2>
          </div>
        </header>
        
      </>
    );
  }
  
  export default Header;
  