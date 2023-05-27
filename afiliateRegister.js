const timezones = {
  "Africa/Abidjan": {
    u: 0,
    c: ["CI", "BF", "GH", "GM", "GN", "ML", "MR", "SH", "SL", "SN", "TG"],
  },
  "Africa/Accra": {
    a: "Africa/Abidjan",
    c: ["GH"],
    r: 1,
  },
  "Africa/Addis_Ababa": {
    a: "Africa/Nairobi",
    c: ["ET"],
    r: 1,
  },
  "Africa/Algiers": {
    u: 60,
    c: ["DZ"],
  },
  "Africa/Asmara": {
    a: "Africa/Nairobi",
    c: ["ER"],
    r: 1,
  },
  "Africa/Asmera": {
    a: "Africa/Nairobi",
    c: ["ER"],
    r: 1,
  },
  "Africa/Bamako": {
    a: "Africa/Abidjan",
    c: ["ML"],
    r: 1,
  },
  "Africa/Bangui": {
    a: "Africa/Lagos",
    c: ["CF"],
    r: 1,
  },
  "Africa/Banjul": {
    a: "Africa/Abidjan",
    c: ["GM"],
    r: 1,
  },
  "Africa/Bissau": {
    u: 0,
    c: ["GW"],
  },
  "Africa/Blantyre": {
    a: "Africa/Maputo",
    c: ["MW"],
    r: 1,
  },
  "Africa/Brazzaville": {
    a: "Africa/Lagos",
    c: ["CG"],
    r: 1,
  },
  "Africa/Bujumbura": {
    a: "Africa/Maputo",
    c: ["BI"],
    r: 1,
  },
  "Africa/Cairo": {
    u: 120,
    c: ["EG"],
  },
  "Africa/Casablanca": {
    u: 60,
    d: 0,
    c: ["MA"],
  },
  "Africa/Ceuta": {
    u: 60,
    d: 120,
    c: ["ES"],
  },
  "Africa/Conakry": {
    a: "Africa/Abidjan",
    c: ["GN"],
    r: 1,
  },
  "Africa/Dakar": {
    a: "Africa/Abidjan",
    c: ["SN"],
    r: 1,
  },
  "Africa/Dar_es_Salaam": {
    a: "Africa/Nairobi",
    c: ["TZ"],
    r: 1,
  },
  "Africa/Djibouti": {
    a: "Africa/Nairobi",
    c: ["DJ"],
    r: 1,
  },
  "Africa/Douala": {
    a: "Africa/Lagos",
    c: ["CM"],
    r: 1,
  },
  "Africa/El_Aaiun": {
    u: 60,
    d: 0,
    c: ["EH"],
  },
  "Africa/Freetown": {
    a: "Africa/Abidjan",
    c: ["SL"],
    r: 1,
  },
  "Africa/Gaborone": {
    a: "Africa/Maputo",
    c: ["BW"],
    r: 1,
  },
  "Africa/Harare": {
    a: "Africa/Maputo",
    c: ["ZW"],
    r: 1,
  },
  "Africa/Johannesburg": {
    u: 120,
    c: ["ZA", "LS", "SZ"],
  },
  "Africa/Juba": {
    u: 120,
    c: ["SS"],
  },
  "Africa/Kampala": {
    a: "Africa/Nairobi",
    c: ["UG"],
    r: 1,
  },
  "Africa/Khartoum": {
    u: 120,
    c: ["SD"],
  },
  "Africa/Kigali": {
    a: "Africa/Maputo",
    c: ["RW"],
    r: 1,
  },
  "Africa/Kinshasa": {
    a: "Africa/Lagos",
    c: ["CD"],
    r: 1,
  },
  "Africa/Lagos": {
    u: 60,
    c: ["NG", "AO", "BJ", "CD", "CF", "CG", "CM", "GA", "GQ", "NE"],
  },
  "Africa/Libreville": {
    a: "Africa/Lagos",
    c: ["GA"],
    r: 1,
  },
  "Africa/Lome": {
    a: "Africa/Abidjan",
    c: ["TG"],
    r: 1,
  },
  "Africa/Luanda": {
    a: "Africa/Lagos",
    c: ["AO"],
    r: 1,
  },
  "Africa/Lubumbashi": {
    a: "Africa/Maputo",
    c: ["CD"],
    r: 1,
  },
  "Africa/Lusaka": {
    a: "Africa/Maputo",
    c: ["ZM"],
    r: 1,
  },
  "Africa/Malabo": {
    a: "Africa/Lagos",
    c: ["GQ"],
    r: 1,
  },
  "Africa/Maputo": {
    u: 120,
    c: ["MZ", "BI", "BW", "CD", "MW", "RW", "ZM", "ZW"],
  },
  "Africa/Maseru": {
    a: "Africa/Johannesburg",
    c: ["LS"],
    r: 1,
  },
  "Africa/Mbabane": {
    a: "Africa/Johannesburg",
    c: ["SZ"],
    r: 1,
  },
  "Africa/Mogadishu": {
    a: "Africa/Nairobi",
    c: ["SO"],
    r: 1,
  },
  "Africa/Monrovia": {
    u: 0,
    c: ["LR"],
  },
  "Africa/Nairobi": {
    u: 180,
    c: ["KE", "DJ", "ER", "ET", "KM", "MG", "SO", "TZ", "UG", "YT"],
  },
  "Africa/Ndjamena": {
    u: 60,
    c: ["TD"],
  },
  "Africa/Niamey": {
    a: "Africa/Lagos",
    c: ["NE"],
    r: 1,
  },
  "Africa/Nouakchott": {
    a: "Africa/Abidjan",
    c: ["MR"],
    r: 1,
  },
  "Africa/Ouagadougou": {
    a: "Africa/Abidjan",
    c: ["BF"],
    r: 1,
  },
  "Africa/Porto-Novo": {
    a: "Africa/Lagos",
    c: ["BJ"],
    r: 1,
  },
  "Africa/Sao_Tome": {
    u: 0,
    c: ["ST"],
  },
  "Africa/Timbuktu": {
    a: "Africa/Abidjan",
    c: ["ML"],
    r: 1,
  },
  "Africa/Tripoli": {
    u: 120,
    c: ["LY"],
  },
  "Africa/Tunis": {
    u: 60,
    c: ["TN"],
  },
  "Africa/Windhoek": {
    u: 120,
    c: ["NA"],
  },
  "America/Adak": {
    u: -600,
    d: -540,
    c: ["US"],
  },
  "America/Anchorage": {
    u: -540,
    d: -480,
    c: ["US"],
  },
  "America/Anguilla": {
    a: "America/Puerto_Rico",
    c: ["AI"],
    r: 1,
  },
  "America/Antigua": {
    a: "America/Puerto_Rico",
    c: ["AG"],
    r: 1,
  },
  "America/Araguaina": {
    u: -180,
    c: ["BR"],
  },
  "America/Argentina/Buenos_Aires": {
    u: -180,
    c: ["AR"],
  },
  "America/Argentina/Catamarca": {
    u: -180,
    c: ["AR"],
  },
  "America/Argentina/ComodRivadavia": {
    a: "America/Argentina/Catamarca",
    r: 1,
  },
  "America/Argentina/Cordoba": {
    u: -180,
    c: ["AR"],
  },
  "America/Argentina/Jujuy": {
    u: -180,
    c: ["AR"],
  },
  "America/Argentina/La_Rioja": {
    u: -180,
    c: ["AR"],
  },
  "America/Argentina/Mendoza": {
    u: -180,
    c: ["AR"],
  },
  "America/Argentina/Rio_Gallegos": {
    u: -180,
    c: ["AR"],
  },
  "America/Argentina/Salta": {
    u: -180,
    c: ["AR"],
  },
  "America/Argentina/San_Juan": {
    u: -180,
    c: ["AR"],
  },
  "America/Argentina/San_Luis": {
    u: -180,
    c: ["AR"],
  },
  "America/Argentina/Tucuman": {
    u: -180,
    c: ["AR"],
  },
  "America/Argentina/Ushuaia": {
    u: -180,
    c: ["AR"],
  },
  "America/Aruba": {
    a: "America/Puerto_Rico",
    c: ["AW"],
    r: 1,
  },
  "America/Asuncion": {
    u: -240,
    d: -180,
    c: ["PY"],
  },
  "America/Atikokan": {
    a: "America/Panama",
    c: ["CA"],
    r: 1,
  },
  "America/Atka": {
    a: "America/Adak",
    r: 1,
  },
  "America/Bahia": {
    u: -180,
    c: ["BR"],
  },
  "America/Bahia_Banderas": {
    u: -360,
    d: -300,
    c: ["MX"],
  },
  "America/Barbados": {
    u: -240,
    c: ["BB"],
  },
  "America/Belem": {
    u: -180,
    c: ["BR"],
  },
  "America/Belize": {
    u: -360,
    c: ["BZ"],
  },
  "America/Blanc-Sablon": {
    a: "America/Puerto_Rico",
    c: ["CA"],
    r: 1,
  },
  "America/Boa_Vista": {
    u: -240,
    c: ["BR"],
  },
  "America/Bogota": {
    u: -300,
    c: ["CO"],
  },
  "America/Boise": {
    u: -420,
    d: -360,
    c: ["US"],
  },
  "America/Buenos_Aires": {
    a: "America/Argentina/Buenos_Aires",
    r: 1,
  },
  "America/Cambridge_Bay": {
    u: -420,
    d: -360,
    c: ["CA"],
  },
  "America/Campo_Grande": {
    u: -240,
    c: ["BR"],
  },
  "America/Cancun": {
    u: -300,
    c: ["MX"],
  },
  "America/Caracas": {
    u: -240,
    c: ["VE"],
  },
  "America/Catamarca": {
    a: "America/Argentina/Catamarca",
    r: 1,
  },
  "America/Cayenne": {
    u: -180,
    c: ["GF"],
  },
  "America/Cayman": {
    a: "America/Panama",
    c: ["KY"],
    r: 1,
  },
  "America/Chicago": {
    u: -360,
    d: -300,
    c: ["US"],
  },
  "America/Chihuahua": {
    u: -420,
    d: -360,
    c: ["MX"],
  },
  "America/Coral_Harbour": {
    a: "America/Panama",
    c: ["CA"],
    r: 1,
  },
  "America/Cordoba": {
    a: "America/Argentina/Cordoba",
    r: 1,
  },
  "America/Costa_Rica": {
    u: -360,
    c: ["CR"],
  },
  "America/Creston": {
    a: "America/Phoenix",
    c: ["CA"],
    r: 1,
  },
  "America/Cuiaba": {
    u: -240,
    c: ["BR"],
  },
  "America/Curacao": {
    a: "America/Puerto_Rico",
    c: ["CW"],
    r: 1,
  },
  "America/Danmarkshavn": {
    u: 0,
    c: ["GL"],
  },
  "America/Dawson": {
    u: -420,
    c: ["CA"],
  },
  "America/Dawson_Creek": {
    u: -420,
    c: ["CA"],
  },
  "America/Denver": {
    u: -420,
    d: -360,
    c: ["US"],
  },
  "America/Detroit": {
    u: -300,
    d: -240,
    c: ["US"],
  },
  "America/Dominica": {
    a: "America/Puerto_Rico",
    c: ["DM"],
    r: 1,
  },
  "America/Edmonton": {
    u: -420,
    d: -360,
    c: ["CA"],
  },
  "America/Eirunepe": {
    u: -300,
    c: ["BR"],
  },
  "America/El_Salvador": {
    u: -360,
    c: ["SV"],
  },
  "America/Ensenada": {
    a: "America/Tijuana",
    r: 1,
  },
  "America/Fort_Nelson": {
    u: -420,
    c: ["CA"],
  },
  "America/Fort_Wayne": {
    a: "America/Indiana/Indianapolis",
    r: 1,
  },
  "America/Fortaleza": {
    u: -180,
    c: ["BR"],
  },
  "America/Glace_Bay": {
    u: -240,
    d: -180,
    c: ["CA"],
  },
  "America/Godthab": {
    a: "America/Nuuk",
    r: 1,
  },
  "America/Goose_Bay": {
    u: -240,
    d: -180,
    c: ["CA"],
  },
  "America/Grand_Turk": {
    u: -300,
    d: -240,
    c: ["TC"],
  },
  "America/Grenada": {
    a: "America/Puerto_Rico",
    c: ["GD"],
    r: 1,
  },
  "America/Guadeloupe": {
    a: "America/Puerto_Rico",
    c: ["GP"],
    r: 1,
  },
  "America/Guatemala": {
    u: -360,
    c: ["GT"],
  },
  "America/Guayaquil": {
    u: -300,
    c: ["EC"],
  },
  "America/Guyana": {
    u: -240,
    c: ["GY"],
  },
  "America/Halifax": {
    u: -240,
    d: -180,
    c: ["CA"],
  },
  "America/Havana": {
    u: -300,
    d: -240,
    c: ["CU"],
  },
  "America/Hermosillo": {
    u: -420,
    c: ["MX"],
  },
  "America/Indiana/Indianapolis": {
    u: -300,
    d: -240,
    c: ["US"],
  },
  "America/Indiana/Knox": {
    u: -360,
    d: -300,
    c: ["US"],
  },
  "America/Indiana/Marengo": {
    u: -300,
    d: -240,
    c: ["US"],
  },
  "America/Indiana/Petersburg": {
    u: -300,
    d: -240,
    c: ["US"],
  },
  "America/Indiana/Tell_City": {
    u: -360,
    d: -300,
    c: ["US"],
  },
  "America/Indiana/Vevay": {
    u: -300,
    d: -240,
    c: ["US"],
  },
  "America/Indiana/Vincennes": {
    u: -300,
    d: -240,
    c: ["US"],
  },
  "America/Indiana/Winamac": {
    u: -300,
    d: -240,
    c: ["US"],
  },
  "America/Indianapolis": {
    a: "America/Indiana/Indianapolis",
    r: 1,
  },
  "America/Inuvik": {
    u: -420,
    d: -360,
    c: ["CA"],
  },
  "America/Iqaluit": {
    u: -300,
    d: -240,
    c: ["CA"],
  },
  "America/Jamaica": {
    u: -300,
    c: ["JM"],
  },
  "America/Jujuy": {
    a: "America/Argentina/Jujuy",
    r: 1,
  },
  "America/Juneau": {
    u: -540,
    d: -480,
    c: ["US"],
  },
  "America/Kentucky/Louisville": {
    u: -300,
    d: -240,
    c: ["US"],
  },
  "America/Kentucky/Monticello": {
    u: -300,
    d: -240,
    c: ["US"],
  },
  "America/Knox_IN": {
    a: "America/Indiana/Knox",
    r: 1,
  },
  "America/Kralendijk": {
    a: "America/Puerto_Rico",
    c: ["BQ"],
    r: 1,
  },
  "America/La_Paz": {
    u: -240,
    c: ["BO"],
  },
  "America/Lima": {
    u: -300,
    c: ["PE"],
  },
  "America/Los_Angeles": {
    u: -480,
    d: -420,
    c: ["US"],
  },
  "America/Louisville": {
    a: "America/Kentucky/Louisville",
    r: 1,
  },
  "America/Lower_Princes": {
    a: "America/Puerto_Rico",
    c: ["SX"],
    r: 1,
  },
  "America/Maceio": {
    u: -180,
    c: ["BR"],
  },
  "America/Managua": {
    u: -360,
    c: ["NI"],
  },
  "America/Manaus": {
    u: -240,
    c: ["BR"],
  },
  "America/Marigot": {
    a: "America/Puerto_Rico",
    c: ["MF"],
    r: 1,
  },
  "America/Martinique": {
    u: -240,
    c: ["MQ"],
  },
  "America/Matamoros": {
    u: -360,
    d: -300,
    c: ["MX"],
  },
  "America/Mazatlan": {
    u: -420,
    d: -360,
    c: ["MX"],
  },
  "America/Mendoza": {
    a: "America/Argentina/Mendoza",
    r: 1,
  },
  "America/Menominee": {
    u: -360,
    d: -300,
    c: ["US"],
  },
  "America/Merida": {
    u: -360,
    d: -300,
    c: ["MX"],
  },
  "America/Metlakatla": {
    u: -540,
    d: -480,
    c: ["US"],
  },
  "America/Mexico_City": {
    u: -360,
    d: -300,
    c: ["MX"],
  },
  "America/Miquelon": {
    u: -180,
    d: -120,
    c: ["PM"],
  },
  "America/Moncton": {
    u: -240,
    d: -180,
    c: ["CA"],
  },
  "America/Monterrey": {
    u: -360,
    d: -300,
    c: ["MX"],
  },
  "America/Montevideo": {
    u: -180,
    c: ["UY"],
  },
  "America/Montreal": {
    a: "America/Toronto",
    c: ["CA"],
    r: 1,
  },
  "America/Montserrat": {
    a: "America/Puerto_Rico",
    c: ["MS"],
    r: 1,
  },
  "America/Nassau": {
    a: "America/Toronto",
    c: ["BS"],
    r: 1,
  },
  "America/New_York": {
    u: -300,
    d: -240,
    c: ["US"],
  },
  "America/Nipigon": {
    u: -300,
    d: -240,
    c: ["CA"],
  },
  "America/Nome": {
    u: -540,
    d: -480,
    c: ["US"],
  },
  "America/Noronha": {
    u: -120,
    c: ["BR"],
  },
  "America/North_Dakota/Beulah": {
    u: -360,
    d: -300,
    c: ["US"],
  },
  "America/North_Dakota/Center": {
    u: -360,
    d: -300,
    c: ["US"],
  },
  "America/North_Dakota/New_Salem": {
    u: -360,
    d: -300,
    c: ["US"],
  },
  "America/Nuuk": {
    u: -180,
    d: -120,
    c: ["GL"],
  },
  "America/Ojinaga": {
    u: -420,
    d: -360,
    c: ["MX"],
  },
  "America/Panama": {
    u: -300,
    c: ["PA", "CA", "KY"],
  },
  "America/Pangnirtung": {
    u: -300,
    d: -240,
    c: ["CA"],
  },
  "America/Paramaribo": {
    u: -180,
    c: ["SR"],
  },
  "America/Phoenix": {
    u: -420,
    c: ["US", "CA"],
  },
  "America/Port-au-Prince": {
    u: -300,
    d: -240,
    c: ["HT"],
  },
  "America/Port_of_Spain": {
    a: "America/Puerto_Rico",
    c: ["TT"],
    r: 1,
  },
  "America/Porto_Acre": {
    a: "America/Rio_Branco",
    r: 1,
  },
  "America/Porto_Velho": {
    u: -240,
    c: ["BR"],
  },
  "America/Puerto_Rico": {
    u: -240,
    c: [
      "PR",
      "AG",
      "CA",
      "AI",
      "AW",
      "BL",
      "BQ",
      "CW",
      "DM",
      "GD",
      "GP",
      "KN",
      "LC",
      "MF",
      "MS",
      "SX",
      "TT",
      "VC",
      "VG",
      "VI",
    ],
  },
  "America/Punta_Arenas": {
    u: -180,
    c: ["CL"],
  },
  "America/Rainy_River": {
    u: -360,
    d: -300,
    c: ["CA"],
  },
  "America/Rankin_Inlet": {
    u: -360,
    d: -300,
    c: ["CA"],
  },
  "America/Recife": {
    u: -180,
    c: ["BR"],
  },
  "America/Regina": {
    u: -360,
    c: ["CA"],
  },
  "America/Resolute": {
    u: -360,
    d: -300,
    c: ["CA"],
  },
  "America/Rio_Branco": {
    u: -300,
    c: ["BR"],
  },
  "America/Rosario": {
    a: "America/Argentina/Cordoba",
    r: 1,
  },
  "America/Santa_Isabel": {
    a: "America/Tijuana",
    r: 1,
  },
  "America/Santarem": {
    u: -180,
    c: ["BR"],
  },
  "America/Santiago": {
    u: -240,
    d: -180,
    c: ["CL"],
  },
  "America/Santo_Domingo": {
    u: -240,
    c: ["DO"],
  },
  "America/Sao_Paulo": {
    u: -180,
    c: ["BR"],
  },
  "America/Scoresbysund": {
    u: -60,
    d: 0,
    c: ["GL"],
  },
  "America/Shiprock": {
    a: "America/Denver",
    r: 1,
  },
  "America/Sitka": {
    u: -540,
    d: -480,
    c: ["US"],
  },
  "America/St_Barthelemy": {
    a: "America/Puerto_Rico",
    c: ["BL"],
    r: 1,
  },
  "America/St_Johns": {
    u: -150,
    d: -90,
    c: ["CA"],
  },
  "America/St_Kitts": {
    a: "America/Puerto_Rico",
    c: ["KN"],
    r: 1,
  },
  "America/St_Lucia": {
    a: "America/Puerto_Rico",
    c: ["LC"],
    r: 1,
  },
  "America/St_Thomas": {
    a: "America/Puerto_Rico",
    c: ["VI"],
    r: 1,
  },
  "America/St_Vincent": {
    a: "America/Puerto_Rico",
    c: ["VC"],
    r: 1,
  },
  "America/Swift_Current": {
    u: -360,
    c: ["CA"],
  },
  "America/Tegucigalpa": {
    u: -360,
    c: ["HN"],
  },
  "America/Thule": {
    u: -240,
    d: -180,
    c: ["GL"],
  },
  "America/Thunder_Bay": {
    u: -300,
    d: -240,
    c: ["CA"],
  },
  "America/Tijuana": {
    u: -480,
    d: -420,
    c: ["MX"],
  },
  "America/Toronto": {
    u: -300,
    d: -240,
    c: ["CA", "BS"],
  },
  "America/Tortola": {
    a: "America/Puerto_Rico",
    c: ["VG"],
    r: 1,
  },
  "America/Vancouver": {
    u: -480,
    d: -420,
    c: ["CA"],
  },
  "America/Virgin": {
    a: "America/Puerto_Rico",
    c: ["VI"],
    r: 1,
  },
  "America/Whitehorse": {
    u: -420,
    c: ["CA"],
  },
  "America/Winnipeg": {
    u: -360,
    d: -300,
    c: ["CA"],
  },
  "America/Yakutat": {
    u: -540,
    d: -480,
    c: ["US"],
  },
  "America/Yellowknife": {
    u: -420,
    d: -360,
    c: ["CA"],
  },
  "Antarctica/Casey": {
    u: 660,
    c: ["AQ"],
  },
  "Antarctica/Davis": {
    u: 420,
    c: ["AQ"],
  },
  "Antarctica/DumontDUrville": {
    a: "Pacific/Port_Moresby",
    c: ["AQ"],
    r: 1,
  },
  "Antarctica/Macquarie": {
    u: 600,
    d: 660,
    c: ["AU"],
  },
  "Antarctica/Mawson": {
    u: 300,
    c: ["AQ"],
  },
  "Antarctica/McMurdo": {
    a: "Pacific/Auckland",
    c: ["AQ"],
    r: 1,
  },
  "Antarctica/Palmer": {
    u: -180,
    c: ["AQ"],
  },
  "Antarctica/Rothera": {
    u: -180,
    c: ["AQ"],
  },
  "Antarctica/South_Pole": {
    a: "Pacific/Auckland",
    c: ["AQ"],
    r: 1,
  },
  "Antarctica/Syowa": {
    a: "Asia/Riyadh",
    c: ["AQ"],
    r: 1,
  },
  "Antarctica/Troll": {
    u: 0,
    d: 120,
    c: ["AQ"],
  },
  "Antarctica/Vostok": {
    u: 360,
    c: ["AQ"],
  },
  "Arctic/Longyearbyen": {
    a: "Europe/Oslo",
    c: ["SJ"],
    r: 1,
  },
  "Asia/Aden": {
    a: "Asia/Riyadh",
    c: ["YE"],
    r: 1,
  },
  "Asia/Almaty": {
    u: 360,
    c: ["KZ"],
  },
  "Asia/Amman": {
    u: 120,
    d: 180,
    c: ["JO"],
  },
  "Asia/Anadyr": {
    u: 720,
    c: ["RU"],
  },
  "Asia/Aqtau": {
    u: 300,
    c: ["KZ"],
  },
  "Asia/Aqtobe": {
    u: 300,
    c: ["KZ"],
  },
  "Asia/Ashgabat": {
    u: 300,
    c: ["TM"],
  },
  "Asia/Ashkhabad": {
    a: "Asia/Ashgabat",
    r: 1,
  },
  "Asia/Atyrau": {
    u: 300,
    c: ["KZ"],
  },
  "Asia/Baghdad": {
    u: 180,
    c: ["IQ"],
  },
  "Asia/Bahrain": {
    a: "Asia/Qatar",
    c: ["BH"],
    r: 1,
  },
  "Asia/Baku": {
    u: 240,
    c: ["AZ"],
  },
  "Asia/Bangkok": {
    u: 420,
    c: ["TH", "KH", "LA", "VN"],
  },
  "Asia/Barnaul": {
    u: 420,
    c: ["RU"],
  },
  "Asia/Beirut": {
    u: 120,
    d: 180,
    c: ["LB"],
  },
  "Asia/Bishkek": {
    u: 360,
    c: ["KG"],
  },
  "Asia/Brunei": {
    u: 480,
    c: ["BN"],
  },
  "Asia/Calcutta": {
    a: "Asia/Kolkata",
    r: 1,
  },
  "Asia/Chita": {
    u: 540,
    c: ["RU"],
  },
  "Asia/Choibalsan": {
    u: 480,
    c: ["MN"],
  },
  "Asia/Chongqing": {
    a: "Asia/Shanghai",
    r: 1,
  },
  "Asia/Chungking": {
    a: "Asia/Shanghai",
    r: 1,
  },
  "Asia/Colombo": {
    u: 330,
    c: ["LK"],
  },
  "Asia/Dacca": {
    a: "Asia/Dhaka",
    r: 1,
  },
  "Asia/Damascus": {
    u: 120,
    d: 180,
    c: ["SY"],
  },
  "Asia/Dhaka": {
    u: 360,
    c: ["BD"],
  },
  "Asia/Dili": {
    u: 540,
    c: ["TL"],
  },
  "Asia/Dubai": {
    u: 240,
    c: ["AE", "OM"],
  },
  "Asia/Dushanbe": {
    u: 300,
    c: ["TJ"],
  },
  "Asia/Famagusta": {
    u: 120,
    d: 180,
    c: ["CY"],
  },
  "Asia/Gaza": {
    u: 120,
    d: 180,
    c: ["PS"],
  },
  "Asia/Harbin": {
    a: "Asia/Shanghai",
    r: 1,
  },
  "Asia/Hebron": {
    u: 120,
    d: 180,
    c: ["PS"],
  },
  "Asia/Ho_Chi_Minh": {
    u: 420,
    c: ["VN"],
  },
  "Asia/Hong_Kong": {
    u: 480,
    c: ["HK"],
  },
  "Asia/Hovd": {
    u: 420,
    c: ["MN"],
  },
  "Asia/Irkutsk": {
    u: 480,
    c: ["RU"],
  },
  "Asia/Istanbul": {
    a: "Europe/Istanbul",
    r: 1,
  },
  "Asia/Jakarta": {
    u: 420,
    c: ["ID"],
  },
  "Asia/Jayapura": {
    u: 540,
    c: ["ID"],
  },
  "Asia/Jerusalem": {
    u: 120,
    d: 180,
    c: ["IL"],
  },
  "Asia/Kabul": {
    u: 270,
    c: ["AF"],
  },
  "Asia/Kamchatka": {
    u: 720,
    c: ["RU"],
  },
  "Asia/Karachi": {
    u: 300,
    c: ["PK"],
  },
  "Asia/Kashgar": {
    a: "Asia/Urumqi",
    r: 1,
  },
  "Asia/Kathmandu": {
    u: 345,
    c: ["NP"],
  },
  "Asia/Katmandu": {
    a: "Asia/Kathmandu",
    r: 1,
  },
  "Asia/Khandyga": {
    u: 540,
    c: ["RU"],
  },
  "Asia/Kolkata": {
    u: 330,
    c: ["IN"],
  },
  "Asia/Krasnoyarsk": {
    u: 420,
    c: ["RU"],
  },
  "Asia/Kuala_Lumpur": {
    u: 480,
    c: ["MY"],
  },
  "Asia/Kuching": {
    u: 480,
    c: ["MY"],
  },
  "Asia/Kuwait": {
    a: "Asia/Riyadh",
    c: ["KW"],
    r: 1,
  },
  "Asia/Macao": {
    a: "Asia/Macau",
    r: 1,
  },
  "Asia/Macau": {
    u: 480,
    c: ["MO"],
  },
  "Asia/Magadan": {
    u: 660,
    c: ["RU"],
  },
  "Asia/Makassar": {
    u: 480,
    c: ["ID"],
  },
  "Asia/Manila": {
    u: 480,
    c: ["PH"],
  },
  "Asia/Muscat": {
    a: "Asia/Dubai",
    c: ["OM"],
    r: 1,
  },
  "Asia/Nicosia": {
    u: 120,
    d: 180,
    c: ["CY"],
  },
  "Asia/Novokuznetsk": {
    u: 420,
    c: ["RU"],
  },
  "Asia/Novosibirsk": {
    u: 420,
    c: ["RU"],
  },
  "Asia/Omsk": {
    u: 360,
    c: ["RU"],
  },
  "Asia/Oral": {
    u: 300,
    c: ["KZ"],
  },
  "Asia/Phnom_Penh": {
    a: "Asia/Bangkok",
    c: ["KH"],
    r: 1,
  },
  "Asia/Pontianak": {
    u: 420,
    c: ["ID"],
  },
  "Asia/Pyongyang": {
    u: 540,
    c: ["KP"],
  },
  "Asia/Qatar": {
    u: 180,
    c: ["QA", "BH"],
  },
  "Asia/Qostanay": {
    u: 360,
    c: ["KZ"],
  },
  "Asia/Qyzylorda": {
    u: 300,
    c: ["KZ"],
  },
  "Asia/Rangoon": {
    a: "Asia/Yangon",
    r: 1,
  },
  "Asia/Riyadh": {
    u: 180,
    c: ["SA", "AQ", "KW", "YE"],
  },
  "Asia/Saigon": {
    a: "Asia/Ho_Chi_Minh",
    r: 1,
  },
  "Asia/Sakhalin": {
    u: 660,
    c: ["RU"],
  },
  "Asia/Samarkand": {
    u: 300,
    c: ["UZ"],
  },
  "Asia/Seoul": {
    u: 540,
    c: ["KR"],
  },
  "Asia/Shanghai": {
    u: 480,
    c: ["CN"],
  },
  "Asia/Singapore": {
    u: 480,
    c: ["SG", "MY"],
  },
  "Asia/Srednekolymsk": {
    u: 660,
    c: ["RU"],
  },
  "Asia/Taipei": {
    u: 480,
    c: ["TW"],
  },
  "Asia/Tashkent": {
    u: 300,
    c: ["UZ"],
  },
  "Asia/Tbilisi": {
    u: 240,
    c: ["GE"],
  },
  "Asia/Tehran": {
    u: 210,
    d: 270,
    c: ["IR"],
  },
  "Asia/Tel_Aviv": {
    a: "Asia/Jerusalem",
    r: 1,
  },
  "Asia/Thimbu": {
    a: "Asia/Thimphu",
    r: 1,
  },
  "Asia/Thimphu": {
    u: 360,
    c: ["BT"],
  },
  "Asia/Tokyo": {
    u: 540,
    c: ["JP"],
  },
  "Asia/Tomsk": {
    u: 420,
    c: ["RU"],
  },
  "Asia/Ujung_Pandang": {
    a: "Asia/Makassar",
    r: 1,
  },
  "Asia/Ulaanbaatar": {
    u: 480,
    c: ["MN"],
  },
  "Asia/Ulan_Bator": {
    a: "Asia/Ulaanbaatar",
    r: 1,
  },
  "Asia/Urumqi": {
    u: 360,
    c: ["CN"],
  },
  "Asia/Ust-Nera": {
    u: 600,
    c: ["RU"],
  },
  "Asia/Vientiane": {
    a: "Asia/Bangkok",
    c: ["LA"],
    r: 1,
  },
  "Asia/Vladivostok": {
    u: 600,
    c: ["RU"],
  },
  "Asia/Yakutsk": {
    u: 540,
    c: ["RU"],
  },
  "Asia/Yangon": {
    u: 390,
    c: ["MM"],
  },
  "Asia/Yekaterinburg": {
    u: 300,
    c: ["RU"],
  },
  "Asia/Yerevan": {
    u: 240,
    c: ["AM"],
  },
  "Atlantic/Azores": {
    u: -60,
    d: 0,
    c: ["PT"],
  },
  "Atlantic/Bermuda": {
    u: -240,
    d: -180,
    c: ["BM"],
  },
  "Atlantic/Canary": {
    u: 0,
    d: 60,
    c: ["ES"],
  },
  "Atlantic/Cape_Verde": {
    u: -60,
    c: ["CV"],
  },
  "Atlantic/Faeroe": {
    a: "Atlantic/Faroe",
    r: 1,
  },
  "Atlantic/Faroe": {
    u: 0,
    d: 60,
    c: ["FO"],
  },
  "Atlantic/Jan_Mayen": {
    a: "Europe/Oslo",
    c: ["SJ"],
    r: 1,
  },
  "Atlantic/Madeira": {
    u: 0,
    d: 60,
    c: ["PT"],
  },
  "Atlantic/Reykjavik": {
    u: 0,
    c: ["IS"],
  },
  "Atlantic/South_Georgia": {
    u: -120,
    c: ["GS"],
  },
  "Atlantic/St_Helena": {
    a: "Africa/Abidjan",
    c: ["SH"],
    r: 1,
  },
  "Atlantic/Stanley": {
    u: -180,
    c: ["FK"],
  },
  "Australia/ACT": {
    a: "Australia/Sydney",
    r: 1,
  },
  "Australia/Adelaide": {
    u: 570,
    d: 630,
    c: ["AU"],
  },
  "Australia/Brisbane": {
    u: 600,
    c: ["AU"],
  },
  "Australia/Broken_Hill": {
    u: 570,
    d: 630,
    c: ["AU"],
  },
  "Australia/Canberra": {
    a: "Australia/Sydney",
    r: 1,
  },
  "Australia/Currie": {
    a: "Australia/Hobart",
    r: 1,
  },
  "Australia/Darwin": {
    u: 570,
    c: ["AU"],
  },
  "Australia/Eucla": {
    u: 525,
    c: ["AU"],
  },
  "Australia/Hobart": {
    u: 600,
    d: 660,
    c: ["AU"],
  },
  "Australia/LHI": {
    a: "Australia/Lord_Howe",
    r: 1,
  },
  "Australia/Lindeman": {
    u: 600,
    c: ["AU"],
  },
  "Australia/Lord_Howe": {
    u: 630,
    d: 660,
    c: ["AU"],
  },
  "Australia/Melbourne": {
    u: 600,
    d: 660,
    c: ["AU"],
  },
  "Australia/NSW": {
    a: "Australia/Sydney",
    r: 1,
  },
  "Australia/North": {
    a: "Australia/Darwin",
    r: 1,
  },
  "Australia/Perth": {
    u: 480,
    c: ["AU"],
  },
  "Australia/Queensland": {
    a: "Australia/Brisbane",
    r: 1,
  },
  "Australia/South": {
    a: "Australia/Adelaide",
    r: 1,
  },
  "Australia/Sydney": {
    u: 600,
    d: 660,
    c: ["AU"],
  },
  "Australia/Tasmania": {
    a: "Australia/Hobart",
    r: 1,
  },
  "Australia/Victoria": {
    a: "Australia/Melbourne",
    r: 1,
  },
  "Australia/West": {
    a: "Australia/Perth",
    r: 1,
  },
  "Australia/Yancowinna": {
    a: "Australia/Broken_Hill",
    r: 1,
  },
  "Brazil/Acre": {
    a: "America/Rio_Branco",
    r: 1,
  },
  "Brazil/DeNoronha": {
    a: "America/Noronha",
    r: 1,
  },
  "Brazil/East": {
    a: "America/Sao_Paulo",
    r: 1,
  },
  "Brazil/West": {
    a: "America/Manaus",
    r: 1,
  },
  CET: {
    u: 60,
    d: 120,
  },
  CST6CDT: {
    u: -360,
    d: -300,
  },
  "Canada/Atlantic": {
    a: "America/Halifax",
    r: 1,
  },
  "Canada/Central": {
    a: "America/Winnipeg",
    r: 1,
  },
  "Canada/Eastern": {
    a: "America/Toronto",
    c: ["CA"],
    r: 1,
  },
  "Canada/Mountain": {
    a: "America/Edmonton",
    r: 1,
  },
  "Canada/Newfoundland": {
    a: "America/St_Johns",
    r: 1,
  },
  "Canada/Pacific": {
    a: "America/Vancouver",
    r: 1,
  },
  "Canada/Saskatchewan": {
    a: "America/Regina",
    r: 1,
  },
  "Canada/Yukon": {
    a: "America/Whitehorse",
    r: 1,
  },
  "Chile/Continental": {
    a: "America/Santiago",
    r: 1,
  },
  "Chile/EasterIsland": {
    a: "Pacific/Easter",
    r: 1,
  },
  Cuba: {
    a: "America/Havana",
    r: 1,
  },
  EET: {
    u: 120,
    d: 180,
  },
  EST: {
    u: -300,
  },
  EST5EDT: {
    u: -300,
    d: -240,
  },
  Egypt: {
    a: "Africa/Cairo",
    r: 1,
  },
  Eire: {
    a: "Europe/Dublin",
    r: 1,
  },
  "Etc/GMT": {
    u: 0,
  },
  "Etc/GMT+0": {
    a: "Etc/GMT",
    r: 1,
  },
  "Etc/GMT+1": {
    u: -60,
  },
  "Etc/GMT+10": {
    u: -600,
  },
  "Etc/GMT+11": {
    u: -660,
  },
  "Etc/GMT+12": {
    u: -720,
  },
  "Etc/GMT+2": {
    u: -120,
  },
  "Etc/GMT+3": {
    u: -180,
  },
  "Etc/GMT+4": {
    u: -240,
  },
  "Etc/GMT+5": {
    u: -300,
  },
  "Etc/GMT+6": {
    u: -360,
  },
  "Etc/GMT+7": {
    u: -420,
  },
  "Etc/GMT+8": {
    u: -480,
  },
  "Etc/GMT+9": {
    u: -540,
  },
  "Etc/GMT-0": {
    a: "Etc/GMT",
    r: 1,
  },
  "Etc/GMT-1": {
    u: 60,
  },
  "Etc/GMT-10": {
    u: 600,
  },
  "Etc/GMT-11": {
    u: 660,
  },
  "Etc/GMT-12": {
    u: 720,
  },
  "Etc/GMT-13": {
    u: 780,
  },
  "Etc/GMT-14": {
    u: 840,
  },
  "Etc/GMT-2": {
    u: 120,
  },
  "Etc/GMT-3": {
    u: 180,
  },
  "Etc/GMT-4": {
    u: 240,
  },
  "Etc/GMT-5": {
    u: 300,
  },
  "Etc/GMT-6": {
    u: 360,
  },
  "Etc/GMT-7": {
    u: 420,
  },
  "Etc/GMT-8": {
    u: 480,
  },
  "Etc/GMT-9": {
    u: 540,
  },
  "Etc/GMT0": {
    a: "Etc/GMT",
    r: 1,
  },
  "Etc/Greenwich": {
    a: "Etc/GMT",
    r: 1,
  },
  "Etc/UCT": {
    a: "Etc/UTC",
    r: 1,
  },
  "Etc/UTC": {
    u: 0,
  },
  "Etc/Universal": {
    a: "Etc/UTC",
    r: 1,
  },
  "Etc/Zulu": {
    a: "Etc/UTC",
    r: 1,
  },
  "Europe/Amsterdam": {
    u: 60,
    d: 120,
    c: ["NL"],
  },
  "Europe/Andorra": {
    u: 60,
    d: 120,
    c: ["AD"],
  },
  "Europe/Astrakhan": {
    u: 240,
    c: ["RU"],
  },
  "Europe/Athens": {
    u: 120,
    d: 180,
    c: ["GR"],
  },
  "Europe/Belfast": {
    a: "Europe/London",
    c: ["GB"],
    r: 1,
  },
  "Europe/Belgrade": {
    u: 60,
    d: 120,
    c: ["RS", "BA", "HR", "ME", "MK", "SI"],
  },
  "Europe/Berlin": {
    u: 60,
    d: 120,
    c: ["DE"],
  },
  "Europe/Bratislava": {
    a: "Europe/Prague",
    c: ["SK"],
    r: 1,
  },
  "Europe/Brussels": {
    u: 60,
    d: 120,
    c: ["BE"],
  },
  "Europe/Bucharest": {
    u: 120,
    d: 180,
    c: ["RO"],
  },
  "Europe/Budapest": {
    u: 60,
    d: 120,
    c: ["HU"],
  },
  "Europe/Busingen": {
    a: "Europe/Zurich",
    c: ["DE"],
    r: 1,
  },
  "Europe/Chisinau": {
    u: 120,
    d: 180,
    c: ["MD"],
  },
  "Europe/Copenhagen": {
    u: 60,
    d: 120,
    c: ["DK"],
  },
  "Europe/Dublin": {
    u: 60,
    d: 0,
    c: ["IE"],
  },
  "Europe/Gibraltar": {
    u: 60,
    d: 120,
    c: ["GI"],
  },
  "Europe/Guernsey": {
    a: "Europe/London",
    c: ["GG"],
    r: 1,
  },
  "Europe/Helsinki": {
    u: 120,
    d: 180,
    c: ["FI", "AX"],
  },
  "Europe/Isle_of_Man": {
    a: "Europe/London",
    c: ["IM"],
    r: 1,
  },
  "Europe/Istanbul": {
    u: 180,
    c: ["TR"],
  },
  "Europe/Jersey": {
    a: "Europe/London",
    c: ["JE"],
    r: 1,
  },
  "Europe/Kaliningrad": {
    u: 120,
    c: ["RU"],
  },
  "Europe/Kiev": {
    u: 120,
    d: 180,
    c: ["UA"],
  },
  "Europe/Kirov": {
    u: 180,
    c: ["RU"],
  },
  "Europe/Lisbon": {
    u: 0,
    d: 60,
    c: ["PT"],
  },
  "Europe/Ljubljana": {
    a: "Europe/Belgrade",
    c: ["SI"],
    r: 1,
  },
  "Europe/London": {
    u: 0,
    d: 60,
    c: ["GB", "GG", "IM", "JE"],
  },
  "Europe/Luxembourg": {
    u: 60,
    d: 120,
    c: ["LU"],
  },
  "Europe/Madrid": {
    u: 60,
    d: 120,
    c: ["ES"],
  },
  "Europe/Malta": {
    u: 60,
    d: 120,
    c: ["MT"],
  },
  "Europe/Mariehamn": {
    a: "Europe/Helsinki",
    c: ["AX"],
    r: 1,
  },
  "Europe/Minsk": {
    u: 180,
    c: ["BY"],
  },
  "Europe/Monaco": {
    u: 60,
    d: 120,
    c: ["MC"],
  },
  "Europe/Moscow": {
    u: 180,
    c: ["RU"],
  },
  "Europe/Nicosia": {
    a: "Asia/Nicosia",
    r: 1,
  },
  "Europe/Oslo": {
    u: 60,
    d: 120,
    c: ["NO", "SJ", "BV"],
  },
  "Europe/Paris": {
    u: 60,
    d: 120,
    c: ["FR"],
  },
  "Europe/Podgorica": {
    a: "Europe/Belgrade",
    c: ["ME"],
    r: 1,
  },
  "Europe/Prague": {
    u: 60,
    d: 120,
    c: ["CZ", "SK"],
  },
  "Europe/Riga": {
    u: 120,
    d: 180,
    c: ["LV"],
  },
  "Europe/Rome": {
    u: 60,
    d: 120,
    c: ["IT", "SM", "VA"],
  },
  "Europe/Samara": {
    u: 240,
    c: ["RU"],
  },
  "Europe/San_Marino": {
    a: "Europe/Rome",
    c: ["SM"],
    r: 1,
  },
  "Europe/Sarajevo": {
    a: "Europe/Belgrade",
    c: ["BA"],
    r: 1,
  },
  "Europe/Saratov": {
    u: 240,
    c: ["RU"],
  },
  "Europe/Simferopol": {
    u: 180,
    c: ["RU", "UA"],
  },
  "Europe/Skopje": {
    a: "Europe/Belgrade",
    c: ["MK"],
    r: 1,
  },
  "Europe/Sofia": {
    u: 120,
    d: 180,
    c: ["BG"],
  },
  "Europe/Stockholm": {
    u: 60,
    d: 120,
    c: ["SE"],
  },
  "Europe/Tallinn": {
    u: 120,
    d: 180,
    c: ["EE"],
  },
  "Europe/Tirane": {
    u: 60,
    d: 120,
    c: ["AL"],
  },
  "Europe/Tiraspol": {
    a: "Europe/Chisinau",
    r: 1,
  },
  "Europe/Ulyanovsk": {
    u: 240,
    c: ["RU"],
  },
  "Europe/Uzhgorod": {
    u: 120,
    d: 180,
    c: ["UA"],
  },
  "Europe/Vaduz": {
    a: "Europe/Zurich",
    c: ["LI"],
    r: 1,
  },
  "Europe/Vatican": {
    a: "Europe/Rome",
    c: ["VA"],
    r: 1,
  },
  "Europe/Vienna": {
    u: 60,
    d: 120,
    c: ["AT"],
  },
  "Europe/Vilnius": {
    u: 120,
    d: 180,
    c: ["LT"],
  },
  "Europe/Volgograd": {
    u: 180,
    c: ["RU"],
  },
  "Europe/Warsaw": {
    u: 60,
    d: 120,
    c: ["PL"],
  },
  "Europe/Zagreb": {
    a: "Europe/Belgrade",
    c: ["HR"],
    r: 1,
  },
  "Europe/Zaporozhye": {
    u: 120,
    d: 180,
    c: ["UA"],
  },
  "Europe/Zurich": {
    u: 60,
    d: 120,
    c: ["CH", "DE", "LI"],
  },
  Factory: {
    u: 0,
  },
  GB: {
    a: "Europe/London",
    c: ["GB"],
    r: 1,
  },
  "GB-Eire": {
    a: "Europe/London",
    c: ["GB"],
    r: 1,
  },
  GMT: {
    a: "Etc/GMT",
    r: 1,
  },
  "GMT+0": {
    a: "Etc/GMT",
    r: 1,
  },
  "GMT-0": {
    a: "Etc/GMT",
    r: 1,
  },
  GMT0: {
    a: "Etc/GMT",
    r: 1,
  },
  Greenwich: {
    a: "Etc/GMT",
    r: 1,
  },
  HST: {
    u: -600,
  },
  Hongkong: {
    a: "Asia/Hong_Kong",
    r: 1,
  },
  Iceland: {
    a: "Atlantic/Reykjavik",
    r: 1,
  },
  "Indian/Antananarivo": {
    a: "Africa/Nairobi",
    c: ["MG"],
    r: 1,
  },
  "Indian/Chagos": {
    u: 360,
    c: ["IO"],
  },
  "Indian/Christmas": {
    u: 420,
    c: ["CX"],
  },
  "Indian/Cocos": {
    u: 390,
    c: ["CC"],
  },
  "Indian/Comoro": {
    a: "Africa/Nairobi",
    c: ["KM"],
    r: 1,
  },
  "Indian/Kerguelen": {
    u: 300,
    c: ["TF", "HM"],
  },
  "Indian/Mahe": {
    u: 240,
    c: ["SC"],
  },
  "Indian/Maldives": {
    u: 300,
    c: ["MV"],
  },
  "Indian/Mauritius": {
    u: 240,
    c: ["MU"],
  },
  "Indian/Mayotte": {
    a: "Africa/Nairobi",
    c: ["YT"],
    r: 1,
  },
  "Indian/Reunion": {
    u: 240,
    c: ["RE", "TF"],
  },
  Iran: {
    a: "Asia/Tehran",
    r: 1,
  },
  Israel: {
    a: "Asia/Jerusalem",
    r: 1,
  },
  Jamaica: {
    a: "America/Jamaica",
    r: 1,
  },
  Japan: {
    a: "Asia/Tokyo",
    r: 1,
  },
  Kwajalein: {
    a: "Pacific/Kwajalein",
    r: 1,
  },
  Libya: {
    a: "Africa/Tripoli",
    r: 1,
  },
  MET: {
    u: 60,
    d: 120,
  },
  MST: {
    u: -420,
  },
  MST7MDT: {
    u: -420,
    d: -360,
  },
  "Mexico/BajaNorte": {
    a: "America/Tijuana",
    r: 1,
  },
  "Mexico/BajaSur": {
    a: "America/Mazatlan",
    r: 1,
  },
  "Mexico/General": {
    a: "America/Mexico_City",
    r: 1,
  },
  NZ: {
    a: "Pacific/Auckland",
    c: ["NZ"],
    r: 1,
  },
  "NZ-CHAT": {
    a: "Pacific/Chatham",
    r: 1,
  },
  Navajo: {
    a: "America/Denver",
    r: 1,
  },
  PRC: {
    a: "Asia/Shanghai",
    r: 1,
  },
  PST8PDT: {
    u: -480,
    d: -420,
  },
  "Pacific/Apia": {
    u: 780,
    c: ["WS"],
  },
  "Pacific/Auckland": {
    u: 720,
    d: 780,
    c: ["NZ", "AQ"],
  },
  "Pacific/Bougainville": {
    u: 660,
    c: ["PG"],
  },
  "Pacific/Chatham": {
    u: 765,
    d: 825,
    c: ["NZ"],
  },
  "Pacific/Chuuk": {
    u: 600,
    c: ["FM"],
  },
  "Pacific/Easter": {
    u: -360,
    d: -300,
    c: ["CL"],
  },
  "Pacific/Efate": {
    u: 660,
    c: ["VU"],
  },
  "Pacific/Enderbury": {
    a: "Pacific/Kanton",
    r: 1,
  },
  "Pacific/Fakaofo": {
    u: 780,
    c: ["TK"],
  },
  "Pacific/Fiji": {
    u: 720,
    d: 780,
    c: ["FJ"],
  },
  "Pacific/Funafuti": {
    u: 720,
    c: ["TV"],
  },
  "Pacific/Galapagos": {
    u: -360,
    c: ["EC"],
  },
  "Pacific/Gambier": {
    u: -540,
    c: ["PF"],
  },
  "Pacific/Guadalcanal": {
    u: 660,
    c: ["SB"],
  },
  "Pacific/Guam": {
    u: 600,
    c: ["GU", "MP"],
  },
  "Pacific/Honolulu": {
    u: -600,
    c: ["US", "UM"],
  },
  "Pacific/Johnston": {
    a: "Pacific/Honolulu",
    c: ["UM"],
    r: 1,
  },
  "Pacific/Kanton": {
    u: 780,
    c: ["KI"],
  },
  "Pacific/Kiritimati": {
    u: 840,
    c: ["KI"],
  },
  "Pacific/Kosrae": {
    u: 660,
    c: ["FM"],
  },
  "Pacific/Kwajalein": {
    u: 720,
    c: ["MH"],
  },
  "Pacific/Majuro": {
    u: 720,
    c: ["MH"],
  },
  "Pacific/Marquesas": {
    u: -510,
    c: ["PF"],
  },
  "Pacific/Midway": {
    a: "Pacific/Pago_Pago",
    c: ["UM"],
    r: 1,
  },
  "Pacific/Nauru": {
    u: 720,
    c: ["NR"],
  },
  "Pacific/Niue": {
    u: -660,
    c: ["NU"],
  },
  "Pacific/Norfolk": {
    u: 660,
    d: 720,
    c: ["NF"],
  },
  "Pacific/Noumea": {
    u: 660,
    c: ["NC"],
  },
  "Pacific/Pago_Pago": {
    u: -660,
    c: ["AS", "UM"],
  },
  "Pacific/Palau": {
    u: 540,
    c: ["PW"],
  },
  "Pacific/Pitcairn": {
    u: -480,
    c: ["PN"],
  },
  "Pacific/Pohnpei": {
    u: 660,
    c: ["FM"],
  },
  "Pacific/Ponape": {
    a: "Pacific/Pohnpei",
    r: 1,
  },
  "Pacific/Port_Moresby": {
    u: 600,
    c: ["PG", "AQ"],
  },
  "Pacific/Rarotonga": {
    u: -600,
    c: ["CK"],
  },
  "Pacific/Saipan": {
    a: "Pacific/Guam",
    c: ["MP"],
    r: 1,
  },
  "Pacific/Samoa": {
    a: "Pacific/Pago_Pago",
    c: ["WS"],
    r: 1,
  },
  "Pacific/Tahiti": {
    u: -600,
    c: ["PF"],
  },
  "Pacific/Tarawa": {
    u: 720,
    c: ["KI"],
  },
  "Pacific/Tongatapu": {
    u: 780,
    c: ["TO"],
  },
  "Pacific/Truk": {
    a: "Pacific/Chuuk",
    r: 1,
  },
  "Pacific/Wake": {
    u: 720,
    c: ["UM"],
  },
  "Pacific/Wallis": {
    u: 720,
    c: ["WF"],
  },
  "Pacific/Yap": {
    a: "Pacific/Chuuk",
    r: 1,
  },
  Poland: {
    a: "Europe/Warsaw",
    r: 1,
  },
  Portugal: {
    a: "Europe/Lisbon",
    r: 1,
  },
  ROC: {
    a: "Asia/Taipei",
    r: 1,
  },
  ROK: {
    a: "Asia/Seoul",
    r: 1,
  },
  Singapore: {
    a: "Asia/Singapore",
    c: ["SG"],
    r: 1,
  },
  Turkey: {
    a: "Europe/Istanbul",
    r: 1,
  },
  UCT: {
    a: "Etc/UTC",
    r: 1,
  },
  "US/Alaska": {
    a: "America/Anchorage",
    r: 1,
  },
  "US/Aleutian": {
    a: "America/Adak",
    r: 1,
  },
  "US/Arizona": {
    a: "America/Phoenix",
    c: ["US"],
    r: 1,
  },
  "US/Central": {
    a: "America/Chicago",
    r: 1,
  },
  "US/East-Indiana": {
    a: "America/Indiana/Indianapolis",
    r: 1,
  },
  "US/Eastern": {
    a: "America/New_York",
    r: 1,
  },
  "US/Hawaii": {
    a: "Pacific/Honolulu",
    c: ["US"],
    r: 1,
  },
  "US/Indiana-Starke": {
    a: "America/Indiana/Knox",
    r: 1,
  },
  "US/Michigan": {
    a: "America/Detroit",
    r: 1,
  },
  "US/Mountain": {
    a: "America/Denver",
    r: 1,
  },
  "US/Pacific": {
    a: "America/Los_Angeles",
    r: 1,
  },
  "US/Samoa": {
    a: "Pacific/Pago_Pago",
    c: ["WS"],
    r: 1,
  },
  UTC: {
    a: "Etc/UTC",
    r: 1,
  },
  Universal: {
    a: "Etc/UTC",
    r: 1,
  },
  "W-SU": {
    a: "Europe/Moscow",
    r: 1,
  },
  WET: {
    u: 0,
    d: 60,
  },
  Zulu: {
    a: "Etc/UTC",
    r: 1,
  },
};

const countriesDialCodeAndFlags = [
  { name: "Afghanistan", flag: "🇦🇫", code: "AF", dial_code: "+93" },
  { name: "Åland Islands", flag: "🇦🇽", code: "AX", dial_code: "+358" },
  { name: "Albania", flag: "🇦🇱", code: "AL", dial_code: "+355" },
  { name: "Algeria", flag: "🇩🇿", code: "DZ", dial_code: "+213" },
  { name: "American Samoa", flag: "🇦🇸", code: "AS", dial_code: "+1684" },
  { name: "Andorra", flag: "🇦🇩", code: "AD", dial_code: "+376" },
  { name: "Angola", flag: "🇦🇴", code: "AO", dial_code: "+244" },
  { name: "Anguilla", flag: "🇦🇮", code: "AI", dial_code: "+1264" },
  { name: "Antarctica", flag: "🇦🇶", code: "AQ", dial_code: "+672" },
  { name: "Antigua and Barbuda", flag: "🇦🇬", code: "AG", dial_code: "+1268" },
  { name: "Argentina", flag: "🇦🇷", code: "AR", dial_code: "+54" },
  { name: "Armenia", flag: "🇦🇲", code: "AM", dial_code: "+374" },
  { name: "Aruba", flag: "🇦🇼", code: "AW", dial_code: "+297" },
  { name: "Australia", flag: "🇦🇺", code: "AU", dial_code: "+61" },
  { name: "Austria", flag: "🇦🇹", code: "AT", dial_code: "+43" },
  { name: "Azerbaijan", flag: "🇦🇿", code: "AZ", dial_code: "+994" },
  { name: "Bahamas", flag: "🇧🇸", code: "BS", dial_code: "+1242" },
  { name: "Bahrain", flag: "🇧🇭", code: "BH", dial_code: "+973" },
  { name: "Bangladesh", flag: "🇧🇩", code: "BD", dial_code: "+880" },
  { name: "Barbados", flag: "🇧🇧", code: "BB", dial_code: "+1246" },
  { name: "Belarus", flag: "🇧🇾", code: "BY", dial_code: "+375" },
  { name: "Belgium", flag: "🇧🇪", code: "BE", dial_code: "+32" },
  { name: "Belize", flag: "🇧🇿", code: "BZ", dial_code: "+501" },
  { name: "Benin", flag: "🇧🇯", code: "BJ", dial_code: "+229" },
  { name: "Bermuda", flag: "🇧🇲", code: "BM", dial_code: "+1441" },
  { name: "Bhutan", flag: "🇧🇹", code: "BT", dial_code: "+975" },
  {
    name: "Bolivia, Plurinational State of bolivia",
    flag: "🇧🇴",
    code: "BO",
    dial_code: "+591",
  },
  { name: "Bosnia and Herzegovina", flag: "🇧🇦", code: "BA", dial_code: "+387" },
  { name: "Botswana", flag: "🇧🇼", code: "BW", dial_code: "+267" },
  { name: "Bouvet Island", flag: "🇧🇻", code: "BV", dial_code: "+47" },
  { name: "Brazil", flag: "🇧🇷", code: "BR", dial_code: "+55" },
  {
    name: "British Indian Ocean Territory",
    flag: "🇮🇴",
    code: "IO",
    dial_code: "+246",
  },
  { name: "Brunei Darussalam", flag: "🇧🇳", code: "BN", dial_code: "+673" },
  { name: "Bulgaria", flag: "🇧🇬", code: "BG", dial_code: "+359" },
  { name: "Burkina Faso", flag: "🇧🇫", code: "BF", dial_code: "+226" },
  { name: "Burundi", flag: "🇧🇮", code: "BI", dial_code: "+257" },
  { name: "Cambodia", flag: "🇰🇭", code: "KH", dial_code: "+855" },
  { name: "Cameroon", flag: "🇨🇲", code: "CM", dial_code: "+237" },
  { name: "Canada", flag: "🇨🇦", code: "CA", dial_code: "+1" },
  { name: "Cape Verde", flag: "🇨🇻", code: "CV", dial_code: "+238" },
  { name: "Cayman Islands", flag: "🇰🇾", code: "KY", dial_code: "+345" },
  {
    name: "Central African Republic",
    flag: "🇨🇫",
    code: "CF",
    dial_code: "+236",
  },
  { name: "Chad", flag: "🇹🇩", code: "TD", dial_code: "+235" },
  { name: "Chile", flag: "🇨🇱", code: "CL", dial_code: "+56" },
  { name: "China", flag: "🇨🇳", code: "CN", dial_code: "+86" },
  { name: "Christmas Island", flag: "🇨🇽", code: "CX", dial_code: "+61" },
  { name: "Cocos (Keeling) Islands", flag: "🇨🇨", code: "CC", dial_code: "+61" },
  { name: "Colombia", flag: "🇨🇴", code: "CO", dial_code: "+57" },
  { name: "Comoros", flag: "🇰🇲", code: "KM", dial_code: "+269" },
  { name: "Congo", flag: "🇨🇬", code: "CG", dial_code: "+242" },
  {
    name: "Congo, The Democratic Republic of the Congo",
    flag: "🇨🇩",
    code: "CD",
    dial_code: "+243",
  },
  { name: "Cook Islands", flag: "🇨🇰", code: "CK", dial_code: "+682" },
  { name: "Costa Rica", flag: "🇨🇷", code: "CR", dial_code: "+506" },
  { name: "Cote d'Ivoire", flag: "🇨🇮", code: "CI", dial_code: "+225" },
  { name: "Croatia", flag: "🇭🇷", code: "HR", dial_code: "+385" },
  { name: "Cuba", flag: "🇨🇺", code: "CU", dial_code: "+53" },
  { name: "Cyprus", flag: "🇨🇾", code: "CY", dial_code: "+357" },
  { name: "Czech Republic", flag: "🇨🇿", code: "CZ", dial_code: "+420" },
  { name: "Denmark", flag: "🇩🇰", code: "DK", dial_code: "+45" },
  { name: "Djibouti", flag: "🇩🇯", code: "DJ", dial_code: "+253" },
  { name: "Dominica", flag: "🇩🇲", code: "DM", dial_code: "+1767" },
  { name: "Dominican Republic", flag: "🇩🇴", code: "DO", dial_code: "+1849" },
  { name: "Ecuador", flag: "🇪🇨", code: "EC", dial_code: "+593" },
  { name: "Egypt", flag: "🇪🇬", code: "EG", dial_code: "+20" },
  { name: "El Salvador", flag: "🇸🇻", code: "SV", dial_code: "+503" },
  { name: "Equatorial Guinea", flag: "🇬🇶", code: "GQ", dial_code: "+240" },
  { name: "Eritrea", flag: "🇪🇷", code: "ER", dial_code: "+291" },
  { name: "Estonia", flag: "🇪🇪", code: "EE", dial_code: "+372" },
  { name: "Ethiopia", flag: "🇪🇹", code: "ET", dial_code: "+251" },
  {
    name: "Falkland Islands (Malvinas)",
    flag: "🇫🇰",
    code: "FK",
    dial_code: "+500",
  },
  { name: "Faroe Islands", flag: "🇫🇴", code: "FO", dial_code: "+298" },
  { name: "Fiji", flag: "🇫🇯", code: "FJ", dial_code: "+679" },
  { name: "Finland", flag: "🇫🇮", code: "FI", dial_code: "+358" },
  { name: "France", flag: "🇫🇷", code: "FR", dial_code: "+33" },
  { name: "French Guiana", flag: "🇬🇫", code: "GF", dial_code: "+594" },
  { name: "French Polynesia", flag: "🇵🇫", code: "PF", dial_code: "+689" },
  {
    name: "French Southern Territories",
    flag: "🇹🇫",
    code: "TF",
    dial_code: "+262",
  },
  { name: "Gabon", flag: "🇬🇦", code: "GA", dial_code: "+241" },
  { name: "Gambia", flag: "🇬🇲", code: "GM", dial_code: "+220" },
  { name: "Georgia", flag: "🇬🇪", code: "GE", dial_code: "+995" },
  { name: "Germany", flag: "🇩🇪", code: "DE", dial_code: "+49" },
  { name: "Ghana", flag: "🇬🇭", code: "GH", dial_code: "+233" },
  { name: "Gibraltar", flag: "🇬🇮", code: "GI", dial_code: "+350" },
  { name: "Greece", flag: "🇬🇷", code: "GR", dial_code: "+30" },
  { name: "Greenland", flag: "🇬🇱", code: "GL", dial_code: "+299" },
  { name: "Grenada", flag: "🇬🇩", code: "GD", dial_code: "+1473" },
  { name: "Guadeloupe", flag: "🇬🇵", code: "GP", dial_code: "+590" },
  { name: "Guam", flag: "🇬🇺", code: "GU", dial_code: "+1671" },
  { name: "Guatemala", flag: "🇬🇹", code: "GT", dial_code: "+502" },
  { name: "Guernsey", flag: "🇬🇬", code: "GG", dial_code: "+44" },
  { name: "Guinea", flag: "🇬🇳", code: "GN", dial_code: "+224" },
  { name: "Guinea-Bissau", flag: "🇬🇼", code: "GW", dial_code: "+245" },
  { name: "Guyana", flag: "🇬🇾", code: "GY", dial_code: "+592" },
  { name: "Haiti", flag: "🇭🇹", code: "HT", dial_code: "+509" },
  {
    name: "Heard Island and Mcdonald Islands",
    flag: "🇭🇲",
    code: "HM",
    dial_code: "+672",
  },
  {
    name: "Holy See (Vatican City State)",
    flag: "🇻🇦",
    code: "VA",
    dial_code: "+379",
  },
  { name: "Honduras", flag: "🇭🇳", code: "HN", dial_code: "+504" },
  { name: "Hong Kong", flag: "🇭🇰", code: "HK", dial_code: "+852" },
  { name: "Hungary", flag: "🇭🇺", code: "HU", dial_code: "+36" },
  { name: "Iceland", flag: "🇮🇸", code: "IS", dial_code: "+354" },
  { name: "India", flag: "🇮🇳", code: "IN", dial_code: "+91" },
  { name: "Indonesia", flag: "🇮🇩", code: "ID", dial_code: "+62" },
  {
    name: "Iran, Islamic Republic of Persian Gulf",
    flag: "🇮🇷",
    code: "IR",
    dial_code: "+98",
  },
  { name: "Iraq", flag: "🇮🇶", code: "IQ", dial_code: "+964" },
  { name: "Ireland", flag: "🇮🇪", code: "IE", dial_code: "+353" },
  { name: "Isle of Man", flag: "🇮🇲", code: "IM", dial_code: "+44" },
  { name: "Israel", flag: "🇮🇱", code: "IL", dial_code: "+972" },
  { name: "Italy", flag: "🇮🇹", code: "IT", dial_code: "+39" },
  { name: "Jamaica", flag: "🇯🇲", code: "JM", dial_code: "+1876" },
  { name: "Japan", flag: "🇯🇵", code: "JP", dial_code: "+81" },
  { name: "Jersey", flag: "🇯🇪", code: "JE", dial_code: "+44" },
  { name: "Jordan", flag: "🇯🇴", code: "JO", dial_code: "+962" },
  { name: "Kazakhstan", flag: "🇰🇿", code: "KZ", dial_code: "+7" },
  { name: "Kenya", flag: "🇰🇪", code: "KE", dial_code: "+254" },
  { name: "Kiribati", flag: "🇰🇮", code: "KI", dial_code: "+686" },
  {
    name: "Korea, Democratic People's Republic of Korea",
    flag: "🇰🇵",
    code: "KP",
    dial_code: "+850",
  },
  {
    name: "Korea, Republic of South Korea",
    flag: "🇰🇷",
    code: "KR",
    dial_code: "+82",
  },
  { name: "Kosovo", flag: "🇽🇰", code: "XK", dial_code: "+383" },
  { name: "Kuwait", flag: "🇰🇼", code: "KW", dial_code: "+965" },
  { name: "Kyrgyzstan", flag: "🇰🇬", code: "KG", dial_code: "+996" },
  { name: "Laos", flag: "🇱🇦", code: "LA", dial_code: "+856" },
  { name: "Latvia", flag: "🇱🇻", code: "LV", dial_code: "+371" },
  { name: "Lebanon", flag: "🇱🇧", code: "LB", dial_code: "+961" },
  { name: "Lesotho", flag: "🇱🇸", code: "LS", dial_code: "+266" },
  { name: "Liberia", flag: "🇱🇷", code: "LR", dial_code: "+231" },
  { name: "Libyan Arab Jamahiriya", flag: "🇱🇾", code: "LY", dial_code: "+218" },
  { name: "Liechtenstein", flag: "🇱🇮", code: "LI", dial_code: "+423" },
  { name: "Lithuania", flag: "🇱🇹", code: "LT", dial_code: "+370" },
  { name: "Luxembourg", flag: "🇱🇺", code: "LU", dial_code: "+352" },
  { name: "Macao", flag: "🇲🇴", code: "MO", dial_code: "+853" },
  { name: "Macedonia", flag: "🇲🇰", code: "MK", dial_code: "+389" },
  { name: "Madagascar", flag: "🇲🇬", code: "MG", dial_code: "+261" },
  { name: "Malawi", flag: "🇲🇼", code: "MW", dial_code: "+265" },
  { name: "Malaysia", flag: "🇲🇾", code: "MY", dial_code: "+60" },
  { name: "Maldives", flag: "🇲🇻", code: "MV", dial_code: "+960" },
  { name: "Mali", flag: "🇲🇱", code: "ML", dial_code: "+223" },
  { name: "Malta", flag: "🇲🇹", code: "MT", dial_code: "+356" },
  { name: "Marshall Islands", flag: "🇲🇭", code: "MH", dial_code: "+692" },
  { name: "Martinique", flag: "🇲🇶", code: "MQ", dial_code: "+596" },
  { name: "Mauritania", flag: "🇲🇷", code: "MR", dial_code: "+222" },
  { name: "Mauritius", flag: "🇲🇺", code: "MU", dial_code: "+230" },
  { name: "Mayotte", flag: "🇾🇹", code: "YT", dial_code: "+262" },
  { name: "Mexico", flag: "🇲🇽", code: "MX", dial_code: "+52" },
  {
    name: "Micronesia, Federated States of Micronesia",
    flag: "🇫🇲",
    code: "FM",
    dial_code: "+691",
  },
  { name: "Moldova", flag: "🇲🇩", code: "MD", dial_code: "+373" },
  { name: "Monaco", flag: "🇲🇨", code: "MC", dial_code: "+377" },
  { name: "Mongolia", flag: "🇲🇳", code: "MN", dial_code: "+976" },
  { name: "Montenegro", flag: "🇲🇪", code: "ME", dial_code: "+382" },
  { name: "Montserrat", flag: "🇲🇸", code: "MS", dial_code: "+1664" },
  { name: "Morocco", flag: "🇲🇦", code: "MA", dial_code: "+212" },
  { name: "Mozambique", flag: "🇲🇿", code: "MZ", dial_code: "+258" },
  { name: "Myanmar", flag: "🇲🇲", code: "MM", dial_code: "+95" },
  { name: "Namibia", flag: "🇳🇦", code: "NA", dial_code: "+264" },
  { name: "Nauru", flag: "🇳🇷", code: "NR", dial_code: "+674" },
  { name: "Nepal", flag: "🇳🇵", code: "NP", dial_code: "+977" },
  { name: "Netherlands", flag: "🇳🇱", code: "NL", dial_code: "+31" },
  { name: "Netherlands Antilles", flag: "", code: "AN", dial_code: "+599" },
  { name: "New Caledonia", flag: "🇳🇨", code: "NC", dial_code: "+687" },
  { name: "New Zealand", flag: "🇳🇿", code: "NZ", dial_code: "+64" },
  { name: "Nicaragua", flag: "🇳🇮", code: "NI", dial_code: "+505" },
  { name: "Niger", flag: "🇳🇪", code: "NE", dial_code: "+227" },
  { name: "Nigeria", flag: "🇳🇬", code: "NG", dial_code: "+234" },
  { name: "Niue", flag: "🇳🇺", code: "NU", dial_code: "+683" },
  { name: "Norfolk Island", flag: "🇳🇫", code: "NF", dial_code: "+672" },
  {
    name: "Northern Mariana Islands",
    flag: "🇲🇵",
    code: "MP",
    dial_code: "+1670",
  },
  { name: "Norway", flag: "🇳🇴", code: "NO", dial_code: "+47" },
  { name: "Oman", flag: "🇴🇲", code: "OM", dial_code: "+968" },
  { name: "Pakistan", flag: "🇵🇰", code: "PK", dial_code: "+92" },
  { name: "Palau", flag: "🇵🇼", code: "PW", dial_code: "+680" },
  {
    name: "Palestinian Territory, Occupied",
    flag: "🇵🇸",
    code: "PS",
    dial_code: "+970",
  },
  { name: "Panama", flag: "🇵🇦", code: "PA", dial_code: "+507" },
  { name: "Papua New Guinea", flag: "🇵🇬", code: "PG", dial_code: "+675" },
  { name: "Paraguay", flag: "🇵🇾", code: "PY", dial_code: "+595" },
  { name: "Peru", flag: "🇵🇪", code: "PE", dial_code: "+51" },
  { name: "Philippines", flag: "🇵🇭", code: "PH", dial_code: "+63" },
  { name: "Pitcairn", flag: "🇵🇳", code: "PN", dial_code: "+64" },
  { name: "Poland", flag: "🇵🇱", code: "PL", dial_code: "+48" },
  { name: "Portugal", flag: "🇵🇹", code: "PT", dial_code: "+351" },
  { name: "Puerto Rico", flag: "🇵🇷", code: "PR", dial_code: "+1939" },
  { name: "Qatar", flag: "🇶🇦", code: "QA", dial_code: "+974" },
  { name: "Romania", flag: "🇷🇴", code: "RO", dial_code: "+40" },
  { name: "Russia", flag: "🇷🇺", code: "RU", dial_code: "+7" },
  { name: "Rwanda", flag: "🇷🇼", code: "RW", dial_code: "+250" },
  { name: "Reunion", flag: "🇷🇪", code: "RE", dial_code: "+262" },
  { name: "Saint Barthelemy", flag: "🇧🇱", code: "BL", dial_code: "+590" },
  {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    flag: "🇸🇭",
    code: "SH",
    dial_code: "+290",
  },
  { name: "Saint Kitts and Nevis", flag: "🇰🇳", code: "KN", dial_code: "+1869" },
  { name: "Saint Lucia", flag: "🇱🇨", code: "LC", dial_code: "+1758" },
  { name: "Saint Martin", flag: "🇲🇫", code: "MF", dial_code: "+590" },
  {
    name: "Saint Pierre and Miquelon",
    flag: "🇵🇲",
    code: "PM",
    dial_code: "+508",
  },
  {
    name: "Saint Vincent and the Grenadines",
    flag: "🇻🇨",
    code: "VC",
    dial_code: "+1784",
  },
  { name: "Samoa", flag: "🇼🇸", code: "WS", dial_code: "+685" },
  { name: "San Marino", flag: "🇸🇲", code: "SM", dial_code: "+378" },
  { name: "Sao Tome and Principe", flag: "🇸🇹", code: "ST", dial_code: "+239" },
  { name: "Saudi Arabia", flag: "🇸🇦", code: "SA", dial_code: "+966" },
  { name: "Senegal", flag: "🇸🇳", code: "SN", dial_code: "+221" },
  { name: "Serbia", flag: "🇷🇸", code: "RS", dial_code: "+381" },
  { name: "Seychelles", flag: "🇸🇨", code: "SC", dial_code: "+248" },
  { name: "Sierra Leone", flag: "🇸🇱", code: "SL", dial_code: "+232" },
  { name: "Singapore", flag: "🇸🇬", code: "SG", dial_code: "+65" },
  { name: "Slovakia", flag: "🇸🇰", code: "SK", dial_code: "+421" },
  { name: "Slovenia", flag: "🇸🇮", code: "SI", dial_code: "+386" },
  { name: "Solomon Islands", flag: "🇸🇧", code: "SB", dial_code: "+677" },
  { name: "Somalia", flag: "🇸🇴", code: "SO", dial_code: "+252" },
  { name: "South Africa", flag: "🇿🇦", code: "ZA", dial_code: "+27" },
  { name: "South Sudan", flag: "🇸🇸", code: "SS", dial_code: "+211" },
  {
    name: "South Georgia and the South Sandwich Islands",
    flag: "🇬🇸",
    code: "GS",
    dial_code: "+500",
  },
  { name: "Spain", flag: "🇪🇸", code: "ES", dial_code: "+34" },
  { name: "Sri Lanka", flag: "🇱🇰", code: "LK", dial_code: "+94" },
  { name: "Sudan", flag: "🇸🇩", code: "SD", dial_code: "+249" },
  { name: "Suriname", flag: "🇸🇷", code: "SR", dial_code: "+597" },
  { name: "Svalbard and Jan Mayen", flag: "🇸🇯", code: "SJ", dial_code: "+47" },
  { name: "Eswatini", flag: "🇸🇿", code: "SZ", dial_code: "+268" },
  { name: "Sweden", flag: "🇸🇪", code: "SE", dial_code: "+46" },
  { name: "Switzerland", flag: "🇨🇭", code: "CH", dial_code: "+41" },
  { name: "Syrian Arab Republic", flag: "🇸🇾", code: "SY", dial_code: "+963" },
  { name: "Taiwan", flag: "🇹🇼", code: "TW", dial_code: "+886" },
  { name: "Tajikistan", flag: "🇹🇯", code: "TJ", dial_code: "+992" },
  {
    name: "Tanzania, United Republic of Tanzania",
    flag: "🇹🇿",
    code: "TZ",
    dial_code: "+255",
  },
  { name: "Thailand", flag: "🇹🇭", code: "TH", dial_code: "+66" },
  { name: "Timor-Leste", flag: "🇹🇱", code: "TL", dial_code: "+670" },
  { name: "Togo", flag: "🇹🇬", code: "TG", dial_code: "+228" },
  { name: "Tokelau", flag: "🇹🇰", code: "TK", dial_code: "+690" },
  { name: "Tonga", flag: "🇹🇴", code: "TO", dial_code: "+676" },
  { name: "Trinidad and Tobago", flag: "🇹🇹", code: "TT", dial_code: "+1868" },
  { name: "Tunisia", flag: "🇹🇳", code: "TN", dial_code: "+216" },
  { name: "Turkey", flag: "🇹🇷", code: "TR", dial_code: "+90" },
  { name: "Turkmenistan", flag: "🇹🇲", code: "TM", dial_code: "+993" },
  {
    name: "Turks and Caicos Islands",
    flag: "🇹🇨",
    code: "TC",
    dial_code: "+1649",
  },
  { name: "Tuvalu", flag: "🇹🇻", code: "TV", dial_code: "+688" },
  { name: "Uganda", flag: "🇺🇬", code: "UG", dial_code: "+256" },
  { name: "Ukraine", flag: "🇺🇦", code: "UA", dial_code: "+380" },
  { name: "United Arab Emirates", flag: "🇦🇪", code: "AE", dial_code: "+971" },
  { name: "United Kingdom", flag: "🇬🇧", code: "GB", dial_code: "+44" },
  { name: "United States", flag: "🇺🇸", code: "US", dial_code: "+1" },
  { name: "Uruguay", flag: "🇺🇾", code: "UY", dial_code: "+598" },
  { name: "Uzbekistan", flag: "🇺🇿", code: "UZ", dial_code: "+998" },
  { name: "Vanuatu", flag: "🇻🇺", code: "VU", dial_code: "+678" },
  {
    name: "Venezuela",
    flag: "🇻🇪",
    code: "VE",
    dial_code: "+58",
  },
  { name: "Vietnam", flag: "🇻🇳", code: "VN", dial_code: "+84" },
  {
    name: "Virgin Islands, British",
    flag: "🇻🇬",
    code: "VG",
    dial_code: "+1284",
  },
  { name: "Virgin Islands, U.S.", flag: "🇻🇮", code: "VI", dial_code: "+1340" },
  { name: "Wallis and Futuna", flag: "🇼🇫", code: "WF", dial_code: "+681" },
  { name: "Yemen", flag: "🇾🇪", code: "YE", dial_code: "+967" },
  { name: "Zambia", flag: "🇿🇲", code: "ZM", dial_code: "+260" },
  { name: "Zimbabwe", flag: "🇿🇼", code: "ZW", dial_code: "+263" },
];

//Gobal variables
const keyValues = window.location.search;
const urlParams = new URLSearchParams(keyValues);

const workspace_id = urlParams.get("workspace_id");
const workspace_name = urlParams.get("workspace_name");
const owner_name = urlParams.get("owner_name");
const owner_email = urlParams.get("owner_email");

const dataURL = {
  workspace_id,
  workspace_name,
  owner_name,
  owner_email,
};

console.log("data que llega desde la URL ha registro de afiliado:", dataURL);

let intervalo = "";
let prevPhoneNumber = "";
let tiempo = 60;

let countryNameGlobal = "";
let countryCodeGlobal = "";

let verfCode = "";

// ---------Paint data initial -------------

const dialCodeSelect = document.getElementById("dial-code");

const getCountryCode = () => {
  const countryTimezone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
  return timezones[countryTimezone].c[0];
};

let countryCodeForPhone = getCountryCode();
console.log("code", countryCodeForPhone);

const getCountryFlag = () => {
  const flag = document.getElementById("phone-img");
  flag.src =
    "https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/" +
    countryCodeForPhone.toLowerCase() +
    ".svg";
};

const setDialCodesOptions = () => {
  getCountryFlag();

  countriesDialCodeAndFlags.map((country) => {
    const option = new Option(country.dial_code, country.code);
    dialCodeSelect.appendChild(option);

    if (country.code === countryCodeForPhone) {
      option.selected = true;
      option.text = country.dial_code;
      countryNameGlobal = country.name;
      countryCodeGlobal = country.dial_code;
    }
  });
};

dialCodeSelect.addEventListener("change", (e) => {
  countryCodeForPhone = e.target.value;
  getCountryFlag();
  const newCountry = countriesDialCodeAndFlags.find(
    (country) => country.code === countryCodeForPhone
  );
  countryNameGlobal = newCountry.name;
  countryCodeGlobal = newCountry.dial_code;
});

setDialCodesOptions();

//Handle form

const btnOne = document.getElementById("first-step");
const formOne = document.getElementById("form-one");

const btnTwo = document.getElementById("second-step");
const formTwo = document.getElementById("form-two");

const btnReturn = document.getElementById("return");

const btnResendCode = document.getElementById("resend-code");

btnReturn.addEventListener("click", () => {
  formTwo.classList.toggle("inactive");
  formOne.classList.toggle("inactive");
  formOne.classList.add("afiliate-animation--back");
});

btnOne.addEventListener("click", () => {
  validateCode();
});

btnTwo.addEventListener("click", () => {
  verificateCode();
});

btnResendCode.addEventListener("click", () => {
  const codeValue = document.getElementById("phone-number").value;
  sendVerificationCode(codeValue);
});

const validateCode = () => {
  const codeValue = document.getElementById("phone-number").value;
  const errMessage = document.getElementById("message-error--afiliate");

  const regex = /^\d+$/;
  isPhoneValid = regex.test(codeValue);

  if (isPhoneValid) {
    formOne.classList.toggle("inactive");
    formTwo.classList.toggle("inactive");
    formTwo.classList.add("afiliate-animation");

    if (prevPhoneNumber !== codeValue) {
      console.log("creando nuevo intervalo...");
      sendVerificationCode(codeValue);
      clearInterval(intervalo);
      tiempo = 60;
      intervalo = setInterval(actualizarContador, 1000);

      counterMessage.classList.remove("remove");
      resendCodeBtn.classList.add("remove");
    }

    prevPhoneNumber = codeValue;
  } else {
    errMessage.style.color = "red";
  }
};

document.getElementById("phone-number").addEventListener("focus", () => {
  const errMessage = document.getElementById("message-error--afiliate");
  errMessage.style.color = "#0f172a";
  errMessage.textContent = "No incluya espacios, guiones ni paréntesis";
});

// ------------------Ramdom number------------------

const generateVerificationCode = () =>
  Math.floor(100000 + Math.random() * 900000);
// --------------------COunter----------------

const counterMessage = document.getElementById("counter-message");
const counter = document.getElementById("counter");
const resendCodeBtn = document.getElementById("resend-code");

// Crea una variable para almacenar el tiempo restante en segundos

// Crea una función para actualizar el contador cada segundo
function actualizarContador() {
  // Convierte el tiempo a minutos y segundos
  var minutos = Math.floor(tiempo / 60);
  var segundos = tiempo % 60;

  // Añade un cero al principio si los segundos son menores que 10
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  // Muestra el tiempo restante en el elemento HTML
  counter.innerHTML = minutos + ":" + segundos;

  // Reduce el tiempo en un segundo
  tiempo--;

  // Si el tiempo llega a cero, detiene el contador y muestra un mensaje
  if (tiempo < 0) {
    clearInterval(intervalo);
    counterMessage.classList.add("remove");
    resendCodeBtn.classList.remove("remove");
  }
}

// Enpoint calls-----------

const sendVerificationCode = (codeValue) => {
  verfCode = generateVerificationCode();

  const endpoint =
    "https://app.chatby.io/api/iwh/b376e2f88ce7871db285082c5ecad423";

  const parsedPhone = countryCodeGlobal + codeValue;
  /*
  const data = {
    phone: parsedPhone,
    email: "alberto.baron2005@gmail.com",
    user_name: "Alberto Baron",
    code: countryCodeGlobal,
    country: countryNameGlobal,
    workspace: {
      workspace_id: "34950",
      workspace_name: "Tienda del sol",
      owner_name: "Alberto Baron",
      owner_email: "alberto.baron2005@gmail.com",
    },
    wa_code: verfCode,
  };

 */

  const data = {
    phone: parsedPhone,
    email: owner_email,
    user_name: owner_name,
    code: countryCodeGlobal,
    country: countryNameGlobal,
    workspace: {
      workspace_id: workspace_id,
      workspace_name: workspace_name,
      owner_name: owner_name,
      owner_email: owner_email,
    },
    wa_code: verfCode,
  };

  console.log("enviando data...", data);

  fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("data al enviar telefono", data);
    })
    .catch((error) => {
      console.error(error);
    });
};

// ---- verificate code --------
const verificateCode = () => {
  const verfCodeField = document.getElementById("verification-code").value;
  const errMessage = document.getElementById("message-error--afiliate-two");
  errMessage.style.color = "red";

  console.log("verf code field", verfCodeField);
  console.log("verf code", verfCode);

  if (verfCodeField === "") {
    errMessage.textContent = "Debe ingresar un codigo";
    return;
  }
  if (verfCodeField !== verfCode.toString()) {
    errMessage.textContent = "EL codigo es incorrecto";
    return;
  }

  console.log("Codigo ingresado correctamente");
  errMessage.textContent = "Verificacion existosa";
  errMessage.style.color = "green";

  // const url = new URL("https://chatby.io/affiliate");

  const url = new URL("https://snazzy-khapse-28b8e0.netlify.app/afiliates");
  url.searchParams.set("workspace_id", workspace_id);
  url.searchParams.set("workspace_name", workspace_name);
  url.searchParams.set("owner_name", owner_name);
  url.searchParams.set("owner_email", owner_email);

  window.location.assign(url);
};
