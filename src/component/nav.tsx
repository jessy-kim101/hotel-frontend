//import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';
//import { useSelector, useDispatch } from 'react-redux';
//import  {persistor, type RootState} from '../app/store';
//import { logout } from '../features/login/userSlice';

const Nav = () => {
  // const dispatch = useDispatch();

  
const activeClassname = 'text-white font-semibold underline';
const inactiveClassname = 'text-gray-700 hover:text-primary transition-colors duration-200 font-medium';

return (
  <nav className="navbar bg-yellow-400 shadow-md px-4 py-2 fixed top-0 w-full z-50">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost text-gray-800 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-yellow-300 rounded-box mt-3 w-52 p-2 shadow-lg text-sm"
        >
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/hotels" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
              Hotel
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookings" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
              Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <NavLink to="/" className="flex items-center gap-2">
        <span className="text-xl font-bold text-primary hover:text-white transition duration-200">
          PANAROMA HOTEL RESORT
        </span>
      </NavLink>
    </div>

    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-4">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/hotels" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
            Hotel
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookings" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
            Bookings
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? activeClassname : inactiveClassname)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>

    <div className="navbar-end hidden lg:flex">
      <NavLink to="/login">
        <button className="btn bg-primary text-white hover:bg-white hover:text-primary border border-primary transition duration-200">
          Login
        </button>
      </NavLink>
    </div>
  </nav>
);


  
  
};

export default Nav;