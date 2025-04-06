"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ShowcaseGroup, ShowcaseItem } from "../../data/portfolio";
import ShowcaseModal from "../showcase-modal/ShowcaseModal";
import "./timeline.css";

export const Timeline = ({ data }: { data: ShowcaseGroup }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [_, setHeight] = useState(0);
  const [showCaseDetails, setShowcaseDetails] = useState<null | ShowcaseItem>(
    null
  );

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const openModal = (item: ShowcaseItem) => {
    setShowcaseDetails(item);
  };

  const closeModal = () => {
    setShowcaseDetails(null);
  };

  return (
    <>
      <div className="timeline-container" ref={containerRef}>
        <div ref={ref} className="timeline-entries">
          {Object.keys(data).map((year) => {
            return (
              <div className="timeline-entry">
                {/* <div className="sticky-dot">
                  <h3 className="title text-gray6">{year}</h3>
                </div> */}
                <div className="timeline-grid">
                  {data[year].map((showcaseItem: ShowcaseItem, index) => {
                    return (
                      <TimelineItem
                        openModal={openModal}
                        item={showcaseItem}
                        key={index}
                        index={index}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* <br /> */}

          {/* <a href="#" target="_blank" className="underline">
            View all
          </a> */}
        </div>
      </div>
      {showCaseDetails && (
        <ShowcaseModal item={showCaseDetails} closeModal={closeModal} />
      )}
    </>
  );
};

const TimelineItem = ({
  item,
  openModal,
  index,
}: {
  item: ShowcaseItem;
  openModal: (item: ShowcaseItem) => void;
  index: number;
}) => {
  // const childAnimationProps = {
  //   variants: {
  //     initial: {
  //       opacity: 0,
  //       // visibility: "hidden",
  //     },
  //     animate: () => ({
  //       opacity: 1,
  //       // visibility: "visible",
  //       transition: {
  //         delay: 0.5,
  //         duration: 2,
  //       },
  //     }),
  //   },
  //   initial: "initial",
  //   viewport: { once: true },
  //   whileInView: "animate",
  // };
  return (
    <motion.div
      key={index}
      // {...childAnimationProps}
      custom={4 + index}
      className="content"
      onClick={() => openModal(item)}
    >
      <div className="content-inner">
        <img
          src={item.thumbnailVideo}
          className="content-image"
          alt={item.label}
        />
      </div>
      <div className="content-text">
        <p
          className="text-gray0"
          style={{ fontFamily: "inherit", letterSpacing: 0.35 }}
        >
          {item.label}
        </p>
        <small
          className="text-gray3 short-desc"
          dangerouslySetInnerHTML={{ __html: item.shortDescription }}
        ></small>
      </div>
    </motion.div>
  );
};
