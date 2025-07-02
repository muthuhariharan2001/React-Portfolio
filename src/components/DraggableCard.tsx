import React, { useState, useRef, useEffect } from 'react';

interface DraggableCardProps {
  children: React.ReactNode;
  className?: string;
  id: string;
  style?: React.CSSProperties;
}

const DraggableCard: React.FC<DraggableCardProps> = ({ children, className = '', id, style }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const dragRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    // Only drag if it's not an input or textarea
    const target = e.target as HTMLElement;
    if (['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'].includes(target.tagName)) return;

    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Ensure global userSelect reset on unmount
  useEffect(() => {
    document.body.style.userSelect = isDragging ? 'none' : '';
    document.body.style.webkitUserSelect = isDragging ? 'none' : '';

    return () => {
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
    };
  }, [isDragging]);

  return (
    <div
      ref={dragRef}
      className={`draggable-element ${className} ${isDragging ? 'z-50 rotate-3 scale-105' : ''}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isDragging ? 'none' : 'transform 0.3s ease',
        cursor: isDragging ? 'grabbing' : 'grab',
        ...style
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {children}
    </div>
  );
};

export default DraggableCard;
