'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type PageRef = { id: string; title: string };

type Props = {
  locale: string;
  prevPage?: PageRef;
  nextPage?: PageRef;
};

export default function PrevNextNav({ locale, prevPage, nextPage }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const navigate = (href: string) => {
    startTransition(() => {
      router.push(href);
    });
  };

  const isHome = locale === 'th' ? 'หน้าหลัก' : 'Home';
  const isPrev = locale === 'th' ? 'ก่อนหน้า' : 'Previous';
  const isNext = locale === 'th' ? 'ถัดไป' : 'Next';
  const reportLabel = locale === 'th' ? 'รายงานประจำปี 2568' : 'Annual Report 2025';

  return (
    <div className={`relative shrink-0 border-t border-gray-100 bg-white/80 backdrop-blur-md px-4 sm:px-6 md:px-10 py-3 md:py-4 z-20 transition-opacity duration-150 ${isPending ? 'opacity-50 pointer-events-none' : ''}`}>
      {isPending && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-banpu-cyan animate-pulse" />
      )}
      <div className="max-w-[1100px] mx-auto flex items-center justify-between gap-4">

        {prevPage ? (
          <button
            onClick={() => navigate(`/${locale}/pages/${prevPage.id}`)}
            className="group flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-600 hover:text-[#2a2e82] active:opacity-60 transition-all max-w-[40%]"
          >
            <div className="w-8 h-8 shrink-0 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#2a2e82] group-hover:bg-[#f0f7fb] transition-all">
              <ChevronLeft size={18} />
            </div>
            <div className="flex flex-col min-w-0 text-left">
              <span className="text-[10px] text-gray-400 font-normal uppercase tracking-wider">{isPrev}</span>
              <span className="truncate text-[#2a2e82]">{prevPage.title}</span>
            </div>
          </button>
        ) : (
          <button
            onClick={() => navigate(`/${locale}`)}
            className="group flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-600 hover:text-[#2a2e82] active:opacity-60 transition-all"
          >
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#2a2e82] group-hover:bg-[#f0f7fb] transition-all">
              <ChevronLeft size={18} />
            </div>
            <span>{isHome}</span>
          </button>
        )}

        <div className="hidden md:flex flex-col items-center">
          <span className="text-[10px] font-bold text-[#2a2e82] tracking-[0.2em] uppercase">Banpu</span>
          <span className="text-[9px] text-gray-400 mt-0.5">{reportLabel}</span>
        </div>

        {nextPage ? (
          <button
            onClick={() => navigate(`/${locale}/pages/${nextPage.id}`)}
            className="group flex items-center gap-2 text-right text-xs md:text-sm font-semibold text-gray-600 hover:text-[#2a2e82] active:opacity-60 transition-all max-w-[40%]"
          >
            <div className="flex flex-col min-w-0 text-right">
              <span className="text-[10px] text-gray-400 font-normal uppercase tracking-wider">{isNext}</span>
              <span className="truncate text-[#2a2e82]">{nextPage.title}</span>
            </div>
            <div className="w-8 h-8 shrink-0 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#2a2e82] group-hover:bg-[#f0f7fb] transition-all">
              <ChevronRight size={18} />
            </div>
          </button>
        ) : (
          <div className="w-20" />
        )}

      </div>
    </div>
  );
}
