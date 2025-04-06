import React, { ReactNode } from "react";
import "./aurora.css";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "var(--gray9)",
          color: "var(--slate-950)",
          transition: "background-color 0.3s",
          zIndex: 0,
        }}
        {...props}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              backgroundImage: `
                repeating-linear-gradient(100deg, var(--gray7) 0%, var(--gray8) 7%, var(--transparent) 10%, var(--transparent) 12%, var(--gray8) 16%),
                repeating-linear-gradient(100deg, var(--blue-500) 10%, var(--indigo-300) 15%, var(--blue-300) 20%, var(--violet-200) 25%, var(--blue-400) 30%)
              `,
              backgroundSize: "200%, 20%",
              backgroundPosition: "50% 50%, 50% 50%",
              filter: "blur(20px)",
              pointerEvents: "none",
              position: "absolute",
              inset: "-10px",
              opacity: 0.5,
              animation: "aurora 30s infinite ease-in-out",
              willChange: "transform",
              maskImage: showRadialGradient
                ? "radial-gradient(ellipse at 100% 0%, var(--gray9) 10%, var(--transparent) 70%)"
                : undefined,
            }}
          ></div>
        </div>
        <div className="aurora-overlay"></div>
        <div className="aurora-content">{children}</div>
      </div>
    </main>
  );
};

// repeating-linear-gradient(100deg, var(--white) 0%, var(--white) 7%, var(--transparent) 10%, var(--transparent) 12%, var(--white) 16%), repeating-linear-gradient(100deg, red 10%, orangered 15%, orange  20%, red 25%, gold  30%)
