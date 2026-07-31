import rawArticles from "./deuren-ramen-batch-data.json";
import type { RestoredArticleData } from "./restored-article";

export const deurenRamenBatch =
  rawArticles as Record<string, RestoredArticleData>;
