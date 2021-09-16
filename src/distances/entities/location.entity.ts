import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Distance')
export class Distance extends BaseEntity 
{
   
    @PrimaryGeneratedColumn()
    idLocation: number;

    @Column({ type: 'varchar', length: 50 })
    name: string;

    @Column({ type: 'float' })
    latitude: number;

    @Column({ type: 'float',})
    longitude: number;


}