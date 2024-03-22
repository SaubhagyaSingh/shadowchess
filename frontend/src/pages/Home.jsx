import React from "react";
import brain2 from "../assets/brain2.png";
import { Link } from "react-scroll";
import P1 from "../assets/p1.png";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center  bg-[#000a15] text-white">
      <div className="flex flex-col items-center justify-center h-[100vh] w-[100%] ">
        <h1 className="text-7xl text-center flex items-center">
          Shadow-gm
          <img className="h-24 w-auto ml-4" src={brain2} alt="brain"></img>
        </h1>
        <p className="mt-4 text-center break-normal p-2 m-2 text-xl">
          Welcome to your personal Chess bot trainer.
          <br />
          Here, you can train your Shadow chess bot for free with just a few
          simple steps.
        </p>
        <a href="#work" className="mt-4">
          <Link to="work" smooth={true}>
            <button className="bg-[var(--bgt)] hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </Link>
        </a>
      </div>
      <div id="work" className="flex flex-col  h-[200vh] w-[100%]">
        <div className="mt-24 ml-24">
          <h1 className="text-2xl ml-24 mb-12">
            Follow these steps to get a copy of your games from{" "}
            <a
              href="https://www.lichess.org"
              target="_blank"
              className="font-[anta]"
            >
              Lichess.com
            </a>
          </h1>
          <div className="mb-44 flex">
            <div className="mt-12 mr-[12rem] flex">
              {" "}
              <div className="flex p-4 m-2">
                <img
                  src={P1}
                  className="h-[300px] w-[600px] rounded-[20px] border-2"
                ></img>
              </div>
              <div className="ml-36 mt-8 w-[400px] mr-0 text-[44px] justify-center align-items">
                description:<br></br>
                <p className="font-[anta] text-[28px] mt-4">
                  {" "}
                  1)Login into your Lichess Account<br></br>
                  2)Click on your Username at the top right of the screen.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-36">
            <div className="ml-2 flex">
              <div className="mr-72 mt-8 w-[400px] text-[44px] justify-center align-items">
                description:<br></br>
                <p className="font-[anta] text-[28px] mt-4">
                  {" "}
                  1)Once you get on the profile page as shown here<br></br>
                  2)Click on the download icon from the tray.
                </p>
              </div>{" "}
              <div className="flex p-4 m-2">
                <img
                  src={P2}
                  className="h-[300px] w-[600px] rounded-[20px] border-2"
                ></img>
              </div>
            </div>
          </div>

          <div className="mb-36 flex">
            <div className="mt-12 mr-[12rem] flex">
              {" "}
              <div className="flex p-4 m-2">
                <img
                  src={P3}
                  className="h-[300px] w-[600px] rounded-[20px] border-2"
                ></img>
              </div>
              <div className="ml-36 mt-8 w-[400px] mr-0 text-[44px] justify-center align-items">
                description:<br></br>
                <p className="font-[anta] text-[28px] mt-4">
                  {" "}
                  1)Apply the shown settings to your data<br></br>
                  2)Now Click on the Download button to get your pgn file.
                  <br></br>
                  <a
                    href="/train"
                    className="mt-4 text-[20px] bg-[var(--bgt)] hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
                  >
                    Start Training
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
