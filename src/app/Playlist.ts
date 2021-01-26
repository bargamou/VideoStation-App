import { Video } from "./shared/models/search.interface";
import { User } from "./User";

export interface Playlist {
    nom?: string;
    videos?: Video[];
    username?: string; 
}