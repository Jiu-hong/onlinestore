import Head from 'next/head';
import Link from 'next/link';
import { useIns, useInsDispatch } from '../pages/contexts/CartContext';
import { useUser, useUserDispatch } from '../pages/contexts/userContext';
import { useRouter } from 'next/router';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Auth } from 'aws-amplify';

export default function Layout({ children, title = 'online store' }) {
  const router = useRouter();
  const { inslen } = useIns();
  const { user, isAuthenticated, tmpuser } = useUser();
  const { setInstances } = useInsDispatch();
  const { setUser, setAuthStatus } = useUserDispatch();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await Auth.signOut();
      setAuthStatus(false);
      setUser(null);
      setInstances('');
      router.replace('/');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
            <Link href="/contact">
              <a className="nav-link">Contact</a>
            </Link>
          </Nav>
          <Nav>
            {!isAuthenticated && (
              <NavDropdown title="Hello" id="collasible-nav-dropdown">
                <Link href="/login">
                  <a className="nav-link ml-3">Login</a>
                </Link>

                <Link href="/register">
                  <a className="nav-link ml-3">New? register</a>
                </Link>

                <NavDropdown.Divider />

                <Link href="/order">
                  <a className="nav-link ml-3">Order</a>
                </Link>
              </NavDropdown>
            )}
            {isAuthenticated && user && (
              <NavDropdown
                title={`Hello ${user.username}`}
                id="collasible-nav-dropdown"
              >
                <Link href="/profile">
                  <a className="nav-link ml-3">Profile</a>
                </Link>
                <Link href="/order">
                  <a className="nav-link ml-3">Order</a>
                </Link>
                <NavDropdown.Divider />
                <a
                  className="nav-link ml-3"
                  style={{ cursor: 'pointer' }}
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </NavDropdown>
            )}

            <Link href="/cart">
              <a className="nav-link">Cart ({inslen})</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {children}
      <footer>
        <Link href="/contact">
          <a className="nav-link">
            <small>Contact me</small>
          </a>
        </Link>
      </footer>
    </div>
  );
}
