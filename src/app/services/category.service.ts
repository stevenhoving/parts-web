import {Injectable} from '@angular/core'
import {APIService} from './api.service'
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService
{
  CategoryTree =
  [{
    'id': 1,
    'name': 'root',
    'parent': null,
    'children': [
      {
        'id': 2,
        'name':'Semiconductors',
        'parent': 1,
        'children':[
          {
            'id': 4,
            'name': 'Integrated Circuits',
            'children': [
              {
                'id': 5,
                'name': 'Logic Gates',
                'children': [
                  {
                    'id': 6,
                    'name': 'TTL',
                    'children': [
                    ]
                  },
                  {
                    'id': 7,
                    'name': 'CMOS',
                    'children': [
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        'id': 3,
        'name':'CMOS',
        'parent': 1,
        'children':[
        ]
      }
    ]
  }];

  constructor(private apiService: APIService)
  {
    // do url call to our backend to get the categories
  }

  // might return a promise instead of this
  getCategoryTree() : any
  {
    return this.CategoryTree;
  }
}
