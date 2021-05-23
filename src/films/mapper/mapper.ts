import { Film } from '../../model/films.entity';
import { FilmDTO } from '../dto/film.dto';

export const toFilmDto = (data: Film): FilmDTO => {
    const { id, name, description, releaseDate, rating, ticketPrice, country, genre, photo } = data;
  
    let filmDTO: FilmDTO = {
      id,
      name,
      description, releaseDate, rating, ticketPrice, country, genre, photo
    };
  
    return filmDTO;
  };