import { ReactNode, useRef, useState } from "react";
import "./card-spotlight.css";

export const CardSpotlightEffect = ({
  children,
  hoverColor,
  isActive = false,
}: {
  children: ReactNode;
  hoverColor: string;
  isActive: boolean;
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: any) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="card-spotlight-effect"
      style={{
        background: isActive
          ? "var(--gray6)"
          : "linear-gradient(to bottom, var(--gray7), var(--gray8))",
      }}
    >
      <div
        className="spotlight"
        style={{
          opacity,
          background: `radial-gradient(250px circle at ${position.x}px ${position.y}px, ${hoverColor}, transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};
