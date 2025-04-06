import { isMobileDevice } from "../../utils";
import "./personas.css";

export interface Persona {
  name: string;
  image: string;
  occupation: string;
  age: number;
  fact: string;
}

const Personas = ({ personas }: { personas: Persona[] }) => {
  const isMobile = isMobileDevice();
  return (
    <div className="personas-container">
      {personas.map((persona, index) => {
        return (
          <div className="persona-item" key={index}>
            <img src={persona.image} alt={persona.name} />
            {!isMobile && <br />}
            <p className="text-gray0 bold">
              {persona.name}, {persona.age}
            </p>
            <p className="text-gray2">{persona.occupation}</p>
            {!isMobile && <br />}
            <small className="text-gray3">
              {" "}
              <i>{persona.fact}</i>
            </small>
          </div>
        );
      })}
    </div>
  );
};

export default Personas;
