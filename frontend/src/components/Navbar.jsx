import React, { useState, useEffect } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaDumbbell } from "react-icons/fa6";
import { LiaRobotSolid } from "react-icons/lia";
import { FaChessKing } from "react-icons/fa6";
import { FaDev } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const iconStyle = {
    color: "var(--ts)",
    fontSize: "1.5em",
    marginLeft: "5rem",
  };
  const iconContainerStyle =
    "h-[16.6666vh] w-[6rem] flex justify-center items-center hover:translate-y-1 transition hover:translate-x-1 hover";

  // State to manage the width of the div
  const [divWidth, setDivWidth] = useState("w-[5rem]");
  const [textColor, setTextColor] = useState("text-var(--bgp)");
  const [textVisibility, setTextVisibility] = useState("visible"); // State to manage text visibility
  const [expanded, setExpanded] = useState(false);

  const checkExpand = () => {
    setExpanded(!expanded); // Toggle the expanded state
  };

  useEffect(() => {
    // Update the width of the div based on the expanded state
    if (expanded) {
      setDivWidth("w-[15rem]");
      setTextColor("text-white");
      setTextVisibility("visible"); // Set text visibility to visible when expanded
    } else {
      setDivWidth("w-[5rem]");
      setTextColor("text-var(--bgp)");
      setTextVisibility("hidden"); // Set text visibility to hidden when collapsed
    }
  }, [expanded]); // Runs this effect whenever the expanded state changes

  return (
    <div
      className={`${divWidth}  h-[100vh] fixed bg-[var(--bgs)] flex flex-col align-items:center justify-items:center`}
    >
      <div
        onClick={checkExpand}
        className={`${iconContainerStyle} ${textColor}`}
        onMouseEnter={(e) =>
          e.currentTarget
            .querySelectorAll("svg")
            .forEach((svg) => (svg.style.color = "white"))
        }
        onMouseLeave={(e) =>
          e.currentTarget
            .querySelectorAll("svg")
            .forEach((svg) => (svg.style.color = "var(--ts)"))
        }
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={iconStyle}>
            <TiThMenu />
          </div>
          <span
            className={`${textColor} ml-12`}
            style={{ visibility: textVisibility }}
          >
            Menu
          </span>
        </div>
      </div>
      <div
        className={`${iconContainerStyle} ${textColor}`}
        onMouseEnter={(e) =>
          e.currentTarget
            .querySelectorAll("svg")
            .forEach((svg) => (svg.style.color = "white"))
        }
        onMouseLeave={(e) =>
          e.currentTarget
            .querySelectorAll("svg")
            .forEach((svg) => (svg.style.color = "var(--ts)"))
        }
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={iconStyle}>
            <a href="/home">
              <IoHomeSharp />
            </a>
          </div>
          <span
            className={`${textColor} ml-12`}
            style={{ visibility: textVisibility }}
          >
            <a href="/home">Home</a>
          </span>
        </div>
      </div>
      <div
        className={`${iconContainerStyle} ${textColor}`}
        onMouseEnter={(e) =>
          e.currentTarget
            .querySelectorAll("svg")
            .forEach((svg) => (svg.style.color = "white"))
        }
        onMouseLeave={(e) =>
          e.currentTarget
            .querySelectorAll("svg")
            .forEach((svg) => (svg.style.color = "var(--ts)"))
        }
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={iconStyle}>
            <a href="/train">
              <FaDumbbell />
            </a>
          </div>
          <span
            className={`${textColor} ml-12`}
            style={{ visibility: textVisibility }}
          >
            <a href="/train">Train</a>
          </span>
        </div>
      </div>
      <div
        className={`${iconContainerStyle} ${textColor}`}
        onMouseEnter={(e) =>
          e.currentTarget
            .querySelectorAll("svg")
            .forEach((svg) => (svg.style.color = "white"))
        }
        onMouseLeave={(e) =>
          e.currentTarget
            .querySelectorAll("svg")
            .forEach((svg) => (svg.style.color = "var(--ts)"))
        }
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={iconStyle}>
            <a href="/mybots">
              <LiaRobotSolid />
            </a>
          </div>
          <span
            className={`${textColor} ml-12`}
            style={{ visibility: textVisibility }}
          >
            <a href="/mybots">My Bots</a>
          </span>
        </div>
      </div>
      <div
        className={`${iconContainerStyle} ${textColor}`}
        onMouseEnter={(e) =>
          e.currentTarget
            .querySelectorAll("svg")
            .forEach((svg) => (svg.style.color = "white"))
        }
        onMouseLeave={(e) =>
          e.currentTarget
            .querySelectorAll("svg")
            .forEach((svg) => (svg.style.color = "var(--ts)"))
        }
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={iconStyle}>
            <a href="/play_the_dev">
              <FaChessKing />
            </a>
          </div>
          <span
            className={`${textColor} ml-12`}
            style={{ visibility: textVisibility }}
          >
            <a href="/play_the_dev">Play</a>
          </span>
        </div>
      </div>
      <div
        className={`${iconContainerStyle} ${textColor}`}
        onMouseEnter={(e) =>
          e.currentTarget
            .querySelectorAll("svg")
            .forEach((svg) => (svg.style.color = "white"))
        }
        onMouseLeave={(e) =>
          e.currentTarget
            .querySelectorAll("svg")
            .forEach((svg) => (svg.style.color = "var(--ts)"))
        }
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={iconStyle}>
            <a href="/about">
              <FaDev />
            </a>
          </div>
          <span
            className={`${textColor} ml-12`}
            style={{ visibility: textVisibility }}
          >
            <a href="/about">About</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
