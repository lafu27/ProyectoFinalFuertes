import React from 'react';

const LoadingSpinner = ({ message = "Cargando..." }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-4">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-[#a4dc34] border-t-transparent rounded-full animate-spin" />
        <span className="sr-only">Cargando...</span>
      </div>
      <p className="text-white font-medium">{message}</p>
    </div>
  );
};

export default LoadingSpinner;