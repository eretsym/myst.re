import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Button } from "../components/Button.tsx";
import { Header } from "../components/Header.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="mx-auto">
      <Header />
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center gap-3">
      <hr className={"w-full"}/>
        <div>
          hi, my nickname is mystère, i am a 23 years old french guy. interested
          in low-level programming, hacking, retro-engineering and computer
          science as a whole since childhood, i work on multiple projects
          related to these fields in favor of a career following this
          interesting journey. i am a day dreamer with a very analytic view on
          life, which grants me with creativity and logic combo that i really
          like.
        </div>
        <div>
          thus i started making music as a hobby in 2017 and publicly released
          my first track Quantum Drive under the nickname Hyperwav in 2019,
          following my friends feedback. as a feeling driven kind of person i
          like to express emotion into sound. recently i started another music
          project named cn96 fucusing on lo-fi house beats.
        </div>
        <div className={"overflow-hidden h-96 w-full relative"}>
          <img className={"object-cover absolute -top-80"} src={"/guy.jpg"} alt="me" />
        </div>
      </div>
    </div>
  );
}
