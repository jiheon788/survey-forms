import { useState, useRef } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppDispatch } from '@/store';

const useDragNDrop = (action: ActionCreatorWithPayload<any>) => {
  const [isDraggable, setIsDraggable] = useState(false);
  const dragItemRef = useRef<number | null>(null);
  const dragOverItemRef = useRef<number | null>(null);
  const dispatch = useAppDispatch();

  const onDraggable = () => setIsDraggable(true);
  const setDragRef = (index: number) => (dragItemRef.current = index);
  const setDragOverRef = (index: number) => (dragOverItemRef.current = index);

  const onSwipe = () => {
    dispatch(action({ dragItemRef, dragOverItemRef }));
    setIsDraggable(false);
  };

  return { isDraggable, onDraggable, setDragRef, setDragOverRef, onSwipe };
};

export default useDragNDrop;
