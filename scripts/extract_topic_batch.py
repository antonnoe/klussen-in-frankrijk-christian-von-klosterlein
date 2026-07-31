#!/usr/bin/env python3
"""Extract a controlled topic batch from the rescued Weebly print PDFs."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

import fitz


SITE_ROOT = Path(__file__).resolve().parents[1]
PDF_ROOT = Path("/workspace/scratch/a14d55f478bb/archive/klussen in Frankrijk")

BATCHES = {
    "deuren-ramen": {
        "output": "deuren-ramen-batch-data.json",
        "articles": [
    {
        "pdf": "deuren sluitend maken.pdf",
        "slug": "deuren-sluitend-maken",
        "code": "09.1.1",
        "title": "Deuren sluitend maken",
        "pages": 6,
        "sourceUrl": "https://drive.google.com/file/d/1URRlofbuQ9JiHpi3wpWVtoaAE9O2pv6d/view?usp=drivesdk",
    },
    {
        "pdf": "hang en sluitwerk.pdf",
        "slug": "hang-en-sluitwerk",
        "code": "09.1.2",
        "title": "Hang- en sluitwerk",
        "pages": 8,
        "sourceUrl": "https://drive.google.com/file/d/1Jt3ApGw5WjA1pmIeZr3xoxGlpLJ9WzUT/view?usp=drivesdk",
    },
    {
        "pdf": "ramen opknappen.pdf",
        "slug": "ramen-opknappen",
        "code": "09.2.1",
        "title": "Ramen opknappen",
        "pages": 2,
        "sourceUrl": "https://drive.google.com/file/d/1z3xDLOMzqBPo1p9S-GJBFY1TK3R49tME/view?usp=drivesdk",
    },
    {
        "pdf": "nieuwe ramen plaatsen.pdf",
        "slug": "nieuwe-ramen-plaatsen",
        "code": "09.2.2",
        "title": "Nieuwe ramen plaatsen",
        "pages": 6,
        "sourceUrl": "https://drive.google.com/file/d/1kMKwkguPnFuBeBjwDHDxuaVb-TdKpgES/view?usp=drivesdk",
    },
    {
        "pdf": "dubbel glas of dubbele ramen.pdf",
        "slug": "dubbel-glas-of-dubbele-ramen",
        "code": "09.2.3",
        "title": "Dubbel glas, dubbele ramen of niet?",
        "pages": 4,
        "sourceUrl": "https://drive.google.com/file/d/1mi85GqJ4LutdbcgjVk7OaaLZyVyjlPUQ/view?usp=drivesdk",
    },
        ],
    },
    "vocht": {
        "output": "vocht-batch-data.json",
        "articles": [
            {
                "pdf": "vochtproblemen en hun bestrijding.pdf",
                "slug": "vochtproblemen-en-hun-bestrijding",
                "code": "17",
                "title": "Vochtproblemen en hun bestrijding",
                "pages": 2,
                "sourceUrl": "https://drive.google.com/file/d/1n_Pnw1Ns2IJXNJ_VbkKWNmXAcMJQ5iJq/view?usp=drivesdk",
            },
            {
                "pdf": "oorzaken van vochtproblemen.pdf",
                "slug": "oorzaken-van-vochtproblemen",
                "code": "17.1",
                "title": "Oorzaken van vochtproblemen",
                "pages": 4,
                "sourceUrl": "https://drive.google.com/file/d/1jIgWxD2hhjwmmwmWg-UeD-9L_ptr1Nu7/view?usp=drivesdk",
            },
            {
                "pdf": "optrekkend vocht.pdf",
                "slug": "optrekkend-vocht",
                "code": "17.2",
                "title": "Optrekkend vocht",
                "pages": 7,
                "sourceUrl": "https://drive.google.com/file/d/1Tr0hOEFo1wg5UW532jVbZYzGNzcoMcIs/view?usp=drivesdk",
            },
            {
                "pdf": "maatregelen bij vochtdoorslag.pdf",
                "slug": "maatregelen-bij-vochtdoorslag",
                "code": "17.3",
                "title": "Maatregelen bij vochtdoorslag",
                "pages": 4,
                "sourceUrl": "https://drive.google.com/file/d/1KP5i4mG6rUfNiRkPCfB1TlabCINvXOgd/view?usp=drivesdk",
            },
            {
                "pdf": "condensvocht.pdf",
                "slug": "condensvocht",
                "code": "17.4",
                "title": "Condensvocht",
                "pages": 4,
                "sourceUrl": "https://drive.google.com/file/d/1jNS4DmuNn4m_3wpXCtkeb4lTvLUsSxJ-/view?usp=drivesdk",
            },
            {
                "pdf": "binnenafwerking van vochtige muren.pdf",
                "slug": "binnenafwerking-van-vochtige-muren",
                "code": "17.5",
                "title": "Binnenafwerking van vochtige muren",
                "pages": 5,
                "sourceUrl": "https://drive.google.com/file/d/1ARO7oaiVxR3qK9ADlFsnGcVSSwkYZa0S/view?usp=drivesdk",
            },
            {
                "pdf": "vochtwering bij binnenisolatie van daken.pdf",
                "slug": "vochtwering-bij-binnenisolatie-van-daken",
                "code": "17.6",
                "title": "Vochtwering bij binnenisolatie van daken",
                "pages": 2,
                "sourceUrl": "https://drive.google.com/file/d/1mCX3FHHMSiie1ILJAT00ppqWCbtIbSUE/view?usp=drivesdk",
            },
            {
                "pdf": "vochtproblemen aandachtspunten en theorie.pdf",
                "slug": "vochtproblemen-aandachtspunten-en-theorie",
                "code": "17.7",
                "title": "Vochtproblemen: aandachtspunten en theorie",
                "pages": 5,
                "sourceUrl": "https://drive.google.com/file/d/1-xWhLrlw2IvQHpkXfwwzRSTPkrU97cDo/view?usp=drivesdk",
            },
            {
                "pdf": "vochtproblemen oplossen.pdf",
                "slug": "vochtproblemen-oplossen",
                "code": "24.2",
                "title": "Vochtproblemen oplossen",
                "pages": 9,
                "sourceUrl": "https://drive.google.com/file/d/1F8VzEF-kYa4AoFuTJCnzcnsT42G2mY44/view?usp=drivesdk",
            },
        ],
    },
}

SKIP_TEXT = (
    "Maak een gratis website met Weebly",
    "volgende →",
    "vorige ←",
)


def lines_to_text(block: dict) -> str:
    lines = [
        "".join(span["text"] for span in line["spans"]).strip()
        for line in block.get("lines", [])
    ]
    lines = [line for line in lines if line]
    result = ""
    for line in lines:
        if result.endswith("-") and line[:1].islower():
            result = result[:-1] + line
        elif result:
            result += " " + line
        else:
            result = line
    return re.sub(r"\s+", " ", result).strip()


def is_heading(text: str) -> bool:
    if len(text) > 110:
        return False
    if re.match(r"^\d+(?:\.\d+)*\.?\s+\D", text):
        return True
    letters = [char for char in text if char.isalpha()]
    return bool(letters) and text == text.upper()


def clean_heading(text: str, code: str, title: str) -> str:
    normalized = text.replace("\xa0", " ").strip()
    if normalized.startswith(code):
        normalized = normalized[len(code) :].strip()
    return re.sub(r"\s+", " ", normalized).strip() or title


def merge_continuation_blocks(
    paragraphs: list[str], images: list[dict]
) -> tuple[list[str], list[dict]]:
    """Join PDF text blocks that are visibly one continued paragraph."""
    merged: list[str] = []
    old_to_new: dict[int, int] = {}
    image_anchors = {image["afterParagraph"] for image in images}

    for old_index, paragraph in enumerate(paragraphs):
        is_continuation = (
            bool(merged)
            and not paragraph.startswith("## ")
            and not merged[-1].startswith("## ")
            and old_index - 1 not in image_anchors
            and not re.search(r'[.!?:;)\]”’"\']$', merged[-1])
            and paragraph[:1].islower()
        )
        if is_continuation:
            if merged[-1].endswith("-"):
                merged[-1] = merged[-1][:-1] + paragraph
            else:
                merged[-1] += " " + paragraph
            old_to_new[old_index] = len(merged) - 1
        else:
            merged.append(paragraph)
            old_to_new[old_index] = len(merged) - 1

    for image in images:
        image["afterParagraph"] = old_to_new[image["afterParagraph"]]
    return merged, images


def extract_article(meta: dict) -> dict:
    pdf_path = PDF_ROOT / meta["pdf"]
    if not pdf_path.exists():
        raise FileNotFoundError(pdf_path)

    doc = fitz.open(pdf_path)
    if len(doc) != meta["pages"]:
        raise ValueError(f"{pdf_path.name}: expected {meta['pages']} pages, found {len(doc)}")

    output_dir = SITE_ROOT / "public/articles" / meta["slug"]
    output_dir.mkdir(parents=True, exist_ok=True)
    for old in output_dir.glob("source-*"):
        old.unlink()

    paragraphs: list[str] = []
    images: list[dict] = []
    image_number = 0
    skipped_title = False

    for page_number, page in enumerate(doc, start=1):
        blocks = sorted(
            page.get_text("dict")["blocks"],
            key=lambda block: (round(block["bbox"][1], 1), block["bbox"][0]),
        )
        page_image_indices: list[int] = []
        page_images: list[tuple[int, tuple[float, float, float, float]]] = []

        for block in blocks:
            x0, y0, _, y1 = block["bbox"]
            if x0 < 165 or y1 > 810:
                continue

            if block["type"] == 1:
                extension = block.get("ext", "png").lower()
                if extension not in {"png", "jpg", "jpeg", "webp"}:
                    extension = "png"
                filename = f"source-{image_number:03d}.{extension}"
                (output_dir / filename).write_bytes(block["image"])
                images.append(
                    {
                        "file": f"/articles/{meta['slug']}/{filename}",
                        "caption": f"Bronbeeld {image_number + 1} · PDF-pagina {page_number}",
                        "alt": f"Oorspronkelijk bronbeeld bij {meta['title']}",
                        "afterParagraph": max(0, len(paragraphs) - 1),
                        "sourcePage": page_number,
                    }
                )
                page_image_indices.append(len(images) - 1)
                page_images.append((len(images) - 1, tuple(block["bbox"])))
                image_number += 1
                continue

            if y0 < 55:
                continue

            text = lines_to_text(block)
            if not text or text in SKIP_TEXT or text.startswith("file:///"):
                continue
            if "Maak een gratis website met Weebly" in text:
                continue

            font_sizes = [
                span["size"]
                for line in block.get("lines", [])
                for span in line.get("spans", [])
            ]
            max_font_size = max(font_sizes, default=99)
            block_center = (block["bbox"][0] + block["bbox"][2]) / 2
            nearby_images = [
                (index, bbox)
                for index, bbox in page_images
                if bbox[3] - 4 <= y0 <= bbox[3] + 62
            ]
            is_caption = bool(re.match(r"^afb\.", text, flags=re.IGNORECASE))
            is_caption_fragment = bool(nearby_images) and max_font_size <= 6.8
            if is_caption or is_caption_fragment:
                candidates = nearby_images or page_images
                if candidates:
                    index, _ = min(
                        candidates,
                        key=lambda item: abs(
                            block_center - (item[1][0] + item[1][2]) / 2
                        ),
                    )
                    if images[index]["caption"].startswith("Bronbeeld"):
                        images[index]["caption"] = text
                    else:
                        images[index]["caption"] += " " + text
                continue

            compact_code = meta["code"].lstrip("0")
            title_words = meta["title"].replace("-", " ").upper().split()
            looks_like_title = (
                meta["code"] in text
                or compact_code in text
                or (
                    len(text) < 130
                    and sum(word in text.upper() for word in title_words) >= max(2, len(title_words) - 1)
                )
            )
            if not skipped_title and looks_like_title:
                skipped_title = True
                continue

            if is_heading(text):
                paragraphs.append(f"## {clean_heading(text, meta['code'], meta['title'])}")
            else:
                paragraphs.append(text)

        for index in page_image_indices:
            images[index]["afterParagraph"] = min(
                images[index]["afterParagraph"], max(0, len(paragraphs) - 1)
            )

    if not paragraphs:
        raise ValueError(f"{pdf_path.name}: no article text extracted")

    paragraphs, images = merge_continuation_blocks(paragraphs, images)

    deck_source = next(
        (paragraph for paragraph in paragraphs if not paragraph.startswith("## ")),
        meta["title"],
    )
    deck = deck_source if len(deck_source) <= 210 else deck_source[:207].rsplit(" ", 1)[0] + "…"

    return {
        "code": meta["code"],
        "title": meta["title"],
        "deck": deck,
        "sourceUrl": meta["sourceUrl"],
        "sourcePages": meta["pages"],
        "paragraphs": paragraphs,
        "images": images,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--batch", choices=sorted(BATCHES), default="deuren-ramen")
    args = parser.parse_args()
    batch = BATCHES[args.batch]
    articles = {
        meta["slug"]: extract_article(meta) for meta in batch["articles"]
    }
    output_data = SITE_ROOT / "app/artikelen" / batch["output"]
    output_data.write_text(
        json.dumps(articles, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(
        f"{len(articles)} articles, "
        f"{sum(len(article['paragraphs']) for article in articles.values())} text blocks, "
        f"{sum(len(article['images']) for article in articles.values())} images"
    )


if __name__ == "__main__":
    main()
