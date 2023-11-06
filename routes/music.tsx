import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Button } from "../components/Button.tsx";
import { Header } from "../components/Header.tsx";

export default function Music() {
  return (
    <div class="mx-auto">
      <Header />
      <div class="max-w-screen-md mx-auto grid grid-cols-2 gap-3">
        <div className={"flex flex-col gap-3"}>
          <div>
          <h1 className={"font-bold"}>Hyperwav</h1>
          <h2>dreamy electronic lo-fi sounds inspired by retro-futuristic and sci-fi aesthetics. hywerwav was created in 2019</h2>
          </div>
          <div className={"flex flex-col"}>
            <h2 className={"font-bold"}>links</h2>
            
            <div className={"grid grid-cols-3 "}>
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
            <a
              href={"https://music.youtube.com/channel/UCr1TACblgK6JvEDE_zJtHZw"}
              className={"hover:bg-white hover:text-black"}
            >
              YT Music
            </a>
            <a
              href={"https://music.apple.com/us/artist/hyperwav/1510269111"}
              className={"hover:bg-white hover:text-black"}
            >
              Apple Music
            </a>
            <a
              href={"https://deezer.page.link/2s3LwVD9UDmeDcS98"}
              className={"hover:bg-white hover:text-black"}
            >
              Deezer
            </a>
            </div>
          </div>
          <div className={"flex flex-col"}>
          <h2 className={"font-bold"}>tracklist</h2>
          
          <a
            href={"https://soundcloud.com/hyperwavmusic/kilimanjaro"}
            className={"hover:bg-white hover:text-black"}
          >
            kilimanjaro
          </a>
          <a
            href={"https://soundcloud.com/hyperwavmusic/departure"}
            className={"hover:bg-white hover:text-black"}
          >
            departure
          </a>
          <a
            href={"https://soundcloud.com/hyperwavmusic/swim"}
            className={"hover:bg-white hover:text-black"}
          >
            swim
          </a>
          <a
            href={"https://soundcloud.com/hyperwavmusic/pictures"}
            className={"hover:bg-white hover:text-black"}
          >
            pictures
          </a>
          <a
            href={"https://soundcloud.com/hyperwavmusic/soulless"}
            className={"hover:bg-white hover:text-black"}
          >
            soulless
          </a>
          <a
            href={"https://soundcloud.com/hyperwavmusic/digital-dancer"}
            className={"hover:bg-white hover:text-black"}
          >
            digital-dancer
          </a>
          <a
            href={"https://soundcloud.com/hyperwavmusic/quantum-drive"}
            className={"hover:bg-white hover:text-black"}
          >
            quantum-drive
          </a>
          </div>
          <img className={"h-40 object-cover"} src={"/hyperwav.jpg"} />
        </div>
        <div className={"flex flex-col gap-3"}>
          <div>
          <h1 className={"font-bold"}>cn96</h1>
          <h2>dreamy underground electronic lo-fi sounds inspired by night life. project started in october 2023.</h2>
          </div>
          <div className={"flex flex-col"}>
            <h2 className={"font-bold"}>links</h2>
            
            <div className={"grid grid-cols-3 "}>
            <a
              href={"https://soundcloud.com/cn96"}
              className={"hover:bg-white hover:text-black"}
            >
              Soundcloud
            </a>
            </div>
          </div>
          <div className={"flex flex-col"}>
          <h2 className={"font-bold"}>tracklist</h2>
          
          <a
            href={"https://soundcloud.com/cn96/1146pm"}
            className={"hover:bg-white hover:text-black"}
          >
            1146pm
          </a>
          </div>
          <img className={"h-40 object-cover"} src={"/cn96.jpg"} />
        </div>
      </div>
    </div>
  );
}
