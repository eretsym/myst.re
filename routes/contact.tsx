import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Button } from "../components/Button.tsx";
import { Header } from "../components/Header.tsx";

interface EntryProps {
  title: string;
  object: string;
}

function Entry(props: EntryProps) {
  return (
    <div>
      <h1 className={"font-bold"}>{props.title}</h1>
      <h2 className={""}>{props.object}</h2>
    </div>
  );
}

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="mx-auto">
      <Header />
      <div class="max-w-screen-md mx-auto flex flex-col gap-3">
        <Entry title="email" object="contact@myst.re"/>
        <Entry title="discord" object="eretsym"/>
        <img className={"h-40 object-cover"} src={"/contact.jpg"} />
      </div>
    </div>
  );
}
