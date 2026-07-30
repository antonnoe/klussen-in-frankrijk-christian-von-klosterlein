"use client";

import { useMemo, useRef, useState } from "react";
import {
  archiveCategories,
  archiveDocuments,
  type ArchiveDocument,
} from "./archive-data";
import { productionSubjects } from "./subject-data";

const featuredIds = [
  "badkamerproject-christian",
  "dakconstructies",
  "de-fosse-sceptique",
  "de-groepenkast",
  "een-vloer-verstevigen",
  "leggen-van-het-huiswaternet",
  "vochtproblemen-oplossen",
  "wanden-van-gipsplaten",
];

function pageLabel(pages: number) {
  return `${pages} ${pages === 1 ? "pagina" : "pagina’s"}`;
}

function formatCode(code: string) {
  return code.replace(/^0(?=\d)/, "");
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState("all");
  const [activeSubject, setActiveSubject] = useState("all");
  const [selected, setSelected] = useState<ArchiveDocument | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const categories = useMemo(
    () =>
      archiveCategories.map((category) => ({
        ...category,
        count: archiveDocuments.filter(
          (document) => document.section === category.number,
        ).length,
      })),
    [],
  );

  const filteredDocuments = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("nl");
    return archiveDocuments.filter((document) => {
      const inSection =
        activeSection === "all" || document.section === activeSection;
      const selectedSubject = productionSubjects.find(
        (subject) => subject.id === activeSubject,
      );
      const inSubject =
        !selectedSubject ||
        selectedSubject.sections.includes(document.section);
      const inSearch =
        !needle ||
        [
          document.title,
          document.originalTitle,
          document.archiveCode,
          categories.find((category) => category.number === document.section)
            ?.title,
        ]
          .join(" ")
          .toLocaleLowerCase("nl")
          .includes(needle);
      return inSection && inSubject && inSearch;
    });
  }, [activeSection, activeSubject, categories, query]);

  const subjects = useMemo(
    () =>
      productionSubjects.map((subject) => {
        const documents = archiveDocuments.filter((document) =>
          subject.sections.includes(document.section),
        );
        return {
          ...subject,
          documentCount: documents.length,
          pageCount: documents.reduce(
            (total, document) => total + document.pages,
            0,
          ),
        };
      }),
    [],
  );

  const featuredDocuments = featuredIds
    .map((id) => archiveDocuments.find((document) => document.id === id))
    .filter((document): document is ArchiveDocument => Boolean(document));

  const totalPages = archiveDocuments.reduce(
    (total, document) => total + document.pages,
    0,
  );

  function selectSection(section: string) {
    setActiveSubject("all");
    setActiveSection(section);
    document
      .getElementById("documenten")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function selectSubject(subject: string) {
    setActiveSection("all");
    setActiveSubject(subject);
    document
      .getElementById("documenten")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Klussen in Frankrijk, home">
          <span className="brand-sign" aria-hidden="true">
            KiF
          </span>
          <span>
            <strong>Klussen in Frankrijk</strong>
            <small>Het geredde kennisarchief</small>
          </span>
        </a>
        <nav aria-label="Hoofdnavigatie">
          <a className="nav-new" href="#nieuw">Nieuw: 10 artikelen</a>
          <a href="#onderwerpen">Onderwerpen</a>
          <a href="#inhoud">Oud menu</a>
          <a href="#documenten">Documenten</a>
          <a href="#herkomst">Herkomst & audit</a>
        </nav>
        <button
          className="search-trigger"
          type="button"
          onClick={() => searchRef.current?.focus()}
        >
          Zoek <span aria-hidden="true">⌕</span>
        </button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Versie 0.7 · bronarchief ontsloten</p>
          <h1>
            Praktijkkennis voor
            <em>het Franse huis.</em>
          </h1>
          <p className="hero-intro">
            De geredde pagina’s van de oorspronkelijke website zijn terug:
            tekst, foto’s, tekeningen én de herkenbare inhoudsindeling. V0.7
            maakt het materiaal vindbaar; V1.0 volgt pas na actualisering.
          </p>
          <div className="archive-search" role="search">
            <label htmlFor="archive-search">Zoek in 118 documenten</label>
            <div>
              <span aria-hidden="true">⌕</span>
              <input
                id="archive-search"
                ref={searchRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Bijvoorbeeld dakraam, vocht, aarding…"
              />
              <a href="#documenten">Bekijk</a>
            </div>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>{archiveDocuments.length}</dt>
              <dd>PDF-documenten</dd>
            </div>
            <div>
              <dt>{totalPages}</dt>
              <dd>Archiefpagina’s</dd>
            </div>
            <div>
              <dt>24</dt>
              <dd>Originele rubrieken</dd>
            </div>
          </dl>
        </div>

        <div className="hero-pages" aria-label="Voorbeelden uit het bronarchief">
          <figure className="source-page page-one">
            <img
              src="/source-pages/dakconstructies.jpg"
              alt="Originele archiefpagina over Franse dakconstructies"
            />
          </figure>
          <figure className="source-page page-two">
            <img
              src="/source-pages/groepenkast.jpg"
              alt="Originele archiefpagina over de Franse groepenkast"
            />
          </figure>
          <p className="source-note">
            <strong>Bronbeeld</strong>
            Originele pagina’s, inclusief tekst en illustraties
          </p>
        </div>
      </section>

      <aside className="archive-warning">
        <strong>Historisch bronmateriaal</strong>
        <span>
          Techniek, productnamen en Franse regelgeving kunnen inmiddels zijn
          gewijzigd. Controleer informatie vóór uitvoering.
        </span>
      </aside>

      <section className="latest-release" id="nieuw">
        <div className="latest-release-heading">
          <span>Nieuw gepubliceerd</span>
          <strong>Batch 02 staat online</strong>
          <p>Nu tien volledige webartikelen · twintig PDF-pagina’s</p>
        </div>
        <div className="latest-release-links">
          <a href="/artikelen/deuren-opknappen">
            <small>09.1</small>
            Deuren opknappen <b>→</b>
          </a>
          <a href="/artikelen/keuze-van-een-raam">
            <small>06.5.1</small>
            Keuze van een raam <b>→</b>
          </a>
          <a href="/artikelen/krakende-vloeren">
            <small>08.1.7</small>
            Krakende vloeren <b>→</b>
          </a>
          <a href="/artikelen/uitgezakte-luiken">
            <small>09.4.4</small>
            Uitgezakte luiken <b>→</b>
          </a>
          <a href="/artikelen/standaard-gereedschappen">
            <small>20.1</small>
            Mijn gereedschapskisten <b>→</b>
          </a>
        </div>
      </section>

      <section className="subject-section" id="onderwerpen">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Nieuwe productie- en auditstructuur</p>
            <h2>Acht samenhangende onderwerpen</h2>
          </div>
          <p>
            Nieuwe artikelen worden per onderwerp gereconstrueerd. De
            oorspronkelijke nummering blijft behouden, maar tekstcontrole,
            beeldkoppeling en de latere inhoudelijke audit verlopen voortaan
            binnen deze acht werkgebieden.
          </p>
        </div>
        <div className="subject-grid">
          {subjects.map((subject, index) => (
            <button
              key={subject.id}
              type="button"
              onClick={() => selectSubject(subject.id)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{subject.title}</strong>
              <p>{subject.description}</p>
              <small>
                {subject.documentCount} documenten · {subject.pageCount} pagina’s
              </small>
              <em>Auditfocus: {subject.auditFocus}</em>
            </button>
          ))}
        </div>
      </section>

      <section className="section-shell" id="inhoud">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Historische navigatie blijft intact</p>
            <h2>Het oorspronkelijke menu</h2>
          </div>
          <p>
            De nummering is overgenomen uit de oorspronkelijke website. Lege
            rubrieken blijven zichtbaar als spoor van de oude structuur.
          </p>
        </div>

        <div className="contents-grid">
          {categories.map((category) => (
            <button
              className={`contents-item ${
                category.count === 0 ? "is-empty" : ""
              }`}
              key={category.number}
              type="button"
              disabled={category.count === 0}
              onClick={() => selectSection(category.number)}
            >
              <span>{category.number}</span>
              <strong>{category.title}</strong>
              <small>
                {category.count === 0
                  ? "geen document gered"
                  : `${category.count} ${
                      category.count === 1 ? "document" : "documenten"
                    }`}
              </small>
            </button>
          ))}
        </div>
      </section>

      <section className="source-gallery">
        <div className="gallery-copy">
          <p className="eyebrow">Tekst én beeld behouden</p>
          <h2>Blader door de oorspronkelijke pagina’s</h2>
          <p>
            Elke tegel is een echte eerste pagina uit de geredde set. Open het
            document voor de volledige PDF op Google Drive.
          </p>
        </div>
        <div className="gallery-grid">
          {featuredDocuments.map((document) => (
            <button
              type="button"
              key={document.id}
              onClick={() => setSelected(document)}
            >
              <img
                src={`/source-pages/${document.image}`}
                alt={`Eerste pagina van ${document.title}`}
              />
              <span>
                <small>{formatCode(document.archiveCode)}</small>
                <strong>{document.title}</strong>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="section-shell documents-section" id="documenten">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Volledige bronindex</p>
            <h2>Alle documenten</h2>
          </div>
          <p>
            {filteredDocuments.length} van {archiveDocuments.length} documenten
            zichtbaar
          </p>
        </div>

        <div className="filter-bar">
          <label>
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Zoek op titel, onderwerp of archiefnummer"
              aria-label="Zoek documenten"
            />
          </label>
          <select
            value={activeSection}
            onChange={(event) => {
              setActiveSubject("all");
              setActiveSection(event.target.value);
            }}
            aria-label="Filter op rubriek"
          >
            <option value="all">Alle rubrieken</option>
            {categories
              .filter((category) => category.count > 0)
              .map((category) => (
                <option value={category.number} key={category.number}>
                  {category.number} · {category.title} ({category.count})
                </option>
              ))}
          </select>
          {(query || activeSection !== "all" || activeSubject !== "all") && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveSection("all");
                setActiveSubject("all");
              }}
            >
              Wis filters
            </button>
          )}
        </div>

        {filteredDocuments.length ? (
          <div className="document-list">
            {filteredDocuments.map((document) => {
              const category = categories.find(
                (item) => item.number === document.section,
              );
              return (
                <article key={document.id} className="document-row">
                  <span className="document-code">
                    {formatCode(document.archiveCode)}
                  </span>
                  <div>
                    <p>{category?.title}</p>
                    <h3>{document.title}</h3>
                    {document.originalTitle.toLocaleLowerCase("nl") !==
                      document.title.toLocaleLowerCase("nl") && (
                      <small>Oorspronkelijke titel: {document.originalTitle}</small>
                    )}
                  </div>
                  <span className="document-meta">
                    {pageLabel(document.pages)} · {document.sizeMb} MB
                  </span>
                  <button type="button" onClick={() => setSelected(document)}>
                    Bekijk <span aria-hidden="true">↗</span>
                  </button>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="no-results">
            <strong>Geen documenten gevonden</strong>
            <p>Probeer een korter zoekwoord of wis de gekozen rubriek.</p>
          </div>
        )}
      </section>

      <section className="heritage-section" id="herkomst">
        <div className="heritage-intro">
          <div>
            <p className="eyebrow">Digitaal erfgoed, opnieuw bruikbaar gemaakt</p>
            <h2>Bewaren is stap één. Actualiseren is noodzakelijk.</h2>
          </div>
          <div className="heritage-story">
            <p>
              Christian von Klösterlein bouwde op de Weebly-website{" "}
              <em>klussen-in-frankrijk.eu</em> jarenlang aan een uitzonderlijk
              praktisch kennisarchief voor het verbouwen van Franse huizen. Na
              zijn plotselinge overlijden verdween de website begin 2020
              onverwacht van het web.
            </p>
            <p>
              De geredde kopie bestaat uit de PDF’s in dit archief. Zij bewaren
              niet alleen de teksten, maar ook de oorspronkelijke foto’s,
              tekeningen, bijschriften en menustructuur. De Wayback Machine
              wordt voortaan als tweede bron gebruikt om paginaopbouw,
              afbeeldingsvolgorde en bijschriften te controleren.
            </p>
            <div className="heritage-links">
              <a
                href="https://www.nederlanders.fr/profiles/blogs/website-klussen-in-frankrijk-definitief-uit-de-lucht"
                target="_blank"
                rel="noreferrer"
              >
                Lees het reddingsverslag <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://web.archive.org/web/sitemap/http://klussen-in-frankrijk.eu/"
                target="_blank"
                rel="noreferrer"
              >
                Bekijk de Wayback-sitemap <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="conversion-block">
          <div className="conversion-heading">
            <p className="eyebrow">Van vaste pagina naar levende website</p>
            <h3>Van PDF naar webartikel</h3>
            <p>
              Iedere PDF kan worden omgezet naar gestructureerde webcode. De
              tekst wordt echte doorzoekbare HTML; afbeeldingen worden als
              afzonderlijke bestanden bij het juiste tekstgedeelte geplaatst.
            </p>
            <a className="pilot-link" href="/artikelen/wanden-van-gipsplaten">
              Bekijk de grote pilot: Wanden van gipsplaten →
            </a>
          </div>
          <ol className="conversion-route">
            <li>
              <span>01</span>
              <strong>PDF analyseren</strong>
              <small>Koppen, alinea’s, beelden en bijschriften herkennen</small>
            </li>
            <li>
              <span>02</span>
              <strong>Beeld extraheren</strong>
              <small>Foto’s, schema’s en tekeningen afzonderlijk bewaren</small>
            </li>
            <li>
              <span>03</span>
              <strong>Samenhang herstellen</strong>
              <small>Ieder beeld aan de juiste passage en positie koppelen</small>
            </li>
            <li>
              <span>04</span>
              <strong>Webcode bouwen</strong>
              <small>Semantische HTML met onderschriften en bronverwijzingen</small>
            </li>
            <li>
              <span>05</span>
              <strong>Wayback-dubbelcheck</strong>
              <small>Oude webpagina, beeldvolgorde en bijschriften vergelijken</small>
            </li>
            <li>
              <span>06</span>
              <strong>Visueel controleren</strong>
              <small>PDF, webartikel en archiefopname naast elkaar nalopen</small>
            </li>
          </ol>
        </div>

        <aside className="wayback-proof">
          <div>
            <p className="eyebrow">Archiefcontrole vastgesteld</p>
            <h3>De oude website is gedeeltelijk terug te vinden</h3>
            <p>
              Voor ieder artikel controleren we voortaan drie bronnen: de
              geredde PDF, de bewaarde Weebly-pagina en de afzonderlijk
              gearchiveerde beeldbestanden. Verschillen worden gemarkeerd voor
              handmatige beoordeling.
            </p>
          </div>
          <dl>
            <div>
              <dt>3.813</dt>
              <dd>bewaarde URL’s van het domein</dd>
            </div>
            <div>
              <dt>1.443</dt>
              <dd>JPG-vermeldingen in het webarchief</dd>
            </div>
            <div>
              <dt>24</dt>
              <dd>opnamen van pilotartikel 07.1.1</dd>
            </div>
          </dl>
          <p className="wayback-caveat">
            Aantallen bevatten ook dubbele opnamen en vormgevingsbeelden. Ze
            bewijzen dus niet dat iedere originele foto is bewaard; dat wordt
            per artikel gecontroleerd.
          </p>
        </aside>

        <div className="audit-panel">
          <div className="audit-title">
            <span className="audit-badge">LATERE FASE</span>
            <h3>De content-audit</h3>
            <p>
              Eerst wordt de hele website integraal gereconstrueerd. Pas daarna
              wordt de historische inhoud gecontroleerd en geactualiseerd.
            </p>
          </div>
          <div className="audit-grid">
            <article>
              <span>01</span>
              <strong>Webartikel controleren</strong>
              <p>
                Vaststellen of tekst, afbeeldingen, bijschriften en
                oorspronkelijke volgorde correct zijn gereconstrueerd.
              </p>
            </article>
            <article>
              <span>02</span>
              <strong>Techniek controleren</strong>
              <p>
                Werkwijzen, materialen, productkeuzes en bouwkundige aannames
                toetsen aan de huidige praktijk.
              </p>
            </article>
            <article>
              <span>03</span>
              <strong>Normen actualiseren</strong>
              <p>
                Franse regelgeving, normen en officiële verwijzingen opnieuw
                verifiëren en van een controledatum voorzien.
              </p>
            </article>
            <article>
              <span>04</span>
              <strong>Menselijke eindcontrole</strong>
              <p>
                Een inhoudelijk beoordelaar beslist wat behouden, herschreven,
                aangevuld of ingetrokken moet worden.
              </p>
            </article>
          </div>
        </div>

        <aside className="audit-principle">
          <strong>Uitgangspunt</strong>
          <p>
            AI kan het intensieve voorwerk en de afwijkingscontrole versnellen.
            De inhoudelijke verantwoordelijkheid blijft bij een deskundige
            menselijke auditor.
          </p>
        </aside>
      </section>

      <section className="batch-section" id="batch-01">
        <div>
          <p className="eyebrow">Zelfstandige verwerking · batch 01</p>
          <h2>Vijf nieuwe webartikelen</h2>
          <p>
            Deze documenten zijn integraal uit de PDF gereconstrueerd. De
            schrijfstem, voorbeelden, terzijdes en technische details van de
            auteur zijn behouden.
          </p>
        </div>
        <div className="batch-grid">
          {[
            ["23.2", "Alles in huis is scheef", "alles-in-huis-is-scheef", "Geen bronbeelden"],
            ["08.1.8", "Betegelen van een oude plankenvloer", "betegelen-van-oude-vloeren", "2 bronbeelden"],
            ["06.5.6", "Condensproblemen bij dakramen", "condensproblemen-bij-dakramen", "2 bronbeelden"],
            ["15.4.1", "Dakbuitenisolatie", "dakbuitenisolatie", "2 bronbeelden"],
            ["23.5", "Gaten in hout opvullen", "gaten-in-hout-opvullen", "4 bronbeelden"],
          ].map(([code, title, slug, meta]) => (
            <a href={`/artikelen/${slug}`} key={slug}>
              <span>{code}</span>
              <strong>{title}</strong>
              <small>{meta} · 2 pagina’s</small>
              <b aria-hidden="true">→</b>
            </a>
          ))}
        </div>
      </section>

      <section className="batch-section batch-section-new" id="batch-02">
        <div>
          <p className="eyebrow">Zelfstandige verwerking · batch 02</p>
          <h2>Vijf volgende webartikelen</h2>
          <p>
            Ook deze vijf tweepagina-documenten zijn integraal uit de geredde
            PDF’s gereconstrueerd. De afbeeldingen staan weer bij het
            bijbehorende artikel; samenvattingen zijn vervangen door de
            volledige brontekst.
          </p>
        </div>
        <div className="batch-grid">
          {[
            ["09.1", "Deuren opknappen", "deuren-opknappen", "2 bronbeelden"],
            ["06.5.1", "Keuze van plaats, grootte en model raam", "keuze-van-een-raam", "Geen bronbeelden"],
            ["08.1.7", "Krakende vloeren", "krakende-vloeren", "2 bronbeelden"],
            ["09.4.4", "Uitgezakte luiken weer in vorm brengen", "uitgezakte-luiken", "2 bronbeelden"],
            ["20.1", "Mijn gereedschapskisten", "standaard-gereedschappen", "1 bronbeeld"],
          ].map(([code, title, slug, meta]) => (
            <a href={`/artikelen/${slug}`} key={slug}>
              <span>{code}</span>
              <strong>{title}</strong>
              <small>{meta} · 2 pagina’s</small>
              <b aria-hidden="true">→</b>
            </a>
          ))}
        </div>
      </section>

      <section className="about" id="over">
        <div>
          <p className="eyebrow">Van V0.7 naar V1.0</p>
          <h2>Een zorgvuldig vervolg op het oorspronkelijke werk</h2>
        </div>
        <div className="version-steps">
          <article className="complete">
            <span>01</span>
            <strong>Gered</strong>
            <p>118 PDF’s, 579 pagina’s en de oorspronkelijke afbeeldingen.</p>
          </article>
          <article className="active">
            <span>02</span>
            <strong>Ontsloten · V0.7</strong>
            <p>Doorzoekbaar, geordend volgens de oorspronkelijke menulogica.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Content-audit</strong>
            <p>Techniek, materialen, verwijzingen en Franse normen toetsen.</p>
          </article>
          <article>
            <span>04</span>
            <strong>Publiceren · V1.0</strong>
            <p>Pas na de inhoudelijke controle wordt dit actuele advies.</p>
          </article>
        </div>
        <div className="credits">
          <p>
            Oorspronkelijke inhoud door <strong>Christian von Klösterlein</strong>,
            met belangrijke bijdragen van <strong>Rob van der Meulen</strong>,
            onder meer over elektriciteit.
          </p>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">
          <span className="brand-sign" aria-hidden="true">KiF</span>
          <span>
            <strong>Klussen in Frankrijk</strong>
            <small>Versie 0.7 · archiefontsluiting</small>
          </span>
        </a>
        <p>Historisch bronmateriaal · controleer actuele normen en regelgeving</p>
        <a href="#top">Naar boven ↑</a>
      </footer>

      {selected && (
        <div
          className="document-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="document-modal-title"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelected(null);
          }}
        >
          <article>
            <button
              className="modal-close"
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Sluiten"
            >
              ×
            </button>
            {selected.image && (
              <img
                src={`/source-pages/${selected.image}`}
                alt={`Eerste pagina van ${selected.title}`}
              />
            )}
            <div className="modal-copy">
              <p className="eyebrow">
                Archief {formatCode(selected.archiveCode)} ·{" "}
                {pageLabel(selected.pages)}
              </p>
              <h2 id="document-modal-title">{selected.title}</h2>
              <p>
                Dit is het oorspronkelijke, geredde PDF-document. De inhoud is
                nog niet geactualiseerd voor V1.0.
              </p>
              {selected.id === "wanden-van-gipsplaten" && (
                <a
                  className="modal-pilot-link"
                  href="/artikelen/wanden-van-gipsplaten"
                >
                  Lees als volledig webartikel <span aria-hidden="true">→</span>
                </a>
              )}
              <a href={selected.url} target="_blank" rel="noreferrer">
                Open volledige PDF <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
