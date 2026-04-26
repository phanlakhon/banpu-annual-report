'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const isDev = process.env.NODE_ENV === 'development';

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
      {isDev && (
        <span className={`text-sm min-w-7.5 transition-colors ${isActive ? 'text-gradient-banpu font-bold' : 'text-[#5b3e96] font-bold'}`}>
          {pageId}
        </span>
      )}
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

function AccordionItem({ title, number, items, defaultOpen = false }: AccordionItemProps) {
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
                {isDev && (
                  <span className={`text-xs min-w-7.5 mt-px transition-colors ${isActive ? 'text-gradient-banpu font-bold' : 'text-[#5b3e96] font-bold group-hover/item:text-sky-500'}`}>
                    {item.page}
                  </span>
                )}
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
            <img src="/logo.webp" alt="BANPU" className="h-14" />
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-6 pb-6 space-y-5">
        <h2 className="text-[#1e40af] text-xl font-bold mb-4">สารบัญ</h2>

        <div className="space-y-3">
          <NavLink href={p('000')} pageId="000" label={t('m000')} pathname={pathname} />
          <NavLink href={p('001')} pageId="001" label={t('m001')} pathname={pathname} />
          <NavLink href={p('002')} pageId="002" label={t('m002')} pathname={pathname} />
          <NavLink href={p('003')} pageId="003" label={t('m003')} pathname={pathname} />
          <NavLink href={p('004')} pageId="004" label={t('m004')} pathname={pathname} />
        </div>

        <div className="my-4 border-t border-blue-100" />

        <AccordionItem
          number="1"
          title={t('part1').replace('ส่วนที่ 1 ', '')}
          items={[
            { page: '005', label: t('m005'), href: p('005') },
            { page: '006', label: t('m006'), href: p('006') },
            { page: '007', label: t('m007'), href: p('007') },
            { page: '008', label: t('m008'), href: p('008') },
            { page: '009', label: t('m009'), href: p('009') },
            { page: '010', label: t('m010'), href: p('010') },
            { page: '011', label: t('m011'), href: p('011') },
            { page: '012', label: t('m012'), href: p('012') },
            { page: '013', label: t('m013'), href: p('013') },
            { page: '014', label: t('m014'), href: p('014') },
            { page: '015', label: t('m015'), href: p('015') },
            { page: '016', label: t('m016'), href: p('016') },
            { page: '017', label: t('m017'), href: p('017') },
            { page: '018', label: t('m018'), href: p('018') },
            { page: '019', label: t('m019'), href: p('019') },
            { page: '020', label: t('m020'), href: p('020') },
            { page: '021', label: t('m021'), href: p('021') },
            { page: '022', label: t('m022'), href: p('022') },
            { page: '023', label: t('m023'), href: p('023') },
            { page: '024', label: t('m024'), href: p('024') },
            { page: '025', label: t('m025'), href: p('025') },
            { page: '026', label: t('m026'), href: p('026') },
            { page: '027', label: t('m027'), href: p('027') },
            { page: '028', label: t('m028'), href: p('028') },
            { page: '029', label: t('m029'), href: p('029') },
            { page: '030', label: t('m030'), href: p('030') },
          ]}
        />

        <AccordionItem
          number="2"
          title={t('part2').replace('ส่วนที่ 2 ', '')}
          items={[
            { page: '031', label: t('m031'), href: p('031') },
            { page: '032', label: t('m032'), href: p('032') },
            { page: '033', label: t('m033'), href: p('033') },
            { page: '034', label: t('m034'), href: p('034') },
            { page: '035', label: t('m035'), href: p('035') },
            { page: '036', label: t('m036'), href: p('036') },
            { page: '037', label: t('m037'), href: p('037') },
            { page: '038', label: t('m038'), href: p('038') },
          ]}
        />

        <AccordionItem
          number="3"
          title={t('part3').replace('ส่วนที่ 3 ', '')}
          items={[
            { page: '039', label: t('m039'), href: p('039') },
            { page: '040', label: t('m040'), href: p('040') },
          ]}
        />
      </nav>
    </aside>
  );
}
