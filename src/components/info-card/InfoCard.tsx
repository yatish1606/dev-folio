import "./info-card.css";

interface InfoCard {
  title: string;
  description: string;
}

const InfoCard = ({ items }: { items: InfoCard[] }) => {
  return (
    <div className="info-card-container">
      {items.map((item, index) => (
        <div key={index} className="info-card">
          <h5
            className="text-gray1"
            dangerouslySetInnerHTML={{ __html: item.title }}
          ></h5>
          <p
            className="text-gray3"
            dangerouslySetInnerHTML={{ __html: item.description }}
          ></p>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
