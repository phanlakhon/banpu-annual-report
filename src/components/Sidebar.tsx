'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  pageId: string;
  label: string;
  pathname: string;
};

function NavLink({ href, pageId, label, pathname }: NavLinkProps) {
  const isActive = pathname === href;
  return (
    <Link href={href} className="flex gap-3 group items-start">
      <span className={`text-sm min-w-7.5 transition-colors ${isActive ? 'text-gradient-banpu font-bold' : 'text-[#5b3e96] font-bold'}`}>
        {pageId}
      </span>
      <span className={`text-sm transition-colors ${isActive ? 'text-gradient-banpu font-bold' : 'text-gray-800 group-hover:text-sky-500'}`}>
        {label}
      </span>
    </Link>
  );
}

type AccordionItemProps = {
  title: string;
  number: string;
  items: { label: string; page: string; href: string }[];
  defaultOpen?: boolean;
};

function AccordionItem({ title, number, items, defaultOpen = true }: AccordionItemProps) {
  const pathname = usePathname();
  const hasActiveItem = items.some(item => pathname === item.href);
  const [isOpen, setIsOpen] = useState(defaultOpen || hasActiveItem);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start gap-3 text-left group"
      >
        <div className={`text-3xl font-light -mt-1.25 transition-colors ${hasActiveItem ? 'text-gradient-banpu' : 'text-sky-400'}`}>{number}</div>
        <div className="flex-1">
          <div className="text-xs text-sky-500 font-medium mb-1">ส่วนที่</div>
          <div className={`font-semibold text-sm leading-tight flex items-center justify-between transition-colors ${hasActiveItem ? 'text-gradient-banpu' : 'text-[#1a365d]'}`}>
            {title}
            {isOpen ? (
              <ChevronDown size={14} className="text-gray-400" />
            ) : (
              <ChevronRight size={14} className="text-gray-400" />
            )}
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="mt-4 pl-10 space-y-3">
          {items.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <Link key={idx} href={item.href} className="flex gap-3 group/item items-start">
                <span className={`text-xs min-w-7.5 mt-px transition-colors ${isActive ? 'text-gradient-banpu font-bold' : 'text-[#5b3e96] font-bold group-hover/item:text-sky-500'}`}>
                  {item.page}
                </span>
                <span className={`text-xs leading-tight transition-colors ${isActive ? 'text-gradient-banpu font-bold' : 'text-gray-700 group-hover/item:text-sky-500'}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const t = useTranslations('Menu');
  const locale = useLocale();
  const pathname = usePathname();

  const p = (pageId: string) => `/${locale}/pages/${pageId}`;

  return (
    <aside className="w-72 h-full bg-[#f0f8ff] flex flex-col shadow-xl z-20 overflow-y-auto">
      <div className="p-6 shrink-0">
        <Link href={`/${locale}/`} className="flex justify-center mb-6">
          <div className="text-center">
            <img src="/logo.png" alt="BANPU" className="h-14" />
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-6 pb-6 space-y-5">
        <h2 className="text-[#1e40af] text-xl font-bold mb-4">สารบัญ</h2>

        <div className="space-y-3">
          <NavLink href={p('00')} pageId="00" label={t('intro')} pathname={pathname} />
          <NavLink href={p('04')} pageId="04" label={t('highlight')} pathname={pathname} />
          <NavLink href={p('08')} pageId="08" label={t('performance')} pathname={pathname} />
          <NavLink href={p('10')} pageId="10" label={t('board_report')} pathname={pathname} />
          <NavLink href={p('12')} pageId="12" label={t('ceo_message')} pathname={pathname} />
        </div>

        <div className="my-4 border-t border-blue-100" />

        <AccordionItem
          number="1"
          title={t('part1').replace('ส่วนที่ 1 ', '')}
          items={[
            { page: '18', label: t('part1_1'), href: p('18') },
            { page: '22', label: t('part1_2'), href: p('22') },
            { page: '24', label: t('part1_3'), href: p('24') },
          ]}
        />

        <AccordionItem
          number="2"
          title={t('part2').replace('ส่วนที่ 2 ', '')}
          items={[
            { page: '254', label: t('part2_1'), href: p('254') },
            { page: '282', label: t('part2_2'), href: p('282') },
          ]}
        />

        <AccordionItem
          number="3"
          title={t('part3').replace('ส่วนที่ 3 ', '')}
          items={[
            { page: '342', label: t('part3_1'), href: p('342') },
            { page: '354', label: t('part3_2'), href: p('342') },
          ]}
        />
      </nav>

    </aside>
  );
}
