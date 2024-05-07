import Link from "next/link";

interface CardProps {
  items: { img: string; title: string, id: number }[];
}

const Card: React.FC<CardProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <div key={item.id} style={{ backgroundImage: `url(${item.img})` }} className="w-full h-[300px] bg-cover bg-center bg-no-repeat rounded-xl flex flex-col items-center justify-center">
          <div className="size-full opacity-0 hover:opacity-100 bg-black/50 flex flex-col items-center justify-center gap-6 rounded-xl duration-300">
            <h2 className="font-paytone text-4xl text-white-1">{item.title}</h2>
            <Link href={`/projects/${item.id}`} className="bg-black border-2 border-white-3 rounded-full text-xl text-white-1 px-6 py-2">Voir Plus</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card