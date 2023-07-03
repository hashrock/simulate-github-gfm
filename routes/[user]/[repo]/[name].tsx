import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import render from "../../../markdown.ts";

interface PageData {
  body: string;
}

export const handler: Handlers<PageData> = {
  async GET(_req, ctx) {
    const user = ctx.params.user;
    const repo = ctx.params.repo;
    const name = ctx.params.name;

    const body = await (await fetch(
      `https://raw.githubusercontent.com/${user}/${repo}/main/${name}`,
    )).text();
    return ctx.render({ body });
  },
};

export default function Greet(props: PageProps<PageData>) {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://sindresorhus.com/github-markdown-css/github-markdown.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
        integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
      />
      <style>
        {`
        .markdown-body {
          box-sizing: border-box;
          min-width: 200px;
          max-width: 980px;
          margin: 0 auto;
          padding: 45px;
        }
        `}
      </style>

      <div>{props.params.user} / {props.params.repo} / {props.params.name}</div>
      <div
        class="markdown-body"
        dangerouslySetInnerHTML={{ __html: render(props.data.body) }}
      />
    </div>
  );
}
