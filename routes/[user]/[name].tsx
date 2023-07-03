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
      `https://raw.githubusercontent.com/${user}/${name}/main/readme.md`,
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
      <div>Hello {props.params.user} {props.params.name}</div>
      <div
        class="markdown-body"
        dangerouslySetInnerHTML={{ __html: render(props.data.body) }}
      />
    </div>
  );
}
