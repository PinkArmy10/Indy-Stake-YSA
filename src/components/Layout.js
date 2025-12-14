import { Outlet, Link, useLocation} from "react-router-dom";
import React, {useState} from "react";
import "./Layout.css";


const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <>
            <nav className={isOpen ? "isOpen" : ""}>
                <button onClick={() => setIsOpen(!isOpen)}>&#8801;</button>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/calendar">Calendar</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;