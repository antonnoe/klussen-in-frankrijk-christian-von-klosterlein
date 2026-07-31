import { deurenRamenBatch } from "../deuren-ramen-batch";
import { RestoredArticle } from "../restored-article";

export default function Page() {
  return (
    <RestoredArticle
      article={deurenRamenBatch["dubbel-glas-of-dubbele-ramen"]}
    />
  );
}
