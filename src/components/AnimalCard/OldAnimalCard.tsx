import "./styles.css";
import {OldAnimalCardProps} from './types';

function OldAnimalCard({ animalName, species, role, animalImg, children}: OldAnimalCardProps) {
  return (
    <div className="animal-card-wrapper">
      <h2>{animalName}</h2>
      <p>{species}</p>
      <p>{role}</p>
      <img src={animalImg} />
      {children}
    </div>
  );
}

export default OldAnimalCard;

// const props = {
//   animalName:
//   species:
//   role:
//   animalImg:
// }
