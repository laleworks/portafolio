import MyApppdf from "@/components/pdfcomponent";
import Image from "next/image";
import { pdfjs } from 'react-pdf';
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Tabscomponent from "./tabsclient";
import CVcomponents from "./componentcv";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function Home() {
  return (
    
    <CVcomponents/>
  );
}
