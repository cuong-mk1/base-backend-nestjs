import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { ICreateGuest } from '../interface/guest.schema.interface';

export class CreateGuestDto implements ICreateGuest {
  @ApiProperty({
    example: 'Luu Nhan Cuong',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Ha Noi',
  })
  @IsString()
  address: string;

  @ApiProperty({
    example: '012345678',
  })
  @IsString()
  phone: string;
}
