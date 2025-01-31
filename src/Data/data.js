const cities = [
  {
    name: 'Praha',
    population: 1384732,
    area: 496.21,
    altitude: 399,
    longitude: 14.421388888889,
    latitude: 50.0875,
    region: 'Hl. m. Praha',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Coat_of_arms_of_Prague.svg/90px-Coat_of_arms_of_Prague.svg.png',
    hashFilename: '5ef66fc876fb0c44a53408499ba5045e.png'
  },
  {
    name: 'Brno',
    population: 400566,
    area: 230.18,
    altitude: 497,
    longitude: 16.608333333333,
    latitude: 49.195277777778,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Brno_%28znak%29.svg/90px-Brno_%28znak%29.svg.png',
    hashFilename: '91659f30d35048791dd0e2946e07f4d.png'
  },
  {
    name: 'Ostrava',
    population: 284765,
    area: 214.23,
    altitude: 339,
    longitude: 18.2925,
    latitude: 49.835555555556,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Ostrava_CoA_CZ.svg/90px-Ostrava_CoA_CZ.svg.png',
    hashFilename: 'e8ccda910b08840a1e06043510e9e175.png'
  },
  {
    name: 'Plzeň',
    population: 185599,
    area: 137.67,
    altitude: 322,
    longitude: 13.3825,
    latitude: 49.741388888889,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Plzen_small_CoA.png/90px-Plzen_small_CoA.png',
    hashFilename: '30528bcb18875434efaae0015a1e0ba4.png'
  },
  {
    name: 'Liberec',
    population: 107982,
    area: 106.09,
    altitude: 359,
    longitude: 15.05,
    latitude: 50.766666666667,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Znak_Liberec.svg/90px-Znak_Liberec.svg.png',
    hashFilename: '79a8db391f23f791084765442e3e6163.png'
  },
  {
    name: 'Olomouc',
    population: 102293,
    area: 103.33,
    altitude: 219,
    longitude: 17.250833333333,
    latitude: 49.593888888889,
    region: 'Olomoucký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Coat_of_arms_of_Olomouc%2C_city_in_the_Czech_Republic.svg/90px-Coat_of_arms_of_Olomouc%2C_city_in_the_Czech_Republic.svg.png',
    hashFilename: '2139c15fdc3d7bbf6ce89b2fcfa3470c.png'
  },
  {
    name: 'České Budějovice',
    population: 97377,
    area: 55.6,
    altitude: 395,
    longitude: 14.474722222222,
    latitude: 48.974722222222,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Coat_of_arms_of_%C4%8Cesk%C3%A9_Bud%C4%9Bjovice.svg/90px-Coat_of_arms_of_%C4%8Cesk%C3%A9_Bud%C4%9Bjovice.svg.png',
    hashFilename: '4b92a717cf7f6aef269a7649677b732f.png'
  },
  {
    name: 'Hradec Králové',
    population: 93906,
    area: 105.69,
    altitude: 235,
    longitude: 15.831944444444,
    latitude: 50.209166666667,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Hradec_Kralove_CoA_CZ.svg/90px-Hradec_Kralove_CoA_CZ.svg.png',
    hashFilename: '7a213f10ea8bea704ec72f4cce6609c8.png'
  },
  {
    name: 'Pardubice',
    population: 92362,
    area: 82.66,
    altitude: 227,
    longitude: 15.77916,
    latitude: 50.03861,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Pardubice_CoA_CZ.svg/90px-Pardubice_CoA_CZ.svg.png',
    hashFilename: 'd97ea49703c8807e1ce344247ca5185f.png'
  },
  {
    name: 'Ústí nad Labem',
    population: 91342,
    area: 93.97,
    altitude: 218,
    longitude: 14.041666666667,
    latitude: 50.659166666667,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/CoA_of_%C3%9Ast%C3%AD_nad_Labem.svg/90px-CoA_of_%C3%9Ast%C3%AD_nad_Labem.svg.png',
    hashFilename: '53bf507e72972c45e9a7357787d248a3.png'
  },
  {
    name: 'Zlín',
    population: 74255,
    area: 107.43,
    altitude: 230,
    longitude: 17.666944444444,
    latitude: 49.233055555556,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Zlin_-_znak.svg/90px-Zlin_-_znak.svg.png',
    hashFilename: '83ecab2f777de8c38437cce81e403e7.png'
  },
  {
    name: 'Havířov',
    population: 69694,
    area: 32.08,
    altitude: 260,
    longitude: 18.422777777778,
    latitude: 49.777777777778,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Coat_of_arms_of_Hav%C3%AD%C5%99ov.svg/90px-Coat_of_arms_of_Hav%C3%AD%C5%99ov.svg.png',
    hashFilename: 'ac3388adb2718faca8d4ff362b04ae59.png'
  },
  {
    name: 'Kladno',
    population: 69078,
    area: 36.97,
    altitude: 384,
    longitude: 14.105277777778,
    latitude: 50.143055555556,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Kladno_CoA.png/90px-Kladno_CoA.png',
    hashFilename: '526452903f4be7495b354103224486a6.png'
  },
  {
    name: 'Most',
    population: 63882,
    area: 86.94,
    altitude: 282,
    longitude: 13.636666666667,
    latitude: 50.503055555556,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Most_CoA.gif/90px-Most_CoA.gif',
    hashFilename: '8781b29d5ac13d64089d3da1902d0cd.gif'
  },
  {
    name: 'Opava',
    population: 55600,
    area: 90.61,
    altitude: 257,
    longitude: 17.904444444444,
    latitude: 49.938055555556,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Opava_CoA.svg/90px-Opava_CoA.svg.png',
    hashFilename: 'd4ec090cfd48a471d8eadbce16f43c0c.png'
  },
  {
    name: 'Jihlava',
    population: 53986,
    area: 87.87,
    altitude: 523,
    longitude: 15.590555555556,
    latitude: 49.400277777778,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Jihlava_CoA_CZ.svg/90px-Jihlava_CoA_CZ.svg.png',
    hashFilename: '914240dc3b154146d6551a8ae0d5ad33.png'
  },
  {
    name: 'Frýdek-Místek',
    population: 53938,
    area: 51.56,
    altitude: 291,
    longitude: 18.353611111111,
    latitude: 49.688055555556,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Znak_m%C4%9Bsta_Fr%C3%BDdek-M%C3%ADstek.png/90px-Znak_m%C4%9Bsta_Fr%C3%BDdek-M%C3%ADstek.png',
    hashFilename: '163dc5ff3ca0992e31511cb528cb4a99.png'
  },
  {
    name: 'Teplice',
    population: 50959,
    area: 23.78,
    altitude: 229,
    longitude: 13.816666666667,
    latitude: 50.633333333333,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/CoA_of_Teplice.svg/90px-CoA_of_Teplice.svg.png',
    hashFilename: '5bb11505a7ba242638566a0e601e77c4.png'
  },
  {
    name: 'Karviná',
    population: 49724,
    area: 57.52,
    altitude: 221,
    longitude: 18.542777777778,
    latitude: 49.854166666667,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Karwina_herb.svg/90px-Karwina_herb.svg.png',
    hashFilename: '23c378263001bb655323f3d289276559.png'
  },
  {
    name: 'Karlovy Vary',
    population: 49353,
    area: 59.08,
    altitude: 447,
    longitude: 12.8725,
    latitude: 50.230555555556,
    region: 'Karlovarský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Karlovy_Vary_COA.svg/90px-Karlovy_Vary_COA.svg.png',
    hashFilename: 'e0695ae1dfd9a839a5bc4f6eaa3cfaea.png'
  },
  {
    name: 'Chomutov',
    population: 47023,
    area: 29.25,
    altitude: 340,
    longitude: 13.411111111111,
    latitude: 50.462777777778,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/ChomutovCoA.PNG/90px-ChomutovCoA.PNG',
    hashFilename: '3c61197bf118d990b8bd1242ebed0f7c.PNG'
  },
  {
    name: 'Děčín',
    population: 46799,
    area: 117.7,
    altitude: 138,
    longitude: 14.196111111111,
    latitude: 50.773611111111,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Coat_of_arms_of_D%C4%9B%C4%8D%C3%ADn.jpg/90px-Coat_of_arms_of_D%C4%9B%C4%8D%C3%ADn.jpg',
    hashFilename: 'f377f7fb9fc2cd38aadb009bcd7f4f62.jpg'
  },
  {
    name: 'Mladá Boleslav',
    population: 46428,
    area: 28.9,
    altitude: 241,
    longitude: 14.906388888889,
    latitude: 50.4125,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Mlad%C3%A1_Boleslav_CoA_CZ.svg/90px-Mlad%C3%A1_Boleslav_CoA_CZ.svg.png',
    hashFilename: '28fc73fc7dc8efdfd9775ee680f78418.png'
  },
  {
    name: 'Jablonec nad Nisou',
    population: 46226,
    area: 31.38,
    altitude: 518,
    longitude: 15.17,
    latitude: 50.727777777778,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Jablonec-znak.svg/90px-Jablonec-znak.svg.png',
    hashFilename: '7d2a4a34ee81b1e415484a34bc9bc27e.png'
  },
  {
    name: 'Prostějov',
    population: 43563,
    area: 39.04,
    altitude: 223,
    longitude: 17.110555555556,
    latitude: 49.472222222222,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Prostejov_CoA_CZ.png/90px-Prostejov_CoA_CZ.png',
    hashFilename: '152263110f2df0b772fb7e3f6b5a428e.png'
  },
  {
    name: 'Přerov',
    population: 41661,
    area: 58.45,
    altitude: 210,
    longitude: 17.451111111111,
    latitude: 49.455555555556,
    region: 'Olomoucký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Znak_m%C4%9Bsta_P%C5%99erov.svg/90px-Znak_m%C4%9Bsta_P%C5%99erov.svg.png',
    hashFilename: '9fdd8d51c55d49d4786cd9c534a55381.png'
  },
  {
    name: 'Česká Lípa',
    population: 37483,
    area: 66.1,
    altitude: 258,
    longitude: 14.53774710235,
    latitude: 50.68558429129,
    region: 'Liberecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/%C4%8Cesk%C3%A1_L%C3%ADpa_CoA_CZ.svg/90px-%C4%8Cesk%C3%A1_L%C3%ADpa_CoA_CZ.svg.png',
    hashFilename: 'b651f83d9038f12df80e59ebad38bdf6.png'
  },
  {
    name: 'Třebíč',
    population: 34797,
    area: 57.59,
    altitude: 405,
    longitude: 15.881675935311,
    latitude: 49.214967400263,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/CoA_of_Trebic.svg/90px-CoA_of_Trebic.svg.png',
    hashFilename: 'e63f7d7a5c1d202deded6d08191c3236.png'
  },
  {
    name: 'Tábor',
    population: 34370,
    area: 62.22,
    altitude: 437,
    longitude: 14.657835974031,
    latitude: 49.414485338494,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Tabor_CoA_CZ.png/90px-Tabor_CoA_CZ.png',
    hashFilename: '19d7fd45cb325fcde2ce0eef3d911979.png'
  },
  {
    name: 'Třinec',
    population: 34266,
    area: 85.36,
    altitude: 306,
    longitude: 18.670814768494,
    latitude: 49.677609314509,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Coat_of_arms_of_T%C5%99inec.svg/90px-Coat_of_arms_of_T%C5%99inec.svg.png',
    hashFilename: '98a18fef2acca90a90bbda69c7c82edf.png'
  },
  {
    name: 'Znojmo',
    population: 34160,
    area: 65.9,
    altitude: 290,
    longitude: 16.048796054219,
    latitude: 48.855540667876,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/ZNOJMO_znak_m%C4%9Bsta.png/90px-ZNOJMO_znak_m%C4%9Bsta.png',
    hashFilename: '82087c747717415ae90b983f814a80ef.png'
  },
  {
    name: 'Kolín',
    population: 33229,
    area: 34.99,
    altitude: 220,
    longitude: 15.200633745928,
    latitude: 50.028193990808,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kol%C3%ADn.svg/90px-Kol%C3%ADn.svg.png',
    hashFilename: 'e4dab8a533831606d7d4729ee2f3f9e1.png'
  },
  {
    name: 'Příbram',
    population: 32992,
    area: 33.45,
    altitude: 502,
    longitude: 14.010474512485,
    latitude: 49.68996461067,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/P%C5%99%C3%ADbram_CoA_CZ.svg/90px-P%C5%99%C3%ADbram_CoA_CZ.svg.png',
    hashFilename: '6be1e3ca03f25ac85ddaf6e0cfb4ac30.png'
  },
  {
    name: 'Cheb',
    population: 32825,
    area: 96.35,
    altitude: 459,
    longitude: 12.373995588434,
    latitude: 50.079759165169,
    region: 'Karlovarský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Cheb_coat_of_arms.svg/90px-Cheb_coat_of_arms.svg.png',
    hashFilename: 'ea830ab8d757a341f8364373d005b230.png'
  },
  {
    name: 'Písek',
    population: 30986,
    area: 63.23,
    altitude: 378,
    longitude: 14.147530601921,
    latitude: 49.30888068684,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/P%C3%ADsek_CoA.svg/90px-P%C3%ADsek_CoA.svg.png',
    hashFilename: '519b2ef1f5beaef7bb649a0b8bc8718b.png'
  },
  {
    name: 'Trutnov',
    population: 29584,
    area: 103.32,
    altitude: 414,
    longitude: 15.912798547953,
    latitude: 50.561045737535,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Trutnov_CoA_CZ_old.svg/90px-Trutnov_CoA_CZ_old.svg.png',
    hashFilename: 'aefc3c3db7f8207520923983cee66859.png'
  },
  {
    name: 'Kroměříž',
    population: 28089,
    area: 50.98,
    altitude: 201,
    longitude: 17.393134863736,
    latitude: 49.297859972783,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/CZE_Krom%C4%9B%C5%99%C3%AD%C5%BE_COA.svg/90px-CZE_Krom%C4%9B%C5%99%C3%AD%C5%BE_COA.svg.png',
    hashFilename: '887330ed60c690209a97b11232b46273.png'
  },
  {
    name: 'Orlová',
    population: 27794,
    area: 24.67,
    altitude: 215,
    longitude: 18.43015544552,
    latitude: 49.845247990058,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Orlov%C3%A1_znak.png/90px-Orlov%C3%A1_znak.png',
    hashFilename: '10870802a430e43d7210db99432571dd.png'
  },
  {
    name: 'Vsetín',
    population: 25255,
    area: 57.61,
    altitude: 342,
    longitude: 17.996209032744,
    latitude: 49.338702987886,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Coat_of_arms_of_Vset%C3%ADn.svg/90px-Coat_of_arms_of_Vset%C3%ADn.svg.png',
    hashFilename: 'a1f440d452261c64fc4a55186fd2ae4c.png'
  },
  {
    name: 'Šumperk',
    population: 24969,
    area: 27.88,
    altitude: 330,
    longitude: 16.9706654352,
    latitude: 49.965299915762,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Sumperk_CoA_CZ.png/90px-Sumperk_CoA_CZ.png',
    hashFilename: '2b78bbf375327d28523778f91f7f0b5c.png'
  },
  {
    name: 'Uherské Hradiště',
    population: 24933,
    area: 21.26,
    altitude: 179,
    longitude: 17.459691353499,
    latitude: 49.069757549526,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/UH_znak.png/90px-UH_znak.png',
    hashFilename: '61b04555782fad2d45b79fc9a365d93f.png'
  },
  {
    name: 'Břeclav',
    population: 24863,
    area: 77.19,
    altitude: 158,
    longitude: 16.882020775128,
    latitude: 48.758991122507,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/B%C5%99eclav_znak.png/90px-B%C5%99eclav_znak.png',
    hashFilename: '80104125de56f972f41f271aa2d45f8d.png'
  },
  {
    name: 'Havlíčkův Brod',
    population: 23746,
    area: 64.93,
    altitude: 422,
    longitude: 15.580727658514,
    latitude: 49.607899638305,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Havl%C3%AD%C4%8Dk%C5%AFv_Brod_znak.png/90px-Havl%C3%AD%C4%8Dk%C5%AFv_Brod_znak.png',
    hashFilename: '3244d3e1a705dae8fd2866b92b2ff4b5.png'
  },
  {
    name: 'Hodonín',
    population: 23657,
    area: 63.31,
    altitude: 167,
    longitude: 17.132439069118,
    latitude: 48.848950584361,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hodonin_CoA_CZ.png/90px-Hodonin_CoA_CZ.png',
    hashFilename: 'd2046666b0d6178d69f5b77622f848a6.png'
  },
  {
    name: 'Chrudim',
    population: 23441,
    area: 33.21,
    altitude: 240,
    longitude: 15.795635790875,
    latitude: 49.951136279202,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Chrudim_CoA_CZ.svg/90px-Chrudim_CoA_CZ.svg.png',
    hashFilename: '77af96e7a5cbc319fc1f1fd6219fef84.png'
  },
  {
    name: 'Český Těšín',
    population: 23282,
    area: 33.8,
    altitude: 427,
    longitude: 18.62617038595,
    latitude: 49.746110801139,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Cesky_Tesin_CoA.png/90px-Cesky_Tesin_CoA.png',
    hashFilename: '1dabfe19ef088a7d8c6cce412bc10e86.png'
  },
  {
    name: 'Nový Jičín',
    population: 22993,
    area: 36.52,
    altitude: 285,
    longitude: 18.010308756103,
    latitude: 49.594368444158,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Coa_Novy_Jicin.jpg/90px-Coa_Novy_Jicin.jpg',
    hashFilename: '8622a0c71dfce01de97a16965d22486d.jpg'
  },
  {
    name: 'Litoměřice',
    population: 22983,
    area: 17.99,
    altitude: 136,
    longitude: 14.131899491403,
    latitude: 50.53355947692,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Litom%C4%9B%C5%99ice_CoA_CZ.svg/90px-Litom%C4%9B%C5%99ice_CoA_CZ.svg.png',
    hashFilename: 'dd6e482b43fdfc519fd538ff730e3782.png'
  },
  {
    name: 'Klatovy',
    population: 22938,
    area: 80.85,
    altitude: 405,
    longitude: 13.29508891337,
    latitude: 49.395625338265,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Klatovy-znak.svg/90px-Klatovy-znak.svg.png',
    hashFilename: 'cf5e2beceb60929fc8c0b4a5d1d7a41.png'
  },
  {
    name: 'Valašské Meziříčí',
    population: 22833,
    area: 35.44,
    altitude: 294,
    longitude: 17.97115355859,
    latitude: 49.471799519597,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/CoA_of_Vala%C5%A1sk%C3%A9_Mezi%C5%99%C3%AD%C4%8D%C3%AD.svg/90px-CoA_of_Vala%C5%A1sk%C3%A9_Mezi%C5%99%C3%AD%C4%8D%C3%AD.svg.png',
    hashFilename: '24dee9a4670aff333e4c0ab40f01da1c.png'
  },
  {
    name: 'Krnov',
    population: 22716,
    area: 44.29,
    altitude: 316,
    longitude: 17.703908920138,
    latitude: 50.089666916291,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Krnov_znak.png/90px-Krnov_znak.png',
    hashFilename: 'a4871dfa4fbb92f954bb87ef0ac3b37.png'
  },
  {
    name: 'Strakonice',
    population: 22522,
    area: 34.68,
    altitude: 393,
    longitude: 13.902396874574,
    latitude: 49.261497897079,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Coat_of_arms_of_Strakonice.jpg/90px-Coat_of_arms_of_Strakonice.jpg',
    hashFilename: '33e7c77b251d3bd713aa67c16f97b437.jpg'
  },
  {
    name: 'Litvínov',
    population: 22512,
    area: 40.7,
    altitude: 338,
    longitude: 13.611212988257,
    latitude: 50.60077979319,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Litv%C3%ADnov_znak.png/90px-Litv%C3%ADnov_znak.png',
    hashFilename: 'ff27d0e26c71f9c00ebe1a716f91a957.png'
  },
  {
    name: 'Sokolov',
    population: 22155,
    area: 22.92,
    altitude: 401,
    longitude: 12.640181474439,
    latitude: 50.181415762132,
    region: 'Karlovarský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Sokolov_COA.svg/90px-Sokolov_COA.svg.png',
    hashFilename: 'abaa65caca297b55c16786775be5143d.png'
  },
  {
    name: 'Kopřivnice',
    population: 21604,
    area: 27.49,
    altitude: 320,
    longitude: 18.144833283338,
    latitude: 49.599461028116,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Znak_m%C4%9Bsta_Kop%C5%99ivnice.svg/90px-Znak_m%C4%9Bsta_Kop%C5%99ivnice.svg.png',
    hashFilename: '4d922326ba1595ee06593360e3822134.png'
  },
  {
    name: 'Kutná Hora',
    population: 21556,
    area: 33.07,
    altitude: 254,
    longitude: 15.268225887967,
    latitude: 49.948444972662,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/COA_Kutna_Hora.png/90px-COA_Kutna_Hora.png',
    hashFilename: 'c3f2e10de33c9955ed8ced127c2a3475.png'
  },
  {
    name: 'Beroun',
    population: 21272,
    area: 31.25,
    altitude: 235,
    longitude: 14.072061165906,
    latitude: 49.963908175611,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Beroun_znak.png/90px-Beroun_znak.png',
    hashFilename: '30534e2c7fd95729f270d00a61c279a6.png'
  },
  {
    name: 'Jindřichův Hradec',
    population: 20747,
    area: 74.29,
    altitude: 475,
    longitude: 15.003024549245,
    latitude: 49.144110393651,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Jind%C5%99ich%C5%AFv_Hradec%2C_znak.png/90px-Jind%C5%99ich%C5%AFv_Hradec%2C_znak.png',
    hashFilename: '7dbb0834216b83d51d280e8759fe5750.png'
  },
  {
    name: 'Žďár nad Sázavou',
    population: 20525,
    area: 37.06,
    altitude: 580,
    longitude: 15.939278339801,
    latitude: 49.562675487861,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Zdar_nad_Sazavou_CoA.png/90px-Zdar_nad_Sazavou_CoA.png',
    hashFilename: '434ba009662f99843ad45c1c5dea8431.png'
  },
  {
    name: 'Bohumín',
    population: 20519,
    area: 31.03,
    altitude: 198,
    longitude: 18.357595239984,
    latitude: 49.90408983288,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bohumin_CoA_CZ.svg/90px-Bohumin_CoA_CZ.svg.png',
    hashFilename: '24c7b93eaf9f62310957e8b8c7222227.png'
  },
  {
    name: 'Vyškov',
    population: 20498,
    area: 50.47,
    altitude: 254,
    longitude: 16.998993221633,
    latitude: 49.277487239217,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Znak_m%C4%9Bsta_Vy%C5%A1kova.svg/90px-Znak_m%C4%9Bsta_Vy%C5%A1kova.svg.png',
    hashFilename: '723ae3dfc8a3e20c8a6009b8d78fb324.png'
  },
  {
    name: 'Mělník',
    population: 20350,
    area: 24.96,
    altitude: 215,
    longitude: 14.474193495734,
    latitude: 50.35057067972,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/M%C4%9Bln%C3%ADk_CoA_CZ.svg/90px-M%C4%9Bln%C3%ADk_CoA_CZ.svg.png',
    hashFilename: 'e6eae959ed20d3cda4818e728fa432e5.png'
  },
  {
    name: 'Blansko',
    population: 20185,
    area: 44.97,
    altitude: 276,
    longitude: 16.643174766744,
    latitude: 49.363160582771,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Blansko_CoA_CZ.svg/90px-Blansko_CoA_CZ.svg.png',
    hashFilename: 'e726de1982973fd0383c754ef72e8c56.png'
  },
  {
    name: 'Brandýs nad Labem-Stará Boleslav',
    population: 20073,
    area: 22.65,
    altitude: 169,
    longitude: 14.663332953497,
    latitude: 50.187160680032,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Gerb_Brand%C3%BDs_nad_Labem-Star%C3%A1_Boleslav.png/90px-Gerb_Brand%C3%BDs_nad_Labem-Star%C3%A1_Boleslav.png',
    hashFilename: '3d04a6f80b93a8a479625f47deadcf2d.png'
  },
  {
    name: 'Náchod',
    population: 20036,
    area: 33.34,
    altitude: 347,
    longitude: 16.16297400854,
    latitude: 50.416738226612,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/N%C3%A1chod_CoA_CZ.svg/90px-N%C3%A1chod_CoA_CZ.svg.png',
    hashFilename: '34078160731e1e065353ff281186e4c.png'
  },
  {
    name: 'Jirkov',
    population: 19323,
    area: 17.13,
    altitude: 305,
    longitude: 13.447786301898,
    latitude: 50.499890572913,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jirkov_CoA_CZ.png/90px-Jirkov_CoA_CZ.png',
    hashFilename: '52a7bca8eaa67aa860b070e8d758eb8a.png'
  },
  {
    name: 'Žatec',
    population: 19046,
    area: 42.68,
    altitude: 233,
    longitude: 13.545859487384,
    latitude: 50.327264913574,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Znak_m%C4%9Bsta_%C5%BDatec.png/90px-Znak_m%C4%9Bsta_%C5%BDatec.png',
    hashFilename: '9e8d627fb658581406f6498cfa15f6ee.png'
  },
  {
    name: 'Kralupy nad Vltavou',
    population: 18782,
    area: 21.9,
    altitude: 179,
    longitude: 14.311574668457,
    latitude: 50.241148972524,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Kralupy_nad_Vltavou_znak.png/90px-Kralupy_nad_Vltavou_znak.png',
    hashFilename: 'af6ce8666bbc2cdcf115e3a780e77c5c.png'
  },
  {
    name: 'Kadaň',
    population: 18165,
    area: 65.62,
    altitude: 300,
    longitude: 13.271397346217,
    latitude: 50.37608553522,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Coat_of_arms_of_Kada%C5%88.svg/90px-Coat_of_arms_of_Kada%C5%88.svg.png',
    hashFilename: '37a6d7a71c4f7c2469e4f01b70dd90c2.png'
  },
  {
    name: 'Louny',
    population: 18053,
    area: 24.14,
    altitude: 185,
    longitude: 13.796762432686,
    latitude: 50.357078457688,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Louny_CoA_CZ.svg/90px-Louny_CoA_CZ.svg.png',
    hashFilename: '91fe4122c87bcdd4aa0df8ff44de575f.png'
  },
  {
    name: 'Hranice (okres Přerov)',
    population: 18024,
    area: 49.78,
    altitude: 250,
    longitude: 17.734723291716,
    latitude: 49.547963974257,
    region: 'Olomoucký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Hranice_na_Morav%C4%9B_znak.png/90px-Hranice_na_Morav%C4%9B_znak.png',
    hashFilename: '3aca5d74bb6aa913dd70a9797c72cea1.png'
  },
  {
    name: 'Otrokovice',
    population: 17597,
    area: 19.63,
    altitude: 190,
    longitude: 17.530780558281,
    latitude: 49.209921755941,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Znak_mesta_otrokovice.svg/90px-Znak_mesta_otrokovice.svg.png',
    hashFilename: '4ee9d19fa2c0c6dbd427d652002b6a02.png'
  },
  {
    name: 'Benešov',
    population: 17035,
    area: 46.87,
    altitude: 368,
    longitude: 14.687020558215,
    latitude: 49.781695568859,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Benesov_CoA_CZ.svg/90px-Benesov_CoA_CZ.svg.png',
    hashFilename: '88a732cecb06a886c6d8c3b8062c7ce9.png'
  },
  {
    name: 'Říčany',
    population: 16955,
    area: 25.81,
    altitude: 341,
    longitude: 14.654334421235,
    latitude: 49.991746433504,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/CoA_Ricany.png/90px-CoA_Ricany.png',
    hashFilename: 'ab5093be011b3534f22be525c529e715.png'
  },
  {
    name: 'Slaný',
    population: 16740,
    area: 35.11,
    altitude: 234,
    longitude: 14.087014267434,
    latitude: 50.230541170014,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Slan%C3%BD_znak.png/90px-Slan%C3%BD_znak.png',
    hashFilename: 'fc8ad92499906e79385b094c850ca20c.png'
  },
  {
    name: 'Uherský Brod',
    population: 16444,
    area: 52.06,
    altitude: 251,
    longitude: 17.647153295745,
    latitude: 49.025133430958,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Znak_m%C4%9Bsta_Uhersk%C3%BD_Brod.svg/90px-Znak_m%C4%9Bsta_Uhersk%C3%BD_Brod.svg.png',
    hashFilename: 'c31fa847e9cee16ec8cc02273e3fb19b.png'
  },
  {
    name: 'Pelhřimov',
    population: 16420,
    area: 95.28,
    altitude: 494,
    longitude: 15.223389364189,
    latitude: 49.431396763393,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pelhrimov.gif/90px-Pelhrimov.gif',
    hashFilename: '22b0572e0532026d20eb7889c1e3c8a1.gif'
  },
  {
    name: 'Jičín',
    population: 16230,
    area: 24.95,
    altitude: 287,
    longitude: 15.3516528,
    latitude: 50.4370452,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jicin_CoA_CZ.svg/90px-Jicin_CoA_CZ.svg.png',
    hashFilename: '16c9950dba0a0b4a64a508bbb9a9a7b5.png'
  },
  {
    name: 'Neratovice',
    population: 15025,
    area: 20.0,
    altitude: 162,
    longitude: 14.517675172798,
    latitude: 50.259331649996,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Znak_m%C4%9Bsta_Neratovice.png/90px-Znak_m%C4%9Bsta_Neratovice.png',
    hashFilename: '4f6cf9ed10ff217e6d17cb4387ed5457.png'
  },
  {
    name: 'Rožnov pod Radhoštěm',
    population: 16151,
    area: 39.48,
    altitude: 378,
    longitude: 18.143045316957,
    latitude: 49.45851736056,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Ro%C5%BEnov_pod_Radho%C5%A1t%C4%9Bm_znak.png/90px-Ro%C5%BEnov_pod_Radho%C5%A1t%C4%9Bm_znak.png',
    hashFilename: 'd518b6b53e41b3d59c0b9f4ce55a3c2c.png'
  },
  {
    name: 'Svitavy',
    population: 16108,
    area: 31.33,
    altitude: 435,
    longitude: 16.468338539525,
    latitude: 49.755965917692,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Svitavy_znak_2.jpeg/90px-Svitavy_znak_2.jpeg',
    hashFilename: '2958c78c92c48806ffe4c0e72a79fcf1.jpeg'
  },
  {
    name: 'Ostrov (okres Karlovy Vary)',
    population: 15825,
    area: 50.41,
    altitude: 398,
    longitude: 12.939153516476,
    latitude: 50.306035004821,
    region: 'Karlovarský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/M%C4%9Bsto-Ostrov-znak.png/90px-M%C4%9Bsto-Ostrov-znak.png',
    hashFilename: 'cab1fb0573b485293088b51703b9c534.png'
  },
  {
    name: 'Rakovník',
    population: 15739,
    area: 18.5,
    altitude: 322,
    longitude: 13.733472751214,
    latitude: 50.103792787995,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Rakovnik_znak.jpg/90px-Rakovnik_znak.jpg',
    hashFilename: 'd00cea449db1036b7603daf18da17b33.jpg'
  },
  {
    name: 'Nymburk',
    population: 15510,
    area: 20.59,
    altitude: 193,
    longitude: 15.041747256066,
    latitude: 50.186115487846,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Nymburk_CoA_CZ.jpg/90px-Nymburk_CoA_CZ.jpg',
    hashFilename: '59cbe1849eb175fb5cf7b7bf78516f7.jpg'
  },
  {
    name: 'Dvůr Králové nad Labem',
    population: 15339,
    area: 35.84,
    altitude: 300,
    longitude: 15.814108741637,
    latitude: 50.431763800828,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2019_coat_of_arms_of_Dv%C5%AFr_Kr%C3%A1lov%C3%A9_nad_Labem.png/90px-2019_coat_of_arms_of_Dv%C5%AFr_Kr%C3%A1lov%C3%A9_nad_Labem.png',
    hashFilename: 'b215e1ab0264dbbafbb18995dc58216a.png'
  },
  {
    name: 'Bruntál',
    population: 15244,
    area: 29.34,
    altitude: 545,
    longitude: 17.464759014801,
    latitude: 49.988449251745,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Coat_of_arms_of_Brunt%C3%A1l.jpg/90px-Coat_of_arms_of_Brunt%C3%A1l.jpg',
    hashFilename: 'e1db85f8c061fa58afb1a49b922ef9e9.jpg'
  },
  {
    name: 'Poděbrady',
    population: 15156,
    area: 33.68,
    altitude: 185,
    longitude: 15.118884780406,
    latitude: 50.142477809038,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Znak_m%C4%9Bsta_Pod%C4%9Bbrady.gif/90px-Znak_m%C4%9Bsta_Pod%C4%9Bbrady.gif',
    hashFilename: '34ac7374d035b01e0ab6308b53c1c31f.gif'
  },
  {
    name: 'Česká Třebová',
    population: 15119,
    area: 40.99,
    altitude: 375,
    longitude: 16.447334999548,
    latitude: 49.90191270808,
    region: 'Pardubický',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%C4%8Cesk%C3%A1_T%C5%99ebov%C3%A1.svg/90px-%C4%8Cesk%C3%A1_T%C5%99ebov%C3%A1.svg.png',
    hashFilename: 'd807f08a4b6d19d6b5a3750e2cea3ee5.png'
  },
  {
    name: 'Varnsdorf',
    population: 14716,
    area: 26.23,
    altitude: 332,
    longitude: 14.618353683386,
    latitude: 50.911612411446,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/COA_Varnsdorf.png/90px-COA_Varnsdorf.png',
    hashFilename: '34c97c91e9182cde967aa6ed99e48221.png'
  },
  {
    name: 'Bílina',
    population: 14580,
    area: 32.51,
    altitude: 207,
    longitude: 13.775445246997,
    latitude: 50.548631074934,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/B%C3%ADlina_m%C4%9Bsto_znak.png/90px-B%C3%ADlina_m%C4%9Bsto_znak.png',
    hashFilename: 'd720c9b8a698108b6fa449faeab62a6a.png'
  },
  {
    name: 'Turnov',
    population: 14502,
    area: 22.71,
    altitude: 260,
    longitude: 15.156899388718,
    latitude: 50.587341607858,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Turnov_CoA_CZ.svg/90px-Turnov_CoA_CZ.svg.png',
    hashFilename: 'efa3612eefc059d7777f0a57efe1d30b.png'
  },
  {
    name: 'Tachov',
    population: 14468,
    area: 40.85,
    altitude: 483,
    longitude: 12.633709213451,
    latitude: 49.795398066933,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Tachov_znak.svg/90px-Tachov_znak.svg.png',
    hashFilename: '8c2ac6a195465c414b4cb72bab898fa6.png'
  },
  {
    name: 'Rokycany',
    population: 14386,
    area: 30.67,
    altitude: 362,
    longitude: 13.594638741285,
    latitude: 49.742793661264,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Rokycany_CoA_CZ.png/90px-Rokycany_CoA_CZ.png',
    hashFilename: 'bddd221d7f0f22fa0eca50dd1506af8d.png'
  },
  {
    name: 'Mariánské Lázně',
    population: 14225,
    area: 51.79,
    altitude: 578,
    longitude: 12.701249703911,
    latitude: 49.964703891769,
    region: 'Karlovarský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Mari%C3%A1nsk%C3%A9_L%C3%A1zn%C4%9B_CoA.png/90px-Mari%C3%A1nsk%C3%A9_L%C3%A1zn%C4%9B_CoA.png',
    hashFilename: '191e350d391859298e1588e45659a604.png'
  },
  {
    name: 'Klášterec nad Ohří',
    population: 14175,
    area: 53.79,
    altitude: 320,
    longitude: 13.171368113331,
    latitude: 50.384556821405,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Coat_of_arms_of_Kl%C3%A1%C5%A1terec_nad_Oh%C5%99%C3%AD.gif/90px-Coat_of_arms_of_Kl%C3%A1%C5%A1terec_nad_Oh%C5%99%C3%AD.gif',
    hashFilename: 'fd595f05d6aa197e9e1f7a8b67508290.gif'
  },
  {
    name: 'Ústí nad Orlicí',
    population: 14098,
    area: 36.37,
    altitude: 340,
    longitude: 16.393670305445,
    latitude: 49.973904297163,
    region: 'Pardubický',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/%C3%9Ast%C3%AD_nad_Orlic%C3%AD.svg/90px-%C3%9Ast%C3%AD_nad_Orlic%C3%AD.svg.png',
    hashFilename: '456ed630150c4a93029faabe53498821.png'
  },
  {
    name: 'Milovice',
    population: 13920,
    area: 28.31,
    altitude: 221,
    longitude: 14.888710216255,
    latitude: 50.226024627414,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Milovice-znak.svg/90px-Milovice-znak.svg.png',
    hashFilename: 'fcc1d2e4f525d9dee749e56e1693adcd.png'
  },
  {
    name: 'Zábřeh',
    population: 13444,
    area: 34.59,
    altitude: 285,
    longitude: 16.872280013113,
    latitude: 49.882620486561,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Z%C3%A1breh_znak.png/90px-Z%C3%A1breh_znak.png',
    hashFilename: 'c86bae5dda9cbef9ac991e85f74b3a60.png'
  },
  {
    name: 'Hlučín',
    population: 13421,
    area: 21.14,
    altitude: 241,
    longitude: 18.19200490075,
    latitude: 49.897939786775,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hlu%C4%8D%C3%ADn_znak.png/90px-Hlu%C4%8D%C3%ADn_znak.png',
    hashFilename: '4bc771a6cef0aebe9047cb051585df13.png'
  },
  {
    name: 'Šternberk',
    population: 13264,
    area: 48.79,
    altitude: 268,
    longitude: 17.298931346408,
    latitude: 49.73045283333,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/%C5%A0ternberk_znak.png/90px-%C5%A0ternberk_znak.png',
    hashFilename: 'fe5dceea5e138c2804658997c72bb86e.png'
  },
  {
    name: 'Český Krumlov',
    population: 12944,
    area: 22.17,
    altitude: 492,
    longitude: 14.31520771066,
    latitude: 48.810990441614,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/CZ_%C4%8Cesk%C3%BD_Krumlov_COA.svg/90px-CZ_%C4%8Cesk%C3%BD_Krumlov_COA.svg.png',
    hashFilename: '7265a935e5612e5ee3402548a59f81b2.png'
  },
  {
    name: 'Roudnice nad Labem',
    population: 12823,
    area: 16.67,
    altitude: 195,
    longitude: 14.261840817268,
    latitude: 50.425361080625,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Roudnice_nad_Labem_CoA_CZ.svg/90px-Roudnice_nad_Labem_CoA_CZ.svg.png',
    hashFilename: 'f47a8a002bf1d02a8ea1be5ce278eb53.png'
  },
  {
    name: 'Aš',
    population: 12783,
    area: 55.86,
    altitude: 666,
    longitude: 12.195074300926,
    latitude: 50.223996008844,
    region: 'Karlovarský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Coat_of_arms_of_A%C5%A1%2C_Cheb.svg/90px-Coat_of_arms_of_A%C5%A1%2C_Cheb.svg.png',
    hashFilename: '71211ae6166ae8f4e2b17b27ad96b97e.png'
  },
  {
    name: 'Krupka',
    population: 12779,
    area: 46.61,
    altitude: 300,
    longitude: 13.858256809864,
    latitude: 50.684576839145,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Krupka-znak.png/90px-Krupka-znak.png',
    hashFilename: 'e85b9d3827787d54341c7b6c5bb6ff39.png'
  },
  {
    name: 'Chodov (okres Sokolov)',
    population: 12649,
    area: 14.26,
    altitude: 418,
    longitude: 12.753403883747,
    latitude: 50.241450598051,
    region: 'Karlovarský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Chodov_znak.png/90px-Chodov_znak.png',
    hashFilename: '8b9d05d802a908b751acd537505ff63d.png'
  },
  {
    name: 'Jaroměř',
    population: 12541,
    area: 23.95,
    altitude: 254,
    longitude: 15.921447438363,
    latitude: 50.356235289292,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Jarom%C4%9B%C5%99_znak.png/90px-Jarom%C4%9B%C5%99_znak.png',
    hashFilename: '8db0e42fc7b6b2556703c168b789d7ed.png'
  },
  {
    name: 'Čelákovice',
    population: 12463,
    area: 15.88,
    altitude: 184,
    longitude: 14.750119929994,
    latitude: 50.160451211747,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Celakovice_znak.jpg/90px-Celakovice_znak.jpg',
    hashFilename: '31afe32d50e0f22e5d0bdf7e8ee629dd.jpg'
  },
  {
    name: 'Vysoké Mýto',
    population: 12412,
    area: 42.03,
    altitude: 284,
    longitude: 16.161752006464,
    latitude: 49.953240035812,
    region: 'Pardubický',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vysok%C3%A9_M%C3%BDto_-_znak.png/90px-Vysok%C3%A9_M%C3%BDto_-_znak.png',
    hashFilename: 'ba9e583c6869ccbfbf1a4aa6f444d93f.png'
  },
  {
    name: 'Boskovice',
    population: 12190,
    area: 27.82,
    altitude: 381,
    longitude: 16.660002080035,
    latitude: 49.487537313637,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Boskovice_CoA_CZ.svg/90px-Boskovice_CoA_CZ.svg.png',
    hashFilename: 'a59d6098bc5ae168d8351b196f1331a3.png'
  },
  {
    name: 'Vrchlabí',
    population: 12131,
    area: 27.65,
    altitude: 477,
    longitude: 15.609473689336,
    latitude: 50.627013945049,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Vrchlab%C3%AD_CoA_CZ.svg/90px-Vrchlab%C3%AD_CoA_CZ.svg.png',
    hashFilename: '614e5bab3878235fa9e87f1908653e45.png'
  },
  {
    name: 'Velké Meziříčí',
    population: 11627,
    area: 40.66,
    altitude: 425,
    longitude: 16.01226875669,
    latitude: 49.355258131562,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Velk%C3%A9_Mezi%C5%99%C3%AD%C4%8D%C3%AD_CoA.png/90px-Velk%C3%A9_Mezi%C5%99%C3%AD%C4%8D%C3%AD_CoA.png',
    hashFilename: '4a2a2f91708481e47751d2ba84934f32.png'
  },
  {
    name: 'Holešov',
    population: 11556,
    area: 33.94,
    altitude: 232,
    longitude: 17.578340885825,
    latitude: 49.333314366496,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Coat_of_arms_of_Hole%C5%A1ov.svg/90px-Coat_of_arms_of_Hole%C5%A1ov.svg.png',
    hashFilename: 'afb4f5f53355f41c774fb166f89b4847.png'
  },
  {
    name: 'Vlašim',
    population: 11455,
    area: 41.42,
    altitude: 365,
    longitude: 14.898853788831,
    latitude: 49.706391051684,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Vla%C5%A1im%2C_Czech_Republic_-_coat_of_arms.png/90px-Vla%C5%A1im%2C_Czech_Republic_-_coat_of_arms.png',
    hashFilename: 'c02ea68fc3b91ee68557c14f9f30dd9.png'
  },
  {
    name: 'Humpolec',
    population: 11447,
    area: 51.51,
    altitude: 527,
    longitude: 15.359357331212,
    latitude: 49.541577778709,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Humpolec_znak.svg/90px-Humpolec_znak.svg.png',
    hashFilename: '6c68a40d313e84861b0e629cc41a5b56.png'
  },
  {
    name: 'Rychnov nad Kněžnou',
    population: 11442,
    area: 34.99,
    altitude: 320,
    longitude: 16.274954757842,
    latitude: 50.162870787815,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Rychnov_nad_Kn%C4%9B%C5%BEnou_znak.png/90px-Rychnov_nad_Kn%C4%9B%C5%BEnou_znak.png',
    hashFilename: '50fc0ec25e1d97ac381426c73fd75087.png'
  },
  {
    name: 'Nový Bor',
    population: 11412,
    area: 19.44,
    altitude: 365,
    longitude: 14.555662165889,
    latitude: 50.757681178047,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Nov%C3%BD_Bor_CoA_CZ.svg/90px-Nov%C3%BD_Bor_CoA_CZ.svg.png',
    hashFilename: '36b7055d0ffec0307075faa34652fdf8.png'
  },
  {
    name: 'Kuřim',
    population: 11400,
    area: 17.2,
    altitude: 286,
    longitude: 16.53146211908,
    latitude: 49.298546446655,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Ku%C5%99im_CoA_CZ.png/90px-Ku%C5%99im_CoA_CZ.png',
    hashFilename: '4e2dd2770fa8eb2bb9b9f6658277e9fe.png'
  },
  {
    name: 'Prachatice',
    population: 11250,
    area: 38.92,
    altitude: 561,
    longitude: 13.997533003713,
    latitude: 49.013013368826,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Prachatice_znak.svg/90px-Prachatice_znak.svg.png',
    hashFilename: '34f64242898de13932b15b83382d9180.png'
  },
  {
    name: 'Domažlice',
    population: 11155,
    area: 24.62,
    altitude: 428,
    longitude: 12.929798039263,
    latitude: 49.440605680467,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Doma%C5%BElice_znak.png/90px-Doma%C5%BElice_znak.png',
    hashFilename: 'c067f02ef8697dd33ccef87e482835cf.png'
  },
  {
    name: 'Uničov',
    population: 11151,
    area: 48.27,
    altitude: 248,
    longitude: 17.121482256516,
    latitude: 49.770928637031,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Unicov_CoA_CZ.jpg/90px-Unicov_CoA_CZ.jpg',
    hashFilename: 'e0e19e46a9f0297ed76c412d4a0f15f3.jpg'
  },
  {
    name: 'Rumburk',
    population: 10861,
    area: 24.72,
    altitude: 387,
    longitude: 14.55711013781,
    latitude: 50.951576367344,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Rumburk_CoA_CZv3.svg/90px-Rumburk_CoA_CZv3.svg.png',
    hashFilename: 'e6a5e8430376c75f0002e636b9b68e42.png'
  },
  {
    name: 'Kyjov',
    population: 10799,
    area: 29.88,
    altitude: 192,
    longitude: 17.122531686075,
    latitude: 49.010193088478,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Kyjov_znak.png/90px-Kyjov_znak.png',
    hashFilename: '6288c0352b5035a58bcbcbb57de841b7.png'
  },
  {
    name: 'Sušice',
    population: 10783,
    area: 45.63,
    altitude: 472,
    longitude: 13.520207848015,
    latitude: 49.231161465796,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Su%C5%A1ice-znak.svg/90px-Su%C5%A1ice-znak.svg.png',
    hashFilename: '2f570151af061c83cf787443594cba87.png'
  },
  {
    name: 'Frenštát pod Radhoštěm',
    population: 10676,
    area: 11.43,
    altitude: 401,
    longitude: 18.210809609836,
    latitude: 49.548334550378,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Fren%C5%A1t%C3%A1t_pod_Radho%C5%A1t%C4%9Bm_CoA_CZ.svg/90px-Fren%C5%A1t%C3%A1t_pod_Radho%C5%A1t%C4%9Bm_CoA_CZ.svg.png',
    hashFilename: 'b2003dc28e82a82d9f72efcd85f6ce5c.png'
  },
  {
    name: 'Veselí nad Moravou',
    population: 10623,
    area: 35.45,
    altitude: 176,
    longitude: 17.37648237967,
    latitude: 48.953642955201,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Znak_mesta_veseli_nad_moravou.svg/90px-Znak_mesta_veseli_nad_moravou.svg.png',
    hashFilename: '66432dc9f5e02c50a6559e7b168dbe5c.png'
  },
  {
    name: 'Jeseník',
    population: 10619,
    area: 38.23,
    altitude: 432,
    longitude: 17.204714793832,
    latitude: 50.22937984562,
    region: 'Olomoucký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Coat_of_arms_of_Jesen%C3%ADk_%28since_July_2019%29.png/90px-Coat_of_arms_of_Jesen%C3%ADk_%28since_July_2019%29.png',
    hashFilename: '160404f930357c9578ad0e035b2b3a1c.png'
  },
  {
    name: 'Králův Dvůr',
    population: 10613,
    area: 15.24,
    altitude: 240,
    longitude: 14.034516923849,
    latitude: 49.949891666533,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Znak_obce_Kr%C3%A1l%C5%AFv_Dv%C5%AFr_-_O%C5%98.JPG/90px-Znak_obce_Kr%C3%A1l%C5%AFv_Dv%C5%AFr_-_O%C5%98.JPG',
    hashFilename: 'ed517f2a396e3da07d357d0b5cdd07da.JPG'
  },
  {
    name: 'Čáslav',
    population: 10512,
    area: 26.46,
    altitude: 231,
    longitude: 15.389777063866,
    latitude: 49.911045008568,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/%C4%8C%C3%A1slav_CoA_CZ.svg/90px-%C4%8C%C3%A1slav_CoA_CZ.svg.png',
    hashFilename: '6cd846855b673340d8642a4699a101d9.png'
  },
  {
    name: 'Litomyšl',
    population: 10493,
    area: 33.45,
    altitude: 330,
    longitude: 16.310576465877,
    latitude: 49.872064383156,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Litomy%C5%A1l_CoA_CZ.svg/90px-Litomy%C5%A1l_CoA_CZ.svg.png',
    hashFilename: '118fff04a825e8286d9bf853f05a0d89.png'
  },
  {
    name: 'Jesenice (okres Praha-západ)',
    population: 10483,
    area: 17.54,
    altitude: 358,
    longitude: 14.513559856752,
    latitude: 49.96821662742,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Jesenice_u_prahy_znak.svg/90px-Jesenice_u_prahy_znak.svg.png',
    hashFilename: '13a1d109bc3a2e33173c393c78ab2ad6.png'
  },
  {
    name: 'Přelouč',
    population: 10137,
    area: 30.47,
    altitude: 212,
    longitude: 15.560373291128,
    latitude: 50.039897141756,
    region: 'Pardubický',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Znak_m%C4%9Bsta_P%C5%99elou%C4%8D.jpg/90px-Znak_m%C4%9Bsta_P%C5%99elou%C4%8D.jpg',
    hashFilename: 'bd6f098ef6f03fd3628af13f054458ea.jpg'
  },
  {
    name: 'Lysá nad Labem',
    population: 10062,
    area: 33.67,
    altitude: 183,
    longitude: 14.832888718706,
    latitude: 50.201496776686,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Znak_m%C4%9Bsto_Lys%C3%A1_nad_Labem_color.svg/90px-Znak_m%C4%9Bsto_Lys%C3%A1_nad_Labem_color.svg.png',
    hashFilename: 'ea042622a5fe968ac8b6511dce6a818d.png'
  },
  {
    name: 'Ivančice',
    population: 9971,
    area: 47.6,
    altitude: 210,
    longitude: 16.377529198529,
    latitude: 49.101477851144,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ivan%C4%8Dice_CoA_CZ.png/90px-Ivan%C4%8Dice_CoA_CZ.png',
    hashFilename: 'df15fd5821e3e961a5aaae9b5b47c0c1.png'
  },
  {
    name: 'Frýdlant nad Ostravicí',
    population: 9923,
    area: 21.91,
    altitude: 357,
    longitude: 18.359696643447,
    latitude: 49.592787662664,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Fr%C3%BDdlant_nad_Ostravic%C3%AD_%28CZE%29_-_coat_of_arms.png/90px-Fr%C3%BDdlant_nad_Ostravic%C3%AD_%28CZE%29_-_coat_of_arms.png',
    hashFilename: '7fc3e77b94371da08dc857117ed0966c.png'
  },
  {
    name: 'Nové Město na Moravě',
    population: 9904,
    area: 61.13,
    altitude: 594,
    longitude: 16.074220542261,
    latitude: 49.561481877592,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Coa_Nov%C3%A9_M%C4%9Bsto_na_Morav%C4%9B.png/90px-Coa_Nov%C3%A9_M%C4%9Bsto_na_Morav%C4%9B.png',
    hashFilename: '229c10b41cd184e803d598efe54b48be.png'
  },
  {
    name: 'Lanškroun',
    population: 9849,
    area: 20.65,
    altitude: 373,
    longitude: 16.611954510979,
    latitude: 49.912192261266,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Lan%C5%A1kroun.svg/90px-Lan%C5%A1kroun.svg.png',
    hashFilename: '1edd94d10ca763914e7eaf98bcb624d2.png'
  },
  {
    name: 'Moravská Třebová',
    population: 9715,
    area: 42.05,
    altitude: 360,
    longitude: 16.664303989895,
    latitude: 49.757953873208,
    region: 'Pardubický',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Moravsk%C3%A1_T%C5%99ebov%C3%A1_CoA_CZ.svg/90px-Moravsk%C3%A1_T%C5%99ebov%C3%A1_CoA_CZ.svg.png',
    hashFilename: 'db454d47523c2fbc94eb342c9940165f.png'
  },
  {
    name: 'Litovel',
    population: 9689,
    area: 46.4,
    altitude: 233,
    longitude: 17.076190647983,
    latitude: 49.701225181872,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Znak_m%C4%9Bsta_Litovel.png/90px-Znak_m%C4%9Bsta_Litovel.png',
    hashFilename: 'efb2f494fd7d07023a04a51bcd44a944.png'
  },
  {
    name: 'Hlinsko',
    population: 9577,
    area: 24.27,
    altitude: 582,
    longitude: 15.907605681006,
    latitude: 49.762172981864,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hlinsko_znak.gif/90px-Hlinsko_znak.gif',
    hashFilename: 'ce3cc9c0b8008a9e9371813e6c7c3459.gif'
  },
  {
    name: 'Mohelnice',
    population: 9572,
    area: 46.2,
    altitude: 267,
    longitude: 16.919508491038,
    latitude: 49.777001590952,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Mohelnice_SU_CZ_CoA.svg/90px-Mohelnice_SU_CZ_CoA.svg.png',
    hashFilename: '348a9413055dbbc4694d2261bb27de9d.png'
  },
  {
    name: 'Studénka',
    population: 9309,
    area: 30.92,
    altitude: 239,
    longitude: 18.078565781992,
    latitude: 49.723408972599,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Stud%C3%A9nka_znak.png/90px-Stud%C3%A9nka_znak.png',
    hashFilename: 'd1a9ecf52078f4c618a57eda81385c00.png'
  },
  {
    name: 'Nové Město nad Metují',
    population: 9304,
    area: 23.13,
    altitude: 334,
    longitude: 16.151547223496,
    latitude: 50.344598880803,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Nov%C3%A9_M%C4%9Bsto_nad_Metuj%C3%AD_CoA_CZ.svg/90px-Nov%C3%A9_M%C4%9Bsto_nad_Metuj%C3%AD_CoA_CZ.svg.png',
    hashFilename: 'cda2b8ceb2e46c686859e5f17cc77f72.png'
  },
  {
    name: 'Tišnov',
    population: 9275,
    area: 17.12,
    altitude: 256,
    longitude: 16.424404904279,
    latitude: 49.348749330424,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Znak_m%C4%9Bsta_Ti%C5%A1nov.png/90px-Znak_m%C4%9Bsta_Ti%C5%A1nov.png',
    hashFilename: 'efecfd652205fded2caa289f31e1b92d.png'
  },
  {
    name: 'Hostivice',
    population: 9155,
    area: 14.49,
    altitude: 341,
    longitude: 14.258633351605,
    latitude: 50.081655150002,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/COA_hostivice.jpg/90px-COA_hostivice.jpg',
    hashFilename: 'd3d21743cbb930467d39e0aa224db60e.jpg'
  },
  {
    name: 'Chotěboř',
    population: 9096,
    area: 54.05,
    altitude: 515,
    longitude: 15.67022905709,
    latitude: 49.720765680333,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Chotebor.png/90px-Chotebor.png',
    hashFilename: '6b786989149ce4aa1d12ac0dca4b37f0.png'
  },
  {
    name: 'Nová Paka',
    population: 9060,
    area: 28.68,
    altitude: 427,
    longitude: 15.515123613971,
    latitude: 50.494542634207,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Nov%C3%A1_Paka_CoA_CZ.svg/90px-Nov%C3%A1_Paka_CoA_CZ.svg.png',
    hashFilename: '69c50e8ef42e8f73dedbb1235c402fee.png'
  },
  {
    name: 'Roztoky (okres Praha-západ)',
    population: 9034,
    area: 8.19,
    altitude: 237,
    longitude: 14.397679313408,
    latitude: 50.158489314828,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Roztoky_CoA_PZ_CZ.svg/90px-Roztoky_CoA_PZ_CZ.svg.png',
    hashFilename: 'e600da30b49c0d3a7926ccadce898b9a.png'
  },
  {
    name: 'Mnichovo Hradiště',
    population: 8950,
    area: 34.32,
    altitude: 240,
    longitude: 14.971430407266,
    latitude: 50.527266026167,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Mnichovo_Hradiste_CoA_CZ.jpg/90px-Mnichovo_Hradiste_CoA_CZ.jpg',
    hashFilename: 'd5c97ff338dd16f6d8e8f618987afb5d.jpg'
  },
  {
    name: 'Polička',
    population: 8939,
    area: 33.12,
    altitude: 555,
    longitude: 16.265478874053,
    latitude: 49.714679390589,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Poli%C4%8Dka_CoA_CZ.svg/90px-Poli%C4%8Dka_CoA_CZ.svg.png',
    hashFilename: 'd3346daa907cdfdf37353f3052aa0d10.png'
  },
  {
    name: 'Dobříš',
    population: 8867,
    area: 53.42,
    altitude: 371,
    longitude: 14.16722087166,
    latitude: 49.781215974594,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Dobris-znak.png/90px-Dobris-znak.png',
    hashFilename: 'e8a2e06092ec862a9841f8d75fa3793e.png'
  },
  {
    name: 'Lovosice',
    population: 8774,
    area: 11.89,
    altitude: 151,
    longitude: 14.051126534986,
    latitude: 50.515121498998,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Lovosice-coat_of_arms.png/90px-Lovosice-coat_of_arms.png',
    hashFilename: '2ae18a37a778ba9277a603dd0dd751ed.png'
  },
  {
    name: 'Duchcov',
    population: 8685,
    area: 15.4,
    altitude: 201,
    longitude: 13.746310094927,
    latitude: 50.603854793198,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/CoA_of_Duchcov.svg/90px-CoA_of_Duchcov.svg.png',
    hashFilename: '195f0c9a8bad2f44739eb066d926919b.png'
  },
  {
    name: 'Choceň',
    population: 8662,
    area: 21.7,
    altitude: 290,
    longitude: 16.223087674169,
    latitude: 50.00163914968,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Choce%C5%88.svg/90px-Choce%C5%88.svg.png',
    hashFilename: '69631384cee878ff35c8fad245de0f47.png'
  },
  {
    name: 'Štětí',
    population: 8609,
    area: 53.9,
    altitude: 155,
    longitude: 14.374304629682,
    latitude: 50.453059775481,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Steti_-_erb.gif/90px-Steti_-_erb.gif',
    hashFilename: 'd5cd037ce09e7340f698ea7336cf2e94.gif'
  },
  {
    name: 'Hořice',
    population: 8587,
    area: 21.43,
    altitude: 311,
    longitude: 15.631918228938,
    latitude: 50.366136740505,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Znak_m%C4%9Bsta_Ho%C5%99ice.svg/90px-Znak_m%C4%9Bsta_Ho%C5%99ice.svg.png',
    hashFilename: 'bac3f5f4a4c827e1cd44dc56862139c3.png'
  },
  {
    name: 'Příbor (okres Nový Jičín)',
    population: 8402,
    area: 22.15,
    altitude: 278,
    longitude: 18.145022037352,
    latitude: 49.640926771377,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Coat_of_arms_of_P%C5%99%C3%ADbor.svg/90px-Coat_of_arms_of_P%C5%99%C3%ADbor.svg.png',
    hashFilename: '4d741f7f1ed17238ea8064670f69dd5c.png'
  },
  {
    name: 'Červený Kostelec',
    population: 8299,
    area: 24.07,
    altitude: 414,
    longitude: 16.092983802099,
    latitude: 50.476298276375,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Cerveny_Kostelec_CoA_CZ.svg/90px-Cerveny_Kostelec_CoA_CZ.svg.png',
    hashFilename: '3f185e4598f9a6f888ce1932aea73ed2.png'
  },
  {
    name: 'Třeboň',
    population: 8262,
    area: 98.31,
    altitude: 434,
    longitude: 14.770659141428,
    latitude: 49.003709466138,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Znak_mesta_trebon_II.svg/90px-Znak_mesta_trebon_II.svg.png',
    hashFilename: '697528ac28f7a6c698308d7a563dd67a.png'
  },
  {
    name: 'Stříbro (okres Tachov)',
    population: 8145,
    area: 47.78,
    altitude: 399,
    longitude: 13.004146255782,
    latitude: 49.753048391098,
    region: 'Plzeňský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stribro_%28Tachov%29_CoA_CZ.jpg/90px-Stribro_%28Tachov%29_CoA_CZ.jpg',
    hashFilename: 'd31c4283f52ce71cd7a0fca68e6858ee.jpg'
  },
  {
    name: 'Semily',
    population: 8081,
    area: 16.31,
    altitude: 340,
    longitude: 15.33561979968,
    latitude: 50.601957959876,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Znaksemily.gif/90px-Znaksemily.gif',
    hashFilename: '236d1b66f42bc5b4878f5ff983675c7e.gif'
  },
  {
    name: 'Dubí',
    population: 8071,
    area: 33.85,
    altitude: 389,
    longitude: 13.788939045017,
    latitude: 50.681121671443,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Dubi_CoA_CZ.jpg/90px-Dubi_CoA_CZ.jpg',
    hashFilename: 'b2ff36d4d3bef3d52fd2eb93e06d1a52.jpg'
  },
  {
    name: 'Milevsko',
    population: 8040,
    area: 42.32,
    altitude: 461,
    longitude: 14.36004017878,
    latitude: 49.450972060646,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Milevsko_znak.png/90px-Milevsko_znak.png',
    hashFilename: '90cc5f1cdde3c3b4532ab4a4d5e4da37.png'
  },
  {
    name: 'Bystřice pod Hostýnem',
    population: 8023,
    area: 26.81,
    altitude: 315,
    longitude: 17.674035465156,
    latitude: 49.399238981974,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bystrice_pod_Hostynem-znak.png/90px-Bystrice_pod_Hostynem-znak.png',
    hashFilename: '3a3bf59b534bba0c0482290fff065ce0.png'
  },
  {
    name: 'Lipník nad Bečvou',
    population: 7961,
    area: 30.61,
    altitude: 233,
    longitude: 17.58633834226,
    latitude: 49.527549239447,
    region: 'Olomoucký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Lipn%C3%ADk_nad_Be%C4%8Dvou_CoA_CZ.png/90px-Lipn%C3%ADk_nad_Be%C4%8Dvou_CoA_CZ.png',
    hashFilename: 'c4ffcb050b36867101e927f4b3ff1a4f.png'
  },
  {
    name: 'Šlapanice',
    population: 7952,
    area: 14.65,
    altitude: 230,
    longitude: 16.727325855884,
    latitude: 49.168653859874,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/%C5%A0lapanice_CoA_CZ.png/90px-%C5%A0lapanice_CoA_CZ.png',
    hashFilename: 'ae50cf4655162bc249060eb89b981a9e.png'
  },
  {
    name: 'Hrádek nad Nisou',
    population: 7932,
    area: 48.54,
    altitude: 255,
    longitude: 14.844661931528,
    latitude: 50.85285295319,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Hradek_nad_nisou_znak.jpg/90px-Hradek_nad_nisou_znak.jpg',
    hashFilename: '9384292b452360c216988d0707c920bc.jpg'
  },
  {
    name: 'Bystřice nad Pernštejnem',
    population: 7896,
    area: 53.06,
    altitude: 535,
    longitude: 16.261501207469,
    latitude: 49.522980589139,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Znak_m%C4%9Bsta_Byst%C5%99ice_nad_Pern%C5%A1tejnem.png/90px-Znak_m%C4%9Bsta_Byst%C5%99ice_nad_Pern%C5%A1tejnem.png',
    hashFilename: 'b7849500c3cd2e70dd00a71aea90720a.png'
  },
  {
    name: 'Benátky nad Jizerou',
    population: 7877,
    area: 35.51,
    altitude: 225,
    longitude: 14.823513539563,
    latitude: 50.290918373612,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Benatky_n_j_znak.png/90px-Benatky_n_j_znak.png',
    hashFilename: 'ddfd385934e0d02d281c6b15061ad51d.png'
  },
  {
    name: 'Rýmařov',
    population: 7862,
    area: 60.73,
    altitude: 590,
    longitude: 17.271821662136,
    latitude: 49.931838496043,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Rymarov_CZ_CoA.svg/90px-Rymarov_CZ_CoA.svg.png',
    hashFilename: 'e3582981ea367fc86f43427f29141c10.png'
  },
  {
    name: 'Týn nad Vltavou',
    population: 7850,
    area: 43.02,
    altitude: 362,
    longitude: 14.420589996012,
    latitude: 49.223475602317,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/T%C3%BDn_nad_Vltavou_znak_2011.png/90px-T%C3%BDn_nad_Vltavou_znak_2011.png',
    hashFilename: 'ce1db11cc1aa7cccbfe6f0d3ae2b7e83.png'
  },
  {
    name: 'Hořovice',
    population: 7842,
    area: 9.55,
    altitude: 375,
    longitude: 13.902738643216,
    latitude: 49.836060857067,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Znak_m%C4%9Bsta_Ho%C5%99ovice2.svg/90px-Znak_m%C4%9Bsta_Ho%C5%99ovice2.svg.png',
    hashFilename: 'b80304d8ed36028e7bf0c94ab6a7a40a.png'
  },
  {
    name: 'Nejdek',
    population: 7785,
    area: 52.27,
    altitude: 568,
    longitude: 12.729443668258,
    latitude: 50.322532483831,
    region: 'Karlovarský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Znak_obce_Nejdek.gif/90px-Znak_obce_Nejdek.gif',
    hashFilename: 'dcfd9cecda9eb93eaceb4779337e9aef.gif'
  },
  {
    name: 'Rychvald',
    population: 7783,
    area: 17.02,
    altitude: 220,
    longitude: 18.376307429057,
    latitude: 49.86623590309,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Rychvald_CoA.svg/90px-Rychvald_CoA.svg.png',
    hashFilename: 'a4c9129973a237353d0559bb6ac42fc8.png'
  },
  {
    name: 'Černošice',
    population: 7675,
    area: 9.06,
    altitude: 211,
    longitude: 14.319858494702,
    latitude: 49.960158615227,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/%C4%8Cerno%C5%A1ice_znak.png/90px-%C4%8Cerno%C5%A1ice_znak.png',
    hashFilename: '4c35f57c19b2c175cfbfbf44be9ef7fb.png'
  },
  {
    name: 'Mikulov',
    population: 7638,
    area: 45.32,
    altitude: 242,
    longitude: 16.637789181722,
    latitude: 48.805586996193,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Coat_of_arms_of_Mikulov_%28official%29.svg/90px-Coat_of_arms_of_Mikulov_%28official%29.svg.png',
    hashFilename: '805106bad0541daf3abe38c021eb6798.png'
  },
  {
    name: 'Kaplice',
    population: 7562,
    area: 40.85,
    altitude: 550,
    longitude: 14.496272135395,
    latitude: 48.738564836975,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Coat_of_arms_of_Kaplice.svg/90px-Coat_of_arms_of_Kaplice.svg.png',
    hashFilename: 'cf0281d2713e68cb4119be85039585ce.png'
  },
  {
    name: 'Úvaly',
    population: 7504,
    area: 10.97,
    altitude: 253,
    longitude: 14.73087395138,
    latitude: 50.074011899968,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Znakuvaly.jpg/90px-Znakuvaly.jpg',
    hashFilename: 'be5673f7ae1f427c3a2d7cf89754c7.jpg'
  },
  {
    name: 'Vodňany',
    population: 7483,
    area: 36.34,
    altitude: 398,
    longitude: 14.175148006577,
    latitude: 49.147976092242,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Vodnany_CoA_CZ.jpg/90px-Vodnany_CoA_CZ.jpg',
    hashFilename: '33672d3743bb23e9175ea341a9c0c29b.jpg'
  },
  {
    name: 'Český Brod',
    population: 7423,
    area: 19.7,
    altitude: 219,
    longitude: 14.860881470778,
    latitude: 50.074267480539,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/%C4%8Cesk%C3%BD_Brod_znak.svg/90px-%C4%8Cesk%C3%BD_Brod_znak.svg.png',
    hashFilename: '65040dc5be9ffcedb2bc34f292ac268.png'
  },
  {
    name: 'Petřvald (okres Karviná)',
    population: 7407,
    area: 12.63,
    altitude: 265,
    longitude: 18.389449339429,
    latitude: 49.830981416104,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Petrvald_%28Karvina%29_CoA_CZ.svg/90px-Petrvald_%28Karvina%29_CoA_CZ.svg.png',
    hashFilename: '924c100228c26a7bd45eef9f468aae33.png'
  },
  {
    name: 'Bílovec',
    population: 7401,
    area: 38.87,
    altitude: 243,
    longitude: 18.015853348325,
    latitude: 49.756380390942,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/CoA_of_B%C3%ADlovec.svg/90px-CoA_of_B%C3%ADlovec.svg.png',
    hashFilename: 'aa05db8ad5a1b7c7d5b8d484241c1aff.png'
  },
  {
    name: 'Frýdlant',
    population: 7388,
    area: 31.62,
    altitude: 295,
    longitude: 15.079858729413,
    latitude: 50.921451823669,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Fr%C3%BDdlant_CoA_CZ.svg/90px-Fr%C3%BDdlant_CoA_CZ.svg.png',
    hashFilename: 'c39aaf7eab734179ca06e8257a9c7750.png'
  },
  {
    name: 'Vimperk',
    population: 7364,
    area: 80.04,
    altitude: 694,
    longitude: 13.774271666134,
    latitude: 49.052527919987,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/CoA_Vimperk.png/90px-CoA_Vimperk.png',
    hashFilename: '26e55d9a161b2023f23e2facda937651.png'
  },
  {
    name: 'Vratimov',
    population: 7360,
    area: 14.14,
    altitude: 250,
    longitude: 18.310188493649,
    latitude: 49.769937353857,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Vratimov_znak.jpg/90px-Vratimov_znak.jpg',
    hashFilename: 'ec321b05403cfa5bf7f0b9651404ef88.jpg'
  },
  {
    name: 'Odry',
    population: 7343,
    area: 74.05,
    altitude: 274,
    longitude: 17.830879019923,
    latitude: 49.66254664793,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Odry_CoA.jpg/90px-Odry_CoA.jpg',
    hashFilename: 'a5b948495943e7c41fa1fadf31f1e7ae.jpg'
  },
  {
    name: 'Dačice',
    population: 7228,
    area: 67.0,
    altitude: 477,
    longitude: 15.437278856602,
    latitude: 49.081598679718,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Coat_of_arms_of_Da%C4%8Dice.svg/90px-Coat_of_arms_of_Da%C4%8Dice.svg.png',
    hashFilename: 'f121fb80fb96d5943be140b245f04233.png'
  },
  {
    name: 'Letovice',
    population: 7215,
    area: 51.02,
    altitude: 330,
    longitude: 16.573608242859,
    latitude: 49.547116840883,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Coa_Czech_Family_Hronovec.svg/90px-Coa_Czech_Family_Hronovec.svg.png',
    hashFilename: '1bbd622dba6fe4a2bdc900edb2be2aa6.png'
  },
  {
    name: 'Nový Bydžov',
    population: 7212,
    area: 35.27,
    altitude: 234,
    longitude: 15.490898003773,
    latitude: 50.241552543371,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Coat_of_arms_of_Nov%C3%BD_Byd%C5%BEov.png/90px-Coat_of_arms_of_Nov%C3%BD_Byd%C5%BEov.png',
    hashFilename: '67df1c69fe02dce3352287c98dbaa816.png'
  },
  {
    name: 'Napajedla',
    population: 7172,
    area: 19.83,
    altitude: 200,
    longitude: 17.51195508558,
    latitude: 49.171564523809,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Napajedla_znak_REKOS.jpg/90px-Napajedla_znak_REKOS.jpg',
    hashFilename: '9638dea8af4244e505f3083c4410d6c6.jpg'
  },
  {
    name: 'Slavkov u Brna',
    population: 7169,
    area: 14.95,
    altitude: 211,
    longitude: 16.876504369244,
    latitude: 49.153275386094,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Slavkov_u_Brna_znak_hires.svg/90px-Slavkov_u_Brna_znak_hires.svg.png',
    hashFilename: 'a1bf7e70574c509723fb3e26a7553649.png'
  },
  {
    name: 'Broumov',
    population: 7166,
    area: 22.26,
    altitude: 395,
    longitude: 16.331904763502,
    latitude: 50.585690135728,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Broumov_znak.svg/90px-Broumov_znak.svg.png',
    hashFilename: 'd4590e6cceaa5127c4d6f69c9af335e5.png'
  },
  {
    name: 'Moravské Budějovice',
    population: 7135,
    area: 37.13,
    altitude: 465,
    longitude: 15.808653302577,
    latitude: 49.05213602726,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Moravsk%C3%A9_Bud%C4%9Bjovice_%28znak%29.png/90px-Moravsk%C3%A9_Bud%C4%9Bjovice_%28znak%29.png',
    hashFilename: '690069a1abd168e63c2e31e1cccc85cf.png'
  },
  {
    name: 'Sezimovo Ústí',
    population: 7109,
    area: 8.44,
    altitude: 399,
    longitude: 14.684835568625,
    latitude: 49.385258670607,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Coa_Czech_Town_Sezimovo_%C3%9Ast%C3%AD.svg/90px-Coa_Czech_Town_Sezimovo_%C3%9Ast%C3%AD.svg.png',
    hashFilename: '806aeb48565c034385448294f373ed94.png'
  },
  {
    name: 'Soběslav',
    population: 7055,
    area: 20.0,
    altitude: 405,
    longitude: 14.71863867571,
    latitude: 49.260006346187,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Sobeslav_crest_Czech_Republic.jpg/90px-Sobeslav_crest_Czech_Republic.jpg',
    hashFilename: 'b91914c2414adab2b388397665c56c10.jpg'
  },
  {
    name: 'Nýřany',
    population: 6960,
    area: 22.78,
    altitude: 336,
    longitude: 13.211901020269,
    latitude: 49.711560287657,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Nyrany_znak.jpg/90px-Nyrany_znak.jpg',
    hashFilename: 'ebd0953e0b18f58fc6e2d2f2fa9f8599.jpg'
  },
  {
    name: 'Bučovice',
    population: 6891,
    area: 31.19,
    altitude: 230,
    longitude: 17.001917706954,
    latitude: 49.148973571179,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Znak_m%C4%9Bsta_Bu%C4%8Dovice.svg/90px-Znak_m%C4%9Bsta_Bu%C4%8Dovice.svg.png',
    hashFilename: 'e824832a52d61f2316965db1f2566df5.png'
  },
  {
    name: 'Sedlčany',
    population: 6811,
    area: 36.46,
    altitude: 321,
    longitude: 14.426685295646,
    latitude: 49.660649523688,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/CZE_Sedl%C4%8Dany_COA.svg/90px-CZE_Sedl%C4%8Dany_COA.svg.png',
    hashFilename: 'e0562d8ed0fad1d1e6d116cb23ea08af.png'
  },
  {
    name: 'Přeštice',
    population: 6804,
    area: 25.4,
    altitude: 345,
    longitude: 13.333542808445,
    latitude: 49.573084901444,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/P%C5%99e%C5%A1tice_-_znak.gif/90px-P%C5%99e%C5%A1tice_-_znak.gif',
    hashFilename: 'c598b2a950fca1dcd94245fb6a73ddb4.gif'
  },
  {
    name: 'Holice',
    population: 6767,
    area: 19.65,
    altitude: 245,
    longitude: 15.985965854452,
    latitude: 50.066050453806,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Znak_m%C4%9Bsta_Holice.jpg/90px-Znak_m%C4%9Bsta_Holice.jpg',
    hashFilename: '8b453a60ce377c787c096d9f31ef609f.jpg'
  },
  {
    name: 'Rosice',
    population: 6738,
    area: 12.74,
    altitude: 326,
    longitude: 16.387885945617,
    latitude: 49.1823520088,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Znak_Rosice_%28Brno-venkov%29.jpg/90px-Znak_Rosice_%28Brno-venkov%29.jpg',
    hashFilename: '86a123fd281b989705137bf00882f39c.jpg'
  },
  {
    name: 'Blatná',
    population: 6666,
    area: 43.6,
    altitude: 440,
    longitude: 13.881793989077,
    latitude: 49.424977027305,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Znak_blatna_cz.jpg/90px-Znak_blatna_cz.jpg',
    hashFilename: '4b0d9494be40a73576be549b12a44523.jpg'
  },
  {
    name: 'Kravaře',
    population: 6655,
    area: 19.37,
    altitude: 233,
    longitude: 18.004772215608,
    latitude: 49.932024489233,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Coat_of_arms_of_Krava%C5%99e_%28Opava_District%29.svg/90px-Coat_of_arms_of_Krava%C5%99e_%28Opava_District%29.svg.png',
    hashFilename: '5e134c439bf42a302f86b1176a9e71c.png'
  },
  {
    name: 'Staré Město (okres Uherské Hradiště)',
    population: 6625,
    area: 20.83,
    altitude: 205,
    longitude: 17.433385613484,
    latitude: 49.075157294006,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Star%C3%A9_M%C4%9Bsto_%28Uhersk%C3%A9_Hradi%C5%A1t%C4%9B_District%29_CoA_2021.png/90px-Star%C3%A9_M%C4%9Bsto_%28Uhersk%C3%A9_Hradi%C5%A1t%C4%9B_District%29_CoA_2021.png',
    hashFilename: 'b9f7b7f9671b8c07656ce523e514cda3.png'
  },
  {
    name: 'Šenov',
    population: 6585,
    area: 16.63,
    altitude: 255,
    longitude: 18.376108072077,
    latitude: 49.793134259402,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/%C5%A0enov_CoA_CZ.jpg/90px-%C5%A0enov_CoA_CZ.jpg',
    hashFilename: 'bd38c1f96c3ea46fd1d4d73f6d5c5fc5.jpg'
  },
  {
    name: 'Veselí nad Lužnicí',
    population: 6580,
    area: 29.57,
    altitude: 407,
    longitude: 14.697355580068,
    latitude: 49.184368900539,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Vesel%C3%AD_nad_Lu%C5%BEnic%C3%AD_znak.png/90px-Vesel%C3%AD_nad_Lu%C5%BEnic%C3%AD_znak.png',
    hashFilename: '749047eb021964f1c88ac8e49212fe4c.png'
  },
  {
    name: 'Kraslice (okres Sokolov)',
    population: 6573,
    area: 81.35,
    altitude: 514,
    longitude: 12.517556147716,
    latitude: 50.323842588747,
    region: 'Karlovarský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kraslice_znak.svg/90px-Kraslice_znak.svg.png',
    hashFilename: '44b4ce3a93a0bbb0511985155c0832a6.png'
  },
  {
    name: 'Dobruška',
    population: 6557,
    area: 34.44,
    altitude: 287,
    longitude: 16.160091697745,
    latitude: 50.292047387909,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Dobru%C5%A1ka_CoA_CZ.svg/90px-Dobru%C5%A1ka_CoA_CZ.svg.png',
    hashFilename: '3833d10032160008845afca043028e64.png'
  },
  {
    name: 'Hulín',
    population: 6491,
    area: 32.12,
    altitude: 191,
    longitude: 17.463758712343,
    latitude: 49.316900046515,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Hul%C3%ADn_znak.jpg/90px-Hul%C3%ADn_znak.jpg',
    hashFilename: 'ac27a36021fd3e1d1de5881252344811.jpg'
  },
  {
    name: 'Odolena Voda',
    population: 6455,
    area: 11.24,
    altitude: 248,
    longitude: 14.410860235991,
    latitude: 50.233487444448,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Odolena_Voda_znak.jpg/90px-Odolena_Voda_znak.jpg',
    hashFilename: '2a94685a73af46dfda823c9347dc2d9a.jpg'
  },
  {
    name: 'Světlá nad Sázavou',
    population: 6452,
    area: 42.07,
    altitude: 400,
    longitude: 15.403979061829,
    latitude: 49.668062440319,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Svetla_nad_Sazavou_CoA_CZ.jpg/90px-Svetla_nad_Sazavou_CoA_CZ.jpg',
    hashFilename: 'fad0035c364615df1d5c94399aa42be1.jpg'
  },
  {
    name: 'Letohrad',
    population: 6445,
    area: 23.54,
    altitude: 372,
    longitude: 16.498848119659,
    latitude: 50.035827763428,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Letohrad_CoA_CZ.svg/90px-Letohrad_CoA_CZ.svg.png',
    hashFilename: 'f8793ae630ab8ee0167108421c5e8f49.png'
  },
  {
    name: 'Dobřany',
    population: 6435,
    area: 35.32,
    altitude: 352,
    longitude: 13.293116667157,
    latitude: 49.654927628789,
    region: 'Plzeňský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dob%C5%99any_%28Stod%2C_CZE%29_-_coat_of_arms.png/90px-Dob%C5%99any_%28Stod%2C_CZE%29_-_coat_of_arms.png',
    hashFilename: 'd98c4fdb4f708107c6d7d883d1ae5d94.png'
  },
  {
    name: 'Hustopeče',
    population: 6398,
    area: 24.53,
    altitude: 215,
    longitude: 16.73762221643,
    latitude: 48.940871942774,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Znak_m%C4%9Bsta_Hustope%C4%8De_hires.svg/90px-Znak_m%C4%9Bsta_Hustope%C4%8De_hires.svg.png',
    hashFilename: 'fdbbaae15f4e826ce7d22159379dddef.png'
  },
  {
    name: 'Mimoň',
    population: 6378,
    area: 15.48,
    altitude: 280,
    longitude: 14.724839569219,
    latitude: 50.658755425527,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mimo%C5%88_CoA_CZ.svg/90px-Mimo%C5%88_CoA_CZ.svg.png',
    hashFilename: '57953559330a82af6bc9de40aa8d82de.png'
  },
  {
    name: 'Chrastava',
    population: 6340,
    area: 27.46,
    altitude: 295,
    longitude: 14.968948444345,
    latitude: 50.81698593906,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chrastava_CoA_CZ.svg/90px-Chrastava_CoA_CZ.svg.png',
    hashFilename: 'd206e7253adf714f87ac7fb4341838f0.png'
  },
  {
    name: 'Mníšek pod Brdy',
    population: 6334,
    area: 26.5,
    altitude: 385,
    longitude: 14.261816920552,
    latitude: 49.866576610398,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/CoA_of_Mn%C3%AD%C5%A1ek_pod_Brdy.svg/90px-CoA_of_Mn%C3%AD%C5%A1ek_pod_Brdy.svg.png',
    hashFilename: '8d3e0a8c2b2825b622e129962e58d56.png'
  },
  {
    name: 'Podbořany',
    population: 6317,
    area: 60.16,
    altitude: 331,
    longitude: 13.411998129955,
    latitude: 50.229466858401,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Coat_of_arms_of_Podbo%C5%99any.png/90px-Coat_of_arms_of_Podbo%C5%99any.png',
    hashFilename: 'b1228cf97b84707ffb322b59ea0287f0.png'
  },
  {
    name: 'Dubňany',
    population: 6234,
    area: 22.58,
    altitude: 200,
    longitude: 17.090040442473,
    latitude: 48.916955312083,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Dub%C5%88any.svg/90px-Dub%C5%88any.svg.png',
    hashFilename: '94748d26e495725fff70eeeed563aa27.png'
  },
  {
    name: 'Slavičín',
    population: 6224,
    area: 33.66,
    altitude: 380,
    longitude: 17.873493344939,
    latitude: 49.087983788408,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Slavicin_CoA_CZ.jpg/90px-Slavicin_CoA_CZ.jpg',
    hashFilename: '46d049942635e35dbf863f3bb5b803c4.jpg'
  },
  {
    name: 'Týniště nad Orlicí',
    population: 6187,
    area: 52.46,
    altitude: 253,
    longitude: 16.077768029523,
    latitude: 50.151400055455,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Tyniste_nad_Orlici_CoA_CZ.png/90px-Tyniste_nad_Orlici_CoA_CZ.png',
    hashFilename: '369cc7182a7eb458a6f2f8bc8ceb795c.png'
  },
  {
    name: 'Kostelec nad Orlicí',
    population: 6178,
    area: 26.2,
    altitude: 273,
    longitude: 16.213254179601,
    latitude: 50.122700875844,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Kostelec_nad_Orlic%C3%AD-znak.svg/90px-Kostelec_nad_Orlic%C3%AD-znak.svg.png',
    hashFilename: 'f56899d9b8405ef3dd0ea620eece5209.png'
  },
  {
    name: 'Hronov',
    population: 6096,
    area: 22.04,
    altitude: 364,
    longitude: 16.182393097246,
    latitude: 50.47971690936,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Hronov-znak.svg/90px-Hronov-znak.svg.png',
    hashFilename: 'a7721ce687649c59c18bbbd80dd7eef8.png'
  },
  {
    name: 'Pohořelice',
    population: 6071,
    area: 43.04,
    altitude: 181,
    longitude: 16.524457138925,
    latitude: 48.981217409611,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Poho%C5%99elice_%28okres_Brno-venkov%29_znak.gif',
    hashFilename: 'df232e133344fd59b8b116cb4359b6b6.gif'
  },
  {
    name: 'Železný Brod',
    population: 6065,
    area: 22.51,
    altitude: 305,
    longitude: 15.254178818148,
    latitude: 50.642794278444,
    region: 'Liberecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Coat_of_arms_of_%C5%BDelezn%C3%BD_Brod.jpg/90px-Coat_of_arms_of_%C5%BDelezn%C3%BD_Brod.jpg',
    hashFilename: '2ce306459909470b0e66de7d2298e21e.jpg'
  },
  {
    name: 'Tanvald',
    population: 6051,
    area: 12.45,
    altitude: 455,
    longitude: 15.305960246529,
    latitude: 50.737406262188,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tanvald_CoA_CZ.svg/90px-Tanvald_CoA_CZ.svg.png',
    hashFilename: '96297e7c4d5d59690ace4eca8648f28e.png'
  },
  {
    name: 'Rousínov',
    population: 5962,
    area: 23.05,
    altitude: 241,
    longitude: 16.882160941908,
    latitude: 49.201302411488,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Rous%C3%ADnov_CoA_CZ.svg/90px-Rous%C3%ADnov_CoA_CZ.svg.png',
    hashFilename: '4a5756c3da44686bcd7ee8c2b2ae4a.png'
  },
  {
    name: 'Žamberk',
    population: 5917,
    area: 16.91,
    altitude: 418,
    longitude: 16.467445454592,
    latitude: 50.086040466117,
    region: 'Pardubický',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/COA_Znak_m%C4%9Bsta_%C5%BDamberk.svg/90px-COA_Znak_m%C4%9Bsta_%C5%BDamberk.svg.png',
    hashFilename: 'fab4447c0435b3e91c144482d0449735.png'
  },
  {
    name: 'Třebechovice pod Orebem',
    population: 5851,
    area: 21.01,
    altitude: 243,
    longitude: 15.9923048313,
    latitude: 50.201006677785,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/CoA_of_T%C5%99ebechovice_pod_Orebem.svg/90px-CoA_of_T%C5%99ebechovice_pod_Orebem.svg.png',
    hashFilename: '1528d56d797d9c01fe47c065196afaa7.png'
  },
  {
    name: 'Třešť',
    population: 5815,
    area: 46.99,
    altitude: 545,
    longitude: 15.482137396507,
    latitude: 49.29097119215,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/T%C5%99e%C5%A1%C5%A5_CoA_CZ.jpg/90px-T%C5%99e%C5%A1%C5%A5_CoA_CZ.jpg',
    hashFilename: '76df78fc006322ad157e33914f731ca1.jpg'
  },
  {
    name: 'Kojetín',
    population: 5790,
    area: 31.09,
    altitude: 200,
    longitude: 17.302089031356,
    latitude: 49.351803869882,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Kojet%C3%ADn.svg/90px-Kojet%C3%ADn.svg.png',
    hashFilename: 'ce8703006f42ceced9fa0706e1595a41.png'
  },
  {
    name: 'Františkovy Lázně',
    population: 5783,
    area: 25.76,
    altitude: 442,
    longitude: 12.35181521379,
    latitude: 50.120455065226,
    region: 'Karlovarský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Frnati%C5%A1kovy_L%C3%A1zn%C4%9B_CoA.png/90px-Frnati%C5%A1kovy_L%C3%A1zn%C4%9B_CoA.png',
    hashFilename: '3e5591ac1667ce678a818f440ed5acca.png'
  },
  {
    name: 'Holýšov',
    population: 5726,
    area: 29.32,
    altitude: 357,
    longitude: 13.101338813306,
    latitude: 49.593719918694,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Holysov_znak.jpg/90px-Holysov_znak.jpg',
    hashFilename: 'bf871bd52957cbee8c81e60a0e3a385d.jpg'
  },
  {
    name: 'Týnec nad Sázavou',
    population: 5717,
    area: 25.75,
    altitude: 281,
    longitude: 14.589890530837,
    latitude: 49.833548574825,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tynec_nad_Sazavou_CZ_CoA.jpg/90px-Tynec_nad_Sazavou_CZ_CoA.jpg',
    hashFilename: '38304e29d85b6538567448032e9ceee5.jpg'
  },
  {
    name: 'Moravský Krumlov',
    population: 5707,
    area: 49.56,
    altitude: 255,
    longitude: 16.311702605794,
    latitude: 49.048965931678,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Coat_of_Arms_of_Moravsk%C3%BD_Krumlov.jpg/90px-Coat_of_Arms_of_Moravsk%C3%BD_Krumlov.jpg',
    hashFilename: '9afe75ad7dd9cb1adb79e9f9d1a30795.jpg'
  },
  {
    name: 'Šluknov',
    population: 5698,
    area: 47.47,
    altitude: 340,
    longitude: 14.452709270766,
    latitude: 51.003759354628,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/%C5%A0luknov_znak.png/90px-%C5%A0luknov_znak.png',
    hashFilename: 'c66775c1678b41784456ba560ea048ce.png'
  },
  {
    name: 'Planá',
    population: 5692,
    area: 62.46,
    altitude: 506,
    longitude: 12.743844417597,
    latitude: 49.86827193037,
    region: 'Plzeňský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Coat_of_arms_of_Plan%C3%A1_%28okres_Tachov%29.jpg/90px-Coat_of_arms_of_Plan%C3%A1_%28okres_Tachov%29.jpg',
    hashFilename: 'db9644e01e54ac9a447547c9a73e44c4.jpg'
  },
  {
    name: 'Nové Strašecí',
    population: 5684,
    area: 13.32,
    altitude: 470,
    longitude: 13.900503723787,
    latitude: 50.152805461272,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Znak_m%C4%9Bsta_Nov%C3%A9_Stra%C5%A1ec%C3%AD.gif/90px-Znak_m%C4%9Bsta_Nov%C3%A9_Stra%C5%A1ec%C3%AD.gif',
    hashFilename: '25e60feff616f2af09f53e02d0bcc9f6.gif'
  },
  {
    name: 'Modřice',
    population: 5656,
    area: 10.05,
    altitude: 204,
    longitude: 16.61442392832,
    latitude: 49.127917307254,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Modrice_CZ_CoA.svg/90px-Modrice_CZ_CoA.svg.png',
    hashFilename: 'a49e4931d81469afdd2978fbaf894328.png'
  },
  {
    name: 'Kunovice',
    population: 5650,
    area: 28.55,
    altitude: 198,
    longitude: 17.470110150223,
    latitude: 49.044995756546,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Coa_Czech_Town_Kunovice.svg/90px-Coa_Czech_Town_Kunovice.svg.png',
    hashFilename: '875285bf55c2f30adb9877be30dee822.png'
  },
  {
    name: 'Vítkov',
    population: 5641,
    area: 55.05,
    altitude: 480,
    longitude: 17.749454126304,
    latitude: 49.774449841863,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Coat_of_arms_of_V%C3%ADtkov.svg/90px-Coat_of_arms_of_V%C3%ADtkov.svg.png',
    hashFilename: '368ded9583465c344adb17d2f5ab40e1.png'
  },
  {
    name: 'Lomnice nad Popelkou',
    population: 5635,
    area: 25.58,
    altitude: 478,
    longitude: 15.373504846757,
    latitude: 50.53067653642,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Znaklomnice.jpg/90px-Znaklomnice.jpg',
    hashFilename: '3aefb5a8e41b592cda94134672eaf13f.jpg'
  },
  {
    name: 'Hluboká nad Vltavou',
    population: 5597,
    area: 91.11,
    altitude: 394,
    longitude: 14.434283204502,
    latitude: 49.052328810727,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Hlubok%C3%A1_nad_Vltavou_znak.png/90px-Hlubok%C3%A1_nad_Vltavou_znak.png',
    hashFilename: '9de4bcf9f3deb31840ea2c80ca95b744.png'
  },
  {
    name: 'Chlumec nad Cidlinou',
    population: 5592,
    area: 21.44,
    altitude: 223,
    longitude: 15.460334603393,
    latitude: 50.154454367424,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/CoA_of_Chlumec_nad_Cidlinou.svg/90px-CoA_of_Chlumec_nad_Cidlinou.svg.png',
    hashFilename: '6c02e72f933c195231d5c6683c6e0068.png'
  },
  {
    name: 'Velká Bíteš',
    population: 5574,
    area: 47.3,
    altitude: 476,
    longitude: 16.225874100039,
    latitude: 49.28866258252,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Velk%C3%A1_B%C3%ADte%C5%A1%2C_znak.jpg/90px-Velk%C3%A1_B%C3%ADte%C5%A1%2C_znak.jpg',
    hashFilename: 'ea2a6e310ba302625378fbbfeb0ab449.jpg'
  },
  {
    name: 'Zubří',
    population: 5549,
    area: 28.39,
    altitude: 378,
    longitude: 18.092510514603,
    latitude: 49.466018567307,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/CZ_Zub%C5%99%C3%AD_COA.svg/90px-CZ_Zub%C5%99%C3%AD_COA.svg.png',
    hashFilename: '65588c5e517fc29378be7ad2b325edcf.png'
  },
  {
    name: 'Fulnek',
    population: 5516,
    area: 68.48,
    altitude: 258,
    longitude: 17.903232874658,
    latitude: 49.712371239231,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/CoA_of_Fulnek.svg/90px-CoA_of_Fulnek.svg.png',
    hashFilename: 'e98d8aa998ee6065eae674a58dc5347e.png'
  },
  {
    name: 'Úpice',
    population: 5500,
    area: 15.3,
    altitude: 352,
    longitude: 16.016159265275,
    latitude: 50.512410991863,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Upice_CoA_CZ.svg/90px-Upice_CoA_CZ.svg.png',
    hashFilename: '205d4ad9e8516edf3872b2b0d6011a68.png'
  },
  {
    name: 'Hradec nad Moravicí',
    population: 5485,
    area: 43.96,
    altitude: 264,
    longitude: 17.875865633487,
    latitude: 49.871004700938,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Coa_Czech_Town_Hradec_nad_Moravic%C3%AD.svg/90px-Coa_Czech_Town_Hradec_nad_Moravic%C3%AD.svg.png',
    hashFilename: '19cdbc21cfc0bdbf5f7bdd8f3ac4f7a8.png'
  },
  {
    name: 'Starý Plzenec',
    population: 5448,
    area: 18.37,
    altitude: 343,
    longitude: 13.473552493178,
    latitude: 49.697776983968,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Staryplzenec_coa.gif/90px-Staryplzenec_coa.gif',
    hashFilename: 'fefb6a33d29f17f357a370ef75d7f7a0.gif'
  },
  {
    name: 'Jilemnice',
    population: 5443,
    area: 13.86,
    altitude: 451,
    longitude: 15.506628032335,
    latitude: 50.608944916275,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Jilemnice_CoA_CZ.svg/90px-Jilemnice_CoA_CZ.svg.png',
    hashFilename: '15ffd6cf14aeeb5db99e9b92c5b6c627.png'
  },
  {
    name: 'Horní Slavkov',
    population: 5438,
    area: 36.87,
    altitude: 558,
    longitude: 12.807657708289,
    latitude: 50.138745037063,
    region: 'Karlovarský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Coat_of_arms_of_Horn%C3%AD_Slavkov.png/90px-Coat_of_arms_of_Horn%C3%AD_Slavkov.png',
    hashFilename: '40271d6efbdcea28b6793d29e62becd1.png'
  },
  {
    name: 'Brumov-Bylnice',
    population: 5424,
    area: 56.27,
    altitude: 330,
    longitude: 18.023099545168,
    latitude: 49.090871365095,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Znak_m%C4%9Bsta_Brumov-Bylnice.svg/90px-Znak_m%C4%9Bsta_Brumov-Bylnice.svg.png',
    hashFilename: '748bd19bb0cca5a3034671a7e2dae796.png'
  },
  {
    name: 'Rudná (okres Praha-západ)',
    population: 5395,
    area: 8.2,
    altitude: 378,
    longitude: 14.234414258821,
    latitude: 50.035104791874,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Znak_m%C4%9Bsta_Rudn%C3%A1.png/90px-Znak_m%C4%9Bsta_Rudn%C3%A1.png',
    hashFilename: '7673e955dfc923b6d7d175323bcf02e3.png'
  },
  {
    name: 'Strážnice (okres Hodonín)',
    population: 5361,
    area: 31.41,
    altitude: 177,
    longitude: 17.316799472243,
    latitude: 48.901029956488,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Straznice_HO_CZ_znak.png/90px-Straznice_HO_CZ_znak.png',
    hashFilename: '834954a6454e1d22d046827f14f3f60c.png'
  },
  {
    name: 'Stochov',
    population: 5354,
    area: 9.5,
    altitude: 448,
    longitude: 13.96352591847,
    latitude: 50.146392291736,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Stochov_CoA_CZ.jpg/90px-Stochov_CoA_CZ.jpg',
    hashFilename: 'f41953c1d58b28c496593fa5758d0028.jpg'
  },
  {
    name: 'Bakov nad Jizerou',
    population: 5316,
    area: 27.01,
    altitude: 222,
    longitude: 14.941580683763,
    latitude: 50.48236715403,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Bakov_nad_Jizerou_znak.png/90px-Bakov_nad_Jizerou_znak.png',
    hashFilename: '3e2c1dc7b906b552bb25da30e73cae15.png'
  },
  {
    name: 'Kosmonosy',
    population: 5304,
    area: 11.38,
    altitude: 243,
    longitude: 14.930087921482,
    latitude: 50.438562010198,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Kosmonosy.gif/90px-Kosmonosy.gif',
    hashFilename: '6705a3e4b0fbbcfdb4707f64b9eb2e4e.gif'
  },
  {
    name: 'Trhové Sviny',
    population: 5284,
    area: 52.77,
    altitude: 458,
    longitude: 14.639241403372,
    latitude: 48.842389190234,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Trhove_Sviny_CZ_CoA.jpg/90px-Trhove_Sviny_CZ_CoA.jpg',
    hashFilename: 'c79ae47f1bfa789ba867ad8706642039.jpg'
  },
  {
    name: 'Jablunkov',
    population: 5257,
    area: 10.39,
    altitude: 386,
    longitude: 18.764611504976,
    latitude: 49.576691347506,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Jablunkov-znak.png/90px-Jablunkov-znak.png',
    hashFilename: '5b97de20fc3866b813973e32762e3eb.png'
  },
  {
    name: 'Polná',
    population: 5230,
    area: 37.77,
    altitude: 490,
    longitude: 15.718844195485,
    latitude: 49.48704494622,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Poln%C3%A1_CZ_CoA_ver_2022.svg/90px-Poln%C3%A1_CZ_CoA_ver_2022.svg.png',
    hashFilename: 'e2f93633a5b008eded88969392d4c081.png'
  },
  {
    name: 'Horšovský Týn',
    population: 5227,
    area: 71.31,
    altitude: 376,
    longitude: 12.944091023187,
    latitude: 49.529759792748,
    region: 'Plzeňský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Hor%C5%A1ovsk%C3%BD_T%C3%BDn_CoA.png/90px-Hor%C5%A1ovsk%C3%BD_T%C3%BDn_CoA.png',
    hashFilename: '3d46e16c1435957100159b144f0dd13c.png'
  },
  {
    name: 'Jílové u Prahy',
    population: 5227,
    area: 16.25,
    altitude: 381,
    longitude: 14.493387704233,
    latitude: 49.895520876972,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/COA_J%C3%ADlov%C3%A9_u_Prahy.png/90px-COA_J%C3%ADlov%C3%A9_u_Prahy.png',
    hashFilename: 'b51641654f4905ff4167b007c74936c1.png'
  },
  {
    name: 'Unhošť',
    population: 5206,
    area: 17.42,
    altitude: 387,
    longitude: 14.130145953268,
    latitude: 50.085433861082,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Unhost_znak.jpg/90px-Unhost_znak.jpg',
    hashFilename: '55093b5939398cc53809dd761bd49375.jpg'
  },
  {
    name: 'Telč',
    population: 5185,
    area: 24.87,
    altitude: 514,
    longitude: 15.452771068011,
    latitude: 49.184229941699,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Telc_CoA.png/90px-Telc_CoA.png',
    hashFilename: '1643369fe98f0e2aab644449ba90768e.png'
  },
  {
    name: 'Horažďovice',
    population: 5142,
    area: 43.04,
    altitude: 427,
    longitude: 13.701031041622,
    latitude: 49.320781810531,
    region: 'Plzeňský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/CZE_Hora%C5%BE%C4%8Fovice_COA.svg/90px-CZE_Hora%C5%BE%C4%8Fovice_COA.svg.png',
    hashFilename: '72bb9c818bdfa1792f81c11e7e232573.png'
  },
  {
    name: 'Kdyně',
    population: 5139,
    area: 28.74,
    altitude: 455,
    longitude: 13.03971039702,
    latitude: 49.390878184146,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Kdyn%C4%9B_znak.jpg/90px-Kdyn%C4%9B_znak.jpg',
    hashFilename: '5b09e5ad44d9e9a6a70dc364dae887e5.jpg'
  },
  {
    name: 'Bor (okres Tachov)',
    population: 5132,
    area: 116.51,
    altitude: 472,
    longitude: 12.775216037849,
    latitude: 49.711710233218,
    region: 'Plzeňský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bor_%28Tachov_District%29_CoA.png/90px-Bor_%28Tachov_District%29_CoA.png',
    hashFilename: '763805318e08003edf7c519342647bc5.png'
  },
  {
    name: 'Česká Skalice',
    population: 5122,
    area: 17.36,
    altitude: 284,
    longitude: 16.042847327524,
    latitude: 50.394705559401,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Ceska_Skalice_CoA_CZ.svg/90px-Ceska_Skalice_CoA_CZ.svg.png',
    hashFilename: '52cc480a59dd21edc94cd5aa5e330a0.png'
  },
  {
    name: 'Doksy',
    population: 5119,
    area: 74.96,
    altitude: 266,
    longitude: 14.65562316455,
    latitude: 50.564781686941,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Doksy_CL_CZ_CoA.jpg/90px-Doksy_CL_CZ_CoA.jpg',
    hashFilename: '925fe23e7cac8268f4937b5a3b1b35c1.jpg'
  },
  {
    name: 'Nýrsko',
    population: 5113,
    area: 31.54,
    altitude: 452,
    longitude: 13.143560977643,
    latitude: 49.293977787852,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nyrsko_znak.JPG/90px-Nyrsko_znak.JPG',
    hashFilename: 'bc1e74d253e0805ef0bdc324bc5a187d.JPG'
  },
  {
    name: 'Luhačovice',
    population: 5087,
    area: 32.99,
    altitude: 253,
    longitude: 17.757479338017,
    latitude: 49.0998226346,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Luha%C4%8Dovice_znak.png/90px-Luha%C4%8Dovice_znak.png',
    hashFilename: '8de9a9aff385c28eac853b81b31b39d9.png'
  },
  {
    name: 'Česká Kamenice',
    population: 5082,
    area: 38.77,
    altitude: 301,
    longitude: 14.417784557033,
    latitude: 50.797877961013,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Znak_m%C4%9Bsta_%C4%8Cesk%C3%A1_Kamenice.jpg/90px-Znak_m%C4%9Bsta_%C4%8Cesk%C3%A1_Kamenice.jpg',
    hashFilename: '3fb94a23809b47bb4460359990c9a1bf.jpg'
  },
  {
    name: 'Třemošná',
    population: 5051,
    area: 18.12,
    altitude: 348,
    longitude: 13.395051407159,
    latitude: 49.815938878371,
    region: 'Plzeňský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/T%C5%99emo%C5%A1n%C3%A1_CoA.jpg/90px-T%C5%99emo%C5%A1n%C3%A1_CoA.jpg',
    hashFilename: '18ea8a87e853ce394f1839042195b90c.jpg'
  },
  {
    name: 'Skuteč',
    population: 5042,
    area: 35.4,
    altitude: 412,
    longitude: 15.996602726521,
    latitude: 49.843507732223,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Skute%C4%8D_CoA_CZ.svg/90px-Skute%C4%8D_CoA_CZ.svg.png',
    hashFilename: '42972f366022a46cc9bf55760f13a966.png'
  },
  {
    name: 'Jílové (okres Děčín)',
    population: 4979,
    area: 36.56,
    altitude: 276,
    longitude: 14.103945726726,
    latitude: 50.760901305653,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/J%C3%ADlov%C3%A9_Herb.svg/90px-J%C3%ADlov%C3%A9_Herb.svg.png',
    hashFilename: '4a1f3cdbcd569123ef54cbf2752d404a.png'
  },
  {
    name: 'Heřmanův Městec',
    population: 4960,
    area: 14.34,
    altitude: 280,
    longitude: 15.664983771248,
    latitude: 49.947117687117,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Hermanuv_Mestec_CZ_CoA.gif/90px-Hermanuv_Mestec_CZ_CoA.gif',
    hashFilename: '7aa8675314ef0fffd19799e47f2e4314.gif'
  },
  {
    name: 'Pečky',
    population: 4889,
    area: 10.76,
    altitude: 194,
    longitude: 15.030238635087,
    latitude: 50.090487305541,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pe%C4%8Dky.gif/90px-Pe%C4%8Dky.gif',
    hashFilename: 'd6cf2683b96e2180c3e2db6b9f9ef3f3.gif'
  },
  {
    name: 'Vizovice',
    population: 4886,
    area: 28.57,
    altitude: 296,
    longitude: 17.854557978828,
    latitude: 49.222868373919,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vizovice_CoA_CZ.svg/90px-Vizovice_CoA_CZ.svg.png',
    hashFilename: '29ae8699d7554a819dd0c9ed0638424a.png'
  },
  {
    name: 'Valašské Klobouky',
    population: 4880,
    area: 26.95,
    altitude: 449,
    longitude: 18.007607874482,
    latitude: 49.140630604127,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Valasske-klobouky-znak.jpg/90px-Valasske-klobouky-znak.jpg',
    hashFilename: '6b1650d5e891289fbe0a908f98c1655d.jpg'
  },
  {
    name: 'Oslavany',
    population: 4871,
    area: 18.71,
    altitude: 230,
    longitude: 16.336541091101,
    latitude: 49.123380208518,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Oslavany_CZ_CoA.jpg/90px-Oslavany_CZ_CoA.jpg',
    hashFilename: 'd60cbf5e6ce5fb49770a8f25dc8ca4b1.jpg'
  },
  {
    name: 'Bechyně',
    population: 4838,
    area: 21.29,
    altitude: 406,
    longitude: 14.468125123251,
    latitude: 49.295309165146,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bechyne_CoA_CZ.png/90px-Bechyne_CoA_CZ.png',
    hashFilename: '5f4954cba1c0891c0c3a161985b61481.png'
  },
  {
    name: 'Ledeč nad Sázavou',
    population: 4832,
    area: 17.01,
    altitude: 353,
    longitude: 15.277769503404,
    latitude: 49.695224253124,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Znak_m%C4%9Bsta_Lede%C4%8D_nad_S%C3%A1zavou.png/90px-Znak_m%C4%9Bsta_Lede%C4%8D_nad_S%C3%A1zavou.png',
    hashFilename: 'b127e94335f1e9f385b24a97572bab2f.png'
  },
  {
    name: 'Bělá pod Bezdězem',
    population: 4827,
    area: 63.2,
    altitude: 301,
    longitude: 14.804180555556,
    latitude: 50.501213888889,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bpb_znak.jpg/90px-Bpb_znak.jpg',
    hashFilename: '8e352f724be328da48f1f90d64780937.jpg'
  },
  {
    name: 'Náměšť nad Oslavou',
    population: 4825,
    area: 18.63,
    altitude: 365,
    longitude: 16.158503502674,
    latitude: 49.207301366068,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Znak_m%C4%9Bsta_N%C3%A1m%C4%9B%C5%A1%C5%A5_nad_Oslavou.jpg/90px-Znak_m%C4%9Bsta_N%C3%A1m%C4%9B%C5%A1%C5%A5_nad_Oslavou.jpg',
    hashFilename: '107948a1d974fd229d7d7f929f792af7.jpg'
  },
  {
    name: 'Chýně',
    population: 4817,
    area: 5.0,
    altitude: 370,
    longitude: 14.2270156413,
    latitude: 50.060802725006,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Chyne_CZ_CoA.svg/90px-Chyne_CZ_CoA.svg.png',
    hashFilename: '952205827159d644fc68ae9fdac2f0ef.png'
  },
  {
    name: 'Protivín',
    population: 4799,
    area: 61.46,
    altitude: 383,
    longitude: 14.21719630313,
    latitude: 49.199569401436,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Znak_Mesta_Protivin.jpg/90px-Znak_Mesta_Protivin.jpg',
    hashFilename: '29749a5c93810ec82c050ea17c7afe76.jpg'
  },
  {
    name: 'Vrbno pod Pradědem',
    population: 4752,
    area: 68.91,
    altitude: 545,
    longitude: 17.383221772378,
    latitude: 50.120957199296,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Vrbno_pod_Prad%C4%9Bdem_znak.png/90px-Vrbno_pod_Prad%C4%9Bdem_znak.png',
    hashFilename: '1450f94d13c8685709cec7280b3c1758.png'
  },
  {
    name: 'Pacov',
    population: 4749,
    area: 35.86,
    altitude: 615,
    longitude: 15.001713769033,
    latitude: 49.470826885963,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Pacov-znak.svg/90px-Pacov-znak.svg.png',
    hashFilename: '2a1d0fd60341ca039c0141a1889ccde2.png'
  },
  {
    name: 'Zruč nad Sázavou',
    population: 4749,
    area: 16.41,
    altitude: 344,
    longitude: 15.106108919976,
    latitude: 49.740164158514,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Zruc_nad_sazavou_znak.gif/90px-Zruc_nad_sazavou_znak.gif',
    hashFilename: '77a8613044e7ce58889b994bc9a2e770.gif'
  },
  {
    name: 'Habartov',
    population: 4717,
    area: 21.39,
    altitude: 484,
    longitude: 12.550615081668,
    latitude: 50.183085358271,
    region: 'Karlovarský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Habartov_CoA.png/90px-Habartov_CoA.png',
    hashFilename: 'c2df48eada6da089d0fe176c2f49ee82.png'
  },
  {
    name: 'Postoloprty',
    population: 4703,
    area: 46.56,
    altitude: 193,
    longitude: 13.702996227431,
    latitude: 50.359880648319,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Postoloprty_CZ_CoA.jpg/90px-Postoloprty_CZ_CoA.jpg',
    hashFilename: 'a0b609789469786a03d1075379d351e3.jpg'
  },
  {
    name: 'Votice',
    population: 4688,
    area: 36.42,
    altitude: 483,
    longitude: 14.63813032544,
    latitude: 49.640199066405,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Votice_znak.png/90px-Votice_znak.png',
    hashFilename: '73a11b86cd5b8b2846f710abc1939e41.png'
  },
  {
    name: 'Lišov',
    population: 4687,
    area: 93.55,
    altitude: 505,
    longitude: 14.6083897669,
    latitude: 49.01604452487,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Li%C5%A1ov_znak.png/90px-Li%C5%A1ov_znak.png',
    hashFilename: '815bad538975d36d7cc1725765f183c.png'
  },
  {
    name: 'Bystřice (okres Benešov)',
    population: 4686,
    area: 63.36,
    altitude: 365,
    longitude: 14.667451342381,
    latitude: 49.732203439291,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Byst%C5%99ice_%28BN%29%2C_znak.jpg/90px-Byst%C5%99ice_%28BN%29%2C_znak.jpg',
    hashFilename: '8ce332f95a19fdbbb88961e0541e16.jpg'
  },
  {
    name: 'Vamberk',
    population: 4676,
    area: 21.02,
    altitude: 320,
    longitude: 16.290742760724,
    latitude: 50.117591352648,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Vamberk_CoA.png/90px-Vamberk_CoA.png',
    hashFilename: '5ff9c5dd0fd37c01c72245487b3530c6.png'
  },
  {
    name: 'Chropyně',
    population: 4668,
    area: 19.0,
    altitude: 195,
    longitude: 17.364532053366,
    latitude: 49.356449955938,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chropyn%C4%9B_znak.png/90px-Chropyn%C4%9B_znak.png',
    hashFilename: '38fd2626fbe0ed29174c154bc589a12c.png'
  },
  {
    name: 'Adamov',
    population: 4605,
    area: 3.78,
    altitude: 258,
    longitude: 16.658570650287,
    latitude: 49.30052629923,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Adamov_Blansko_CoA.svg/90px-Adamov_Blansko_CoA.svg.png',
    hashFilename: '4a31c8a9d5d10fd36af2c637f8cf8c16.png'
  },
  {
    name: 'Meziboří',
    population: 4587,
    area: 14.36,
    altitude: 512,
    longitude: 13.598802095006,
    latitude: 50.621246387357,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Mezibo%C5%99%C3%AD_znak.jpg/90px-Mezibo%C5%99%C3%AD_znak.jpg',
    hashFilename: '4db9a745042fc3e7f04513be6aa02ac3.jpg'
  },
  {
    name: 'Bzenec',
    population: 4584,
    area: 40.34,
    altitude: 183,
    longitude: 17.266852936959,
    latitude: 48.97337624906,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Bzenec_%28znak%29.png/90px-Bzenec_%28znak%29.png',
    hashFilename: 'beb18c21dd5c1f6907720852c171d4cb.png'
  },
  {
    name: 'Cvikov (okres Česká Lípa)',
    population: 4558,
    area: 45.05,
    altitude: 357,
    longitude: 14.633085701023,
    latitude: 50.776745075033,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cvikov_znak.png/90px-Cvikov_znak.png',
    hashFilename: 'e914ee0c67c81e83132ef3f2905faf9b.png'
  },
  {
    name: 'Osek (okres Teplice)',
    population: 4558,
    area: 42.37,
    altitude: 307,
    longitude: 13.68595786877,
    latitude: 50.622801284893,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Osek_CoA_TP_CZ.svg/90px-Osek_CoA_TP_CZ.svg.png',
    hashFilename: '87da065ee06c16caa11f70ea8a28da79.png'
  },
  {
    name: 'Planá nad Lužnicí',
    population: 4556,
    area: 21.42,
    altitude: 395,
    longitude: 14.701502824093,
    latitude: 49.354509187053,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Coa_Plana-logo.jpg/90px-Coa_Plana-logo.jpg',
    hashFilename: '41df4bb6a093208c09486daf604717dc.jpg'
  },
  {
    name: 'Klimkovice',
    population: 4536,
    area: 14.64,
    altitude: 266,
    longitude: 18.125896003286,
    latitude: 49.788082173192,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Klimkovice_znak.gif/90px-Klimkovice_znak.gif',
    hashFilename: 'd3938bd0a8bf57d884acb2c446c81475.gif'
  },
  {
    name: 'Vracov',
    population: 4502,
    area: 44.4,
    altitude: 183,
    longitude: 17.21099802362,
    latitude: 48.975242894127,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Znak_m%C4%9Bsta_Vracov.jpg/90px-Znak_m%C4%9Bsta_Vracov.jpg',
    hashFilename: '34a3c4a43d742186258adfbaa59cd115.jpg'
  },
  {
    name: 'Kynšperk nad Ohří',
    population: 4496,
    area: 23.31,
    altitude: 431,
    longitude: 12.530346195097,
    latitude: 50.119045820294,
    region: 'Karlovarský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Kyn%C5%A1perk_nad_Oh%C5%99%C3%AD_-_CoA.png/90px-Kyn%C5%A1perk_nad_Oh%C5%99%C3%AD_-_CoA.png',
    hashFilename: '72d5cbec3f9a85fadb7d910cb0965c0f.png'
  },
  {
    name: 'Bojkovice',
    population: 4403,
    area: 41.88,
    altitude: 272,
    longitude: 17.814875213239,
    latitude: 49.038644054761,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Bojkovice_znak.svg/90px-Bojkovice_znak.svg.png',
    hashFilename: '205d0d3add7c182eab58aabbcbd96f96.png'
  },
  {
    name: 'Sezemice',
    population: 4350,
    area: 22.15,
    altitude: 225,
    longitude: 15.852764757724,
    latitude: 50.066548727454,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Sezemice-znak-mesta.png/90px-Sezemice-znak-mesta.png',
    hashFilename: 'b46e6fb6d53cf7f03eb17f96caf9e6da.png'
  },
  {
    name: 'Kostelec nad Labem',
    population: 4336,
    area: 15.55,
    altitude: 172,
    longitude: 14.585598774844,
    latitude: 50.226603627713,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Kostelec_nad_Labem_CoA.jpg/90px-Kostelec_nad_Labem_CoA.jpg',
    hashFilename: 'd9b8cff5e80b78e8caa86b21806fb212.jpg'
  },
  {
    name: 'Rožmitál pod Třemšínem',
    population: 4317,
    area: 52.97,
    altitude: 519,
    longitude: 13.864345146533,
    latitude: 49.602046222311,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Ro%C5%BEmit%C3%A1l_pod_T%C5%99em%C5%A1%C3%ADnem_-_znak.jpg/90px-Ro%C5%BEmit%C3%A1l_pod_T%C5%99em%C5%A1%C3%ADnem_-_znak.jpg',
    hashFilename: 'd91b8e3a5fcef80addc1e61269359be7.jpg'
  },
  {
    name: 'Hluk (okres Uherské Hradiště)',
    population: 4289,
    area: 28.39,
    altitude: 222,
    longitude: 17.526680219708,
    latitude: 48.988126434505,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Hluk_CoA_CZ.jpg/90px-Hluk_CoA_CZ.jpg',
    hashFilename: 'ab440219709a0a4fc11a1352f6e8fb7f.jpg'
  },
  {
    name: 'Chlumec (okres Ústí nad Labem)',
    population: 4280,
    area: 12.87,
    altitude: 235,
    longitude: 13.939745543971,
    latitude: 50.699804397398,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Chlumec_UL_CoA.png/90px-Chlumec_UL_CoA.png',
    hashFilename: '95953ee17584feb41e2fc403eb4efed9.png'
  },
  {
    name: 'Uherský Ostroh',
    population: 4277,
    area: 26.53,
    altitude: 178,
    longitude: 17.389845788707,
    latitude: 48.985567674246,
    region: 'Zlínský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Uhersk%C3%BD_Ostroh%2C_znak.gif/90px-Uhersk%C3%BD_Ostroh%2C_znak.gif',
    hashFilename: '59fc84057c977252b5c280eeb4d11df8.gif'
  },
  {
    name: 'Nová Role',
    population: 4244,
    area: 13.53,
    altitude: 418,
    longitude: 12.784301710647,
    latitude: 50.271030375945,
    region: 'Karlovarský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Znak_m%C4%9Bsta_Nov%C3%A1_Role.svg/90px-Znak_m%C4%9Bsta_Nov%C3%A1_Role.svg.png',
    hashFilename: '3a0eb5032fe875926d1b99c36af7a737.png'
  },
  {
    name: 'Slatiňany',
    population: 4221,
    area: 15.61,
    altitude: 268,
    longitude: 15.813826736565,
    latitude: 49.921139960832,
    region: 'Pardubický',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Znak_m%C4%9Bsta_Slati%C5%88any.png/90px-Znak_m%C4%9Bsta_Slati%C5%88any.png',
    hashFilename: '71c3813ee0c037546f780660ed6c537d.png'
  },
  {
    name: 'Hostinné',
    population: 4214,
    area: 8.07,
    altitude: 351,
    longitude: 15.723429505909,
    latitude: 50.540706652015,
    region: 'Královéhradecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Hostinn%C3%A9.svg/90px-Hostinn%C3%A9.svg.png',
    hashFilename: 'ede2b5e56f4d90956040136f9cf9c97d.png'
  },
  {
    name: 'Blovice',
    population: 4196,
    area: 28.96,
    altitude: 387,
    longitude: 13.540135487589,
    latitude: 49.582293810018,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Blovice_znak.png/90px-Blovice_znak.png',
    hashFilename: '9871d5317d664f54cc2a2994792042d9.png'
  },
  {
    name: 'Kostelec nad Černými lesy',
    population: 4194,
    area: 17.7,
    altitude: 391,
    longitude: 14.859282652392,
    latitude: 49.994100705528,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Cernykostelec.jpg/90px-Cernykostelec.jpg',
    hashFilename: '133344f4cf6a760b4ed32228df09a3db.jpg'
  },
  {
    name: 'Horní Bříza',
    population: 4191,
    area: 14.55,
    altitude: 367,
    longitude: 13.355637956593,
    latitude: 49.840223429507,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Znak_M%C4%9Bsta_HB.png/90px-Znak_M%C4%9Bsta_HB.png',
    hashFilename: '612f3fdc98df467b3782c4ca35eb9ad6.png'
  },
  {
    name: 'Borovany',
    population: 4178,
    area: 42.33,
    altitude: 522,
    longitude: 14.642272395582,
    latitude: 48.898675230282,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Borovany.jpg/90px-Borovany.jpg',
    hashFilename: '34ce3d0909d5a22a96e2d091d088f561.jpg'
  },
  {
    name: 'Brušperk',
    population: 4157,
    area: 10.27,
    altitude: 265,
    longitude: 18.22213385715,
    latitude: 49.700084988917,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Bru%C5%A1perk_CoA.svg/90px-Bru%C5%A1perk_CoA.svg.png',
    hashFilename: 'def8a18cadf6bf989d093ce847f87d65.png'
  },
  {
    name: 'Police nad Metují',
    population: 4150,
    area: 24.41,
    altitude: 441,
    longitude: 16.233596891027,
    latitude: 50.536901799794,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Coat_of_arms_of_Police_nad_Metuj%C3%AD.gif/90px-Coat_of_arms_of_Police_nad_Metuj%C3%AD.gif',
    hashFilename: 'c9468917e83dded22236acc1f8cc70e8.gif'
  },
  {
    name: 'Králíky',
    population: 4126,
    area: 52.78,
    altitude: 550,
    longitude: 16.760606276532,
    latitude: 50.083862294469,
    region: 'Pardubický',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kr%C3%A1l%C3%ADky.svg/90px-Kr%C3%A1l%C3%ADky.svg.png',
    hashFilename: '304d34447726bc8f357334c68b573620.png'
  },
  {
    name: 'Zdice',
    population: 4120,
    area: 13.81,
    altitude: 268,
    longitude: 13.977528115162,
    latitude: 49.912159387482,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/CoA_of_Zdice.svg/90px-CoA_of_Zdice.svg.png',
    hashFilename: '9dffcf0c7fee3d0399f59e8152fd344b.png'
  },
  {
    name: 'Mnichovice',
    population: 4095,
    area: 8.32,
    altitude: 361,
    longitude: 14.709130720987,
    latitude: 49.936084569575,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Mnichovice%2C_znak.jpg/90px-Mnichovice%2C_znak.jpg',
    hashFilename: '59b15f1b4a568ce026b4183d0fb58808.jpg'
  },
  {
    name: 'Jaroměřice nad Rokytnou',
    population: 4085,
    area: 51.37,
    altitude: 422,
    longitude: 15.893317828738,
    latitude: 49.094127133927,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Jaromerice_nR_CoA.svg/90px-Jaromerice_nR_CoA.svg.png',
    hashFilename: 'b12d1819b7a7e51532df4772cb863e24.png'
  },
  {
    name: 'Rajhrad',
    population: 4070,
    area: 9.49,
    altitude: 190,
    longitude: 16.603886389526,
    latitude: 49.090238953107,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Rajhrad_CZ_CoA.svg/90px-Rajhrad_CZ_CoA.svg.png',
    hashFilename: '10af5a7d83b7e4cd23cfe80bae335e53.png'
  },
  {
    name: 'Přibyslav',
    population: 4041,
    area: 35.32,
    altitude: 475,
    longitude: 15.738585389384,
    latitude: 49.576885241921,
    region: 'Vysočina',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Znak_m%C4%9Bsta_P%C5%99ibyslav_hires.svg/90px-Znak_m%C4%9Bsta_P%C5%99ibyslav_hires.svg.png',
    hashFilename: '102953abb96d1ab03286daec18edf52f.png'
  },
  {
    name: 'Buštěhrad',
    population: 3995,
    area: 7.61,
    altitude: 322,
    longitude: 14.189049604516,
    latitude: 50.156020273004,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Znak_Bu%C5%A1t%C4%9Bhradu_od_roku_2018.png/90px-Znak_Bu%C5%A1t%C4%9Bhradu_od_roku_2018.png',
    hashFilename: '2b9a0e222aadefcdde7c283e39aee644.png'
  },
  {
    name: 'Jemnice',
    population: 3975,
    area: 32.49,
    altitude: 470,
    longitude: 15.569944859592,
    latitude: 49.019037310782,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Jemnice_CoA.png/90px-Jemnice_CoA.png',
    hashFilename: 'e66ddf91315f758b64a3bc67b56f77f4.png'
  },
  {
    name: 'Paskov',
    population: 3913,
    area: 11.8,
    altitude: 256,
    longitude: 18.290408503542,
    latitude: 49.73177254678,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Paskov_CoA.png/90px-Paskov_CoA.png',
    hashFilename: 'b85bd06d353d8ea63c1725f90fea192f.png'
  },
  {
    name: 'Brtnice',
    population: 3897,
    area: 74.12,
    altitude: 515,
    longitude: 15.676443374626,
    latitude: 49.30699470864,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Brtnice_znak.gif/90px-Brtnice_znak.gif',
    hashFilename: 'b2545399815383a3fe90ecb3a9eda4fe.gif'
  },
  {
    name: 'Dolní Benešov',
    population: 3892,
    area: 14.81,
    altitude: 231,
    longitude: 18.108402450994,
    latitude: 49.921002273849,
    region: 'Moravskoslezský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Doln%C3%AD_Bene%C5%A1ov_znak.png/90px-Doln%C3%AD_Bene%C5%A1ov_znak.png',
    hashFilename: '4f38fe4532ab8cfa8d1f41d75d242d73.png'
  },
  {
    name: 'Velké Bílovice',
    population: 3883,
    area: 25.73,
    altitude: 176,
    longitude: 16.892269350624,
    latitude: 48.849310717964,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Velke_Bilovice.jpeg/90px-Coat_of_arms_of_Velke_Bilovice.jpeg',
    hashFilename: 'be4192dec42545f5dad6a160e6591b96.jpeg'
  },
  {
    name: 'Smržovka',
    population: 3881,
    area: 14.81,
    altitude: 585,
    longitude: 15.246500406797,
    latitude: 50.738254442679,
    region: 'Liberecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Smr%C5%BEovka_CoA_CZ.png',
    hashFilename: 'f6f5a66af217bafe380001595fbf7aa.png'
  },
  {
    name: 'Sázava (okres Benešov)',
    population: 3875,
    area: 20.42,
    altitude: 312,
    longitude: 14.896794718867,
    latitude: 49.871708476008,
    region: 'Středočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sazava_%28Benesov%29_CoA_CZ.jpg/90px-Sazava_%28Benesov%29_CoA_CZ.jpg',
    hashFilename: 'd0339ba351ef598d43b0ebcffb64eb8b.jpg'
  },
  {
    name: 'Velešín',
    population: 3866,
    area: 13.24,
    altitude: 548,
    longitude: 14.462517439026,
    latitude: 48.829564866244,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Vele%C5%A1%C3%ADn_znak.png/90px-Vele%C5%A1%C3%ADn_znak.png',
    hashFilename: 'f2886f5dec7d97c71bbba4475ed898ef.png'
  },
  {
    name: 'Klecany',
    population: 3861,
    area: 10.16,
    altitude: 265,
    longitude: 14.411557378691,
    latitude: 50.176063401893,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Klecany_Herb.svg/90px-Klecany_Herb.svg.png',
    hashFilename: '713a73d644f4d556b820bb11785c2a7b.png'
  },
  {
    name: 'Fryšták',
    population: 3843,
    area: 24.17,
    altitude: 271,
    longitude: 17.683480007889,
    latitude: 49.285206066577,
    region: 'Zlínský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Frystak_CoA_CZ.jpg/90px-Frystak_CoA_CZ.jpg',
    hashFilename: '2d3e6869a42bca3f98f753817e5faa25.jpg'
  },
  {
    name: 'Kamenický Šenov',
    population: 3823,
    area: 10.47,
    altitude: 525,
    longitude: 14.472978263424,
    latitude: 50.773661412598,
    region: 'Liberecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Kamenick%C3%BD_%C5%A0enov_CoA_CZ.svg/90px-Kamenick%C3%BD_%C5%A0enov_CoA_CZ.svg.png',
    hashFilename: '27d0e56969e8cbc69d09934cafe919a2.png'
  },
  {
    name: 'Větřní',
    population: 3821,
    area: 27.71,
    altitude: 592,
    longitude: 14.286158877573,
    latitude: 48.774330573721,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Vetrni_znak.jpg/90px-Vetrni_znak.jpg',
    hashFilename: '6a9a189eb8336d8167edc53edcdc508b.jpg'
  },
  {
    name: 'Stráž pod Ralskem',
    population: 3816,
    area: 21.58,
    altitude: 310,
    longitude: 14.801123326758,
    latitude: 50.702865967816,
    region: 'Liberecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Str%C3%A1%C5%BE_pod_Ralskem_CoA_CZ.svg/90px-Str%C3%A1%C5%BE_pod_Ralskem_CoA_CZ.svg.png',
    hashFilename: '3060be75374f27fb151724afecf31386.png'
  },
  {
    name: 'Dobřichovice',
    population: 3776,
    area: 10.92,
    altitude: 205,
    longitude: 14.27475687167,
    latitude: 49.927572663242,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Dobrichovice_CoA_CZ.svg/90px-Dobrichovice_CoA_CZ.svg.png',
    hashFilename: 'a6ab5c23ca39fb59a03e7e8199c5f18f.png'
  },
  {
    name: 'Řevnice',
    population: 3769,
    area: 10.14,
    altitude: 218,
    longitude: 14.235955055448,
    latitude: 49.914028256057,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/COA_%C5%98evnice.png/90px-COA_%C5%98evnice.png',
    hashFilename: 'a731e8e8e4e1041fc1cf9035ae6ec6e7.png'
  },
  {
    name: 'Nové Město pod Smrkem',
    population: 3757,
    area: 28.93,
    altitude: 465,
    longitude: 15.22954639252,
    latitude: 50.924963588909,
    region: 'Liberecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Nove_Mesto_pod_Smrkem_CoA_CZ_2.jpg/90px-Nove_Mesto_pod_Smrkem_CoA_CZ_2.jpg',
    hashFilename: 'be290b2ab1205098400f7c9adf5959d5.jpg'
  },
  {
    name: 'Jablonné v Podještědí',
    population: 3741,
    area: 57.88,
    altitude: 315,
    longitude: 14.76063179631,
    latitude: 50.765345012501,
    region: 'Liberecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jablonn%C3%A9_v_Podje%C5%A1t%C4%9Bd%C3%AD_CoA_CZ.svg/90px-Jablonn%C3%A9_v_Podje%C5%A1t%C4%9Bd%C3%AD_CoA_CZ.svg.png',
    hashFilename: '38b98b927dde9ee2a05243602c7a9aa.png'
  },
  {
    name: 'Zlaté Hory',
    population: 3736,
    area: 85.92,
    altitude: 397,
    longitude: 17.396090652009,
    latitude: 50.263803148531,
    region: 'Olomoucký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Zlat%C3%A9_Hory_znak.jpg/90px-Zlat%C3%A9_Hory_znak.jpg',
    hashFilename: 'b8386dbdf4167e41fea7bb9273ad52e0.jpg'
  },
  {
    name: 'Rájec-Jestřebí',
    population: 3732,
    area: 15.67,
    altitude: 295,
    longitude: 16.639046717886,
    latitude: 49.410967423017,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/R%C3%A1jecJest%C5%99eb%C3%AD_CoA.jpg/90px-R%C3%A1jecJest%C5%99eb%C3%AD_CoA.jpg',
    hashFilename: 'f424aa99d12c6371aa362ab538b4d1d2.jpg'
  },
  {
    name: 'Kamenice nad Lipou',
    population: 3723,
    area: 31.54,
    altitude: 563,
    longitude: 15.075214609068,
    latitude: 49.303096203439,
    region: 'Vysočina',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Kamenice_nad_Lipou_znak.png/90px-Kamenice_nad_Lipou_znak.png',
    hashFilename: '1e2b7cc12c6e06862be7a7645e6325ec.png'
  },
  {
    name: 'Lázně Bělohrad',
    population: 3720,
    area: 28.39,
    altitude: 291,
    longitude: 15.582779302884,
    latitude: 50.42879172604,
    region: 'Královéhradecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Znak_m%C4%9Bsta_L%C3%A1zn%C4%9B_B%C4%9Blohrad.jpg/90px-Znak_m%C4%9Bsta_L%C3%A1zn%C4%9B_B%C4%9Blohrad.jpg',
    hashFilename: '26935927ec5a35b2dc474d1ca47624ce.jpg'
  },
  {
    name: 'Volary',
    population: 3715,
    area: 107.52,
    altitude: 760,
    longitude: 13.88658107426,
    latitude: 48.908902782981,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Volary_znak.png/90px-Volary_znak.png',
    hashFilename: 'a6008bf897c5a230762d91a32de2c08a.png'
  },
  {
    name: 'Lom (okres Most)',
    population: 3715,
    area: 16.8,
    altitude: 294,
    longitude: 13.657390363555,
    latitude: 50.59336916511,
    region: 'Ústecký',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lom_znak.png/90px-Lom_znak.png',
    hashFilename: '31dfdc5b374b662b021f22bf79817f17.png'
  },
  {
    name: 'Velká Bystřice',
    population: 3694,
    area: 9.22,
    altitude: 290,
    longitude: 17.36401034063,
    latitude: 49.594235374559,
    region: 'Olomoucký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Coat_of_arms_of_Velk%C3%A1_Byst%C5%99ice.svg/90px-Coat_of_arms_of_Velk%C3%A1_Byst%C5%99ice.svg.png',
    hashFilename: '2c16dee74dee7dc0b520df33baa67bb8.png'
  },
  {
    name: 'Zbýšov',
    population: 3680,
    area: 6.01,
    altitude: 348,
    longitude: 16.34952542846,
    latitude: 49.155276849127,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Znak_Zb%C3%BD%C5%A1ov_%28okres_Brno-venkov%29.gif/90px-Znak_Zb%C3%BD%C5%A1ov_%28okres_Brno-venkov%29.gif',
    hashFilename: 'b5f13e7ec3094940d906603c057a210b.gif'
  },
  {
    name: 'Židlochovice',
    population: 3673,
    area: 5.93,
    altitude: 190,
    longitude: 16.618813305226,
    latitude: 49.039551985985,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/%C5%BDidlochovice_znak.png/90px-%C5%BDidlochovice_znak.png',
    hashFilename: 'e02b750fa1b8f4732338fa42ce6e8b44.png'
  },
  {
    name: 'České Velenice',
    population: 3667,
    area: 12.09,
    altitude: 489,
    longitude: 14.963673627901,
    latitude: 48.768573633066,
    region: 'Jihočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/%C4%8Cesk%C3%A9_Velenice.svg/90px-%C4%8Cesk%C3%A9_Velenice.svg.png',
    hashFilename: '3a27b225883b62b9de53fdf589bd43c2.png'
  },
  {
    name: 'Dobrovice',
    population: 3647,
    area: 24.63,
    altitude: 247,
    longitude: 14.962418289957,
    latitude: 50.369388230822,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dobrovice_CoA_CZ.svg/90px-Dobrovice_CoA_CZ.svg.png',
    hashFilename: 'ee489b0745e42f05a61c3de5680efda8.png'
  },
  {
    name: 'Stod',
    population: 3628,
    area: 20.04,
    altitude: 337,
    longitude: 13.16478397126,
    latitude: 49.639196063817,
    region: 'Plzeňský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Stod_CoA.jpg/90px-Stod_CoA.jpg',
    hashFilename: 'eb306c7ebc6a59422e490bd58f0bda45.jpg'
  },
  {
    name: 'Lanžhot',
    population: 3627,
    area: 54.81,
    altitude: 164,
    longitude: 16.966936264446,
    latitude: 48.724453275107,
    region: 'Jihomoravský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Znak_m%C4%9Bsta_Lan%C5%BEhot.jpg/90px-Znak_m%C4%9Bsta_Lan%C5%BEhot.jpg',
    hashFilename: '9d4aa374c0cd6f2fa13a8c16096e8234.jpg'
  },
  {
    name: 'Suchdol nad Lužnicí',
    population: 3608,
    area: 63.58,
    altitude: 454,
    longitude: 14.876960231353,
    latitude: 48.893401070196,
    region: 'Jihočeský',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Suchdol_nad_Lu%C5%BEnic%C3%AD_znak.jpg/90px-Suchdol_nad_Lu%C5%BEnic%C3%AD_znak.jpg',
    hashFilename: 'b5d4db2cb86a5aa11da6f753da6f5815.jpg'
  },
  {
    name: 'Valtice',
    population: 3593,
    area: 47.85,
    altitude: 192,
    longitude: 16.754980660173,
    latitude: 48.740717231543,
    region: 'Jihomoravský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Coat_of_arms_of_Valtice.svg/90px-Coat_of_arms_of_Valtice.svg.png',
    hashFilename: 'b14b47330aa0cc86d373579c0e8eee3c.png'
  },
  {
    name: 'Libušín',
    population: 3588,
    area: 9.48,
    altitude: 317,
    longitude: 14.054657380156,
    latitude: 50.168272849798,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Libu%C5%A1%C3%ADn_znak.jpg/90px-Libu%C5%A1%C3%ADn_znak.jpg',
    hashFilename: '59594f03fffe113f7d37d0b0e01353aa.jpg'
  },
  {
    name: 'Libčice nad Vltavou',
    population: 3577,
    area: 7.1,
    altitude: 207,
    longitude: 14.362753126365,
    latitude: 50.199102800559,
    region: 'Středočeský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Libcice_nad_Vltavou_CoA.jpg/90px-Libcice_nad_Vltavou_CoA.jpg',
    hashFilename: 'fd6c59dd12ce50aca7b805fde432b6d9.jpg'
  },
  {
    name: 'Benešov nad Ploučnicí',
    population: 3574,
    area: 9.77,
    altitude: 210,
    longitude: 14.312497327553,
    latitude: 50.741663932519,
    region: 'Ústecký',
    signUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CoA_of_Bene%C5%A1ov_nad_Plou%C4%8Dnic%C3%AD.svg/90px-CoA_of_Bene%C5%A1ov_nad_Plou%C4%8Dnic%C3%AD.svg.png',
    hashFilename: '481e86f2ae9d4ca5cca5721eeef16b76.png'
  },
  {
    name: 'Štramberk',
    population: 3549,
    area: 9.33,
    altitude: 415,
    longitude: 18.117444108979,
    latitude: 49.591796793611,
    region: 'Moravskoslezský',
    signUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Erb-stramberk.jpg/90px-Erb-stramberk.jpg',
    hashFilename: 'f93c5f21b8d2b8ec8674fb4871733f41.jpg'
  }
];

export default cities;
