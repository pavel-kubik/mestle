const cities = [
  {
    name: 'Praha',
    population: 1275406,
    area: 496,
    altitude: 399,
    longitude: 14.421388888889,
    latitude: 50.0875,
    region: 'Hl. m. Praha',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Coat_of_arms_of_Prague_%28official_version%29.png/90px-Coat_of_arms_of_Prague_%28official_version%29.png'
  },
  {
    name: 'Brno',
    population: 379466,
    area: 230.18,
    altitude: 497,
    longitude: 16.608333333333,
    latitude: 49.195277777778,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Brno_%28znak%29.svg/90px-Brno_%28znak%29.svg.png'
  },
  {
    name: 'Ostrava',
    population: 279791,
    area: 214.23,
    altitude: 334,
    longitude: 18.2925,
    latitude: 49.835555555556,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Ostrava_CoA_CZ.svg/90px-Ostrava_CoA_CZ.svg.png'
  },
  {
    name: 'Plzeň',
    population: 168733,
    area: 137.65,
    altitude: 452,
    longitude: 13.3825,
    latitude: 49.741388888889,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Plzen_small_CoA.png/90px-Plzen_small_CoA.png'
  },
  {
    name: 'Liberec',
    population: 102951,
    area: 106.09,
    altitude: 374,
    longitude: 15.0584492,
    latitude: 50.7699972,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Znak_Liberec.svg/90px-Znak_Liberec.svg.png'
  },
  {
    name: 'Olomouc',
    population: 99496,
    area: 103.33,
    altitude: 219,
    longitude: 17.250833333333,
    latitude: 49.593888888889,
    region: 'Olomoucký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Coat_of_arms_of_Olomouc%2C_city_in_the_Czech_Republic.svg/90px-Coat_of_arms_of_Olomouc%2C_city_in_the_Czech_Republic.svg.png'
  },
  {
    name: 'České Budějovice',
    population: 93426,
    area: 55.71,
    altitude: 381,
    longitude: 14.474722222222,
    latitude: 48.974722222222,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Coat_of_arms_of_%C4%8Cesk%C3%A9_Bud%C4%9Bjovice.svg/90px-Coat_of_arms_of_%C4%8Cesk%C3%A9_Bud%C4%9Bjovice.svg.png'
  },
  {
    name: 'Hradec Králové',
    population: 90596,
    area: 105.69,
    altitude: 235,
    longitude: 15.831944444444,
    latitude: 50.209166666667,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Hradec_Kralove_CoA_CZ.svg/90px-Hradec_Kralove_CoA_CZ.svg.png'
  },
  {
    name: 'Ústí nad Labem',
    population: 90378,
    area: 93.97,
    altitude: 218,
    longitude: 14.041666666667,
    latitude: 50.659166666667,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/CoA_of_%C3%9Ast%C3%AD_nad_Labem.svg/90px-CoA_of_%C3%9Ast%C3%AD_nad_Labem.svg.png'
  },
  {
    name: 'Pardubice',
    population: 88520,
    area: 82.655,
    altitude: 220,
    longitude: 15.77916,
    latitude: 50.03861,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Pardubice_CoA_CZ.svg/90px-Pardubice_CoA_CZ.svg.png'
  },
  {
    name: 'Zlín',
    population: 72973,
    area: 102.83,
    altitude: 230,
    longitude: 17.666944444444,
    latitude: 49.233055555556,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Zlin_-_znak.svg/90px-Zlin_-_znak.svg.png'
  },
  {
    name: 'Havířov',
    population: 69084,
    area: 32.08,
    altitude: 239,
    longitude: 18.422777777778,
    latitude: 49.777777777778,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Coat_of_arms_of_Hav%C3%AD%C5%99ov.svg/90px-Coat_of_arms_of_Hav%C3%AD%C5%99ov.svg.png'
  },
  {
    name: 'Kladno',
    population: 66903,
    area: 36.97,
    altitude: 381,
    longitude: 14.105277777778,
    latitude: 50.143055555556,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Kladno_CoA.png/90px-Kladno_CoA.png'
  },
  {
    name: 'Most',
    population: 62866,
    area: 86.94,
    altitude: 233,
    longitude: 13.636666666667,
    latitude: 50.503055555556,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Most_CoA.gif/90px-Most_CoA.gif'
  },
  {
    name: 'Opava',
    population: 54840,
    area: 90.57,
    altitude: 257,
    longitude: 17.904444444444,
    latitude: 49.938055555556,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Opava_CoA.svg/90px-Opava_CoA.svg.png'
  },
  {
    name: 'Frýdek-Místek',
    population: 53899,
    area: 51.56,
    altitude: 291,
    longitude: 18.353611111111,
    latitude: 49.688055555556,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Znak_m%C4%9Bsta_Fr%C3%BDdek-M%C3%ADstek.png/90px-Znak_m%C4%9Bsta_Fr%C3%BDdek-M%C3%ADstek.png'
  },
  {
    name: 'Jihlava',
    population: 50108,
    area: 87.86,
    altitude: 525,
    longitude: 15.590555555556,
    latitude: 49.400277777778,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Jihlava_CoA_CZ.svg/90px-Jihlava_CoA_CZ.svg.png'
  },
  {
    name: 'Karviná',
    population: 49881,
    area: 57.52,
    altitude: 221,
    longitude: 18.542777777778,
    latitude: 49.854166666667,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Karwina_herb.svg/90px-Karwina_herb.svg.png'
  },
  {
    name: 'Teplice',
    population: 48766,
    area: 23.78,
    altitude: 399,
    longitude: 13.816666666667,
    latitude: 50.633333333333,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/CoA_of_Teplice.svg/90px-CoA_of_Teplice.svg.png'
  },
  {
    name: 'Děčín',
    population: 47029,
    area: 117.7,
    altitude: 135,
    longitude: 14.196111111111,
    latitude: 50.773611111111,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Coat_of_arms_of_D%C4%9B%C4%8D%C3%ADn.jpg/90px-Coat_of_arms_of_D%C4%9B%C4%8D%C3%ADn.jpg'
  },
  {
    name: 'Chomutov',
    population: 46263,
    area: 29.25,
    altitude: 330,
    longitude: 13.411111111111,
    latitude: 50.462777777778,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/ChomutovCoA.PNG/90px-ChomutovCoA.PNG'
  },
  {
    name: 'Karlovy Vary',
    population: 45500,
    area: 59.1,
    altitude: 447,
    longitude: 12.8725,
    latitude: 50.230555555556,
    region: 'Karlovarský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Karlovy_Vary_COA.svg/90px-Karlovy_Vary_COA.svg.png'
  },
  {
    name: 'Jablonec nad Nisou',
    population: 44588,
    area: 31.38,
    altitude: 475,
    longitude: 15.17,
    latitude: 50.727777777778,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Jablonec-znak.svg/90px-Jablonec-znak.svg.png'
  },
  {
    name: 'Prostějov',
    population: 43055,
    area: 39.04,
    altitude: 223,
    longitude: 17.110555555556,
    latitude: 49.472222222222,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Prostejov_CoA_CZ.png/90px-Prostejov_CoA_CZ.png'
  },
  {
    name: 'Mladá Boleslav',
    population: 41868,
    area: 28.9,
    altitude: 235,
    longitude: 14.906388888889,
    latitude: 50.4125,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Mlad%C3%A1_Boleslav_CoA_CZ.svg/90px-Mlad%C3%A1_Boleslav_CoA_CZ.svg.png'
  },
  {
    name: 'Přerov',
    population: 41404,
    area: 58.45,
    altitude: 210,
    longitude: 17.451111111111,
    latitude: 49.455555555556,
    region: 'Olomoucký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Znak_m%C4%9Bsta_P%C5%99erov.svg/90px-Znak_m%C4%9Bsta_P%C5%99erov.svg.png'
  },
  {
    name: 'Česká Lípa',
    population: 36740,
    area: 66.1,
    altitude: 258,
    longitude: 14.53774710235,
    latitude: 50.68558429129,
    region: 'Liberecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/%C4%8Cesk%C3%A1_L%C3%ADpa_CoA_CZ.svg/90px-%C4%8Cesk%C3%A1_L%C3%ADpa_CoA_CZ.svg.png'
  },
  {
    name: 'Třebíč',
    population: 34415,
    area: 57.59,
    altitude: 405,
    longitude: 15.881675935311,
    latitude: 49.214967400263,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/CoA_of_Trebic.svg/90px-CoA_of_Trebic.svg.png'
  },
  {
    name: 'Třinec',
    population: 34222,
    area: 85.37,
    altitude: 306,
    longitude: 18.670814768494,
    latitude: 49.677609314509,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Coat_of_arms_of_T%C5%99inec.svg/90px-Coat_of_arms_of_T%C5%99inec.svg.png'
  },
  {
    name: 'Tábor',
    population: 33410,
    area: 62.22,
    altitude: 437,
    longitude: 14.657835974031,
    latitude: 49.414485338494,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Tabor_CoA_CZ.png/90px-Tabor_CoA_CZ.png'
  },
  {
    name: 'Znojmo',
    population: 33370,
    area: 65.9,
    altitude: 290,
    longitude: 16.048796054219,
    latitude: 48.855540667876,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Znojmo_znak.svg/90px-Znojmo_znak.svg.png'
  },
  {
    name: 'Kolín',
    population: 32046,
    area: 34.99,
    altitude: 220,
    longitude: 15.200633745928,
    latitude: 50.028193990808,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kol%C3%ADn.svg/90px-Kol%C3%ADn.svg.png'
  },
  {
    name: 'Příbram',
    population: 31651,
    area: 36.1,
    altitude: 502,
    longitude: 14.010474512485,
    latitude: 49.68996461067,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/P%C5%99%C3%ADbram_CoA_CZ.svg/90px-P%C5%99%C3%ADbram_CoA_CZ.svg.png'
  },
  {
    name: 'Cheb',
    population: 30420,
    area: 96.36,
    altitude: 459,
    longitude: 12.373995588434,
    latitude: 50.079759165169,
    region: 'Karlovarský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Cheb_coat_of_arms.svg/90px-Cheb_coat_of_arms.svg.png'
  },
  {
    name: 'Písek',
    population: 29814,
    area: 63.23,
    altitude: 378,
    longitude: 14.147530601921,
    latitude: 49.30888068684,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/P%C3%ADsek_CoA.svg/90px-P%C3%ADsek_CoA.svg.png'
  },
  {
    name: 'Trutnov',
    population: 29430,
    area: 103.32,
    altitude: 414,
    longitude: 15.912798547953,
    latitude: 50.561045737535,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Trutnov_CoA_CZ.jpg/90px-Trutnov_CoA_CZ.jpg'
  },
  {
    name: 'Orlová',
    population: 28206,
    area: 24.67,
    altitude: 282,
    longitude: 18.43015544552,
    latitude: 49.845247990058,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Orlov%C3%A1_znak.png/90px-Orlov%C3%A1_znak.png'
  },
  {
    name: 'Kroměříž',
    population: 27838,
    area: 50.98,
    altitude: 201,
    longitude: 17.393134863736,
    latitude: 49.297859972783,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/CZE_Krom%C4%9B%C5%99%C3%AD%C5%BE_COA.svg/90px-CZE_Krom%C4%9B%C5%99%C3%AD%C5%BE_COA.svg.png'
  },
  {
    name: 'Vsetín',
    population: 25226,
    area: 57.61,
    altitude: 348,
    longitude: 17.996209032744,
    latitude: 49.338702987886,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Coat_of_arms_of_Vset%C3%ADn.svg/90px-Coat_of_arms_of_Vset%C3%ADn.svg.png'
  },
  {
    name: 'Šumperk',
    population: 24910,
    area: 27.88,
    altitude: 330,
    longitude: 16.9706654352,
    latitude: 49.965299915762,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Sumperk_CoA_CZ.png/90px-Sumperk_CoA_CZ.png'
  },
  {
    name: 'Uherské Hradiště',
    population: 24430,
    area: 21.26,
    altitude: 179,
    longitude: 17.459691353499,
    latitude: 49.069757549526,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/UH_znak.png/90px-UH_znak.png'
  },
  {
    name: 'Břeclav',
    population: 23943,
    area: 77.19,
    altitude: 158,
    longitude: 16.882020775128,
    latitude: 48.758991122507,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/B%C5%99eclav_znak.png/90px-B%C5%99eclav_znak.png'
  },
  {
    name: 'Hodonín',
    population: 23828,
    area: 63.31,
    altitude: 167,
    longitude: 17.132439069118,
    latitude: 48.848950584361,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hodonin_CoA_CZ.png/90px-Hodonin_CoA_CZ.png'
  },
  {
    name: 'Český Těšín',
    population: 23468,
    area: 33.79,
    altitude: 270,
    longitude: 18.62617038595,
    latitude: 49.746110801139,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Cesky_Tesin_CoA.png/90px-Cesky_Tesin_CoA.png'
  },
  {
    name: 'Litoměřice',
    population: 22950,
    area: 17.99,
    altitude: 300,
    longitude: 14.131899491403,
    latitude: 50.53355947692,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Litom%C4%9B%C5%99ice_CoA_CZ.svg/90px-Litom%C4%9B%C5%99ice_CoA_CZ.svg.png'
  },
  {
    name: 'Havlíčkův Brod',
    population: 22879,
    area: 64.93,
    altitude: 422,
    longitude: 15.580727658514,
    latitude: 49.607899638305,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Havl%C3%AD%C4%8Dk%C5%AFv_Brod_znak.png/90px-Havl%C3%AD%C4%8Dk%C5%AFv_Brod_znak.png'
  },
  {
    name: 'Nový Jičín',
    population: 22813,
    area: 36.52,
    altitude: 284,
    longitude: 18.010308756103,
    latitude: 49.594368444158,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Coa_Novy_Jicin.jpg/90px-Coa_Novy_Jicin.jpg'
  },
  {
    name: 'Chrudim',
    population: 22773,
    area: 33.21,
    altitude: 240,
    longitude: 15.795635790875,
    latitude: 49.951136279202,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Chrudim_CoA_CZ.svg/90px-Chrudim_CoA_CZ.svg.png'
  },
  {
    name: 'Krnov',
    population: 22665,
    area: 44.29,
    altitude: 316,
    longitude: 17.703908920138,
    latitude: 50.089666916291,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Krnov_znak.png/90px-Krnov_znak.png'
  },
  {
    name: 'Litvínov',
    population: 22482,
    area: 40.714,
    altitude: 338,
    longitude: 13.611212988257,
    latitude: 50.60077979319,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Litv%C3%ADnov_znak.png/90px-Litv%C3%ADnov_znak.png'
  },
  {
    name: 'Strakonice',
    population: 22214,
    area: 34.67,
    altitude: 393,
    longitude: 13.902396874574,
    latitude: 49.261497897079,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Coat_of_arms_of_Strakonice.jpg/90px-Coat_of_arms_of_Strakonice.jpg'
  },
  {
    name: 'Sokolov',
    population: 22097,
    area: 22.92,
    altitude: 401,
    longitude: 12.640181474439,
    latitude: 50.181415762132,
    region: 'Karlovarský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Sokolov_COA.svg/90px-Sokolov_COA.svg.png'
  },
  {
    name: 'Valašské Meziříčí',
    population: 21883,
    area: 35.44,
    altitude: 294,
    longitude: 17.97115355859,
    latitude: 49.471799519597,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/CoA_of_Vala%C5%A1sk%C3%A9_Mezi%C5%99%C3%AD%C4%8D%C3%AD.svg/90px-CoA_of_Vala%C5%A1sk%C3%A9_Mezi%C5%99%C3%AD%C4%8D%C3%AD.svg.png'
  },
  {
    name: 'Klatovy',
    population: 21587,
    area: 80.85,
    altitude: 405,
    longitude: 13.29508891337,
    latitude: 49.395625338265,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Klatovy-znak.svg/90px-Klatovy-znak.svg.png'
  },
  {
    name: 'Kopřivnice',
    population: 21395,
    area: 27.49,
    altitude: 320,
    longitude: 18.144833283338,
    latitude: 49.599461028116,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Znak_m%C4%9Bsta_Kop%C5%99ivnice.svg/90px-Znak_m%C4%9Bsta_Kop%C5%99ivnice.svg.png'
  },
  {
    name: 'Jindřichův Hradec',
    population: 20774,
    area: 74.29,
    altitude: 475,
    longitude: 15.003024549245,
    latitude: 49.144110393651,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Jind%C5%99ich%C5%AFv_Hradec%2C_znak.png/90px-Jind%C5%99ich%C5%AFv_Hradec%2C_znak.png'
  },
  {
    name: 'Kutná Hora',
    population: 20450,
    area: 33.07,
    altitude: 254,
    longitude: 15.268225887967,
    latitude: 49.948444972662,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/COA_Kutna_Hora.png/90px-COA_Kutna_Hora.png'
  },
  {
    name: 'Bohumín',
    population: 20450,
    area: 31.03,
    altitude: 198,
    longitude: 18.357595239984,
    latitude: 49.90408983288,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bohumin_CoA_CZ.svg/90px-Bohumin_CoA_CZ.svg.png'
  },
  {
    name: 'Žďár nad Sázavou',
    population: 20338,
    area: 37.06,
    altitude: 580,
    longitude: 15.939278339801,
    latitude: 49.562675487861,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Zdar_nad_Sazavou_CoA.png/90px-Zdar_nad_Sazavou_CoA.png'
  },
  {
    name: 'Vyškov',
    population: 20187,
    area: 50.46,
    altitude: 254,
    longitude: 16.998993221633,
    latitude: 49.277487239217,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Znak_m%C4%9Bsta_Vy%C5%A1kova.svg/90px-Znak_m%C4%9Bsta_Vy%C5%A1kova.svg.png'
  },
  {
    name: 'Beroun',
    population: 19984,
    area: 31.25,
    altitude: 235,
    longitude: 14.072061165906,
    latitude: 49.963908175611,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Beroun_znak.png/90px-Beroun_znak.png'
  },
  {
    name: 'Blansko',
    population: 19715,
    area: 44.97,
    altitude: 276,
    longitude: 16.643174766744,
    latitude: 49.363160582771,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Blansko_CoA_CZ.svg/90px-Blansko_CoA_CZ.svg.png'
  },
  {
    name: 'Mělník',
    population: 19472,
    area: 24.96,
    altitude: 215,
    longitude: 14.474193495734,
    latitude: 50.35057067972,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/M%C4%9Bln%C3%ADk_CoA_CZ.svg/90px-M%C4%9Bln%C3%ADk_CoA_CZ.svg.png'
  },
  {
    name: 'Náchod',
    population: 19220,
    area: 33.34,
    altitude: 347,
    longitude: 16.16297400854,
    latitude: 50.416738226612,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/N%C3%A1chod_CoA_CZ.svg/90px-N%C3%A1chod_CoA_CZ.svg.png'
  },
  {
    name: 'Jirkov',
    population: 18945,
    area: 17.01,
    altitude: 305,
    longitude: 13.447786301898,
    latitude: 50.499890572913,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jirkov_CoA_CZ.png/90px-Jirkov_CoA_CZ.png'
  },
  {
    name: 'Brandýs nad Labem-Stará Boleslav',
    population: 18755,
    area: 22.65,
    altitude: 169,
    longitude: 14.663332953497,
    latitude: 50.187160680032,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Gerb_Brand%C3%BDs_nad_Labem-Star%C3%A1_Boleslav.png/90px-Gerb_Brand%C3%BDs_nad_Labem-Star%C3%A1_Boleslav.png'
  },
  {
    name: 'Žatec',
    population: 18570,
    area: 42.68,
    altitude: 233,
    longitude: 13.545859487384,
    latitude: 50.327264913574,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Znak_m%C4%9Bsta_%C5%BDatec.png/90px-Znak_m%C4%9Bsta_%C5%BDatec.png'
  },
  {
    name: 'Kralupy nad Vltavou',
    population: 18189,
    area: 21.9,
    altitude: 274,
    longitude: 14.311574668457,
    latitude: 50.241148972524,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Kralupy_nad_Vltavou_znak.png/90px-Kralupy_nad_Vltavou_znak.png'
  },
  {
    name: 'Louny',
    population: 17760,
    area: 24.14,
    altitude: 185,
    longitude: 13.796762432686,
    latitude: 50.357078457688,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Louny_CoA_CZ.svg/90px-Louny_CoA_CZ.svg.png'
  },
  {
    name: 'Kadaň',
    population: 17628,
    area: 65.62,
    altitude: 300,
    longitude: 13.271397346217,
    latitude: 50.37608553522,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Coat_of_arms_of_Kada%C5%88_II.svg/90px-Coat_of_arms_of_Kada%C5%88_II.svg.png'
  },
  {
    name: 'Hranice (okres Přerov)',
    population: 17495,
    area: 49.78,
    altitude: 250,
    longitude: 17.734723291716,
    latitude: 49.547963974257,
    region: 'Olomoucký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Hranice_na_Morav%C4%9B_znak.png/90px-Hranice_na_Morav%C4%9B_znak.png'
  },
  {
    name: 'Otrokovice',
    population: 17183,
    area: 19.63,
    altitude: 190,
    longitude: 17.530780558281,
    latitude: 49.209921755941,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Znak_mesta_otrokovice.svg/90px-Znak_mesta_otrokovice.svg.png'
  },
  {
    name: 'Benešov',
    population: 16448,
    area: 46.87,
    altitude: 368,
    longitude: 14.687020558215,
    latitude: 49.781695568859,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Benesov_CoA_CZ.svg/90px-Benesov_CoA_CZ.svg.png'
  },
  {
    name: 'Svitavy',
    population: 16261,
    area: 31.33,
    altitude: 435,
    longitude: 16.468338539525,
    latitude: 49.755965917692,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Svitavy_znak_2.jpeg/90px-Svitavy_znak_2.jpeg'
  },
  {
    name: 'Uherský Brod',
    population: 16206,
    area: 52.06,
    altitude: 251,
    longitude: 17.647153295745,
    latitude: 49.025133430958,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Znak_m%C4%9Bsta_Uhersk%C3%BD_Brod.svg/90px-Znak_m%C4%9Bsta_Uhersk%C3%BD_Brod.svg.png'
  },
  {
    name: 'Říčany',
    population: 16182,
    area: 25.81,
    altitude: 341,
    longitude: 14.654334421235,
    latitude: 49.991746433504,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/CoA_Ricany.png/90px-CoA_Ricany.png'
  },
  {
    name: 'Rožnov pod Radhoštěm',
    population: 16077,
    area: 39.48,
    altitude: 378,
    longitude: 18.143045316957,
    latitude: 49.45851736056,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Ro%C5%BEnov_pod_Radho%C5%A1t%C4%9Bm_znak.png/90px-Ro%C5%BEnov_pod_Radho%C5%A1t%C4%9Bm_znak.png'
  },
  {
    name: 'Jičín',
    population: 15871,
    area: 25.86,
    altitude: 287,
    longitude: 15.351713997933,
    latitude: 50.437279002171,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jicin_CoA_CZ.svg/90px-Jicin_CoA_CZ.svg.png'
  },
  {
    name: 'Slaný',
    population: 15862,
    area: 35.12,
    altitude: 234,
    longitude: 14.087014267434,
    latitude: 50.230541170014,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Slan%C3%BD_znak.png/90px-Slan%C3%BD_znak.png'
  },
  {
    name: 'Neratovice',
    population: 15831,
    area: 20.0,
    altitude: 162,
    longitude: 14.517675172798,
    latitude: 50.259331649996,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Neratovice_znak.png/90px-Neratovice_znak.png'
  },
  {
    name: 'Ostrov (okres Karlovy Vary)',
    population: 15822,
    area: 50.41,
    altitude: 398,
    longitude: 12.939153516476,
    latitude: 50.306035004821,
    region: 'Karlovarský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/M%C4%9Bsto-Ostrov-znak.png/90px-M%C4%9Bsto-Ostrov-znak.png'
  },
  {
    name: 'Pelhřimov',
    population: 15755,
    area: 95.28,
    altitude: 494,
    longitude: 15.223389364189,
    latitude: 49.431396763393,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pelhrimov.gif/90px-Pelhrimov.gif'
  },
  {
    name: 'Bruntál',
    population: 15523,
    area: 29.34,
    altitude: 547,
    longitude: 17.464759014801,
    latitude: 49.988449251745,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Coat_of_arms_of_Brunt%C3%A1l.jpg/90px-Coat_of_arms_of_Brunt%C3%A1l.jpg'
  },
  {
    name: 'Dvůr Králové nad Labem',
    population: 15170,
    area: 35.84,
    altitude: 298,
    longitude: 15.814108741637,
    latitude: 50.431763800828,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2019_coat_of_arms_of_Dv%C5%AFr_Kr%C3%A1lov%C3%A9_nad_Labem.png/90px-2019_coat_of_arms_of_Dv%C5%AFr_Kr%C3%A1lov%C3%A9_nad_Labem.png'
  },
  {
    name: 'Rakovník',
    population: 15142,
    area: 18.5,
    altitude: 322,
    longitude: 13.733472751214,
    latitude: 50.103792787995,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Rakovnik_znak.jpg/90px-Rakovnik_znak.jpg'
  },
  {
    name: 'Česká Třebová',
    population: 15062,
    area: 41.01,
    altitude: 375,
    longitude: 16.447334999548,
    latitude: 49.90191270808,
    region: 'Pardubický',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%C4%8Cesk%C3%A1_T%C5%99ebov%C3%A1.svg/90px-%C4%8Cesk%C3%A1_T%C5%99ebov%C3%A1.svg.png'
  },
  {
    name: 'Nymburk',
    population: 14780,
    area: 20.59,
    altitude: 193,
    longitude: 15.041747256066,
    latitude: 50.186115487846,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Nymburk_CoA_CZ.jpg/90px-Nymburk_CoA_CZ.jpg'
  },
  {
    name: 'Varnsdorf',
    population: 14738,
    area: 26.23,
    altitude: 332,
    longitude: 14.618353683386,
    latitude: 50.911612411446,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/COA_Varnsdorf.png/90px-COA_Varnsdorf.png'
  },
  {
    name: 'Bílina',
    population: 14420,
    area: 32.5,
    altitude: 207,
    longitude: 13.775445246997,
    latitude: 50.548631074934,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/B%C3%ADlina_m%C4%9Bsto_znak.png/90px-B%C3%ADlina_m%C4%9Bsto_znak.png'
  },
  {
    name: 'Poděbrady',
    population: 14317,
    area: 33.68,
    altitude: 185,
    longitude: 15.118884780406,
    latitude: 50.142477809038,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Znak_m%C4%9Bsta_Pod%C4%9Bbrady.gif/90px-Znak_m%C4%9Bsta_Pod%C4%9Bbrady.gif'
  },
  {
    name: 'Klášterec nad Ohří',
    population: 14190,
    area: 53.79,
    altitude: 320,
    longitude: 13.171368113331,
    latitude: 50.384556821405,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Coat_of_arms_of_Kl%C3%A1%C5%A1terec_nad_Oh%C5%99%C3%AD.gif/90px-Coat_of_arms_of_Kl%C3%A1%C5%A1terec_nad_Oh%C5%99%C3%AD.gif'
  },
  {
    name: 'Turnov',
    population: 14174,
    area: 22.71,
    altitude: 260,
    longitude: 15.156899388718,
    latitude: 50.587341607858,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Turnov_CoA_CZ.svg/90px-Turnov_CoA_CZ.svg.png'
  },
  {
    name: 'Ústí nad Orlicí',
    population: 13936,
    area: 36.37,
    altitude: 340,
    longitude: 16.393670305445,
    latitude: 49.973904297163,
    region: 'Pardubický',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/%C3%9Ast%C3%AD_nad_Orlic%C3%AD.svg/90px-%C3%9Ast%C3%AD_nad_Orlic%C3%AD.svg.png'
  },
  {
    name: 'Rokycany',
    population: 13826,
    area: 30.67,
    altitude: 362,
    longitude: 13.594638741285,
    latitude: 49.742793661264,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Rokycany_CoA_CZ.png/90px-Rokycany_CoA_CZ.png'
  },
  {
    name: 'Hlučín',
    population: 13562,
    area: 21.14,
    altitude: 241,
    longitude: 18.19200490075,
    latitude: 49.897939786775,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hlu%C4%8D%C3%ADn_znak.png/90px-Hlu%C4%8D%C3%ADn_znak.png'
  },
  {
    name: 'Zábřeh',
    population: 13281,
    area: 34.59,
    altitude: 285,
    longitude: 16.872280013113,
    latitude: 49.882620486561,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Z%C3%A1breh_znak.png/90px-Z%C3%A1breh_znak.png'
  },
  {
    name: 'Šternberk',
    population: 13144,
    area: 48.79,
    altitude: 268,
    longitude: 17.298931346408,
    latitude: 49.73045283333,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/%C5%A0ternberk_znak.png/90px-%C5%A0ternberk_znak.png'
  },
  {
    name: 'Chodov (okres Sokolov)',
    population: 12683,
    area: 14.26,
    altitude: 418,
    longitude: 12.753403883747,
    latitude: 50.241450598051,
    region: 'Karlovarský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Chodov_znak.png/90px-Chodov_znak.png'
  },
  {
    name: 'Tachov',
    population: 12538,
    area: 40.84,
    altitude: 483,
    longitude: 12.633709213451,
    latitude: 49.795398066933,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Tachov_znak.svg/90px-Tachov_znak.svg.png'
  },
  {
    name: 'Roudnice nad Labem',
    population: 12506,
    area: 16.67,
    altitude: 195,
    longitude: 14.261840817268,
    latitude: 50.425361080625,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Roudnice_nad_Labem_CoA_CZ.svg/90px-Roudnice_nad_Labem_CoA_CZ.svg.png'
  },
  {
    name: 'Aš',
    population: 12483,
    area: 55.86,
    altitude: 666,
    longitude: 12.195074300926,
    latitude: 50.223996008844,
    region: 'Karlovarský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Coat_of_arms_of_A%C5%A1%2C_Cheb.svg/90px-Coat_of_arms_of_A%C5%A1%2C_Cheb.svg.png'
  },
  {
    name: 'Český Krumlov',
    population: 12461,
    area: 22.16,
    altitude: 492,
    longitude: 14.31520771066,
    latitude: 48.810990441614,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/CZ_%C4%8Cesk%C3%BD_Krumlov_COA.svg/90px-CZ_%C4%8Cesk%C3%BD_Krumlov_COA.svg.png'
  },
  {
    name: 'Milovice',
    population: 12460,
    area: 28.34,
    altitude: 221,
    longitude: 14.888710216255,
    latitude: 50.226024627414,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Milovice-znak.svg/90px-Milovice-znak.svg.png'
  },
  {
    name: 'Krupka',
    population: 12365,
    area: 46.61,
    altitude: 300,
    longitude: 13.858256809864,
    latitude: 50.684576839145,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Krupka-znak.png/90px-Krupka-znak.png'
  },
  {
    name: 'Jaroměř',
    population: 12260,
    area: 23.95,
    altitude: 254,
    longitude: 15.921447438363,
    latitude: 50.356235289292,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Jarom%C4%9B%C5%99_znak.png/90px-Jarom%C4%9B%C5%99_znak.png'
  },
  {
    name: 'Mariánské Lázně',
    population: 12237,
    area: 51.79,
    altitude: 578,
    longitude: 12.701249703911,
    latitude: 49.964703891769,
    region: 'Karlovarský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Mari%C3%A1nsk%C3%A9_L%C3%A1zn%C4%9B_CoA.png/90px-Mari%C3%A1nsk%C3%A9_L%C3%A1zn%C4%9B_CoA.png'
  },
  {
    name: 'Čelákovice',
    population: 12008,
    area: 15.88,
    altitude: 184,
    longitude: 14.750119929994,
    latitude: 50.160451211747,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Celakovice_znak.jpg/90px-Celakovice_znak.jpg'
  },
  {
    name: 'Vysoké Mýto',
    population: 12007,
    area: 42.03,
    altitude: 284,
    longitude: 16.161752006464,
    latitude: 49.953240035812,
    region: 'Pardubický',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vysok%C3%A9_M%C3%BDto_-_znak.png/90px-Vysok%C3%A9_M%C3%BDto_-_znak.png'
  },
  {
    name: 'Vrchlabí',
    population: 11968,
    area: 27.65,
    altitude: 477,
    longitude: 15.609473689336,
    latitude: 50.627013945049,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Vrchlab%C3%AD_CoA_CZ.svg/90px-Vrchlab%C3%AD_CoA_CZ.svg.png'
  },
  {
    name: 'Boskovice',
    population: 11661,
    area: 27.82,
    altitude: 381,
    longitude: 16.660002080035,
    latitude: 49.487537313637,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Boskovice_CoA_CZ.svg/90px-Boskovice_CoA_CZ.svg.png'
  },
  {
    name: 'Nový Bor',
    population: 11458,
    area: 19.44,
    altitude: 365,
    longitude: 14.555662165889,
    latitude: 50.757681178047,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Nov%C3%BD_Bor_CoA_CZ.svg/90px-Nov%C3%BD_Bor_CoA_CZ.svg.png'
  },
  {
    name: 'Holešov',
    population: 11426,
    area: 33.95,
    altitude: 232,
    longitude: 17.578340885825,
    latitude: 49.333314366496,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Coat_of_arms_of_Hole%C5%A1ov.svg/90px-Coat_of_arms_of_Hole%C5%A1ov.svg.png'
  },
  {
    name: 'Vlašim',
    population: 11357,
    area: 41.42,
    altitude: 365,
    longitude: 14.898853788831,
    latitude: 49.706391051684,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Vla%C5%A1im%2C_Czech_Republic_-_coat_of_arms.png/90px-Vla%C5%A1im%2C_Czech_Republic_-_coat_of_arms.png'
  },
  {
    name: 'Velké Meziříčí',
    population: 11325,
    area: 40.66,
    altitude: 425,
    longitude: 16.01226875669,
    latitude: 49.355258131562,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Velk%C3%A9_Mezi%C5%99%C3%AD%C4%8D%C3%AD_CoA.png/90px-Velk%C3%A9_Mezi%C5%99%C3%AD%C4%8D%C3%AD_CoA.png'
  },
  {
    name: 'Uničov',
    population: 11066,
    area: 48.28,
    altitude: 248,
    longitude: 17.121482256516,
    latitude: 49.770928637031,
    region: 'Olomoucký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Uni%C4%8Dov_m%C4%9Bstsk%C3%BD_znak_-_ofici%C3%A1ln%C3%AD_verze_-_barva.jpg/90px-Uni%C4%8Dov_m%C4%9Bstsk%C3%BD_znak_-_ofici%C3%A1ln%C3%AD_verze_-_barva.jpg'
  },
  {
    name: 'Kyjov',
    population: 10849,
    area: 29.88,
    altitude: 192,
    longitude: 17.122531686075,
    latitude: 49.010193088478,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Kyjov_znak.png/90px-Kyjov_znak.png'
  },
  {
    name: 'Kuřim',
    population: 10847,
    area: 17.2,
    altitude: 286,
    longitude: 16.53146211908,
    latitude: 49.298546446655,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Ku%C5%99im_CoA_CZ.png/90px-Ku%C5%99im_CoA_CZ.png'
  },
  {
    name: 'Domažlice',
    population: 10749,
    area: 24.62,
    altitude: 428,
    longitude: 12.929798039263,
    latitude: 49.440605680467,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Doma%C5%BElice_znak.png/90px-Doma%C5%BElice_znak.png'
  },
  {
    name: 'Humpolec',
    population: 10741,
    area: 51.51,
    altitude: 527,
    longitude: 15.359357331212,
    latitude: 49.541577778709,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Humpolec_znak.svg/90px-Humpolec_znak.svg.png'
  },
  {
    name: 'Rychnov nad Kněžnou',
    population: 10717,
    area: 34.99,
    altitude: 320,
    longitude: 16.274954757842,
    latitude: 50.162870787815,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Rychnov_nad_Kn%C4%9B%C5%BEnou_znak.png/90px-Rychnov_nad_Kn%C4%9B%C5%BEnou_znak.png'
  },
  {
    name: 'Rumburk',
    population: 10679,
    area: 24.72,
    altitude: 387,
    longitude: 14.55711013781,
    latitude: 50.951576367344,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Rumburk_CoA_CZv3.svg/90px-Rumburk_CoA_CZv3.svg.png'
  },
  {
    name: 'Sušice',
    population: 10662,
    area: 45.65,
    altitude: 472,
    longitude: 13.520207848015,
    latitude: 49.231161465796,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Su%C5%A1ice-znak.svg/90px-Su%C5%A1ice-znak.svg.png'
  },
  {
    name: 'Jeseník',
    population: 10658,
    area: 38.23,
    altitude: 432,
    longitude: 17.204714793832,
    latitude: 50.22937984562,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Znak_m%C4%9Bsta_JPG.png/90px-Znak_m%C4%9Bsta_JPG.png'
  },
  {
    name: 'Prachatice',
    population: 10588,
    area: 38.92,
    altitude: 561,
    longitude: 13.997533003713,
    latitude: 49.013013368826,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Prachatice_znak.svg/90px-Prachatice_znak.svg.png'
  },
  {
    name: 'Veselí nad Moravou',
    population: 10577,
    area: 35.45,
    altitude: 176,
    longitude: 17.37648237967,
    latitude: 48.953642955201,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Znakm%C4%9BstaVesel%C3%ADnadMoravou.svg/90px-Znakm%C4%9BstaVesel%C3%ADnadMoravou.svg.png'
  },
  {
    name: 'Frenštát pod Radhoštěm',
    population: 10569,
    area: 11.43,
    altitude: 401,
    longitude: 18.210809609836,
    latitude: 49.548334550378,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Fren%C5%A1t%C3%A1t_pod_Radho%C5%A1t%C4%9Bm_CoA_CZ.svg/90px-Fren%C5%A1t%C3%A1t_pod_Radho%C5%A1t%C4%9Bm_CoA_CZ.svg.png'
  },
  {
    name: 'Čáslav',
    population: 10128,
    area: 26.46,
    altitude: 231,
    longitude: 15.389777063866,
    latitude: 49.911045008568,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/%C4%8C%C3%A1slav_CoA_CZ.svg/90px-%C4%8C%C3%A1slav_CoA_CZ.svg.png'
  },
  {
    name: 'Králův Dvůr',
    population: 9995,
    area: 15.26,
    altitude: 240,
    longitude: 14.034516923849,
    latitude: 49.949891666533,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Znak_obce_Kr%C3%A1l%C5%AFv_Dv%C5%AFr_-_O%C5%98.JPG/90px-Znak_obce_Kr%C3%A1l%C5%AFv_Dv%C5%AFr_-_O%C5%98.JPG'
  },
  {
    name: 'Litomyšl',
    population: 9914,
    area: 33.44,
    altitude: 330,
    longitude: 16.310576465877,
    latitude: 49.872064383156,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Litomy%C5%A1l_CoA_CZ.svg/90px-Litomy%C5%A1l_CoA_CZ.svg.png'
  },
  {
    name: 'Nové Město na Moravě',
    population: 9829,
    area: 61.13,
    altitude: 594,
    longitude: 16.074220542261,
    latitude: 49.561481877592,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Coa_Nov%C3%A9_M%C4%9Bsto_na_Morav%C4%9B.png/90px-Coa_Nov%C3%A9_M%C4%9Bsto_na_Morav%C4%9B.png'
  },
  {
    name: 'Frýdlant nad Ostravicí',
    population: 9796,
    area: 21.91,
    altitude: 357,
    longitude: 18.359696643447,
    latitude: 49.592787662664,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Fr%C3%BDdlant_nad_Ostravic%C3%AD_%28CZE%29_-_coat_of_arms.png/90px-Fr%C3%BDdlant_nad_Ostravic%C3%AD_%28CZE%29_-_coat_of_arms.png'
  },
  {
    name: 'Jesenice (okres Praha-západ)',
    population: 9777,
    area: 17.54,
    altitude: 358,
    longitude: 14.513559856752,
    latitude: 49.96821662742,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Jesenice_u_prahy_znak.svg/90px-Jesenice_u_prahy_znak.svg.png'
  },
  {
    name: 'Ivančice',
    population: 9737,
    area: 47.65,
    altitude: 210,
    longitude: 16.377529198529,
    latitude: 49.101477851144,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ivan%C4%8Dice_CoA_CZ.png/90px-Ivan%C4%8Dice_CoA_CZ.png'
  },
  {
    name: 'Lysá nad Labem',
    population: 9732,
    area: 33.67,
    altitude: 183,
    longitude: 14.832888718706,
    latitude: 50.201496776686,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Znak_m%C4%9Bsto_Lys%C3%A1_nad_Labem_color.svg/90px-Znak_m%C4%9Bsto_Lys%C3%A1_nad_Labem_color.svg.png'
  },
  {
    name: 'Moravská Třebová',
    population: 9656,
    area: 42.05,
    altitude: 360,
    longitude: 16.664303989895,
    latitude: 49.757953873208,
    region: 'Pardubický',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Moravsk%C3%A1_T%C5%99ebov%C3%A1_CoA_CZ.svg/90px-Moravsk%C3%A1_T%C5%99ebov%C3%A1_CoA_CZ.svg.png'
  },
  {
    name: 'Litovel',
    population: 9567,
    area: 46.4,
    altitude: 233,
    longitude: 17.076190647983,
    latitude: 49.701225181872,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Znak_m%C4%9Bsta_Litovel.png/90px-Znak_m%C4%9Bsta_Litovel.png'
  },
  {
    name: 'Hlinsko',
    population: 9416,
    area: 24.27,
    altitude: 580,
    longitude: 15.907605681006,
    latitude: 49.762172981864,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hlinsko_znak.gif/90px-Hlinsko_znak.gif'
  },
  {
    name: 'Lanškroun',
    population: 9326,
    area: 20.65,
    altitude: 373,
    longitude: 16.611954510979,
    latitude: 49.912192261266,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Lan%C5%A1kroun.svg/90px-Lan%C5%A1kroun.svg.png'
  },
  {
    name: 'Přelouč',
    population: 9315,
    area: 30.47,
    altitude: 212,
    longitude: 15.560373291128,
    latitude: 50.039897141756,
    region: 'Pardubický',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Znak_m%C4%9Bsta_P%C5%99elou%C4%8D.jpg/90px-Znak_m%C4%9Bsta_P%C5%99elou%C4%8D.jpg'
  },
  {
    name: 'Studénka',
    population: 9277,
    area: 30.92,
    altitude: 239,
    longitude: 18.078565781992,
    latitude: 49.723408972599,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Stud%C3%A9nka_znak.png/90px-Stud%C3%A9nka_znak.png'
  },
  {
    name: 'Tišnov',
    population: 9164,
    area: 17.12,
    altitude: 256,
    longitude: 16.424404904279,
    latitude: 49.348749330424,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Znak_m%C4%9Bsta_Ti%C5%A1nov.png/90px-Znak_m%C4%9Bsta_Ti%C5%A1nov.png'
  },
  {
    name: 'Nové Město nad Metují',
    population: 9132,
    area: 23.13,
    altitude: 332,
    longitude: 16.151547223496,
    latitude: 50.344598880803,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Nov%C3%A9_M%C4%9Bsto_nad_Metuj%C3%AD_CoA_CZ.svg/90px-Nov%C3%A9_M%C4%9Bsto_nad_Metuj%C3%AD_CoA_CZ.svg.png'
  },
  {
    name: 'Mohelnice',
    population: 9103,
    area: 46.2,
    altitude: 267,
    longitude: 16.919508491038,
    latitude: 49.777001590952,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Mohelnice_SU_CZ_CoA.svg/90px-Mohelnice_SU_CZ_CoA.svg.png'
  },
  {
    name: 'Chotěboř',
    population: 8995,
    area: 54.05,
    altitude: 515,
    longitude: 15.67022905709,
    latitude: 49.720765680333,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Chotebor.png/90px-Chotebor.png'
  },
  {
    name: 'Nová Paka',
    population: 8857,
    area: 28.68,
    altitude: 427,
    longitude: 15.515123613971,
    latitude: 50.494542634207,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Nov%C3%A1_Paka_CoA_CZ.svg/90px-Nov%C3%A1_Paka_CoA_CZ.svg.png'
  },
  {
    name: 'Hostivice',
    population: 8777,
    area: 14.47,
    altitude: 341,
    longitude: 14.258633351605,
    latitude: 50.081655150002,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/COA_hostivice.jpg/90px-COA_hostivice.jpg'
  },
  {
    name: 'Mnichovo Hradiště',
    population: 8711,
    area: 34.32,
    altitude: 240,
    longitude: 14.971430407266,
    latitude: 50.527266026167,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Mnichovo_Hradiste_CoA_CZ.jpg/90px-Mnichovo_Hradiste_CoA_CZ.jpg'
  },
  {
    name: 'Polička',
    population: 8710,
    area: 33.12,
    altitude: 555,
    longitude: 16.265478874053,
    latitude: 49.714679390589,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Poli%C4%8Dka_CoA_CZ.svg/90px-Poli%C4%8Dka_CoA_CZ.svg.png'
  },
  {
    name: 'Dobříš',
    population: 8707,
    area: 53.42,
    altitude: 371,
    longitude: 14.16722087166,
    latitude: 49.781215974594,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Dobris-znak.png/90px-Dobris-znak.png'
  },
  {
    name: 'Roztoky (okres Praha-západ)',
    population: 8611,
    area: 8.13,
    altitude: 237,
    longitude: 14.397679313408,
    latitude: 50.158489314828,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Roztoky_CoA_PZ_CZ.svg/90px-Roztoky_CoA_PZ_CZ.svg.png'
  },
  {
    name: 'Lovosice',
    population: 8605,
    area: 11.89,
    altitude: 151,
    longitude: 14.051126534986,
    latitude: 50.515121498998,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Znak_Lovosic.png/90px-Znak_Lovosic.png'
  },
  {
    name: 'Duchcov',
    population: 8589,
    area: 15.41,
    altitude: 201,
    longitude: 13.746310094927,
    latitude: 50.603854793198,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/CoA_of_Duchcov.svg/90px-CoA_of_Duchcov.svg.png'
  },
  {
    name: 'Choceň',
    population: 8477,
    area: 21.69,
    altitude: 290,
    longitude: 16.223087674169,
    latitude: 50.00163914968,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Choce%C5%88.svg/90px-Choce%C5%88.svg.png'
  },
  {
    name: 'Štětí',
    population: 8438,
    area: 53.9,
    altitude: 155,
    longitude: 14.374304629682,
    latitude: 50.453059775481,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Steti_-_erb.gif/90px-Steti_-_erb.gif'
  },
  {
    name: 'Příbor (okres Nový Jičín)',
    population: 8297,
    area: 22.15,
    altitude: 278,
    longitude: 18.145022037352,
    latitude: 49.640926771377,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Coat_of_arms_of_P%C5%99%C3%ADbor.svg/90px-Coat_of_arms_of_P%C5%99%C3%ADbor.svg.png'
  },
  {
    name: 'Hořice',
    population: 8274,
    area: 21.43,
    altitude: 311,
    longitude: 15.631918228938,
    latitude: 50.366136740505,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Znak_m%C4%9Bsta_Ho%C5%99ice.svg/90px-Znak_m%C4%9Bsta_Ho%C5%99ice.svg.png'
  },
  {
    name: 'Červený Kostelec',
    population: 8229,
    area: 24.07,
    altitude: 414,
    longitude: 16.092983802099,
    latitude: 50.476298276375,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Cerveny_Kostelec_CoA_CZ.svg/90px-Cerveny_Kostelec_CoA_CZ.svg.png'
  },
  {
    name: 'Semily',
    population: 8120,
    area: 16.31,
    altitude: 340,
    longitude: 15.33561979968,
    latitude: 50.601957959876,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Znaksemily.gif/90px-Znaksemily.gif'
  },
  {
    name: 'Třeboň',
    population: 8092,
    area: 98.31,
    altitude: 434,
    longitude: 14.770659141428,
    latitude: 49.003709466138,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Znak_mesta_trebon_II.svg/90px-Znak_mesta_trebon_II.svg.png'
  },
  {
    name: 'Milevsko',
    population: 8033,
    area: 42.29,
    altitude: 461,
    longitude: 14.36004017878,
    latitude: 49.450972060646,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Milevsko_znak.png/90px-Milevsko_znak.png'
  },
  {
    name: 'Bystřice pod Hostýnem',
    population: 7984,
    area: 26.81,
    altitude: 315,
    longitude: 17.674035465156,
    latitude: 49.399238981974,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bystrice_pod_Hostynem-znak.png/90px-Bystrice_pod_Hostynem-znak.png'
  },
  {
    name: 'Rýmařov',
    population: 7969,
    area: 60.73,
    altitude: 590,
    longitude: 17.271821662136,
    latitude: 49.931838496043,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Rymarov_CZ_CoA.gif/90px-Rymarov_CZ_CoA.gif'
  },
  {
    name: 'Bystřice nad Pernštejnem',
    population: 7835,
    area: 53.07,
    altitude: 535,
    longitude: 16.261501207469,
    latitude: 49.522980589139,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Znak_m%C4%9Bsta_Byst%C5%99ice_nad_Pern%C5%A1tejnem.png/90px-Znak_m%C4%9Bsta_Byst%C5%99ice_nad_Pern%C5%A1tejnem.png'
  },
  {
    name: 'Lipník nad Bečvou',
    population: 7826,
    area: 30.62,
    altitude: 233,
    longitude: 17.58633834226,
    latitude: 49.527549239447,
    region: 'Olomoucký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Lipn%C3%ADk_nad_Be%C4%8Dvou_CoA_CZ.png/90px-Lipn%C3%ADk_nad_Be%C4%8Dvou_CoA_CZ.png'
  },
  {
    name: 'Dubí',
    population: 7805,
    area: 33.85,
    altitude: 389,
    longitude: 13.788939045017,
    latitude: 50.681121671443,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Dubi_CoA_CZ.jpg/90px-Dubi_CoA_CZ.jpg'
  },
  {
    name: 'Týn nad Vltavou',
    population: 7804,
    area: 43.02,
    altitude: 365,
    longitude: 14.420589996012,
    latitude: 49.223475602317,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/T%C3%BDn_nad_Vltavou_znak_2011.png/90px-T%C3%BDn_nad_Vltavou_znak_2011.png'
  },
  {
    name: 'Hrádek nad Nisou',
    population: 7704,
    area: 48.55,
    altitude: 255,
    longitude: 14.844661931528,
    latitude: 50.85285295319,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Hradek_nad_nisou_znak.jpg/90px-Hradek_nad_nisou_znak.jpg'
  },
  {
    name: 'Šlapanice',
    population: 7640,
    area: 14.65,
    altitude: 230,
    longitude: 16.727325855884,
    latitude: 49.168653859874,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/%C5%A0lapanice_CoA_CZ.png/90px-%C5%A0lapanice_CoA_CZ.png'
  },
  {
    name: 'Rychvald',
    population: 7614,
    area: 17.02,
    altitude: 220,
    longitude: 18.376307429057,
    latitude: 49.86623590309,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Rychvald_CoA.svg/90px-Rychvald_CoA.svg.png'
  },
  {
    name: 'Nejdek',
    population: 7608,
    area: 52.27,
    altitude: 568,
    longitude: 12.729443668258,
    latitude: 50.322532483831,
    region: 'Karlovarský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Znak_obce_Nejdek.gif/90px-Znak_obce_Nejdek.gif'
  },
  {
    name: 'Stříbro (okres Tachov)',
    population: 7430,
    area: 47.8,
    altitude: 399,
    longitude: 13.004146255782,
    latitude: 49.753048391098,
    region: 'Plzeňský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stribro_%28Tachov%29_CoA_CZ.jpg/90px-Stribro_%28Tachov%29_CoA_CZ.jpg'
  },
  {
    name: 'Mikulov',
    population: 7427,
    area: 45.32,
    altitude: 242,
    longitude: 16.637789181722,
    latitude: 48.805586996193,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Coat_of_arms_of_Mikulov_%28official%29.svg/90px-Coat_of_arms_of_Mikulov_%28official%29.svg.png'
  },
  {
    name: 'Benátky nad Jizerou',
    population: 7410,
    area: 35.51,
    altitude: 225,
    longitude: 14.823513539563,
    latitude: 50.290918373612,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Benatky_n_j_znak.png/90px-Benatky_n_j_znak.png'
  },
  {
    name: 'Petřvald (okres Karviná)',
    population: 7396,
    area: 12.63,
    altitude: 265,
    longitude: 18.389449339429,
    latitude: 49.830981416104,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Petrvald_%28Karvina%29_CoA_CZ.svg/90px-Petrvald_%28Karvina%29_CoA_CZ.svg.png'
  },
  {
    name: 'Frýdlant',
    population: 7380,
    area: 31.61,
    altitude: 295,
    longitude: 15.079858729413,
    latitude: 50.921451823669,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Fr%C3%BDdlant_CoA_CZ.svg/90px-Fr%C3%BDdlant_CoA_CZ.svg.png'
  },
  {
    name: 'Bílovec',
    population: 7341,
    area: 38.89,
    altitude: 243,
    longitude: 18.015853348325,
    latitude: 49.756380390942,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/CoA_of_B%C3%ADlovec.svg/90px-CoA_of_B%C3%ADlovec.svg.png'
  },
  {
    name: 'Černošice',
    population: 7329,
    area: 9.06,
    altitude: 211,
    longitude: 14.319858494702,
    latitude: 49.960158615227,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/%C4%8Cerno%C5%A1ice_znak.png/90px-%C4%8Cerno%C5%A1ice_znak.png'
  },
  {
    name: 'Vratimov',
    population: 7276,
    area: 14.11,
    altitude: 250,
    longitude: 18.310188493649,
    latitude: 49.769937353857,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Vratimov_znak.jpg/90px-Vratimov_znak.jpg'
  },
  {
    name: 'Odry',
    population: 7274,
    area: 74.05,
    altitude: 303,
    longitude: 17.830879019923,
    latitude: 49.66254664793,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Odry_CoA.jpg/90px-Odry_CoA.jpg'
  },
  {
    name: 'Vimperk',
    population: 7255,
    area: 80.04,
    altitude: 694,
    longitude: 13.774271666134,
    latitude: 49.052527919987,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Vimperk_znak.png/90px-Vimperk_znak.png'
  },
  {
    name: 'Moravské Budějovice',
    population: 7167,
    area: 37.13,
    altitude: 465,
    longitude: 15.808653302577,
    latitude: 49.05213602726,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Moravsk%C3%A9_Bud%C4%9Bjovice_%28znak%29.png/90px-Moravsk%C3%A9_Bud%C4%9Bjovice_%28znak%29.png'
  },
  {
    name: 'Broumov',
    population: 7145,
    area: 22.27,
    altitude: 395,
    longitude: 16.331904763502,
    latitude: 50.585690135728,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Broumov_znak.svg/90px-Broumov_znak.svg.png'
  },
  {
    name: 'Dačice',
    population: 7142,
    area: 66.96,
    altitude: 477,
    longitude: 15.437278856602,
    latitude: 49.081598679718,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Coat_of_arms_of_Da%C4%8Dice.svg/90px-Coat_of_arms_of_Da%C4%8Dice.svg.png'
  },
  {
    name: 'Napajedla',
    population: 7074,
    area: 19.83,
    altitude: 200,
    longitude: 17.51195508558,
    latitude: 49.171564523809,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Napajedla-znak.gif/90px-Napajedla-znak.gif'
  },
  {
    name: 'Český Brod',
    population: 7071,
    area: 19.7,
    altitude: 219,
    longitude: 14.860881470778,
    latitude: 50.074267480539,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/%C4%8Cesk%C3%BD_Brod_znak.svg/90px-%C4%8Cesk%C3%BD_Brod_znak.svg.png'
  },
  {
    name: 'Úvaly',
    population: 7035,
    area: 10.97,
    altitude: 253,
    longitude: 14.73087395138,
    latitude: 50.074011899968,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Znakuvaly.jpg/90px-Znakuvaly.jpg'
  },
  {
    name: 'Sezimovo Ústí',
    population: 7018,
    area: 8.44,
    altitude: 399,
    longitude: 14.684835568625,
    latitude: 49.385258670607,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Coa_Czech_Town_Sezimovo_%C3%9Ast%C3%AD.svg/90px-Coa_Czech_Town_Sezimovo_%C3%9Ast%C3%AD.svg.png'
  },
  {
    name: 'Slavkov u Brna',
    population: 6992,
    area: 14.95,
    altitude: 211,
    longitude: 16.876504369244,
    latitude: 49.153275386094,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Slavkov_u_Brna_znak_hires.svg/90px-Slavkov_u_Brna_znak_hires.svg.png'
  },
  {
    name: 'Kaplice',
    population: 6984,
    area: 40.85,
    altitude: 537,
    longitude: 14.496272135395,
    latitude: 48.738564836975,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Coat_of_arms_of_Kaplice.svg/90px-Coat_of_arms_of_Kaplice.svg.png'
  },
  {
    name: 'Nový Bydžov',
    population: 6982,
    area: 35.27,
    altitude: 235,
    longitude: 15.490898003773,
    latitude: 50.241552543371,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Coat_of_arms_of_Nov%C3%BD_Byd%C5%BEov.png/90px-Coat_of_arms_of_Nov%C3%BD_Byd%C5%BEov.png'
  },
  {
    name: 'Nýřany',
    population: 6891,
    area: 22.79,
    altitude: 336,
    longitude: 13.211901020269,
    latitude: 49.711560287657,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Nyrany_znak.jpg/90px-Nyrany_znak.jpg'
  },
  {
    name: 'Hořovice',
    population: 6882,
    area: 9.55,
    altitude: 385,
    longitude: 13.902738643216,
    latitude: 49.836060857067,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Znak_m%C4%9Bsta_Ho%C5%99ovice2.svg/90px-Znak_m%C4%9Bsta_Ho%C5%99ovice2.svg.png'
  },
  {
    name: 'Vodňany',
    population: 6848,
    area: 36.34,
    altitude: 398,
    longitude: 14.175148006577,
    latitude: 49.147976092242,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Vodnany_CoA_CZ.jpg/90px-Vodnany_CoA_CZ.jpg'
  },
  {
    name: 'Soběslav',
    population: 6830,
    area: 20.0,
    altitude: 405,
    longitude: 14.71863867571,
    latitude: 49.260006346187,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Sobeslav_crest_Czech_Republic.jpg/90px-Sobeslav_crest_Czech_Republic.jpg'
  },
  {
    name: 'Sedlčany',
    population: 6799,
    area: 36.47,
    altitude: 321,
    longitude: 14.426685295646,
    latitude: 49.660649523688,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Coa_Czech_Town_Sedl%C4%8Dany.svg/90px-Coa_Czech_Town_Sedl%C4%8Dany.svg.png'
  },
  {
    name: 'Letovice',
    population: 6669,
    area: 51.01,
    altitude: 330,
    longitude: 16.573608242859,
    latitude: 49.547116840883,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Letovice_CoA_CZ.png/90px-Letovice_CoA_CZ.png'
  },
  {
    name: 'Přeštice',
    population: 6645,
    area: 25.41,
    altitude: 345,
    longitude: 13.333542808445,
    latitude: 49.573084901444,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/P%C5%99e%C5%A1tice_-_znak.gif/90px-P%C5%99e%C5%A1tice_-_znak.gif'
  },
  {
    name: 'Kravaře',
    population: 6601,
    area: 19.37,
    altitude: 233,
    longitude: 18.004772215608,
    latitude: 49.932024489233,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Coat_of_arms_of_Krava%C5%99e_%28Opava_District%29.svg/90px-Coat_of_arms_of_Krava%C5%99e_%28Opava_District%29.svg.png'
  },
  {
    name: 'Staré Město (okres Uherské Hradiště)',
    population: 6552,
    area: 20.83,
    altitude: 205,
    longitude: 17.433385613484,
    latitude: 49.075157294006,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Star%C3%A9_M%C4%9Bsto_%28Uhersk%C3%A9_Hradi%C5%A1t%C4%9B_District%29_CoA_2021.png/90px-Star%C3%A9_M%C4%9Bsto_%28Uhersk%C3%A9_Hradi%C5%A1t%C4%9B_District%29_CoA_2021.png'
  },
  {
    name: 'Holice',
    population: 6542,
    area: 19.65,
    altitude: 244,
    longitude: 15.985965854452,
    latitude: 50.066050453806,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Znak_m%C4%9Bsta_Holice.jpg/90px-Znak_m%C4%9Bsta_Holice.jpg'
  },
  {
    name: 'Kraslice (okres Sokolov)',
    population: 6537,
    area: 81.33,
    altitude: 514,
    longitude: 12.517556147716,
    latitude: 50.323842588747,
    region: 'Karlovarský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kraslice_znak.png/90px-Kraslice_znak.png'
  },
  {
    name: 'Hulín',
    population: 6533,
    area: 32.12,
    altitude: 191,
    longitude: 17.463758712343,
    latitude: 49.316900046515,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Hul%C3%ADn_znak.jpg/90px-Hul%C3%ADn_znak.jpg'
  },
  {
    name: 'Dobruška',
    population: 6518,
    area: 34.44,
    altitude: 287,
    longitude: 16.160091697745,
    latitude: 50.292047387909,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Dobru%C5%A1ka_CoA_CZ.svg/90px-Dobru%C5%A1ka_CoA_CZ.svg.png'
  },
  {
    name: 'Bučovice',
    population: 6510,
    area: 31.18,
    altitude: 230,
    longitude: 17.001917706954,
    latitude: 49.148973571179,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Znak_m%C4%9Bsta_Bu%C4%8Dovice.svg/90px-Znak_m%C4%9Bsta_Bu%C4%8Dovice.svg.png'
  },
  {
    name: 'Šenov',
    population: 6477,
    area: 16.63,
    altitude: 255,
    longitude: 18.376108072077,
    latitude: 49.793134259402,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/%C5%A0enov_CoA_CZ.jpg/90px-%C5%A0enov_CoA_CZ.jpg'
  },
  {
    name: 'Rosice',
    population: 6466,
    area: 12.74,
    altitude: 326,
    longitude: 16.387885945617,
    latitude: 49.1823520088,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Znak_Rosice_%28Brno-venkov%29.jpg/90px-Znak_Rosice_%28Brno-venkov%29.jpg'
  },
  {
    name: 'Letohrad',
    population: 6377,
    area: 23.55,
    altitude: 372,
    longitude: 16.498848119659,
    latitude: 50.035827763428,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Letohrad_CoA_CZ.svg/90px-Letohrad_CoA_CZ.svg.png'
  },
  {
    name: 'Blatná',
    population: 6371,
    area: 43.6,
    altitude: 440,
    longitude: 13.881793989077,
    latitude: 49.424977027305,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Znak_blatna_cz.jpg/90px-Znak_blatna_cz.jpg'
  },
  {
    name: 'Mimoň',
    population: 6361,
    area: 15.48,
    altitude: 280,
    longitude: 14.724839569219,
    latitude: 50.658755425527,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mimo%C5%88_CoA_CZ.svg/90px-Mimo%C5%88_CoA_CZ.svg.png'
  },
  {
    name: 'Světlá nad Sázavou',
    population: 6335,
    area: 42.08,
    altitude: 400,
    longitude: 15.403979061829,
    latitude: 49.668062440319,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Svetla_nad_Sazavou_CoA_CZ.jpg/90px-Svetla_nad_Sazavou_CoA_CZ.jpg'
  },
  {
    name: 'Veselí nad Lužnicí',
    population: 6317,
    area: 29.57,
    altitude: 407,
    longitude: 14.697355580068,
    latitude: 49.184368900539,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Coat_of_arms_of_Vesel%C3%AD_nad_Lu%C5%BEnic%C3%AD.jpg/90px-Coat_of_arms_of_Vesel%C3%AD_nad_Lu%C5%BEnic%C3%AD.jpg'
  },
  {
    name: 'Chrastava',
    population: 6260,
    area: 27.46,
    altitude: 295,
    longitude: 14.968948444345,
    latitude: 50.81698593906,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chrastava_CoA_CZ.svg/90px-Chrastava_CoA_CZ.svg.png'
  },
  {
    name: 'Podbořany',
    population: 6248,
    area: 60.15,
    altitude: 331,
    longitude: 13.411998129955,
    latitude: 50.229466858401,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Coat_of_arms_of_Podbo%C5%99any.png/90px-Coat_of_arms_of_Podbo%C5%99any.png'
  },
  {
    name: 'Dubňany',
    population: 6231,
    area: 22.58,
    altitude: 200,
    longitude: 17.090040442473,
    latitude: 48.916955312083,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Dub%C5%88any.svg/90px-Dub%C5%88any.svg.png'
  },
  {
    name: 'Slavičín',
    population: 6227,
    area: 33.66,
    altitude: 380,
    longitude: 17.873493344939,
    latitude: 49.087983788408,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Slavicin_CoA_CZ.jpg/90px-Slavicin_CoA_CZ.jpg'
  },
  {
    name: 'Odolena Voda',
    population: 6163,
    area: 11.24,
    altitude: 248,
    longitude: 14.410860235991,
    latitude: 50.233487444448,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Odolena_Voda_znak.jpg/90px-Odolena_Voda_znak.jpg'
  },
  {
    name: 'Dobřany',
    population: 6128,
    area: 35.32,
    altitude: 352,
    longitude: 13.293116667157,
    latitude: 49.654927628789,
    region: 'Plzeňský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dob%C5%99any_%28Stod%2C_CZE%29_-_coat_of_arms.png/90px-Dob%C5%99any_%28Stod%2C_CZE%29_-_coat_of_arms.png'
  },
  {
    name: 'Kostelec nad Orlicí',
    population: 6090,
    area: 26.2,
    altitude: 273,
    longitude: 16.213254179601,
    latitude: 50.122700875844,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Kostelec_nad_Orlici_CoA_CZ.jpg/90px-Kostelec_nad_Orlici_CoA_CZ.jpg'
  },
  {
    name: 'Mníšek pod Brdy',
    population: 6060,
    area: 26.5,
    altitude: 385,
    longitude: 14.261816920552,
    latitude: 49.866576610398,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/CoA_of_Mn%C3%AD%C5%A1ek_pod_Brdy.svg/90px-CoA_of_Mn%C3%AD%C5%A1ek_pod_Brdy.svg.png'
  },
  {
    name: 'Hronov',
    population: 6032,
    area: 22.04,
    altitude: 364,
    longitude: 16.182393097246,
    latitude: 50.47971690936,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Hronov-znak.svg/90px-Hronov-znak.svg.png'
  },
  {
    name: 'Týniště nad Orlicí',
    population: 6001,
    area: 52.46,
    altitude: 253,
    longitude: 16.077768029523,
    latitude: 50.151400055455,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Tyniste_nad_Orlici_CoA_CZ.png/90px-Tyniste_nad_Orlici_CoA_CZ.png'
  },
  {
    name: 'Hustopeče',
    population: 5998,
    area: 24.53,
    altitude: 215,
    longitude: 16.73762221643,
    latitude: 48.940871942774,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Znak_m%C4%9Bsta_Hustope%C4%8De_hires.svg/90px-Znak_m%C4%9Bsta_Hustope%C4%8De_hires.svg.png'
  },
  {
    name: 'Tanvald',
    population: 5958,
    area: 12.45,
    altitude: 455,
    longitude: 15.305960246529,
    latitude: 50.737406262188,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tanvald_CoA_CZ.svg/90px-Tanvald_CoA_CZ.svg.png'
  },
  {
    name: 'Žamberk',
    population: 5918,
    area: 16.91,
    altitude: 420,
    longitude: 16.467445454592,
    latitude: 50.086040466117,
    region: 'Pardubický',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/COA_Znak_m%C4%9Bsta_%C5%BDamberk.svg/90px-COA_Znak_m%C4%9Bsta_%C5%BDamberk.svg.png'
  },
  {
    name: 'Železný Brod',
    population: 5883,
    area: 22.52,
    altitude: 305,
    longitude: 15.254178818148,
    latitude: 50.642794278444,
    region: 'Liberecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Coat_of_arms_of_%C5%BDelezn%C3%BD_Brod.jpg/90px-Coat_of_arms_of_%C5%BDelezn%C3%BD_Brod.jpg'
  },
  {
    name: 'Kojetín',
    population: 5837,
    area: 31.09,
    altitude: 200,
    longitude: 17.302089031356,
    latitude: 49.351803869882,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Kojet%C3%ADn.svg/90px-Kojet%C3%ADn.svg.png'
  },
  {
    name: 'Šluknov',
    population: 5721,
    area: 47.47,
    altitude: 340,
    longitude: 14.452709270766,
    latitude: 51.003759354628,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/%C5%A0luknov_znak.png/90px-%C5%A0luknov_znak.png'
  },
  {
    name: 'Třebechovice pod Orebem',
    population: 5706,
    area: 21.01,
    altitude: 243,
    longitude: 15.9923048313,
    latitude: 50.201006677785,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/CoA_of_T%C5%99ebechovice_pod_Orebem.svg/90px-CoA_of_T%C5%99ebechovice_pod_Orebem.svg.png'
  },
  {
    name: 'Týnec nad Sázavou',
    population: 5667,
    area: 25.75,
    altitude: 281,
    longitude: 14.589890530837,
    latitude: 49.833548574825,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tynec_nad_Sazavou_CZ_CoA.jpg/90px-Tynec_nad_Sazavou_CZ_CoA.jpg'
  },
  {
    name: 'Rousínov',
    population: 5648,
    area: 23.05,
    altitude: 241,
    longitude: 16.882160941908,
    latitude: 49.201302411488,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Rous%C3%ADnov_CoA_CZ.svg/90px-Rous%C3%ADnov_CoA_CZ.svg.png'
  },
  {
    name: 'Třešť',
    population: 5625,
    area: 46.99,
    altitude: 545,
    longitude: 15.482137396507,
    latitude: 49.29097119215,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/T%C5%99e%C5%A1%C5%A5_CoA_CZ.jpg/90px-T%C5%99e%C5%A1%C5%A5_CoA_CZ.jpg'
  },
  {
    name: 'Moravský Krumlov',
    population: 5606,
    area: 49.56,
    altitude: 255,
    longitude: 16.311702605794,
    latitude: 49.048965931678,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Coat_of_Arms_of_Moravsk%C3%BD_Krumlov.jpg/90px-Coat_of_Arms_of_Moravsk%C3%BD_Krumlov.jpg'
  },
  {
    name: 'Vítkov',
    population: 5593,
    area: 55.06,
    altitude: 480,
    longitude: 17.749454126304,
    latitude: 49.774449841863,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Coat_of_arms_of_V%C3%ADtkov.svg/90px-Coat_of_arms_of_V%C3%ADtkov.svg.png'
  },
  {
    name: 'Nové Strašecí',
    population: 5573,
    area: 13.32,
    altitude: 470,
    longitude: 13.900503723787,
    latitude: 50.152805461272,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Znak_barevny.jpg/90px-Znak_barevny.jpg'
  },
  {
    name: 'Chlumec nad Cidlinou',
    population: 5561,
    area: 21.44,
    altitude: 223,
    longitude: 15.460334603393,
    latitude: 50.154454367424,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/CoA_of_Chlumec_nad_Cidlinou.svg/90px-CoA_of_Chlumec_nad_Cidlinou.svg.png'
  },
  {
    name: 'Lomnice nad Popelkou',
    population: 5486,
    area: 25.57,
    altitude: 478,
    longitude: 15.373504846757,
    latitude: 50.53067653642,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Znaklomnice.jpg/90px-Znaklomnice.jpg'
  },
  {
    name: 'Fulnek',
    population: 5484,
    area: 68.49,
    altitude: 320,
    longitude: 17.903232874658,
    latitude: 49.712371239231,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/CoA_of_Fulnek.svg/90px-CoA_of_Fulnek.svg.png'
  },
  {
    name: 'Úpice',
    population: 5468,
    area: 15.31,
    altitude: 352,
    longitude: 16.016159265275,
    latitude: 50.512410991863,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Upice_CoA_CZ.svg/90px-Upice_CoA_CZ.svg.png'
  },
  {
    name: 'Brumov-Bylnice',
    population: 5457,
    area: 56.27,
    altitude: 330,
    longitude: 18.023099545168,
    latitude: 49.090871365095,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Znak_m%C4%9Bsta_Brumov-Bylnice.svg/90px-Znak_m%C4%9Bsta_Brumov-Bylnice.svg.png'
  },
  {
    name: 'Kunovice',
    population: 5452,
    area: 28.55,
    altitude: 198,
    longitude: 17.470110150223,
    latitude: 49.044995756546,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Coa_Czech_Town_Kunovice.svg/90px-Coa_Czech_Town_Kunovice.svg.png'
  },
  {
    name: 'Zubří',
    population: 5450,
    area: 28.39,
    altitude: 378,
    longitude: 18.092510514603,
    latitude: 49.466018567307,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/CZ_Zub%C5%99%C3%AD_COA.svg/90px-CZ_Zub%C5%99%C3%AD_COA.svg.png'
  },
  {
    name: 'Hradec nad Moravicí',
    population: 5434,
    area: 43.96,
    altitude: 277,
    longitude: 17.875865633487,
    latitude: 49.871004700938,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Coa_Czech_Town_Hradec_nad_Moravic%C3%AD.svg/90px-Coa_Czech_Town_Hradec_nad_Moravic%C3%AD.svg.png'
  },
  {
    name: 'Strážnice (okres Hodonín)',
    population: 5390,
    area: 31.41,
    altitude: 177,
    longitude: 17.316799472243,
    latitude: 48.901029956488,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Straznice_HO_CZ_znak.png/90px-Straznice_HO_CZ_znak.png'
  },
  {
    name: 'Hluboká nad Vltavou',
    population: 5353,
    area: 91.11,
    altitude: 394,
    longitude: 14.434283204502,
    latitude: 49.052328810727,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Hlubok%C3%A1_nad_Vltavou_znak.png/90px-Hlubok%C3%A1_nad_Vltavou_znak.png'
  },
  {
    name: 'Jilemnice',
    population: 5352,
    area: 13.86,
    altitude: 451,
    longitude: 15.506628032335,
    latitude: 50.608944916275,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Jilemnice_CoA_CZ.svg/90px-Jilemnice_CoA_CZ.svg.png'
  },
  {
    name: 'Stochov',
    population: 5348,
    area: 9.54,
    altitude: 448,
    longitude: 13.96352591847,
    latitude: 50.146392291736,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Stochov_CoA_CZ.jpg/90px-Stochov_CoA_CZ.jpg'
  },
  {
    name: 'Pohořelice',
    population: 5312,
    area: 43.05,
    altitude: 181,
    longitude: 16.524457138925,
    latitude: 48.981217409611,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Poho%C5%99elice_%28okres_Brno-venkov%29_znak.gif'
  },
  {
    name: 'Jablunkov',
    population: 5284,
    area: 10.39,
    altitude: 386,
    longitude: 18.764611504976,
    latitude: 49.576691347506,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Jablunkov_arms.png/90px-Jablunkov_arms.png'
  },
  {
    name: 'Planá',
    population: 5278,
    area: 62.47,
    altitude: 506,
    longitude: 12.743844417597,
    latitude: 49.86827193037,
    region: 'Plzeňský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Coat_of_arms_of_Plan%C3%A1_%28okres_Tachov%29.jpg/90px-Coat_of_arms_of_Plan%C3%A1_%28okres_Tachov%29.jpg'
  },
  {
    name: 'Modřice',
    population: 5263,
    area: 10.05,
    altitude: 204,
    longitude: 16.61442392832,
    latitude: 49.127917307254,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Modrice_CZ_CoA.svg/90px-Modrice_CZ_CoA.svg.png'
  },
  {
    name: 'Horní Slavkov',
    population: 5208,
    area: 36.87,
    altitude: 558,
    longitude: 12.807657708289,
    latitude: 50.138745037063,
    region: 'Karlovarský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Coat_of_arms_of_Horn%C3%AD_Slavkov.jpg/90px-Coat_of_arms_of_Horn%C3%AD_Slavkov.jpg'
  },
  {
    name: 'Starý Plzenec',
    population: 5204,
    area: 18.37,
    altitude: 343,
    longitude: 13.473552493178,
    latitude: 49.697776983968,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Staryplzenec_coa.gif/90px-Staryplzenec_coa.gif'
  },
  {
    name: 'Trhové Sviny',
    population: 5187,
    area: 52.78,
    altitude: 458,
    longitude: 14.639241403372,
    latitude: 48.842389190234,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Trhove_Sviny_CZ_CoA.jpg/90px-Trhove_Sviny_CZ_CoA.jpg'
  },
  {
    name: 'Františkovy Lázně',
    population: 5187,
    area: 25.76,
    altitude: 442,
    longitude: 12.35181521379,
    latitude: 50.120455065226,
    region: 'Karlovarský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Frnati%C5%A1kovy_L%C3%A1zn%C4%9B_CoA.png/90px-Frnati%C5%A1kovy_L%C3%A1zn%C4%9B_CoA.png'
  },
  {
    name: 'Velká Bíteš',
    population: 5167,
    area: 47.3,
    altitude: 476,
    longitude: 16.225874100039,
    latitude: 49.28866258252,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Velk%C3%A1_B%C3%ADte%C5%A1%2C_znak.jpg/90px-Velk%C3%A1_B%C3%ADte%C5%A1%2C_znak.jpg'
  },
  {
    name: 'Polná',
    population: 5147,
    area: 37.77,
    altitude: 490,
    longitude: 15.718844195485,
    latitude: 49.48704494622,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Poln%C3%A1_CZ_CoA_ver_2022.svg/90px-Poln%C3%A1_CZ_CoA_ver_2022.svg.png'
  },
  {
    name: 'Telč',
    population: 5140,
    area: 24.86,
    altitude: 514,
    longitude: 15.452771068011,
    latitude: 49.184229941699,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Telc_CoA.png/90px-Telc_CoA.png'
  },
  {
    name: 'Horažďovice',
    population: 5113,
    area: 43.04,
    altitude: 427,
    longitude: 13.701031041622,
    latitude: 49.320781810531,
    region: 'Plzeňský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Hora%C5%BE%C4%8Fovice_znak.svg/90px-Hora%C5%BE%C4%8Fovice_znak.svg.png'
  },
  {
    name: 'Rudná (okres Praha-západ)',
    population: 5090,
    area: 8.2,
    altitude: 378,
    longitude: 14.234414258821,
    latitude: 50.035104791874,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Znak_m%C4%9Bsta_Rudn%C3%A1.png/90px-Znak_m%C4%9Bsta_Rudn%C3%A1.png'
  },
  {
    name: 'Kdyně',
    population: 5088,
    area: 28.74,
    altitude: 455,
    longitude: 13.03971039702,
    latitude: 49.390878184146,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Kdyn%C4%9B_%28CZE%29_-_coat-of-arms.png'
  },
  {
    name: 'Doksy',
    population: 5081,
    area: 74.95,
    altitude: 266,
    longitude: 14.65562316455,
    latitude: 50.564781686941,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Doksy_CL_CZ_CoA.jpg/90px-Doksy_CL_CZ_CoA.jpg'
  },
  {
    name: 'Holýšov',
    population: 5075,
    area: 29.32,
    altitude: 357,
    longitude: 13.101338813306,
    latitude: 49.593719918694,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Holysov_znak.jpg/90px-Holysov_znak.jpg'
  },
  {
    name: 'Jílové (okres Děčín)',
    population: 5062,
    area: 36.56,
    altitude: 276,
    longitude: 14.103945726726,
    latitude: 50.760901305653,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/J%C3%ADlov%C3%A9_D%C4%9B%C4%8D%C3%ADn.png/90px-J%C3%ADlov%C3%A9_D%C4%9B%C4%8D%C3%ADn.png'
  },
  {
    name: 'Třemošná',
    population: 5053,
    area: 18.12,
    altitude: 348,
    longitude: 13.395051407159,
    latitude: 49.815938878371,
    region: 'Plzeňský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/T%C5%99emo%C5%A1n%C3%A1_CoA.jpg/90px-T%C5%99emo%C5%A1n%C3%A1_CoA.jpg'
  },
  {
    name: 'Česká Kamenice',
    population: 5028,
    area: 38.77,
    altitude: 301,
    longitude: 14.417784557033,
    latitude: 50.797877961013,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Znak_m%C4%9Bsta_%C4%8Cesk%C3%A1_Kamenice.jpg/90px-Znak_m%C4%9Bsta_%C4%8Cesk%C3%A1_Kamenice.jpg'
  },
  {
    name: 'Skuteč',
    population: 5022,
    area: 35.4,
    altitude: 410,
    longitude: 15.996602726521,
    latitude: 49.843507732223,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Skute%C4%8D_CoA_CZ.svg/90px-Skute%C4%8D_CoA_CZ.svg.png'
  },
  {
    name: 'Bakov nad Jizerou',
    population: 4967,
    area: 27.01,
    altitude: 224,
    longitude: 14.941580683763,
    latitude: 50.48236715403,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Bakov_nad_Jizerou_znak.png/90px-Bakov_nad_Jizerou_znak.png'
  },
  {
    name: 'Luhačovice',
    population: 4955,
    area: 33.0,
    altitude: 253,
    longitude: 17.757479338017,
    latitude: 49.0998226346,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Luha%C4%8Dovice_znak.png/90px-Luha%C4%8Dovice_znak.png'
  },
  {
    name: 'Česká Skalice',
    population: 4945,
    area: 17.36,
    altitude: 284,
    longitude: 16.042847327524,
    latitude: 50.394705559401,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Ceska_Skalice_CoA_CZ.svg/90px-Ceska_Skalice_CoA_CZ.svg.png'
  },
  {
    name: 'Jílové u Prahy',
    population: 4919,
    area: 16.25,
    altitude: 381,
    longitude: 14.493387704233,
    latitude: 49.895520876972,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/COA_J%C3%ADlov%C3%A9_u_Prahy.png/90px-COA_J%C3%ADlov%C3%A9_u_Prahy.png'
  },
  {
    name: 'Bechyně',
    population: 4876,
    area: 21.29,
    altitude: 406,
    longitude: 14.468125123251,
    latitude: 49.295309165146,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bechyne_CoA_CZ.png/90px-Bechyne_CoA_CZ.png'
  },
  {
    name: 'Horšovský Týn',
    population: 4839,
    area: 71.31,
    altitude: 376,
    longitude: 12.944091023187,
    latitude: 49.529759792748,
    region: 'Plzeňský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Hor%C5%A1ovsk%C3%BD_T%C3%BDn_CoA.png/90px-Hor%C5%A1ovsk%C3%BD_T%C3%BDn_CoA.png'
  },
  {
    name: 'Vrbno pod Pradědem',
    population: 4839,
    area: 68.91,
    altitude: 545,
    longitude: 17.383221772378,
    latitude: 50.120957199296,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Vrbno_pod_Prad%C4%9Bdem_znak.png/90px-Vrbno_pod_Prad%C4%9Bdem_znak.png'
  },
  {
    name: 'Valašské Klobouky',
    population: 4839,
    area: 26.95,
    altitude: 405,
    longitude: 18.007607874482,
    latitude: 49.140630604127,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Valasske-klobouky-znak.jpg/90px-Valasske-klobouky-znak.jpg'
  },
  {
    name: 'Unhošť',
    population: 4827,
    area: 17.42,
    altitude: 387,
    longitude: 14.130145953268,
    latitude: 50.085433861082,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Unhost_znak.jpg/90px-Unhost_znak.jpg'
  },
  {
    name: 'Vizovice',
    population: 4809,
    area: 28.57,
    altitude: 296,
    longitude: 17.854557978828,
    latitude: 49.222868373919,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vizovice_CoA_CZ.svg/90px-Vizovice_CoA_CZ.svg.png'
  },
  {
    name: 'Ledeč nad Sázavou',
    population: 4808,
    area: 17.01,
    altitude: 353,
    longitude: 15.277769503404,
    latitude: 49.695224253124,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Znak_m%C4%9Bsta_Lede%C4%8D_nad_S%C3%A1zavou.png/90px-Znak_m%C4%9Bsta_Lede%C4%8D_nad_S%C3%A1zavou.png'
  },
  {
    name: 'Nýrsko',
    population: 4806,
    area: 31.53,
    altitude: 452,
    longitude: 13.143560977643,
    latitude: 49.293977787852,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nyrsko_znak.JPG/90px-Nyrsko_znak.JPG'
  },
  {
    name: 'Pečky',
    population: 4771,
    area: 10.76,
    altitude: 194,
    longitude: 15.030238635087,
    latitude: 50.090487305541,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pe%C4%8Dky.gif/90px-Pe%C4%8Dky.gif'
  },
  {
    name: 'Kosmonosy',
    population: 4755,
    area: 11.39,
    altitude: 243,
    longitude: 14.930087921482,
    latitude: 50.438562010198,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Kosmonosy.gif/90px-Kosmonosy.gif'
  },
  {
    name: 'Chropyně',
    population: 4749,
    area: 19,
    altitude: 195,
    longitude: 17.364532053366,
    latitude: 49.356449955938,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chropyn%C4%9B_znak.png/90px-Chropyn%C4%9B_znak.png'
  },
  {
    name: 'Oslavany',
    population: 4746,
    area: 18.71,
    altitude: 230,
    longitude: 16.336541091101,
    latitude: 49.123380208518,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Oslavany_CZ_CoA.jpg/90px-Oslavany_CZ_CoA.jpg'
  },
  {
    name: 'Náměšť nad Oslavou',
    population: 4723,
    area: 18.62,
    altitude: 365,
    longitude: 16.158503502674,
    latitude: 49.207301366068,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/N%C3%A1m%C4%9B%C5%A1%C5%A5_nad_Oslavou_CoA.png'
  },
  {
    name: 'Heřmanův Městec',
    population: 4721,
    area: 14.34,
    altitude: 280,
    longitude: 15.664983771248,
    latitude: 49.947117687117,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Hermanuv_Mestec_CZ_CoA.gif/90px-Hermanuv_Mestec_CZ_CoA.gif'
  },
  {
    name: 'Bělá pod Bezdězem',
    population: 4714,
    area: 63.21,
    altitude: 301,
    longitude: 14.804180555556,
    latitude: 50.501213888889,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bpb_znak.jpg/90px-Bpb_znak.jpg'
  },
  {
    name: 'Zruč nad Sázavou',
    population: 4709,
    area: 16.37,
    altitude: 344,
    longitude: 15.106108919976,
    latitude: 49.740164158514,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Zruc_nad_sazavou_znak.gif/90px-Zruc_nad_sazavou_znak.gif'
  },
  {
    name: 'Protivín',
    population: 4687,
    area: 61.45,
    altitude: 383,
    longitude: 14.21719630313,
    latitude: 49.199569401436,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Znak_Mesta_Protivin.jpg/90px-Znak_Mesta_Protivin.jpg'
  },
  {
    name: 'Habartov',
    population: 4687,
    area: 21.39,
    altitude: 484,
    longitude: 12.550615081668,
    latitude: 50.183085358271,
    region: 'Karlovarský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Habartov_CoA.png/90px-Habartov_CoA.png'
  },
  {
    name: 'Meziboří',
    population: 4686,
    area: 14.36,
    altitude: 512,
    longitude: 13.598802095006,
    latitude: 50.621246387357,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Mezibo%C5%99%C3%AD_znak.jpg/90px-Mezibo%C5%99%C3%AD_znak.jpg'
  },
  {
    name: 'Postoloprty',
    population: 4644,
    area: 46.49,
    altitude: 193,
    longitude: 13.702996227431,
    latitude: 50.359880648319,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Postoloprty_CZ_CoA.jpg/90px-Postoloprty_CZ_CoA.jpg'
  },
  {
    name: 'Pacov',
    population: 4604,
    area: 35.86,
    altitude: 615,
    longitude: 15.001713769033,
    latitude: 49.470826885963,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Pacov-znak.svg/90px-Pacov-znak.svg.png'
  },
  {
    name: 'Osek (okres Teplice)',
    population: 4596,
    area: 42.37,
    altitude: 307,
    longitude: 13.68595786877,
    latitude: 50.622801284893,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Osek_CoA_TP_CZ.svg/90px-Osek_CoA_TP_CZ.svg.png'
  },
  {
    name: 'Kynšperk nad Ohří',
    population: 4590,
    area: 23.31,
    altitude: 431,
    longitude: 12.530346195097,
    latitude: 50.119045820294,
    region: 'Karlovarský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Kyn%C5%A1perk_nad_Oh%C5%99%C3%AD_-_CoA.png/90px-Kyn%C5%A1perk_nad_Oh%C5%99%C3%AD_-_CoA.png'
  },
  {
    name: 'Vamberk',
    population: 4530,
    area: 21.03,
    altitude: 320,
    longitude: 16.290742760724,
    latitude: 50.117591352648,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Vamberk_CoA.png/90px-Vamberk_CoA.png'
  },
  {
    name: 'Vracov',
    population: 4513,
    area: 44.4,
    altitude: 183,
    longitude: 17.21099802362,
    latitude: 48.975242894127,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Znak_m%C4%9Bsta_Vracov.jpg/90px-Znak_m%C4%9Bsta_Vracov.jpg'
  },
  {
    name: 'Lišov',
    population: 4508,
    area: 93.55,
    altitude: 505,
    longitude: 14.6083897669,
    latitude: 49.01604452487,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Li%C5%A1ov_znak.png/90px-Li%C5%A1ov_znak.png'
  },
  {
    name: 'Votice',
    population: 4495,
    area: 36.42,
    altitude: 483,
    longitude: 14.63813032544,
    latitude: 49.640199066405,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Votice_znak.png/90px-Votice_znak.png'
  },
  {
    name: 'Cvikov (okres Česká Lípa)',
    population: 4479,
    area: 45.09,
    altitude: 357,
    longitude: 14.633085701023,
    latitude: 50.776745075033,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cvikov_znak.png/90px-Cvikov_znak.png'
  },
  {
    name: 'Klimkovice',
    population: 4469,
    area: 14.64,
    altitude: 252,
    longitude: 18.125896003286,
    latitude: 49.788082173192,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Znak_Klimkovice.jpg/90px-Znak_Klimkovice.jpg'
  },
  {
    name: 'Bystřice (okres Benešov)',
    population: 4456,
    area: 63.36,
    altitude: 365,
    longitude: 14.667451342381,
    latitude: 49.732203439291,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Byst%C5%99ice_%28BN%29%2C_znak.jpg/90px-Byst%C5%99ice_%28BN%29%2C_znak.jpg'
  },
  {
    name: 'Adamov',
    population: 4429,
    area: 3.78,
    altitude: 258,
    longitude: 16.658570650287,
    latitude: 49.30052629923,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Adamov_Blansko_CoA.svg/90px-Adamov_Blansko_CoA.svg.png'
  },
  {
    name: 'Bor (okres Tachov)',
    population: 4403,
    area: 116.49,
    altitude: 472,
    longitude: 12.775216037849,
    latitude: 49.711710233218,
    region: 'Plzeňský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bor_%28Tachov_District%29_CoA.png/90px-Bor_%28Tachov_District%29_CoA.png'
  },
  {
    name: 'Bojkovice',
    population: 4310,
    area: 41.87,
    altitude: 272,
    longitude: 17.814875213239,
    latitude: 49.038644054761,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bojkovice_CoA.png/90px-Bojkovice_CoA.png'
  },
  {
    name: 'Bzenec',
    population: 4303,
    area: 40.34,
    altitude: 183,
    longitude: 17.266852936959,
    latitude: 48.97337624906,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Bzenec_%28znak%29.png/90px-Bzenec_%28znak%29.png'
  },
  {
    name: 'Planá nad Lužnicí',
    population: 4296,
    area: 21.42,
    altitude: 395,
    longitude: 14.701502824093,
    latitude: 49.354509187053,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Coa_Plana-logo.jpg/90px-Coa_Plana-logo.jpg'
  },
  {
    name: 'Hostinné',
    population: 4265,
    area: 8.07,
    altitude: 351,
    longitude: 15.723429505909,
    latitude: 50.540706652015,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Hostinn%C3%A9.svg/90px-Hostinn%C3%A9.svg.png'
  },
  {
    name: 'Hluk (okres Uherské Hradiště)',
    population: 4249,
    area: 28.39,
    altitude: 222,
    longitude: 17.526680219708,
    latitude: 48.988126434505,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Hluk_CoA_CZ.jpg/90px-Hluk_CoA_CZ.jpg'
  },
  {
    name: 'Chlumec (okres Ústí nad Labem)',
    population: 4237,
    area: 12.87,
    altitude: 235,
    longitude: 13.939745543971,
    latitude: 50.699804397398,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Chlumec_UL_CoA.png/90px-Chlumec_UL_CoA.png'
  },
  {
    name: 'Rožmitál pod Třemšínem',
    population: 4203,
    area: 53.01,
    altitude: 519,
    longitude: 13.864345146533,
    latitude: 49.602046222311,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Rozmitalptr.jpg/90px-Rozmitalptr.jpg'
  },
  {
    name: 'Uherský Ostroh',
    population: 4178,
    area: 26.53,
    altitude: 178,
    longitude: 17.389845788707,
    latitude: 48.985567674246,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Uhersk%C3%BD_Ostroh%2C_znak.gif/90px-Uhersk%C3%BD_Ostroh%2C_znak.gif'
  },
  {
    name: 'Kostelec nad Labem',
    population: 4156,
    area: 15.55,
    altitude: 172,
    longitude: 14.585598774844,
    latitude: 50.226603627713,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Kostelec_nad_Labem_CoA.jpg/90px-Kostelec_nad_Labem_CoA.jpg'
  },
  {
    name: 'Brušperk',
    population: 4149,
    area: 10.27,
    altitude: 265,
    longitude: 18.22213385715,
    latitude: 49.700084988917,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Bru%C5%A1perk_CoA.svg/90px-Bru%C5%A1perk_CoA.svg.png'
  },
  {
    name: 'Borovany',
    population: 4137,
    area: 42.33,
    altitude: 522,
    longitude: 14.642272395582,
    latitude: 48.898675230282,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Borovany.jpg/90px-Borovany.jpg'
  },
  {
    name: 'Nová Role',
    population: 4125,
    area: 13.53,
    altitude: 418,
    longitude: 12.784301710647,
    latitude: 50.271030375945,
    region: 'Karlovarský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Znak_m%C4%9Bsta_Nov%C3%A1_Role.svg/90px-Znak_m%C4%9Bsta_Nov%C3%A1_Role.svg.png'
  },
  {
    name: 'Blovice',
    population: 4114,
    area: 28.96,
    altitude: 387,
    longitude: 13.540135487589,
    latitude: 49.582293810018,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Blovice_znak.png/90px-Blovice_znak.png'
  },
  {
    name: 'Slatiňany',
    population: 4102,
    area: 15.61,
    altitude: 268,
    longitude: 15.813826736565,
    latitude: 49.921139960832,
    region: 'Pardubický',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Znak_m%C4%9Bsta_Slati%C5%88any.png/90px-Znak_m%C4%9Bsta_Slati%C5%88any.png'
  },
  {
    name: 'Horní Bříza',
    population: 4091,
    area: 14.55,
    altitude: 367,
    longitude: 13.355637956593,
    latitude: 49.840223429507,
    region: 'Plzeňský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Znak_m%C4%9Bsta_Horn%C3%AD_B%C5%99%C3%ADza.gif/90px-Znak_m%C4%9Bsta_Horn%C3%AD_B%C5%99%C3%ADza.gif'
  },
  {
    name: 'Sezemice (okres Pardubice)',
    population: 4062,
    area: 22.15,
    altitude: 225,
    longitude: 15.852764757724,
    latitude: 50.066548727454,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Sezemice-znak-mesta.png/90px-Sezemice-znak-mesta.png'
  },
  {
    name: 'Zdice',
    population: 4047,
    area: 13.81,
    altitude: 268,
    longitude: 13.977528115162,
    latitude: 49.912159387482,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/CoA_of_Zdice.svg/90px-CoA_of_Zdice.svg.png'
  },
  {
    name: 'Jaroměřice nad Rokytnou',
    population: 4032,
    area: 51.37,
    altitude: 422,
    longitude: 15.893317828738,
    latitude: 49.094127133927,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Jaromerice_nR_CoA.svg/90px-Jaromerice_nR_CoA.svg.png'
  },
  {
    name: 'Králíky',
    population: 4002,
    area: 52.78,
    altitude: 550,
    longitude: 16.760606276532,
    latitude: 50.083862294469,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kr%C3%A1l%C3%ADky.svg/90px-Kr%C3%A1l%C3%ADky.svg.png'
  },
  {
    name: 'Mnichovice',
    population: 3964,
    area: 8.32,
    altitude: 361,
    longitude: 14.709130720987,
    latitude: 49.936084569575,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Mnichovice%2C_znak.jpg/90px-Mnichovice%2C_znak.jpg'
  },
  {
    name: 'Police nad Metují',
    population: 3961,
    area: 24.41,
    altitude: 441,
    longitude: 16.233596891027,
    latitude: 50.536901799794,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Coat_of_arms_of_Police_nad_Metuj%C3%AD.gif/90px-Coat_of_arms_of_Police_nad_Metuj%C3%AD.gif'
  },
  {
    name: 'Jemnice',
    population: 3958,
    area: 32.49,
    altitude: 470,
    longitude: 15.569944859592,
    latitude: 49.019037310782,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Jemnice_CoA.png/90px-Jemnice_CoA.png'
  },
  {
    name: 'Přibyslav',
    population: 3957,
    area: 35.32,
    altitude: 475,
    longitude: 15.738585389384,
    latitude: 49.576885241921,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Znak_m%C4%9Bsta_P%C5%99ibyslav_hires.svg/90px-Znak_m%C4%9Bsta_P%C5%99ibyslav_hires.svg.png'
  },
  {
    name: 'Rajhrad',
    population: 3956,
    area: 9.49,
    altitude: 190,
    longitude: 16.603886389526,
    latitude: 49.090238953107,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Rajhrad_CZ_CoA.svg/90px-Rajhrad_CZ_CoA.svg.png'
  },
  {
    name: 'Dolní Benešov',
    population: 3939,
    area: 14.81,
    altitude: 231,
    longitude: 18.108402450994,
    latitude: 49.921002273849,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Doln%C3%AD_Bene%C5%A1ov_znak.png/90px-Doln%C3%AD_Bene%C5%A1ov_znak.png'
  },
  {
    name: 'Kamenický Šenov',
    population: 3923,
    area: 10.47,
    altitude: 525,
    longitude: 14.472978263424,
    latitude: 50.773661412598,
    region: 'Liberecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Kamenick%C3%BD_%C5%A0enov_CoA_CZ.svg/90px-Kamenick%C3%BD_%C5%A0enov_CoA_CZ.svg.png'
  },
  {
    name: 'Paskov',
    population: 3830,
    area: 11.8,
    altitude: 256,
    longitude: 18.290408503542,
    latitude: 49.73177254678,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Paskov_CoA.png/90px-Paskov_CoA.png'
  },
  {
    name: 'Velké Bílovice',
    population: 3818,
    area: 25.73,
    altitude: 176,
    longitude: 16.892269350624,
    latitude: 48.849310717964,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Velke_Bilovice.jpeg/90px-Coat_of_arms_of_Velke_Bilovice.jpeg'
  },
  {
    name: 'Velešín',
    population: 3796,
    area: 13.24,
    altitude: 548,
    longitude: 14.462517439026,
    latitude: 48.829564866244,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Vele%C5%A1%C3%ADn_znak.png/90px-Vele%C5%A1%C3%ADn_znak.png'
  },
  {
    name: 'Kostelec nad Černými lesy',
    population: 3773,
    area: 17.7,
    altitude: 391,
    longitude: 14.859282652392,
    latitude: 49.994100705528,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Cernykostelec.jpg/90px-Cernykostelec.jpg'
  },
  {
    name: 'Brtnice',
    population: 3761,
    area: 74.13,
    altitude: 515,
    longitude: 15.676443374626,
    latitude: 49.30699470864,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Brtnice_znak.gif/90px-Brtnice_znak.gif'
  },
  {
    name: 'Větřní',
    population: 3758,
    area: 27.71,
    altitude: 465,
    longitude: 14.286158877573,
    latitude: 48.774330573721,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Vetrni_znak.jpg/90px-Vetrni_znak.jpg'
  },
  {
    name: 'Stráž pod Ralskem',
    population: 3756,
    area: 21.58,
    altitude: 310,
    longitude: 14.801123326758,
    latitude: 50.702865967816,
    region: 'Liberecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Str%C3%A1%C5%BE_pod_Ralskem_CoA_CZ.svg/90px-Str%C3%A1%C5%BE_pod_Ralskem_CoA_CZ.svg.png'
  },
  {
    name: 'Smržovka',
    population: 3754,
    area: 14.81,
    altitude: 585,
    longitude: 15.246500406797,
    latitude: 50.738254442679,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Smr%C5%BEovka_CoA_CZ.png'
  },
  {
    name: 'Fryšták',
    population: 3729,
    area: 24.17,
    altitude: 271,
    longitude: 17.683480007889,
    latitude: 49.285206066577,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Frystak_CoA_CZ.jpg/90px-Frystak_CoA_CZ.jpg'
  },
  {
    name: 'Volary',
    population: 3712,
    area: 107.51,
    altitude: 760,
    longitude: 13.88658107426,
    latitude: 48.908902782981,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Volary_znak.png/90px-Volary_znak.png'
  },
  {
    name: 'Buštěhrad',
    population: 3703,
    area: 7.61,
    altitude: 322,
    longitude: 14.189049604516,
    latitude: 50.156020273004,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Bu%C5%A1t%C4%9Bhrad_znak.png/90px-Bu%C5%A1t%C4%9Bhrad_znak.png'
  },
  {
    name: 'Sázava (okres Benešov)',
    population: 3702,
    area: 20.41,
    altitude: 456,
    longitude: 14.896794718867,
    latitude: 49.871708476008,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sazava_%28Benesov%29_CoA_CZ.jpg/90px-Sazava_%28Benesov%29_CoA_CZ.jpg'
  },
  {
    name: 'Jablonné v Podještědí',
    population: 3685,
    area: 57.87,
    altitude: 315,
    longitude: 14.76063179631,
    latitude: 50.765345012501,
    region: 'Liberecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jablonn%C3%A9_v_Podje%C5%A1t%C4%9Bd%C3%AD_CoA_CZ.svg/90px-Jablonn%C3%A9_v_Podje%C5%A1t%C4%9Bd%C3%AD_CoA_CZ.svg.png'
  },
  {
    name: 'Zbýšov',
    population: 3684,
    area: 6.01,
    altitude: 348,
    longitude: 16.34952542846,
    latitude: 49.155276849127,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Znak_Zb%C3%BD%C5%A1ov_%28okres_Brno-venkov%29.gif/90px-Znak_Zb%C3%BD%C5%A1ov_%28okres_Brno-venkov%29.gif'
  },
  {
    name: 'Židlochovice',
    population: 3679,
    area: 5.93,
    altitude: 190,
    longitude: 16.618813305226,
    latitude: 49.039551985985,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/%C5%BDidlochovice_znak.png/90px-%C5%BDidlochovice_znak.png'
  },
  {
    name: 'Rájec-Jestřebí',
    population: 3672,
    area: 15.67,
    altitude: 295,
    longitude: 16.639046717886,
    latitude: 49.410967423017,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/R%C3%A1jecJest%C5%99eb%C3%AD_CoA.jpg/90px-R%C3%A1jecJest%C5%99eb%C3%AD_CoA.jpg'
  },
  {
    name: 'Nové Město pod Smrkem',
    population: 3663,
    area: 28.93,
    altitude: 465,
    longitude: 15.22954639252,
    latitude: 50.924963588909,
    region: 'Liberecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Nove_Mesto_pod_Smrkem_CoA_CZ.svg/90px-Nove_Mesto_pod_Smrkem_CoA_CZ.svg.png'
  },
  {
    name: 'Lom (okres Most)',
    population: 3655,
    area: 16.8,
    altitude: 294,
    longitude: 13.657390363555,
    latitude: 50.59336916511,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lom_znak.png/90px-Lom_znak.png'
  },
  {
    name: 'Dobřichovice',
    population: 3651,
    area: 10.92,
    altitude: 205,
    longitude: 14.27475687167,
    latitude: 49.927572663242,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Dobrichovice_CoA_CZ.svg/90px-Dobrichovice_CoA_CZ.svg.png'
  },
  {
    name: 'Kamenice nad Lipou',
    population: 3634,
    area: 31.54,
    altitude: 563,
    longitude: 15.075214609068,
    latitude: 49.303096203439,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Kamenice_nad_Lipou_znak.png/90px-Kamenice_nad_Lipou_znak.png'
  },
  {
    name: 'Lázně Bělohrad',
    population: 3625,
    area: 28.39,
    altitude: 291,
    longitude: 15.582779302884,
    latitude: 50.42879172604,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Znak_m%C4%9Bsta_L%C3%A1zn%C4%9B_B%C4%9Blohrad.jpg/90px-Znak_m%C4%9Bsta_L%C3%A1zn%C4%9B_B%C4%9Blohrad.jpg'
  },
  {
    name: 'Zlaté Hory',
    population: 3620,
    area: 85.93,
    altitude: 397,
    longitude: 17.396090652009,
    latitude: 50.263803148531,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Zlat%C3%A9_Hory_znak.jpg/90px-Zlat%C3%A9_Hory_znak.jpg'
  },
  {
    name: 'Lanžhot',
    population: 3608,
    area: 54.83,
    altitude: 164,
    longitude: 16.966936264446,
    latitude: 48.724453275107,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Znak_m%C4%9Bsta_Lan%C5%BEhot.jpg/90px-Znak_m%C4%9Bsta_Lan%C5%BEhot.jpg'
  },
  {
    name: 'Klecany',
    population: 3601,
    area: 10.16,
    altitude: 265,
    longitude: 14.411557378691,
    latitude: 50.176063401893,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Klecany_Herb.svg/90px-Klecany_Herb.svg.png'
  },
  {
    name: 'Řevnice',
    population: 3584,
    area: 10.14,
    altitude: 218,
    longitude: 14.235955055448,
    latitude: 49.914028256057,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/COA_%C5%98evnice.png/90px-COA_%C5%98evnice.png'
  },
  {
    name: 'Toužim',
    population: 3582,
    area: 98.53,
    altitude: 612,
    longitude: 12.985129225835,
    latitude: 50.060603889316,
    region: 'Karlovarský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Touzim_CZ_CoA.gif/90px-Touzim_CZ_CoA.gif'
  },
  {
    name: 'Benešov nad Ploučnicí',
    population: 3573,
    area: 9.77,
    altitude: 210,
    longitude: 14.312497327553,
    latitude: 50.741663932519,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CoA_of_Bene%C5%A1ov_nad_Plou%C4%8Dnic%C3%AD.svg/90px-CoA_of_Bene%C5%A1ov_nad_Plou%C4%8Dnic%C3%AD.svg.png'
  },
  {
    name: 'Nepomuk',
    population: 3550,
    area: 12.78,
    altitude: 449,
    longitude: 13.582292906584,
    latitude: 49.486259587175,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Nepomuk_znak.png/90px-Nepomuk_znak.png'
  },
  {
    name: 'Velké Opatovice',
    population: 3536,
    area: 25.93,
    altitude: 376,
    longitude: 16.679506811325,
    latitude: 49.612395778444,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Velk%C3%A9_Opatovice_znak.png/90px-Velk%C3%A9_Opatovice_znak.png'
  },
  {
    name: 'Stod',
    population: 3531,
    area: 20.04,
    altitude: 337,
    longitude: 13.16478397126,
    latitude: 49.639196063817,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Stod_CoA.jpg/90px-Stod_CoA.jpg'
  },
  {
    name: 'Suchdol nad Lužnicí',
    population: 3527,
    area: 63.58,
    altitude: 454,
    longitude: 14.876960231353,
    latitude: 48.893401070196,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Suchdol_nad_Lu%C5%BEnic%C3%AD_znak.jpg/90px-Suchdol_nad_Lu%C5%BEnic%C3%AD_znak.jpg'
  },
  {
    name: 'Velká Bystřice',
    population: 3516,
    area: 9.22,
    altitude: 290,
    longitude: 17.36401034063,
    latitude: 49.594235374559,
    region: 'Olomoucký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Coat_of_arms_of_Velk%C3%A1_Byst%C5%99ice.svg/90px-Coat_of_arms_of_Velk%C3%A1_Byst%C5%99ice.svg.png'
  },
  {
    name: 'Štěpánov (okres Olomouc)',
    population: 3512,
    area: 26.84,
    altitude: 232,
    longitude: 17.220452338219,
    latitude: 49.684048986897,
    region: 'Olomoucký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/%C5%A0t%C4%9Bp%C3%A1nov_znak.png/90px-%C5%A0t%C4%9Bp%C3%A1nov_znak.png'
  },
  {
    name: 'Březnice',
    population: 3511,
    area: 19.47,
    altitude: 462,
    longitude: 13.950670501077,
    latitude: 49.557721273425,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Breznice_znak.png/90px-Breznice_znak.png'
  },
  {
    name: 'Dobrovice',
    population: 3496,
    area: 24.64,
    altitude: 247,
    longitude: 14.962418289957,
    latitude: 50.369388230822,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dobrovice_CoA_CZ.svg/90px-Dobrovice_CoA_CZ.svg.png'
  },
  {
    name: 'Zliv',
    population: 3495,
    area: 14.21,
    altitude: 375,
    longitude: 14.366147357098,
    latitude: 49.066163345125,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Zliv_znak.png/90px-Zliv_znak.png'
  }
];

export default cities;
