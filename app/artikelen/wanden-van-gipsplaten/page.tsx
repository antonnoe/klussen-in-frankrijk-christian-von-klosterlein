import { articleSections } from "./article-sections";
import { figuresBySection, placedFigureCount } from "./article-figures";

const sections = [
  { id: "inleiding", title: "Inleiding" },
  ...articleSections.map(({ id, title }) => ({ id, title })),
];

const sourceUrl =
  "https://drive.google.com/file/d/1N2jezAusFIowPhr6UZMxxL_3rrwMt1gm/view?usp=drivesdk";

const introductionSteps = [
  "Plaatsen van het stijl- en regelwerk",
  "Een deuropening in de ossature",
  "Tips voor een ossature in oude huizen",
  "Plaatsen van leidingen en isolatie",
  "Bekleden met platen",
  "En hoe in oude huizen de platen aanpassen?",
  "Platen vastschroeven",
  "Afwerken van naden en schroefgaten",
  "Oppervlakteafwerking: verven, behangen, soms ook pleisteren",
  "Geluidsdichte wanden",
  "Iets ophangen aan gipskartonwanden",
  "Aanvullende tips over hoeken en reparaties van gipskartonwanden",
  "Fotogalerij",
  "Nuttige websites en meer informatie",
];

const figurePlacements: Record<string, number[]> = {
  "stijl-en-regelwerk": [1, 5, 7, 8, 10],
  deuropening: [1, 1, 4, 4, 9, 11, 8, 11, 15],
  "oude-huizen": [1, 3, 5, 7, 9, 12],
  "leidingen-isolatie": [0, 1, 5],
  bekleden: [5, 6, 6, 8, 9],
  "beplating-oude-huizen": [1, 3, 5, 8],
  vastschroeven: [1, 5, 3],
  naden: [1, 3, 6, 6, 8, 9, 11],
  geluidsdemping: [3, 5, 7, 9],
  ophangen: [7, 3, 5],
  "tips-reparaties": [2, 6, 6, 10, 10, 12, 12, 16, 18, 19, 22, 23],
};

function VerifiedIntroduction() {
  return (
    <div className="verified-copy">
      <div className="verification-label">
        <span aria-hidden="true">✓</span>
        Handmatig gecontroleerd en logisch hersteld
      </div>
      <p className="article-kicker">07.1.1 · Wanden van gipsplaten (gipskarton)</p>
      <p className="article-lead">
        Voorzetwanden of lichte (niet-dragende) scheidingswanden van
        gipskarton op regelwerk{" "}
        <em>(des doublages, des cloisons en placoplâtre sur ossature)</em>.
      </p>
      <p>
        De binnenbekleding van schuine daken wordt, omdat die meestal samen
        met de isolatie gedaan wordt, onder 15.5 Zolderisolatie behandeld.
      </p>
      <p>
        Normaliter willen wij in traditionele Franse huizen juist af van die
        kleine hokkerige vertrekken. Wij willen ruime lichte kamers. Waarom
        dus nieuwe scheidingswanden?
      </p>
      <ul>
        <li>
          Het kan zijn dat wij de oude scheidingswanden verwijderd hebben en
          op een andere plaats nieuwe willen hebben.
        </li>
        <li>
          Als wij een schuur omtoveren tot gastenverblijf moet daar natuurlijk
          een binnenindeling komen.
        </li>
        <li>
          Binnenisolatie van buitenmuren moet met een voorzetwand afgewerkt
          worden.
        </li>
        <li>
          Of willen wij een onregelmatige lelijke muur achter een voorzetwand
          verbergen?
        </li>
      </ul>
      <p>De aangewezen technieken hiervoor zijn:</p>
      <ul>
        <li>Gipskarton op regelwerk (placoplâtre sur ossature)</li>
        <li>Gasbetonwanden (blocs en béton cellulaire)</li>
        <li>Gipsblokwanden (blocs plâtre)</li>
      </ul>
      <p>
        Ik beschrijf hier voornamelijk voorzet- en scheidingswanden van
        gipskarton op regelwerk omdat die het meest gebruikelijk zijn (en omdat
        ik hiermee ruime ervaring heb). Onder menupunt 7.1.2 vindt u hints
        betreffende gasbetonwanden.
      </p>
      <p>
        In dit artikel worden de basisstappen bij het plaatsen van een
        gipsplaten wand op een regelwerk behandeld. De oorspronkelijke
        inhoudsopgave telt veertien onderdelen:
      </p>
      <ol className="verified-steps">
        {introductionSteps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {step}
          </li>
        ))}
      </ol>
      <p className="restoration-note">
        <strong>Herstel bij de paginaovergang:</strong> in de automatische
        extractie eindigde deze passage na “Tenslotte nog:”. De onderdelen 13
        en 14 stonden op de volgende PDF-pagina en zijn hier weer aan de
        inhoudsopgave gekoppeld.
      </p>
    </div>
  );
}

export default function WandenVanGipsplaten() {
  return (
    <main className="article-site" id="top">
      <header className="article-header">
        <a className="brand" href="/" aria-label="Terug naar het archief">
          <span className="brand-sign" aria-hidden="true">KiF</span>
          <span>
            <strong>Klussen in Frankrijk</strong>
            <small>Het geredde kennisarchief</small>
          </span>
        </a>
        <nav aria-label="Artikelnavigatie">
          <a href="/">Archief</a>
          <a href="#inhoud">Inhoud</a>
          <a href={sourceUrl} target="_blank" rel="noreferrer">Bron-PDF ↗</a>
        </nav>
      </header>

      <section className="article-hero">
        <div>
          <p className="eyebrow">Pilot webartikel · archief 07.1.1</p>
          <h1>Wanden van gipsplaten</h1>
          <p className="article-deck">
            Voorzetwanden en lichte, niet-dragende scheidingswanden van
            gipskarton op een metalen of houten regelwerk.
          </p>
          <dl className="article-facts">
            <div><dt>23</dt><dd>bronpagina’s</dd></div>
            <div><dt>8.042</dt><dd>woorden hersteld</dd></div>
            <div><dt>{placedFigureCount}</dt><dd>bronbeelden geplaatst</dd></div>
          </dl>
        </div>
      </section>

      <aside className="article-status">
        <strong>Tekst en beeld gereconstrueerd</strong>
        <p>
          Alle veertien onderdelen zijn opnieuw uit de 23 PDF-pagina’s
          samengesteld. Doorlopende zinnen zijn over pagina-einden heen
          hersteld en kop- en voetteksten van de oude printweergave zijn
          verwijderd. De 61 bronbeelden zijn weer tussen de bijbehorende
          tekstpassages geplaatst.
          Spelling en inhoud zijn nog niet geactualiseerd.
        </p>
      </aside>

      <div className="article-layout">
        <aside className="article-toc" id="inhoud">
          <p className="eyebrow">Op deze pagina</p>
          <ol>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
          <a className="source-button" href={sourceUrl} target="_blank" rel="noreferrer">
            Bekijk originele PDF ↗
          </a>
        </aside>

        <article className="article-body">
          <div className="editorial-note">
            <span>Bronreconstructie · tekst en beeld</span>
            <p>
              De hoofdstukgrenzen, paginaovergangen en begin- en eindpassages
              zijn met de PDF vergeleken. Alle 61 afbeeldingen zijn in de
              oorspronkelijke volgorde bij hun hoofdstuk geplaatst. De
              bijschriften uit de PDF zijn als tekst behouden; samengestelde
              beelden en afwijkende nummering zijn niet stilzwijgend
              geïnterpreteerd.
            </p>
          </div>

          <section id="inleiding" className="article-section">
            <p className="section-number">Bronpagina’s 1–2 · gecontroleerd</p>
            <h2>Inleiding</h2>
            <VerifiedIntroduction />
          </section>

          {articleSections.map((section) => (
            <section id={section.id} key={section.id} className="article-section">
              <p className="section-number">
                Bronpagina’s {section.sourcePages[0]}
                {section.sourcePages.length > 1
                  ? `–${section.sourcePages[section.sourcePages.length - 1]}`
                  : ""}{" "}
                · {section.wordCount.toLocaleString("nl-NL")} woorden
              </p>
              <h2>{section.title}</h2>
              <div className="verification-label">
                <span aria-hidden="true">✓</span>
                Doorlopend hoofdstuk · paginaovergangen hersteld
              </div>
              <div className="reconstructed-copy">
                {section.paragraphs.map((paragraph, index) => {
                  const isCaption = /^(afb\.|afbeelding |legenda )/i.test(paragraph);
                  const isSubheading =
                    /^(Het plaatsen van de ossature|Hier nog even een hint:|Nog een tip:|Stuken en tegelzetten|12\.[12] )/i.test(
                      paragraph,
                    );
                  const figures =
                    figuresBySection[section.id]?.filter(
                      (_, figureIndex) =>
                        figurePlacements[section.id]?.[figureIndex] === index,
                    ) ?? [];

                  return (
                    <div className="article-paragraph-block" key={index}>
                      {isSubheading ? (
                        <h3>{paragraph}</h3>
                      ) : (
                        <p className={isCaption ? "source-caption" : undefined}>
                          {paragraph}
                        </p>
                      )}
                      {figures.length ? (
                        <div className={`article-images count-${figures.length}`}>
                          {figures.map((figure) => (
                            <figure key={figure.file}>
                              <img src={figure.file} alt={figure.alt} loading="lazy" />
                              <figcaption>{figure.label}</figcaption>
                            </figure>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          <aside className="article-endnote">
            <p className="eyebrow">Volgende stap</p>
            <h2>Van bronversie naar actueel klusadvies</h2>
            <p>
              In de content-audit worden onder meer maatvoering, materialen,
              productnamen, veiligheidsadvies, verwijzingen en geldende Franse
              normen gecontroleerd. Pas daarna kan dit artikel onderdeel worden
              van V1.0.
            </p>
            <a href="/#herkomst">Bekijk de audit-aanpak →</a>
          </aside>
        </article>
      </div>

      <footer>
        <a className="brand" href="/">
          <span className="brand-sign" aria-hidden="true">KiF</span>
          <span>
            <strong>Klussen in Frankrijk</strong>
            <small>Versie 0.7 · pilot webartikel</small>
          </span>
        </a>
        <p>Historisch bronmateriaal · controleer actuele normen en regelgeving</p>
        <a href="#top">Naar boven ↑</a>
      </footer>
    </main>
  );
}
