import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-slate-500 text-slate-200  text-center">
      <div className="">
        <h1 className="font-extrabold text-2xl">Ini Footer</h1>
        <ul className="flex justify-between space-x-6 text-xl">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/Comunity">About & Project</Link>
          </li>
          <li className="">{/* <Link to="/Contact">Contact</Link> */}</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
