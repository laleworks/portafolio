'use client';
import React from 'react';
import { Tabs, Tab } from '@nextui-org/tabs';

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
    setcerted(!certed);
  };

  return (
    <Tabs onSelectionChange={setcerted} aria-label="Options">
      <Tab key="cv" title="Currículum">
        {/* Contenido para la pestaña de Currículum */}
      </Tab>
      <Tab key="cert" title="Certificado">
        {/* Contenido para la pestaña de Certificado */}
      </Tab>
    </Tabs>
  );
}

export default Tabscomponent;
