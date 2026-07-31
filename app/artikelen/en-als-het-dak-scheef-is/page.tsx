import { RestoredArticle } from "../restored-article";
import { dakenBatch } from "../daken-batch";

export default function Page() {
  return <RestoredArticle article={dakenBatch["en-als-het-dak-scheef-is"]} />;
}
