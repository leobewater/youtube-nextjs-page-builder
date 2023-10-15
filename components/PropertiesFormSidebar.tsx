import React from 'react';
import useDesigner from './hooks/useDesigner';
import { FormElements } from './FormElements';

const PropertiesFormSidebar = () => {
  const { selectedElement } = useDesigner();
  if (!selectedElement) return null;

  // get the properties form compoment from selected element
  const PropertiesForm =
    FormElements[selectedElement?.type].propertiesComponent;

  return (
    <div>
      <PropertiesForm />
    </div>
  );
};

export default PropertiesFormSidebar;
