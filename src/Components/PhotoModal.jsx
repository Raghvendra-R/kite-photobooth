
// File: src/components/PhotoModal.jsx
import React from 'react';

export default function PhotoModal({ photo, kiteName, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl overflow-hidden max-w-3xl w-full p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-gray-600">{kiteName || ''}</div>
          <button onClick={onClose} className="text-gray-700 px-3 py-1 rounded hover:bg-gray-100">Close</button>
        </div>
        <div className="w-full h-[70vh] flex items-center justify-center">
          <img src={photo} alt="enlarged" className="max-h-full object-contain" />
        </div>
      </div>
    </div>
  );
}
