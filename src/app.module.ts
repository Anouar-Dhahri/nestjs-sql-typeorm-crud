import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { GamesModule } from './games/games.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:"mysql",
      host:"localhost",
      port:3306,
      username:"root",
      password:"",
      database:"testorm",
      autoLoadEntities: true,
      synchronize: true,
    }),
    GamesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
