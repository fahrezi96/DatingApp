import { Photo } from './Photo';

export interface Member {
  id: number;
  username: string;
  photoUrl: string;
  knownAs: string;
  gender: string;
  introduction: string;
  lookingFor: string;
  interests: string;
  city: string;
  country: string;
  age: number;
  created: Date;
  lastActive: Date;
  photos: Photo[];
}
