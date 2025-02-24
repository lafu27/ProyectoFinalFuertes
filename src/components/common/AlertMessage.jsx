import React from 'react';
import { CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';

const AlertMessage = ({ type = "info", message }) => {
  const icons = {
    error: <AlertCircle className="w-5 h-5" />,
    success: <CheckCircle className="w-5 h-5" />,
    warning: <AlertTriangle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />
  };

  const styles = {
    error: "bg-red-600 text-white",
    success: "bg-[#a4dc34] text-black",
    warning: "bg-yellow-500 text-black",
    info: "bg-blue-500 text-white"
  };

  return (
    <div 
      className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg ${styles[type]}`}
      role="alert"
    >
      <span className="flex-shrink-0">
        {icons[type]}
      </span>
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default AlertMessage;