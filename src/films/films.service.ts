import { Injectable, HttpException } from '@nestjs/common';
import { FILMS } from './mock/films.mock';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from '../model/films.entity';
import { toFilmDto } from './mapper/mapper';
import { FilmDTO } from './dto/film.dto';
import { Observable, from, throwError } from 'rxjs';
import { switchMap, map, catchError} from 'rxjs/operators';

@Injectable()
export class FilmsService {
    constructor(
        @InjectRepository(Film) private readonly repo: Repository<Film>
      ) {}

    getFilms(): Observable<Film[]> {
            return from(this.repo.find()).pipe(map(films => films.map(toFilmDto)));
    }

    getFilm(filmID): Observable<FilmDTO> {
        let id = Number(filmID);
        
            const film = this.repo.findOne(filmID);
            if (!film) {
                throw new HttpException('film does not exist!', 404);
            }
            return from(film).pipe(map(toFilmDto));
    }

    addFilm(film :Film): Observable<Film> {
        console.log(film.name);
        console.log(film);
        return from(this.repo.save(film));
    }
}
