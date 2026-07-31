import { RestoredArticle } from "../restored-article";
import { vochtBatch } from "../vocht-batch";

export default function Page() {
  return <RestoredArticle article={vochtBatch["binnenafwerking-van-vochtige-muren"]} />;
}
