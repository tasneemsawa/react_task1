import style from './navbar.module.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-4 bg-mainColor">
      <div className="container">
        <a className="navbar-brand logo fw-bold fs-3 text-white " href="#">
          START BOOTSTRAP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

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