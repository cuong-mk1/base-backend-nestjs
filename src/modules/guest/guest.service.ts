import { I18nService } from 'nestjs-i18n';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BaseAbstractService } from '../../base/base.abstract.service';
import { GuestRepository } from './guest.repository';
import { ICreateGuest, IGuest } from './interface/guest.schema.interface';
import { GuestDto } from './dto/guest.dto';
import { LanguageCode, StatusCode } from 'src/common/common.constants';
import { CreateGuestDto } from './dto/create-guest.dto';


@Injectable()
export class GuestService extends BaseAbstractService {
  constructor(
    i18nService: I18nService,
    private readonly guestRepository: GuestRepository,
  ) {
    super(i18nService);
  }


  async getListGuest(): Promise<any> {
    const guest = await this.guestRepository
      .findAll()
      .select('address id placeId latitude longitude')
      .sort({ address: 1 });

    return this.formatOutputData(
      {
        key: `translate.GET_LIST_LOCATION_SUCCESSFULLY`,
        lang: LanguageCode.United_States,
      },
      {
        statusCode: StatusCode.GET_LIST_LOCATION_SUCCESSFULLY,
        data: guest,
      },
    );
  }
  async findGuestByConditions(conditions: any): Promise<IGuest> {
    return this.guestRepository.findOne(conditions);
  }
  async createGuest(createGuestDto:CreateGuestDto){
    const {name, address, phone} = createGuestDto;
    let response;
    const guestExisted = await this.findGuestByConditions({phone})
    if(guestExisted){
      response = await this.formatOutputData(
        {
          key: `translate.USER_SIGN_UP_EMAIL_EXISTED`,
          lang: LanguageCode.United_States,
        },
        {
          statusCode: StatusCode.USER_SIGN_UP_EMAIL_EXISTED,
          data: null,
        },
      );
      throw new HttpException(response, HttpStatus.BAD_REQUEST);
    }

    const guestData = await this.guestRepository.create(createGuestDto);
    return guestData;
  }
  

  async findLocationById(id: string): Promise<IGuest> {
    return this.guestRepository.findById(id);
  }

}
