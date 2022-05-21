const cities = [
   {
      'name': 'Praha',
      'population': 1275406,
      'area': 496,
      'altitude': 399,
      'longitude': 14.421388888889,
      'latitude': 50.0875,
      'region': 'Hl. m. Praha'
   },
   {
      'name': 'Brno',
      'population': 379466,
      'area': 230.18,
      'altitude': 497,
      'longitude': 16.608333333333,
      'latitude': 49.195277777778,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Ostrava',
      'population': 279791,
      'area': 214.23,
      'altitude': 334,
      'longitude': 18.2925,
      'latitude': 49.835555555556,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Plzeň',
      'population': 168733,
      'area': 137.65,
      'altitude': 452,
      'longitude': 13.3825,
      'latitude': 49.741388888889,
      'region': 'Plzeňský'
   },
   {
      'name': 'Liberec',
      'population': 102951,
      'area': 106.09,
      'altitude': 374,
      'longitude': 15.0584492,
      'latitude': 50.7699972,
      'region': 'Liberecký'
   },
   {
      'name': 'Olomouc',
      'population': 99496,
      'area': 103.33,
      'altitude': 219,
      'longitude': 17.250833333333,
      'latitude': 49.593888888889,
      'region': 'Olomoucký'
   },
   {
      'name': 'České Budějovice',
      'population': 93426,
      'area': 55.71,
      'altitude': 381,
      'longitude': 14.474722222222,
      'latitude': 48.974722222222,
      'region': 'Jihočeský'
   },
   {
      'name': 'Hradec Králové',
      'population': 90596,
      'area': 105.69,
      'altitude': 235,
      'longitude': 15.831944444444,
      'latitude': 50.209166666667,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Ústí nad Labem',
      'population': 90378,
      'area': 93.97,
      'altitude': 218,
      'longitude': 14.041666666667,
      'latitude': 50.659166666667,
      'region': 'Ústecký'
   },
   {
      'name': 'Pardubice',
      'population': 88520,
      'area': 82.655,
      'altitude': 220,
      'longitude': 15.77916,
      'latitude': 50.03861,
      'region': 'Pardubický'
   },
   {
      'name': 'Zlín',
      'population': 72973,
      'area': 102.83,
      'altitude': 230,
      'longitude': 17.666944444444,
      'latitude': 49.233055555556,
      'region': 'Zlínský'
   },
   {
      'name': 'Havířov',
      'population': 69084,
      'area': 32.08,
      'altitude': 239,
      'longitude': 18.422777777778,
      'latitude': 49.777777777778,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Kladno',
      'population': 66903,
      'area': 36.97,
      'altitude': 381,
      'longitude': 14.105277777778,
      'latitude': 50.143055555556,
      'region': 'Středočeský'
   },
   {
      'name': 'Most',
      'population': 62866,
      'area': 86.94,
      'altitude': 233,
      'longitude': 13.636666666667,
      'latitude': 50.503055555556,
      'region': 'Ústecký'
   },
   {
      'name': 'Opava',
      'population': 54840,
      'area': 90.57,
      'altitude': 257,
      'longitude': 17.904444444444,
      'latitude': 49.938055555556,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Frýdek-Místek',
      'population': 53899,
      'area': 51.56,
      'altitude': 291,
      'longitude': 18.353611111111,
      'latitude': 49.688055555556,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Jihlava',
      'population': 50108,
      'area': 87.86,
      'altitude': 525,
      'longitude': 15.590555555556,
      'latitude': 49.400277777778,
      'region': 'Vysočina'
   },
   {
      'name': 'Karviná',
      'population': 49881,
      'area': 57.52,
      'altitude': 221,
      'longitude': 18.542777777778,
      'latitude': 49.854166666667,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Teplice',
      'population': 48766,
      'area': 23.78,
      'altitude': 399,
      'longitude': 13.816666666667,
      'latitude': 50.633333333333,
      'region': 'Ústecký'
   },
   {
      'name': 'Děčín',
      'population': 47029,
      'area': 117.70,
      'altitude': 135,
      'longitude': 14.196111111111,
      'latitude': 50.773611111111,
      'region': 'Ústecký'
   },
   {
      'name': 'Chomutov',
      'population': 46263,
      'area': 29.25,
      'altitude': 330,
      'longitude': 13.411111111111,
      'latitude': 50.462777777778,
      'region': 'Ústecký'
   },
   {
      'name': 'Karlovy Vary',
      'population': 45500,
      'area': 59.10,
      'altitude': 447,
      'longitude': 12.8725,
      'latitude': 50.230555555556,
      'region': 'Karlovarský'
   },
   {
      'name': 'Jablonec nad Nisou',
      'population': 44588,
      'area': 31.38,
      'altitude': 475,
      'longitude': 15.17,
      'latitude': 50.727777777778,
      'region': 'Liberecký'
   },
   {
      'name': 'Prostějov',
      'population': 43055,
      'area': 39.04,
      'altitude': 223,
      'longitude': 17.110555555556,
      'latitude': 49.472222222222,
      'region': 'Olomoucký'
   },
   {
      'name': 'Mladá Boleslav',
      'population': 41868,
      'area': 28.90,
      'altitude': 235,
      'longitude': 14.906388888889,
      'latitude': 50.4125,
      'region': 'Středočeský'
   },
   {
      'name': 'Přerov',
      'population': 41404,
      'area': 58.45,
      'altitude': 210,
      'longitude': 17.451111111111,
      'latitude': 49.455555555556,
      'region': 'Olomoucký'
   },
   {
      'name': 'Česká Lípa',
      'population': 36740,
      'area': 66.10,
      'altitude': 258,
      'longitude': 14.53774710235,
      'latitude': 50.68558429129,
      'region': 'Liberecký'
   },
   {
      'name': 'Třebíč',
      'population': 34415,
      'area': 57.59,
      'altitude': 405,
      'longitude': 15.881675935311,
      'latitude': 49.214967400263,
      'region': 'Vysočina'
   },
   {
      'name': 'Třinec',
      'population': 34222,
      'area': 85.37,
      'altitude': 306,
      'longitude': 18.670814768494,
      'latitude': 49.677609314509,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Tábor',
      'population': 33410,
      'area': 62.22,
      'altitude': 437,
      'longitude': 14.657835974031,
      'latitude': 49.414485338494,
      'region': 'Jihočeský'
   },
   {
      'name': 'Znojmo',
      'population': 33370,
      'area': 65.90,
      'altitude': 290,
      'longitude': 16.048796054219,
      'latitude': 48.855540667876,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Kolín',
      'population': 32046,
      'area': 34.99,
      'altitude': 220,
      'longitude': 15.200633745928,
      'latitude': 50.028193990808,
      'region': 'Středočeský'
   },
   {
      'name': 'Příbram',
      'population': 31651,
      'area': 36.10,
      'altitude': 502,
      'longitude': 14.010474512485,
      'latitude': 49.68996461067,
      'region': 'Středočeský'
   },
   {
      'name': 'Cheb',
      'population': 30420,
      'area': 96.36,
      'altitude': 459,
      'longitude': 12.373995588434,
      'latitude': 50.079759165169,
      'region': 'Karlovarský'
   },
   {
      'name': 'Písek',
      'population': 29814,
      'area': 63.23,
      'altitude': 378,
      'longitude': 14.147530601921,
      'latitude': 49.30888068684,
      'region': 'Jihočeský'
   },
   {
      'name': 'Trutnov',
      'population': 29430,
      'area': 103.32,
      'altitude': 414,
      'longitude': 15.912798547953,
      'latitude': 50.561045737535,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Orlová',
      'population': 28206,
      'area': 24.67,
      'altitude': 282,
      'longitude': 18.43015544552,
      'latitude': 49.845247990058,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Kroměříž',
      'population': 27838,
      'area': 50.98,
      'altitude': 201,
      'longitude': 17.393134863736,
      'latitude': 49.297859972783,
      'region': 'Zlínský'
   },
   {
      'name': 'Vsetín',
      'population': 25226,
      'area': 57.61,
      'altitude': 348,
      'longitude': 17.996209032744,
      'latitude': 49.338702987886,
      'region': 'Zlínský'
   },
   {
      'name': 'Šumperk',
      'population': 24910,
      'area': 27.88,
      'altitude': 330,
      'longitude': 16.9706654352,
      'latitude': 49.965299915762,
      'region': 'Olomoucký'
   },
   {
      'name': 'Uherské Hradiště',
      'population': 24430,
      'area': 21.26,
      'altitude': 179,
      'longitude': 17.459691353499,
      'latitude': 49.069757549526,
      'region': 'Zlínský'
   },
   {
      'name': 'Břeclav',
      'population': 23943,
      'area': 77.19,
      'altitude': 158,
      'longitude': 16.882020775128,
      'latitude': 48.758991122507,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Hodonín',
      'population': 23828,
      'area': 63.31,
      'altitude': 167,
      'longitude': 17.132439069118,
      'latitude': 48.848950584361,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Český Těšín',
      'population': 23468,
      'area': 33.79,
      'altitude': 270,
      'longitude': 18.62617038595,
      'latitude': 49.746110801139,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Litoměřice',
      'population': 22950,
      'area': 17.99,
      'altitude': 300,
      'longitude': 14.131899491403,
      'latitude': 50.53355947692,
      'region': 'Ústecký'
   },
   {
      'name': 'Havlíčkův Brod',
      'population': 22879,
      'area': 64.93,
      'altitude': 422,
      'longitude': 15.580727658514,
      'latitude': 49.607899638305,
      'region': 'Vysočina'
   },
   {
      'name': 'Nový Jičín',
      'population': 22813,
      'area': 36.52,
      'altitude': 284,
      'longitude': 18.010308756103,
      'latitude': 49.594368444158,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Chrudim',
      'population': 22773,
      'area': 33.21,
      'altitude': 240,
      'longitude': 15.795635790875,
      'latitude': 49.951136279202,
      'region': 'Pardubický'
   },
   {
      'name': 'Krnov',
      'population': 22665,
      'area': 44.29,
      'altitude': 316,
      'longitude': 17.703908920138,
      'latitude': 50.089666916291,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Litvínov',
      'population': 22482,
      'area': 40.714,
      'altitude': 338,
      'longitude': 13.611212988257,
      'latitude': 50.60077979319,
      'region': 'Ústecký'
   },
   {
      'name': 'Strakonice',
      'population': 22214,
      'area': 34.67,
      'altitude': 393,
      'longitude': 13.902396874574,
      'latitude': 49.261497897079,
      'region': 'Jihočeský'
   },
   {
      'name': 'Sokolov',
      'population': 22097,
      'area': 22.92,
      'altitude': 401,
      'longitude': 12.640181474439,
      'latitude': 50.181415762132,
      'region': 'Karlovarský'
   },
   {
      'name': 'Valašské Meziříčí',
      'population': 21883,
      'area': 35.44,
      'altitude': 294,
      'longitude': 17.97115355859,
      'latitude': 49.471799519597,
      'region': 'Zlínský'
   },
   {
      'name': 'Klatovy',
      'population': 21587,
      'area': 80.85,
      'altitude': 405,
      'longitude': 13.29508891337,
      'latitude': 49.395625338265,
      'region': 'Plzeňský'
   },
   {
      'name': 'Kopřivnice',
      'population': 21395,
      'area': 27.49,
      'altitude': 320,
      'longitude': 18.144833283338,
      'latitude': 49.599461028116,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Jindřichův Hradec',
      'population': 20774,
      'area': 74.29,
      'altitude': 475,
      'longitude': 15.003024549245,
      'latitude': 49.144110393651,
      'region': 'Jihočeský'
   },
   {
      'name': 'Kutná Hora',
      'population': 20450,
      'area': 33.07,
      'altitude': 254,
      'longitude': 15.268225887967,
      'latitude': 49.948444972662,
      'region': 'Středočeský'
   },
   {
      'name': 'Bohumín',
      'population': 20450,
      'area': 31.03,
      'altitude': 198,
      'longitude': 18.357595239984,
      'latitude': 49.90408983288,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Žďár nad Sázavou',
      'population': 20338,
      'area': 37.06,
      'altitude': 580,
      'longitude': 15.939278339801,
      'latitude': 49.562675487861,
      'region': 'Vysočina'
   },
   {
      'name': 'Vyškov',
      'population': 20187,
      'area': 50.46,
      'altitude': 254,
      'longitude': 16.998993221633,
      'latitude': 49.277487239217,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Beroun',
      'population': 19984,
      'area': 31.25,
      'altitude': 235,
      'longitude': 14.072061165906,
      'latitude': 49.963908175611,
      'region': 'Středočeský'
   },
   {
      'name': 'Blansko',
      'population': 19715,
      'area': 44.97,
      'altitude': 276,
      'longitude': 16.643174766744,
      'latitude': 49.363160582771,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Mělník',
      'population': 19472,
      'area': 24.96,
      'altitude': 215,
      'longitude': 14.474193495734,
      'latitude': 50.35057067972,
      'region': 'Středočeský'
   },
   {
      'name': 'Náchod',
      'population': 19220,
      'area': 33.34,
      'altitude': 347,
      'longitude': 16.16297400854,
      'latitude': 50.416738226612,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Jirkov',
      'population': 18945,
      'area': 17.01,
      'altitude': 305,
      'longitude': 13.447786301898,
      'latitude': 50.499890572913,
      'region': 'Ústecký'
   },
   {
      'name': 'Brandýs nad Labem-Stará Boleslav',
      'population': 18755,
      'area': 22.65,
      'altitude': 169,
      'longitude': 14.663332953497,
      'latitude': 50.187160680032,
      'region': 'Středočeský'
   },
   {
      'name': 'Žatec',
      'population': 18570,
      'area': 42.68,
      'altitude': 233,
      'longitude': 13.545859487384,
      'latitude': 50.327264913574,
      'region': 'Ústecký'
   },
   {
      'name': 'Kralupy nad Vltavou',
      'population': 18189,
      'area': 21.9,
      'altitude': 274,
      'longitude': 14.311574668457,
      'latitude': 50.241148972524,
      'region': 'Středočeský'
   },
   {
      'name': 'Louny',
      'population': 17760,
      'area': 24.14,
      'altitude': 185,
      'longitude': 13.796762432686,
      'latitude': 50.357078457688,
      'region': 'Ústecký'
   },
   {
      'name': 'Kadaň',
      'population': 17628,
      'area': 65.62,
      'altitude': 300,
      'longitude': 13.271397346217,
      'latitude': 50.37608553522,
      'region': 'Ústecký'
   },
   {
      'name': 'Hranice (okres Přerov)',
      'population': 17495,
      'area': 49.78,
      'altitude': 250,
      'longitude': 17.734723291716,
      'latitude': 49.547963974257,
      'region': 'Olomoucký'
   },
   {
      'name': 'Otrokovice',
      'population': 17183,
      'area': 19.63,
      'altitude': 190,
      'longitude': 17.530780558281,
      'latitude': 49.209921755941,
      'region': 'Zlínský'
   },
   {
      'name': 'Benešov',
      'population': 16448,
      'area': 46.87,
      'altitude': 368,
      'longitude': 14.687020558215,
      'latitude': 49.781695568859,
      'region': 'Středočeský'
   },
   {
      'name': 'Svitavy',
      'population': 16261,
      'area': 31.33,
      'altitude': 435,
      'longitude': 16.468338539525,
      'latitude': 49.755965917692,
      'region': 'Pardubický'
   },
   {
      'name': 'Uherský Brod',
      'population': 16206,
      'area': 52.06,
      'altitude': 251,
      'longitude': 17.647153295745,
      'latitude': 49.025133430958,
      'region': 'Zlínský'
   },
   {
      'name': 'Říčany',
      'population': 16182,
      'area': 25.81,
      'altitude': 341,
      'longitude': 14.654334421235,
      'latitude': 49.991746433504,
      'region': 'Středočeský'
   },
   {
      'name': 'Rožnov pod Radhoštěm',
      'population': 16077,
      'area': 39.48,
      'altitude': 378,
      'longitude': 18.143045316957,
      'latitude': 49.45851736056,
      'region': 'Zlínský'
   },
   {
      'name': 'Jičín',
      'population': 15871,
      'area': 25.86,
      'altitude': 287,
      'longitude': 15.351713997933,
      'latitude': 50.437279002171,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Slaný',
      'population': 15862,
      'area': 35.12,
      'altitude': 234,
      'longitude': 14.087014267434,
      'latitude': 50.230541170014,
      'region': 'Středočeský'
   },
   {
      'name': 'Neratovice',
      'population': 15831,
      'area': 20.00,
      'altitude': 162,
      'longitude': 14.517675172798,
      'latitude': 50.259331649996,
      'region': 'Středočeský'
   },
   {
      'name': 'Ostrov (okres Karlovy Vary)',
      'population': 15822,
      'area': 50.41,
      'altitude': 398,
      'longitude': 12.939153516476,
      'latitude': 50.306035004821,
      'region': 'Karlovarský'
   },
   {
      'name': 'Pelhřimov',
      'population': 15755,
      'area': 95.28,
      'altitude': 494,
      'longitude': 15.223389364189,
      'latitude': 49.431396763393,
      'region': 'Vysočina'
   },
   {
      'name': 'Bruntál',
      'population': 15523,
      'area': 29.34,
      'altitude': 547,
      'longitude': 17.464759014801,
      'latitude': 49.988449251745,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Dvůr Králové nad Labem',
      'population': 15170,
      'area': 35.84,
      'altitude': 298,
      'longitude': 15.814108741637,
      'latitude': 50.431763800828,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Rakovník',
      'population': 15142,
      'area': 18.5,
      'altitude': 322,
      'longitude': 13.733472751214,
      'latitude': 50.103792787995,
      'region': 'Středočeský'
   },
   {
      'name': 'Česká Třebová',
      'population': 15062,
      'area': 41.01,
      'altitude': 375,
      'longitude': 16.447334999548,
      'latitude': 49.90191270808,
      'region': 'Pardubický'
   },
   {
      'name': 'Nymburk',
      'population': 14780,
      'area': 20.59,
      'altitude': 193,
      'longitude': 15.041747256066,
      'latitude': 50.186115487846,
      'region': 'Středočeský'
   },
   {
      'name': 'Varnsdorf',
      'population': 14738,
      'area': 26.23,
      'altitude': 332,
      'longitude': 14.618353683386,
      'latitude': 50.911612411446,
      'region': 'Ústecký'
   },
   {
      'name': 'Bílina',
      'population': 14420,
      'area': 32.50,
      'altitude': 207,
      'longitude': 13.775445246997,
      'latitude': 50.548631074934,
      'region': 'Ústecký'
   },
   {
      'name': 'Poděbrady',
      'population': 14317,
      'area': 33.68,
      'altitude': 185,
      'longitude': 15.118884780406,
      'latitude': 50.142477809038,
      'region': 'Středočeský'
   },
   {
      'name': 'Klášterec nad Ohří',
      'population': 14190,
      'area': 53.79,
      'altitude': 320,
      'longitude': 13.171368113331,
      'latitude': 50.384556821405,
      'region': 'Ústecký'
   },
   {
      'name': 'Turnov',
      'population': 14174,
      'area': 22.71,
      'altitude': 260,
      'longitude': 15.156899388718,
      'latitude': 50.587341607858,
      'region': 'Liberecký'
   },
   {
      'name': 'Ústí nad Orlicí',
      'population': 13936,
      'area': 36.37,
      'altitude': 340,
      'longitude': 16.393670305445,
      'latitude': 49.973904297163,
      'region': 'Pardubický'
   },
   {
      'name': 'Rokycany',
      'population': 13826,
      'area': 30.67,
      'altitude': 362,
      'longitude': 13.594638741285,
      'latitude': 49.742793661264,
      'region': 'Plzeňský'
   },
   {
      'name': 'Hlučín',
      'population': 13562,
      'area': 21.14,
      'altitude': 241,
      'longitude': 18.19200490075,
      'latitude': 49.897939786775,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Zábřeh',
      'population': 13281,
      'area': 34.59,
      'altitude': 285,
      'longitude': 16.872280013113,
      'latitude': 49.882620486561,
      'region': 'Olomoucký'
   },
   {
      'name': 'Šternberk',
      'population': 13144,
      'area': 48.79,
      'altitude': 268,
      'longitude': 17.298931346408,
      'latitude': 49.73045283333,
      'region': 'Olomoucký'
   },
   {
      'name': 'Chodov (okres Sokolov)',
      'population': 12683,
      'area': 14.26,
      'altitude': 418,
      'longitude': 12.753403883747,
      'latitude': 50.241450598051,
      'region': 'Karlovarský'
   },
   {
      'name': 'Tachov',
      'population': 12538,
      'area': 40.84,
      'altitude': 483,
      'longitude': 12.633709213451,
      'latitude': 49.795398066933,
      'region': 'Plzeňský'
   },
   {
      'name': 'Roudnice nad Labem',
      'population': 12506,
      'area': 16.67,
      'altitude': 195,
      'longitude': 14.261840817268,
      'latitude': 50.425361080625,
      'region': 'Ústecký'
   },
   {
      'name': 'Aš',
      'population': 12483,
      'area': 55.86,
      'altitude': 666,
      'longitude': 12.195074300926,
      'latitude': 50.223996008844,
      'region': 'Karlovarský'
   },
   {
      'name': 'Český Krumlov',
      'population': 12461,
      'area': 22.16,
      'altitude': 492,
      'longitude': 14.31520771066,
      'latitude': 48.810990441614,
      'region': 'Jihočeský'
   },
   {
      'name': 'Milovice',
      'population': 12460,
      'area': 28.34,
      'altitude': 221,
      'longitude': 14.888710216255,
      'latitude': 50.226024627414,
      'region': 'Středočeský'
   },
   {
      'name': 'Krupka',
      'population': 12365,
      'area': 46.61,
      'altitude': 300,
      'longitude': 13.858256809864,
      'latitude': 50.684576839145,
      'region': 'Ústecký'
   },
   {
      'name': 'Jaroměř',
      'population': 12260,
      'area': 23.95,
      'altitude': 254,
      'longitude': 15.921447438363,
      'latitude': 50.356235289292,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Mariánské Lázně',
      'population': 12237,
      'area': 51.79,
      'altitude': 578,
      'longitude': 12.701249703911,
      'latitude': 49.964703891769,
      'region': 'Karlovarský'
   },
   {
      'name': 'Čelákovice',
      'population': 12008,
      'area': 15.88,
      'altitude': 184,
      'longitude': 14.750119929994,
      'latitude': 50.160451211747,
      'region': 'Středočeský'
   },
   {
      'name': 'Vysoké Mýto',
      'population': 12007,
      'area': 42.03,
      'altitude': 284,
      'longitude': 16.161752006464,
      'latitude': 49.953240035812,
      'region': 'Pardubický'
   },
   {
      'name': 'Vrchlabí',
      'population': 11968,
      'area': 27.65,
      'altitude': 477,
      'longitude': 15.609473689336,
      'latitude': 50.627013945049,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Boskovice',
      'population': 11661,
      'area': 27.82,
      'altitude': 381,
      'longitude': 16.660002080035,
      'latitude': 49.487537313637,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Nový Bor',
      'population': 11458,
      'area': 19.44,
      'altitude': 365,
      'longitude': 14.555662165889,
      'latitude': 50.757681178047,
      'region': 'Liberecký'
   },
   {
      'name': 'Holešov',
      'population': 11426,
      'area': 33.95,
      'altitude': 232,
      'longitude': 17.578340885825,
      'latitude': 49.333314366496,
      'region': 'Zlínský'
   },
   {
      'name': 'Vlašim',
      'population': 11357,
      'area': 41.42,
      'altitude': 365,
      'longitude': 14.898853788831,
      'latitude': 49.706391051684,
      'region': 'Středočeský'
   },
   {
      'name': 'Velké Meziříčí',
      'population': 11325,
      'area': 40.66,
      'altitude': 425,
      'longitude': 16.01226875669,
      'latitude': 49.355258131562,
      'region': 'Vysočina'
   },
   {
      'name': 'Uničov',
      'population': 11066,
      'area': 48.28,
      'altitude': 248,
      'longitude': 17.121482256516,
      'latitude': 49.770928637031,
      'region': 'Olomoucký'
   },
   {
      'name': 'Kyjov',
      'population': 10849,
      'area': 29.88,
      'altitude': 192,
      'longitude': 17.122531686075,
      'latitude': 49.010193088478,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Kuřim',
      'population': 10847,
      'area': 17.20,
      'altitude': 286,
      'longitude': 16.53146211908,
      'latitude': 49.298546446655,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Domažlice',
      'population': 10749,
      'area': 24.62,
      'altitude': 428,
      'longitude': 12.929798039263,
      'latitude': 49.440605680467,
      'region': 'Plzeňský'
   },
   {
      'name': 'Humpolec',
      'population': 10741,
      'area': 51.51,
      'altitude': 527,
      'longitude': 15.359357331212,
      'latitude': 49.541577778709,
      'region': 'Vysočina'
   },
   {
      'name': 'Rychnov nad Kněžnou',
      'population': 10717,
      'area': 34.99,
      'altitude': 320,
      'longitude': 16.274954757842,
      'latitude': 50.162870787815,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Rumburk',
      'population': 10679,
      'area': 24.72,
      'altitude': 387,
      'longitude': 14.55711013781,
      'latitude': 50.951576367344,
      'region': 'Ústecký'
   },
   {
      'name': 'Sušice',
      'population': 10662,
      'area': 45.65,
      'altitude': 472,
      'longitude': 13.520207848015,
      'latitude': 49.231161465796,
      'region': 'Plzeňský'
   },
   {
      'name': 'Jeseník',
      'population': 10658,
      'area': 38.23,
      'altitude': 432,
      'longitude': 17.204714793832,
      'latitude': 50.22937984562,
      'region': 'Olomoucký'
   },
   {
      'name': 'Prachatice',
      'population': 10588,
      'area': 38.92,
      'altitude': 561,
      'longitude': 13.997533003713,
      'latitude': 49.013013368826,
      'region': 'Jihočeský'
   },
   {
      'name': 'Veselí nad Moravou',
      'population': 10577,
      'area': 35.45,
      'altitude': 176,
      'longitude': 17.37648237967,
      'latitude': 48.953642955201,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Frenštát pod Radhoštěm',
      'population': 10569,
      'area': 11.43,
      'altitude': 401,
      'longitude': 18.210809609836,
      'latitude': 49.548334550378,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Čáslav',
      'population': 10128,
      'area': 26.46,
      'altitude': 231,
      'longitude': 15.389777063866,
      'latitude': 49.911045008568,
      'region': 'Středočeský'
   },
   {
      'name': 'Králův Dvůr',
      'population': 9995,
      'area': 15.26,
      'altitude': 240,
      'longitude': 14.034516923849,
      'latitude': 49.949891666533,
      'region': 'Středočeský'
   },
   {
      'name': 'Litomyšl',
      'population': 9914,
      'area': 33.44,
      'altitude': 330,
      'longitude': 16.310576465877,
      'latitude': 49.872064383156,
      'region': 'Pardubický'
   },
   {
      'name': 'Nové Město na Moravě',
      'population': 9829,
      'area': 61.13,
      'altitude': 594,
      'longitude': 16.074220542261,
      'latitude': 49.561481877592,
      'region': 'Vysočina'
   },
   {
      'name': 'Frýdlant nad Ostravicí',
      'population': 9796,
      'area': 21.91,
      'altitude': 357,
      'longitude': 18.359696643447,
      'latitude': 49.592787662664,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Jesenice (okres Praha-západ)',
      'population': 9777,
      'area': 17.54,
      'altitude': 358,
      'longitude': 14.513559856752,
      'latitude': 49.96821662742,
      'region': 'Středočeský'
   },
   {
      'name': 'Ivančice',
      'population': 9737,
      'area': 47.65,
      'altitude': 210,
      'longitude': 16.377529198529,
      'latitude': 49.101477851144,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Lysá nad Labem',
      'population': 9732,
      'area': 33.67,
      'altitude': 183,
      'longitude': 14.832888718706,
      'latitude': 50.201496776686,
      'region': 'Středočeský'
   },
   {
      'name': 'Moravská Třebová',
      'population': 9656,
      'area': 42.05,
      'altitude': 360,
      'longitude': 16.664303989895,
      'latitude': 49.757953873208,
      'region': 'Pardubický'
   },
   {
      'name': 'Litovel',
      'population': 9567,
      'area': 46.40,
      'altitude': 233,
      'longitude': 17.076190647983,
      'latitude': 49.701225181872,
      'region': 'Olomoucký'
   },
   {
      'name': 'Hlinsko',
      'population': 9416,
      'area': 24.27,
      'altitude': 580,
      'longitude': 15.907605681006,
      'latitude': 49.762172981864,
      'region': 'Pardubický'
   },
   {
      'name': 'Lanškroun',
      'population': 9326,
      'area': 20.65,
      'altitude': 373,
      'longitude': 16.611954510979,
      'latitude': 49.912192261266,
      'region': 'Pardubický'
   },
   {
      'name': 'Přelouč',
      'population': 9315,
      'area': 30.47,
      'altitude': 212,
      'longitude': 15.560373291128,
      'latitude': 50.039897141756,
      'region': 'Pardubický'
   },
   {
      'name': 'Studénka',
      'population': 9277,
      'area': 30.92,
      'altitude': 239,
      'longitude': 18.078565781992,
      'latitude': 49.723408972599,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Tišnov',
      'population': 9164,
      'area': 17.12,
      'altitude': 256,
      'longitude': 16.424404904279,
      'latitude': 49.348749330424,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Nové Město nad Metují',
      'population': 9132,
      'area': 23.13,
      'altitude': 332,
      'longitude': 16.151547223496,
      'latitude': 50.344598880803,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Mohelnice',
      'population': 9103,
      'area': 46.20,
      'altitude': 267,
      'longitude': 16.919508491038,
      'latitude': 49.777001590952,
      'region': 'Olomoucký'
   },
   {
      'name': 'Chotěboř',
      'population': 8995,
      'area': 54.05,
      'altitude': 515,
      'longitude': 15.67022905709,
      'latitude': 49.720765680333,
      'region': 'Vysočina'
   },
   {
      'name': 'Nová Paka',
      'population': 8857,
      'area': 28.68,
      'altitude': 427,
      'longitude': 15.515123613971,
      'latitude': 50.494542634207,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Hostivice',
      'population': 8777,
      'area': 14.47,
      'altitude': 341,
      'longitude': 14.258633351605,
      'latitude': 50.081655150002,
      'region': 'Středočeský'
   },
   {
      'name': 'Mnichovo Hradiště',
      'population': 8711,
      'area': 34.32,
      'altitude': 240,
      'longitude': 14.971430407266,
      'latitude': 50.527266026167,
      'region': 'Středočeský'
   },
   {
      'name': 'Polička',
      'population': 8710,
      'area': 33.12,
      'altitude': 555,
      'longitude': 16.265478874053,
      'latitude': 49.714679390589,
      'region': 'Pardubický'
   },
   {
      'name': 'Dobříš',
      'population': 8707,
      'area': 53.42,
      'altitude': 371,
      'longitude': 14.16722087166,
      'latitude': 49.781215974594,
      'region': 'Středočeský'
   },
   {
      'name': 'Roztoky (okres Praha-západ)',
      'population': 8611,
      'area': 8.13,
      'altitude': 237,
      'longitude': 14.397679313408,
      'latitude': 50.158489314828,
      'region': 'Středočeský'
   },
   {
      'name': 'Lovosice',
      'population': 8605,
      'area': 11.89,
      'altitude': 151,
      'longitude': 14.051126534986,
      'latitude': 50.515121498998,
      'region': 'Ústecký'
   },
   {
      'name': 'Duchcov',
      'population': 8589,
      'area': 15.41,
      'altitude': 201,
      'longitude': 13.746310094927,
      'latitude': 50.603854793198,
      'region': 'Ústecký'
   },
   {
      'name': 'Choceň',
      'population': 8477,
      'area': 21.69,
      'altitude': 290,
      'longitude': 16.223087674169,
      'latitude': 50.00163914968,
      'region': 'Pardubický'
   },
   {
      'name': 'Štětí',
      'population': 8438,
      'area': 53.90,
      'altitude': 155,
      'longitude': 14.374304629682,
      'latitude': 50.453059775481,
      'region': 'Ústecký'
   },
   {
      'name': 'Příbor (okres Nový Jičín)',
      'population': 8297,
      'area': 22.15,
      'altitude': 278,
      'longitude': 18.145022037352,
      'latitude': 49.640926771377,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Hořice',
      'population': 8274,
      'area': 21.43,
      'altitude': 311,
      'longitude': 15.631918228938,
      'latitude': 50.366136740505,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Červený Kostelec',
      'population': 8229,
      'area': 24.07,
      'altitude': 414,
      'longitude': 16.092983802099,
      'latitude': 50.476298276375,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Semily',
      'population': 8120,
      'area': 16.31,
      'altitude': 340,
      'longitude': 15.33561979968,
      'latitude': 50.601957959876,
      'region': 'Liberecký'
   },
   {
      'name': 'Třeboň',
      'population': 8092,
      'area': 98.31,
      'altitude': 434,
      'longitude': 14.770659141428,
      'latitude': 49.003709466138,
      'region': 'Jihočeský'
   },
   {
      'name': 'Milevsko',
      'population': 8033,
      'area': 42.29,
      'altitude': 461,
      'longitude': 14.36004017878,
      'latitude': 49.450972060646,
      'region': 'Jihočeský'
   },
   {
      'name': 'Bystřice pod Hostýnem',
      'population': 7984,
      'area': 26.81,
      'altitude': 315,
      'longitude': 17.674035465156,
      'latitude': 49.399238981974,
      'region': 'Zlínský'
   },
   {
      'name': 'Rýmařov',
      'population': 7969,
      'area': 60.73,
      'altitude': 590,
      'longitude': 17.271821662136,
      'latitude': 49.931838496043,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Bystřice nad Pernštejnem',
      'population': 7835,
      'area': 53.07,
      'altitude': 535,
      'longitude': 16.261501207469,
      'latitude': 49.522980589139,
      'region': 'Vysočina'
   },
   {
      'name': 'Lipník nad Bečvou',
      'population': 7826,
      'area': 30.62,
      'altitude': 233,
      'longitude': 17.58633834226,
      'latitude': 49.527549239447,
      'region': 'Olomoucký'
   },
   {
      'name': 'Dubí',
      'population': 7805,
      'area': 33.85,
      'altitude': 389,
      'longitude': 13.788939045017,
      'latitude': 50.681121671443,
      'region': 'Ústecký'
   },
   {
      'name': 'Týn nad Vltavou',
      'population': 7804,
      'area': 43.02,
      'altitude': 365,
      'longitude': 14.420589996012,
      'latitude': 49.223475602317,
      'region': 'Jihočeský'
   },
   {
      'name': 'Hrádek nad Nisou',
      'population': 7704,
      'area': 48.55,
      'altitude': 255,
      'longitude': 14.844661931528,
      'latitude': 50.85285295319,
      'region': 'Liberecký'
   },
   {
      'name': 'Šlapanice',
      'population': 7640,
      'area': 14.65,
      'altitude': 230,
      'longitude': 16.727325855884,
      'latitude': 49.168653859874,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Rychvald',
      'population': 7614,
      'area': 17.02,
      'altitude': 220,
      'longitude': 18.376307429057,
      'latitude': 49.86623590309,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Nejdek',
      'population': 7608,
      'area': 52.27,
      'altitude': 568,
      'longitude': 12.729443668258,
      'latitude': 50.322532483831,
      'region': 'Karlovarský'
   },
   {
      'name': 'Stříbro (okres Tachov)',
      'population': 7430,
      'area': 47.8,
      'altitude': 399,
      'longitude': 13.004146255782,
      'latitude': 49.753048391098,
      'region': 'Plzeňský'
   },
   {
      'name': 'Mikulov',
      'population': 7427,
      'area': 45.32,
      'altitude': 242,
      'longitude': 16.637789181722,
      'latitude': 48.805586996193,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Benátky nad Jizerou',
      'population': 7410,
      'area': 35.51,
      'altitude': 225,
      'longitude': 14.823513539563,
      'latitude': 50.290918373612,
      'region': 'Středočeský'
   },
   {
      'name': 'Petřvald (okres Karviná)',
      'population': 7396,
      'area': 12.63,
      'altitude': 265,
      'longitude': 18.389449339429,
      'latitude': 49.830981416104,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Frýdlant',
      'population': 7380,
      'area': 31.61,
      'altitude': 295,
      'longitude': 15.079858729413,
      'latitude': 50.921451823669,
      'region': 'Liberecký'
   },
   {
      'name': 'Bílovec',
      'population': 7341,
      'area': 38.89,
      'altitude': 243,
      'longitude': 18.015853348325,
      'latitude': 49.756380390942,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Černošice',
      'population': 7329,
      'area': 9.06,
      'altitude': 211,
      'longitude': 14.319858494702,
      'latitude': 49.960158615227,
      'region': 'Středočeský'
   },
   {
      'name': 'Vratimov',
      'population': 7276,
      'area': 14.11,
      'altitude': 250,
      'longitude': 18.310188493649,
      'latitude': 49.769937353857,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Odry',
      'population': 7274,
      'area': 74.05,
      'altitude': 303,
      'longitude': 17.830879019923,
      'latitude': 49.66254664793,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Vimperk',
      'population': 7255,
      'area': 80.04,
      'altitude': 694,
      'longitude': 13.774271666134,
      'latitude': 49.052527919987,
      'region': 'Jihočeský'
   },
   {
      'name': 'Moravské Budějovice',
      'population': 7167,
      'area': 37.13,
      'altitude': 465,
      'longitude': 15.808653302577,
      'latitude': 49.05213602726,
      'region': 'Vysočina'
   },
   {
      'name': 'Broumov',
      'population': 7145,
      'area': 22.27,
      'altitude': 395,
      'longitude': 16.331904763502,
      'latitude': 50.585690135728,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Dačice',
      'population': 7142,
      'area': 66.96,
      'altitude': 477,
      'longitude': 15.437278856602,
      'latitude': 49.081598679718,
      'region': 'Jihočeský'
   },
   {
      'name': 'Napajedla',
      'population': 7074,
      'area': 19.83,
      'altitude': 200,
      'longitude': 17.51195508558,
      'latitude': 49.171564523809,
      'region': 'Zlínský'
   },
   {
      'name': 'Český Brod',
      'population': 7071,
      'area': 19.70,
      'altitude': 219,
      'longitude': 14.860881470778,
      'latitude': 50.074267480539,
      'region': 'Středočeský'
   },
   {
      'name': 'Úvaly',
      'population': 7035,
      'area': 10.97,
      'altitude': 253,
      'longitude': 14.73087395138,
      'latitude': 50.074011899968,
      'region': 'Středočeský'
   },
   {
      'name': 'Sezimovo Ústí',
      'population': 7018,
      'area': 8.44,
      'altitude': 399,
      'longitude': 14.684835568625,
      'latitude': 49.385258670607,
      'region': 'Jihočeský'
   },
   {
      'name': 'Slavkov u Brna',
      'population': 6992,
      'area': 14.95,
      'altitude': 211,
      'longitude': 16.876504369244,
      'latitude': 49.153275386094,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Kaplice',
      'population': 6984,
      'area': 40.85,
      'altitude': 537,
      'longitude': 14.496272135395,
      'latitude': 48.738564836975,
      'region': 'Jihočeský'
   },
   {
      'name': 'Nový Bydžov',
      'population': 6982,
      'area': 35.27,
      'altitude': 235,
      'longitude': 15.490898003773,
      'latitude': 50.241552543371,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Nýřany',
      'population': 6891,
      'area': 22.79,
      'altitude': 336,
      'longitude': 13.211901020269,
      'latitude': 49.711560287657,
      'region': 'Plzeňský'
   },
   {
      'name': 'Hořovice',
      'population': 6882,
      'area': 9.55,
      'altitude': 385,
      'longitude': 13.902738643216,
      'latitude': 49.836060857067,
      'region': 'Středočeský'
   },
   {
      'name': 'Vodňany',
      'population': 6848,
      'area': 36.34,
      'altitude': 398,
      'longitude': 14.175148006577,
      'latitude': 49.147976092242,
      'region': 'Jihočeský'
   },
   {
      'name': 'Soběslav',
      'population': 6830,
      'area': 20.00,
      'altitude': 405,
      'longitude': 14.71863867571,
      'latitude': 49.260006346187,
      'region': 'Jihočeský'
   },
   {
      'name': 'Sedlčany',
      'population': 6799,
      'area': 36.47,
      'altitude': 321,
      'longitude': 14.426685295646,
      'latitude': 49.660649523688,
      'region': 'Středočeský'
   },
   {
      'name': 'Letovice',
      'population': 6669,
      'area': 51.01,
      'altitude': 330,
      'longitude': 16.573608242859,
      'latitude': 49.547116840883,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Přeštice',
      'population': 6645,
      'area': 25.41,
      'altitude': 345,
      'longitude': 13.333542808445,
      'latitude': 49.573084901444,
      'region': 'Plzeňský'
   },
   {
      'name': 'Kravaře',
      'population': 6601,
      'area': 19.37,
      'altitude': 233,
      'longitude': 18.004772215608,
      'latitude': 49.932024489233,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Staré Město (okres Uherské Hradiště)',
      'population': 6552,
      'area': 20.83,
      'altitude': 205,
      'longitude': 17.433385613484,
      'latitude': 49.075157294006,
      'region': 'Zlínský'
   },
   {
      'name': 'Holice',
      'population': 6542,
      'area': 19.65,
      'altitude': 244,
      'longitude': 15.985965854452,
      'latitude': 50.066050453806,
      'region': 'Pardubický'
   },
   {
      'name': 'Kraslice (okres Sokolov)',
      'population': 6537,
      'area': 81.33,
      'altitude': 514,
      'longitude': 12.517556147716,
      'latitude': 50.323842588747,
      'region': 'Karlovarský'
   },
   {
      'name': 'Hulín',
      'population': 6533,
      'area': 32.12,
      'altitude': 191,
      'longitude': 17.463758712343,
      'latitude': 49.316900046515,
      'region': 'Zlínský'
   },
   {
      'name': 'Dobruška',
      'population': 6518,
      'area': 34.44,
      'altitude': 287,
      'longitude': 16.160091697745,
      'latitude': 50.292047387909,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Bučovice',
      'population': 6510,
      'area': 31.18,
      'altitude': 230,
      'longitude': 17.001917706954,
      'latitude': 49.148973571179,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Šenov',
      'population': 6477,
      'area': 16.63,
      'altitude': 255,
      'longitude': 18.376108072077,
      'latitude': 49.793134259402,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Rosice',
      'population': 6466,
      'area': 12.74,
      'altitude': 326,
      'longitude': 16.387885945617,
      'latitude': 49.1823520088,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Letohrad',
      'population': 6377,
      'area': 23.55,
      'altitude': 372,
      'longitude': 16.498848119659,
      'latitude': 50.035827763428,
      'region': 'Pardubický'
   },
   {
      'name': 'Blatná',
      'population': 6371,
      'area': 43.6,
      'altitude': 440,
      'longitude': 13.881793989077,
      'latitude': 49.424977027305,
      'region': 'Jihočeský'
   },
   {
      'name': 'Mimoň',
      'population': 6361,
      'area': 15.48,
      'altitude': 280,
      'longitude': 14.724839569219,
      'latitude': 50.658755425527,
      'region': 'Liberecký'
   },
   {
      'name': 'Světlá nad Sázavou',
      'population': 6335,
      'area': 42.08,
      'altitude': 400,
      'longitude': 15.403979061829,
      'latitude': 49.668062440319,
      'region': 'Vysočina'
   },
   {
      'name': 'Veselí nad Lužnicí',
      'population': 6317,
      'area': 29.57,
      'altitude': 407,
      'longitude': 14.697355580068,
      'latitude': 49.184368900539,
      'region': 'Jihočeský'
   },
   {
      'name': 'Chrastava',
      'population': 6260,
      'area': 27.46,
      'altitude': 295,
      'longitude': 14.968948444345,
      'latitude': 50.81698593906,
      'region': 'Liberecký'
   },
   {
      'name': 'Podbořany',
      'population': 6248,
      'area': 60.15,
      'altitude': 331,
      'longitude': 13.411998129955,
      'latitude': 50.229466858401,
      'region': 'Ústecký'
   },
   {
      'name': 'Dubňany',
      'population': 6231,
      'area': 22.58,
      'altitude': 200,
      'longitude': 17.090040442473,
      'latitude': 48.916955312083,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Slavičín',
      'population': 6227,
      'area': 33.66,
      'altitude': 380,
      'longitude': 17.873493344939,
      'latitude': 49.087983788408,
      'region': 'Zlínský'
   },
   {
      'name': 'Odolena Voda',
      'population': 6163,
      'area': 11.24,
      'altitude': 248,
      'longitude': 14.410860235991,
      'latitude': 50.233487444448,
      'region': 'Středočeský'
   },
   {
      'name': 'Dobřany',
      'population': 6128,
      'area': 35.32,
      'altitude': 352,
      'longitude': 13.293116667157,
      'latitude': 49.654927628789,
      'region': 'Plzeňský'
   },
   {
      'name': 'Kostelec nad Orlicí',
      'population': 6090,
      'area': 26.20,
      'altitude': 273,
      'longitude': 16.213254179601,
      'latitude': 50.122700875844,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Mníšek pod Brdy',
      'population': 6060,
      'area': 26.50,
      'altitude': 385,
      'longitude': 14.261816920552,
      'latitude': 49.866576610398,
      'region': 'Středočeský'
   },
   {
      'name': 'Hronov',
      'population': 6032,
      'area': 22.04,
      'altitude': 364,
      'longitude': 16.182393097246,
      'latitude': 50.47971690936,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Týniště nad Orlicí',
      'population': 6001,
      'area': 52.46,
      'altitude': 253,
      'longitude': 16.077768029523,
      'latitude': 50.151400055455,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Hustopeče',
      'population': 5998,
      'area': 24.53,
      'altitude': 215,
      'longitude': 16.73762221643,
      'latitude': 48.940871942774,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Tanvald',
      'population': 5958,
      'area': 12.45,
      'altitude': 455,
      'longitude': 15.305960246529,
      'latitude': 50.737406262188,
      'region': 'Liberecký'
   },
   {
      'name': 'Žamberk',
      'population': 5918,
      'area': 16.91,
      'altitude': 420,
      'longitude': 16.467445454592,
      'latitude': 50.086040466117,
      'region': 'Pardubický'
   },
   {
      'name': 'Železný Brod',
      'population': 5883,
      'area': 22.52,
      'altitude': 305,
      'longitude': 15.254178818148,
      'latitude': 50.642794278444,
      'region': 'Liberecký'
   },
   {
      'name': 'Kojetín',
      'population': 5837,
      'area': 31.09,
      'altitude': 200,
      'longitude': 17.302089031356,
      'latitude': 49.351803869882,
      'region': 'Olomoucký'
   },
   {
      'name': 'Šluknov',
      'population': 5721,
      'area': 47.47,
      'altitude': 340,
      'longitude': 14.452709270766,
      'latitude': 51.003759354628,
      'region': 'Ústecký'
   },
   {
      'name': 'Třebechovice pod Orebem',
      'population': 5706,
      'area': 21.01,
      'altitude': 243,
      'longitude': 15.9923048313,
      'latitude': 50.201006677785,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Týnec nad Sázavou',
      'population': 5667,
      'area': 25.75,
      'altitude': 281,
      'longitude': 14.589890530837,
      'latitude': 49.833548574825,
      'region': 'Středočeský'
   },
   {
      'name': 'Rousínov',
      'population': 5648,
      'area': 23.05,
      'altitude': 241,
      'longitude': 16.882160941908,
      'latitude': 49.201302411488,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Třešť',
      'population': 5625,
      'area': 46.99,
      'altitude': 545,
      'longitude': 15.482137396507,
      'latitude': 49.29097119215,
      'region': 'Vysočina'
   },
   {
      'name': 'Moravský Krumlov',
      'population': 5606,
      'area': 49.56,
      'altitude': 255,
      'longitude': 16.311702605794,
      'latitude': 49.048965931678,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Vítkov',
      'population': 5593,
      'area': 55.06,
      'altitude': 480,
      'longitude': 17.749454126304,
      'latitude': 49.774449841863,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Nové Strašecí',
      'population': 5573,
      'area': 13.32,
      'altitude': 470,
      'longitude': 13.900503723787,
      'latitude': 50.152805461272,
      'region': 'Středočeský'
   },
   {
      'name': 'Chlumec nad Cidlinou',
      'population': 5561,
      'area': 21.44,
      'altitude': 223,
      'longitude': 15.460334603393,
      'latitude': 50.154454367424,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Lomnice nad Popelkou',
      'population': 5486,
      'area': 25.57,
      'altitude': 478,
      'longitude': 15.373504846757,
      'latitude': 50.53067653642,
      'region': 'Liberecký'
   },
   {
      'name': 'Fulnek',
      'population': 5484,
      'area': 68.49,
      'altitude': 320,
      'longitude': 17.903232874658,
      'latitude': 49.712371239231,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Úpice',
      'population': 5468,
      'area': 15.31,
      'altitude': 352,
      'longitude': 16.016159265275,
      'latitude': 50.512410991863,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Brumov-Bylnice',
      'population': 5457,
      'area': 56.27,
      'altitude': 330,
      'longitude': 18.023099545168,
      'latitude': 49.090871365095,
      'region': 'Zlínský'
   },
   {
      'name': 'Kunovice',
      'population': 5452,
      'area': 28.55,
      'altitude': 198,
      'longitude': 17.470110150223,
      'latitude': 49.044995756546,
      'region': 'Zlínský'
   },
   {
      'name': 'Zubří',
      'population': 5450,
      'area': 28.39,
      'altitude': 378,
      'longitude': 18.092510514603,
      'latitude': 49.466018567307,
      'region': 'Zlínský'
   },
   {
      'name': 'Hradec nad Moravicí',
      'population': 5434,
      'area': 43.96,
      'altitude': 277,
      'longitude': 17.875865633487,
      'latitude': 49.871004700938,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Strážnice (okres Hodonín)',
      'population': 5390,
      'area': 31.41,
      'altitude': 177,
      'longitude': 17.316799472243,
      'latitude': 48.901029956488,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Hluboká nad Vltavou',
      'population': 5353,
      'area': 91.11,
      'altitude': 394,
      'longitude': 14.434283204502,
      'latitude': 49.052328810727,
      'region': 'Jihočeský'
   },
   {
      'name': 'Jilemnice',
      'population': 5352,
      'area': 13.86,
      'altitude': 451,
      'longitude': 15.506628032335,
      'latitude': 50.608944916275,
      'region': 'Liberecký'
   },
   {
      'name': 'Stochov',
      'population': 5348,
      'area': 9.54,
      'altitude': 448,
      'longitude': 13.96352591847,
      'latitude': 50.146392291736,
      'region': 'Středočeský'
   },
   {
      'name': 'Pohořelice',
      'population': 5312,
      'area': 43.05,
      'altitude': 181,
      'longitude': 16.524457138925,
      'latitude': 48.981217409611,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Jablunkov',
      'population': 5284,
      'area': 10.39,
      'altitude': 386,
      'longitude': 18.764611504976,
      'latitude': 49.576691347506,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Planá',
      'population': 5278,
      'area': 62.47,
      'altitude': 506,
      'longitude': 12.743844417597,
      'latitude': 49.86827193037,
      'region': 'Plzeňský'
   },
   {
      'name': 'Modřice',
      'population': 5263,
      'area': 10.05,
      'altitude': 204,
      'longitude': 16.61442392832,
      'latitude': 49.127917307254,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Horní Slavkov',
      'population': 5208,
      'area': 36.87,
      'altitude': 558,
      'longitude': 12.807657708289,
      'latitude': 50.138745037063,
      'region': 'Karlovarský'
   },
   {
      'name': 'Starý Plzenec',
      'population': 5204,
      'area': 18.37,
      'altitude': 343,
      'longitude': 13.473552493178,
      'latitude': 49.697776983968,
      'region': 'Plzeňský'
   },
   {
      'name': 'Trhové Sviny',
      'population': 5187,
      'area': 52.78,
      'altitude': 458,
      'longitude': 14.639241403372,
      'latitude': 48.842389190234,
      'region': 'Jihočeský'
   },
   {
      'name': 'Františkovy Lázně',
      'population': 5187,
      'area': 25.76,
      'altitude': 442,
      'longitude': 12.35181521379,
      'latitude': 50.120455065226,
      'region': 'Karlovarský'
   },
   {
      'name': 'Velká Bíteš',
      'population': 5167,
      'area': 47.30,
      'altitude': 476,
      'longitude': 16.225874100039,
      'latitude': 49.28866258252,
      'region': 'Vysočina'
   },
   {
      'name': 'Polná',
      'population': 5147,
      'area': 37.77,
      'altitude': 490,
      'longitude': 15.718844195485,
      'latitude': 49.48704494622,
      'region': 'Vysočina'
   },
   {
      'name': 'Telč',
      'population': 5140,
      'area': 24.86,
      'altitude': 514,
      'longitude': 15.452771068011,
      'latitude': 49.184229941699,
      'region': 'Vysočina'
   },
   {
      'name': 'Horažďovice',
      'population': 5113,
      'area': 43.04,
      'altitude': 427,
      'longitude': 13.701031041622,
      'latitude': 49.320781810531,
      'region': 'Plzeňský'
   },
   {
      'name': 'Rudná (okres Praha-západ)',
      'population': 5090,
      'area': 8.20,
      'altitude': 378,
      'longitude': 14.234414258821,
      'latitude': 50.035104791874,
      'region': 'Středočeský'
   },
   {
      'name': 'Kdyně',
      'population': 5088,
      'area': 28.74,
      'altitude': 455,
      'longitude': 13.03971039702,
      'latitude': 49.390878184146,
      'region': 'Plzeňský'
   },
   {
      'name': 'Doksy',
      'population': 5081,
      'area': 74.95,
      'altitude': 266,
      'longitude': 14.65562316455,
      'latitude': 50.564781686941,
      'region': 'Liberecký'
   },
   {
      'name': 'Holýšov',
      'population': 5075,
      'area': 29.32,
      'altitude': 357,
      'longitude': 13.101338813306,
      'latitude': 49.593719918694,
      'region': 'Plzeňský'
   },
   {
      'name': 'Jílové (okres Děčín)',
      'population': 5062,
      'area': 36.56,
      'altitude': 276,
      'longitude': 14.103945726726,
      'latitude': 50.760901305653,
      'region': 'Ústecký'
   },
   {
      'name': 'Třemošná',
      'population': 5053,
      'area': 18.12,
      'altitude': 348,
      'longitude': 13.395051407159,
      'latitude': 49.815938878371,
      'region': 'Plzeňský'
   },
   {
      'name': 'Česká Kamenice',
      'population': 5028,
      'area': 38.77,
      'altitude': 301,
      'longitude': 14.417784557033,
      'latitude': 50.797877961013,
      'region': 'Ústecký'
   },
   {
      'name': 'Skuteč',
      'population': 5022,
      'area': 35.40,
      'altitude': 410,
      'longitude': 15.996602726521,
      'latitude': 49.843507732223,
      'region': 'Pardubický'
   },
   {
      'name': 'Bakov nad Jizerou',
      'population': 4967,
      'area': 27.01,
      'altitude': 224,
      'longitude': 14.941580683763,
      'latitude': 50.48236715403,
      'region': 'Středočeský'
   },
   {
      'name': 'Luhačovice',
      'population': 4955,
      'area': 33.00,
      'altitude': 253,
      'longitude': 17.757479338017,
      'latitude': 49.0998226346,
      'region': 'Zlínský'
   },
   {
      'name': 'Česká Skalice',
      'population': 4945,
      'area': 17.36,
      'altitude': 284,
      'longitude': 16.042847327524,
      'latitude': 50.394705559401,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Jílové u Prahy',
      'population': 4919,
      'area': 16.25,
      'altitude': 381,
      'longitude': 14.493387704233,
      'latitude': 49.895520876972,
      'region': 'Středočeský'
   },
   {
      'name': 'Bechyně',
      'population': 4876,
      'area': 21.29,
      'altitude': 406,
      'longitude': 14.468125123251,
      'latitude': 49.295309165146,
      'region': 'Jihočeský'
   },
   {
      'name': 'Horšovský Týn',
      'population': 4839,
      'area': 71.31,
      'altitude': 376,
      'longitude': 12.944091023187,
      'latitude': 49.529759792748,
      'region': 'Plzeňský'
   },
   {
      'name': 'Vrbno pod Pradědem',
      'population': 4839,
      'area': 68.91,
      'altitude': 545,
      'longitude': 17.383221772378,
      'latitude': 50.120957199296,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Valašské Klobouky',
      'population': 4839,
      'area': 26.95,
      'altitude': 405,
      'longitude': 18.007607874482,
      'latitude': 49.140630604127,
      'region': 'Zlínský'
   },
   {
      'name': 'Unhošť',
      'population': 4827,
      'area': 17.42,
      'altitude': 387,
      'longitude': 14.130145953268,
      'latitude': 50.085433861082,
      'region': 'Středočeský'
   },
   {
      'name': 'Vizovice',
      'population': 4809,
      'area': 28.57,
      'altitude': 296,
      'longitude': 17.854557978828,
      'latitude': 49.222868373919,
      'region': 'Zlínský'
   },
   {
      'name': 'Ledeč nad Sázavou',
      'population': 4808,
      'area': 17.01,
      'altitude': 353,
      'longitude': 15.277769503404,
      'latitude': 49.695224253124,
      'region': 'Vysočina'
   },
   {
      'name': 'Nýrsko',
      'population': 4806,
      'area': 31.53,
      'altitude': 452,
      'longitude': 13.143560977643,
      'latitude': 49.293977787852,
      'region': 'Plzeňský'
   },
   {
      'name': 'Pečky',
      'population': 4771,
      'area': 10.76,
      'altitude': 194,
      'longitude': 15.030238635087,
      'latitude': 50.090487305541,
      'region': 'Středočeský'
   },
   {
      'name': 'Kosmonosy',
      'population': 4755,
      'area': 11.39,
      'altitude': 243,
      'longitude': 14.930087921482,
      'latitude': 50.438562010198,
      'region': 'Středočeský'
   },
   {
      'name': 'Chropyně',
      'population': 4749,
      'area': 19,
      'altitude': 195,
      'longitude': 17.364532053366,
      'latitude': 49.356449955938,
      'region': 'Zlínský'
   },
   {
      'name': 'Oslavany',
      'population': 4746,
      'area': 18.71,
      'altitude': 230,
      'longitude': 16.336541091101,
      'latitude': 49.123380208518,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Náměšť nad Oslavou',
      'population': 4723,
      'area': 18.62,
      'altitude': 365,
      'longitude': 16.158503502674,
      'latitude': 49.207301366068,
      'region': 'Vysočina'
   },
   {
      'name': 'Heřmanův Městec',
      'population': 4721,
      'area': 14.34,
      'altitude': 280,
      'longitude': 15.664983771248,
      'latitude': 49.947117687117,
      'region': 'Pardubický'
   },
   {
      'name': 'Bělá pod Bezdězem',
      'population': 4714,
      'area': 63.21,
      'altitude': 301,
      'longitude': 14.804180555556,
      'latitude': 50.501213888889,
      'region': 'Středočeský'
   },
   {
      'name': 'Zruč nad Sázavou',
      'population': 4709,
      'area': 16.37,
      'altitude': 344,
      'longitude': 15.106108919976,
      'latitude': 49.740164158514,
      'region': 'Středočeský'
   },
   {
      'name': 'Protivín',
      'population': 4687,
      'area': 61.45,
      'altitude': 383,
      'longitude': 14.21719630313,
      'latitude': 49.199569401436,
      'region': 'Jihočeský'
   },
   {
      'name': 'Habartov',
      'population': 4687,
      'area': 21.39,
      'altitude': 484,
      'longitude': 12.550615081668,
      'latitude': 50.183085358271,
      'region': 'Karlovarský'
   },
   {
      'name': 'Meziboří',
      'population': 4686,
      'area': 14.36,
      'altitude': 512,
      'longitude': 13.598802095006,
      'latitude': 50.621246387357,
      'region': 'Ústecký'
   },
   {
      'name': 'Postoloprty',
      'population': 4644,
      'area': 46.49,
      'altitude': 193,
      'longitude': 13.702996227431,
      'latitude': 50.359880648319,
      'region': 'Ústecký'
   },
   {
      'name': 'Pacov',
      'population': 4604,
      'area': 35.86,
      'altitude': 615,
      'longitude': 15.001713769033,
      'latitude': 49.470826885963,
      'region': 'Vysočina'
   },
   {
      'name': 'Osek (okres Teplice)',
      'population': 4596,
      'area': 42.37,
      'altitude': 307,
      'longitude': 13.68595786877,
      'latitude': 50.622801284893,
      'region': 'Ústecký'
   },
   {
      'name': 'Kynšperk nad Ohří',
      'population': 4590,
      'area': 23.31,
      'altitude': 431,
      'longitude': 12.530346195097,
      'latitude': 50.119045820294,
      'region': 'Karlovarský'
   },
   {
      'name': 'Vamberk',
      'population': 4530,
      'area': 21.03,
      'altitude': 320,
      'longitude': 16.290742760724,
      'latitude': 50.117591352648,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Vracov',
      'population': 4513,
      'area': 44.40,
      'altitude': 183,
      'longitude': 17.21099802362,
      'latitude': 48.975242894127,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Lišov',
      'population': 4508,
      'area': 93.55,
      'altitude': 505,
      'longitude': 14.6083897669,
      'latitude': 49.01604452487,
      'region': 'Jihočeský'
   },
   {
      'name': 'Votice',
      'population': 4495,
      'area': 36.42,
      'altitude': 483,
      'longitude': 14.63813032544,
      'latitude': 49.640199066405,
      'region': 'Středočeský'
   },
   {
      'name': 'Cvikov (okres Česká Lípa)',
      'population': 4479,
      'area': 45.09,
      'altitude': 357,
      'longitude': 14.633085701023,
      'latitude': 50.776745075033,
      'region': 'Liberecký'
   },
   {
      'name': 'Klimkovice',
      'population': 4469,
      'area': 14.64,
      'altitude': 252,
      'longitude': 18.125896003286,
      'latitude': 49.788082173192,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Bystřice (okres Benešov)',
      'population': 4456,
      'area': 63.36,
      'altitude': 365,
      'longitude': 14.667451342381,
      'latitude': 49.732203439291,
      'region': 'Středočeský'
   },
   {
      'name': 'Adamov',
      'population': 4429,
      'area': 3.78,
      'altitude': 258,
      'longitude': 16.658570650287,
      'latitude': 49.30052629923,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Bor (okres Tachov)',
      'population': 4403,
      'area': 116.49,
      'altitude': 472,
      'longitude': 12.775216037849,
      'latitude': 49.711710233218,
      'region': 'Plzeňský'
   },
   {
      'name': 'Bojkovice',
      'population': 4310,
      'area': 41.87,
      'altitude': 272,
      'longitude': 17.814875213239,
      'latitude': 49.038644054761,
      'region': 'Zlínský'
   },
   {
      'name': 'Bzenec',
      'population': 4303,
      'area': 40.34,
      'altitude': 183,
      'longitude': 17.266852936959,
      'latitude': 48.97337624906,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Planá nad Lužnicí',
      'population': 4296,
      'area': 21.42,
      'altitude': 395,
      'longitude': 14.701502824093,
      'latitude': 49.354509187053,
      'region': 'Jihočeský'
   },
   {
      'name': 'Hostinné',
      'population': 4265,
      'area': 8.07,
      'altitude': 351,
      'longitude': 15.723429505909,
      'latitude': 50.540706652015,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Hluk (okres Uherské Hradiště)',
      'population': 4249,
      'area': 28.39,
      'altitude': 222,
      'longitude': 17.526680219708,
      'latitude': 48.988126434505,
      'region': 'Zlínský'
   },
   {
      'name': 'Chlumec (okres Ústí nad Labem)',
      'population': 4237,
      'area': 12.87,
      'altitude': 235,
      'longitude': 13.939745543971,
      'latitude': 50.699804397398,
      'region': 'Ústecký'
   },
   {
      'name': 'Rožmitál pod Třemšínem',
      'population': 4203,
      'area': 53.01,
      'altitude': 519,
      'longitude': 13.864345146533,
      'latitude': 49.602046222311,
      'region': 'Středočeský'
   },
   {
      'name': 'Uherský Ostroh',
      'population': 4178,
      'area': 26.53,
      'altitude': 178,
      'longitude': 17.389845788707,
      'latitude': 48.985567674246,
      'region': 'Zlínský'
   },
   {
      'name': 'Kostelec nad Labem',
      'population': 4156,
      'area': 15.55,
      'altitude': 172,
      'longitude': 14.585598774844,
      'latitude': 50.226603627713,
      'region': 'Středočeský'
   },
   {
      'name': 'Brušperk',
      'population': 4149,
      'area': 10.27,
      'altitude': 265,
      'longitude': 18.22213385715,
      'latitude': 49.700084988917,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Borovany',
      'population': 4137,
      'area': 42.33,
      'altitude': 522,
      'longitude': 14.642272395582,
      'latitude': 48.898675230282,
      'region': 'Jihočeský'
   },
   {
      'name': 'Nová Role',
      'population': 4125,
      'area': 13.53,
      'altitude': 418,
      'longitude': 12.784301710647,
      'latitude': 50.271030375945,
      'region': 'Karlovarský'
   },
   {
      'name': 'Blovice',
      'population': 4114,
      'area': 28.96,
      'altitude': 387,
      'longitude': 13.540135487589,
      'latitude': 49.582293810018,
      'region': 'Plzeňský'
   },
   {
      'name': 'Slatiňany',
      'population': 4102,
      'area': 15.61,
      'altitude': 268,
      'longitude': 15.813826736565,
      'latitude': 49.921139960832,
      'region': 'Pardubický'
   },
   {
      'name': 'Horní Bříza',
      'population': 4091,
      'area': 14.55,
      'altitude': 367,
      'longitude': 13.355637956593,
      'latitude': 49.840223429507,
      'region': 'Plzeňský'
   },
   {
      'name': 'Sezemice (okres Pardubice)',
      'population': 4062,
      'area': 22.15,
      'altitude': 225,
      'longitude': 15.852764757724,
      'latitude': 50.066548727454,
      'region': 'Pardubický'
   },
   {
      'name': 'Zdice',
      'population': 4047,
      'area': 13.81,
      'altitude': 268,
      'longitude': 13.977528115162,
      'latitude': 49.912159387482,
      'region': 'Středočeský'
   },
   {
      'name': 'Jaroměřice nad Rokytnou',
      'population': 4032,
      'area': 51.37,
      'altitude': 422,
      'longitude': 15.893317828738,
      'latitude': 49.094127133927,
      'region': 'Vysočina'
   },
   {
      'name': 'Králíky',
      'population': 4002,
      'area': 52.78,
      'altitude': 550,
      'longitude': 16.760606276532,
      'latitude': 50.083862294469,
      'region': 'Pardubický'
   },
   {
      'name': 'Mnichovice',
      'population': 3964,
      'area': 8.32,
      'altitude': 361,
      'longitude': 14.709130720987,
      'latitude': 49.936084569575,
      'region': 'Středočeský'
   },
   {
      'name': 'Police nad Metují',
      'population': 3961,
      'area': 24.41,
      'altitude': 441,
      'longitude': 16.233596891027,
      'latitude': 50.536901799794,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Jemnice',
      'population': 3958,
      'area': 32.49,
      'altitude': 470,
      'longitude': 15.569944859592,
      'latitude': 49.019037310782,
      'region': 'Vysočina'
   },
   {
      'name': 'Přibyslav',
      'population': 3957,
      'area': 35.32,
      'altitude': 475,
      'longitude': 15.738585389384,
      'latitude': 49.576885241921,
      'region': 'Vysočina'
   },
   {
      'name': 'Rajhrad',
      'population': 3956,
      'area': 9.49,
      'altitude': 190,
      'longitude': 16.603886389526,
      'latitude': 49.090238953107,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Dolní Benešov',
      'population': 3939,
      'area': 14.81,
      'altitude': 231,
      'longitude': 18.108402450994,
      'latitude': 49.921002273849,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Kamenický Šenov',
      'population': 3923,
      'area': 10.47,
      'altitude': 525,
      'longitude': 14.472978263424,
      'latitude': 50.773661412598,
      'region': 'Liberecký'
   },
   {
      'name': 'Paskov',
      'population': 3830,
      'area': 11.80,
      'altitude': 256,
      'longitude': 18.290408503542,
      'latitude': 49.73177254678,
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Velké Bílovice',
      'population': 3818,
      'area': 25.73,
      'altitude': 176,
      'longitude': 16.892269350624,
      'latitude': 48.849310717964,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Velešín',
      'population': 3796,
      'area': 13.24,
      'altitude': 548,
      'longitude': 14.462517439026,
      'latitude': 48.829564866244,
      'region': 'Jihočeský'
   },
   {
      'name': 'Kostelec nad Černými lesy',
      'population': 3773,
      'area': 17.70,
      'altitude': 391,
      'longitude': 14.859282652392,
      'latitude': 49.994100705528,
      'region': 'Středočeský'
   },
   {
      'name': 'Brtnice',
      'population': 3761,
      'area': 74.13,
      'altitude': 515,
      'longitude': 15.676443374626,
      'latitude': 49.30699470864,
      'region': 'Vysočina'
   },
   {
      'name': 'Větřní',
      'population': 3758,
      'area': 27.71,
      'altitude': 465,
      'longitude': 14.286158877573,
      'latitude': 48.774330573721,
      'region': 'Jihočeský'
   },
   {
      'name': 'Stráž pod Ralskem',
      'population': 3756,
      'area': 21.58,
      'altitude': 310,
      'longitude': 14.801123326758,
      'latitude': 50.702865967816,
      'region': 'Liberecký'
   },
   {
      'name': 'Smržovka',
      'population': 3754,
      'area': 14.81,
      'altitude': 585,
      'longitude': 15.246500406797,
      'latitude': 50.738254442679,
      'region': 'Liberecký'
   },
   {
      'name': 'Fryšták',
      'population': 3729,
      'area': 24.17,
      'altitude': 271,
      'longitude': 17.683480007889,
      'latitude': 49.285206066577,
      'region': 'Zlínský'
   },
   {
      'name': 'Volary',
      'population': 3712,
      'area': 107.51,
      'altitude': 760,
      'longitude': 13.88658107426,
      'latitude': 48.908902782981,
      'region': 'Jihočeský'
   },
   {
      'name': 'Buštěhrad',
      'population': 3703,
      'area': 7.61,
      'altitude': 322,
      'longitude': 14.189049604516,
      'latitude': 50.156020273004,
      'region': 'Středočeský'
   },
   {
      'name': 'Sázava (okres Benešov)',
      'population': 3702,
      'area': 20.41,
      'altitude': 456,
      'longitude': 14.896794718867,
      'latitude': 49.871708476008,
      'region': 'Středočeský'
   },
   {
      'name': 'Jablonné v Podještědí',
      'population': 3685,
      'area': 57.87,
      'altitude': 315,
      'longitude': 14.76063179631,
      'latitude': 50.765345012501,
      'region': 'Liberecký'
   },
   {
      'name': 'Zbýšov',
      'population': 3684,
      'area': 6.01,
      'altitude': 348,
      'longitude': 16.34952542846,
      'latitude': 49.155276849127,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Židlochovice',
      'population': 3679,
      'area': 5.93,
      'altitude': 190,
      'longitude': 16.618813305226,
      'latitude': 49.039551985985,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Rájec-Jestřebí',
      'population': 3672,
      'area': 15.67,
      'altitude': 295,
      'longitude': 16.639046717886,
      'latitude': 49.410967423017,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Nové Město pod Smrkem',
      'population': 3663,
      'area': 28.93,
      'altitude': 465,
      'longitude': 15.22954639252,
      'latitude': 50.924963588909,
      'region': 'Liberecký'
   },
   {
      'name': 'Lom (okres Most)',
      'population': 3655,
      'area': 16.8,
      'altitude': 294,
      'longitude': 13.657390363555,
      'latitude': 50.59336916511,
      'region': 'Ústecký'
   },
   {
      'name': 'Dobřichovice',
      'population': 3651,
      'area': 10.92,
      'altitude': 205,
      'longitude': 14.27475687167,
      'latitude': 49.927572663242,
      'region': 'Středočeský'
   },
   {
      'name': 'Kamenice nad Lipou',
      'population': 3634,
      'area': 31.54,
      'altitude': 563,
      'longitude': 15.075214609068,
      'latitude': 49.303096203439,
      'region': 'Vysočina'
   },
   {
      'name': 'Lázně Bělohrad',
      'population': 3625,
      'area': 28.39,
      'altitude': 291,
      'longitude': 15.582779302884,
      'latitude': 50.42879172604,
      'region': 'Královéhradecký'
   },
   {
      'name': 'Zlaté Hory',
      'population': 3620,
      'area': 85.93,
      'altitude': 397,
      'longitude': 17.396090652009,
      'latitude': 50.263803148531,
      'region': 'Olomoucký'
   },
   {
      'name': 'Lanžhot',
      'population': 3608,
      'area': 54.83,
      'altitude': 164,
      'longitude': 16.966936264446,
      'latitude': 48.724453275107,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Klecany',
      'population': 3601,
      'area': 10.16,
      'altitude': 265,
      'longitude': 14.411557378691,
      'latitude': 50.176063401893,
      'region': 'Středočeský'
   },
   {
      'name': 'Řevnice',
      'population': 3584,
      'area': 10.14,
      'altitude': 218,
      'longitude': 14.235955055448,
      'latitude': 49.914028256057,
      'region': 'Středočeský'
   },
   {
      'name': 'Toužim',
      'population': 3582,
      'area': 98.53,
      'altitude': 612,
      'longitude': 12.985129225835,
      'latitude': 50.060603889316,
      'region': 'Karlovarský'
   },
   {
      'name': 'Benešov nad Ploučnicí',
      'population': 3573,
      'area': 9.77,
      'altitude': 210,
      'longitude': 14.312497327553,
      'latitude': 50.741663932519,
      'region': 'Ústecký'
   },
   {
      'name': 'Nepomuk',
      'population': 3550,
      'area': 12.78,
      'altitude': 449,
      'longitude': 13.582292906584,
      'latitude': 49.486259587175,
      'region': 'Plzeňský'
   },
   {
      'name': 'Velké Opatovice',
      'population': 3536,
      'area': 25.93,
      'altitude': 376,
      'longitude': 16.679506811325,
      'latitude': 49.612395778444,
      'region': 'Jihomoravský'
   },
   {
      'name': 'Stod',
      'population': 3531,
      'area': 20.04,
      'altitude': 337,
      'longitude': 13.16478397126,
      'latitude': 49.639196063817,
      'region': 'Plzeňský'
   },
   {
      'name': 'Suchdol nad Lužnicí',
      'population': 3527,
      'area': 63.58,
      'altitude': 454,
      'longitude': 14.876960231353,
      'latitude': 48.893401070196,
      'region': 'Jihočeský'
   },
   {
      'name': 'Velká Bystřice',
      'population': 3516,
      'area': 9.22,
      'altitude': 290,
      'longitude': 17.36401034063,
      'latitude': 49.594235374559,
      'region': 'Olomoucký'
   },
   {
      'name': 'Štěpánov (okres Olomouc)',
      'population': 3512,
      'area': 26.84,
      'altitude': 232,
      'longitude': 17.220452338219,
      'latitude': 49.684048986897,
      'region': 'Olomoucký'
   },
   {
      'name': 'Březnice',
      'population': 3511,
      'area': 19.47,
      'altitude': 462,
      'longitude': 13.950670501077,
      'latitude': 49.557721273425,
      'region': 'Středočeský'
   },
   {
      'name': 'Dobrovice',
      'population': 3496,
      'area': 24.64,
      'altitude': 247,
      'longitude': 14.962418289957,
      'latitude': 50.369388230822,
      'region': 'Středočeský'
   },
   {
      'name': 'Zliv',
      'population': 3495,
      'area': 14.21,
      'altitude': 375,
      'longitude': 14.366147357098,
      'latitude': 49.066163345125,
      'region': 'Jihočeský'
   },
   ];
   
   export default cities;