const cities = [
   {
      'name': 'Praha',
      'population': '1275406',
      'area': '496',
      'altitude': '399',
      'longitude': '14.417828',
      'latitude': '50.087106',
      'region': 'Hl. m. Praha'
   },
   {
      'name': 'Brno',
      'population': '379466',
      'area': '230.18',
      'altitude': '497',
      'longitude': '16.606085',
      'latitude': '49.193816',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Ostrava',
      'population': '279791',
      'area': '214.23',
      'altitude': '334',
      'longitude': '18.291581',
      'latitude': '49.841743',
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Plzeň',
      'population': '168733',
      'area': '137.65',
      'altitude': '452',
      'longitude': '13.377767',
      'latitude': '49.748147',
      'region': 'Plzeňský'
   },
   {
      'name': 'Liberec',
      'population': '102951',
      'area': '106.09',
      'altitude': '374',
      'longitude': '15.058251',
      'latitude': '50.769002',
      'region': 'Liberecký'
   },
   {
      'name': 'Olomouc',
      'population': '99496',
      'area': '103.33',
      'altitude': '219',
      'longitude': '17.251466',
      'latitude': '49.593699',
      'region': 'Olomoucký'
   },
   {
      'name': 'České Budějovice',
      'population': '93426',
      'area': '55.71',
      'altitude': '381',
      'longitude': '14.474390',
      'latitude': '48.973841',
      'region': 'Jihočeský'
   },
   {
      'name': 'Hradec Králové',
      'population': '90596',
      'area': '105.69',
      'altitude': '235',
      'longitude': '15.837246',
      'latitude': '50.212330',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Ústí nad Labem',
      'population': '90378',
      'area': '93.97',
      'altitude': '218',
      'longitude': '14.036975',
      'latitude': '50.660316',
      'region': 'Ústecký'
   },
   {
      'name': 'Pardubice',
      'population': '88520',
      'area': '82.655[2]',
      'altitude': '220',
      'longitude': '15.778958',
      'latitude': '50.039049',
      'region': 'Pardubický'
   },
   {
      'name': 'Zlín',
      'population': '72973',
      'area': '102.83',
      'altitude': '230',
      'longitude': '17.665842',
      'latitude': '49.226624',
      'region': 'Olomoucký'
   },
   {
      'name': 'Havířov',
      'population': '69084',
      'area': '32.08',
      'altitude': '239',
      'longitude': '18.422702',
      'latitude': '49.783083',
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Kladno',
      'population': '66903',
      'area': '36.97',
      'altitude': '381',
      'longitude': '14.102998',
      'latitude': '50.147821',
      'region': 'Středočeský'
   },
   {
      'name': 'Most (město)',
      'population': '62866',
      'area': '86.94',
      'altitude': '233',
      'longitude': '13.640524',
      'latitude': '50.502867',
      'region': 'Ústecký'
   },
   {
      'name': 'Opava',
      'population': '54840',
      'area': '90.57',
      'altitude': '257',
      'longitude': '17.902510',
      'latitude': '49.938873',
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Frýdek-Místek',
      'population': '53899',
      'area': '51.56',
      'altitude': '291',
      'longitude': '18.350637',
      'latitude': '49.685506',
      'region': '#NENÍ_K_DISPOZICI'
   },
   {
      'name': 'Jihlava',
      'population': '50108',
      'area': '87.86',
      'altitude': '525',
      'longitude': '15.591191',
      'latitude': '49.396014',
      'region': 'Vysočina'
   },
   {
      'name': 'Karviná',
      'population': '49881',
      'area': '57.52',
      'altitude': '221',
      'longitude': '18.542995',
      'latitude': '49.853942',
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Teplice',
      'population': '48766',
      'area': '23.78',
      'altitude': '399',
      'longitude': '13.824423',
      'latitude': '50.641389',
      'region': 'Ústecký'
   },
   {
      'name': 'Děčín',
      'population': '47029',
      'area': '117.70',
      'altitude': '135',
      'longitude': '14.195645',
      'latitude': '50.773765',
      'region': 'Ústecký'
   },
   {
      'name': 'Chomutov',
      'population': '46263',
      'area': '29.25',
      'altitude': '330',
      'longitude': '13.410816',
      'latitude': '50.462475',
      'region': 'Ústecký'
   },
   {
      'name': 'Karlovy Vary',
      'population': '45500',
      'area': '59.10',
      'altitude': '447',
      'longitude': '12.865922',
      'latitude': '50.228046',
      'region': 'Karlovarský'
   },
   {
      'name': 'Jablonec nad Nisou',
      'population': '44588',
      'area': '31.38',
      'altitude': '475',
      'longitude': '15.171279',
      'latitude': '50.724523',
      'region': 'Liberecký'
   },
   {
      'name': 'Prostějov',
      'population': '43055',
      'area': '39.04',
      'altitude': '223',
      'longitude': '17.109298',
      'latitude': '49.471944',
      'region': 'Olomoucký'
   },
   {
      'name': 'Mladá Boleslav',
      'population': '41868',
      'area': '28.90',
      'altitude': '235',
      'longitude': '14.903544',
      'latitude': '50.412332',
      'region': 'Středočeský'
   },
   {
      'name': 'Přerov',
      'population': '41404',
      'area': '58.45',
      'altitude': '210',
      'longitude': '17.446161',
      'latitude': '49.453653',
      'region': 'Olomoucký'
   },
   {
      'name': 'Česká Lípa',
      'population': '36740',
      'area': '66.10',
      'altitude': '258',
      'longitude': '14.537930',
      'latitude': '50.686590',
      'region': 'Liberecký'
   },
   {
      'name': 'Třebíč',
      'population': '34415',
      'area': '57.59',
      'altitude': '405',
      'longitude': '15.878082',
      'latitude': '49.215584',
      'region': 'Vysočina'
   },
   {
      'name': 'Třinec',
      'population': '34222',
      'area': '85.37',
      'altitude': '306',
      'longitude': '18.672753',
      'latitude': '49.677715',
      'region': '#NENÍ_K_DISPOZICI'
   },
   {
      'name': 'Tábor',
      'population': '33410',
      'area': '62.22',
      'altitude': '437',
      'longitude': '14.657882',
      'latitude': '49.414129',
      'region': 'Jihočeský'
   },
   {
      'name': 'Znojmo',
      'population': '33370',
      'area': '65.90',
      'altitude': '290',
      'longitude': '16.048628',
      'latitude': '48.855449',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Kolín',
      'population': '32046',
      'area': '34.99',
      'altitude': '220',
      'longitude': '15.201039',
      'latitude': '50.028746',
      'region': 'Středočeský'
   },
   {
      'name': 'Příbram',
      'population': '31651',
      'area': '36.10',
      'altitude': '502',
      'longitude': '14.010561',
      'latitude': '49.689200',
      'region': 'Středočeský'
   },
   {
      'name': 'Cheb',
      'population': '30420',
      'area': '96.36',
      'altitude': '459',
      'longitude': '12.371099',
      'latitude': '50.079044',
      'region': 'Karlovarský'
   },
   {
      'name': 'Písek (město)',
      'population': '29814',
      'area': '63.23',
      'altitude': '378',
      'longitude': '14.147326',
      'latitude': '49.308782',
      'region': 'Jihočeský'
   },
   {
      'name': 'Trutnov',
      'population': '29430',
      'area': '103.32',
      'altitude': '414',
      'longitude': '15.916048',
      'latitude': '50.561696',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Orlová',
      'population': '28206',
      'area': '24.67',
      'altitude': '282',
      'longitude': '18.426842',
      'latitude': '49.871854',
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Kroměříž',
      'population': '27838',
      'area': '50.98',
      'altitude': '201',
      'longitude': '17.392929',
      'latitude': '49.297851',
      'region': 'Olomoucký'
   },
   {
      'name': 'Vsetín',
      'population': '25226',
      'area': '57.61',
      'altitude': '348',
      'longitude': '17.993587',
      'latitude': '49.338041',
      'region': 'Olomoucký'
   },
   {
      'name': 'Šumperk',
      'population': '24910',
      'area': '27.88',
      'altitude': '330',
      'longitude': '16.970455',
      'latitude': '49.965324',
      'region': 'Olomoucký'
   },
   {
      'name': 'Uherské Hradiště',
      'population': '24430',
      'area': '21.26',
      'altitude': '179',
      'longitude': '17.460571',
      'latitude': '49.067927',
      'region': 'Olomoucký'
   },
   {
      'name': 'Břeclav',
      'population': '23943',
      'area': '77.19',
      'altitude': '158',
      'longitude': '16.880729',
      'latitude': '48.758960',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Hodonín',
      'population': '23828',
      'area': '63.31',
      'altitude': '167',
      'longitude': '17.128363',
      'latitude': '48.848320',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Český Těšín',
      'population': '23468',
      'area': '33.79',
      'altitude': '270',
      'longitude': '18.625598',
      'latitude': '49.746341',
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Litoměřice',
      'population': '22950',
      'area': '17.99',
      'altitude': '300',
      'longitude': '14.131442',
      'latitude': '50.533538',
      'region': 'Ústecký'
   },
   {
      'name': 'Havlíčkův Brod',
      'population': '22879',
      'area': '64.93',
      'altitude': '422',
      'longitude': '15.578583',
      'latitude': '49.606578',
      'region': 'Vysočina'
   },
   {
      'name': 'Nový Jičín',
      'population': '22813',
      'area': '36.52',
      'altitude': '284',
      'longitude': '18.010388',
      'latitude': '49.594369',
      'region': '#ODKAZ!'
   },
   {
      'name': 'Chrudim',
      'population': '22773',
      'area': '33.21',
      'altitude': '240',
      'longitude': '15.795575',
      'latitude': '49.951092',
      'region': 'Pardubický'
   },
   {
      'name': 'Krnov',
      'population': '22665',
      'area': '44.29',
      'altitude': '316',
      'longitude': '17.701973',
      'latitude': '50.090522',
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Litvínov',
      'population': '22482',
      'area': '40.714',
      'altitude': '338',
      'longitude': '13.611726',
      'latitude': '50.598837',
      'region': 'Ústecký'
   },
   {
      'name': 'Strakonice',
      'population': '22214',
      'area': '34.67',
      'altitude': '393',
      'longitude': '13.901639',
      'latitude': '49.261221',
      'region': 'Jihočeský'
   },
   {
      'name': 'Sokolov',
      'population': '22097',
      'area': '22.92',
      'altitude': '401',
      'longitude': '12.643671',
      'latitude': '50.179547',
      'region': 'Karlovarský'
   },
   {
      'name': 'Valašské Meziříčí',
      'population': '21883',
      'area': '35.44',
      'altitude': '294',
      'longitude': '17.970583',
      'latitude': '49.471163',
      'region': 'Olomoucký'
   },
   {
      'name': 'Klatovy',
      'population': '21587',
      'area': '80.85',
      'altitude': '405',
      'longitude': '13.292941',
      'latitude': '49.394639',
      'region': 'Plzeňský'
   },
   {
      'name': 'Kopřivnice',
      'population': '21395',
      'area': '27.49',
      'altitude': '320',
      'longitude': '18.147160',
      'latitude': '49.597824',
      'region': '#ODKAZ!'
   },
   {
      'name': 'Jindřichův Hradec',
      'population': '20774',
      'area': '74.29',
      'altitude': '475',
      'longitude': '15.001932',
      'latitude': '49.147091',
      'region': 'Jihočeský'
   },
   {
      'name': 'Kutná Hora',
      'population': '20450',
      'area': '33.07',
      'altitude': '254',
      'longitude': '15.269119',
      'latitude': '49.948394',
      'region': 'Středočeský'
   },
   {
      'name': 'Bohumín',
      'population': '20450',
      'area': '31.03',
      'altitude': '198',
      'longitude': '18.358100',
      'latitude': '49.904000',
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Žďár nad Sázavou',
      'population': '20338',
      'area': '37.06',
      'altitude': '580',
      'longitude': '15.936123',
      'latitude': '49.564997',
      'region': 'Vysočina'
   },
   {
      'name': 'Vyškov',
      'population': '20187',
      'area': '50.46',
      'altitude': '254',
      'longitude': '16.998987',
      'latitude': '49.277268',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Beroun',
      'population': '19984',
      'area': '31.25',
      'altitude': '235',
      'longitude': '14.074581',
      'latitude': '49.964297',
      'region': 'Středočeský'
   },
   {
      'name': 'Blansko',
      'population': '19715',
      'area': '44.97',
      'altitude': '276',
      'longitude': '16.643754',
      'latitude': '49.363493',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Mělník',
      'population': '19472',
      'area': '24.96',
      'altitude': '215',
      'longitude': '14.474946',
      'latitude': '50.352412',
      'region': 'Středočeský'
   },
   {
      'name': 'Náchod',
      'population': '19220',
      'area': '33.34',
      'altitude': '347',
      'longitude': '16.163860',
      'latitude': '50.416326',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Jirkov',
      'population': '18945',
      'area': '17.01',
      'altitude': '305',
      'longitude': '13.447754',
      'latitude': '50.500469',
      'region': 'Ústecký'
   },
   {
      'name': 'Brandýs nad Labem-Stará Boleslav',
      'population': '18755',
      'area': '22.65',
      'altitude': '169',
      'longitude': '14.658605',
      'latitude': '50.186129',
      'region': 'Středočeský'
   },
   {
      'name': 'Žatec',
      'population': '18570',
      'area': '42.68',
      'altitude': '233',
      'longitude': '13.544224',
      'latitude': '50.330030',
      'region': 'Ústecký'
   },
   {
      'name': 'Kralupy nad Vltavou',
      'population': '18189',
      'area': '21.9',
      'altitude': '274',
      'longitude': '14.308121',
      'latitude': '50.242399',
      'region': 'Středočeský'
   },
   {
      'name': 'Louny',
      'population': '17760',
      'area': '24.14',
      'altitude': '185',
      'longitude': '13.796309',
      'latitude': '50.357773',
      'region': 'Ústecký'
   },
   {
      'name': 'Kadaň',
      'population': '17628',
      'area': '65.62',
      'altitude': '300',
      'longitude': '13.270113',
      'latitude': '50.376561',
      'region': 'Ústecký'
   },
   {
      'name': 'Hranice (okres Přerov)',
      'population': '17495',
      'area': '49.78',
      'altitude': '250',
      'longitude': '17.734740',
      'latitude': '49.550097',
      'region': 'Olomoucký'
   },
   {
      'name': 'Otrokovice',
      'population': '17183',
      'area': '19.63',
      'altitude': '190',
      'longitude': '17.535427',
      'latitude': '49.208235',
      'region': 'Olomoucký'
   },
   {
      'name': 'Benešov',
      'population': '16448',
      'area': '46.87',
      'altitude': '368',
      'longitude': '16.770593',
      'latitude': '49.509433',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Svitavy',
      'population': '16261',
      'area': '31.33',
      'altitude': '435',
      'longitude': '16.462234',
      'latitude': '49.757041',
      'region': 'Pardubický'
   },
   {
      'name': 'Uherský Brod',
      'population': '16206',
      'area': '52.06',
      'altitude': '251',
      'longitude': '17.647382',
      'latitude': '49.024922',
      'region': 'Olomoucký'
   },
   {
      'name': 'Říčany',
      'population': '16182',
      'area': '25.81',
      'altitude': '341',
      'longitude': '14.654269',
      'latitude': '49.991675',
      'region': 'Středočeský'
   },
   {
      'name': 'Rožnov pod Radhoštěm',
      'population': '16077',
      'area': '39.48',
      'altitude': '378',
      'longitude': '18.142681',
      'latitude': '49.457597',
      'region': 'Olomoucký'
   },
   {
      'name': 'Jičín',
      'population': '15871',
      'area': '25.86',
      'altitude': '287',
      'longitude': '15.354214',
      'latitude': '50.437103',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Slaný',
      'population': '15862',
      'area': '35.12',
      'altitude': '234',
      'longitude': '14.086936',
      'latitude': '50.231447',
      'region': 'Středočeský'
   },
   {
      'name': 'Neratovice',
      'population': '15831',
      'area': '20.00',
      'altitude': '162',
      'longitude': '14.520586',
      'latitude': '50.255485',
      'region': 'Středočeský'
   },
   {
      'name': 'Ostrov (okres Karlovy Vary)',
      'population': '15822',
      'area': '50.41',
      'altitude': '398',
      'longitude': '12.950275',
      'latitude': '50.306284',
      'region': 'Karlovarský'
   },
   {
      'name': 'Pelhřimov',
      'population': '15755',
      'area': '95.28',
      'altitude': '494',
      'longitude': '15.223219',
      'latitude': '49.431432',
      'region': 'Vysočina'
   },
   {
      'name': 'Bruntál',
      'population': '15523',
      'area': '29.34',
      'altitude': '547',
      'longitude': '17.471606',
      'latitude': '49.993414',
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Dvůr Králové nad Labem',
      'population': '15170',
      'area': '35.84',
      'altitude': '298',
      'longitude': '15.814692',
      'latitude': '50.431704',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Rakovník',
      'population': '15142',
      'area': '18.5',
      'altitude': '322',
      'longitude': '13.728805',
      'latitude': '50.104266',
      'region': 'Středočeský'
   },
   {
      'name': 'Česká Třebová',
      'population': '15062',
      'area': '41.01',
      'altitude': '375',
      'longitude': '16.447367',
      'latitude': '49.902154',
      'region': 'Pardubický'
   },
   {
      'name': 'Nymburk',
      'population': '14780',
      'area': '20.59',
      'altitude': '193',
      'longitude': '15.040725',
      'latitude': '50.186130',
      'region': 'Středočeský'
   },
   {
      'name': 'Varnsdorf',
      'population': '14738',
      'area': '26.23',
      'altitude': '332',
      'longitude': '14.619955',
      'latitude': '50.911343',
      'region': 'Ústecký'
   },
   {
      'name': 'Bílina (město)',
      'population': '14420',
      'area': '32.50',
      'altitude': '207',
      'longitude': '13.774288',
      'latitude': '50.548917',
      'region': 'Ústecký'
   },
   {
      'name': 'Poděbrady',
      'population': '14317',
      'area': '33.68',
      'altitude': '185',
      'longitude': '15.116628',
      'latitude': '50.142715',
      'region': 'Středočeský'
   },
   {
      'name': 'Klášterec nad Ohří',
      'population': '14190',
      'area': '53.79',
      'altitude': '320',
      'longitude': '13.171331',
      'latitude': '50.384539',
      'region': 'Ústecký'
   },
   {
      'name': 'Turnov',
      'population': '14174',
      'area': '22.71',
      'altitude': '260',
      'longitude': '15.157294',
      'latitude': '50.586675',
      'region': 'Liberecký'
   },
   {
      'name': 'Ústí nad Orlicí',
      'population': '13936',
      'area': '36.37',
      'altitude': '340',
      'longitude': '16.393491',
      'latitude': '49.973982',
      'region': 'Pardubický'
   },
   {
      'name': 'Rokycany',
      'population': '13826',
      'area': '30.67',
      'altitude': '362',
      'longitude': '13.595553',
      'latitude': '49.742199',
      'region': 'Plzeňský'
   },
   {
      'name': 'Hlučín',
      'population': '13562',
      'area': '21.14',
      'altitude': '241',
      'longitude': '18.1946831',
      'latitude': '49.8940948',
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Zábřeh',
      'population': '13281',
      'area': '34.59',
      'altitude': '285',
      'longitude': '16.872292',
      'latitude': '49.882134',
      'region': 'Olomoucký'
   },
   {
      'name': 'Šternberk',
      'population': '13144',
      'area': '48.79',
      'altitude': '268',
      'longitude': '17.299825',
      'latitude': '49.731502',
      'region': 'Olomoucký'
   },
   {
      'name': 'Chodov (okres Sokolov)',
      'population': '12683',
      'area': '14.26',
      'altitude': '418',
      'longitude': '12.749282',
      'latitude': '50.238756',
      'region': 'Karlovarský'
   },
   {
      'name': 'Tachov',
      'population': '12538',
      'area': '40.84',
      'altitude': '483',
      'longitude': '12.631338',
      'latitude': '49.795134',
      'region': 'Plzeňský'
   },
   {
      'name': 'Roudnice nad Labem',
      'population': '12506',
      'area': '16.67',
      'altitude': '195',
      'longitude': '14.260109',
      'latitude': '50.423808',
      'region': 'Ústecký'
   },
   {
      'name': 'Aš',
      'population': '12483',
      'area': '55.86',
      'altitude': '666',
      'longitude': '12.190264',
      'latitude': '50.222290',
      'region': 'Karlovarský'
   },
   {
      'name': 'Český Krumlov',
      'population': '12461',
      'area': '22.16',
      'altitude': '492',
      'longitude': '14.315238',
      'latitude': '48.810981',
      'region': 'Jihočeský'
   },
   {
      'name': 'Milovice',
      'population': '12460',
      'area': '28.34',
      'altitude': '221',
      'longitude': '14.888632',
      'latitude': '50.225961',
      'region': 'Středočeský'
   },
   {
      'name': 'Krupka',
      'population': '12365',
      'area': '46.61',
      'altitude': '300',
      'longitude': '13.872912',
      'latitude': '50.682436',
      'region': 'Ústecký'
   },
   {
      'name': 'Jaroměř',
      'population': '12260',
      'area': '23.95',
      'altitude': '254',
      'longitude': '15.919488',
      'latitude': '50.355245',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Mariánské Lázně',
      'population': '12237',
      'area': '51.79',
      'altitude': '578',
      'longitude': '12.701922',
      'latitude': '49.975718',
      'region': 'Karlovarský'
   },
   {
      'name': 'Čelákovice',
      'population': '12008',
      'area': '15.88',
      'altitude': '184',
      'longitude': '14.750140',
      'latitude': '50.163341',
      'region': 'Středočeský'
   },
   {
      'name': 'Vysoké Mýto',
      'population': '12007',
      'area': '42.03',
      'altitude': '284',
      'longitude': '16.161823',
      'latitude': '49.953400',
      'region': 'Pardubický'
   },
   {
      'name': 'Vrchlabí',
      'population': '11968',
      'area': '27.65',
      'altitude': '477',
      'longitude': '15.609046',
      'latitude': '50.627047',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Boskovice',
      'population': '11661',
      'area': '27.82',
      'altitude': '381',
      'longitude': '16.661485',
      'latitude': '49.487195',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Nový Bor',
      'population': '11458',
      'area': '19.44',
      'altitude': '365',
      'longitude': '14.556700',
      'latitude': '50.759998',
      'region': 'Liberecký'
   },
   {
      'name': 'Holešov',
      'population': '11426',
      'area': '33.95',
      'altitude': '232',
      'longitude': '17.581312',
      'latitude': '49.331171',
      'region': 'Olomoucký'
   },
   {
      'name': 'Vlašim',
      'population': '11357',
      'area': '41.42',
      'altitude': '365',
      'longitude': '14.897248',
      'latitude': '49.703522',
      'region': 'Středočeský'
   },
   {
      'name': 'Velké Meziříčí',
      'population': '11325',
      'area': '40.66',
      'altitude': '425',
      'longitude': '16.011921',
      'latitude': '49.355375',
      'region': 'Vysočina'
   },
   {
      'name': 'Uničov',
      'population': '11066',
      'area': '48.28',
      'altitude': '248',
      'longitude': '17.121528',
      'latitude': '49.770774',
      'region': 'Olomoucký'
   },
   {
      'name': 'Kyjov',
      'population': '10849',
      'area': '29.88',
      'altitude': '192',
      'longitude': '15.881553',
      'latitude': '49.443444',
      'region': 'Vysočina'
   },
   {
      'name': 'Kuřim',
      'population': '10847',
      'area': '17.20',
      'altitude': '286',
      'longitude': '16.529299',
      'latitude': '49.309095',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Domažlice',
      'population': '10749',
      'area': '24.62',
      'altitude': '428',
      'longitude': '12.930250',
      'latitude': '49.440098',
      'region': 'Plzeňský'
   },
   {
      'name': 'Humpolec',
      'population': '10741',
      'area': '51.51',
      'altitude': '527',
      'longitude': '15.360415',
      'latitude': '49.540948',
      'region': 'Vysočina'
   },
   {
      'name': 'Rychnov nad Kněžnou',
      'population': '10717',
      'area': '34.99',
      'altitude': '320',
      'longitude': '16.275451',
      'latitude': '50.160799',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Rumburk',
      'population': '10679',
      'area': '24.72',
      'altitude': '387',
      'longitude': '14.553360',
      'latitude': '50.954736',
      'region': 'Ústecký'
   },
   {
      'name': 'Sušice',
      'population': '10662',
      'area': '45.65',
      'altitude': '472',
      'longitude': '17.452223',
      'latitude': '49.122247',
      'region': 'Olomoucký'
   },
   {
      'name': 'Jeseník',
      'population': '10658',
      'area': '38.23[2]',
      'altitude': '432',
      'longitude': '17.204593',
      'latitude': '50.229370',
      'region': 'Olomoucký'
   },
   {
      'name': 'Prachatice',
      'population': '10588',
      'area': '38.92',
      'altitude': '561',
      'longitude': '13.997274',
      'latitude': '49.012819',
      'region': 'Jihočeský'
   },
   {
      'name': 'Veselí nad Moravou',
      'population': '10577',
      'area': '35.45',
      'altitude': '176',
      'longitude': '17.380033',
      'latitude': '48.952155',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Frenštát pod Radhoštěm',
      'population': '10569',
      'area': '11.43',
      'altitude': '401',
      'longitude': '18.211638',
      'latitude': '49.547079',
      'region': '#ODKAZ!'
   },
   {
      'name': 'Čáslav',
      'population': '10128',
      'area': '26.46',
      'altitude': '231',
      'longitude': '15.389718',
      'latitude': '49.910992',
      'region': 'Středočeský'
   },
   {
      'name': 'Králův Dvůr',
      'population': '9995',
      'area': '15.26',
      'altitude': '240',
      'longitude': '14.034453',
      'latitude': '49.949807',
      'region': 'Středočeský'
   },
   {
      'name': 'Litomyšl',
      'population': '9914',
      'area': '33.44',
      'altitude': '330',
      'longitude': '16.310523',
      'latitude': '49.872033',
      'region': 'Pardubický'
   },
   {
      'name': 'Nové Město na Moravě',
      'population': '9829',
      'area': '61.13',
      'altitude': '594',
      'longitude': '16.072717',
      'latitude': '49.560663',
      'region': 'Vysočina'
   },
   {
      'name': 'Frýdlant nad Ostravicí',
      'population': '9796',
      'area': '21.91',
      'altitude': '357',
      'longitude': '18.359665',
      'latitude': '49.592804',
      'region': '#NENÍ_K_DISPOZICI'
   },
   {
      'name': 'Jesenice (okres Praha-západ)',
      'population': '9777',
      'area': '17.54',
      'altitude': '358',
      'longitude': '14.513496',
      'latitude': '49.968143',
      'region': 'Středočeský'
   },
   {
      'name': 'Ivančice',
      'population': '9737',
      'area': '47.65',
      'altitude': '210',
      'longitude': '16.377518',
      'latitude': '49.101446',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Lysá nad Labem',
      'population': '9732',
      'area': '33.67',
      'altitude': '183',
      'longitude': '14.832812',
      'latitude': '50.201432',
      'region': 'Středočeský'
   },
   {
      'name': 'Moravská Třebová',
      'population': '9656',
      'area': '42.05',
      'altitude': '360',
      'longitude': '16.664014',
      'latitude': '49.757393',
      'region': 'Pardubický'
   },
   {
      'name': 'Litovel',
      'population': '9567',
      'area': '46.40',
      'altitude': '233',
      'longitude': '17.076149',
      'latitude': '49.701211',
      'region': 'Olomoucký'
   },
   {
      'name': 'Hlinsko',
      'population': '9416',
      'area': '24.27',
      'altitude': '580',
      'longitude': '17.579143',
      'latitude': '49.494542',
      'region': 'Olomoucký'
   },
   {
      'name': 'Lanškroun',
      'population': '9326',
      'area': '20.65',
      'altitude': '373',
      'longitude': '16.611899',
      'latitude': '49.912168',
      'region': 'Pardubický'
   },
   {
      'name': 'Přelouč',
      'population': '9315',
      'area': '30.47',
      'altitude': '212',
      'longitude': '15.560307',
      'latitude': '50.039849',
      'region': 'Pardubický'
   },
   {
      'name': 'Studénka',
      'population': '9277',
      'area': '30.92',
      'altitude': '239',
      'longitude': '18.054904',
      'latitude': '49.714716',
      'region': '#ODKAZ!'
   },
   {
      'name': 'Tišnov',
      'population': '9164',
      'area': '17.12',
      'altitude': '256',
      'longitude': '16.424380',
      'latitude': '49.348719',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Nové Město nad Metují',
      'population': '9132',
      'area': '23.13',
      'altitude': '332',
      'longitude': '16.151466',
      'latitude': '50.344566',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Mohelnice',
      'population': '9103',
      'area': '46.20',
      'altitude': '267',
      'longitude': '16.919462',
      'latitude': '49.776984',
      'region': 'Olomoucký'
   },
   {
      'name': 'Chotěboř',
      'population': '8995',
      'area': '54.05',
      'altitude': '515',
      'longitude': '15.670182',
      'latitude': '49.720719',
      'region': 'Vysočina'
   },
   {
      'name': 'Nová Paka',
      'population': '8857',
      'area': '28.68',
      'altitude': '427',
      'longitude': '15.515032',
      'latitude': '50.494495',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Hostivice',
      'population': '8777',
      'area': '14.47',
      'altitude': '341',
      'longitude': '14.258562',
      'latitude': '50.081576',
      'region': 'Středočeský'
   },
   {
      'name': 'Mnichovo Hradiště',
      'population': '8711',
      'area': '34.32',
      'altitude': '240',
      'longitude': '14.971335',
      'latitude': '50.527206',
      'region': 'Středočeský'
   },
   {
      'name': 'Polička',
      'population': '8710',
      'area': '33.12',
      'altitude': '555',
      'longitude': '16.265434',
      'latitude': '49.714647',
      'region': 'Pardubický'
   },
   {
      'name': 'Dobříš',
      'population': '8707',
      'area': '53.42',
      'altitude': '371',
      'longitude': '14.167167',
      'latitude': '49.781134',
      'region': 'Středočeský'
   },
   {
      'name': 'Roztoky (okres Praha-západ)',
      'population': '8611',
      'area': '8.13',
      'altitude': '237',
      'longitude': '14.397604',
      'latitude': '50.158414',
      'region': 'Středočeský'
   },
   {
      'name': 'Lovosice',
      'population': '8605',
      'area': '11.89',
      'altitude': '151',
      'longitude': '14.051030',
      'latitude': '50.515039',
      'region': 'Ústecký'
   },
   {
      'name': 'Duchcov',
      'population': '8589',
      'area': '15.41',
      'altitude': '201',
      'longitude': '13.746208',
      'latitude': '50.603766',
      'region': 'Ústecký'
   },
   {
      'name': 'Choceň',
      'population': '8477',
      'area': '21.69',
      'altitude': '290',
      'longitude': '16.223026',
      'latitude': '50.001606',
      'region': 'Pardubický'
   },
   {
      'name': 'Štětí',
      'population': '8438',
      'area': '53.90',
      'altitude': '155',
      'longitude': '14.374212',
      'latitude': '50.452985',
      'region': 'Ústecký'
   },
   {
      'name': 'Příbor (okres Nový Jičín)',
      'population': '8297',
      'area': '22.15',
      'altitude': '278',
      'longitude': '18.144987',
      'latitude': '49.640938',
      'region': '#ODKAZ!'
   },
   {
      'name': 'Hořice',
      'population': '8274',
      'area': '21.43',
      'altitude': '311',
      'longitude': '15.185398',
      'latitude': '49.599261',
      'region': 'Vysočina'
   },
   {
      'name': 'Červený Kostelec',
      'population': '8229',
      'area': '24.07',
      'altitude': '414',
      'longitude': '16.092894',
      'latitude': '50.476264',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Semily',
      'population': '8120',
      'area': '16.31',
      'altitude': '340',
      'longitude': '15.335521',
      'latitude': '50.601906',
      'region': 'Liberecký'
   },
   {
      'name': 'Třeboň',
      'population': '8092',
      'area': '98.31',
      'altitude': '434',
      'longitude': '14.770650',
      'latitude': '49.003639',
      'region': 'Jihočeský'
   },
   {
      'name': 'Milevsko',
      'population': '8033',
      'area': '42.29',
      'altitude': '461',
      'longitude': '14.360005',
      'latitude': '49.450893',
      'region': 'Jihočeský'
   },
   {
      'name': 'Bystřice pod Hostýnem',
      'population': '7984',
      'area': '26.81',
      'altitude': '315',
      'longitude': '17.674012',
      'latitude': '49.399238',
      'region': 'Olomoucký'
   },
   {
      'name': 'Rýmařov',
      'population': '7969',
      'area': '60.73',
      'altitude': '590',
      'longitude': '17.271767',
      'latitude': '49.931830',
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Bystřice nad Pernštejnem',
      'population': '7835',
      'area': '53.07',
      'altitude': '535',
      'longitude': '16.261467',
      'latitude': '49.522947',
      'region': 'Vysočina'
   },
   {
      'name': 'Lipník nad Bečvou',
      'population': '7826',
      'area': '30.62',
      'altitude': '233',
      'longitude': '17.586308',
      'latitude': '49.527547',
      'region': 'Olomoucký'
   },
   {
      'name': 'Dubí',
      'population': '7805',
      'area': '33.85',
      'altitude': '389',
      'longitude': '13.788833',
      'latitude': '50.681034',
      'region': 'Ústecký'
   },
   {
      'name': 'Týn nad Vltavou',
      'population': '7804',
      'area': '43.02',
      'altitude': '365',
      'longitude': '14.420567',
      'latitude': '49.223397',
      'region': 'Jihočeský'
   },
   {
      'name': 'Hrádek nad Nisou',
      'population': '7704',
      'area': '48.55',
      'altitude': '255',
      'longitude': '14.844547',
      'latitude': '50.852791',
      'region': 'Liberecký'
   },
   {
      'name': 'Šlapanice',
      'population': '7640',
      'area': '14.65',
      'altitude': '230',
      'longitude': '14.111209',
      'latitude': '50.314669',
      'region': 'Středočeský'
   },
   {
      'name': 'Rychvald',
      'population': '7614',
      'area': '17.02',
      'altitude': '220',
      'longitude': '18.376261',
      'latitude': '49.866254',
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Nejdek',
      'population': '7608',
      'area': '52.27',
      'altitude': '568',
      'longitude': '12.729356',
      'latitude': '50.322418',
      'region': 'Karlovarský'
   },
   {
      'name': 'Stříbro (okres Tachov)',
      'population': '7430',
      'area': '47.8',
      'altitude': '399',
      'longitude': '13.004092',
      'latitude': '49.752938',
      'region': 'Plzeňský'
   },
   {
      'name': 'Mikulov',
      'population': '7427',
      'area': '45.32',
      'altitude': '242',
      'longitude': '13.721597',
      'latitude': '50.687607',
      'region': 'Ústecký'
   },
   {
      'name': 'Benátky nad Jizerou',
      'population': '7410',
      'area': '35.51',
      'altitude': '225',
      'longitude': '14.823432',
      'latitude': '50.290853',
      'region': 'Středočeský'
   },
   {
      'name': 'Petřvald (okres Karviná)',
      'population': '7396',
      'area': '12.63',
      'altitude': '265',
      'longitude': '18.389405',
      'latitude': '49.830999',
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Frýdlant',
      'population': '7380',
      'area': '31.61',
      'altitude': '295',
      'longitude': '15.079741',
      'latitude': '50.921395',
      'region': 'Liberecký'
   },
   {
      'name': 'Bílovec',
      'population': '7341',
      'area': '38.89',
      'altitude': '243',
      'longitude': '18.015811',
      'latitude': '49.756389',
      'region': '#ODKAZ!'
   },
   {
      'name': 'Černošice',
      'population': '7329',
      'area': '9.06',
      'altitude': '211',
      'longitude': '14.319794',
      'latitude': '49.960081',
      'region': 'Středočeský'
   },
   {
      'name': 'Vratimov',
      'population': '7276',
      'area': '14.11',
      'altitude': '250',
      'longitude': '18.310147',
      'latitude': '49.769953',
      'region': '#NENÍ_K_DISPOZICI'
   },
   {
      'name': 'Odry',
      'population': '7274',
      'area': '74.05',
      'altitude': '303',
      'longitude': '17.830842',
      'latitude': '49.662551',
      'region': '#ODKAZ!'
   },
   {
      'name': 'Vimperk',
      'population': '7255',
      'area': '80.04',
      'altitude': '694',
      'longitude': '13.774257',
      'latitude': '49.052434',
      'region': 'Jihočeský'
   },
   {
      'name': 'Moravské Budějovice',
      'population': '7167',
      'area': '37.13',
      'altitude': '465',
      'longitude': '15.808644',
      'latitude': '49.052090',
      'region': 'Vysočina'
   },
   {
      'name': 'Broumov',
      'population': '7145',
      'area': '22.27',
      'altitude': '395',
      'longitude': '12.606690',
      'latitude': '49.889366',
      'region': 'Plzeňský'
   },
   {
      'name': 'Dačice',
      'population': '7142',
      'area': '66.96',
      'altitude': '477',
      'longitude': '15.437267',
      'latitude': '49.081544',
      'region': 'Jihočeský'
   },
   {
      'name': 'Napajedla',
      'population': '7074',
      'area': '19.83',
      'altitude': '200',
      'longitude': '17.511944',
      'latitude': '49.171559',
      'region': 'Olomoucký'
   },
   {
      'name': 'Český Brod',
      'population': '7071',
      'area': '19.70',
      'altitude': '219',
      'longitude': '14.860812',
      'latitude': '50.074203',
      'region': 'Středočeský'
   },
   {
      'name': 'Úvaly',
      'population': '7035',
      'area': '10.97',
      'altitude': '253',
      'longitude': '14.730804',
      'latitude': '50.073944',
      'region': 'Středočeský'
   },
   {
      'name': 'Sezimovo Ústí',
      'population': '7018',
      'area': '8.44',
      'altitude': '399',
      'longitude': '14.684805',
      'latitude': '49.385187',
      'region': 'Jihočeský'
   },
   {
      'name': 'Slavkov u Brna',
      'population': '6992',
      'area': '14.95',
      'altitude': '211',
      'longitude': '16.876492',
      'latitude': '49.153255',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Kaplice',
      'population': '6984',
      'area': '40.85',
      'altitude': '537',
      'longitude': '14.496276',
      'latitude': '48.738487',
      'region': 'Jihočeský'
   },
   {
      'name': 'Nový Bydžov',
      'population': '6982',
      'area': '35.27',
      'altitude': '235',
      'longitude': '15.490821',
      'latitude': '50.241503',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Nýřany',
      'population': '6891',
      'area': '22.79',
      'altitude': '336',
      'longitude': '13.211849',
      'latitude': '49.711455',
      'region': 'Plzeňský'
   },
   {
      'name': 'Hořovice',
      'population': '6882',
      'area': '9.55',
      'altitude': '385',
      'longitude': '13.902681',
      'latitude': '49.835973',
      'region': 'Středočeský'
   },
   {
      'name': 'Vodňany',
      'population': '6848',
      'area': '36.34',
      'altitude': '398',
      'longitude': '14.175129',
      'latitude': '49.147892',
      'region': 'Jihočeský'
   },
   {
      'name': 'Soběslav',
      'population': '6830',
      'area': '20.00',
      'altitude': '405',
      'longitude': '14.718615',
      'latitude': '49.259935',
      'region': 'Jihočeský'
   },
   {
      'name': 'Sedlčany',
      'population': '6799',
      'area': '36.47',
      'altitude': '321',
      'longitude': '14.426639',
      'latitude': '49.660573',
      'region': 'Středočeský'
   },
   {
      'name': 'Letovice',
      'population': '6669',
      'area': '51.01',
      'altitude': '330',
      'longitude': '16.573573',
      'latitude': '49.547091',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Přeštice',
      'population': '6645',
      'area': '25.41',
      'altitude': '345',
      'longitude': '13.333499',
      'latitude': '49.572982',
      'region': 'Plzeňský'
   },
   {
      'name': 'Kravaře',
      'population': '6601',
      'area': '19.37',
      'altitude': '233',
      'longitude': '18.004720',
      'latitude': '49.932034',
      'region': '#ODKAZ!'
   },
   {
      'name': 'Staré Město (okres Uherské Hradiště)',
      'population': '6552',
      'area': '20.83',
      'altitude': '205',
      'longitude': '17.433379',
      'latitude': '49.075150',
      'region': 'Olomoucký'
   },
   {
      'name': 'Holice',
      'population': '6542',
      'area': '19.65',
      'altitude': '244',
      'longitude': '15.985900',
      'latitude': '50.066012',
      'region': 'Pardubický'
   },
   {
      'name': 'Kraslice (okres Sokolov)',
      'population': '6537',
      'area': '81.33',
      'altitude': '514',
      'longitude': '12.517468',
      'latitude': '50.323723',
      'region': 'Karlovarský'
   },
   {
      'name': 'Hulín',
      'population': '6533',
      'area': '32.12',
      'altitude': '191',
      'longitude': '17.463739',
      'latitude': '49.316894',
      'region': 'Olomoucký'
   },
   {
      'name': 'Dobruška',
      'population': '6518',
      'area': '34.44',
      'altitude': '287',
      'longitude': '16.160013',
      'latitude': '50.292014',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Bučovice',
      'population': '6510',
      'area': '31.18',
      'altitude': '230',
      'longitude': '17.001906',
      'latitude': '49.148956',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Šenov',
      'population': '6477',
      'area': '16.63',
      'altitude': '255',
      'longitude': '18.376065',
      'latitude': '49.793152',
      'region': '#NENÍ_K_DISPOZICI'
   },
   {
      'name': 'Rosice',
      'population': '6466',
      'area': '12.74',
      'altitude': '326',
      'longitude': '15.951272',
      'latitude': '49.922261',
      'region': 'Pardubický'
   },
   {
      'name': 'Letohrad',
      'population': '6377',
      'area': '23.55',
      'altitude': '372',
      'longitude': '16.498785',
      'latitude': '50.035802',
      'region': 'Pardubický'
   },
   {
      'name': 'Blatná',
      'population': '6371',
      'area': '43.6',
      'altitude': '440',
      'longitude': '13.881759',
      'latitude': '49.424887',
      'region': 'Jihočeský'
   },
   {
      'name': 'Mimoň',
      'population': '6361',
      'area': '15.48',
      'altitude': '280',
      'longitude': '14.724736',
      'latitude': '50.658689',
      'region': 'Liberecký'
   },
   {
      'name': 'Světlá nad Sázavou',
      'population': '6335',
      'area': '42.08',
      'altitude': '400',
      'longitude': '15.403934',
      'latitude': '49.668009',
      'region': 'Vysočina'
   },
   {
      'name': 'Veselí nad Lužnicí',
      'population': '6317',
      'area': '29.57',
      'altitude': '407',
      'longitude': '14.697336',
      'latitude': '49.184297',
      'region': 'Jihočeský'
   },
   {
      'name': 'Chrastava',
      'population': '6260',
      'area': '27.46',
      'altitude': '295',
      'longitude': '14.968836',
      'latitude': '50.816926',
      'region': 'Liberecký'
   },
   {
      'name': 'Podbořany',
      'population': '6248',
      'area': '60.15',
      'altitude': '331',
      'longitude': '13.411917',
      'latitude': '50.229368',
      'region': 'Ústecký'
   },
   {
      'name': 'Dubňany',
      'population': '6231',
      'area': '22.58',
      'altitude': '200',
      'longitude': '17.090042',
      'latitude': '48.916939',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Slavičín',
      'population': '6227',
      'area': '33.66',
      'altitude': '380',
      'longitude': '17.873488',
      'latitude': '49.087987',
      'region': 'Olomoucký'
   },
   {
      'name': 'Odolena Voda',
      'population': '6163',
      'area': '11.24',
      'altitude': '248',
      'longitude': '14.410781',
      'latitude': '50.233412',
      'region': 'Středočeský'
   },
   {
      'name': 'Dobřany',
      'population': '6128',
      'area': '35.32',
      'altitude': '352',
      'longitude': '16.285292',
      'latitude': '50.322125',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Kostelec nad Orlicí',
      'population': '6090',
      'area': '26.20',
      'altitude': '273',
      'longitude': '16.213185',
      'latitude': '50.122668',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Mníšek pod Brdy',
      'population': '6060',
      'area': '26.50',
      'altitude': '385',
      'longitude': '14.261758',
      'latitude': '49.866497',
      'region': 'Středočeský'
   },
   {
      'name': 'Hronov',
      'population': '6032',
      'area': '22.04',
      'altitude': '364',
      'longitude': '16.182304',
      'latitude': '50.479685',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Týniště nad Orlicí',
      'population': '6001',
      'area': '52.46',
      'altitude': '253',
      'longitude': '16.077697',
      'latitude': '50.151364',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Hustopeče',
      'population': '5998',
      'area': '24.53',
      'altitude': '215',
      'longitude': '16.737621',
      'latitude': '48.940848',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Tanvald',
      'population': '5958',
      'area': '12.45',
      'altitude': '455',
      'longitude': '15.305853',
      'latitude': '50.737354',
      'region': 'Liberecký'
   },
   {
      'name': 'Žamberk',
      'population': '5918',
      'area': '16.91',
      'altitude': '420',
      'longitude': '16.467380',
      'latitude': '50.086014',
      'region': 'Pardubický'
   },
   {
      'name': 'Železný Brod',
      'population': '5883',
      'area': '22.52',
      'altitude': '305',
      'longitude': '15.254077',
      'latitude': '50.642741',
      'region': 'Liberecký'
   },
   {
      'name': 'Kojetín',
      'population': '5837',
      'area': '31.09',
      'altitude': '200',
      'longitude': '17.302067',
      'latitude': '49.351794',
      'region': 'Olomoucký'
   },
   {
      'name': 'Šluknov',
      'population': '5721',
      'area': '47.47',
      'altitude': '340',
      'longitude': '14.452585',
      'latitude': '51.003688',
      'region': 'Ústecký'
   },
   {
      'name': 'Třebechovice pod Orebem',
      'population': '5706',
      'area': '21.01[2]',
      'altitude': '243',
      'longitude': '15.992231',
      'latitude': '50.200969',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Týnec nad Sázavou',
      'population': '5667',
      'area': '25.75',
      'altitude': '281',
      'longitude': '14.589834',
      'latitude': '49.833477',
      'region': 'Středočeský'
   },
   {
      'name': 'Rousínov',
      'population': '5648',
      'area': '23.05',
      'altitude': '241',
      'longitude': '16.882146',
      'latitude': '49.201282',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Třešť',
      'population': '5625',
      'area': '46.99',
      'altitude': '545',
      'longitude': '15.482114',
      'latitude': '49.290918',
      'region': 'Vysočina'
   },
   {
      'name': 'Moravský Krumlov',
      'population': '5606',
      'area': '49.56',
      'altitude': '255',
      'longitude': '16.311694',
      'latitude': '49.048932',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Vítkov',
      'population': '5593',
      'area': '55.06',
      'altitude': '480',
      'longitude': '17.749410',
      'latitude': '49.774452',
      'region': '#ODKAZ!'
   },
   {
      'name': 'Nové Strašecí',
      'population': '5573',
      'area': '13.32',
      'altitude': '470',
      'longitude': '13.900428',
      'latitude': '50.152718',
      'region': 'Středočeský'
   },
   {
      'name': 'Chlumec nad Cidlinou',
      'population': '5561',
      'area': '21.44',
      'altitude': '223',
      'longitude': '15.460262',
      'latitude': '50.154404',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Lomnice nad Popelkou',
      'population': '5486',
      'area': '25.57',
      'altitude': '478',
      'longitude': '15.373410',
      'latitude': '50.530626',
      'region': 'Liberecký'
   },
   {
      'name': 'Fulnek',
      'population': '5484',
      'area': '68.49',
      'altitude': '320',
      'longitude': '17.903193',
      'latitude': '49.712377',
      'region': '#ODKAZ!'
   },
   {
      'name': 'Úpice',
      'population': '5468',
      'area': '15.31',
      'altitude': '352',
      'longitude': '16.016067',
      'latitude': '50.512375',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Brumov-Bylnice',
      'population': '5457',
      'area': '56.27',
      'altitude': '330',
      'longitude': '18.023095',
      'latitude': '49.090878',
      'region': 'Olomoucký'
   },
   {
      'name': 'Kunovice',
      'population': '5452',
      'area': '28.55',
      'altitude': '198',
      'longitude': '17.809882',
      'latitude': '49.444245',
      'region': 'Olomoucký'
   },
   {
      'name': 'Zubří',
      'population': '5450',
      'area': '28.39',
      'altitude': '378',
      'longitude': '16.123687',
      'latitude': '49.571109',
      'region': 'Vysočina'
   },
   {
      'name': 'Hradec nad Moravicí',
      'population': '5434',
      'area': '43.96',
      'altitude': '277',
      'longitude': '17.875817',
      'latitude': '49.871011',
      'region': '#ODKAZ!'
   },
   {
      'name': 'Strážnice (okres Hodonín)',
      'population': '5390',
      'area': '31.41',
      'altitude': '177',
      'longitude': '17.316803',
      'latitude': '48.901019',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Hluboká nad Vltavou',
      'population': '5353',
      'area': '91.11',
      'altitude': '394',
      'longitude': '14.431786',
      'latitude': '49.051047',
      'region': 'Jihočeský'
   },
   {
      'name': 'Jilemnice',
      'population': '5352',
      'area': '13.86',
      'altitude': '451',
      'longitude': '15.506529',
      'latitude': '50.608897',
      'region': 'Liberecký'
   },
   {
      'name': 'Stochov',
      'population': '5348',
      'area': '9.54',
      'altitude': '448',
      'longitude': '13.963451',
      'latitude': '50.146307',
      'region': 'Středočeský'
   },
   {
      'name': 'Pohořelice',
      'population': '5312',
      'area': '43.05',
      'altitude': '181',
      'longitude': '17.537845',
      'latitude': '49.176566',
      'region': 'Olomoucký'
   },
   {
      'name': 'Jablunkov',
      'population': '5284',
      'area': '10.39',
      'altitude': '386',
      'longitude': '18.764583',
      'latitude': '49.576717',
      'region': '#NENÍ_K_DISPOZICI'
   },
   {
      'name': 'Planá',
      'population': '5278',
      'area': '62.47',
      'altitude': '506',
      'longitude': '12.743783',
      'latitude': '49.868156',
      'region': 'Plzeňský'
   },
   {
      'name': 'Modřice',
      'population': '5263',
      'area': '10.05',
      'altitude': '204',
      'longitude': '16.614412',
      'latitude': '49.127891',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Horní Slavkov',
      'population': '5208',
      'area': '36.87',
      'altitude': '558',
      'longitude': '12.807581',
      'latitude': '50.138632',
      'region': 'Karlovarský'
   },
   {
      'name': 'Starý Plzenec',
      'population': '5204',
      'area': '18.37',
      'altitude': '343',
      'longitude': '13.473502',
      'latitude': '49.697678',
      'region': 'Plzeňský'
   },
   {
      'name': 'Trhové Sviny',
      'population': '5187',
      'area': '52.78',
      'altitude': '458',
      'longitude': '14.639240',
      'latitude': '48.842315',
      'region': 'Jihočeský'
   },
   {
      'name': 'Františkovy Lázně',
      'population': '5187',
      'area': '25.76',
      'altitude': '442',
      'longitude': '12.351739',
      'latitude': '50.120331',
      'region': 'Karlovarský'
   },
   {
      'name': 'Velká Bíteš',
      'population': '5167',
      'area': '47.30',
      'altitude': '476',
      'longitude': '16.225853',
      'latitude': '49.288627',
      'region': 'Vysočina'
   },
   {
      'name': 'Polná',
      'population': '5147',
      'area': '37.77',
      'altitude': '490',
      'longitude': '15.718810',
      'latitude': '49.486998',
      'region': 'Vysočina'
   },
   {
      'name': 'Telč',
      'population': '5140',
      'area': '24.86',
      'altitude': '514',
      'longitude': '15.452753',
      'latitude': '49.184176',
      'region': 'Vysočina'
   },
   {
      'name': 'Horažďovice',
      'population': '5113',
      'area': '43.04',
      'altitude': '427',
      'longitude': '13.701002',
      'latitude': '49.320687',
      'region': 'Plzeňský'
   },
   {
      'name': 'Rudná (okres Praha-západ)',
      'population': '5090',
      'area': '8.20',
      'altitude': '378',
      'longitude': '14.234346',
      'latitude': '50.035025',
      'region': 'Středočeský'
   },
   {
      'name': 'Kdyně',
      'population': '5088',
      'area': '28.74',
      'altitude': '455',
      'longitude': '13.039676',
      'latitude': '49.390768',
      'region': 'Plzeňský'
   },
   {
      'name': 'Doksy',
      'population': '5081',
      'area': '74.95',
      'altitude': '266',
      'longitude': '14.047821',
      'latitude': '50.118998',
      'region': 'Středočeský'
   },
   {
      'name': 'Holýšov',
      'population': '5075',
      'area': '29.32',
      'altitude': '357',
      'longitude': '13.101293',
      'latitude': '49.593612',
      'region': 'Plzeňský'
   },
   {
      'name': 'Jílové (okres Děčín)',
      'population': '5062',
      'area': '36.56',
      'altitude': '276',
      'longitude': '14.103835',
      'latitude': '50.760821',
      'region': 'Ústecký'
   },
   {
      'name': 'Třemošná',
      'population': '5053',
      'area': '18.12',
      'altitude': '348',
      'longitude': '13.394994',
      'latitude': '49.815838',
      'region': 'Plzeňský'
   },
   {
      'name': 'Česká Kamenice',
      'population': '5028',
      'area': '38.77',
      'altitude': '301',
      'longitude': '14.417672',
      'latitude': '50.797805',
      'region': 'Ústecký'
   },
   {
      'name': 'Skuteč',
      'population': '5022',
      'area': '35.40',
      'altitude': '410',
      'longitude': '15.996549',
      'latitude': '49.843469',
      'region': 'Pardubický'
   },
   {
      'name': 'Bakov nad Jizerou',
      'population': '4967',
      'area': '27.01',
      'altitude': '224',
      'longitude': '14.941488',
      'latitude': '50.482306',
      'region': 'Středočeský'
   },
   {
      'name': 'Luhačovice',
      'population': '4955',
      'area': '33.00',
      'altitude': '253',
      'longitude': '17.757473',
      'latitude': '49.099823',
      'region': 'Olomoucký'
   },
   {
      'name': 'Česká Skalice',
      'population': '4945',
      'area': '17.36',
      'altitude': '284',
      'longitude': '16.042762',
      'latitude': '50.394670',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Jílové u Prahy',
      'population': '4919',
      'area': '16.25',
      'altitude': '381',
      'longitude': '14.493328',
      'latitude': '49.895447',
      'region': 'Středočeský'
   },
   {
      'name': 'Bechyně',
      'population': '4876',
      'area': '21.29',
      'altitude': '406',
      'longitude': '14.468099',
      'latitude': '49.295232',
      'region': 'Jihočeský'
   },
   {
      'name': 'Horšovský Týn',
      'population': '4839',
      'area': '71.31',
      'altitude': '376',
      'longitude': '12.944049',
      'latitude': '49.529648',
      'region': 'Plzeňský'
   },
   {
      'name': 'Vrbno pod Pradědem',
      'population': '4839',
      'area': '68.91',
      'altitude': '545',
      'longitude': '17.383157',
      'latitude': '50.120952',
      'region': 'Moravskoslezský'
   },
   {
      'name': 'Valašské Klobouky',
      'population': '4839',
      'area': '26.95',
      'altitude': '405',
      'longitude': '18.007600',
      'latitude': '49.140637',
      'region': 'Olomoucký'
   },
   {
      'name': 'Unhošť',
      'population': '4827',
      'area': '17.42',
      'altitude': '387',
      'longitude': '14.130074',
      'latitude': '50.085352',
      'region': 'Středočeský'
   },
   {
      'name': 'Vizovice',
      'population': '4809',
      'area': '28.57',
      'altitude': '296',
      'longitude': '17.854545',
      'latitude': '49.222872',
      'region': 'Olomoucký'
   },
   {
      'name': 'Ledeč nad Sázavou',
      'population': '4808',
      'area': '17.01',
      'altitude': '353',
      'longitude': '15.277723',
      'latitude': '49.695168',
      'region': 'Vysočina'
   },
   {
      'name': 'Nýrsko',
      'population': '4806',
      'area': '31.53',
      'altitude': '452',
      'longitude': '13.143533',
      'latitude': '49.293870',
      'region': 'Plzeňský'
   },
   {
      'name': 'Pečky',
      'population': '4771',
      'area': '10.76',
      'altitude': '194',
      'longitude': '15.031510',
      'latitude': '50.090797',
      'region': 'Středočeský'
   },
   {
      'name': 'Kosmonosy',
      'population': '4755',
      'area': '11.39',
      'altitude': '243',
      'longitude': '14.929998',
      'latitude': '50.438500',
      'region': 'Středočeský'
   },
   {
      'name': 'Chropyně',
      'population': '4749',
      'area': '19',
      'altitude': '195',
      'longitude': '17.364510',
      'latitude': '49.356442',
      'region': 'Olomoucký'
   },
   {
      'name': 'Oslavany',
      'population': '4746',
      'area': '18.71',
      'altitude': '230',
      'longitude': '16.336529',
      'latitude': '49.123347',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Náměšť nad Oslavou',
      'population': '4723',
      'area': '18.62',
      'altitude': '365',
      'longitude': '16.158486',
      'latitude': '49.207264',
      'region': 'Vysočina'
   },
   {
      'name': 'Heřmanův Městec',
      'population': '4721',
      'area': '14.34',
      'altitude': '280',
      'longitude': '15.664924',
      'latitude': '49.947071',
      'region': 'Pardubický'
   },
   {
      'name': 'Bělá pod Bezdězem',
      'population': '4714',
      'area': '63.21',
      'altitude': '301',
      'longitude': '14.804182',
      'latitude': '50.501213',
      'region': 'Středočeský'
   },
   {
      'name': 'Zruč nad Sázavou',
      'population': '4709',
      'area': '16.37',
      'altitude': '344',
      'longitude': '15.106059',
      'latitude': '49.740104',
      'region': 'Středočeský'
   },
   {
      'name': 'Protivín',
      'population': '4687',
      'area': '61.45',
      'altitude': '383',
      'longitude': '14.217175',
      'latitude': '49.199486',
      'region': 'Jihočeský'
   },
   {
      'name': 'Habartov',
      'population': '4687',
      'area': '21.39',
      'altitude': '484',
      'longitude': '12.550536',
      'latitude': '50.182966',
      'region': 'Karlovarský'
   },
   {
      'name': 'Meziboří',
      'population': '4686',
      'area': '14.36',
      'altitude': '512',
      'longitude': '13.598699',
      'latitude': '50.621154',
      'region': 'Ústecký'
   },
   {
      'name': 'Postoloprty',
      'population': '4644',
      'area': '46.49',
      'altitude': '193',
      'longitude': '13.702908',
      'latitude': '50.359789',
      'region': 'Ústecký'
   },
   {
      'name': 'Pacov',
      'population': '4604',
      'area': '35.86',
      'altitude': '615',
      'longitude': '15.001679',
      'latitude': '49.470763',
      'region': 'Vysočina'
   },
   {
      'name': 'Osek (okres Teplice)',
      'population': '4596',
      'area': '42.37',
      'altitude': '307',
      'longitude': '13.685855',
      'latitude': '50.622711',
      'region': 'Ústecký'
   },
   {
      'name': 'Kynšperk nad Ohří',
      'population': '4590',
      'area': '23.31',
      'altitude': '431',
      'longitude': '12.530270',
      'latitude': '50.118926',
      'region': 'Karlovarský'
   },
   {
      'name': 'Vamberk',
      'population': '4530',
      'area': '21.03',
      'altitude': '320',
      'longitude': '16.290675',
      'latitude': '50.117560',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Vracov',
      'population': '4513',
      'area': '44.40',
      'altitude': '183',
      'longitude': '17.210996',
      'latitude': '48.975230',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Lišov',
      'population': '4508',
      'area': '93.55',
      'altitude': '505',
      'longitude': '14.608379',
      'latitude': '49.015970',
      'region': 'Jihočeský'
   },
   {
      'name': 'Votice',
      'population': '4495',
      'area': '36.42',
      'altitude': '483',
      'longitude': '14.638085',
      'latitude': '49.640127',
      'region': 'Středočeský'
   },
   {
      'name': 'Cvikov (okres Česká Lípa)',
      'population': '4479',
      'area': '45.09',
      'altitude': '357',
      'longitude': '14.632975',
      'latitude': '50.776678',
      'region': 'Liberecký'
   },
   {
      'name': 'Klimkovice',
      'population': '4469',
      'area': '14.64',
      'altitude': '252',
      'longitude': '18.125853',
      'latitude': '49.788094',
      'region': '#NENÍ_K_DISPOZICI'
   },
   {
      'name': 'Bystřice (okres Benešov)',
      'population': '4456',
      'area': '63.36',
      'altitude': '365',
      'longitude': '14.667401',
      'latitude': '49.732133',
      'region': 'Středočeský'
   },
   {
      'name': 'Adamov',
      'population': '4429',
      'area': '3.78',
      'altitude': '258',
      'longitude': '15.408913',
      'latitude': '49.857817',
      'region': 'Středočeský'
   },
   {
      'name': 'Bor (okres Tachov)',
      'population': '4403',
      'area': '116.49',
      'altitude': '472',
      'longitude': '12.775164',
      'latitude': '49.711595',
      'region': 'Plzeňský'
   },
   {
      'name': 'Bojkovice',
      'population': '4310',
      'area': '41.87',
      'altitude': '272',
      'longitude': '17.814872',
      'latitude': '49.038646',
      'region': 'Olomoucký'
   },
   {
      'name': 'Bzenec',
      'population': '4303',
      'area': '40.34',
      'altitude': '183',
      'longitude': '17.266852',
      'latitude': '48.973364',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Planá nad Lužnicí',
      'population': '4296',
      'area': '21.42',
      'altitude': '395',
      'longitude': '14.701474',
      'latitude': '49.354438',
      'region': 'Jihočeský'
   },
   {
      'name': 'Hostinné',
      'population': '4265',
      'area': '8.07',
      'altitude': '351',
      'longitude': '15.723336',
      'latitude': '50.540664',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Hluk (okres Uherské Hradiště)',
      'population': '4249',
      'area': '28.39',
      'altitude': '222',
      'longitude': '17.526679',
      'latitude': '48.988121',
      'region': 'Olomoucký'
   },
   {
      'name': 'Chlumec (okres Ústí nad Labem)',
      'population': '4237',
      'area': '12.87',
      'altitude': '235',
      'longitude': '13.939638',
      'latitude': '50.699720',
      'region': 'Ústecký'
   },
   {
      'name': 'Rožmitál pod Třemšínem',
      'population': '4203',
      'area': '53.01',
      'altitude': '519',
      'longitude': '13.864301',
      'latitude': '49.601956',
      'region': 'Středočeský'
   },
   {
      'name': 'Uherský Ostroh',
      'population': '4178',
      'area': '26.53',
      'altitude': '178',
      'longitude': '17.389845',
      'latitude': '48.985559',
      'region': 'Olomoucký'
   },
   {
      'name': 'Kostelec nad Labem',
      'population': '4156',
      'area': '15.55',
      'altitude': '172',
      'longitude': '14.585520',
      'latitude': '50.226533',
      'region': 'Středočeský'
   },
   {
      'name': 'Brušperk',
      'population': '4149',
      'area': '10.27',
      'altitude': '265',
      'longitude': '18.222096',
      'latitude': '49.700098',
      'region': '#NENÍ_K_DISPOZICI'
   },
   {
      'name': 'Borovany',
      'population': '4137',
      'area': '42.33',
      'altitude': '522',
      'longitude': '14.392464',
      'latitude': '49.342995',
      'region': 'Jihočeský'
   },
   {
      'name': 'Nová Role',
      'population': '4125',
      'area': '13.53',
      'altitude': '418',
      'longitude': '12.784217',
      'latitude': '50.270917',
      'region': 'Karlovarský'
   },
   {
      'name': 'Blovice',
      'population': '4114',
      'area': '28.96',
      'altitude': '387',
      'longitude': '13.540092',
      'latitude': '49.582196',
      'region': 'Plzeňský'
   },
   {
      'name': 'Slatiňany',
      'population': '4102',
      'area': '15.61',
      'altitude': '268',
      'longitude': '15.813769',
      'latitude': '49.921097',
      'region': 'Pardubický'
   },
   {
      'name': 'Horní Bříza',
      'population': '4091',
      'area': '14.55',
      'altitude': '367',
      'longitude': '13.355579',
      'latitude': '49.840122',
      'region': 'Plzeňský'
   },
   {
      'name': 'Sezemice (okres Pardubice)',
      'population': '4062',
      'area': '22.15',
      'altitude': '225',
      'longitude': '15.852698',
      'latitude': '50.066507',
      'region': 'Pardubický'
   },
   {
      'name': 'Zdice',
      'population': '4047',
      'area': '13.81',
      'altitude': '268',
      'longitude': '13.977466',
      'latitude': '49.912073',
      'region': 'Středočeský'
   },
   {
      'name': 'Jaroměřice nad Rokytnou',
      'population': '4032',
      'area': '51.37',
      'altitude': '422',
      'longitude': '15.893306',
      'latitude': '49.094083',
      'region': 'Vysočina'
   },
   {
      'name': 'Králíky',
      'population': '4002',
      'area': '52.78',
      'altitude': '550',
      'longitude': '16.760541',
      'latitude': '50.083842',
      'region': 'Pardubický'
   },
   {
      'name': 'Mnichovice',
      'population': '3964',
      'area': '8.32',
      'altitude': '361',
      'longitude': '14.709069',
      'latitude': '49.936016',
      'region': 'Středočeský'
   },
   {
      'name': 'Police nad Metují',
      'population': '3961',
      'area': '24.41',
      'altitude': '441',
      'longitude': '16.233504',
      'latitude': '50.536871',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Jemnice',
      'population': '3958',
      'area': '32.49',
      'altitude': '470',
      'longitude': '15.569936',
      'latitude': '49.018986',
      'region': 'Vysočina'
   },
   {
      'name': 'Přibyslav',
      'population': '3957',
      'area': '35.32',
      'altitude': '475',
      'longitude': '16.168585',
      'latitude': '50.373646',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Rajhrad',
      'population': '3956',
      'area': '9.49',
      'altitude': '190',
      'longitude': '16.603877',
      'latitude': '49.090212',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Dolní Benešov',
      'population': '3939',
      'area': '14.81',
      'altitude': '231',
      'longitude': '18.108352',
      'latitude': '49.921014',
      'region': '#ODKAZ!'
   },
   {
      'name': 'Kamenický Šenov',
      'population': '3923',
      'area': '10.47',
      'altitude': '525',
      'longitude': '14.472868',
      'latitude': '50.773590',
      'region': 'Liberecký'
   },
   {
      'name': 'Paskov',
      'population': '3830',
      'area': '11.80',
      'altitude': '256',
      'longitude': '18.290369',
      'latitude': '49.731788',
      'region': '#NENÍ_K_DISPOZICI'
   },
   {
      'name': 'Velké Bílovice',
      'population': '3818',
      'area': '25.73',
      'altitude': '176',
      'longitude': '16.892274',
      'latitude': '48.849290',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Velešín',
      'population': '3796',
      'area': '13.24',
      'altitude': '548',
      'longitude': '14.462517',
      'latitude': '48.829486',
      'region': 'Jihočeský'
   },
   {
      'name': 'Kostelec nad Černými lesy',
      'population': '3773',
      'area': '17.70',
      'altitude': '391',
      'longitude': '14.859218',
      'latitude': '49.994036',
      'region': 'Středočeský'
   },
   {
      'name': 'Brtnice',
      'population': '3761',
      'area': '74.13',
      'altitude': '515',
      'longitude': '15.676419',
      'latitude': '49.306947',
      'region': 'Vysočina'
   },
   {
      'name': 'Větřní',
      'population': '3758',
      'area': '27.71',
      'altitude': '465',
      'longitude': '14.286161',
      'latitude': '48.774248',
      'region': 'Jihočeský'
   },
   {
      'name': 'Stráž pod Ralskem',
      'population': '3756',
      'area': '21.58',
      'altitude': '310',
      'longitude': '14.801017',
      'latitude': '50.702802',
      'region': 'Liberecký'
   },
   {
      'name': 'Smržovka',
      'population': '3754',
      'area': '14.81',
      'altitude': '585',
      'longitude': '15.246394',
      'latitude': '50.738201',
      'region': 'Liberecký'
   },
   {
      'name': 'Fryšták',
      'population': '3729',
      'area': '24.17',
      'altitude': '271',
      'longitude': '17.683463',
      'latitude': '49.285205',
      'region': 'Olomoucký'
   },
   {
      'name': 'Volary',
      'population': '3712',
      'area': '107.51',
      'altitude': '760',
      'longitude': '13.886575',
      'latitude': '48.908811',
      'region': 'Jihočeský'
   },
   {
      'name': 'Buštěhrad',
      'population': '3703',
      'area': '7.61',
      'altitude': '322',
      'longitude': '14.188974',
      'latitude': '50.155940',
      'region': 'Středočeský'
   },
   {
      'name': 'Sázava (okres Benešov)',
      'population': '3702',
      'area': '20.41',
      'altitude': '456',
      'longitude': '14.896737',
      'latitude': '49.871644',
      'region': 'Středočeský'
   },
   {
      'name': 'Jablonné v Podještědí',
      'population': '3685',
      'area': '57.87',
      'altitude': '315',
      'longitude': '14.760522',
      'latitude': '50.765280',
      'region': 'Liberecký'
   },
   {
      'name': 'Zbýšov',
      'population': '3684',
      'area': '6.01',
      'altitude': '348',
      'longitude': '16.805675',
      'latitude': '49.131323',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Židlochovice',
      'population': '3679',
      'area': '5.93',
      'altitude': '190',
      'longitude': '16.618807',
      'latitude': '49.039525',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Rájec-Jestřebí',
      'population': '3672',
      'area': '15.67',
      'altitude': '295',
      'longitude': '16.639019',
      'latitude': '49.410942',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Nové Město pod Smrkem',
      'population': '3663',
      'area': '28.93',
      'altitude': '465',
      'longitude': '15.229429',
      'latitude': '50.924911',
      'region': 'Liberecký'
   },
   {
      'name': 'Lom (okres Most)',
      'population': '3655',
      'area': '16.8',
      'altitude': '294',
      'longitude': '13.657289',
      'latitude': '50.593278',
      'region': 'Ústecký'
   },
   {
      'name': 'Dobřichovice',
      'population': '3651',
      'area': '10.92',
      'altitude': '205',
      'longitude': '14.274695',
      'latitude': '49.927494',
      'region': 'Středočeský'
   },
   {
      'name': 'Kamenice nad Lipou',
      'population': '3634',
      'area': '31.54',
      'altitude': '563',
      'longitude': '15.075189',
      'latitude': '49.303034',
      'region': 'Vysočina'
   },
   {
      'name': 'Lázně Bělohrad',
      'population': '3625',
      'area': '28.39',
      'altitude': '291',
      'longitude': '15.582691',
      'latitude': '50.428745',
      'region': 'Královéhradecký'
   },
   {
      'name': 'Zlaté Hory',
      'population': '3620',
      'area': '85.93',
      'altitude': '397',
      'longitude': '17.396018',
      'latitude': '50.263799',
      'region': 'Olomoucký'
   },
   {
      'name': 'Lanžhot',
      'population': '3608',
      'area': '54.83',
      'altitude': '164',
      'longitude': '16.966948',
      'latitude': '48.724434',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Klecany',
      'population': '3601',
      'area': '10.16',
      'altitude': '265',
      'longitude': '14.411481',
      'latitude': '50.175988',
      'region': 'Středočeský'
   },
   {
      'name': 'Řevnice',
      'population': '3584',
      'area': '10.14',
      'altitude': '218',
      'longitude': '14.235893',
      'latitude': '49.913948',
      'region': 'Středočeský'
   },
   {
      'name': 'Toužim',
      'population': '3582',
      'area': '98.53',
      'altitude': '612',
      'longitude': '12.985057',
      'latitude': '50.060495',
      'region': 'Karlovarský'
   },
   {
      'name': 'Benešov nad Ploučnicí',
      'population': '3573',
      'area': '9.77',
      'altitude': '210',
      'longitude': '14.312388',
      'latitude': '50.741589',
      'region': 'Ústecký'
   },
   {
      'name': 'Nepomuk',
      'population': '3550',
      'area': '12.78',
      'altitude': '449',
      'longitude': '13.837261',
      'latitude': '49.642789',
      'region': 'Středočeský'
   },
   {
      'name': 'Velké Opatovice',
      'population': '3536',
      'area': '25.93',
      'altitude': '376',
      'longitude': '16.679468',
      'latitude': '49.612372',
      'region': 'Jihomoravský'
   },
   {
      'name': 'Stod',
      'population': '3531',
      'area': '20.04',
      'altitude': '337',
      'longitude': '13.164736',
      'latitude': '49.639089',
      'region': 'Plzeňský'
   },
   {
      'name': 'Suchdol nad Lužnicí',
      'population': '3527',
      'area': '63.58',
      'altitude': '454',
      'longitude': '14.876957',
      'latitude': '48.893333',
      'region': 'Jihočeský'
   },
   {
      'name': 'Velká Bystřice',
      'population': '3516',
      'area': '9.22',
      'altitude': '290',
      'longitude': '17.363975',
      'latitude': '49.594228',
      'region': 'Olomoucký'
   },
   {
      'name': 'Štěpánov (okres Olomouc)',
      'population': '3512',
      'area': '26.84',
      'altitude': '232',
      'longitude': '17.220412',
      'latitude': '49.684039',
      'region': 'Olomoucký'
   },
   {
      'name': 'Březnice',
      'population': '3511',
      'area': '19.47',
      'altitude': '462',
      'longitude': '17.662774',
      'latitude': '49.186432',
      'region': 'Olomoucký'
   },
   {
      'name': 'Dobrovice',
      'population': '3496',
      'area': '24.64',
      'altitude': '247',
      'longitude': '14.962332',
      'latitude': '50.369327',
      'region': 'Středočeský'
   },
   {
      'name': 'Zliv',
      'population': '3495',
      'area': '14.21',
      'altitude': '375',
      'longitude': '14.366134',
      'latitude': '49.066083',
      'region': 'Jihočeský'
   },
   ];
   
export default cities;