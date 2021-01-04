import Link from 'next/link';
import Head from 'next/head';
import { useIns, useInsDispatch } from '../pages/contexts/CartContext';
import { useItems } from '../pages/contexts/ProductsContext';
import { usefunctions } from '../pages/contexts/functionContext';
import { useUser, useUserDispatch } from '../pages/contexts/userContext';

export default function Layout({
    children,
    title = 'This is the default title',
}) {
    const { user, tmpuser } = useUser();
    const { itemlen } = useItems();
    const { inslen } = useIns();
    const { setInstances } = useInsDispatch();
    const { setUser, setTmpuser } = useUserDispatch();
    const { checkdb } = usefunctions();

    const handleLogout = () => {
        setUser('');
        setInstances('');
    };
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            {/*
      <Header />*/}
            <header className="sticky-top">
                <div>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark  shadow ">
                        <div className="col-sm-7">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link href="/">
                                        <a className="navbar-brand">Home</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/item/display/Items">
                                        <a className="nav-link">
                                            {' '}
                                            Display Items(user only)
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/link2">
                                        <a className="nav-link">
                                            {' '}
                                            Display Genre
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/about">
                                        <a className="nav-link">About</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/contact">
                                        <a className="nav-link">Contact</a>
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        className="btn btn-sm btn-link "
                                        onClick={checkdb}
                                    >
                                        check database
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="mr-4 ml-2 col-sm-5">
                            {!user && (
                                <Link href="/login">
                                    <a className="text-success mt-1 mb-0 mr-2">
                                        Login
                                    </a>
                                </Link>
                            )}

                            {user && (
                                <a
                                    className="text-success mt-1 mb-0 mr-2"
                                    style={{ cursor: 'pointer' }}
                                    onClick={handleLogout}
                                >
                                    Logout
                                </a>
                            )}
                            {console.log('user: ', user)}
                            {console.log('tmpuser: ', tmpuser)}
                            {user && (
                                <Link href="/">
                                    <a className="text-success mt-1 mb-0 mr-2">
                                        Hello ({user})
                                    </a>
                                </Link>
                            )}
                            {!user && (
                                <Link href="/">
                                    <a className="text-success mt-1 mb-0 mr-2">
                                        Hello ({tmpuser})
                                    </a>
                                </Link>
                            )}
                            <Link href="/">
                                <a className="text-success mt-1 mb-0 mr-2">
                                    Store({itemlen})
                                </a>
                            </Link>
                            <Link href="/cart">
                                <a className="text-light mt-1 mb-0 mr-2">
                                    Cart ({inslen})
                                </a>
                            </Link>
                            <Link href="/order">
                                <a className="text-light mt-1 mb-0 mr-2">
                                    Order
                                </a>
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>

            {children}

            <footer>
                <nav className="navbar navbar-expand-sm shadow mt-3">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link py-0 ">Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}
