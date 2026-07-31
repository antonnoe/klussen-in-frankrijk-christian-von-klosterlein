import { RestoredArticle } from "../restored-article";
import { vochtBatch } from "../vocht-batch";

export default function Page() {
  return <RestoredArticle article={vochtBatch["vochtproblemen-en-hun-bestrijding"]} />;
}
