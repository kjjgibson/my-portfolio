import React from "react";
import PropTypes from "prop-types";

import { FaArrowDown } from "react-icons/fa/";

const Hero = props => {
  const { scrollToContent, mountains, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <span className="circle" />
        <div className="x1">
          <div className="cloud" />
        </div>
        <div className="x2">
          <div className="cloud" />
        </div>
        <h1>the engineer down under</h1>
        <button onClick={scrollToContent} aria-label="scroll">
          <FaArrowDown />
        </button>
        <section className="mountains" />
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .circle {
          background: #ed5aa1;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          position: fixed;
          margin-top: -100px;
        }

        @-webkit-keyframes animateCloud {
          0% {
            margin-left: -150px;
          }
          100% {
            margin-left: 50%;
          }
        }

        @-moz-keyframes animateCloud {
          0% {
            margin-left: -150px;
          }
          100% {
            margin-left: 50%;
          }
        }

        @keyframes animateCloud {
          0% {
            margin-left: -150px;
          }
          100% {
            margin-left: 50%;
          }
        }

        .x1 {
          -webkit-animation: animateCloud 120s linear infinite;
          -moz-animation: animateCloud 120s linear infinite;
          animation: animateCloud 120s linear infinite;

          -webkit-transform: scale(0.65);
          -moz-transform: scale(0.65);
          transform: scale(0.65);
          position: fixed;
        }

        .x2 {
          -webkit-animation: animateCloud 200s linear infinite;
          -moz-animation: animateCloud 200s linear infinite;
          animation: animateCloud 200s linear infinite;

          -webkit-transform: scale(0.3);
          -moz-transform: scale(0.3);
          transform: scale(0.3);
          position: fixed;
        }

        .cloud {
          background: #000;
          -webkit-border-radius: 100px;
          -moz-border-radius: 100px;
          border-radius: 100px;
          height: 90px;
          width: 310px;
        }

        .cloud:after,
        .cloud:before {
          background: #000;
          content: "";
          position: absolute;
          z-index: -1;
        }

        .cloud:after {
          -webkit-border-radius: 100px;
          -moz-border-radius: 100px;
          border-radius: 100px;
          height: 100px;
          left: 50px;
          top: -50px;
          width: 100px;
        }

        .cloud:before {
          -webkit-border-radius: 200px;
          -moz-border-radius: 200px;
          border-radius: 200px;
          width: 180px;
          height: 180px;
          right: 50px;
          top: -90px;
        }

        .mountains {
          align-items: center;
          background-image: url(${mountains.mobile});
          background-size: cover;
          width: 100%;
          z-index: 1;
          height: 100%;
          position: absolute;
          margin-top: 65px;
          background-position-y: center;
          background-position-x: center;
        }

        .hero {
          align-items: center;
          background: ${theme.hero.background};
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 100vh;
          height: 100px;
          z-index: 2;
          width: 100%;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";
          z-index: 3;
          position: absolute;
          top: 200px;
          padding: ${theme.space.inset.l};

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        button {
          background: ${theme.background.color.brand};
          border: 0;
          border-radius: 50%;
          font-size: ${theme.font.size.m};
          padding: ${theme.space.s} ${theme.space.m};
          cursor: pointer;
          width: ${theme.space.xl};
          height: ${theme.space.xl};
          margin-top: 700px;
          z-index: 2;
          position: absolute;
          bottom: 50px;

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(svg) {
            position: relative;
            top: 5px;
            fill: ${theme.color.neutral.white};
            stroke-width: 40;
            stroke: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .mountains {
            background-image: url(${mountains.tablet});
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .mountains {
            background-image: url(${mountains.desktop});
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }

          button {
            font-size: ${theme.font.size.xl};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  mountains: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
