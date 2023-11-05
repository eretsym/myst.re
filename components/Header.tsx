import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Logo } from "../islands/Logo.tsx";

export function Header() {
  return (
    <div className={"flex flex-col justify-center max-w-screen-md mx-auto mb-3"}>
      <div class="bg-black flex gap-3 px-6 py-3 text-white justify-center">
        <Logo/>
        <a className={"hover:text-black hover:bg-white"} href={"/blog"}>blog</a>
        <a className={"hover:text-black hover:bg-white"} href={"/music"}>music</a>
        <a className={"hover:text-black hover:bg-white"} href={"/contact"}>contact</a>
        <a className={"hover:text-black hover:bg-white"} href={"/projects"}>projects</a>
      </div>
      <hr className={"w-full"}/>
    </div>
  );
}
