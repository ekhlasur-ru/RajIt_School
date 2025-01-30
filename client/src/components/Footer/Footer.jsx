import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="mx-auto max-w-[1200px] border-t-2 px-4 md:px-0">
        <div className="mt-8">
          <img
            width={200}
            src="https://school.rajit.net/images/L7QPZikDkfoXRKKIdrUb9oSAgmm1OEQG0WGpfITz.png"
            alt=""
          />
        </div>
        <div className="flex justify-between px-2 py-2">
          <div className="">
            <ul className="flex gap-4">
              <li className="hover:text-blue-400">
                <a href="">আমাদের সম্পর্কে</a>
              </li>
              <li className="hover:text-blue-400">
                <a href="">যোগাযোগ</a>
              </li>
            </ul>
          </div>
          <div className="flex">
            <ul className="flex gap-4">
              <li className="">
                <a href="">facebook</a>
              </li>
              <li className="">
                <a href="">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="mt-8 bg-[#EFF6FF]">
          <div className="flex items-center justify-center">
            <p className="items-center pr-4 text-center">পেমেন্ট অপশন</p>
            <img
              className="min-w-[500px] border-l-2"
              src="https://school.rajit.net/frontend/image/payment-methods.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row  px-2 py-6 md:justify-between">
          <div className="flex justify-evenly">
            <p>কপিরাইট © ২০২৩ rajIT School</p>
            <span className="px-4">|</span>
            <p>
              Design & Developed by{" "}
              <button onClick={() => navigate("/")} className="text-blue-400">
                rajIT Solutions Ltd
              </button>
            </p>
          </div>
          <div className="flex justify-around  gap-4 pb-2">
            <button
              onClick={() => navigate("/course")}
              className="hover:text-blue-400">
              শর্তাবলি
            </button>
            <button
              onClick={() => navigate("/course")}
              className="hover:text-blue-400">
              রিফান্ড পলিসি
            </button>
            <button
              onClick={() => navigate("/course")}
              className="hover:text-blue-400">
              গোপনীয়তা
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
