import { Module } from '@nestjs/common';
import { DistancesService } from './service/distances.service';
import { DistancesController } from './controller/distances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Distance} from './entities/location.entity'

@Module({
  imports:[
    TypeOrmModule.forFeature([Distance])
  ],
  controllers: [DistancesController],
  providers: [DistancesService]
})
export class DistancesModule {}
