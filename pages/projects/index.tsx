import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useQuery } from "react-query";
import { useCosmos } from "~/providers/CosmosProvider";

const Projects: NextPage = () => {
  const { queryService } = useCosmos();
  const { data: projects } = useQuery(["projects", queryService], () => queryService.getNewProjects("transform"));

  return (
    <>
      <Head>
        <title>Avipad</title>
      </Head>
      <div className="w-full mx-auto max-layout min-h-screen pt-32 pb-12 flex flex-col px-4 relative gap-8">
        <div className="w-[15rem] h-[15rem] absolute top-[8rem] right-[5rem] bg-kashmir-blue-500 rounded-full blur-3xl" />
        <h2 className="text-4xl w-full text-center relative z-10">Projects</h2>
        <div className="w-full grid grid-cols-auto-280 relative z-1 gap-4 gap-y-6 lg:gap-y-8">
          {projects?.map((project, i) => {
            return (
              <Link
                href={`/project/${project.symbol}`}
                className="bg-gradient-to-b from-java-green-600 via-white to-white rounded-lg px-3 py-4 md:4 gap-4 grid grid-cols-3 hover:from-kashmir-blue-500
                transition-all hover:via-white hover:to-white hover:scale-105 hover:shadow-xl"
                key={`project-${i}`}
              >
                <div className=" col-span-3 flex items-center justify-center">
                  <img src={project?.logo?.url} alt={project.name} className="w-[10rem] h-[10rem] object-cover rounded-full" />
                </div>
                <h3 className="col-span-3 mt-4">{project.tokenName}</h3>
                <div>
                  <span className="text-xs text-gray-400">Symbol</span>
                  <p className="text-sm">{project.symbol}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-400">Max Cap</span>
                  {/* <p className="text-sm">{formatNumber(project.initialSuply)}</p> */}
                  <p className="text-sm">{project.options.launch_type?.new?.cap}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-400">Decimals</span>
                  <p className="text-sm">{project.decimals}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
