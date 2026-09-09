import React from 'react';

export const BackgroundElements: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle fine tech grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-35" />

      {/* Top Left Diagonal Geometric Accent */}
      <div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] opacity-25"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, rgba(88, 28, 135, 0.15) 50%, transparent 80%)',
          clipPath: 'polygon(0 0, 100% 0, 15% 100%, 0 75%)',
        }}
      />
      {/* Top Left Diagonal Accent Line */}
      <div 
        className="absolute -top-20 -left-20 w-[650px] h-[2px] opacity-40"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.8), transparent)',
          transform: 'rotate(-40deg)',
          transformOrigin: '0 0',
        }}
      />

      {/* Top Right Diagonal Geometric Facet */}
      <div 
        className="absolute -top-32 -right-32 w-[700px] h-[700px] opacity-20"
        style={{
          background: 'linear-gradient(225deg, rgba(168, 85, 247, 0.35) 0%, rgba(109, 40, 217, 0.15) 55%, transparent 85%)',
          clipPath: 'polygon(100% 0, 0 0, 85% 100%, 100% 70%)',
        }}
      />
      <div 
        className="absolute top-10 right-0 w-[550px] h-[1px] opacity-35"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(192, 132, 252, 0.7), transparent)',
          transform: 'rotate(35deg)',
          transformOrigin: '100% 0',
        }}
      />

      {/* Mid-screen Diagonal Geometric Ribbons (Depth layering) */}
      <div 
        className="absolute top-[38%] -left-48 w-[800px] h-[350px] opacity-15"
        style={{
          background: 'linear-gradient(120deg, rgba(126, 34, 206, 0.3) 0%, rgba(76, 29, 149, 0.05) 70%, transparent 100%)',
          clipPath: 'polygon(15% 0, 100% 25%, 85% 100%, 0 75%)',
          transform: 'rotate(-15deg)',
        }}
      />

      <div 
        className="absolute top-[60%] -right-40 w-[750px] h-[400px] opacity-15"
        style={{
          background: 'linear-gradient(240deg, rgba(147, 51, 234, 0.25) 0%, rgba(59, 7, 100, 0.05) 75%, transparent 100%)',
          clipPath: 'polygon(0 30%, 85% 0, 100% 70%, 15% 100%)',
          transform: 'rotate(12deg)',
        }}
      />

      {/* Bottom Diagonal Panels */}
      <div 
        className="absolute -bottom-40 -left-32 w-[650px] h-[550px] opacity-20"
        style={{
          background: 'linear-gradient(45deg, rgba(109, 40, 217, 0.3) 0%, transparent 70%)',
          clipPath: 'polygon(0 100%, 100% 100%, 30% 0, 0 20%)',
        }}
      />

      <div 
        className="absolute -bottom-24 -right-24 w-[600px] h-[500px] opacity-25"
        style={{
          background: 'linear-gradient(315deg, rgba(126, 34, 206, 0.35) 0%, rgba(79, 70, 229, 0.1) 60%, transparent 80%)',
          clipPath: 'polygon(100% 100%, 0 100%, 70% 0, 100% 15%)',
        }}
      />

      {/* Soft Ambient Radial Vignette to keep center content exceptionally readable */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(16, 18, 28, 0.3) 0%, rgba(10, 11, 17, 0.85) 75%, #090a10 100%)',
        }}
      />
    </div>
  );
};
