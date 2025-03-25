import Image from "next/image";
import aboutImage from "@/assets/images/SecondBakcground.jpg";
import ownerImage from "@/assets/images/rajan.png";
import Link from "next/link";
import { FaArrowRightLong, FaQuoteRight } from "react-icons/fa6";

export default function About() {
  return (
    <section className="relative flex justify-center items-center w-full h-max px-6 py-8 md:px-8 md:py-12 lg:px-40 2xl:px-44 lg:py-4">
      <div className="w-full flex flex-col justify-center items-center">
        {/* About Section */}
        <div className="w-full flex flex-col md:flex-row md:gap-10">
          <div className="w-full md:w-[40%] h-56 rounded-3xl relative">
            <Image
              alt="About Sr Aqua and Pet House"
              src={aboutImage}
              className="h-full w-full object-cover rounded-4xl"
            />
            <div className="w-64 md:w-60 absolute -bottom-32 left-0 p-3 bg-primary rounded-4xl overflow-hidden flex flex-col gap-3 shadow-2xl md:shadow">
              <div className="w-full flex items-center gap-3">
                <div className="image size-16 rounded-full overflow-hidden">
                  <Image
                    alt="Rajan Prui - Owner/Founder Sr Aqua and Pet House"
                    src={ownerImage}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="founder">
                  <p className="font-bold text-lg text-secondary">Rajan Puri</p>
                  <p className="text-gray-600 text-base">Founder/Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                earum. Lorem ipsum dolor sit amet.
              </p>
              <FaQuoteRight className="text-3xl text-secondary" />
              {/* <h3 className="font-bold text-secondary">Rajan - Owner</h3> */}
            </div>
          </div>
          <div className="aboutsection w-full md:w-[60%] flex flex-col justify-center items-center gap-4 mt-40 md:mt-0">
            <div className="flex flex-col gap-3">
              <h2 className="text-secondary text-lg font-serif font-semibold">
                About Sr Aqua and Pet House
              </h2>
              <h3 className="font-extrabold font-sans text-3xl md:text-4xl text-gray-800">
                Discover the most beautiful fish tank from around the world
              </h3>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                similique, fugiat quasi vel dolor tempore temporibus magnam? Ex
                dolores ab natus eaque fuga nostrum odit tempora! A ipsum
                repellendus adipisci omnis quod rerum maiores laudantium
                voluptate voluptatum! Eos, aspernatur dolores. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Molestias, debitis!
              </p>
              <Link
                href={"/about"}
                className="px-6 py-3 bg-secondary text-primary w-max rounded-3xl hover:text-secondary hover:bg-primary transition duration-300 mt-5 md:text-lg lg:text-xl flex justify-center items-center gap-3 hover:gap-5"
              >
                Learn More <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>

        {/* Wave animation section */}
        <div className="h-96 w-full bg-white flex justify-center items-end overflow-hidden relative md:mt-5">
          <div className="absolute left-0 bottom-0 w-full h-96 wave wave2"></div>
          <div className="absolute left-0 bottom-0 w-full h-96 wave wave1"></div>
          <div className="absolute left-0 bottom-0 w-full h-96 wave wave3"></div>
          <div className="absolute left-0 bottom-0 w-full h-96 wave wave4"></div>

          <div className="w-full grid grid-cols-2 md:grid-cols-4 justify-between items-center gap-4 gap-y-8 z-10 mb-6 md:mb-16">
            <div className="flex flex-col items-center justify-center col-span-1">
              <div className="number font-sans text-4xl font-extrabold text-primary drop-shadow-lg">
                100+
              </div>
              <p className="text-black font-serif text-center font-medium">
                Customers
              </p>
            </div>
            <div className="flex flex-col items-center justify-center col-span-1">
              <div className="number font-sans text-4xl font-extrabold text-primary drop-shadow-lg">
                50+
              </div>
              <p className="text-black font-serif text-center font-medium">
                Aquatic Pets
              </p>
            </div>
            <div className="flex flex-col items-center justify-center col-span-1">
              <div className="number font-sans text-4xl font-extrabold text-primary drop-shadow-lg">
                98%
              </div>
              <p className="text-black font-serif text-center font-medium">
                Satisfied Clients
              </p>
            </div>
            <div className="flex flex-col items-center justify-center col-span-1">
              <div className="number font-sans text-4xl font-extrabold text-primary drop-shadow-lg">
                5+
              </div>
              <p className="text-black font-serif text-center font-medium">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
