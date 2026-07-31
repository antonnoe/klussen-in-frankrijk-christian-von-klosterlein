import { RestoredArticle } from "../restored-article";
import { isolatieBatch } from "../isolatie-batch";

export default function Page() {
  return (
    <RestoredArticle article={isolatieBatch["zolderisolatie-en-betimmering"]} />
  );
}
