import React from "react";
import './FixedNavbar.css';

function FixedNavbar() {
  return (
    <nav className="navbar fixed-top tc" role="navigation">
      <div className="container-fluid">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><h1>SafeBook</h1></li>
          </ul>
        </div>

        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="pull-left"><button target="_blank" rel="noopener noreferrer" href="#">Dashboard</button></li>
            <li className="active"><button target="_blank" rel="noopener noreferrer" href="#">Stories</button></li>
            <li><button target="_blank" rel="noopener noreferrer" href="#">Videos</button></li>
            <li><button target="_blank" rel="noopener noreferrer" href="#">Photos</button></li>
            <li className="social pull-right"><button href="#">Social Links</button></li>
          </ul>
        </div> {/* <!-- /.navbar-collapse --> */}
      </div> {/* <!-- /.container-fluid --> */}
    </nav>
  );
  // eslint-disable-next-line
{/**********

// Removed from Centered

          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Brand </a>


  // Mine
    <div>
      <nav className="navbar fixed-top navbar-light bg-light">
        <a className="navbar-brand" target="_blank" rel="noopener noreferrer" href="#"></a>
        <ul className="nav navbar-nav">
          <li><h1>Robo Click ME!</h1></li>
        </ul>
      </nav>
    </div>
    );
     */}
  }

  export default FixedNavbar;

