import { skills } from "@/constants"
import Image from "next/image"

const Skills = () => {
  return (
    <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-12 px-2">
      {skills.map((item, index) => (
        <li key={index} className="bg-white-3 py-3 px-8 rounded-[20px] shadow-lg shadow-black/25 grid grid-cols-2 justify-center items-center hover:scale-105 duration-300">
          <Image
            src={item.icon}
            alt={item.label}
            width={60}
            height={60}
          />
          <p className="font-bold text-2xl">{item.label}</p>
        </li>
      ))}
    </ul>
  )
}

export default Skills