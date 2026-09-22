export type Event = {
  id: string;
  name: string;
  venue: string;
  startsAt: string;
  endsAt: string;
  lineup: string[];
  status: string;
};

export const EVENTS: Event[] = [
  {
    id: "PR26-01",
    name: "PRIDE RADICALE 2026",
    venue: "Paris, France",

    startsAt: "2026-06-14T14:00:00+02:00",
    endsAt: "2026-06-14T18:00:00+02:00",

    lineup: [
      "Jadette",
      "Fantiflex",
      "HAUS ARKANA",
    ],

    status: "PASSED",
  },

  {
    id: "MF26-01",
    name: "MANIFESTIVE 2026",
    venue: "Paris, France",

    startsAt: "2026-06-13T14:00:00+02:00",
    endsAt: "2026-06-13T18:00:00+02:00",

    lineup: [
      "UFORICK",
      "FANTIFLEX",
      "YPO",
      "WIJA",
    ],

    status: "PASSED",
  },

  {
    id: "IF26-01",
    name: "INTERFILIÈRES 2026",
    venue: "91, IDF, France",

    startsAt: "2026-05-31T15:00:00+02:00",

    // Event ends after midnight
    endsAt: "2026-06-01T04:30:00+02:00",

    lineup: [
      "FANTIFLEX",
      "UFORICK",
      "MAYA GORA",
      "CLAUDIEN vs ANNETH",
      "16 SOUPAPES",
    ],

    status: "SOLD OUT",
  },

  {
    id: "CF26-04",
    name: "SYNDROME",
    venue: "La Cité Fertile, Pantin",

    startsAt: "2026-05-15T15:00:00+02:00",

    // Event ends after midnight
    endsAt: "2026-05-16T01:30:00+02:00",

    lineup: [
      "KOU2TATANE",
      "HERRSPINLER",
      "ZAZA",
      "UFORICK",
      "LAMBDA23",
      "KARLFROYE",
      "FOUSSY",
      "p3b3",
    ],

    status: "SOLD OUT",
  },

  {
    id: "CF26-03",
    name: "SYMPTOME",
    venue: "La Cité Fertile, Pantin",

    startsAt: "2026-04-25T15:00:00+02:00",

    // Event ends after midnight
    endsAt: "2026-04-26T01:30:00+02:00",

    lineup: [
      "CLAUDIEN",
      "LA VASE",
      "MIZZ",
      "1FAM",
      "BAROX",
      "HELEN THEIA",
      "FLOKON",
      "LA PESTE NOIRE",
      "MENTALIS vs HASHINO",
    ],

    status: "SOLD OUT",
  },

  {
    id: "CF26-02",
    name: "INFRAREC",
    venue: "La Cité Fertile, Pantin",

    startsAt: "2026-03-07T15:00:00+01:00",

    // Event ends after midnight
    endsAt: "2026-03-08T01:30:00+01:00",

    lineup: [
      "UFORICK",
      "SAKAJ",
      "SAPHIRELEFLEUR",
      "KOU2TATANE",
      "LE MOUSKET",
      "SUNNYFLEX",
      "SOUL SENCE",
      "KILU",
    ],

    status: "SOLD OUT",
  },

  {
    id: "CF26-01",
    name: "TERMINUS",
    venue: "La Cité Fertile, Pantin",

    startsAt: "2026-01-09T18:00:00+01:00",
    endsAt: "2026-01-09T23:30:00+01:00",

    lineup: [
      "UFORICK",
      "YPO",
      "SAPHIRELEFLEUR",
      "TWOLETTERS",
      "SKORCHSIN",
    ],

    status: "SOLD OUT",
  },
];