import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import render from "../../markdown.ts";

interface PageData {
  body: string;
}

export const handler: Handlers<PageData> = {
  async GET(_req, ctx) {
    const user = ctx.params.user;
    const name = ctx.params.name;

    const body = await (await fetch(
      `https://raw.githubusercontent.com/${user}/${name}/main/README.md`,
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
      <div>{props.params.user} / {props.params.name}</div>
      <div
        class="markdown-body"
        dangerouslySetInnerHTML={{ __html: render(props.data.body) }}
      />
    </div>
  );
}
