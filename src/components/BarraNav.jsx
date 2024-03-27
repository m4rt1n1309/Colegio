import Navbar from "react-bootstrap/Navbar";
import "../style/Barranav.css";

function BarraNav() {
  return (
    <>
      <Navbar
        className="navlogin d-flex justify-content-center"
        expand="lg"
        width="150px"
      >
        <div className="div-imagen">
          <img
            src="https://i.imgur.com/tHyuwLF.png"
            alt="logoescuela"
            width="100px"
          />
        </div>
      </Navbar>
    </>
  );
}

export default BarraNav;
