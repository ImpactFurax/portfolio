interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children }) => {
  return (
    <section className="max-w-[1440px] mx-auto mb-32">
      <h2 className='font-paytone text-4xl md:text-5xl xl:text-[64px]'>{title}</h2>
      <h4 className='font-light font-montserrat text-md md:text-lg xl:text-2xl'>{subtitle}</h4>
      {children}
    </section>
  )
}

export default Section