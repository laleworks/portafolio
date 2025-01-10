'use client';
import React from 'react';
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

// Define la interfaz para las props
interface TabsComponentProps {
  certed: boolean;
  setcerted: (value: any) => any;
}

// Define el componente usando una función convencional
function Tabscomponent({ certed, setcerted }: TabsComponentProps) {
  // Función para manejar el cambio de pestañas
  const handleChange = (value:any) => {
    console.log(value)
    console.log("ddd")
    setcerted(value);
  };

  return (
    <Tabs onSelectionChange={setcerted} aria-label="Options">
      <Tab key="cv" title="Currículum">
        {/* Contenido para la pestaña de Currículum */}
      </Tab>
      <Tab key="certdaw" title="Certificado-DAW">
        {/* Contenido para la pestaña de Certificado */}
      </Tab>
      <Tab key="certdam" title="Certificado- DAM">
        {/* Contenido para la pestaña de Certificado */}
      </Tab>
    </Tabs>
  );
}

export default Tabscomponent;
