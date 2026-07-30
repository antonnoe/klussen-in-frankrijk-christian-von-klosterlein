export type ArchiveDocument = {
  id: string;
  title: string;
  originalTitle: string;
  archiveCode: string;
  section: string;
  pages: number;
  sizeMb: number;
  url: string;
  image?: string;
};

export const archiveCategories = [
  {
    "number": "00",
    "title": "Inhoud & trefwoorden"
  },
  {
    "number": "01",
    "title": "Voorstelling & intenties"
  },
  {
    "number": "02",
    "title": "Planning"
  },
  {
    "number": "03",
    "title": "Algemene adviezen"
  },
  {
    "number": "04",
    "title": "Architecten & aannemers"
  },
  {
    "number": "05",
    "title": "Vergunningen & offertes"
  },
  {
    "number": "06",
    "title": "Dak & timmerwerk"
  },
  {
    "number": "07",
    "title": "Muren & scheidingswanden"
  },
  {
    "number": "08",
    "title": "Vloeren, plafonds & trappen"
  },
  {
    "number": "09",
    "title": "Deuren, ramen & luiken"
  },
  {
    "number": "10",
    "title": "Water & riool"
  },
  {
    "number": "11",
    "title": "Fosse septique"
  },
  {
    "number": "12",
    "title": "Verwarming, ventilatie & airco"
  },
  {
    "number": "13",
    "title": "Elektra, telefoon & internet"
  },
  {
    "number": "14",
    "title": "Gas"
  },
  {
    "number": "15",
    "title": "Isolatie"
  },
  {
    "number": "16",
    "title": "Muurafwerking"
  },
  {
    "number": "17",
    "title": "Vocht, ventilatie & tocht"
  },
  {
    "number": "18",
    "title": "Pluggen & bevestigingen"
  },
  {
    "number": "19",
    "title": "Terrassen, tuin & erf"
  },
  {
    "number": "20",
    "title": "Gereedschappen & hulpmiddelen"
  },
  {
    "number": "21",
    "title": "Woordenlijst bouwtermen"
  },
  {
    "number": "22",
    "title": "Referenties"
  },
  {
    "number": "23",
    "title": "Diverse tips & informatie"
  },
  {
    "number": "24",
    "title": "Uitgevoerde projecten"
  }
] as const;

export const archiveDocuments: ArchiveDocument[] = [
  {
    "id": "aannemers-en-architekten",
    "title": "Aannemers en architekten",
    "originalTitle": "Architecten en aannemers",
    "archiveCode": "04",
    "section": "04",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/1yTdwuYoNholGArrc-jc0DZVzAgL7N2bu/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "aansluitschemas",
    "title": "Aansluitschemas",
    "originalTitle": "aansluitschema's etc.",
    "archiveCode": "13.1.10",
    "section": "13",
    "pages": 4,
    "sizeMb": 0.6,
    "url": "https://drive.google.com/file/d/1B5tPomHpBM7ICAI4oZqqJSk0Az9rubT7/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "aanvullende-informatie-velux",
    "title": "Aanvullende informatie velux",
    "originalTitle": "Aanvullingen",
    "archiveCode": "10",
    "section": "06",
    "pages": 2,
    "sizeMb": 0.8,
    "url": "https://drive.google.com/file/d/1uqkxjLXOHukGwHrWfB4MLuQKej8lYCTE/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "afhangen-van-klapluiken",
    "title": "Afhangen van klapluiken",
    "originalTitle": "Afhangen van klapluiken",
    "archiveCode": "09.4.1",
    "section": "09",
    "pages": 6,
    "sizeMb": 2.5,
    "url": "https://drive.google.com/file/d/1fx5c9lJDLoFJBH-ZT0L4LdGigDQmStTd/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "alles-in-huis-is-scheef",
    "title": "Alles in huis is scheef",
    "originalTitle": "Alles in huis is scheef!",
    "archiveCode": "23.2",
    "section": "23",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/1izxk8owTR_0mo9EHWElamXh4eEpLcnf7/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "andere-vloeren-en-trappen",
    "title": "Andere vloeren en trappen",
    "originalTitle": "Andere vloeren, trappen",
    "archiveCode": "08.2",
    "section": "08",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/1G80_N0ePYKEpCqz612IDeGr10NHK3E4D/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "badkamerproject-christian",
    "title": "Badkamerproject Christian",
    "originalTitle": "Badkamer",
    "archiveCode": "24.1",
    "section": "24",
    "pages": 15,
    "sizeMb": 3.3,
    "url": "https://drive.google.com/file/d/1uR-KEYp3efwbPGkoUSalLMZDFIuJ2O58/view?usp=drivesdk",
    "image": "badkamerproject-christian.jpg"
  },
  {
    "id": "balken-repareren",
    "title": "Balken repareren",
    "originalTitle": "balken repareren",
    "archiveCode": "08.1.5",
    "section": "08",
    "pages": 5,
    "sizeMb": 0.9,
    "url": "https://drive.google.com/file/d/1RAthnWMdXdpTF7MANtfDLwSdyT3bxrwR/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "balkenvloeren",
    "title": "Balkenvloeren",
    "originalTitle": "Balkenvloeren",
    "archiveCode": "08.1",
    "section": "08",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/1wzInOsi_j9m0WfDK7qvkYPNCA1_huaXc/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "bereken-de-warmteverliezen-van-een-huis",
    "title": "Bereken de warmteverliezen van een huis",
    "originalTitle": "Warmteverliezen",
    "archiveCode": "12.1.1",
    "section": "12",
    "pages": 4,
    "sizeMb": 0.4,
    "url": "https://drive.google.com/file/d/1zIoLnctyOssdrK-BxdykLOmgFYB5anKC/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "beslag-voor-luiken",
    "title": "Beslag voor luiken",
    "originalTitle": "beslag voor luiken",
    "archiveCode": "09.4.6",
    "section": "09",
    "pages": 4,
    "sizeMb": 2.6,
    "url": "https://drive.google.com/file/d/1goSIlSLbcIjSuXSfzgNiZXeF_NbhnSmB/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "betegelen-van-oude-vloeren",
    "title": "Betegelen van oude vloeren",
    "originalTitle": "Betegeling van een oude plankenvloer",
    "archiveCode": "08.1.8",
    "section": "08",
    "pages": 2,
    "sizeMb": 0.2,
    "url": "https://drive.google.com/file/d/1RUm0Xz58FdJZpvwNgw8noxhdgq8hNpms/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "bevestigingen-en-pluggen",
    "title": "Bevestigingen en pluggen",
    "originalTitle": "Pluggen en bevestigingen",
    "archiveCode": "18",
    "section": "18",
    "pages": 9,
    "sizeMb": 1.4,
    "url": "https://drive.google.com/file/d/1GGy_RW6cj_SggOPz6HKMZ-WDHbqrRTYs/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "binnenafwerking-van-vochtige-muren",
    "title": "Binnenafwerking van vochtige muren",
    "originalTitle": "Binnenafwerking van vochtige muren",
    "archiveCode": "17.5",
    "section": "17",
    "pages": 5,
    "sizeMb": 0.8,
    "url": "https://drive.google.com/file/d/1ARO7oaiVxR3qK9ADlFsnGcVSSwkYZa0S/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "boeken",
    "title": "Boeken",
    "originalTitle": "Boeken",
    "archiveCode": "22.2",
    "section": "22",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/1vP3ekSWxtZc7cpYyQfpeM_HGFGME_IpY/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "boeken-en-websites",
    "title": "Boeken en websites",
    "originalTitle": "Boeken, websites",
    "archiveCode": "13.1.8",
    "section": "13",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/11ET807OAhw3a-jZ77OwmrIV_ttC_UY3e/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "boerenluiken-zelf-maken",
    "title": "Boerenluiken zelf maken",
    "originalTitle": "Boerenluiken zelf maken",
    "archiveCode": "09.4.5",
    "section": "09",
    "pages": 6,
    "sizeMb": 2.1,
    "url": "https://drive.google.com/file/d/1_XOSL2itAEaqktWoavveCD32d4F8xyAn/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "buitenmuren-van-natuursteen-voegen",
    "title": "Buitenmuren van natuursteen voegen",
    "originalTitle": "Natuurstenen muren voegen",
    "archiveCode": "07.2",
    "section": "07",
    "pages": 15,
    "sizeMb": 4.1,
    "url": "https://drive.google.com/file/d/1T4B1i-qUZWk0lpAS9fKDfBpMBF9P8Wxb/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "condensproblemen-bij-dakramen",
    "title": "Condensproblemen bij dakramen",
    "originalTitle": "Condensproblemen",
    "archiveCode": "6",
    "section": "06",
    "pages": 2,
    "sizeMb": 0.3,
    "url": "https://drive.google.com/file/d/1xEOYX1RwYoH8Nt1YTCfUw0AyyhXXadra/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "condensvocht",
    "title": "Condensvocht",
    "originalTitle": "Condensvocht",
    "archiveCode": "17.4",
    "section": "17",
    "pages": 4,
    "sizeMb": 0.8,
    "url": "https://drive.google.com/file/d/1jNS4DmuNn4m_3wpXCtkeb4lTvLUsSxJ-/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "dakbuitenisolatie",
    "title": "Dakbuitenisolatie",
    "originalTitle": "Dakbuitenisolatie",
    "archiveCode": "15.4.1",
    "section": "15",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/1O3jzdfZWsyfH3tsGVZcd2rNkywo-X6Lw/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "dakconstructies",
    "title": "Dakconstructies",
    "originalTitle": "dakconstructies",
    "archiveCode": "06.1",
    "section": "06",
    "pages": 8,
    "sizeMb": 1.2,
    "url": "https://drive.google.com/file/d/1qX8z5ajxKWP4bbGWtpu3TRQSMHjeUHv6/view?usp=drivesdk",
    "image": "dakconstructies.jpg"
  },
  {
    "id": "dakgoten",
    "title": "Dakgoten",
    "originalTitle": "dakgoten",
    "archiveCode": "06.6",
    "section": "06",
    "pages": 10,
    "sizeMb": 2.2,
    "url": "https://drive.google.com/file/d/1PReCFMwsLl8wh1hY3O6gKWPQ4PSdeUGk/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "dakkapellen-des-lucarnes",
    "title": "Dakkapellen des lucarnes",
    "originalTitle": "dakkapellen",
    "archiveCode": "06.4",
    "section": "06",
    "pages": 12,
    "sizeMb": 8.5,
    "url": "https://drive.google.com/file/d/1Zlyu9-QuJVK4Q827ZV_xuxuwDVOdCz7L/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "dakpanmodellen",
    "title": "Dakpanmodellen",
    "originalTitle": "modellen dakpannen",
    "archiveCode": "06.2.1",
    "section": "06",
    "pages": 8,
    "sizeMb": 4.3,
    "url": "https://drive.google.com/file/d/1VXRHrwtoCvdzDFSjt_M8XxONxDd29OC-/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "dakraam-binnenafwerking",
    "title": "Dakraam binnenafwerking",
    "originalTitle": "binnenafwerking",
    "archiveCode": "5",
    "section": "06",
    "pages": 2,
    "sizeMb": 0.4,
    "url": "https://drive.google.com/file/d/1GnvsTzi7hqzBXr-iq4Zcww_vL06Alj5t/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "dakraam-in-een-modern-dak",
    "title": "Dakraam in een modern dak",
    "originalTitle": "plaatsing in een modern dak",
    "archiveCode": "2",
    "section": "06",
    "pages": 4,
    "sizeMb": 1.1,
    "url": "https://drive.google.com/file/d/1nxkFD0nBusn6gd4gmLnGBvmwQ28EGq6K/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "dakraam-in-een-oud-dak",
    "title": "Dakraam in een oud dak",
    "originalTitle": "plaatsing in een traditioneel dak",
    "archiveCode": "3",
    "section": "06",
    "pages": 5,
    "sizeMb": 2.6,
    "url": "https://drive.google.com/file/d/1eHsX4aMQel7ZMltHE7FKbnguOX7igihC/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "dakraam-plaatsing",
    "title": "Dakraam plaatsing",
    "originalTitle": "de plaatsing zelf",
    "archiveCode": "4",
    "section": "06",
    "pages": 4,
    "sizeMb": 0.9,
    "url": "https://drive.google.com/file/d/1l3py6yhtJy6tJHI3lH68_zsJs-kh9hv-/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "dakramen-inleiding",
    "title": "Dakramen inleiding",
    "originalTitle": "dakramen (Velux)",
    "archiveCode": "06.5",
    "section": "06",
    "pages": 3,
    "sizeMb": 0.6,
    "url": "https://drive.google.com/file/d/1qGvwwNHic9vehdZd365z_KMTmKKk_-DX/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "de-aanleg-van-een-cv-verwarmingssysteem",
    "title": "De aanleg van een cv verwarmingssysteem",
    "originalTitle": "Installatie van een CV-systeem",
    "archiveCode": "12.1.3",
    "section": "12",
    "pages": 12,
    "sizeMb": 1.7,
    "url": "https://drive.google.com/file/d/1Za3-YDxGekndoUP2zRFh-rykfWrJBFsQ/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "de-aarding",
    "title": "De aarding",
    "originalTitle": "De aarding",
    "archiveCode": "13.1.4",
    "section": "13",
    "pages": 5,
    "sizeMb": 0.8,
    "url": "https://drive.google.com/file/d/1PZH1WfnGo8vaMvBnYv9Fbxr55DMivg2I/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "de-elektriciteitsaanvoer-en-de-elektriciteitsmeter",
    "title": "De elektriciteitsaanvoer en de elektriciteitsmeter",
    "originalTitle": "De elektriciteitsaanvoer en de meter",
    "archiveCode": "13.1.1",
    "section": "13",
    "pages": 4,
    "sizeMb": 0.3,
    "url": "https://drive.google.com/file/d/1Dcej6r-loTDGWfyPr1uMqQ4aGjfkHJB0/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "de-fosse-sceptique",
    "title": "De fosse sceptique",
    "originalTitle": "Fosse septique",
    "archiveCode": "11",
    "section": "11",
    "pages": 6,
    "sizeMb": 0.9,
    "url": "https://drive.google.com/file/d/1xcSi0IDLuijaA_7ljMcctQjQaLTER9Ah/view?usp=drivesdk",
    "image": "fosse-septique.jpg"
  },
  {
    "id": "de-franse-elektrische-installatie",
    "title": "De franse elektrische installatie",
    "originalTitle": "De Franse elektrische installatie",
    "archiveCode": "13.1",
    "section": "13",
    "pages": 3,
    "sizeMb": 0.2,
    "url": "https://drive.google.com/file/d/13mziNwv-eUz6cQAbqs4w_hRGu4uUQvIz/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "de-groepenkast",
    "title": "De groepenkast",
    "originalTitle": "De groepenkast",
    "archiveCode": "13.1.3",
    "section": "13",
    "pages": 14,
    "sizeMb": 2.0,
    "url": "https://drive.google.com/file/d/19DaT3bFsDzypDneZZa37dwTQeasC7pFb/view?usp=drivesdk",
    "image": "groepenkast.jpg"
  },
  {
    "id": "de-hoofdschakelaar",
    "title": "De hoofdschakelaar",
    "originalTitle": "De hoofdschakelaar",
    "archiveCode": "13.1.2",
    "section": "13",
    "pages": 2,
    "sizeMb": 0.4,
    "url": "https://drive.google.com/file/d/1kDshagYvqHWqPOJOY1MECUsdr36GjPoz/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "de-isolatie-van-het-franse-huis",
    "title": "De isolatie van het franse huis",
    "originalTitle": "Isolatie",
    "archiveCode": "15",
    "section": "15",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/1QS51hg5kaT5KJsOE7Nq4BodnnmX2xYcf/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "de-keuze-van-een-vermarmingssysteem",
    "title": "De keuze van een vermarmingssysteem",
    "originalTitle": "Keuze van een verwarmingssysteem",
    "archiveCode": "12.1.2",
    "section": "12",
    "pages": 13,
    "sizeMb": 1.4,
    "url": "https://drive.google.com/file/d/1WmYFFhEEtxZZPt5lobbTLozp7WS9xKte/view?usp=drive_link",
    "image": null
  },
  {
    "id": "de-leidingaanleg",
    "title": "De leidingaanleg",
    "originalTitle": "De leidingaanleg",
    "archiveCode": "13.1.5",
    "section": "13",
    "pages": 17,
    "sizeMb": 3.5,
    "url": "https://drive.google.com/file/d/17fKH_kmJhyNZO1vOTwjFrGareUISUpXR/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "deuren-opknappen",
    "title": "Deuren opknappen",
    "originalTitle": "Deuren",
    "archiveCode": "09.1",
    "section": "09",
    "pages": 2,
    "sizeMb": 0.5,
    "url": "https://drive.google.com/file/d/1jW-YVDVh-LO4I4mCRd0HGao9MeV8R_9a/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "deuren-sluitend-maken",
    "title": "Deuren sluitend maken",
    "originalTitle": "Deuren sluitend maken",
    "archiveCode": "09.1.1",
    "section": "09",
    "pages": 6,
    "sizeMb": 0.7,
    "url": "https://drive.google.com/file/d/1URRlofbuQ9JiHpi3wpWVtoaAE9O2pv6d/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "diverse-aandachtspunten-bij-dakramen",
    "title": "Diverse aandachtspunten bij dakramen",
    "originalTitle": "Andere nuttige opmerkingen en keuzecriteria",
    "archiveCode": "7",
    "section": "06",
    "pages": 3,
    "sizeMb": 0.4,
    "url": "https://drive.google.com/file/d/1wW-2BSR0W5nosGHDnu59zeRQ-5va_91f/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "diverse-oplossingen-voor-vloeren-en-plafonds",
    "title": "Diverse oplossingen voor vloeren en plafonds",
    "originalTitle": "diverse opossingen voor vloeren+plafonds",
    "archiveCode": "08.4",
    "section": "08",
    "pages": 5,
    "sizeMb": 0.8,
    "url": "https://drive.google.com/file/d/1I1A0b0zG8KZczc_mYiwcVJDuokgGLEUh/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "dubbel-glas-of-dubbele-ramen",
    "title": "Dubbel glas of dubbele ramen",
    "originalTitle": "dubbel glas of niet?",
    "archiveCode": "09.2.3",
    "section": "09",
    "pages": 4,
    "sizeMb": 1.2,
    "url": "https://drive.google.com/file/d/1mi85GqJ4LutdbcgjVk7OaaLZyVyjlPUQ/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "een-doorgezakte-vloer",
    "title": "Een doorgezakte vloer",
    "originalTitle": "doorgezakte vloer",
    "archiveCode": "08.1.4",
    "section": "08",
    "pages": 5,
    "sizeMb": 1.1,
    "url": "https://drive.google.com/file/d/1jT4zoWugzB6DgV9bp4GmW88hukyF7GZY/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "een-gipsplatenplafond-tussen-de-balken",
    "title": "Een gipsplatenplafond tussen de balken",
    "originalTitle": "gipsplaten tussen balken",
    "archiveCode": "08.3.4",
    "section": "08",
    "pages": 11,
    "sizeMb": 1.9,
    "url": "https://drive.google.com/file/d/1NYQQIGDm09UJ4rolwlQ9MxXWJSZLwKsn/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "een-kast-op-een-doorgezakte-vloer-plaatsen",
    "title": "Een kast op een doorgezakte vloer plaatsen",
    "originalTitle": "Kast op doorgezakte vloer",
    "archiveCode": "23.7",
    "section": "23",
    "pages": 4,
    "sizeMb": 0.9,
    "url": "https://drive.google.com/file/d/1MW9wfNGzJbx4jgobY_SoQ8l8F2yBbojA/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "een-nieuwe-vloer-leggen",
    "title": "Een nieuwe vloer leggen",
    "originalTitle": "nieuwe vloer leggen",
    "archiveCode": "08.1.3",
    "section": "08",
    "pages": 7,
    "sizeMb": 1.4,
    "url": "https://drive.google.com/file/d/1A3yHv21VmhGOzdRe46nQ-HDfBWdFSJuq/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "een-pannendak-vernieuwen",
    "title": "Een pannendak vernieuwen",
    "originalTitle": "dakrenovatie pannendak",
    "archiveCode": "06.3",
    "section": "06",
    "pages": 8,
    "sizeMb": 2.1,
    "url": "https://drive.google.com/file/d/1wLDGCR6KSfAIZZTVto-h4noFCHYn7Ivr/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "een-plank-vervangen",
    "title": "Een plank vervangen",
    "originalTitle": "één vloerplank vervangen",
    "archiveCode": "08.1.1",
    "section": "08",
    "pages": 3,
    "sizeMb": 1.2,
    "url": "https://drive.google.com/file/d/1J613I6mQktqYe1tOTwbN7fBrfDBQPAaw/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "een-terras-aanleggen",
    "title": "Een terras aanleggen",
    "originalTitle": "Terrassen",
    "archiveCode": "19.2",
    "section": "19",
    "pages": 7,
    "sizeMb": 4.4,
    "url": "https://drive.google.com/file/d/1NFrKGCInXZcwU6kMihA_ByXIhCPmXpjk/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "een-vloer-verstevigen",
    "title": "Een vloer verstevigen",
    "originalTitle": "verende vloeren",
    "archiveCode": "08.1.2",
    "section": "08",
    "pages": 9,
    "sizeMb": 1.5,
    "url": "https://drive.google.com/file/d/145RAIhwLR9i_ftdJKi8lQCqgUEVM6Oiw/view?usp=drivesdk",
    "image": "vloer-verstevigen.jpg"
  },
  {
    "id": "en-als-het-dak-scheef-is",
    "title": "En als het dak scheef is",
    "originalTitle": "Scheve daken",
    "archiveCode": "06.2.3",
    "section": "06",
    "pages": 3,
    "sizeMb": 1.2,
    "url": "https://drive.google.com/file/d/1T6ea8jkHsRx48-jJfEykZFEWno9791dZ/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "gaten-in-hout-opvullen",
    "title": "Gaten in hout opvullen",
    "originalTitle": "Gaten in hout opvullen",
    "archiveCode": "23.5",
    "section": "23",
    "pages": 2,
    "sizeMb": 0.8,
    "url": "https://drive.google.com/file/d/1JTQneHH68o5VI7m6E92y4O2x8_ZB31eL/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "gegevens-over-hout",
    "title": "Gegevens over hout",
    "originalTitle": "Gegevens over hout, eigenschappen van hout",
    "archiveCode": "23.3",
    "section": "23",
    "pages": 2,
    "sizeMb": 0.2,
    "url": "https://drive.google.com/file/d/1KJxtT4FwuVH35Ysffoycx7y2qY7VSfvL/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "handige-tips-bij-het-waternet",
    "title": "Handige tips bij het waternet",
    "originalTitle": "Handige tips",
    "archiveCode": "10.1.7",
    "section": "10",
    "pages": 3,
    "sizeMb": 1.0,
    "url": "https://drive.google.com/file/d/18sJSyxtzxcNFMT7P0HVExGBB-Xt-4Cx5/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "hang-en-sluitwerk",
    "title": "Hang en sluitwerk",
    "originalTitle": "Hang- en sluitwerk",
    "archiveCode": "09.1.2",
    "section": "09",
    "pages": 8,
    "sizeMb": 1.4,
    "url": "https://drive.google.com/file/d/1Jt3ApGw5WjA1pmIeZr3xoxGlpLJ9WzUT/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "hangend-gipsplatenpafond",
    "title": "Hangend gipsplatenpafond",
    "originalTitle": "hangend gipsplatenplafond",
    "archiveCode": "08.3.2",
    "section": "08",
    "pages": 11,
    "sizeMb": 1.5,
    "url": "https://drive.google.com/file/d/1jAjLToTE0Kh_Dat1BVbwAFol5_XO_1b3/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "islotatie-van-buitenmuren",
    "title": "Islotatie van buitenmuren",
    "originalTitle": "Isolatie van buitenmuren",
    "archiveCode": "15.4.2",
    "section": "15",
    "pages": 2,
    "sizeMb": 0.2,
    "url": "https://drive.google.com/file/d/1ZK5ivi_79XKPffdQIbZSWsTvZYIeuuzD/view?usp=drive_link",
    "image": null
  },
  {
    "id": "isolatie-en-beplating-van-isover",
    "title": "Isolatie en beplating van isover",
    "originalTitle": "systeem Appui Optima",
    "archiveCode": "15.5.4",
    "section": "15",
    "pages": 3,
    "sizeMb": 0.3,
    "url": "https://drive.google.com/file/d/1Y4YWWqbORUFv0pRHWh9mnxFuhK0QNiMs/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "isolatie-van-een-niet-bewoonde-zolder",
    "title": "Isolatie van een niet bewoonde zolder",
    "originalTitle": "niet-bewoonde zolder",
    "archiveCode": "15.5.1",
    "section": "15",
    "pages": 3,
    "sizeMb": 0.9,
    "url": "https://drive.google.com/file/d/1zvXLxghUv9rlI8Zza_lURKAJPgec-Xgd/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "isolatie-van-een-zolder-met-sporen-en-gordingen-uit-zicht",
    "title": "Isolatie van een zolder met sporen en gordingen uit zicht",
    "originalTitle": "sporen niet in het zicht",
    "archiveCode": "15.5.3",
    "section": "15",
    "pages": 5,
    "sizeMb": 6.3,
    "url": "https://drive.google.com/file/d/1xcb8TuSOKuqq2mPrLGBcYlQbjnZrxZ7-/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "isolatie-van-een-zolder-met-zichtbare-sporen",
    "title": "Isolatie van een zolder met zichtbare sporen",
    "originalTitle": "zolder met zichtbare sporen",
    "archiveCode": "15.5.2",
    "section": "15",
    "pages": 3,
    "sizeMb": 0.3,
    "url": "https://drive.google.com/file/d/1x8oH-UHb-VDccR22bWQMvqAcgT5PYr39/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "keuze-van-een-raam",
    "title": "Keuze van een raam",
    "originalTitle": "plaats, grootte en model raam",
    "archiveCode": "1",
    "section": "06",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/1BEmLcAcSDm_Nvx-JWYgWoJf7JLOhqgyQ/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "klimmateriaal-ladders-trappen-stijgers",
    "title": "Klimmateriaal ladders trappen stijgers",
    "originalTitle": "ladders, trappen, steigers",
    "archiveCode": "20.3",
    "section": "20",
    "pages": 4,
    "sizeMb": 0.5,
    "url": "https://drive.google.com/file/d/1-jSKjZ90h96gLR9QhPUPQNG9Yvh0XOF8/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "krakende-vloeren",
    "title": "Krakende vloeren",
    "originalTitle": "Krakende vloeren",
    "archiveCode": "08.1.7",
    "section": "08",
    "pages": 2,
    "sizeMb": 0.3,
    "url": "https://drive.google.com/file/d/13ZmhTG1HSntqHTVNfr8TQCtfS9hl_y5p/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "leggen-van-het-huiswaternet",
    "title": "Leggen van het huiswaternet",
    "originalTitle": "Waterleidingen leggen",
    "archiveCode": "10.1.2",
    "section": "10",
    "pages": 8,
    "sizeMb": 1.2,
    "url": "https://drive.google.com/file/d/1PyjNp-TAOpm51k1QVFknEAhfUjAjJqba/view?usp=drivesdk",
    "image": "huiswaternet.jpg"
  },
  {
    "id": "les-persiennes",
    "title": "Les persiennes",
    "originalTitle": "les 'persiennes'",
    "archiveCode": "09.4.3",
    "section": "09",
    "pages": 2,
    "sizeMb": 0.7,
    "url": "https://drive.google.com/file/d/16glinvX6kq_dOCAc4GBE1LN92_z1qkkw/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "losse-opmerkingen",
    "title": "Losse opmerkingen",
    "originalTitle": "Tout venant - losse opmerkingen en hints",
    "archiveCode": "13.1.9",
    "section": "13",
    "pages": 5,
    "sizeMb": 0.4,
    "url": "https://drive.google.com/file/d/1W35gQPvYz34NkH3Kgr0UfwjfwoWRwvMC/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "luiken-en-staldeuren",
    "title": "Luiken en staldeuren",
    "originalTitle": "Luiken",
    "archiveCode": "09.4",
    "section": "09",
    "pages": 2,
    "sizeMb": 0.3,
    "url": "https://drive.google.com/file/d/15h2FdYE5TYpFCfOewYWDhxHrF5wWYktY/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "maatregelen-bij-vochtdoorslag",
    "title": "Maatregelen bij vochtdoorslag",
    "originalTitle": "Vochtdoorslag",
    "archiveCode": "17.3",
    "section": "17",
    "pages": 4,
    "sizeMb": 0.8,
    "url": "https://drive.google.com/file/d/1KP5i4mG6rUfNiRkPCfB1TlabCINvXOgd/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "minder-gebruikelijke-gereedschappen",
    "title": "Minder gebruikelijke gereedschappen",
    "originalTitle": "bijzondere gereedschappen",
    "archiveCode": "20.2",
    "section": "20",
    "pages": 3,
    "sizeMb": 1.4,
    "url": "https://drive.google.com/file/d/11TjKAPKSviiRCm1C863ZmD5QJ6crwsM1/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "muuropeningen",
    "title": "Muuropeningen",
    "originalTitle": "Een muuropening maken",
    "archiveCode": "09.5",
    "section": "09",
    "pages": 5,
    "sizeMb": 1.2,
    "url": "https://drive.google.com/file/d/19Wct4r1Tzk4iXfcQxnqe6U6QeMCvjPmj/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "nieuwe-ramen-plaatsen",
    "title": "Nieuwe ramen plaatsen",
    "originalTitle": "Nieuwe ramen plaatsen",
    "archiveCode": "09.2.2",
    "section": "09",
    "pages": 6,
    "sizeMb": 0.5,
    "url": "https://drive.google.com/file/d/1kMKwkguPnFuBeBjwDHDxuaVb-TdKpgES/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "oorzaken-van-vochtproblemen",
    "title": "Oorzaken van vochtproblemen",
    "originalTitle": "Soorten vocht en hun oorzaken",
    "archiveCode": "17.1",
    "section": "17",
    "pages": 4,
    "sizeMb": 0.8,
    "url": "https://drive.google.com/file/d/1jIgWxD2hhjwmmwmWg-UeD-9L_ptr1Nu7/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "opdekvloeren",
    "title": "Opdekvloeren",
    "originalTitle": "opdekvloeren",
    "archiveCode": "08.1.6",
    "section": "08",
    "pages": 4,
    "sizeMb": 0.6,
    "url": "https://drive.google.com/file/d/1Lm5iSQQbeJcRuNqQHxiDJ4GNSFXGB5Ym/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "optrekkend-vocht",
    "title": "Optrekkend vocht",
    "originalTitle": "Optrekkend vocht",
    "archiveCode": "17.2",
    "section": "17",
    "pages": 7,
    "sizeMb": 2.7,
    "url": "https://drive.google.com/file/d/1Tr0hOEFo1wg5UW532jVbZYzGNzcoMcIs/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "over-verwarmen",
    "title": "Over verwarmen",
    "originalTitle": "Verwarming",
    "archiveCode": "12.1",
    "section": "12",
    "pages": 2,
    "sizeMb": 0.4,
    "url": "https://drive.google.com/file/d/1ooWwb8F5JFt-Te7oojiOwrZL4-a7C5bn/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "plaatsing-van-isolatie-binnen-of-buiten",
    "title": "Plaatsing van isolatie binnen of buiten",
    "originalTitle": "Het plaatsen van isolatie. Keuzes: Binnen- of buitenisolatie, vochtbescherming",
    "archiveCode": "15.3",
    "section": "15",
    "pages": 3,
    "sizeMb": 0.2,
    "url": "https://drive.google.com/file/d/1mVdp7e44aRqk_HLW-WanalhX-RLtoYfD/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "plafonds-en-plafondafwerking",
    "title": "Plafonds en plafondafwerking",
    "originalTitle": "plafonds",
    "archiveCode": "08.3",
    "section": "08",
    "pages": 2,
    "sizeMb": 0.2,
    "url": "https://drive.google.com/file/d/1GuNPsw7EQqLf4G1HAyUQbsN6j2gtFV8v/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "plan-je-huiswaternet",
    "title": "Plan je huiswaternet",
    "originalTitle": "Waterleidingen plannen",
    "archiveCode": "10.1.1",
    "section": "10",
    "pages": 6,
    "sizeMb": 0.8,
    "url": "https://drive.google.com/file/d/15jEbibXYHCg2-4pYzR2jjbSzxSrrjIdy/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "planken-plafonds",
    "title": "Planken plafonds",
    "originalTitle": "plankenplafonds",
    "archiveCode": "08.3.3",
    "section": "08",
    "pages": 3,
    "sizeMb": 0.3,
    "url": "https://drive.google.com/file/d/1GxviZ6EKEK1KIvjsRv7G9wEfFolkhjg_/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "ramen-opknappen",
    "title": "Ramen opknappen",
    "originalTitle": "Ramen opknappen",
    "archiveCode": "09.2.1",
    "section": "09",
    "pages": 2,
    "sizeMb": 0.5,
    "url": "https://drive.google.com/file/d/1z3xDLOMzqBPo1p9S-GJBFY1TK3R49tME/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "riolering-aanleggen",
    "title": "Riolering aanleggen",
    "originalTitle": "Rioleringen aanleggen",
    "archiveCode": "10.2.2",
    "section": "10",
    "pages": 4,
    "sizeMb": 0.8,
    "url": "https://drive.google.com/file/d/1vMGznmkncQEUoG1Sz0snpXJIiBy8mqJi/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "riolering-plannen",
    "title": "Riolering plannen",
    "originalTitle": "Rioleringen plannen",
    "archiveCode": "10.2.1",
    "section": "10",
    "pages": 10,
    "sizeMb": 1.4,
    "url": "https://drive.google.com/file/d/1PEIdDpG-MbPQqTOdfyIvH_-XbksmOX1i/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "rolluiken",
    "title": "Rolluiken",
    "originalTitle": "Rolluiken",
    "archiveCode": "09.4.2",
    "section": "09",
    "pages": 3,
    "sizeMb": 1.5,
    "url": "https://drive.google.com/file/d/16kuwWSLBKuodVtSILX_fXKT99GtfNop5/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "schuurdeuren",
    "title": "Schuurdeuren",
    "originalTitle": "Schuurdeuren",
    "archiveCode": "09.3",
    "section": "09",
    "pages": 11,
    "sizeMb": 4.9,
    "url": "https://drive.google.com/file/d/1dNTzwHdL85p4h6LFucz6hXF_xlESQG4n/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "slotopmerkingen",
    "title": "Slotopmerkingen",
    "originalTitle": "Slotopmerkingen",
    "archiveCode": "13.1.7",
    "section": "13",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/1jV5zMxtZNNX9hgnB76CllqfKwqZAGcjM/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "soorten-isolatiemateriaal",
    "title": "Soorten isolatiemateriaal",
    "originalTitle": "Soorten isolatiemateriaal",
    "archiveCode": "15.2",
    "section": "15",
    "pages": 4,
    "sizeMb": 0.3,
    "url": "https://drive.google.com/file/d/1bw1KVq0qrGfulfYw9bXDZRycEK05GTCO/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "speciale-schakelingen",
    "title": "Speciale schakelingen",
    "originalTitle": "Speciale schakelingen",
    "archiveCode": "13.1.6",
    "section": "13",
    "pages": 4,
    "sizeMb": 0.6,
    "url": "https://drive.google.com/file/d/1fLo-6r1T49HFbQkpFFv2yO2g8ekNj6aQ/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "standaard-gereedschappen",
    "title": "Standaard gereedschappen",
    "originalTitle": "mijn gereedschapskist(en)",
    "archiveCode": "20.1",
    "section": "20",
    "pages": 2,
    "sizeMb": 0.4,
    "url": "https://drive.google.com/file/d/1M4qpWSpeK3aHlkjeS6puHOXBCcuSOb3o/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "systeemvloeren-van-poutrelles-et-hourdis",
    "title": "Systeemvloeren van poutrelles et hourdis",
    "originalTitle": "Poutrelles et hourdis",
    "archiveCode": "08.2.2",
    "section": "08",
    "pages": 7,
    "sizeMb": 3.0,
    "url": "https://drive.google.com/file/d/1bPt6V23ZUbRCnlzrGUpSzs5wbpaLX6Fh/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "technische-kanten-van-warmtehuishouding",
    "title": "Technische kanten van warmtehuishouding",
    "originalTitle": "Physiologische en technische achtergronden van warmtehuishouding",
    "archiveCode": "15.1",
    "section": "15",
    "pages": 5,
    "sizeMb": 0.5,
    "url": "https://drive.google.com/file/d/1TPXKttIYZahww2WyfHIhrMPsXF8yMuOp/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "tegelzetten",
    "title": "Tegelzetten",
    "originalTitle": "tegelzetten",
    "archiveCode": "16",
    "section": "16",
    "pages": 11,
    "sizeMb": 0.8,
    "url": "https://drive.google.com/file/d/10lHG8-MTOLP_JtF_0ehypGFgA8qTjxkZ/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "tips-en-links",
    "title": "Tips en links",
    "originalTitle": "Nuttige PDF's en video's",
    "archiveCode": "9",
    "section": "06",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/1azvIQwMOzuNhlCTmp9Io2At-CjLS_zPw/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "tips-over-ergonomie",
    "title": "Tips over ergonomie",
    "originalTitle": "tips over ergonomie",
    "archiveCode": "20.6",
    "section": "20",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/1x11udxIsG-_6PGx3BJeMf3GTmSm4We7I/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "tips-voor-het-werken-met-hout",
    "title": "Tips voor het werken met hout",
    "originalTitle": "Tips voor het werken met hout",
    "archiveCode": "23.4",
    "section": "23",
    "pages": 2,
    "sizeMb": 0.4,
    "url": "https://drive.google.com/file/d/1RvghnW8El_KSeBH_9iJ61zS9vQpECUMj/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "trappen",
    "title": "Trappen",
    "originalTitle": "Trappen",
    "archiveCode": "08.2.1",
    "section": "08",
    "pages": 4,
    "sizeMb": 0.5,
    "url": "https://drive.google.com/file/d/1mXdttntY7bc5sNb5WDCsahbWbYe7ZHS0/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "trucs-voor-scheve-muren",
    "title": "Trucs voor scheve muren",
    "originalTitle": "Trucs voor scheve muren",
    "archiveCode": "23.6",
    "section": "23",
    "pages": 3,
    "sizeMb": 0.4,
    "url": "https://drive.google.com/file/d/1ucFcj0_f0dKui5s42e2Y6H_QMA5eRHQu/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "uitgezakte-luiken",
    "title": "Uitgezakte luiken",
    "originalTitle": "uitgezakte luiken weer in vorm brengen",
    "archiveCode": "09.4.4",
    "section": "09",
    "pages": 2,
    "sizeMb": 0.5,
    "url": "https://drive.google.com/file/d/1d6hLnGzBEkMBiCBRclwYf7_blE2HdQ6l/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "veiligheid",
    "title": "Veiligheid",
    "originalTitle": "veiligheid",
    "archiveCode": "20.4",
    "section": "20",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/1hWMokJMr7MVnPL04AtoxoPPfv4KDfqDL/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "ventilatie-met-warmteterugwinning",
    "title": "Ventilatie met warmteterugwinning",
    "originalTitle": "Ventilatie",
    "archiveCode": "12.2",
    "section": "12",
    "pages": 3,
    "sizeMb": 0.4,
    "url": "https://drive.google.com/file/d/1EDDTYiEtBhdQbMZSom7plZ7T63Y3xqKs/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "vergunning-nodig",
    "title": "Vergunning nodig",
    "originalTitle": "Vergunning nodig?",
    "archiveCode": "8",
    "section": "05",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/1ZxXeU0kmecG0yR-s5s3P4L2snbcbIZoo/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "verken-uw-plafond",
    "title": "Verken uw plafond",
    "originalTitle": "verken uw plafond",
    "archiveCode": "08.3.1",
    "section": "08",
    "pages": 2,
    "sizeMb": 0.2,
    "url": "https://drive.google.com/file/d/1EDInqoPaTMD_wnfCuOWA1MWrhnqKnFDT/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "vloeren-en-trappen",
    "title": "Vloeren en trappen",
    "originalTitle": "Vloeren, plafonds en trappen",
    "archiveCode": "08",
    "section": "08",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/17HhMUKFJa9FMgnS733Vhwis42Xcpg2un/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "vloeren-met-lewisplaten",
    "title": "Vloeren met lewisplaten",
    "originalTitle": "Lewisplaten",
    "archiveCode": "08.2.3",
    "section": "08",
    "pages": 3,
    "sizeMb": 0.6,
    "url": "https://drive.google.com/file/d/129BtUUYmhuzmQAz7r_PJ6r0mFYvlWSGu/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "vochtproblemen-aandachtspunten-en-theorie",
    "title": "Vochtproblemen aandachtspunten en theorie",
    "originalTitle": "Overige aandachtspunten",
    "archiveCode": "17.7",
    "section": "17",
    "pages": 5,
    "sizeMb": 0.3,
    "url": "https://drive.google.com/file/d/1-xWhLrlw2IvQHpkXfwwzRSTPkrU97cDo/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "vochtproblemen-en-hun-bestrijding",
    "title": "Vochtproblemen en hun bestrijding",
    "originalTitle": "Vocht, ventilatie en tocht",
    "archiveCode": "17",
    "section": "17",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/1n_Pnw1Ns2IJXNJ_VbkKWNmXAcMJQ5iJq/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "vochtproblemen-oplossen",
    "title": "Vochtproblemen oplossen",
    "originalTitle": "Vochtproblemen",
    "archiveCode": "24.2",
    "section": "24",
    "pages": 9,
    "sizeMb": 4.3,
    "url": "https://drive.google.com/file/d/1F8VzEF-kYa4AoFuTJCnzcnsT42G2mY44/view?usp=drivesdk",
    "image": "vochtproblemen.jpg"
  },
  {
    "id": "vochtwering-bij-binnenisolatie-van-daken",
    "title": "Vochtwering bij binnenisolatie van daken",
    "originalTitle": "Vochtwering bij binnenisolatie van daken",
    "archiveCode": "17.6",
    "section": "17",
    "pages": 2,
    "sizeMb": 0.2,
    "url": "https://drive.google.com/file/d/1mCX3FHHMSiie1ILJAT00ppqWCbtIbSUE/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "voorstellen-en-intenties",
    "title": "Voorstellen en intenties",
    "originalTitle": "Voorstelling, intenties",
    "archiveCode": "01",
    "section": "01",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/1HOkfoY64BqYMrQCtLu11nL8mLgPlwdr5/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "wanden-van-gasbetonblokken",
    "title": "Wanden van gasbetonblokken",
    "originalTitle": "Wanden van gasbeton",
    "archiveCode": "007.1.2",
    "section": "07",
    "pages": 6,
    "sizeMb": 1.2,
    "url": "https://drive.google.com/file/d/1JQBWA0GTvcF29csssIpEl8FgWCNIU2Ds/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "wanden-van-gipsplaten",
    "title": "Wanden van gipsplaten",
    "originalTitle": "(Voorzet-)wanden van gipsplaten",
    "archiveCode": "07.1.1",
    "section": "07",
    "pages": 23,
    "sizeMb": 4.2,
    "url": "https://drive.google.com/file/d/1N2jezAusFIowPhr6UZMxxL_3rrwMt1gm/view?usp=drivesdk",
    "image": "gipsplatenwanden.jpg"
  },
  {
    "id": "wat-is-er-op-bouwkundig-gebied-anders",
    "title": "Wat is er op bouwkundig gebied anders",
    "originalTitle": "Wat is er op bouwkundig gebied anders?",
    "archiveCode": "23.1",
    "section": "23",
    "pages": 3,
    "sizeMb": 0.2,
    "url": "https://drive.google.com/file/d/1sanVcTO4si46QjS6rTkjqDkjZTeK8p8U/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "waterdruk-en-debietproblemen",
    "title": "Waterdruk en debietproblemen",
    "originalTitle": "Druk- en debietproblemen, waterslagen",
    "archiveCode": "10.1.5",
    "section": "10",
    "pages": 5,
    "sizeMb": 0.8,
    "url": "https://drive.google.com/file/d/14F0qI1oNiGCVdRnNpiZJkPOaCzIX4xs9/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "zolderisolatie-en-betimmering",
    "title": "Zolderisolatie en betimmering",
    "originalTitle": "Zolderisolatie en -betimmering",
    "archiveCode": "15.5",
    "section": "15",
    "pages": 2,
    "sizeMb": 0.1,
    "url": "https://drive.google.com/file/d/1QgfBqL81mFAqLfY9fmp6HV8ez00wmfDc/view?usp=drivesdk",
    "image": null
  },
  {
    "id": "zware-lasten-verplaatsen",
    "title": "Zware lasten verplaatsen",
    "originalTitle": "het verplaatsen van zware lasten",
    "archiveCode": "20.5",
    "section": "20",
    "pages": 2,
    "sizeMb": 0.2,
    "url": "https://drive.google.com/file/d/1e1auczFha8HdYh55cGAX2geB_pbL9hQx/view?usp=drivesdk",
    "image": null
  }
];
