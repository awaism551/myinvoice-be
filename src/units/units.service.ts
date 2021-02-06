import { Injectable } from '@nestjs/common';
import { Unit } from './units.model';

@Injectable()
export class UnitService {
  async getUnits() {
    try {
      return await Unit.findAll();
    } catch (error) {
      console.log('error', error);
    }
  }
}
