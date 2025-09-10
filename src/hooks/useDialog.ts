import { useState } from 'react';

export const useDialog = <T = unknown>(initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  const openDialog = (item?: T) => {
    setSelectedItem(item || null);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  return {
    isOpen,
    selectedItem,
    openDialog,
    closeDialog,
  };
};
