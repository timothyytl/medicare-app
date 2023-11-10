import React from "react"
import heroImg01 from "../assets/images/hero-doc01.png"
import heroImg02 from "../assets/images/hero-doc02.png"
import heroImg03 from "../assets/images/hero-doc03.png"
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import featureImg from "../assets/images/feature-Img.png"
import faqImg from "../assets/images/faq-img.png"
import videoIcon from "../assets/images/video-icon.png"
import avatarIcon from "../assets/images/avatar-icon.png"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"
import About from "../components/About/About"
import ServiceList from "../components/Services/ServiceList"
import DoctorList from "../components/Doctors/DoctorList"
import FaqList from "../components/Faq/FaqList"
import Testimonial from "../components/Testimonial/Testimonial"

export default function Home() {
  return (
    <>
      {/* hero section  */}
      <section className="hero_section pt-[60px] 2xl:h-[800px] pl-8">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We are here when you need us. <br /> Healing hands with caring
                  hearts.
                </h1>
                <p className="text_para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                  commodi aliquid molestiae hic obcaecati enim sunt natus ex
                  aliquam dolore eligendi eos repellat amet maxime numquam, odit
                  suscipit veritatis. Dicta!
                </p>

                <button className="btn">Request an Appointment</button>
              </div>

              {/* hero counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[45px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[45px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Clinic Locations</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[45px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img
                  className="w-full rounded-2xl"
                  src={heroImg01}
                  alt="hero image"
                />
              </div>
              <div className="mt-[30px]">
                {/* <img
                  className="w-3/4 mb-[30px] rounded-2xl"
                  src={heroImg02}
                  alt="hero image 2"
                />
                <img
                  className="w-3/4 mb-[30px] rounded-2xl"
                  src={heroImg03}
                  alt="hero image 3"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-customPrimary">
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center text-white">
              Providing the best medical services
            </h2>
            <p className="text_para text-center text-white">
              World-class care for everyone. Our health system offers
              unparalleled, expert healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="icon1" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-white font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-white font-[400] mt-4 text-center">
                  World-class care for everyone. Our health system offers
                  unparalleled, expert healthcare. From the lab to the clinic.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-white mt-[30px] mx-auto flex items-center justify-center group hover:bg-white hover:border-none"
                >
                  <BsArrowRight className="text-white group-hover:text-customPrimary w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="icon1" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-white font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-white font-[400] mt-4 text-center">
                  World-class care for everyone. Our health system offers
                  unparalleled, expert healthcare. From the lab to the clinic.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-white mt-[30px] mx-auto flex items-center justify-center group hover:bg-white hover:border-none"
                >
                  <BsArrowRight className="text-white group-hover:text-customPrimary w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="icon1" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-white font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-white font-[400] mt-4 text-center">
                  World-class care for everyone. Our health system offers
                  unparalleled, expert healthcare. From the lab to the clinic.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-white mt-[30px] mx-auto flex items-center justify-center group hover:bg-white hover:border-none"
                >
                  <BsArrowRight className="text-white group-hover:text-customPrimary w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about section  */}
      <About />

      {/* services section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our medical system offers
              unparalleled, expert healthcare.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>

      {/* features section  */}
      <section className="container ml-3">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* feature content */}
          <div className="xl:w-[670px]">
            <h2 className="heading">
              Get virtual treatment <br /> Anytime.
            </h2>

            <ul className="pl-4">
              <li className="text_para">
                1. Schedule the appointment directly.
              </li>
              <li className="text_para">
                2. Search for your physician here, and contact their office.
              </li>
              <li className="text_para">
                3. View our physicians who are accepting new patients, use the
                online scheduling tool to select an appointment time.
              </li>
            </ul>
            <Link to="/">
              <button className="btn">Learn more</button>
            </Link>
          </div>

          {/* feature image  */}
          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img
              src={featureImg}
              alt="featured image"
              className="w-3/4 rounded-3xl"
            />

            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px] rounded-[10px] shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600] ml-3">
                    Mon, 18
                  </p>
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                    09:00AM
                  </p>
                </div>
                <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] mr-2">
                  <img src={videoIcon} alt="video icon" />
                </span>
              </div>

              <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 ml-3 lg:mt-4 rounded-full">
                Consultation
              </div>

              <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 ml-3 lg:mt-[18px]">
                <img src={avatarIcon} alt="avatar icon" />
                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-customPrimary">
                  Roger Federer
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* doctors section  */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great doctors</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our medicare system offers
              unparalleled, expert healthcare.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>

      {/* faq section  */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="faq img" className="rounded-3xl" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved patients
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* testimonial section  */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patients say</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our medicare system offers
              unparalleled, expert healthcare.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  )
}
