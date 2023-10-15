import { useDndMonitor } from '@dnd-kit/core';

const DragOverlayWrapper = () => {
  useDndMonitor({
    onDragStart: (event) => {
      console.log('DRAG ITEM', event);
    },
  });
    
  return <div>DragOverlayWrapper</div>;
};

export default DragOverlayWrapper;
