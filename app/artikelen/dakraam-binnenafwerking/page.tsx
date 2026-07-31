import { RestoredArticle } from "../restored-article";
import { dakramenBatch } from "../dakramen-batch";

export default function Page() {
  return <RestoredArticle article={dakramenBatch["dakraam-binnenafwerking"]} />;
}
