import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useEffect } from "https://esm.sh/preact@10.18.1/hooks";

const arr: string[] = [
  `mystère`,
  `.ystère`,
  `m.stère`,
  `my.tère`,
  `mys.ère`,
  `myst.re`,
  `myst.re`,
  `myst.re`,
  `myst.re`,
  `myst.re`,
  `myst.re`,
  `myst.re`,
  `mystè.e`,
  `mystèr.`,
];

export function Logo() {
  const [text, setText] = useState("mystère");
  let i = 0;

  function rotateText() {
    setText(arr[i]);
    i += 1;
    if (i >= arr.length) {
      i = 0;
    }
  }

  useEffect(() => {
    setInterval(() => {
      rotateText();
    }, 200);
  }, [])

  return (
    <a
      id={"logo"}
      class="text-white font-bold hover:text-black hover:bg-white"
      href={"/"}
    >
      {text}
    </a>
  );
}
