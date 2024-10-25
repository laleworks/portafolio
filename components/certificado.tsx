'use client'
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function Certificadopdf({cert, setcert}: any) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  console.log(cert)
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  if (cert == "certdaw"){

    return (
      <iframe className='overflow-scroll w-3/4 h-full'  src='/cerificado-daw.pdf' ></iframe>     
  
    );
  }
  else{
    return (

      <iframe className='overflow-scroll w-3/4 h-full'  src='/certificado-dam.pdf' ></iframe>     
    )

  }
}
