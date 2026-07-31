import { RestoredArticle } from "../restored-article";
import { isolatieBatch } from "../isolatie-batch";

export default function Page() {
  return (
    <RestoredArticle
      article={isolatieBatch["isolatie-van-een-niet-bewoonde-zolder"]}
    />
  );
}
