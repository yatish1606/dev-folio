import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { CardSpotlightEffect } from "../card-spotlight/CardSpotlight";
import "./floating-dock.css";

export const FloatingDock = ({
  items,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
    hoverColor: string;
    iconColor: string;
  }[];
}) => {
  return (
    <>
      <FloatingDockInner items={items} />
    </>
  );
};

const FloatingDockInner = ({
  items,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
    hoverColor: string;
    iconColor: string;
  }[];
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="floating-dock-tray"
    >
      {items.map((item) => {
        const isActive = item.href === window.location.pathname;
        return (
          <IconContainer
            mouseX={mouseX}
            key={item.title}
            isActive={isActive}
            {...item}
          />
        );
      })}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  hoverColor,
  iconColor,
  isActive = false,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  hoverColor: string;
  iconColor: string;
  isActive: boolean;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [50, 80, 50]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [50, 80, 50]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [50, 80, 50]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [50, 80, 50]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{
          width,
          height,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="floating-dock-icon-container"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="icon-title"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{
            width: widthIcon,
            height: heightIcon,
          }}
          className="icon"
        >
          <CardSpotlightEffect isActive={isActive} hoverColor={hoverColor}>
            <div
              className="dock-icon-inner"
              style={{
                fill: hovered ? iconColor : "var(--gray2)",
              }}
            >
              {icon}
            </div>
          </CardSpotlightEffect>
        </motion.div>
        {isActive && <div className="active-dot"></div>}
      </motion.div>
    </a>
  );
}
