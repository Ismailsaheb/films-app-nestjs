import { Controller, Get, Param, Post, Body, UseGuards} from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmDTO } from './dto/film.dto';
import { Film } from '../model/films.entity';
import { Observable} from 'rxjs';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('films')
export class FilmsController {

    constructor(private filmsService: FilmsService) { }

    @Get()
    getFilms(): Observable<Object>  {
        return this.filmsService.getFilms();

    }

    @Get(':filmID')
    getFilm(@Param('filmID') filmID): Observable<Object> {
        return this.filmsService.getFilm(filmID);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    addFilm(@Body() filmDTO: Film) {
        console.log("as" + filmDTO);
        return this.filmsService.addFilm(filmDTO);
    }

}
