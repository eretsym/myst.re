import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Logo } from "../islands/Logo.tsx";

export function Header() {
  return (
    <div class="bg-black flex gap-4 px-6 py-8 text-white">
      <Logo/>
      <a className={"hover:text-black hover:bg-white"} href={"/blog"}>blog</a>
      <a className={"hover:text-black hover:bg-white"} href={"/music"}>music</a>
      <a className={"hover:text-black hover:bg-white"} href={"/photography"}>photography</a>
      <a className={"hover:text-black hover:bg-white"} href={"/contact"}>contact</a>
      <a className={"hover:text-black hover:bg-white"} href={"/projects"}>projects</a>
    </div>
  );
}
