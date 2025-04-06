import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import "./animated-tooltip.css";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-0, 0], [-1, 1]), springConfig);
  const translateX = useSpring(useTransform(x, [-1, 1], [-1, 1]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 1;
    x.set(event.nativeEvent.offsetX - halfWidth - 500);
  };

  return (
    <div className="tooltip-container">
      {items.map((item) => (
        <div
          className="tooltip-item"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="tooltip-content"
              >
                <div className="tooltip-gradient gradient-emerald" />
                <div className="tooltip-gradient gradient-sky" />
                <p className="tooltip-name text-gray1">{item.name}</p>
                <small className="tooltip-designation">
                  {item.designation}
                </small>
              </motion.div>
            )}
          </AnimatePresence>
          <div
            className="tooltip-image"
            onMouseMove={handleMouseMove}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        </div>
      ))}
    </div>
  );
};
