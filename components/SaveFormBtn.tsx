import React from 'react';
import { Button } from './ui/button';
import { HiSaveAs } from 'react-icons/hi';
import useDesigner from './hooks/useDesigner';

const SaveFormBtn = () => {
  const { elements } = useDesigner();

  const updateFormContent = async () => {
    try {
      const JsonElements = JSON.stringify(elements);
    } catch (error) {
    }
  };
    
  return (
    <Button variant={'outline'} className="gap-2">
      <HiSaveAs className="h-4 w-4" />
      Preview
    </Button>
  );
};

export default SaveFormBtn;
