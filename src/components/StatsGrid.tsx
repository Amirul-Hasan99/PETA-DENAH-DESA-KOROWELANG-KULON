import React, { useState } from 'react';
import { Map, Mountain, Tractor, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { STAT_CARDS } from '../data/villageData';
import { VillageStatCard } from '../types';

interface StatsGridProps {
  onCardSelect?: (card: VillageStatCard) => void;
}

export const StatsGrid: React.FC<StatsGridProps> = ({ onCardSelect }) => {
  const [selectedCard, setSelectedCard] = useState<VillageStatCard | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case 'map':
        return <Map className="w-5 h-5 md:w-6 md:h-6 text-[#003366]" />;
      case 'area':
        return <Mountain className="w-5 h-5 md:w-6 md:h-6 text-[#1b6d24]" />;
      case 'potential':
        return <Tractor className="w-5 h-5 md:w-6 md:h-6 text-[#b45309]" />;
      default:
        return <Map className="w-5 h-5" />;
    }
  };

  const handleCardClick = (card: VillageStatCard) => {
    setSelectedCard(card);
    if (onCardSelect) onCardSelect(card);
  };

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 mb-12 md:mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {STAT_CARDS.map(card => {
          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              className="bg-white rounded-lg p-6 sm:p-7 border border-[#e5eeff] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group hover:border-[#cbdbf5]"
            >
              <div>
                {/* Icon Container */}
                <div
                  className={`w-12 h-12 rounded-lg ${card.bgColor} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}
                >
                  {getIcon(card.iconType)}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg md:text-xl text-[#001e40] mb-3 group-hover:text-[#003366] transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#43474f] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Sub-stats preview pill */}
              {card.subStats && (
                <div className="mt-5 pt-4 border-t border-[#f1f5f9] flex items-center justify-between text-xs text-[#737780]">
                  <span className="font-medium text-[#003366]">
                    {card.subStats[0].label}: {card.subStats[0].value}
                  </span>
                  <span className="text-[#001e40] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-[11px]">
                    Detail <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Detail Modal when user clicks a Stat Card */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 bg-[#001e40]/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white rounded-lg max-w-lg w-full p-6 shadow-xl border border-[#d3e4fe] animate-in zoom-in-95 duration-150"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-lg ${selectedCard.bgColor} flex items-center justify-center shrink-0`}>
                {getIcon(selectedCard.iconType)}
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-[#001e40]">
                  {selectedCard.title}
                </h3>
                <p className="text-xs text-[#737780]">Desa Korowelang Kulon, Cepiring</p>
              </div>
            </div>

            <p className="text-sm text-[#43474f] leading-relaxed mb-4">
              {selectedCard.description}
            </p>

            {selectedCard.detail && (
              <div className="bg-[#f8f9ff] p-3.5 rounded-md border border-[#e5eeff] text-xs text-[#43474f] leading-relaxed mb-5">
                <span className="font-semibold text-[#001e40] block mb-1">Rincian & Fakta Lapangan:</span>
                {selectedCard.detail}
              </div>
            )}

            {selectedCard.subStats && (
              <div className="grid grid-cols-3 gap-2 mb-6">
                {selectedCard.subStats.map((stat, i) => (
                  <div key={i} className="bg-white p-2.5 rounded border border-[#e5eeff] text-center shadow-2xs">
                    <div className="text-[11px] text-[#737780]">{stat.label}</div>
                    <div className="font-bold text-xs sm:text-sm text-[#001e40] mt-0.5">{stat.value}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedCard(null)}
                className="bg-[#001e40] hover:bg-[#003366] text-white px-5 py-2 rounded text-sm font-medium transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
