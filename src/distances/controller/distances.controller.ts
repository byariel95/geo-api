import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DistancesService } from '../service/distances.service';
import { CreateDistanceDto } from '../dto/create-distance.dto';

@Controller()
export class DistancesController {
  constructor(private readonly distancesService: DistancesService) {}

  @Post()
  create(@Body() createDistanceDto: CreateDistanceDto) {
    return this.distancesService.create(createDistanceDto);
  }

  @Get('distance')
  findAll(
    @Query('place-one') placeOne:string,
    @Query('place-two') placeTwo:string,
    @Query('unit') unit:string
  ) {
    return this.distancesService.findDistance(placeOne, placeTwo,unit);
  }

}
