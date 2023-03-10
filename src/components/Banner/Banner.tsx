import React, { useContext } from "react";
import BannerGif from "../../assets/banner.gif";
import { AuthContext } from "../../Contexts/AuthProvider";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import AnchorLink from "react-anchor-link-smooth-scroll";

function Banner() {
  return (
    <section className="mt-12">
      <div className="container">
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 ">
          <div className="flex flex-col justify-center lg:justify-center items-center lg:items-start">
            <h1 className="text-5xl md:text-5xl lg:text-6xl text-center lg:text-left text-shadeBlack font-bold font-inter mb-5">
              Raise the bar of your fitness
            </h1>
            <p className="text-center lg:text-left mb-8">
              Being physically active can improve your brain health, help manage
              weight, reduce the risk of disease, strengthen bones and muscles,
              and improve your ability to do everyday activities.
            </p>

            <a href="#exercises">
              <PrimaryButton
                txt={<span className="px-12">Explore</span>}
                bg="white"
                className="px-12"
                shadow={true}
              ></PrimaryButton>
            </a>
          </div>
          <div
            data-aos="zoom-in"
            className="rounded-xl justify-self-center lg:justify-self-end "
          >
            <img
              src={BannerGif}
              alt=""
              className="rounded-xl w-[80%] mx-auto lg:w-[100%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
