import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Header />
      <div className={"grid place-content-center justify-items-center text-white"}>
        <h1 className={"text-9xl"}>404</h1>
        <a
          className={"text-white hover:bg-white hover:text-black"}
          href={"/"}
        >
          better go home
        </a>
      </div>
    </>
  );
}
