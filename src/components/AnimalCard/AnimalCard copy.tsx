import {
  AnimalCarWraooer,
  AnimalImage,
  AnimalTitle,
  AnimalSpecies,
  AnimalRole
 } from "./styles";
import { AnimalCardProps } from "./types";

function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <AnimalCarWraooer>
      <AnimalTitle>{animalData.name}</AnimalTitle>
      <AnimalSpecies>{animalData.species}</AnimalSpecies>
      <AnimalRole>{animalData.role}</AnimalRole>
      <AnimalImage src={animalData.image} />
    </AnimalCarWraooer>
  );
}

export default AnimalCard;
