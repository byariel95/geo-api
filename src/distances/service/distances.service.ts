import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Redis } from 'ioredis';
import { Repository } from 'typeorm';
import { CreateDistanceDto } from '../dto/create-distance.dto';
import { Distance } from '../entities/location.entity'

@Injectable()
export class DistancesService 
{
  constructor(
    @InjectRepository(Distance) private readonly locationRepository: Repository<Distance>,
    @InjectRedis() private readonly redisClient: Redis
  ){}

  async create(createDistanceDto: CreateDistanceDto) : Promise<Distance>
  {
    try {
      const newLocation = this.locationRepository.create(createDistanceDto)
      await this.addlocation(newLocation.longitude,newLocation.latitude,newLocation.name);
      return await this.locationRepository.save(newLocation);
    } catch (error) {
      throw new  InternalServerErrorException('internal error');
    }
  }

  async findDistance(placeOne: string, placeTwo: string, unit:any) {
     const resp = await this.redisClient.geodist('locations',placeOne,placeTwo,unit)
     if(!resp){
        throw new NotFoundException('places does not exist');
     }
     return {
       distance: resp,
       unit,
     }
  }

  async addlocation(longitude:number,latitude:number, member:string){
    return await this.redisClient.geoadd('locations',longitude,latitude,member)
  }

}
