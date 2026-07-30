export type ArticleFigure = {
  file: string;
  alt: string;
  label: string;
};

const figure = (number: number, label: string, alt = label): ArticleFigure => ({
  file: `/articles/wanden-van-gipsplaten/img-${String(number).padStart(3, "0")}.jpg`,
  alt,
  label,
});

export const figuresBySection: Record<string, ArticleFigure[]> = {
  "stijl-en-regelwerk": [
    figure(0, "Afb. 1 · U- en C-profielen voor een ossature"),
    figure(1, "Compriband op rol en geëxpandeerd"),
    figure(2, "Afb. 2a · Getande blikschaar met dubbele hefboom"),
    figure(3, "Afb. 2b · Knippen van metalen profielen"),
    figure(4, "Afb. 3 · Trompetkopschroef TTPC 3,5 × 25"),
  ],
  deuropening: [
    figure(5, "Afb. 4 · Insnijden en omzetten van een profiel"),
    figure(6, "Afb. 5 · Opbouw van de profielen bij een deuropening"),
    figure(7, "Afb. 6 · Deurkozijn tussen C-profielen"),
    figure(8, "Afb. 7 · U-profiel boven het deurkozijn"),
    figure(9, "Afb. 9 · Zelfborende schroef"),
    figure(10, "Afb. 10 · Verbinden van profielen"),
    figure(11, "Afb. 8 · Schroefpatroon rond een deuropening"),
    figure(12, "Afb. 10–11 · Professionele krimptang en verbinding"),
    figure(13, "Afb. 12 · Kozijnbevestiging met houten klossen"),
  ],
  "oude-huizen": [
    figure(14, "Afb. 13 · Regelwerk onder balken in een oud huis"),
    figure(15, "Afb. 14 · Metalen regelwerk tussen bestaande balken"),
    figure(16, "Afb. 14a · Profiel rond een houten balk"),
    figure(17, "Afb. 14 · Aansluiting van regelwerk op de kap"),
    figure(18, "Afb. 15 · Regelwerk bij een schuin dak"),
    figure(19, "Afb. 16 · Gecombineerd metalen en houten regelwerk"),
  ],
  "leidingen-isolatie": [
    figure(20, "Afb. 17 · Regelwerk met isolatie in een oud huis"),
    figure(21, "Afb. 18 · Elektrische leidingen door de staanders"),
    figure(22, "Afb. 19–20 · Leidingen achter het regelwerk"),
  ],
  bekleden: [
    figure(23, "Afb. 21 · Hulpmiddelen om een plaat op te tillen"),
    figure(24, "Afb. 22 · Professionele platenlift"),
    figure(25, "Afb. 22 · Werkwijze van een eenvoudige platenheffer"),
    figure(26, "Afb. 23 · Vermijd een plaatnaad boven de deur"),
    figure(27, "Gipsplaat aangebracht rond bestaande balken"),
  ],
  "beplating-oude-huizen": [
    figure(28, "Afb. 24 · Aansluiting rond een onregelmatige balk"),
    figure(29, "Afb. 25–26 · Na het vullen en bijsnijden met PUR-schuim"),
    figure(30, "Afb. 27 · Overbrengen van een onregelmatig muurprofiel"),
    figure(31, "Afb. 28 · Aansluiting op een onregelmatige muur"),
  ],
  vastschroeven: [
    figure(32, "Afb. 29 · Trompetkopschroef voor gipsplaten"),
    figure(33, "Afb. 30 · Bit met kunststof diepteaanslag"),
    figure(34, "Afb. 31 · Metalen diepteaanslag"),
  ],
  naden: [
    figure(35, "Afb. 32 · Breed plamuurmes voor voegafwerking"),
    figure(36, "Afb. 33 · Gevulde voegen en schroefgaten"),
    figure(37, "Afb. 34 · Afgewerkte naden tussen balken"),
    figure(38, "Afb. 35 · Schuren en nalopen van de voegen"),
    figure(39, "Afb. 36 · Praktijkboek over gipskarton"),
    figure(40, "Afb. 37 · Metaalversterkte hoekband"),
    figure(41, "Afb. 38 · Afgewerkte binnenhoek bij een deur"),
  ],
  geluidsdemping: [
    figure(42, "Afb. 39 · Geluidsisolerend metalen profiel"),
    figure(43, "Afb. 40 · Dubbele of verspringende staanders"),
    figure(44, "Afb. 41 · Akoestische isolatie in het profiel"),
    figure(45, "Afb. 42 · Kozijnaansluitingen bij verschillende wanddiktes"),
  ],
  ophangen: [
    figure(46, "Afb. 43 · Belastingen aan een gipskartonwand"),
    figure(47, "Afb. 44 · Kunststof hollewandplug"),
    figure(48, "Afb. 45 · Zelfborende hollewandplug van zamak"),
  ],
  "tips-reparaties": [
    figure(49, "Afb. 46 · Hoekaansluiting van gipskartonwanden"),
    figure(50, "Afb. 47 · Aangepast deurkozijn"),
    figure(51, "Afb. 48 · Detail van de aangepaste deurlijst"),
    figure(52, "Afb. 49 · Opening voor een reparatie met achterhout"),
    figure(53, "Afb. 50 · Achterhout geplaatst in de opening"),
    figure(54, "Afb. 51 · Reparatiestuk op maat geplaatst"),
    figure(55, "Afb. 52 · Reparatiestuk vastgeschroefd"),
    figure(56, "Afb. 53 · Reparatieclips voor gipskarton"),
    figure(57, "Afb. 54 · Verpakking van reparatieclips"),
    figure(58, "Afb. 55 · Schematische opbouw van een reparatie"),
    figure(59, "Afb. 56 · Geïmproviseerde steun achter de plaat"),
    figure(60, "Afb. 57 · Reparatiestuk vastzetten"),
  ],
};

export const placedFigureCount = Object.values(figuresBySection).reduce(
  (total, figures) => total + figures.length,
  0,
);
