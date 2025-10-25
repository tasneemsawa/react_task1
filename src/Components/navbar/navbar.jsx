import style from './navbar.module.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-4 bg-mainColor">
      <div className="container">
        <a className="navbar-brand logo fw-bold fs-3 text-white " href="#">
          START BOOTSTRAP
        </a>
        <button className="navbar-toggler text-center text-white bg-secondaryColor px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="fs-14">MENU </span>

        <svg width={"15"} height={"15"} class="svg-inline--fa fa-bars" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg>    </button>

        <div className="collapse navbar-collapse justify-content-end me-2" id="navbarNav">
          <ul className="navbar-nav d-flex gap-2 align-items-center">
            <li className="nav-item mx-2">
              <a className={`nav-link fw-bold text-uppercase text-white fs-6 ${style.links} `} href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className={`nav-link fw-bold text-uppercase text-white fs-6 ${style.links}`} href="#">
                About
              </a>
            </li>
            <li className="nav-item mx-2 ">
              <a className={`nav-link fw-bold text-uppercase text-white fs-6 ${style.links}`} href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar