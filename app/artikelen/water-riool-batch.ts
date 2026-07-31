import rawArticles from "./water-riool-batch-data.json";
import type { RestoredArticleData } from "./restored-article";

export const waterRioolBatch =
  rawArticles as Record<string, RestoredArticleData>;
