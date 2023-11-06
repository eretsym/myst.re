import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Button } from "../components/Button.tsx";
import { Header } from "../components/Header.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

interface ProjectsPageData {
  userProjects: object[];
  n1Projects: object[];
}

interface EntryProps {
  title: string;
  object: string;
  language: string;
  topics: string[];
  private: boolean;
  url: string;
}

function Entry(props: EntryProps) {
  return (
    <div className={"flex flex-col gap-3"}>
      <div>
        <h1 className={"font-bold"}>{props.title} <span className={"font-normal"}>{props.private ? "(private)" : <a href={props.url} className={"hover:bg-white hover:text-black"}>browse repository</a>}</span></h1>
        <h2>{props.object ?? "none"}</h2>
      </div>
      <div>
        <h1 className={"font-bold"}>language</h1>
        <h2>{props.language ?? "none"}</h2>
      </div>
      <div>
        <h1 className={"font-bold"}>topics</h1>
        <div className={"grid grid-cols-3"}>
          {props.topics.length > 0 ? props.topics.map((elem) => (
            <a href={`https://github.com/topics/${elem}`} className={"hover:bg-white hover:text-black"}>{elem}</a>
          )) : "none"}
        </div>
      </div>
      <hr/>
    </div>
  );
}

export const handler: Handlers<ProjectsPageData, ProjectsPageData> = {
  async GET(_req, ctx) {
    const GITHUB_TOKEN = Deno.env.get("GITHUB_TOKEN");
    let res = await fetch("https://api.github.com/users/eretsym/repos", {
      headers: {
        "Authorization": `Bearer ${GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    const userProjects = await res.json();

    res = await fetch("https://api.github.com/orgs/n1rip/repos", {
      headers: {
        "Authorization": `Bearer ${GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const n1Projects = await res.json();

    return ctx.render({ userProjects, n1Projects });
  },
};

export default function projects(props: PageProps<ProjectsPageData>) {
  const count = useSignal(3);
  return (
    <div class="mx-auto">
      <Header />
      <div class="max-w-screen-md mx-auto grid grid-cols-2 gap-3">
        <div className={"flex flex-col gap-3"}>
        {props.data.userProjects.map((elem) => (
          <Entry
            title={
              // @ts-ignore: large response
              elem.full_name
            }
            object={
              // @ts-ignore: large response
              elem.description
            }
            language={
              // @ts-ignore: large response
              elem.language
            }
            topics={
              // @ts-ignore: large response
              elem.topics
            }
            private={
                // @ts-ignore: large response
                elem.private
            }
            url={
                // @ts-ignore: large response
                elem.html_url
            }
          />
        ))}
        </div>
        <div className={"flex flex-col gap-3"}>
        {props.data.n1Projects.map((elem) => (
          <Entry
            title={
              // @ts-ignore: large response
              elem.full_name
            }
            object={
              // @ts-ignore: large response
              elem.description
            }
            language={
              // @ts-ignore: large response
              elem.language
            }
            topics={
              // @ts-ignore: large response
              elem.topics
            }
            private={
                // @ts-ignore: large response
                elem.private
            }
            url={
                // @ts-ignore: large response
                elem.html_url
            }
          />
        ))}
        </div>
      </div>
    </div>
  );
}
