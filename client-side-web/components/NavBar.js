import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <ul className="navbar-nav">
          <Link href="/">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu
              </a>
            </li>
          </Link>
          <Link href="./cart">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cart
              </a>
            </li>
          </Link>
          <Link href="./">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Waiter
              </a>
            </li>
          </Link>
        </ul>
      </nav>
      <style jsx>{`
        .navbar-nav {
          flex-direction: row;
        }
        .navbar-nav .nav-link {
          padding-left: 1rem;
          padding-right: 1rem;
        }

        li a {
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
