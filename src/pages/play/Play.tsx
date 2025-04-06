import { motion } from "framer-motion";
import { fadeInVariants } from "../../data/portfolio";
import { isMobileDevice } from "../../utils";
import { playItems } from "../../data/play";
import "./play.css";

const Play = () => {
  const childAnimationProps = {
    variants: fadeInVariants,
    initial: "initial",
    viewport: { once: true },
    whileInView: "animate",
  };
  const isMobile = isMobileDevice();
  return (
    <div className="play-parent">
      <div
        className=""
        style={{
          marginTop: 0,
          paddingTop: isMobile ? "0vh" : "4vh",
          paddingBottom: isMobile ? 0 : 10,
          gap: 0,
        }}
      >
        <motion.h5 {...childAnimationProps} custom={10} className="text-gray0">
          Bits and bytes
        </motion.h5>
        <motion.p {...childAnimationProps} custom={11} className="text-gray3">
          A collection of hobby-projects and design work
        </motion.p>
      </div>
      <br />
      <br />
      <div className="play-section">
        {playItems.map((item, index) => {
          return (
            <motion.div {...childAnimationProps} custom={12 + index}>
              <div
                key={index}
                className="content"
                onClick={() => window.open(item.href, "_blank")}
              >
                <div className="content-inner">
                  <img
                    src={item.image}
                    className="content-image"
                    alt={item.label}
                  />
                  <div className="content-inner-overlay"></div>
                </div>
                <div className="content-text">
                  <p className={isMobile ? "text-gray1 bold" : "text-gray2"}>
                    {item.label}
                  </p>
                  {isMobile && (
                    <small
                      className="text-gray4 short-desc"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></small>
                  )}
                </div>
              </div>
              {isMobile && <div className="section-separator"></div>}
            </motion.div>
          );
        })}
      </div>
      <br />
      <br />
    </div>
  );
};

export default Play;
