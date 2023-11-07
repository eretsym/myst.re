import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Header />
      <div className={"max-w-screen-md mx-auto flex flex-col gap-3"}>
        <div>
        <h1 className={"font-bold"}>404</h1>
        <a
          className={"text-white hover:bg-white hover:text-black"}
          href={"/"}
        >
          better go home
        </a>
        </div>
      </div>
    </>
  );
}
