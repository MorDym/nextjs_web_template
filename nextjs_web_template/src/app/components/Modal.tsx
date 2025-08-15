import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Zavírací tlačítko */}
     {/*   <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
          aria-label="Zavřít okno"
        >
          &times;
        </button>*/}

        {/* Titulek */}
        {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}

        {/* Obsah */}
        <div>{children}</div>
      </div>
    </div>
  );
}
