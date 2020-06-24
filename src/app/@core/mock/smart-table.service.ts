import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [{
    id: 1,
    name: 'Mark',
    email: 'mdo@gmail.com',
    phone: '0937949501',
  }, {
    id: 2,
    name: 'Jacob',
    email: 'fat@yandex.ru',
    phone: '0921695486',
  }, {
    id: 3,
    name: 'Larry',
    email: 'twitter@outlook.com',
    phone: '18',
  }, {
    id: 4,
    name: 'John',
    email: 'snow@gmail.com',
    phone: '0922461920',
  }, {
    id: 5,
    name: 'Jack',
    email: 'jack@yandex.ru',
    phone: '0913685907',
  } ];

  getData() {
    return this.data;
  }
}
