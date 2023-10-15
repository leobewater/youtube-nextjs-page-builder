import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core';
import { useState } from 'react';
import { SidebarBtnElementOverlay } from './SidebarBtnElement';
import { ElementsType, FormElements } from './FormElements';

const DragOverlayWrapper = () => {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart: (event) => {
      //console.log('DRAG ITEM', event);
      setDraggedItem(event.active);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) return null;

  let node = <div>No drag overlay</div>;
  const isSidebarBtnElement = draggedItem?.data?.current?.isDesignerBtnElement;

  // if element is sidebar btn element, then show the btn overlay component
  if (isSidebarBtnElement) {
    const type = draggedItem.data?.current?.type as ElementsType;
    node = <SidebarBtnElementOverlay formElement={FormElements[type]} />;
  }

  return <DragOverlay>{node}</DragOverlay>;
};

export default DragOverlayWrapper;
