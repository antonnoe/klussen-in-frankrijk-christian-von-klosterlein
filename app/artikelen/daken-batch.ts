import rawArticles from "./daken-batch-data.json";
import type { RestoredArticleData } from "./restored-article";

export const dakenBatch =
  rawArticles as Record<string, RestoredArticleData>;
