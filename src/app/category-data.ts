import { Category } from './Category';

export const CATEGORIES: Category[] = [
  { id: 11, name: 'MOSFET' },
  { id: 12, name: 'NPN' },
  { id: 13, name: 'PNP' },
  { id: 14, name: 'CMOS' },
  { id: 15, name: 'TTL' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

/*
export const json : PartCategory[] = [
{
  "id":"1",
  "type":"PartCategory",
  "parent":null,
  "children":[
    {
      "id":"153",
      "type":"PartCategory",
      "parent":"1",
      "children":[
        {
          "id":"154",
          "type":"PartCategory",
          "parent":"153",
          "children":[  
            {  
              "id":"155",
              "type":"PartCategory",
              "parent":"154",
              "children":[

              ],
              "categoryPath":"Root Category \u27a4 Z Cooking \u27a4 Ingridients \u27a4 Noodles",
              "expanded":true,
              "name":"Noodles",
              "description":""
            }
          ],
          "categoryPath":"Root Category \u27a4 Z Cooking \u27a4 Ingridients",
          "expanded":true,
          "name":"Ingridients",
          "description":""
        }
      ],
      "categoryPath":"Root Category \u27a4 Z Cooking",
      "expanded":true,
      "name":"Z Cooking",
      "description":""
    },
    {  
      "id":"2",
      "type":"PartCategory",
      "parent":"1",
      "children":[  
        {  
          "id":"3",
          "type":"PartCategory",
          "parent":"2",
          "children":[  
            {  
              "id":"4",
              "type":"PartCategory",
              "parent":"3",
              "children":[  
                {  
                  "id":"5",
                  "type":"PartCategory",
                  "parent":"4",
                  "children":[  
                    {  
                      "id":"6",
                      "type":"PartCategory",
                      "parent":"5",
                      "children":[  

                      ],
                      "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 2 Integrated Circuits \u27a4 1 Logic Gates \u27a4 2 TTL",
                      "expanded":true,
                      "name":"2 TTL",
                      "description":""
                    },
                    {  
                      "id":"10",
                      "type":"PartCategory",
                      "parent":"5",
                      "children":[  

                      ],
                      "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 2 Integrated Circuits \u27a4 1 Logic Gates \u27a4 1 CMOS",
                      "expanded":true,
                      "name":"1 CMOS",
                      "description":""
                    }
                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 2 Integrated Circuits \u27a4 1 Logic Gates",
                  "expanded":true,
                  "name":"1 Logic Gates",
                  "description":""
                },
                {  
                  "id":"7",
                  "type":"PartCategory",
                  "parent":"4",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 2 Integrated Circuits \u27a4 9 MOSFET Drivers",
                  "expanded":true,
                  "name":"9 MOSFET Drivers",
                  "description":""
                },
                {  
                  "id":"8",
                  "type":"PartCategory",
                  "parent":"4",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 2 Integrated Circuits \u27a4 Z Others",
                  "expanded":true,
                  "name":"Z Others",
                  "description":""
                },
                {  
                  "id":"9",
                  "type":"PartCategory",
                  "parent":"4",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 2 Integrated Circuits \u27a4 4 OpAmps",
                  "expanded":true,
                  "name":"4 OpAmps",
                  "description":""
                },
                {  
                  "id":"11",
                  "type":"PartCategory",
                  "parent":"4",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 2 Integrated Circuits \u27a4 2 ADC, DAC",
                  "expanded":true,
                  "name":"2 ADC, DAC",
                  "description":""
                },
                {  
                  "id":"36",
                  "type":"PartCategory",
                  "parent":"4",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 2 Integrated Circuits \u27a4 3 Microcontrollers",
                  "expanded":true,
                  "name":"3 Microcontrollers",
                  "description":""
                },
                {  
                  "id":"79",
                  "type":"PartCategory",
                  "parent":"4",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 2 Integrated Circuits \u27a4 5 Timers",
                  "expanded":true,
                  "name":"5 Timers",
                  "description":""
                },
                {  
                  "id":"122",
                  "type":"PartCategory",
                  "parent":"4",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 2 Integrated Circuits \u27a4 6 EPROM",
                  "expanded":true,
                  "name":"6 EPROM",
                  "description":""
                },
                {  
                  "id":"126",
                  "type":"PartCategory",
                  "parent":"4",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 2 Integrated Circuits \u27a4 7 Comparators",
                  "expanded":true,
                  "name":"7 Comparators",
                  "description":""
                },
                {  
                  "id":"132",
                  "type":"PartCategory",
                  "parent":"4",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 2 Integrated Circuits \u27a4 8 Memory",
                  "expanded":true,
                  "name":"8 Memory",
                  "description":""
                },
                {  
                  "id":"81",
                  "type":"PartCategory",
                  "parent":"4",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 2 Integrated Circuits \u27a4 A Voltage Regulators \/ Controllers",
                  "expanded":true,
                  "name":"A Voltage Regulators \/ Controllers",
                  "description":""
                }
              ],
              "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 2 Integrated Circuits",
              "expanded":true,
              "name":"2 Integrated Circuits",
              "description":""
            },
            {  
              "id":"32",
              "type":"PartCategory",
              "parent":"3",
              "children":[  
                {  
                  "id":"33",
                  "type":"PartCategory",
                  "parent":"32",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 1 Transistors \u27a4 NPN",
                  "expanded":true,
                  "name":"NPN",
                  "description":""
                },
                {  
                  "id":"74",
                  "type":"PartCategory",
                  "parent":"32",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 1 Transistors \u27a4 PNP",
                  "expanded":true,
                  "name":"PNP",
                  "description":""
                },
                {  
                  "id":"114",
                  "type":"PartCategory",
                  "parent":"32",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 1 Transistors \u27a4 MOSFET",
                  "expanded":true,
                  "name":"MOSFET",
                  "description":""
                }
              ],
              "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 1 Transistors",
              "expanded":true,
              "name":"1 Transistors",
              "description":""
            },
            {  
              "id":"56",
              "type":"PartCategory",
              "parent":"3",
              "children":[  
                {  
                  "id":"57",
                  "type":"PartCategory",
                  "parent":"56",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 3 Diodes \u27a4 3 Z Diodes",
                  "expanded":true,
                  "name":"3 Z Diodes",
                  "description":""
                },
                {  
                  "id":"58",
                  "type":"PartCategory",
                  "parent":"56",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 3 Diodes \u27a4 1 Universal",
                  "expanded":true,
                  "name":"1 Universal",
                  "description":""
                },
                {  
                  "id":"59",
                  "type":"PartCategory",
                  "parent":"56",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 3 Diodes \u27a4 Sonstige",
                  "expanded":true,
                  "name":"Sonstige",
                  "description":""
                },
                {  
                  "id":"67",
                  "type":"PartCategory",
                  "parent":"56",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 3 Diodes \u27a4 4 Rectifiers and Rectifier Diodes",
                  "expanded":true,
                  "name":"4 Rectifiers and Rectifier Diodes",
                  "description":""
                },
                {  
                  "id":"85",
                  "type":"PartCategory",
                  "parent":"56",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 3 Diodes \u27a4 2 Schottky",
                  "expanded":true,
                  "name":"2 Schottky",
                  "description":""
                }
              ],
              "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 3 Diodes",
              "expanded":true,
              "name":"3 Diodes",
              "description":""
            },
            {  
              "id":"62",
              "type":"PartCategory",
              "parent":"3",
              "children":[  
                {  
                  "id":"111",
                  "type":"PartCategory",
                  "parent":"62",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 Thyristor \u27a4 1 TRIACs",
                  "expanded":true,
                  "name":"1 TRIACs",
                  "description":""
                },
                {  
                  "id":"136",
                  "type":"PartCategory",
                  "parent":"62",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 Thyristor \u27a4 2 SCR",
                  "expanded":true,
                  "name":"2 SCR",
                  "description":""
                }
              ],
              "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 Thyristor",
              "expanded":true,
              "name":"Thyristor",
              "description":""
            },
            {  
              "id":"89",
              "type":"PartCategory",
              "parent":"3",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 5 Voltage References",
              "expanded":true,
              "name":"5 Voltage References",
              "description":""
            },
            {  
              "id":"110",
              "type":"PartCategory",
              "parent":"3",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors \u27a4 4 Triacs",
              "expanded":true,
              "name":"4 Triacs",
              "description":""
            }
          ],
          "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 1 Semiconductors",
          "expanded":true,
          "name":"1 Semiconductors",
          "description":""
        },
        {  
          "id":"21",
          "type":"PartCategory",
          "parent":"2",
          "children":[  
            {  
              "id":"22",
              "type":"PartCategory",
              "parent":"21",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 2 Optoelectronics \u27a4 4 Others",
              "expanded":true,
              "name":"4 Others",
              "description":""
            },
            {  
              "id":"23",
              "type":"PartCategory",
              "parent":"21",
              "children":[  
                {  
                  "id":"30",
                  "type":"PartCategory",
                  "parent":"23",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 2 Optoelectronics \u27a4 1 LED \u27a4 Standard",
                  "expanded":true,
                  "name":"Standard",
                  "description":""
                },
                {  
                  "id":"31",
                  "type":"PartCategory",
                  "parent":"23",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 2 Optoelectronics \u27a4 1 LED \u27a4 Module",
                  "expanded":true,
                  "name":"Module",
                  "description":""
                },
                {  
                  "id":"95",
                  "type":"PartCategory",
                  "parent":"23",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 2 Optoelectronics \u27a4 1 LED \u27a4 SMD",
                  "expanded":true,
                  "name":"SMD",
                  "description":""
                }
              ],
              "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 2 Optoelectronics \u27a4 1 LED",
              "expanded":true,
              "name":"1 LED",
              "description":""
            },
            {  
              "id":"41",
              "type":"PartCategory",
              "parent":"21",
              "children":[  
                {  
                  "id":"42",
                  "type":"PartCategory",
                  "parent":"41",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 2 Optoelectronics \u27a4 2 LCD Displays \u27a4 2 Graphics",
                  "expanded":true,
                  "name":"2 Graphics",
                  "description":""
                },
                {  
                  "id":"43",
                  "type":"PartCategory",
                  "parent":"41",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 2 Optoelectronics \u27a4 2 LCD Displays \u27a4 1 Text",
                  "expanded":true,
                  "name":"1 Text",
                  "description":""
                }
              ],
              "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 2 Optoelectronics \u27a4 2 LCD Displays",
              "expanded":true,
              "name":"2 LCD Displays",
              "description":""
            },
            {  
              "id":"90",
              "type":"PartCategory",
              "parent":"21",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 2 Optoelectronics \u27a4 3 Optocouplers",
              "expanded":true,
              "name":"3 Optocouplers",
              "description":""
            },
            {  
              "id":"117",
              "type":"PartCategory",
              "parent":"21",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 2 Optoelectronics \u27a4 5 Optical Switches",
              "expanded":true,
              "name":"5 Optical Switches",
              "description":""
            }
          ],
          "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 2 Optoelectronics",
          "expanded":true,
          "name":"2 Optoelectronics",
          "description":""
        },
        {  
          "id":"46",
          "type":"PartCategory",
          "parent":"2",
          "children":[  
            {  
              "id":"47",
              "type":"PartCategory",
              "parent":"46",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 3 Others \u27a4 Inverter",
              "expanded":true,
              "name":"Inverter",
              "description":""
            }
          ],
          "categoryPath":"Root Category \u27a4 1 Active Components \u27a4 3 Others",
          "expanded":true,
          "name":"3 Others",
          "description":""
        }
      ],
      "categoryPath":"Root Category \u27a4 1 Active Components",
      "expanded":true,
      "name":"1 Active Components",
      "description":""
    },
    {  
      "id":"12",
      "type":"PartCategory",
      "parent":"1",
      "children":[  
        {  
          "id":"13",
          "type":"PartCategory",
          "parent":"12",
          "children":[  
            {  
              "id":"14",
              "type":"PartCategory",
              "parent":"13",
              "children":[  
                {  
                  "id":"17",
                  "type":"PartCategory",
                  "parent":"14",
                  "children":[  
                    {  
                      "id":"156",
                      "type":"PartCategory",
                      "parent":"17",
                      "children":[  

                      ],
                      "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 2 PCB Connectors \u27a4 1 Rectangular \u27a4 7 Pin Headers",
                      "expanded":true,
                      "name":"7 Pin Headers",
                      "description":""
                    },
                    {  
                      "id":"18",
                      "type":"PartCategory",
                      "parent":"17",
                      "children":[  

                      ],
                      "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 2 PCB Connectors \u27a4 1 Rectangular \u27a4 2 USB",
                      "expanded":true,
                      "name":"2 USB",
                      "description":""
                    },
                    {  
                      "id":"48",
                      "type":"PartCategory",
                      "parent":"17",
                      "children":[  

                      ],
                      "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 2 PCB Connectors \u27a4 1 Rectangular \u27a4 3 D-Sub",
                      "expanded":true,
                      "name":"3 D-Sub",
                      "description":""
                    },
                    {  
                      "id":"91",
                      "type":"PartCategory",
                      "parent":"17",
                      "children":[  
                        {  
                          "id":"96",
                          "type":"PartCategory",
                          "parent":"91",
                          "children":[  
                            {  
                              "id":"76",
                              "type":"PartCategory",
                              "parent":"96",
                              "children":[  

                              ],
                              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 2 PCB Connectors \u27a4 1 Rectangular \u27a4 1 Wire-to-Board \u27a4 1 PSK \u27a4 1 Sets",
                              "expanded":true,
                              "name":"1 Sets",
                              "description":""
                            }
                          ],
                          "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 2 PCB Connectors \u27a4 1 Rectangular \u27a4 1 Wire-to-Board \u27a4 1 PSK",
                          "expanded":true,
                          "name":"1 PSK",
                          "description":""
                        },
                        {  
                          "id":"124",
                          "type":"PartCategory",
                          "parent":"91",
                          "children":[  

                          ],
                          "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 2 PCB Connectors \u27a4 1 Rectangular \u27a4 1 Wire-to-Board \u27a4 2 Dupont Crimp Contacts",
                          "expanded":true,
                          "name":"2 Dupont Crimp Contacts",
                          "description":""
                        }
                      ],
                      "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 2 PCB Connectors \u27a4 1 Rectangular \u27a4 1 Wire-to-Board",
                      "expanded":true,
                      "name":"1 Wire-to-Board",
                      "description":""
                    },
                    {  
                      "id":"105",
                      "type":"PartCategory",
                      "parent":"17",
                      "children":[  

                      ],
                      "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 2 PCB Connectors \u27a4 1 Rectangular \u27a4 4 IDC Connectors + Box Headers",
                      "expanded":true,
                      "name":"4 IDC Connectors + Box Headers",
                      "description":""
                    },
                    {  
                      "id":"119",
                      "type":"PartCategory",
                      "parent":"17",
                      "children":[  

                      ],
                      "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 2 PCB Connectors \u27a4 1 Rectangular \u27a4 5 Terminal Blocks",
                      "expanded":true,
                      "name":"5 Terminal Blocks",
                      "description":""
                    },
                    {  
                      "id":"125",
                      "type":"PartCategory",
                      "parent":"17",
                      "children":[  

                      ],
                      "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 2 PCB Connectors \u27a4 1 Rectangular \u27a4 6 Board to Board",
                      "expanded":true,
                      "name":"6 Board to Board",
                      "description":""
                    }
                  ],
                  "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 2 PCB Connectors \u27a4 1 Rectangular",
                  "expanded":true,
                  "name":"1 Rectangular",
                  "description":""
                },
                {  
                  "id":"28",
                  "type":"PartCategory",
                  "parent":"14",
                  "children":[  
                    {  
                      "id":"29",
                      "type":"PartCategory",
                      "parent":"28",
                      "children":[  

                      ],
                      "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 2 PCB Connectors \u27a4 2 Round \u27a4 1 PSU",
                      "expanded":true,
                      "name":"1 PSU",
                      "description":""
                    }
                  ],
                  "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 2 PCB Connectors \u27a4 2 Round",
                  "expanded":true,
                  "name":"2 Round",
                  "description":""
                }
              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 2 PCB Connectors",
              "expanded":true,
              "name":"2 PCB Connectors",
              "description":""
            },
            {  
              "id":"37",
              "type":"PartCategory",
              "parent":"13",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 4 Others",
              "expanded":true,
              "name":"4 Others",
              "description":""
            },
            {  
              "id":"16",
              "type":"PartCategory",
              "parent":"13",
              "children":[  
                {  
                  "id":"133",
                  "type":"PartCategory",
                  "parent":"16",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 1 IC Sockets \u27a4 1 Test Sockets",
                  "expanded":true,
                  "name":"1 Test Sockets",
                  "description":""
                },
                {  
                  "id":"134",
                  "type":"PartCategory",
                  "parent":"16",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 1 IC Sockets \u27a4 2 Precision",
                  "expanded":true,
                  "name":"2 Precision",
                  "description":""
                },
                {  
                  "id":"135",
                  "type":"PartCategory",
                  "parent":"16",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 1 IC Sockets \u27a4 3 Low Cost",
                  "expanded":true,
                  "name":"3 Low Cost",
                  "description":""
                }
              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 1 IC Sockets",
              "expanded":true,
              "name":"1 IC Sockets",
              "description":""
            },
            {  
              "id":"40",
              "type":"PartCategory",
              "parent":"13",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 3 Audio",
              "expanded":true,
              "name":"3 Audio",
              "description":""
            },
            {  
              "id":"94",
              "type":"PartCategory",
              "parent":"13",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 5 WAGO",
              "expanded":true,
              "name":"5 WAGO",
              "description":""
            },
            {  
              "id":"118",
              "type":"PartCategory",
              "parent":"13",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 6 Faston",
              "expanded":true,
              "name":"6 Faston",
              "description":""
            },
            {  
              "id":"129",
              "type":"PartCategory",
              "parent":"13",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 7 HF",
              "expanded":true,
              "name":"7 HF",
              "description":""
            },
            {  
              "id":"139",
              "type":"PartCategory",
              "parent":"13",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 8 DC Power Jacks",
              "expanded":true,
              "name":"8 DC Power Jacks",
              "description":""
            },
            {  
              "id":"149",
              "type":"PartCategory",
              "parent":"13",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors \u27a4 9 Lab Connectors",
              "expanded":true,
              "name":"9 Lab Connectors",
              "description":""
            }
          ],
          "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 1 Connectors",
          "expanded":true,
          "name":"1 Connectors",
          "description":""
        },
        {  
          "id":"27",
          "type":"PartCategory",
          "parent":"12",
          "children":[  
            {  
              "id":"78",
              "type":"PartCategory",
              "parent":"27",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 2 Switches and Buttons \u27a4 Stufendrehschalter",
              "expanded":true,
              "name":"Stufendrehschalter",
              "description":""
            },
            {  
              "id":"93",
              "type":"PartCategory",
              "parent":"27",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 2 Switches and Buttons \u27a4 1 Switches",
              "expanded":true,
              "name":"1 Switches",
              "description":""
            },
            {  
              "id":"108",
              "type":"PartCategory",
              "parent":"27",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 2 Switches and Buttons \u27a4 2 Push Button",
              "expanded":true,
              "name":"2 Push Button",
              "description":""
            },
            {  
              "id":"109",
              "type":"PartCategory",
              "parent":"27",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 2 Switches and Buttons \u27a4 3 Code Switches",
              "expanded":true,
              "name":"3 Code Switches",
              "description":""
            },
            {  
              "id":"116",
              "type":"PartCategory",
              "parent":"27",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 2 Switches and Buttons \u27a4 4 DIP Switches",
              "expanded":true,
              "name":"4 DIP Switches",
              "description":""
            }
          ],
          "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 2 Switches and Buttons",
          "expanded":true,
          "name":"2 Switches and Buttons",
          "description":""
        },
        {  
          "id":"44",
          "type":"PartCategory",
          "parent":"12",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 3 Relais",
          "expanded":true,
          "name":"3 Relais",
          "description":""
        },
        {  
          "id":"98",
          "type":"PartCategory",
          "parent":"12",
          "children":[  
            {  
              "id":"107",
              "type":"PartCategory",
              "parent":"98",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 4 Fuses \u27a4 1 5*20",
              "expanded":true,
              "name":"1 5*20",
              "description":""
            },
            {  
              "id":"137",
              "type":"PartCategory",
              "parent":"98",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 4 Fuses \u27a4 2 6,3*32",
              "expanded":true,
              "name":"2 6,3*32",
              "description":""
            },
            {  
              "id":"142",
              "type":"PartCategory",
              "parent":"98",
              "children":[  
                {  
                  "id":"143",
                  "type":"PartCategory",
                  "parent":"142",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 4 Fuses \u27a4 3 Blade Fuses \u27a4 1 ATO",
                  "expanded":true,
                  "name":"1 ATO",
                  "description":""
                }
              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 4 Fuses \u27a4 3 Blade Fuses",
              "expanded":true,
              "name":"3 Blade Fuses",
              "description":""
            }
          ],
          "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 4 Fuses",
          "expanded":true,
          "name":"4 Fuses",
          "description":""
        },
        {  
          "id":"127",
          "type":"PartCategory",
          "parent":"12",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 5 Battery Holders",
          "expanded":true,
          "name":"5 Battery Holders",
          "description":""
        },
        {  
          "id":"130",
          "type":"PartCategory",
          "parent":"12",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 6 Transformers",
          "expanded":true,
          "name":"6 Transformers",
          "description":""
        },
        {  
          "id":"140",
          "type":"PartCategory",
          "parent":"12",
          "children":[  
            {  
              "id":"141",
              "type":"PartCategory",
              "parent":"140",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 7 Motors \u27a4 1 Servo",
              "expanded":true,
              "name":"1 Servo",
              "description":""
            }
          ],
          "categoryPath":"Root Category \u27a4 3 Electromechanical Parts \u27a4 7 Motors",
          "expanded":true,
          "name":"7 Motors",
          "description":""
        }
      ],
      "categoryPath":"Root Category \u27a4 3 Electromechanical Parts",
      "expanded":true,
      "name":"3 Electromechanical Parts",
      "description":""
    },
    {  
      "id":"24",
      "type":"PartCategory",
      "parent":"1",
      "children":[  
        {  
          "id":"25",
          "type":"PartCategory",
          "parent":"24",
          "children":[  
            {  
              "id":"75",
              "type":"PartCategory",
              "parent":"25",
              "children":[  
                {  
                  "id":"138",
                  "type":"PartCategory",
                  "parent":"75",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 1 Resistors \u27a4 1 Metal Film 1% \u27a4 SMD",
                  "expanded":true,
                  "name":"SMD",
                  "description":""
                }
              ],
              "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 1 Resistors \u27a4 1 Metal Film 1%",
              "expanded":true,
              "name":"1 Metal Film 1%",
              "description":""
            },
            {  
              "id":"82",
              "type":"PartCategory",
              "parent":"25",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 1 Resistors \u27a4 PTC",
              "expanded":true,
              "name":"PTC",
              "description":""
            },
            {  
              "id":"97",
              "type":"PartCategory",
              "parent":"25",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 1 Resistors \u27a4 2 Carbon Film 5%",
              "expanded":true,
              "name":"2 Carbon Film 5%",
              "description":""
            },
            {  
              "id":"104",
              "type":"PartCategory",
              "parent":"25",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 1 Resistors \u27a4 3 Networks",
              "expanded":true,
              "name":"3 Networks",
              "description":""
            },
            {  
              "id":"150",
              "type":"PartCategory",
              "parent":"25",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 1 Resistors \u27a4 4 Power Resistors",
              "expanded":true,
              "name":"4 Power Resistors",
              "description":""
            }
          ],
          "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 1 Resistors",
          "expanded":true,
          "name":"1 Resistors",
          "description":""
        },
        {  
          "id":"38",
          "type":"PartCategory",
          "parent":"24",
          "children":[  
            {  
              "id":"26",
              "type":"PartCategory",
              "parent":"38",
              "children":[  
                {  
                  "id":"100",
                  "type":"PartCategory",
                  "parent":"26",
                  "children":[  
                    {  
                      "id":"101",
                      "type":"PartCategory",
                      "parent":"100",
                      "children":[  

                      ],
                      "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 4 Potentiometers \/ Padders \u27a4 2 Trimmer \u27a4 1 10\/25 Turns Precision \u27a4 1 64P",
                      "expanded":true,
                      "name":"1 64P",
                      "description":""
                    },
                    {  
                      "id":"102",
                      "type":"PartCategory",
                      "parent":"100",
                      "children":[  

                      ],
                      "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 4 Potentiometers \/ Padders \u27a4 2 Trimmer \u27a4 1 10\/25 Turns Precision \u27a4 2 64W",
                      "expanded":true,
                      "name":"2 64W",
                      "description":""
                    },
                    {  
                      "id":"103",
                      "type":"PartCategory",
                      "parent":"100",
                      "children":[  

                      ],
                      "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 4 Potentiometers \/ Padders \u27a4 2 Trimmer \u27a4 1 10\/25 Turns Precision \u27a4 3 64Y",
                      "expanded":true,
                      "name":"3 64Y",
                      "description":""
                    },
                    {  
                      "id":"128",
                      "type":"PartCategory",
                      "parent":"100",
                      "children":[  

                      ],
                      "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 4 Potentiometers \/ Padders \u27a4 2 Trimmer \u27a4 1 10\/25 Turns Precision \u27a4 4 64X",
                      "expanded":true,
                      "name":"4 64X",
                      "description":""
                    },
                    {  
                      "id":"148",
                      "type":"PartCategory",
                      "parent":"100",
                      "children":[  

                      ],
                      "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 4 Potentiometers \/ Padders \u27a4 2 Trimmer \u27a4 1 10\/25 Turns Precision \u27a4 5 64Z",
                      "expanded":true,
                      "name":"5 64Z",
                      "description":""
                    }
                  ],
                  "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 4 Potentiometers \/ Padders \u27a4 2 Trimmer \u27a4 1 10\/25 Turns Precision",
                  "expanded":true,
                  "name":"1 10\/25 Turns Precision",
                  "description":""
                },
                {  
                  "id":"106",
                  "type":"PartCategory",
                  "parent":"26",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 4 Potentiometers \/ Padders \u27a4 2 Trimmer \u27a4 2 Cermet",
                  "expanded":true,
                  "name":"2 Cermet",
                  "description":""
                },
                {  
                  "id":"131",
                  "type":"PartCategory",
                  "parent":"26",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 4 Potentiometers \/ Padders \u27a4 2 Trimmer \u27a4 3 Precision",
                  "expanded":true,
                  "name":"3 Precision",
                  "description":""
                }
              ],
              "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 4 Potentiometers \/ Padders \u27a4 2 Trimmer",
              "expanded":true,
              "name":"2 Trimmer",
              "description":""
            },
            {  
              "id":"39",
              "type":"PartCategory",
              "parent":"38",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 4 Potentiometers \/ Padders \u27a4 4 Encoders",
              "expanded":true,
              "name":"4 Encoders",
              "description":""
            },
            {  
              "id":"45",
              "type":"PartCategory",
              "parent":"38",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 4 Potentiometers \/ Padders \u27a4 3 Slide Potentiometers",
              "expanded":true,
              "name":"3 Slide Potentiometers",
              "description":""
            },
            {  
              "id":"51",
              "type":"PartCategory",
              "parent":"38",
              "children":[  
                {  
                  "id":"88",
                  "type":"PartCategory",
                  "parent":"51",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 4 Potentiometers \/ Padders \u27a4 1 Potentiometers \u27a4 Accessories",
                  "expanded":true,
                  "name":"Accessories",
                  "description":""
                }
              ],
              "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 4 Potentiometers \/ Padders \u27a4 1 Potentiometers",
              "expanded":true,
              "name":"1 Potentiometers",
              "description":""
            }
          ],
          "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 4 Potentiometers \/ Padders",
          "expanded":true,
          "name":"4 Potentiometers \/ Padders",
          "description":""
        },
        {  
          "id":"65",
          "type":"PartCategory",
          "parent":"24",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 Varistor",
          "expanded":true,
          "name":"Varistor",
          "description":""
        },
        {  
          "id":"66",
          "type":"PartCategory",
          "parent":"24",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 Widerstandsnetzwerke",
          "expanded":true,
          "name":"Widerstandsnetzwerke",
          "description":""
        },
        {  
          "id":"86",
          "type":"PartCategory",
          "parent":"24",
          "children":[  
            {  
              "id":"87",
              "type":"PartCategory",
              "parent":"86",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 Induktive Bauelemente \u27a4 \u00dcbertrager",
              "expanded":true,
              "name":"\u00dcbertrager",
              "description":""
            }
          ],
          "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 Induktive Bauelemente",
          "expanded":true,
          "name":"Induktive Bauelemente",
          "description":""
        },
        {  
          "id":"19",
          "type":"PartCategory",
          "parent":"24",
          "children":[  
            {  
              "id":"120",
              "type":"PartCategory",
              "parent":"19",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 3 Crystals and Oscillators \u27a4 1 Crystals",
              "expanded":true,
              "name":"1 Crystals",
              "description":""
            },
            {  
              "id":"121",
              "type":"PartCategory",
              "parent":"19",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 3 Crystals and Oscillators \u27a4 2 Crystal Oscillators",
              "expanded":true,
              "name":"2 Crystal Oscillators",
              "description":""
            }
          ],
          "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 3 Crystals and Oscillators",
          "expanded":true,
          "name":"3 Crystals and Oscillators",
          "description":""
        },
        {  
          "id":"35",
          "type":"PartCategory",
          "parent":"24",
          "children":[  
            {  
              "id":"55",
              "type":"PartCategory",
              "parent":"35",
              "children":[  
                {  
                  "id":"99",
                  "type":"PartCategory",
                  "parent":"55",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 2 Capacitors \u27a4 2 Electrolythic \u27a4 1 SMD",
                  "expanded":true,
                  "name":"1 SMD",
                  "description":""
                }
              ],
              "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 2 Capacitors \u27a4 2 Electrolythic",
              "expanded":true,
              "name":"2 Electrolythic",
              "description":""
            },
            {  
              "id":"60",
              "type":"PartCategory",
              "parent":"35",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 2 Capacitors \u27a4 3 Film",
              "expanded":true,
              "name":"3 Film",
              "description":""
            },
            {  
              "id":"64",
              "type":"PartCategory",
              "parent":"35",
              "children":[  
                {  
                  "id":"112",
                  "type":"PartCategory",
                  "parent":"64",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 2 Capacitors \u27a4 1 Ceramic \u27a4 SMD",
                  "expanded":true,
                  "name":"SMD",
                  "description":""
                }
              ],
              "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 2 Capacitors \u27a4 1 Ceramic",
              "expanded":true,
              "name":"1 Ceramic",
              "description":""
            },
            {  
              "id":"80",
              "type":"PartCategory",
              "parent":"35",
              "children":[  
                {  
                  "id":"113",
                  "type":"PartCategory",
                  "parent":"80",
                  "children":[  

                  ],
                  "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 2 Capacitors \u27a4 Tantal \u27a4 SMD",
                  "expanded":true,
                  "name":"SMD",
                  "description":""
                }
              ],
              "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 2 Capacitors \u27a4 Tantal",
              "expanded":true,
              "name":"Tantal",
              "description":""
            },
            {  
              "id":"84",
              "type":"PartCategory",
              "parent":"35",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 2 Capacitors \u27a4 Styroflex",
              "expanded":true,
              "name":"Styroflex",
              "description":""
            }
          ],
          "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 2 Capacitors",
          "expanded":true,
          "name":"2 Capacitors",
          "description":""
        },
        {  
          "id":"146",
          "type":"PartCategory",
          "parent":"24",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 2 Passive Components \u27a4 8 Photoresistors \/ LDRs",
          "expanded":true,
          "name":"8 Photoresistors \/ LDRs",
          "description":""
        }
      ],
      "categoryPath":"Root Category \u27a4 2 Passive Components",
      "expanded":true,
      "name":"2 Passive Components",
      "description":""
    },
    {  
      "id":"34",
      "type":"PartCategory",
      "parent":"1",
      "children":[  

      ],
      "categoryPath":"Root Category \u27a4 V Modules",
      "expanded":true,
      "name":"V Modules",
      "description":""
    },
    {  
      "id":"49",
      "type":"PartCategory",
      "parent":"1",
      "children":[  
        {  
          "id":"50",
          "type":"PartCategory",
          "parent":"49",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 5 Cables \u27a4 1 Ribbon Cable",
          "expanded":true,
          "name":"1 Ribbon Cable",
          "description":""
        }
      ],
      "categoryPath":"Root Category \u27a4 5 Cables",
      "expanded":true,
      "name":"5 Cables",
      "description":""
    },
    {  
      "id":"52",
      "type":"PartCategory",
      "parent":"1",
      "children":[  
        {  
          "id":"159",
          "type":"PartCategory",
          "parent":"52",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 4 Mechanical Parts \u27a4 7 Ball Bearings",
          "expanded":true,
          "name":"7 Ball Bearings",
          "description":""
        },
        {  
          "id":"53",
          "type":"PartCategory",
          "parent":"52",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 4 Mechanical Parts \u27a4 4 Washers",
          "expanded":true,
          "name":"4 Washers",
          "description":""
        },
        {  
          "id":"54",
          "type":"PartCategory",
          "parent":"52",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 4 Mechanical Parts \u27a4 5 Nuts",
          "expanded":true,
          "name":"5 Nuts",
          "description":""
        },
        {  
          "id":"61",
          "type":"PartCategory",
          "parent":"52",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 4 Mechanical Parts \u27a4 2 Cooling",
          "expanded":true,
          "name":"2 Cooling",
          "description":""
        },
        {  
          "id":"63",
          "type":"PartCategory",
          "parent":"52",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 4 Mechanical Parts \u27a4 Abstandshalter",
          "expanded":true,
          "name":"Abstandshalter",
          "description":""
        },
        {  
          "id":"69",
          "type":"PartCategory",
          "parent":"52",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 4 Mechanical Parts \u27a4 Sonstiges",
          "expanded":true,
          "name":"Sonstiges",
          "description":""
        },
        {  
          "id":"70",
          "type":"PartCategory",
          "parent":"52",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 4 Mechanical Parts \u27a4 Schrauben",
          "expanded":true,
          "name":"Schrauben",
          "description":""
        },
        {  
          "id":"72",
          "type":"PartCategory",
          "parent":"52",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 4 Mechanical Parts \u27a4 Drahtstifte",
          "expanded":true,
          "name":"Drahtstifte",
          "description":""
        },
        {  
          "id":"92",
          "type":"PartCategory",
          "parent":"52",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 4 Mechanical Parts \u27a4 Spacers",
          "expanded":true,
          "name":"Spacers",
          "description":""
        },
        {  
          "id":"123",
          "type":"PartCategory",
          "parent":"52",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 4 Mechanical Parts \u27a4 1 Mica Washers",
          "expanded":true,
          "name":"1 Mica Washers",
          "description":""
        },
        {  
          "id":"157",
          "type":"PartCategory",
          "parent":"52",
          "children":[  
            {  
              "id":"158",
              "type":"PartCategory",
              "parent":"157",
              "children":[  

              ],
              "categoryPath":"Root Category \u27a4 4 Mechanical Parts \u27a4 3 Screws \u27a4 1 Machine Screws",
              "expanded":true,
              "name":"1 Machine Screws",
              "description":""
            }
          ],
          "categoryPath":"Root Category \u27a4 4 Mechanical Parts \u27a4 3 Screws",
          "expanded":true,
          "name":"3 Screws",
          "description":""
        }
      ],
      "categoryPath":"Root Category \u27a4 4 Mechanical Parts",
      "expanded":true,
      "name":"4 Mechanical Parts",
      "description":""
    },
    {  
      "id":"68",
      "type":"PartCategory",
      "parent":"1",
      "children":[  

      ],
      "categoryPath":"Root Category \u27a4 W PC Accessories",
      "expanded":true,
      "name":"W PC Accessories",
      "description":""
    },
    {  
      "id":"71",
      "type":"PartCategory",
      "parent":"1",
      "children":[  
        {  
          "id":"151",
          "type":"PartCategory",
          "parent":"71",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 Y Other Stuff \u27a4 Household",
          "expanded":true,
          "name":"Household",
          "description":""
        },
        {  
          "id":"152",
          "type":"PartCategory",
          "parent":"71",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 Y Other Stuff \u27a4 Computer",
          "expanded":true,
          "name":"Computer",
          "description":""
        }
      ],
      "categoryPath":"Root Category \u27a4 Y Other Stuff",
      "expanded":true,
      "name":"Y Other Stuff",
      "description":""
    },
    {  
      "id":"77",
      "type":"PartCategory",
      "parent":"1",
      "children":[  

      ],
      "categoryPath":"Root Category \u27a4 X PCB Material",
      "expanded":true,
      "name":"X PCB Material",
      "description":""
    },
    {  
      "id":"115",
      "type":"PartCategory",
      "parent":"1",
      "children":[  

      ],
      "categoryPath":"Root Category \u27a4 # Free Space",
      "expanded":true,
      "name":"# Free Space",
      "description":""
    },
    {  
      "id":"144",
      "type":"PartCategory",
      "parent":"1",
      "children":[  
        {  
          "id":"145",
          "type":"PartCategory",
          "parent":"144",
          "children":[  

          ],
          "categoryPath":"Root Category \u27a4 Z Projects \u27a4 1 MonsieurAdaptateur",
          "expanded":true,
          "name":"1 MonsieurAdaptateur",
          "description":""
        }
      ],
      "categoryPath":"Root Category \u27a4 Z Projects",
      "expanded":true,
      "name":"Z Projects",
      "description":""
    },
    {  
      "id":"147",
      "type":"PartCategory",
      "parent":"1",
      "children":[  

      ],
      "categoryPath":"Root Category \u27a4 6 Speakers and Buzzers",
      "expanded":true,
      "name":"6 Speakers and Buzzers",
      "description":""
    }
  ],
  "categoryPath":"Root Category",
  "expanded":true,
  "name":"Root Category",
  "description":""
}
];
*/
