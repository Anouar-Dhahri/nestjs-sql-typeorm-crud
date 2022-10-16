import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameDto } from './dto/game.dto';
import { Game } from './game.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game) 
    private readonly gameRepository: Repository<Game>
  ){}

  async Create(gameDto: GameDto):Promise<Game> {
    const newGame = new Game()
    newGame.name = gameDto.name;
    newGame.publisher = gameDto.publisher;
    newGame.plateform = gameDto.plateform;
    newGame.releaseyear = gameDto.releaseyear;

    return this.gameRepository.save(newGame);
  }

  async FindAll():Promise<Game[]> {
    const games = await this.gameRepository.find()
    return games
  }

  async FindOne(id: number):Promise<Game> {
    const game = this.gameRepository.findOne({
      where: {
        id: id
      }
    })
    return game
  }

  async Update(id: number, gameDto: GameDto):Promise<Game> {
    const row = await this.gameRepository.findOneBy({ id: id});
    row.name = gameDto.name
    row.publisher = gameDto.publisher
    row.plateform = gameDto.plateform
    row.releaseyear = gameDto.releaseyear
    const updatedRow = await this.gameRepository.save(row)

    return updatedRow
  }

  async Remove(id: string):Promise<any> {
    await this.gameRepository.delete(id)
    return { deleted: true };
  }
}
