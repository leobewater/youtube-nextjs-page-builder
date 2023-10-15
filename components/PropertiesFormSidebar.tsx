import React from 'react';
import useDesigner from './hooks/useDesigner';

const PropertiesFormSidebar = () => {
  const { selectedElement } = useDesigner();
  return (
    <div>PropertiesFormSidebar {selectedElement?.extraAttributes?.label}</div>
  );
};

export default PropertiesFormSidebar;
