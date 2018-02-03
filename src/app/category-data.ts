import { Category } from './Category';

// data that should come from the server.
// \see https://demo.partkeepr.org/ for an example of this
export const CategoryTree =
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
