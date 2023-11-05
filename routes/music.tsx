import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Button } from "../components/Button.tsx";
import { Header } from "../components/Header.tsx";

export default function Music() {
  return (
    <div class="mx-auto">
      <Header />
      <div class="max-w-screen-md mx-auto flex justify-around align-center">
        <div className={"flex flex-col"}>
            <h1 className={"font-bold"}>Hyperwav</h1>
            <h2 className={"italic"}>Chillwave</h2>
          <hr className={"my-3 w-3"} />
          <a
            href={"https://soundcloud.com/hyperwavmusic"}
            className={"hover:bg-white hover:text-black"}
          >
            Soundcloud
          </a>
          <a
            href={"https://hyperwavmusic.bandcamp.com/"}
            className={"hover:bg-white hover:text-black"}
          >
            Bandcamp
          </a>
          <a
            href={"https://open.spotify.com/intl-fr/artist/0geHGCdO2rBJVvnhQDON9V?si=RSt13Pm_QICvPuPu3va-LQ"}
            className={"hover:bg-white hover:text-black"}
          >
            Spotify
          </a>
          <hr className={"my-3 w-3"} />
          <a
            href={"https://soundcloud.com/hyperwavmusic/kilimanjaro"}
            className={"hover:bg-white hover:text-black"}
          >
            https://soundcloud.com/hyperwavmusic/kilimanjaro
          </a>
        </div>
        <div className={"flex flex-col"}>
            <h1 className={"font-bold"}>cn96</h1>
            <h2 className={"italic"}>Lo-fi house</h2>

          <hr className={"my-3 w-3"} />
          <a
            href={"https://soundcloud.com/cn96"}
            className={"hover:bg-white hover:text-black"}
          >
            Soundcloud
          </a>
          <hr className={"my-3 w-3"} />
          <a
            href={"https://soundcloud.com/cn96/1146pm"}
            className={"hover:bg-white hover:text-black"}
          >
            https://soundcloud.com/cn96/1146pm
          </a>
        </div>
      </div>
    </div>
  );
}
