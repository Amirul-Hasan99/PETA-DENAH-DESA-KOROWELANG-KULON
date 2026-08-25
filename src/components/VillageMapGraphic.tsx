import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Move, ShieldCheck } from 'lucide-react';
import { mapImageSrc } from '../utils/mapExportUtils';

interface VillageMapGraphicProps {
  interactive?: boolean;
  activeLayers?: string[];
  onToggleLayer?: (layerId: string) => void;
  className?: string;
  onOpenFullscreen?: () => void;
}

export const VillageMapGraphic: React.FC<VillageMapGraphicProps> = ({
  interactive = true,
  className = '',
  onOpenFullscreen,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!interactive) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !interactive) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!interactive) return;
    e.preventDefault();
    const zoomDelta = e.deltaY < 0 ? 0.2 : -0.2;
    setZoomLevel(prev => Math.min(Math.max(Number((prev + zoomDelta).toFixed(2)), 0.6), 4.5));
  };

  // Touch support for mobile devices
  const touchStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!interactive || e.touches.length !== 1) return;
    const touch = e.touches[0];
    setIsDragging(true);
    touchStartRef.current = { x: touch.clientX - pan.x, y: touch.clientY - pan.y };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !interactive || e.touches.length !== 1) return;
    const touch = e.touches[0];
    setPan({
      x: touch.clientX - touchStartRef.current.x,
      y: touch.clientY - touchStartRef.current.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  };

  const handleDoubleClick = () => {
    if (!interactive) return;
    if (zoomLevel > 1.5) {
      resetView();
    } else {
      setZoomLevel(2.5);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#001428]/5 border border-[#d3e4fe]/90 rounded-lg select-none ${className}`}
      onWheel={handleWheel}
    >
      {/* Interactive Controls Overlay */}
      {interactive && (
        <div className="absolute top-3 right-3 z-30 flex flex-col gap-1.5 bg-white/95 backdrop-blur-md p-1.5 rounded-lg border border-[#cbdbf5] shadow-md">
          <button
            onClick={() => setZoomLevel(prev => Math.min(Number((prev + 0.3).toFixed(2)), 4.5))}
            className="p-1.5 rounded hover:bg-[#eff4ff] text-[#001e40] transition-colors cursor-pointer"
            title="Perbesar Peta (+)"
            aria-label="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel(prev => Math.max(Number((prev - 0.3).toFixed(2)), 0.6))}
            className="p-1.5 rounded hover:bg-[#eff4ff] text-[#001e40] transition-colors cursor-pointer"
            title="Perkecil Peta (-)"
            aria-label="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={resetView}
            className="p-1.5 rounded hover:bg-[#eff4ff] text-[#001e40] transition-colors cursor-pointer"
            title="Reset Posisi & Zoom"
            aria-label="Reset View"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          {onOpenFullscreen && (
            <button
              onClick={onOpenFullscreen}
              className="p-1.5 rounded hover:bg-[#eff4ff] text-[#001e40] transition-colors cursor-pointer"
              title="Layar Penuh"
              aria-label="Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          )}
          <div className="text-[10px] font-bold text-center text-[#003366] pt-1 border-t border-[#e2e8f0]">
            {Math.round(zoomLevel * 100)}%
          </div>
        </div>
      )}

      {/* Floating Info Tag in Interactive Mode */}
      {interactive && (
        <div className="absolute bottom-3 left-3 z-20 hidden sm:flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#cbd5e1] text-[11px] font-medium text-[#001e40] shadow-xs pointer-events-none">
          <Move className="w-3.5 h-3.5 text-[#003366]" />
          <span>Geser mouse untuk navigasi • Scroll / Klik ganda untuk zoom Ultra-HD</span>
        </div>
      )}

      {/* Map Image Canvas */}
      <div
        className={`w-full h-full flex items-center justify-center p-2 sm:p-4 bg-gradient-to-b from-[#f8faff] to-[#eef4ff] ${
          interactive ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : ''
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={handleDoubleClick}
      >
        <div
          className="transition-transform duration-75 origin-center flex items-center justify-center max-w-full"
          style={{
            transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoomLevel})`,
            willChange: 'transform',
          }}
        >
          <img
            src={mapImageSrc}
            alt="Peta Fasilitas Umum & Denah Administrasi Desa Korowelang Kulon"
            className="w-full h-auto max-h-[800px] object-contain rounded shadow-md border border-[#cbd5e1]/70"
            draggable={false}
            loading="eager"
            decoding="async"
            onError={(e) => {
              // Safe fallback to public static root
              if (e.currentTarget.src !== window.location.origin + '/peta-korowelang-kulon.png') {
                e.currentTarget.src = '/peta-korowelang-kulon.png';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
