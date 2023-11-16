/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { Link } from "react-scroll";
import lg from "../imags/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import t1 from "../imags/tweet 1.png";
import t2 from "../imags/tweet 2.png";
import t3 from "../imags/tweet 3.png";
import t4 from "../imags/tweet 4.png";
import t5 from "../imags/tweet 5.png";
import t6 from "../imags/tweet 6.png";
import lin from "../imags/linkedin.png";
import ins from "../imags/instagram.png";
import flogo from "../imags/flogo.png";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [message, setMessage] = useState("");
  const [messageClassName, setMessageClassName] = useState("mb-4 pb-4 hidden");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setMessage("");
    setMessageClassName("mb-4 pb-4 hidden");
    // console.log(id, " ", value);
    setUser({
      ...user,
      [id]: value,
    });
  }

  function handleRegisterUser(e) {
    e.preventDefault();
    const now = new Date();
    const data = {
      ...user,
      date: "" + now.getDate(),
      month: "" + now.getMonth(),
      year: "" + now.getFullYear(),
    };
    // console.log(data);
    axios
      .post("https://ethnus-project-backend.vercel.app/api/users", data)
      .then((res) => {
        // console.log(res);
        navigate("/");
      })
      .catch((res) => {
        // console.log(res.response.data.message);
        setMessage(res.response.data.message);
        setMessageClassName("mb-4 pb-4 ");
      });
  }
  // console.log(new Date().getFullYear());

  return (
    <div>
      <div className="flex justify-between items-center w-full h-20  bg-gradient-to-r from-blue-950 to bg-neutral-950 fixed px-4  top-0 ">
        <div className="flex w-20 h-20">
          <img src={lg} alt="logo"></img>
          <p className="text-3xl text-orange-100  font-mono font-extrabold mt-5 ">
            ListenUp{" "}
          </p>
        </div>
        <ul className="md:flex hidden justify-end ">
          <li className=" px-3 text-lg ml-2 mr-2 text-orange-100 hover:scale-110 duration-200 cursor-pointer hover:text-orange-700">
            <Link to="Home" smooth duration={500}>
              Home
            </Link>
          </li>
          <li className=" px-3 text-lg ml-2 mr-2 text-orange-100 hover:scale-110 duration-200 cursor-pointer hover:text-orange-700">
            <Link to="About" smooth duration={500}>
              About
            </Link>
          </li>
          <li className=" px-3 text-lg ml-2 mr-2 text-orange-100 hover:scale-110 duration-200 cursor-pointer hover:text-orange-700">
            <Link to="Reviews" smooth duration={500}>
              Reviews
            </Link>
          </li>
          <li className=" px-3 text-lg ml-2 mr-2 text-orange-100 hover:scale-110 duration-200 cursor-pointer hover:text-orange-700">
            <Link to="Contact" smooth duration={500}>
              Contact Us
            </Link>
          </li>
          <li>
            <button className="bg-red-400 hover:bg-orange-700 rounded-xl text-white font-extrabold mr-2 p-1 text-center text-md px-8  ml-2 hover:scale-110 duration-200 cursor-pointer hover:text-cyan-300">
              <Link to="Login" smooth duration={500}>
                Login
              </Link>
            </button>
          </li>
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer md:hidden z-4  text-orange-100  pr-4 right-0"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col bg-gradient-to-r from-blue-900 to-neutral-800 justify-center items-center   absolute top-20 right-0 w-full h-screen md:hidden">
            <li className=" px-3 text-3xl mb-4 text-orange-100 hover:scale-110 duration-200 cursor-pointer hover:text-orange-700">
              <Link
                onClick={() => setNav(!nav)}
                to="Home"
                smooth
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className=" px-3 text-3xl mb-4 text-orange-100 hover:scale-110 duration-200 cursor-pointer hover:text-orange-700">
              <Link
                onClick={() => setNav(!nav)}
                to="About"
                smooth
                duration={500}
              >
                About
              </Link>
            </li>
            <li className=" px-3 text-3xl mb-4 text-orange-100 hover:scale-110 duration-200 cursor-pointer hover:text-orange-700">
              <Link
                onClick={() => setNav(!nav)}
                to="Reviews"
                smooth
                duration={500}
              >
                Reviews
              </Link>
            </li>
            <li className=" px-3 text-3xl mb-4 text-orange-100 hover:scale-110 duration-200 cursor-pointer hover:text-orange-700">
              <Link
                onClick={() => setNav(!nav)}
                to="Contact"
                smooth
                duration={500}
              >
                Contact Us
              </Link>
            </li>
            <li className=" px-3 text-3xl mb-4 text-orange-100 hover:scale-110 duration-200 cursor-pointer hover:text-orange-700">
              <Link
                onClick={() => setNav(!nav)}
                to="Login"
                smooth
                duration={500}
              >
                Login/SignUp
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div
        name="Home"
        className="bg-gradient-to-r from-blue-950 to bg-neutral-950 pt-48 text-orange-100 pb-20 "
      >
        <div className="md:flex md:justify-between ">
          <div className="md:w-1/2 md:h-1/2 w-full h-1/2">
            <p className="pl-10 pr-10 pb-10 text-5xl font-bold text-center">
              Welcome to ListenUp
            </p>
            <p className="text-xl pl-10 text-center ">
              Your Ultimate Podcast Destination!
            </p>
            <p class="mt-20 text-2xl text-orange ml-10 text-center">
              Experience the future of audio entertainment with ListenUp.
            </p>
          </div>
          <div
            name="Login"
            className=" sm:flex  sm:items-center sm:justify-center  md:m-0 mr-10 ml-10 pl-8 mt-10 md:pr-24"
          >
            <div className=" bg-gradient-to-l from-blue-950 to bg-neutral-950  pl-8 pr-8 rounded-xl shadow-cyan-200 shadow-md w-96">
              <h1 className="text-3xl font-bold mb-4 pt-4 pb-8 text-center">
                Register
              </h1>
              <form>
                <div className="mb-4 pb-4">
                  <input
                    required
                    type="Name"
                    id="name"
                    value={user.name}
                    onChange={handleChange}
                    className=" hover:scale-105 duration-200 w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 bg-cyan-100 placeholder:text-slate-700 text-blue-950"
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="flex mb-4 pb-4">
                  <input
                    required
                    type="radio"
                    id="gender"
                    value="male"
                    name="gender"
                    onChange={handleChange}
                    className=" hover:scale-105 duration-200 w-full  border rounded-md focus:outline-none focus:border-blue-500 bg-cyan-100 placeholder:text-slate-700 text-blue-950"
                    placeholder="Enter your Name"
                  />
                  <label className=" hover:scale-105 duration-200 w-full  border rounded-md focus:outline-none focus:border-blue-500 bg-cyan-100 placeholder:text-slate-700 text-blue-950 text-center	">
                    {" "}
                    Male
                  </label>
                  <input
                    required
                    type="radio"
                    id="gender"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    className=" hover:scale-105 duration-200 w-full  border rounded-md focus:outline-none focus:border-blue-500 bg-cyan-100 placeholder:text-slate-700 text-blue-950"
                    placeholder="Enter your Name"
                  />
                  <label className=" hover:scale-105 duration-200 w-full  border rounded-md focus:outline-none focus:border-blue-500 bg-cyan-100 placeholder:text-slate-700 text-blue-950 text-center	">
                    {" "}
                    Female
                  </label>
                </div>
                <div className="mb-4 pb-4">
                  <input
                    required
                    type="email"
                    id="email"
                    value={user.email}
                    onChange={handleChange}
                    className=" hover:scale-105 duration-200 w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 bg-cyan-100 placeholder:text-slate-700 text-blue-950"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4 pb-4">
                  <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="hover:scale-105 duration-200 w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 bg-cyan-100 placeholder:text-slate-700 text-blue-950"
                    placeholder="Enter your password"
                  />
                </div>
                <div className={messageClassName}>
                  <center>
                    <label className=" hover:scale-105 duration-200 w-full  border rounded-md focus:outline-none focus:border-blue-500 bg-cyan-100 placeholder:text-slate-700 text-blue-950 text-center	">
                      {message}
                    </label>
                  </center>
                </div>
                <center>
                  <button
                    type="submit"
                    className="w-1/2   text-center  hover:scale-105 duration-200 bg-blue-500 text-white p-2 mt-3 rounded-md hover:bg-orange-700 hover:text-cyan-300 font-bold focus:outline-none"
                    onClick={handleRegisterUser}
                  >
                    Sign Up
                  </button>
                </center>
              </form>
              <p className=" mt-4 text-sm pb-4 text-orange-100 text-center">
                Already registered?{" "}
                <RouterLink
                  to="/"
                  className="text-orange-300 hover:text-orange-700 hover:scale-120 duration-200 cursor-pointer"
                >
                  Click here
                </RouterLink>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        name="About"
        className="bg-gradient-to-r from-blue-950 to to-neutral-950 tracking-wider"
      >
        <p className="text-orange-100 text-5xl pt-6 pb-6 font-bold text-center ">
          About Us
        </p>
        <div className=" mx-auto px-4">
          <div className="">
            <p className="text-2xl tracking-wide text-sky-100 pb-3 pl-4">
              Welcome to{" "}
              <span className="text-2xl text-orange-200 ">ListenUp</span> -{" "}
              <span className="text-orange-100">Your Podcast Destination.</span>{" "}
              Our mission is to connect you with the world of podcasts,
              providing a platform for both listeners and creators to thrive.
            </p>
            <p className="text-xl text-sky-100 mt-4 pb-3 text-left pl-4">
              At ListenUp, we believe in the transformative power of audio
              content. Whether you're a passionate podcast enthusiast or a
              budding creator, we're here to empower your podcasting journey.
              Here's what we're all about:
            </p>
            <ul className="list-disc text-sky-100 ml-6 mt-4 text-left pl-4">
              <li className="pb-4">
                <span className="text-bold text-xl  text-orange-100 ">
                  Discover:
                </span>{" "}
                Explore a vast library of podcasts covering every genre and
                topic you can imagine.
              </li>
              <li className="pb-4">
                <span className="text-bold text-xl  text-orange-100 ">
                  Connect:
                </span>{" "}
                Join our vibrant community of listeners, creators, and podcast
                lovers from around the world.
              </li>
              <li className="pb-4">
                <span className="text-bold text-xl  text-orange-100 ">
                  Create:
                </span>{" "}
                If you're a podcaster, use ListenUp to share your stories,
                knowledge, and ideas with a global audience.
              </li>
              <li className="pb-4">
                <span className="text-bold text-xl  text-orange-100 ">
                  Personalize:
                </span>{" "}
                Customize your podcast experience to match your interests and
                preferences.
              </li>
              <li className="pb-4">
                <span className="text-bold text-xl  text-orange-100 ">
                  Stay Informed:
                </span>{" "}
                Stay updated with the latest episodes and trends in the
                podcasting world.
              </li>
            </ul>
            <p className="text-xl text-left pl-6 text-sky-100 mt-4 pb-8">
              We're on a mission to make podcasting accessible, enjoyable, and
              enriching for everyone. Join us on this journey and let's explore
              the fascinating world of audio storytelling together!
            </p>
          </div>
        </div>
      </div>
      <div
        name="Reviews"
        className="bg-gradient-to-r from-blue-950 to to-neutral-950  pb-20"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
          <div>
            <p className="text-orange-100 text-4xl pt-6 font-bold text-center pb-6  ">
              {" "}
              Take a look at what our users have to say
            </p>
          </div>
          <div className="grid  grid-cols-2 md:grid-cols-3  text-sky-100">
            <div className="shadow-md  mb-6 md:mb-10 m-6 shadow-cyan-300">
              <img
                src={t1}
                alt="html"
                className=" mx-auto w-full h-full hover:scale-125 duration-200 "
              />
            </div>
            <div className="shadow-md  mb-6 md:mb-10 m-6  shadow-cyan-300">
              <img
                src={t2}
                alt="html"
                className=" mx-auto w-full h-full hover:scale-125 duration-200 "
              />
            </div>
            <div className="shadow-md  mb-6 md:mb-10 m-6 shadow-cyan-300">
              <img
                src={t3}
                alt="html"
                className="mx-auto w-full h-full hover:scale-125 duration-200 "
              />
            </div>
            <div className="shadow-md  mb-6 md:mb-10 m-6 shadow-cyan-300">
              <img
                src={t4}
                alt="html"
                className="mx-auto w-full h-full mb-2 hover:scale-125 duration-200"
              />
            </div>
            <div className="shadow-md   mb-6 md:mb-10 m-6 shadow-cyan-300">
              <img
                src={t5}
                alt="html"
                className="mx-auto w-full h-full hover:scale-125 duration-200 "
              />
            </div>
            <div className="shadow-md  mb-6 md:mb-10  m-6 shadow-cyan-300">
              <img
                src={t6}
                alt="html"
                className="mx-auto mb-4 w-full h-full hover:scale-125 duration-200 "
              />
            </div>
          </div>
        </div>
      </div>
      <div
        name="Contact"
        className="bg-gradient-to-r from-blue-950 to to-neutral-950  "
      >
        <p className="text-orange-100 text-5xl font-bold text-center pt-4">
          Contact Us
        </p>

        <div className="flex flex-col justify-center items-center p-10">
          <form
            action="https://usebasin.com/f/14242b063335"
            method="POST"
            className="flex flex-col w-2/3 md:w-1/2"
          >
            <input
              type="text"
              placeholder="Enter your Name"
              className="p-2 m-2  rounded-md border-2 bg-transparent text-orange-100 placeholder:text-gray-100"
            ></input>
            <input
              type="text"
              placeholder="Enter your Email"
              className="p-2  m-2 rounded-md border-2 bg-transparent text-orange-100 placeholder:text-gray-100"
            ></input>
            <textarea
              name="message"
              rows={10}
              placeholder="Enter your Query"
              className=" rounded-md m-2 border-2 bg-transparent text-orange-100 placeholder:text-gray-100  p-2 text-xl"
            ></textarea>
            <center>
              <button className="  pl-3 pr-3 h-10 text-xl text-white font-bold rounded-lg bg-red-400 hover:text-cyan-300 hover:bg-orange-700 m-4 hover:scale-110 duration-100 ">
                Submit
              </button>
            </center>
          </form>
        </div>
      </div>
      <footer className="bg-black  text-orange-100 pt-4">
        <div className=" mx-auto text-center">
          <div className="sm:flex justify-between">
            <div className="pl-3 w-1/4 h-1/4">
              <img src={flogo} className="w-2/3 h-2/3 "></img>
            </div>

            <div className="mt-6   mr-4 flex">
              <a
                href="https://privacy.microsoft.com/en-ca/privacystatement"
                target="_blank"
              >
                Privacy Policy
              </a>
              <span className="mx-2">|</span>
              <a
                href="https://www.microsoft.com/en-in/servicesagreement"
                target="_blank"
              >
                Terms of Service
              </a>
              <p className=" pl-8">
                &copy; 2023 ListenUp. All rights reserved.
              </p>
            </div>
          </div>

          <p className=" text-2xl font-bold mt-2">Creators </p>
          <div className="grid grid-cols-2 md:grid-cols-5 mt-5">
            <div className="text-orange-300 text-xl p-4 font-bold flex flex-col items-center">
              Ayush Sharma
              <div className="flex flex-row">
                <a
                  href="https://www.linkedin.com/in/ayush-sharma-47212b26b/"
                  target="_blank"
                >
                  <img
                    src={lin}
                    className="hover:scale-125 duration-200 h-8 w-8 rounded-lg mr-6 mt-2"
                  ></img>
                </a>
                <a
                  href="https://www.instagram.com/ayush_sharma0208/"
                  target="_blank"
                >
                  <img
                    src={ins}
                    className="hover:scale-125 duration-200 h-8 w-8 rounded-lg mr-4 mt-2"
                  ></img>
                </a>
              </div>
            </div>
            <div className="text-orange-300 text-xl p-4 font-bold flex flex-col items-center ">
              Samarth Nag
              <div className="flex flex-row">
                <a
                  href="https://www.linkedin.com/in/samarth-nag-444b6b226/"
                  target="_blank"
                >
                  <img
                    src={lin}
                    className="hover:scale-125 duration-200 h-8 w-8 rounded-lg mr-6 mt-2"
                  ></img>
                </a>
                <a
                  href="https://www.instagram.com/samarth.nag_/"
                  target="_blank"
                >
                  <img
                    src={ins}
                    className="hover:scale-125 duration-200 h-8 w-8 rounded-lg mr-4 mt-2"
                  ></img>
                </a>
              </div>
            </div>
            <div className="text-orange-300 text-xl p-4 font-bold flex flex-col items-center">
              Risshab Singla
              <div className="flex flex-row">
                <a
                  href="https://www.linkedin.com/in/risshab-singla/"
                  target="_blank"
                >
                  <img
                    src={lin}
                    className="hover:scale-125 duration-200 h-8 w-8 rounded-lg mr-6 mt-2"
                  ></img>
                </a>
                <a
                  href="https://www.instagram.com/risshabsingla/"
                  target="_blank"
                >
                  <img
                    src={ins}
                    className="hover:scale-125 duration-200 h-8 w-8 rounded-lg mr-4 mt-2"
                  ></img>
                </a>
              </div>
            </div>
            <div className="text-orange-300 text-xl p-4 font-bold flex flex-col items-center">
              Shivam Dave
              <div className="flex flex-row">
                <a
                  href="https://www.linkedin.com/in/shivam-dave2003/"
                  target="_blank"
                >
                  <img
                    src={lin}
                    className="hover:scale-125 duration-200 h-8 w-8 rounded-lg mr-6 mt-2"
                  ></img>
                </a>
                <a
                  href="https://www.instagram.com/thevirtualshivam/"
                  target="_blank"
                >
                  <img
                    src={ins}
                    className="hover:scale-125 duration-200 h-8 w-8 rounded-lg mr-4 mt-2"
                  ></img>
                </a>
              </div>
            </div>
            <div className="text-orange-300 text-xl p-4 font-bold flex flex-col items-center ">
              Aditya Kashyap
              <div className="flex flex-row">
                <a
                  href="https://www.linkedin.com/in/aditya-kashyap-759882226/"
                  target="_blank"
                >
                  <img
                    src={lin}
                    className="hover:scale-125 duration-200 h-8 w-8 rounded-lg mr-6 mt-2"
                  ></img>
                </a>
                <a
                  href="https://www.instagram.com/aditya_4kashyap/"
                  target="_blank"
                >
                  <img
                    src={ins}
                    className="hover:scale-125 duration-200 h-8 w-8 rounded-lg mr-4 mt-2"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SignUp;
