import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/handwave.json";

const Main = () => {
  const [isAnimationPlaying] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex-col justify-center items-center font-grotesk animate-fadeIn">
      <div className="flex justify-center items-center z-10">
        <h1 className="text-6xl font-medium bg-gradient-to-r from-blue-500 via-indigo-300 to-violet-400 inline-block text-transparent bg-clip-text">
          hello there!
        </h1>
        <div style={{ width: "100px", height: "100px" }} className="">
          <Lottie
            options={defaultOptions}
            height={80}
            width={80}
            isStopped={!isAnimationPlaying}
            isPaused={!isAnimationPlaying}
          />
        </div>
      </div>
      <div className="flex justify-center items-center pb-2">
        <h1 className="text-5xl text-gray-600 font-medium">
          I&apos;m{" "}
          <span className="bg-gradient-to-r  from-blue-500 via-indigo-300 to-violet-400 inline-block text-transparent bg-clip-text">
            Shubham Kumar
          </span>
        </h1>
      </div>
      <div className="flex justify-center items-center text-center">
        <p className="text-lg text-gray-600">
          19 y/o college student.{" "}
          <span className="bg-gradient-to-r from-blue-600 to-green-400 inline-block text-transparent bg-clip-text">
            young thinker
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-blue-600 to-green-400 inline-block text-transparent bg-clip-text">
            developer
          </span>{" "}
          diving<br></br> into{" "}
          <span className="bg-gradient-to-r from-blue-600 to-green-400 inline-block text-transparent bg-clip-text">
            full-stack engineering
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-blue-600 to-green-400 inline-block text-transparent bg-clip-text">
            blockchain/web3
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default Main;
