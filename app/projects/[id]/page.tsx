'use client';

import { Button } from "@/components/ui/button";
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface ProjectProps {
  id: string;
  title: string;
  techno: string[];
  description: string;
  screen: { bg: string; icon: string; };
  img: string;
  carroussel: string[];
  url: string;
}

const Project = () => {
  const { id } = useParams();

  const project: ProjectProps | undefined = projects.find((project) => project.id === id);

  return (
    <section className="space-y-6 mb-16">
      <div className="flex max-lg:flex-col gap-4 lg:justify-between">
        <div className="space-y-4">
          <h1 className=" font-paytone text-5xl uppercase md:text-6xl lg:text-7xl">{project?.title}</h1>
          <ul className="flex gap-2 flex-wrap">
            {project?.techno.map((item, index) => (
              <Button key={index} className="text-sm rounded-full bg-black font-light p-4 cursor-default lg:text-base">
                {item}
              </Button>
            ))}
          </ul>
        </div>
        <Link href={`https://${project?.url}`} target="_blank" className="border border-black py-2 px-6 rounded-full font-semibold hover:bg-black hover:text-white-3 duration-300 min-w-[250px] max-w-[300px] h-12 flex items-center justify-center lg:text-xl">
          Voir le site
        </Link>
      </div>
      <p className="font-light mt-6 lg:text-xl">{project?.description}</p>
      <div className={`w-full h-[300px] sm:h-[400px] bg-[${project?.screen.bg}] rounded-xl flex items-center justify-center`}>
        <div className="relative size-[100px] sm:size-[150px] lg:size-[250px]">
          <Image
            src={`/assets/images/${project?.screen.icon}`}
            alt="icon"
            fill
            className="object-cover"
          />
        </div>
        <h2 className="font-paytone text-white-3 text-2xl sm:text-5xl lg:text-7xl xl:text-8xl">{project?.title}</h2>
      </div>
      <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
        {project?.carroussel.map((item, index) => (
          <div key={index} className="relative w-full h-[300px] sm:h-[200px]">
            <Image
              src={`/assets/images/${item}`}
              alt="image"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project