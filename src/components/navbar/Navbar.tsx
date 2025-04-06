import { ChatCircleDots, Cube, ReadCvLogo, User } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useState } from "react";
import "./navbar.css";

let items = [
  {
    title: "Portfolio",
    icon: <Cube weight="fill" />,
    href: "/",
    hoverColor: "#275fd53a",
    iconColor: "#0f66cf",
  },
  {
    title: "About",
    icon: <User />,
    href: "/about",
    hoverColor: "#275fd53a",
    iconColor: "#0f66cf",
  },
  {
    title: "Contact",
    icon: <ChatCircleDots />,
    href: "/contact",
    hoverColor: "#275fd53a",
    iconColor: "#0f66cf",
  },
  {
    title: "Download resume",
    icon: <ReadCvLogo />,
    href: "/resume",
    hoverColor: "#275fd53a",
    iconColor: "#0f66cf",
  },
];
const Navbar = (): JSX.Element => {
  const [activeItem, setActiveitem] = useState(0);
  return (
    <div className="navbar-outer">
      <ol className="navbar-list">
        {items.map((item, i) => {
          const isActive = i === activeItem;
          return (
            <motion.li
              className={
                isActive || i === activeItem - 1 ? "item-no-divider" : "item"
              }
              whileTap={isActive ? { scale: 0.95 } : { opacity: 0.6 }}
              key={i}
            >
              <button
                onClick={() => setActiveitem(i)}
                type="button"
                className="navbar-button"
              >
                {isActive && (
                  <motion.div
                    layoutId="SegmentedControlActive"
                    className="navbar-active"
                  />
                )}
                <p
                  className={`navbar-label small-text ${isActive && "active"}`}
                >
                  {item.title}
                </p>
              </button>
            </motion.li>
          );
        })}
      </ol>
    </div>

    // </AnimateSharedLayout>
  );
};

export default Navbar;
