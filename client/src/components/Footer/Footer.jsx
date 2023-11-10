import React from "react"
import { Link } from "react-router-dom"
import footerLogo from "../../assets/images/footer-logo.png"
import { RiLinkedinFill } from "react-icons/ri"
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai"

const socialLinks = [
  {
    path: "https://www.youtube.com/",
    icon: (
      <AiFillYoutube className="group-hover:text-customPrimary w-4 h-5 text-white" />
    ),
  },
  {
    path: "https://www.github.com/",
    icon: (
      <AiFillGithub className="group-hover:text-customPrimary w-4 h-5 text-white" />
    ),
  },
  {
    path: "https://www.instagram.com/",
    icon: (
      <AiFillInstagram className="group-hover:text-customPrimary w-4 h-5 text-white" />
    ),
  },
  {
    path: "https://www.linkedin.com/",
    icon: (
      <RiLinkedinFill className="group-hover:text-customPrimary w-4 h-5 text-white" />
    ),
  },
]

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/blog",
    display: "Blog",
  },
]

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get an Opinion",
  },
]

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get an Opinion",
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="pb-16 pt-10 bg-customPrimary">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={footerLogo} alt="footer logo" />
            <p className="text-[16px] leading-7 font-[400] text-white mt-4">
              Copyright &copy; {year} developed by Timworks.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-white rounded-full flex items-center justify-center group hover:bg-white hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-white">
              Quick Links
            </h2>

            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-white"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-white">
              I want to:
            </h2>

            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-white"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-white">
              Support
            </h2>

            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-white"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
