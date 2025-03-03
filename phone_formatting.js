exports.main = async (event, callback) => {
  let { phone_number } = event.inputFields;
  console.log(event.inputFields);

  //Country Codes
  const countryFormats = {
    '1': {
      name: 'US/Canada',
      length: 10,
      format: (num) => `(${num.slice(0,3)}) ${num.slice(3,6)}-${num.slice(6)}`,
    },
    '52': {
      name: 'Mexico',
      length: 10,
      format: (num) => `${num.slice(0,2)} ${num.slice(2,6)} ${num.slice(6)}`,
    },
    '44': {
      name: 'UK/England',
      length: 10,
      format: (num) => `${num.slice(0,2)} ${num.slice(2,6)} ${num.slice(6)}`,
    },
    '33': {
      name: 'France',
      length: 9,
      format: (num) => `${num.slice(0,1)} ${num.slice(1,3)} ${num.slice(3,5)} ${num.slice(5,7)} ${num.slice(7)}`,
    },
    '49': {
      name: 'Germany',
      length: 10,
      format: (num) => `${num.slice(0,2)} ${num.slice(2)}`,
    },
    '81': {
      name: 'Japan',
      length: 9,
      format: (num) => `${num.slice(0,1)} ${num.slice(1,5)} ${num.slice(5)}`,
    },
    '86': {
      name: 'China',
      length: 10,
      format: (num) => `${num.slice(0,2)} ${num.slice(2,6)} ${num.slice(6)}`,
    },
    '591': {
      name: 'Bolivia',
      length: 8,
      format: (num) => `${num.slice(0,1)} ${num.slice(1,4)}-${num.slice(4)}`,
    },
    '61': {
      name: 'Australia',
      length: 10,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '64': {
      name: 'New Zealand',
      length: 9,
      format: (num) => `${num.slice(0,1)} ${num.slice(1,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '353': {
      name: 'Ireland',
      length: 9,
      format: (num) => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`,
    },
    '41': {
      name: 'Switzerland',
      length: 9,
      format: (num) => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`,
    },
    '55': {
      name: 'Brazil',
      length: 11,
      format: (num) => `${num.slice(0,2)} ${num.slice(2,7)}-${num.slice(7)}`,
    },
    '31': {
      name: 'Netherlands',
      length: 9,
      format: (num) => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`,
    },
    '234': {
      name: 'Nigeria',
      length: 10,
      format: (num) => `${num.slice(0,4)} ${num.slice(4,7)} ${num.slice(7)}`,
    },
    '7': {
      name: 'Russia',
      length: 10,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '90': {
      name: 'Turkey',
      length: 10,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '351': {
      name: 'Portugal',
      length: 9,
      format: (num) => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`,
    },
    '972': {
      name: 'Israel',
      length: 9,
      format: (num) => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`,
    },
    '237': {
      name: 'Cameroon',
      length: 9,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '213': {
      name: 'Algeria',
      length: 9,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '251': {
      name: 'Ethiopia',
      length: 9,
      format: (num) => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`,
    },
    '233': {
      name: 'Ghana',
      length: 9,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '380': {
      name: 'Ukraine',
      length: 9,
      format: (num) => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`,
    },
    '381': {
      name: 'Serbia',
      length: 9,
      format: (num) => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`,
    },
    '420': {
      name: 'Czech Republic',
      length: 9,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '421': {
      name: 'Slovakia',
      length: 9,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '963': {
      name: 'Syria',
      length: 9,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '967': {
      name: 'Yemen',
      length: 9,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '995': {
      name: 'Georgia',
      length: 9,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '92': {
      name: 'Pakistan',
      length: 10,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '971': {
      name: 'United Arab Emirates',
      length: 9,
      format: (num) => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`,
    },
    '966': {
      name: 'Saudi Arabia',
      length: 9,
      format: (num) => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`,
    },
    '91': {
      name: 'India',
      length: 10,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '63': {
      name: 'Philippines',
      length: 10,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '98': {
      name: 'Iran',
      length: 10,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '66': {
      name: 'Thailand',
      length: 9,
      format: (num) => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`,
    },
    '254': {
      name: 'Kenya',
      length: 9,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '20': {
      name: 'Egypt',
      length: 10,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '27': {
      name: 'South Africa',
      length: 9,
      format: (num) => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`,
    },
    '39': {
      name: 'Italy',
      length: 10,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '48': {
      name: 'Poland',
      length: 9,
      format: (num) => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`,
    },
    '359': {
      name: 'Bulgaria',
      length: 9,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '57': {
      name: 'Colombia',
      length: 10,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '54': {
      name: 'Argentina',
      length: 10,
      format: (num) => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`,
    },
    '257': {  // Burundi
      name: 'Burundi',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '855': {  // Cambodia
      name: 'Cambodia',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '236': {  // Central African Republic
      name: 'Central African Republic',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '235': {  // Chad
      name: 'Chad',
      length: 7,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '56': {  // Chile
      name: 'Chile',
      length: 9,
      format: num => `${num.slice(0,1)} ${num.slice(1,5)} ${num.slice(5)}`
    },
    '269': {  // Comoros
      name: 'Comoros',
      length: 7,
      format: num => `${num.slice(0,3)} ${num.slice(3)}`
    },
    '506': {  // Costa Rica
      name: 'Costa Rica',
      length: 8,
      format: num => `${num.slice(0,4)} ${num.slice(4)}`
    },
    '385': {  // Croatia
      name: 'Croatia',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '53': {  // Cuba
      name: 'Cuba',
      length: 8,
      format: num => `${num.slice(0,4)} ${num.slice(4)}`
    },
    '357': {  // Cyprus
      name: 'Cyprus',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '243': {  // DR Congo
      name: 'DR Congo',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '45': {  // Denmark
      name: 'Denmark',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,4)} ${num.slice(4,6)} ${num.slice(6)}`
    },
    '253': {  // Djibouti
      name: 'Djibouti',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,4)} ${num.slice(4)}`
    },
    '503': {  // El Salvador
      name: 'El Salvador',
      length: 8,
      format: num => `${num.slice(0,4)} ${num.slice(4)}`
    },
    '240': {  // Equatorial Guinea
      name: 'Equatorial Guinea',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '291': {  // Eritrea
      name: 'Eritrea',
      length: 7,
      format: num => `${num.slice(0,1)} ${num.slice(1,4)} ${num.slice(4)}`
    },
    '372': {  // Estonia
      name: 'Estonia',
      length: 8,
      format: num => `${num.slice(0,3)} ${num.slice(3,5)} ${num.slice(5)}`
    },
    '500': {  // Falkland Islands
      name: 'Falkland Islands',
      length: 5,
      format: num => `${num.slice(0,5)}` // Local numbers only
    },
    '298': {  // Faroe Islands
      name: 'Faroe Islands',
      length: 6,
      format: num => `${num.slice(0,3)} ${num.slice(3)}`
    },
    '679': {  // Fiji
      name: 'Fiji',
      length: 7,
      format: num => `${num.slice(0,3)} ${num.slice(3)}`
    },
    '358': {  // Finland
      name: 'Finland',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '689': {  // French Polynesia
      name: 'French Polynesia',
      length: 6,
      format: num => `${num.slice(0,2)} ${num.slice(2,4)} ${num.slice(4)}`
    },
    '220': {  // Gambia
      name: 'Gambia',
      length: 7,
      format: num => `${num.slice(0,3)} ${num.slice(3)}`
    },
    '30': {  // Greece
      name: 'Greece',
      length: 10,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '299': {  // Greenland
      name: 'Greenland',
      length: 6,
      format: num => `${num.slice(0,2)} ${num.slice(2,4)} ${num.slice(4)}`
    },
    '502': {  // Guatemala
      name: 'Guatemala',
      length: 8,
      format: num => `${num.slice(0,4)} ${num.slice(4)}`
    },
    '224': {  // Guinea
      name: 'Guinea',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '245': {  // Guinea-Bissau
      name: 'Guinea-Bissau',
      length: 7,
      format: num => `${num.slice(0,3)} ${num.slice(3)}`
    },
    '592': {  // Guyana
      name: 'Guyana',
      length: 7,
      format: num => `${num.slice(0,3)} ${num.slice(3)}`
    },
    '509': {  // Haiti
      name: 'Haiti',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '504': {  // Honduras
      name: 'Honduras',
      length: 8,
      format: num => `${num.slice(0,4)} ${num.slice(4)}`
    },
    '852': {  // Hong Kong
      name: 'Hong Kong',
      length: 8,
      format: num => `${num.slice(0,4)} ${num.slice(4)}`
    },
    '36': {  // Hungary
      name: 'Hungary',
      length: 9,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '354': {  // Iceland
      name: 'Iceland',
      length: 7,
      format: num => `${num.slice(0,3)} ${num.slice(3)}`
    },
    '62': {  // Indonesia
      name: 'Indonesia',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '964': {  // Iraq
      name: 'Iraq',
      length: 10,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '225': {  // Ivory Coast
      name: 'Ivory Coast',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '962': {  // Jordan
      name: 'Jordan',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '686': {  // Kiribati
      name: 'Kiribati',
      length: 5,
      format: num => `${num.slice(0,5)}`
    },
    '383': {  // Kosovo
      name: 'Kosovo',
      length: 8,
      format: num => `${num.slice(0,3)} ${num.slice(3,5)} ${num.slice(5)}`
    },
    '965': {  // Kuwait
      name: 'Kuwait',
      length: 8,
      format: num => `${num.slice(0,4)} ${num.slice(4)}`
    },
    '996': {  // Kyrgyzstan
      name: 'Kyrgyzstan',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '856': {  // Laos
      name: 'Laos',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '371': {  // Latvia
      name: 'Latvia',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '266': {  // Lesotho
      name: 'Lesotho',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '231': {  // Liberia
      name: 'Liberia',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '218': {  // Libya
      name: 'Libya',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '423': {  // Liechtenstein
      name: 'Liechtenstein',
      length: 7,
      format: num => `${num.slice(0,3)} ${num.slice(3)}`
    },
    '370': {  // Lithuania
      name: 'Lithuania',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '352': {  // Luxembourg
      name: 'Luxembourg',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '853': {  // Macau
      name: 'Macau',
      length: 8,
      format: num => `${num.slice(0,4)} ${num.slice(4)}`
    },
    '389': {  // Macedonia
      name: 'Macedonia',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '261': {  // Madagascar
      name: 'Madagascar',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '265': {  // Malawi
      name: 'Malawi',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '60': {  // Malaysia
      name: 'Malaysia',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '960': {  // Maldives
      name: 'Maldives',
      length: 7,
      format: num => `${num.slice(0,3)} ${num.slice(3)}`
    },
    '223': {  // Mali
      name: 'Mali',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '356': {  // Malta
      name: 'Malta',
      length: 8,
      format: num => `${num.slice(0,4)} ${num.slice(4)}`
    },
    '692': {  // Marshall Islands
      name: 'Marshall Islands',
      length: 7,
      format: num => `${num.slice(0,3)} ${num.slice(3)}`
    },
    '222': {  // Mauritania
      name: 'Mauritania',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '230': {  // Mauritius
      name: 'Mauritius',
      length: 7,
      format: num => `${num.slice(0,3)} ${num.slice(3)}`
    },
    '65': {  // Singapore
      name: 'Singapore',
      length: 8,
      format: num => `${num.slice(0,4)} ${num.slice(4)}`
    },
    '386': {  // Slovenia
      name: 'Slovenia',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '677': {  // Solomon Islands
      name: 'Solomon Islands',
      length: 7,
      format: num => `${num.slice(0,3)} ${num.slice(3)}`
    },
    '252': {  // Somalia
      name: 'Somalia',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '82': {  // South Korea
      name: 'South Korea',
      length: 10,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '211': {  // South Sudan
      name: 'South Sudan',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '34': {  // Spain
      name: 'Spain',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '94': {  // Sri Lanka
      name: 'Sri Lanka',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '249': {  // Sudan
      name: 'Sudan',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '597': {  // Suriname
      name: 'Suriname',
      length: 7,
      format: num => `${num.slice(0,3)} ${num.slice(3)}`
    },
    '268': {  // Swaziland
      name: 'Swaziland',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '46': {  // Sweden
      name: 'Sweden',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '886': {  // Taiwan
      name: 'Taiwan',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '992': {  // Tajikistan
      name: 'Tajikistan',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '255': {  // Tanzania
      name: 'Tanzania',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '228': {  // Togo
      name: 'Togo',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '690': {  // Tokelau
      name: 'Tokelau',
      length: 4,
      format: num => `${num.slice(0,4)}`
    },
    '676': {  // Tonga
      name: 'Tonga',
      length: 5,
      format: num => `${num.slice(0,5)}`
    },
    '216': {  // Tunisia
      name: 'Tunisia',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '993': {  // Turkmenistan
      name: 'Turkmenistan',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,5)} ${num.slice(5)}`
    },
    '688': {  // Tuvalu
      name: 'Tuvalu',
      length: 5,
      format: num => `${num.slice(0,5)}`
    },
    '256': {  // Uganda
      name: 'Uganda',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '598': {  // Uruguay
      name: 'Uruguay',
      length: 8,
      format: num => `${num.slice(0,2)} ${num.slice(2,4)} ${num.slice(4)}`
    },
    '998': {  // Uzbekistan
      name: 'Uzbekistan',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '678': {  // Vanuatu
      name: 'Vanuatu',
      length: 7,
      format: num => `${num.slice(0,3)} ${num.slice(3)}`
    },
    '379': {  // Vatican
      name: 'Vatican',
      length: 10,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '58': {  // Venezuela
      name: 'Venezuela',
      length: 10,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '84': {  // Vietnam
      name: 'Vietnam',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '681': {  // Wallis and Futuna
      name: 'Wallis and Futuna',
      length: 6,
      format: num => `${num.slice(0,2)} ${num.slice(2,4)} ${num.slice(4)}`
    },
    '260': {  // Zambia
      name: 'Zambia',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    },
    '263': {  // Zimbabwe
      name: 'Zimbabwe',
      length: 9,
      format: num => `${num.slice(0,3)} ${num.slice(3,6)} ${num.slice(6)}`
    }
  };

  function reformatPhoneNumber(phoneNumber) {
    try {
      if (!phoneNumber) return "";
      
      // Clean the number first
      let cleaned = phoneNumber.toString().replace(/[^\d]/g, '');
      
      // If no digits found, return empty string
      if (!cleaned.length) {
        console.log("No digits found in input");
        return "";
      }

      let countryCode = "";
      let formatter = null;

      // Try to match country codes (checking 3 digits first, then 2, then 1)
      for (let i = 3; i > 0; i--) {
        const potentialCode = cleaned.substring(0, i);
        console.log(`Trying country code: ${potentialCode}`);
        if (countryFormats[potentialCode]) {
          countryCode = "+" + potentialCode;
          cleaned = cleaned.substring(i);
          formatter = countryFormats[potentialCode];
          console.log(`Found country: ${formatter.name}, Remaining digits: ${cleaned}`);
          break;
        }
      }

      // If no country code was found and number is long enough, assume US/Canada
      if (!countryCode && cleaned.length >= 10) {
        countryCode = "+1";
        formatter = countryFormats['1'];
        if (cleaned.startsWith("1")) {
          cleaned = cleaned.substring(1);
        }
        console.log("Defaulting to US/Canada format");
      }

      // Verify the length matches the country's expected format
      if (!formatter || cleaned.length !== formatter.length) {
        throw new Error(`Invalid phone number length for ${formatter?.name || 'unknown'} format`);
      }

      // Format the number according to the country's rules
      return `${countryCode} ${formatter.format(cleaned)}`;

    } catch (error) {
      console.error("Error reformatting phone number:", error);
      return phoneNumber; // Return original number if formatting fails
    }
  }

  phone_number = reformatPhoneNumber(phone_number);

  console.log("Final for HubSpot:", phone_number);
  console.log("Number type:", typeof phone_number);
  console.log("Number length:", phone_number.length);
  console.log("Raw number value:", JSON.stringify(phone_number));

  callback({
    outputFields: {
      phone: phone_number || "",
      hasPhone: !!phone_number,
    },
  });
};