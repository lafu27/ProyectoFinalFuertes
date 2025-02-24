import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

const Toast = ({ message, type = 'success', show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const icons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <AlertCircle className="w-5 h-5" />,
    warning: <AlertTriangle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />
  };

  const styles = {
    success: {
      background: '#a4dc34',
      color: '#000000'
    },
    error: {
      background: '#dc3545',
      color: '#ffffff'
    },
    warning: {
      background: '#ffc107',
      color: '#000000'
    },
    info: {
      background: '#17a2b8',
      color: '#ffffff'
    }
  };

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 flex items-center animate-slide-up"
      style={{
        maxWidth: '24rem',
        animation: 'slideUp 0.3s ease-out'
      }}
    >
      <div 
        className="flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg"
        style={styles[type]}
      >
        {icons[type]}
        <p className="font-medium">{message}</p>
        <button 
          onClick={onClose}
          className="ml-3 opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Cerrar notificación"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const style = document.createElement('style');
style.textContent = `
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

export default Toast;