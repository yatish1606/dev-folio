import { ReactNode } from "react";
import "./feature-box.css";

export interface FeatureBoxItem {
  label: string;
  icon?: ReactNode;
  description: string;
}

const FeatureBox = ({ items }: { items: FeatureBoxItem[] }) => {
  return (
    <div className="feature-box-container">
      {items.map((item, index) => {
        return (
          <div className="feature-box-item" key={index}>
            <div className="feature-box-item-top">
              <p className="bold text-gray0">{item.label}</p>
              {item.icon}
            </div>
            <p
              className="text-gray2"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></p>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureBox;
