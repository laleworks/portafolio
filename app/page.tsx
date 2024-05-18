import MyApppdf from "@/components/pdfcomponent";
import Image from "next/image";
import { pdfjs } from 'react-pdf';
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12 p-12 h-screen ">
      <div className="flex flex-row items-center w-full justify-around gap-8 md:gap-0">

              <h1>Alejandro caballero Nieto</h1>

               <strong>Tecnico de Daw</strong>
      </div>


        <MyApppdf/>
  

      <div className="mt-4 flex flex-row items-start md:items-center " >
        <a
          href="https://www.linkedin.com/in/alejandro-caballero-nieto-61243425a"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold flex flex-row items-center gap-3">
            Linkedin
            <IoIosArrowForward/>
            </h2>
        
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Enlace a mi perfil publico de linkedin y mi curriculum
          </p>
        </a>

        <a
          href="https://github.com/laleworks/portafolio"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold flex flex-row items-center gap-3">
            Github
            <IoIosArrowForward/>
            </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Enlace al repositorio publico con el codigo de esta pagina
          </p>
        </a>

      
      </div>
    </main>
  );
}
