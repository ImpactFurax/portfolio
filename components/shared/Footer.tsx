import { reseaux } from "@/constants";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className='w-full bg-black text-white-1 py-6 font-paytone flex flex-col gap-6 items-center rounded-t-[20px] md:rounded-t-[40px] xl:rounded-t-[60px]'>
      <h2 className="text-3xl md:text-6xl 2xl:text-8xl">Prenons Contact !</h2>
      <p className="font-montserrat md:text-2xl 2xl:text-4xl">bortjean@yahoo.fr</p>
      <h4 className="text-xl md:text-3xl 2xl:text-5xl">Ou sur mes réseaux</h4>
      <div className="flex gap-4">
        {reseaux.slice(1).map((item, index) => (
          <Link href={item.url} key={index} className="border-white border-2 p-3 rounded-full" target="_blank">
            <item.icon className="size-6 xl:size-10" />
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer