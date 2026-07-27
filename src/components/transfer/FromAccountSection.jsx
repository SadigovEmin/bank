import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import BankCardforTransferPage from './BankCardforTransferPage';

import 'swiper/css';

// Card list definition (Can also be passed in as props if needed)
export const initialCardList = [
  { id: 1, balance: "3250.00", number: "5412-7512-3412-9800", cardType: "visa" },
  { id: 2, balance: "1212.35", number: "4169-7388-2607-2006", cardType: "mastercard" },
  { id: 3, balance: "450.50", number: "4349-7832-1132-4455", cardType: "visa" },
  { id: 4, balance: "22.35", number: "4169-7388-3232-4455", cardType: "mastercard" },
];

export default function FromAccountSection({ selectedCard, onSelectCard, cardDataList = initialCardList }) {
  const swiperRef = useRef(null);

  return (
    <div className="lg:col-span-4 lg:row-span-2 bg-white rounded-xl">
      <div className="flex flex-col gap-4">
        
        {/* Header */} 
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-gray-700 font-serif">From Account</p>
          
          {cardDataList.length > 2 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="p-1 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 transition active:scale-90"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-5 h-5 text-blue-700" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="p-1 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 transition active:scale-90"
                aria-label="Next card"
              >
                <ChevronRight className="w-5 h-5 text-blue-700" />
              </button>
            </div>
          )}
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          speed={700}
          touchEventsTarget="container"
          className="w-full py-1 rounded-3xl "
        >
          {cardDataList.map((card) => {
            const isSelected = selectedCard?.id === card.id;

            return (
              <SwiperSlide key={card.id}>
                <div
                  onClick={() => onSelectCard(card)}
                  className="p-1"
                >
                  {/* Active Badge */}
                  {isSelected && (
                    <div className="absolute top-2.5 right-2 z-10 bg-blue-600 text-white text-xs font-semibold px-3 mr-2 py-0.5 rounded-full flex items-center gap-1 shadow">
                      <Check className="w-3 h-3" /> Active
                    </div>
                  )}

                  {/* Render Bank Card */}
                  <BankCardforTransferPage
                    balance={card.balance}
                    number={card.number}
                    cardType={card.cardType} isSelected={isSelected} 
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </div>
  );
}