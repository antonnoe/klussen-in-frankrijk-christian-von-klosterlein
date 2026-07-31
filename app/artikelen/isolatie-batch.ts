import rawArticles from "./isolatie-batch-data.json";
import type { RestoredArticleData } from "./restored-article";

export const isolatieBatch =
  rawArticles as Record<string, RestoredArticleData>;
