'use client';

import { Button } from "@/components/ui/button";
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

interface ProjectProps {
  id: string;
  title: string;
  techno: string[];
  description: string;
  screen: string;
  img: string;
  carroussel: string[];
  url: string;
  finish: boolean;
}

const Project = () => {
  const { id } = useParams();
  const router = useRouter();

  const project: ProjectProps | undefined = projects.find((project) => project.id === id);

  return (
    <section className="space-y-6 mb-16">
      <Button className="rounded-full text-black bg-transparent border-2 border-black pl-0 hover:bg-black text-base hover:text-white-3 duration-300" onClick={() => router.push('/projects')}>
        <IoMdArrowRoundBack size={40} color="white" className="bg-black rounded-full mr-2" />
        Retour aux projets
      </Button>
      <div className="flex max-md:flex-col gap-4 lg:justify-between">
        <div className="space-y-4">
          <h1 className=" font-paytone text-4xl uppercase md:text-6xl lg:text-7xl">{project?.title}</h1>
          <ul className="flex gap-2 flex-wrap xl:max-w-[85%]">
            {project?.techno.map((item, index) => (
              <Button key={index} className="text-sm rounded-full bg-black font-light p-4 cursor-default lg:text-base">
                {item}
              </Button>
            ))}
          </ul>
        </div>
        <Link href={`https://${project?.url}`} target="_blank" className="border border-black py-2 px-6 rounded-full font-semibold hover:bg-black hover:text-white-3 duration-300 min-w-[250px] lg:max-w-[300px] h-12 flex items-center justify-center lg:text-xl">
          Voir le site
        </Link>
      </div>
      {project?.finish ? (
        <>
          <p className="font-light mt-6 lg:text-xl">{project?.description}</p>
          <div className='relative w-full h-[300px] sm:h-[400px] lg:h-[600px]'>
            <Image
              src={`/assets/images/${project.screen}`}
              alt="screen"
              fill
              className="object-cover rounded-xl"
            />
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
        </>
      ) : (
        <div className="w-full text-center text-3xl sm:text-5xl pt-24 font-bold">
          <h1>Projet non finis</h1>
        </div>
      )}
    </section>
  )
}

export default Project