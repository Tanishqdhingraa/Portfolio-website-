import { LuImport } from "react-icons/lu";


const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="m-16 overflow-hidden tracking-tighter text-[12vw] font-bold hover:text-lime-400 uppercase leading-none text-center">
          Tanishq <br /> Dhingra
        </h1>

        <div className="mt-5">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-bold text-black hover:bg-lime-500"
          >
            <span>Resume.pdf</span>
            <LuImport className="ml-2" />
          </a>
        </div>

        <div className="w-full flex justify-center mt-8">
          <img
            src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
            alt="Coder Workspace"
            className="h-96 w-full max-w-md object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;  
