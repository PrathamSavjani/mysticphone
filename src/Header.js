import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#222221", fontSize: "1.2rem" }}
      >
        <a class="navbar-brand" href="#" style={{ fontSize: "1.3rem" }}>
          <i class="fas fa-mobile"></i>&nbsp;&nbsp; Mystic Phone
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to="./">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="./sources">
                Smartphones
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="./addphone">
                Sell Phone
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
