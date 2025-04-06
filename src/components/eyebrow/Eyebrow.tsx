import { isMobileDevice } from "../../utils";
import "./eyebrow.css";

const Eyebrow = ({ title }: { title: string }) => {
  const isMobile = isMobileDevice();
  return (
    <div className="eyebrow-outer">
      {/* <div className="eyebrow-indicator"></div> */}
      {isMobile ? (
        <h5 className="text-gray1" style={{ fontSize: "1.1rem" }}>
          {title}
        </h5>
      ) : (
        <h5 className="text-gray1">{title}</h5>
      )}
    </div>
  );
};

export default Eyebrow;
