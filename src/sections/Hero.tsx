import Image from "next/image";
import background from "@/assets/images/thirdBackground.jpg";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative flex justify-center items-center w-full h-[70vh] md:h-[60vh] lg:h-[80vh] px-4 py-3 md:px-20 md:py-4 lg:px-40 2xl:px-44 lg:py-4">
      <div className="bg-image absolute w-full h-full">
        <Image
          src={background}
          alt="Sr Aqua and Pet House"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="content w-full flex flex-col justify-center gap-5 z-10">
        <h1 className="text-primary font-bold text-xl md:text-2xl lg:text-3xl uppercase animate-appear">
          Welcome to <br /> Sr Aqua and Pet House
        </h1>
        <h2 className="font-extrabold font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary">
          Trust Begins <br /> With Us
        </h2>
        <p className="text-primary md:w-[80%] xl:w-[50%] md:text-lg lg:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          nihil possimus deleniti eveniet quas eos ad laboriosam magnam, totam
          provident.
        </p>
        <Link
          href={"/about"}
          className="px-4 py-2 bg-secondary text-primary w-max rounded-md hover:text-secondary hover:bg-primary transition duration-300 mt-5 md:text-lg lg:text-xl flex justify-center items-center gap-3 hover:gap-5"
        >
          Learn More <FaArrowRightLong />
        </Link>
      </div>
    </section>
  );
}
