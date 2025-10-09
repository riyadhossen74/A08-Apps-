import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import HeroSetion from "../Components/HeroSetion";
import TreindingApp from "../Components/TreindingApp";

const Home = () => {
  return (
    <div className="bg-[#f5f5f5] py-5">
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-6xl ">
          We Build <br />{" "}
          <span className="text-[#9F62F2] mt-5"> Productive </span>Apps
        </h1>
        <p className="py-5">
          AtHERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to <br /> turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="font-semibold pt-5 flex justify-center">
          <button className="mr-2.5 border-1 border-gray-300 p-2 flex items-center gap-2 hover:bg-fuchsia-700 hover:text-white">
            {" "}
            <FaGooglePlay />{" "}
            <a href="https://play.google.com/store/apps?hl=en&pli=1">
              Google Play
            </a>
          </button>
          <button className="mr-2.5 border-1 border-gray-300 p-2 flex items-center gap-2 hover:bg-fuchsia-700 hover:text-white">
            {" "}
            <FaAppStore />
            <a href="https://www.apple.com/app-store/">App Store</a>
          </button>
        </div>
      </div>
      <div className="flex items-center px-2 md:px-0 justify-center mt-3">
        <img src="/hero.png" alt="" />
      </div>
      <HeroSetion></HeroSetion>
      <TreindingApp></TreindingApp>
    </div>
  );
};

export default Home;
