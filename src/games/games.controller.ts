import { Controller, Body, Param, Get, Post, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { GameDto } from './dto/game.dto';
import { Game } from './game.entity';
import { GamesService } from './games.service'; 
@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  async Create(@Body() gameDto: GameDto): Promise<Game> {
    return this.gamesService.Create(gameDto)
  }

  @Get()
  async FindAll():Promise<Game[]> {
    return this.gamesService.FindAll()
  }

  @Get('/:id')
  async FindOne(@Param('id', ParseIntPipe) id:number):Promise<Game> {
    return this.gamesService.FindOne(id)
  }

  @Put('/:id')
  async Update(@Param('id', ParseIntPipe) id:number, @Body() gameDto: GameDto):Promise<Game> {
    return this.gamesService.Update(id, gameDto)
  }

  @Delete('/:id')
  async Remove(@Param('id') id:string):Promise<any> {
    return this.gamesService.Remove(id)
  }
}
