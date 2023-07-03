import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
        <ul>
          <li>
            <a href="remarkjs/remark-math">remarkjs/remark-math</a>
          </li>
          <li>
            <a href="https://github.com/remarkjs/remark-math">
              https://github.com/remarkjs/remark-math
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
