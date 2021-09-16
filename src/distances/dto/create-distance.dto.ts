
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDistanceDto 
{
    @ApiProperty({ type: String, required: true})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ type: Number, required: true})
    @IsNotEmpty()
    @IsNumber()
    latitude: number;

    @ApiProperty({ type: Number, required: true})
    @IsNotEmpty()
    @IsNumber()
    longitude: number;

}
export class UpdateDistanceDto extends PartialType(CreateDistanceDto) {}