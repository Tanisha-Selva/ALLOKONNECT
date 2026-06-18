import React from 'react';
import { cn } from '../utils/cn';
import previewImage from '../assets/src.jpeg';
export default function PhoneMockup({ children, src, className, glow = false }) {
  return (
    <div className={cn('relative mx-auto', className)}>
      <div
        className={cn(
          'relative w-[260px] sm:w-[280px] lg:w-[300px] rounded-[2.5rem] bg-dark p-3 shadow-2xl',
          glow && 'shadow-[0_0_40px_rgba(13,148,136,0.25)]',
        )}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-dark rounded-b-2xl z-10" />
        <div className="rounded-[2rem] overflow-hidden bg-[#E8FFFB] aspect-[9/19.5]">
          {src ? (
            <img 
              src={previewImage} 
              alt="Phone preview"
              className="w-full h-full object-cover"
            />
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
}
