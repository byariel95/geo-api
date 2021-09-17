import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistancesModule } from './distances/distances.module';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    host: 'postgres',
    type:'postgres',
    port: 5432,
    username: 'root',
    password: '12345678',
    database: 'geo-db',
    autoLoadEntities: true,
    synchronize: true,
  }),
  RedisModule.forRoot({
    closeClient: true,
    config: {
        host: 'redis',
        port: 6379
    }
  }),
  DistancesModule
  ]
})
export class AppModule {}
