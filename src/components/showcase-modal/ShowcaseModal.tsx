import { CaretRight, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import portfolioData, { ShowcaseItem } from "../../data/portfolio";
import { isMobileDevice } from "../../utils";
import { AnimatedTooltip } from "../animated-tooltip/AnimatedTooltip";
import "./showcase-modal.css";

const ShowcaseModal = ({
  item,
  closeModal,
}: {
  item: ShowcaseItem;
  closeModal: () => void;
}) => {
  const [activeSlide, setActiveSlie] = useState<number>(item.id);
  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
        delayChildren: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
        delay: 0.4,
      },
    },
  };
  const isMobile = isMobileDevice();
  const allShowCaseItems = portfolioData["2024"];

  const modifySlide = () => {
    console.log("curret slide was ", activeSlide);
    setActiveSlie(activeSlide + 1);
    console.log("settings active slide to ", activeSlide + 1);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={overlayVariants}
        className="modal-overlay"
      >
        <Carousel
          selectedItem={activeSlide}
          axis="horizontal"
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={100}
          swipeable={!isMobile}
        >
          {allShowCaseItems.map((showcaseItem, index) => {
            return (
              <div className="modal-outer">
                <motion.div
                  key={index}
                  className="modal"
                  initial={{ y: "100vh" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100vh" }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="floating-parent">
                    <motion.div
                      className="floating-buttons"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 }}
                    >
                      <div
                        className={
                          isMobile ? "floating-button long" : "floating-button"
                        }
                        onClick={closeModal}
                      >
                        {isMobile ? (
                          <>
                            <X size={14} /> <p className="text-gray1">Close</p>
                          </>
                        ) : (
                          <X size={18} />
                        )}
                      </div>
                      {index === allShowCaseItems.length - 1 ? null : (
                        <button
                          className="floating-button long"
                          onClick={() => modifySlide()}
                        >
                          <span className="flex-row">
                            {isMobile ? null : (
                              <p className="text-gray3">Up Next:</p>
                            )}
                            <p className="text-gray1">
                              {isMobile
                                ? "Next"
                                : allShowCaseItems[index + 1].label}
                            </p>
                          </span>
                          <CaretRight size={14} />
                        </button>
                      )}
                    </motion.div>
                  </div>
                  <motion.div
                    className="modal-content"
                    animate={{ opacity: 1 }}
                    transition={{ duration: 10 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5,
                        scale: {
                          type: "spring",
                          visualDuration: 0.4,
                          bounce: 0.5,
                        },
                      }}
                      className="text-gray1 showcase-title"
                    >
                      {isMobile ? (
                        <h5
                          className="text-gray2 text-left"
                          dangerouslySetInnerHTML={{
                            __html: showcaseItem.longtitle,
                          }}
                          style={{ fontSize: 17, fontWeight: 500 }}
                        ></h5>
                      ) : (
                        <h5
                          className="text-gray2 text-centre"
                          style={{ fontWeight: 500 }}
                          dangerouslySetInnerHTML={{
                            __html: showcaseItem.longtitle,
                          }}
                        ></h5>
                      )}
                    </motion.div>

                    {isMobile ? null : (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.75,
                          scale: {
                            type: "spring",
                            visualDuration: 0.4,
                            bounce: 0.5,
                          },
                        }}
                        className="showcase-header-info text-gray3 text-centre"
                      >
                        {showcaseItem.type} &nbsp; &nbsp; / &nbsp; &nbsp;{" "}
                        {showcaseItem.startDate} - {showcaseItem.endDate}
                        {showcaseItem.collaborators ? (
                          <span className="text-gray3">
                            &nbsp;&nbsp; / &nbsp; &nbsp; in collaboration with
                            &nbsp;
                          </span>
                        ) : (
                          ""
                        )}
                        {showcaseItem.collaborators && (
                          <AnimatedTooltip items={showcaseItem.collaborators} />
                        )}
                      </motion.p>
                    )}

                    {showcaseItem.content}

                    {isMobile && <div className="section-separator"></div>}

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.75,
                        scale: {
                          type: "spring",
                          visualDuration: 0.4,
                          bounce: 0.5,
                        },
                      }}
                      className="showcase-footer"
                    >
                      <h6 className="text-gray1">{showcaseItem.label}</h6>
                      <p className="text-gray3">
                        {showcaseItem.startDate} - {showcaseItem.endDate}
                      </p>
                      <div className="flex-row flex-row-wrap">
                        {showcaseItem.keywords.map((keyword, index) => {
                          return (
                            <div
                              className="showcase-footer-keyword"
                              key={index}
                            >
                              {keyword}
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </Carousel>
      </motion.div>
    </AnimatePresence>
  );
};

export default ShowcaseModal;

/**
 * (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.75,
                          scale: {
                            type: "spring",
                            visualDuration: 0.4,
                            bounce: 0.5,
                          },
                        }}
                        className="showcase-header-info text-gray3"
                      >
                        <span className="flex-row">
                          / &nbsp; {showcaseItem.type}
                        </span>
                        <span className="flex-row">
                          / &nbsp; {showcaseItem.startDate} -{" "}
                          {showcaseItem.endDate}
                        </span>

                        {showcaseItem.collaborators ? (
                          <span className="flex-row">
                            {showcaseItem.collaborators ? (
                              <span className="text-gray3">
                                / &nbsp; in collaboration with &nbsp;
                              </span>
                            ) : (
                              ""
                            )}
                            {showcaseItem.collaborators && (
                              <AnimatedTooltip
                                items={showcaseItem.collaborators}
                              />
                            )}
                          </span>
                        ) : null}
                      </motion.p>
                    ) 
 */
