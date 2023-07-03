import { unified } from "https://esm.sh/unified@10.1.2";
import remarkParse from "https://esm.sh/remark-parse@10.0.2";
import remarkRehype from "https://esm.sh/remark-rehype@10.1.0";
import rehypeKatex from "https://esm.sh/rehype-katex@6.0.3";
import rehypeSanitize from "https://esm.sh/rehype-sanitize@5.0.1";
import rehypeStringify from "https://esm.sh/rehype-stringify@9.0.3";
// import {common, createStarryNight} from 'https://esm.sh/@wooorm/starry-night@2'
// const starryNight = await createStarryNight(common)

export default function render(input: string) {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .processSync(input)
    .toString();
}
