import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';

const Navbar = () => {
    const navigate = useNavigate()

    const links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) => `font-medium ${isActive ? 'text-primary' : 'text-white'}`}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/news"
                className={({ isActive }) => `font-medium ${isActive ? 'text-primary' : 'text-white'}`}>
                News
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/description"
                className={({ isActive }) => `font-medium ${isActive ? 'text-primary' : 'text-white'}`}>
                Description
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/blogs"
                className={({ isActive }) => `font-medium ${isActive ? 'text-primary' : 'text-white'}`}>
                Blogs
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive }) => `font-medium ${isActive ? 'text-primary' : 'text-white'}`}>
                Contact
            </NavLink>
        </li>
    </>

    return (
        <div className="navbar  px-24 font-montserrat">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <figure onClick={() => navigate('/')}>
                    <img src="https://i.ibb.co.com/hFnT4sNT/logo.png" className='invert w-32 h-1/4 mr-3 cursor-pointer' alt="" />
                </figure>
                <div>
                    <label className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded">
                        <svg className="h-[1em] text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="search"
                            required
                            placeholder="Search"
                            className="bg-transparent outline-none text-base-100 placeholder-gray-400"
                        />
                    </label>

                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/auth/login' className='btn btn-primary lg:px-8'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;