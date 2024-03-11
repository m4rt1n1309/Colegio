import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import "../style/Barranav.css";

function BarraNav() {
  return (
    <>
      <Navbar className="navlogin d-flex justify-content-center" expand="lg">
        <div className='div-imagen'>
          <img src="../public/images/logoescuela.png" alt="logoescuela" width="150px" />
        </div>
      </Navbar>
    </>
  );
}

export default BarraNav;
