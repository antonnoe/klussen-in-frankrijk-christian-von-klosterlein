export type RestoredArticleData = {
  code: string;
  title: string;
  deck: string;
  sourceUrl: string;
  sourcePages?: number;
  paragraphs: string[];
  images: {
    file: string;
    caption: string;
    alt: string;
    afterParagraph: number;
  }[];
};

function renderInlineLinks(text: string) {
  const parts = [];
  const pattern = /\[([^\]]+)\]\((\/[^)]+)\)/g;
  let cursor = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) {
      parts.push(text.slice(cursor, match.index));
    }
    parts.push(
      <a href={match[2]} key={`${match[2]}-${match.index}`}>
        {match[1]}
      </a>,
    );
    cursor = pattern.lastIndex;
  }

  if (cursor < text.length) {
    parts.push(text.slice(cursor));
  }

  return parts;
}

export function RestoredArticle({ article }: { article: RestoredArticleData }) {
  return (
    <main className="article-site batch-article" id="top">
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
          <a href="#artikel">Artikel</a>
          <a href={article.sourceUrl} target="_blank" rel="noreferrer">Bron-PDF ↗</a>
        </nav>
      </header>

      <section className="batch-hero">
        <p className="eyebrow">V0.7 · gereconstrueerd webartikel</p>
        <h1>{article.title}</h1>
        <p>{article.deck}</p>
        <dl>
          <div><dt>{article.code}</dt><dd>archiefnummer</dd></div>
          <div><dt>{article.sourcePages ?? 2}</dt><dd>bronpagina’s</dd></div>
          <div><dt>{article.images.length}</dt><dd>bronbeelden</dd></div>
        </dl>
      </section>

      <aside className="article-status">
        <strong>Integrale bronversie hersteld</strong>
        <p>
          De tekst is zonder samenvatting overgenomen, met behoud van de stem,
          voorbeelden en anekdotes van de auteur. De historische inhoud is nog
          niet getoetst aan actuele materialen, bouwpraktijk of Franse normen.
        </p>
      </aside>

      <article className="batch-body" id="artikel">
        <div className="verification-label">
          <span aria-hidden="true">✓</span>
          PDF-structuur en paginaovergangen gecontroleerd
        </div>
        {article.paragraphs.map((paragraph, index) => {
          const anchoredImages = article.images.filter(
            (image) => image.afterParagraph === index,
          );

          return (
            <section className="article-paragraph-block" key={index}>
              {paragraph.startsWith("## ") ? (
                <h2>{renderInlineLinks(paragraph.slice(3))}</h2>
              ) : paragraph.startsWith("### ") ? (
                <h3>{renderInlineLinks(paragraph.slice(4))}</h3>
              ) : (
                <p>{renderInlineLinks(paragraph)}</p>
              )}
              {anchoredImages.length ? (
                <div
                  className={`article-images count-${anchoredImages.length}`}
                  aria-label="Afbeeldingen bij deze tekstpassage"
                >
                  {anchoredImages.map((image) => (
                    <figure key={image.file}>
                      <img src={image.file} alt={image.alt} loading="lazy" />
                      <figcaption>{image.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}
            </section>
          );
        })}

        {!article.images.length ? (
          <aside className="no-source-images">
            Deze bron-PDF bevat geen afzonderlijke afbeeldingen.
          </aside>
        ) : null}

        <aside className="article-endnote">
          <p className="eyebrow">Eerst het volledige archief</p>
          <h2>Audit pas na de integrale reconstructie</h2>
          <p>
            In deze fase blijft de oorspronkelijke inhoud intact. Pas wanneer
            alle PDF-hoofdstukken als webartikel zijn hersteld, begint de
            afzonderlijke controle van techniek, materialen, links en normen.
          </p>
          <a href={article.sourceUrl} target="_blank" rel="noreferrer">
            Bekijk de originele PDF →
          </a>
        </aside>
      </article>

      <footer>
        <a className="brand" href="/">
          <span className="brand-sign" aria-hidden="true">KiF</span>
          <span>
            <strong>Klussen in Frankrijk</strong>
            <small>Versie 0.7 · bronreconstructie</small>
          </span>
        </a>
        <p>Historisch bronmateriaal · controleer actuele normen en regelgeving</p>
        <a href="#top">Naar boven ↑</a>
      </footer>
    </main>
  );
}
