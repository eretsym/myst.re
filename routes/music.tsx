import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Button } from "../components/Button.tsx";
import { Header } from "../components/Header.tsx";

export default function Music() {
  return (
    <div class="mx-auto">
      <Header/>
      <div class="max-w-screen-md mx-auto flex flex-row justify-around">
        <div className={"flex flex-col content-center"}>
          <h1 className={"font-bold"}>Hyperwav</h1>
          <h2 className={"italic"}>Chillwave</h2>
          <h3>2019 - Now</h3>
          <hr className={"my-3"}/>
          <a href={"https://soundcloud.com/hyperwavmusic"} className={"hover:bg-white hover:text-black"}>Soundcloud</a>
          <a href={"https://hyperwavmusic.bandcamp.com/"} className={"hover:bg-white hover:text-black"}>Bandcamp</a>
          <a href={"https://open.spotify.com/intl-fr/artist/0geHGCdO2rBJVvnhQDON9V?si=RSt13Pm_QICvPuPu3va-LQ"} className={"hover:bg-white hover:text-black"}>Spotify</a>
        </div>
        <div className={"flex flex-col content-center"}>
          <h1 className={"font-bold"}>cn96</h1>
          <h2 className={"italic"}>Lo-fi house</h2>
          <h3>2023 - Now</h3>
          <hr className={"my-3"}/>
          <a href={"https://soundcloud.com/cn96"} className={"hover:bg-white hover:text-black"}>Soundcloud</a>
        </div>
      </div>
    </div>
  );
}
