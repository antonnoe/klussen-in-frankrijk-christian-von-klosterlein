import rawArticles from "./dakramen-batch-data.json";
import type { RestoredArticleData } from "./restored-article";

export const dakramenBatch =
  rawArticles as Record<string, RestoredArticleData>;
