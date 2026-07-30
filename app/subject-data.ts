export type ProductionSubject = {
  id: string;
  title: string;
  sections: readonly string[];
  description: string;
  auditFocus: string;
};

export const productionSubjects: ProductionSubject[] = [
  {
    id: "basis-en-planning",
    title: "Basis, planning & referenties",
    sections: ["00", "01", "02", "03", "04", "05", "21", "22", "23"],
    description:
      "Voorbereiding, vergunningen, vakmensen, algemene werkwijzen, woordenlijsten en achtergrondinformatie.",
    auditFocus:
      "Bronverwijzingen, Franse terminologie, vergunningstrajecten en verouderde externe links.",
  },
  {
    id: "dak-en-isolatie",
    title: "Dak & isolatie",
    sections: ["06", "15"],
    description:
      "Dakconstructies, dakramen, dakbedekking en isolatie aan binnen- en buitenzijde.",
    auditFocus:
      "Laagopbouw, vochttransport, ventilatie, productwijzigingen en correcte detailtekeningen.",
  },
  {
    id: "muren-afwerking-en-vocht",
    title: "Muren, afwerking & vocht",
    sections: ["07", "16", "17", "18"],
    description:
      "Scheidingswanden, natuursteen, wandafwerking, vochtproblemen en bevestigingstechniek.",
    auditFocus:
      "Oorzaak en gevolg bij vocht, materiaalcompatibiliteit en beeldkoppeling bij constructiedetails.",
  },
  {
    id: "vloeren-plafonds-en-trappen",
    title: "Vloeren, plafonds & trappen",
    sections: ["08"],
    description:
      "Balklagen, plankenvloeren, versteviging, plafonds, tegelvloeren en trappen.",
    auditFocus:
      "Draagconstructie, maatvoering, materiaalopbouw en volgorde van uitvoeringsfoto’s.",
  },
  {
    id: "deuren-ramen-en-luiken",
    title: "Deuren, ramen & luiken",
    sections: ["09"],
    description:
      "Herstel, plaatsing, hang- en sluitwerk, beglazing, luiken en traditionele detaillering.",
    auditFocus:
      "Authentieke werkwijzen, veiligheidsglas, beslag en de juiste foto bij iedere handeling.",
  },
  {
    id: "water-riool-en-sanitair",
    title: "Water, riool & sanitair",
    sections: ["10", "11"],
    description:
      "Huiswaternet, leidingaanleg, afvoer, riolering, sanitair en fosse septique.",
    auditFocus:
      "Hygiëne, leidingmaterialen, afschot, druk, debiet en actuele assainissement-eisen.",
  },
  {
    id: "verwarming-ventilatie-elektra-en-gas",
    title: "Verwarming, ventilatie, elektra & gas",
    sections: ["12", "13", "14"],
    description:
      "Warmtehuishouding, verwarmingssystemen, ventilatie en technische installaties.",
    auditFocus:
      "Veiligheid, huidige Franse normen, installatieschema’s en verouderde apparatuur.",
  },
  {
    id: "buitenruimte-gereedschap-en-projecten",
    title: "Buitenruimte, gereedschap & projecten",
    sections: ["19", "20", "24"],
    description:
      "Terrassen en erf, gereedschappen, hulpmiddelen en complete praktijkprojecten.",
    auditFocus:
      "Veilig gebruik, productcategorieën, projectvolgorde en volledigheid van beeldseries.",
  },
];
