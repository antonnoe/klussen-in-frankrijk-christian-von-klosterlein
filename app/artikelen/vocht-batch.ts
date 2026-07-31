import rawArticles from "./vocht-batch-data.json";
import type { RestoredArticleData } from "./restored-article";

export const vochtBatch =
  rawArticles as Record<string, RestoredArticleData>;
