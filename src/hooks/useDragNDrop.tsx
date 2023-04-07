import { useState, useRef } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppDispatch } from '@/store';

const useDragNDrop = <T extends string>(action: ActionCreatorWithPayload<any, T>, formIndex: null | number = null) => {
  const [isDraggable, setIsDraggable] = useState(false);
  const dragRef = useRef<number | null>(null);
  const dragOverRef = useRef<number | null>(null);
  const dispatch = useAppDispatch();

  const setDragRef = (index: number) => (dragRef.current = index);
  const setDragOverRef = (index: number) => (dragOverRef.current = index);

  const onDraggable = () => setIsDraggable(true);
  const onDisDraggable = () => setIsDraggable(false);
  const onSwipe = () => {
    formIndex === null
      ? dispatch(action({ dragRef, dragOverRef }))
      : dispatch(action({ formIndex, dragRef, dragOverRef }));
    setIsDraggable(false);
  };

  return { isDraggable, onDraggable, onDisDraggable, setDragRef, setDragOverRef, onSwipe };
};

export default useDragNDrop;
