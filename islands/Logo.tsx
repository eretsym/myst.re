import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useEffect } from "https://esm.sh/preact@10.18.1/hooks";

const arr: string[] = [
  `myst.re`,
  `myst.re`,
  `myst.re`,
  `myst.re`,
  `myst.re`,
  `myst.re`,
  `myst.re`,
  `myst.re`,
  `myst.re`,
  `myst.re`,
  `myst.re`,
  `yst.re.`,
  `st.re..`,
  `t.re...`,
  `.re....`,
  `re.....`,
  `e......`,
  `.......`,
  `......m`,
  `.....my`,
  `....mys`,
  `...myst`,
  `..myst.`,
  `.myst.r`,
];

// const arr: string[] = [
//   `mystère`,
//   `myst.re`,
// ];

export function Logo() {
  const [text, setText] = useState("loading");
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
    }, 500);
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
