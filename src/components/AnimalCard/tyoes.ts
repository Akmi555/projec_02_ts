interface Animal{
  name: string;
  species: string;
  role: string;
  image: string;
}

export interface AnimalCardProps {
  animalData: Animal;
  }

export interface OldAnimalCardProps {
  animalName: string;
  species: string;
  role: string;
  animalImg: 'animalImg';
  children: 'children';
}


