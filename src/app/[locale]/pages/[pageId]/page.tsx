import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { pagesData, type PageSection } from "@/data/pages";
import React from "react";

type Props = {
    params: Promise<{ locale: string; pageId: string }>;
};

export function generateStaticParams() {
    return Object.keys(pagesData).map((pageId) => ({ pageId }));
}

function renderSection(
    section: PageSection,
    locale: string,
    accentColor: string,
) {
    const t = (text: { th: string; en: string }) =>
        locale === "th" ? text.th : text.en;

    if (section.type === "text") {
        return (
            <div className="mb-6 md:mb-8">
                {section.title && (
                    <h3
                        className="text-base md:text-lg font-bold mb-2 md:mb-3"
                        style={{ color: accentColor }}
                    >
                        {t(section.title)}
                    </h3>
                )}
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {t(section.content)}
                </p>
            </div>
        );
    }

    if (section.type === "highlights") {
        return (
            <div className="mb-6 md:mb-8">
                {section.title && (
                    <h3
                        className="text-base md:text-lg font-bold mb-2 md:mb-3"
                        style={{ color: accentColor }}
                    >
                        {t(section.title)}
                    </h3>
                )}
                <p className="text-gray-600 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">
                    {t(section.content)}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {section.items.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl p-3 md:p-5 shadow-sm border border-gray-100 flex flex-col gap-1"
                        >
                            <div
                                className="text-lg md:text-2xl font-bold"
                                style={{ color: accentColor }}
                            >
                                {item.value}
                            </div>
                            <div className="text-[10px] md:text-xs text-gray-500">
                                {t(item.label)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (section.type === "quote") {
        return (
            <div className="mb-6 md:mb-8">
                <blockquote
                    className="border-l-4 pl-4 md:pl-6 py-2 italic text-gray-800 text-sm md:text-base leading-relaxed"
                    style={{ borderColor: accentColor }}
                >
                    {t(section.content)}
                </blockquote>
                {section.attribution && (
                    <p
                        className="mt-2 md:mt-3 ml-4 md:ml-6 text-xs md:text-sm font-medium"
                        style={{ color: accentColor }}
                    >
                        — {t(section.attribution)}
                    </p>
                )}
            </div>
        );
    }

    if (section.type === "list") {
        return (
            <div className="mb-6 md:mb-8">
                {section.title && (
                    <h3
                        className="text-base md:text-lg font-bold mb-3 md:mb-4"
                        style={{ color: accentColor }}
                    >
                        {t(section.title)}
                    </h3>
                )}
                <ul className="space-y-2 md:space-y-3">
                    {section.items.map((item, i) => (
                        <li key={i} className="flex gap-2 md:gap-3 items-start">
                            <span
                                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ background: accentColor }}
                            />
                            <span className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                {t(item)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    if (section.type === "pdf_banner") {
        return (
            <div className="w-full mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={section.src}
                    alt={section.alt || "banner"}
                    className={`w-full h-auto object-contain ${section.mobileSrcs?.length ? 'sm:block hidden' : ''}`}
                />
                {section.mobileSrcs?.map((src, i) => (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img key={`mob-${i}`} src={src} className="w-full h-auto object-contain sm:hidden block" />
                ))}
            </div>
        );
    }

    if (section.type === "pdf_row") {
        const gapClasses = section.withGap ? "gap-6 sm:gap-[2%]" : "gap-6 sm:gap-0";

        return (
            <div className={`flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start ${gapClasses} mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-8 sm:px-[6%]`}>
                {section.items.map((item, idx) => {
                    return (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                            key={idx}
                            src={item.src}
                            alt={item.alt || `column-${idx}`}
                            className="w-full max-w-[300px] sm:max-w-none sm:w-auto h-auto object-contain min-w-0 shrink"
                        />
                    );
                })}
            </div>
        );
    }

    if (section.type === "pdf_page") {
        return (
            <div className="w-full">
                {section.items.map((subSection, i) => (
                    <div key={i}>
                        {renderSection(subSection, locale, accentColor)}
                    </div>
                ))}
            </div>
        );
    }

    if (section.type === "pdf_table") {
        return (
            <div className="w-full px-4 sm:px-8 md:px-[6%] mb-10 md:mb-16">
                <div className="overflow-x-auto pb-4 custom-scrollbar">
                    <table className="w-full min-w-[600px] xl:min-w-full text-left border-collapse border-t-2 border-b-2 border-[#2a2e82]">
                        <thead>
                            {section.headerTitle && (
                                <tr>
                                    <th colSpan={2}></th>
                                    <th
                                        colSpan={section.columns.length}
                                        className="text-center text-[#2a2e82] text-[11px] md:text-[11px] font-bold pt-4 pb-2 border-b border-[#2a2e82]"
                                    >
                                        {t(section.headerTitle)}
                                    </th>
                                </tr>
                            )}
                            <tr className="border-b-2 border-[#2a2e82]">
                                <th className="py-2 px-2 w-[45%] lg:w-[50%] min-w-[180px]"></th>
                                <th className="py-2 px-2"></th>
                                {section.columns.map((col, idx) => (
                                    <th
                                        key={idx}
                                        className={`py-2 px-2 text-center text-[#2a2e82] text-[11px] md:text-[11px] font-bold whitespace-nowrap ${section.highlightColumnIndex === idx ? 'bg-[#f0f7fb]' : ''}`}
                                    >
                                        {t(col)}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {section.sections.map((sec, secIdx) => (
                                <React.Fragment key={secIdx}>
                                    {sec.title && (
                                        <tr className={secIdx > 0 ? "border-t border-[#b3e0f2]" : ""}>
                                            <td
                                                className="pt-4 pb-2 px-2 text-[#3ab4e8] text-[11px] md:text-[11px] font-bold"
                                            >
                                                {t(sec.title)}
                                            </td>
                                            <td className="pt-4 pb-2 px-2 text-[#3ab4e8] text-[11px] md:text-[11px] font-bold text-center whitespace-nowrap">
                                                {sec.unit ? t(sec.unit) : ''}
                                            </td>
                                            <td colSpan={section.columns.length}></td>
                                        </tr>
                                    )}
                                    {sec.rows.map((row, rowIdx) => (
                                        <tr key={rowIdx} className="hover:bg-[#f8fcfd] transition-colors">
                                            <td className={`py-1.5 px-2 text-[11px] md:text-[11px] text-gray-800 leading-tight ${row.isBold ? 'font-bold' : ''}`}>
                                                {t(row.label)}
                                            </td>
                                            <td className={`py-1.5 px-2 text-[11px] md:text-[11px] text-gray-800 text-center whitespace-nowrap ${row.isBold ? 'font-bold' : ''}`}>
                                                {row.unit ? t(row.unit) : ''}
                                            </td>
                                            {row.values.map((val, valIdx) => (
                                                <td
                                                    key={valIdx}
                                                    className={`py-1.5 px-2 text-[11px] md:text-[11px] text-gray-800 text-right whitespace-nowrap ${row.isBold ? 'font-bold' : ''} ${section.highlightColumnIndex === valIdx ? 'bg-[#f0f7fb]' : ''}`}
                                                >
                                                    {val}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                    {/* Add a tiny spacing row at the end of each section for breathing room */}
                                    <tr><td colSpan={section.columns.length + 2} className="h-2"></td></tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    if (section.type === "pdf_header") {
        return (
            <div className="px-8 sm:px-[6%] mt-6 mb-8 sm:mb-12 md:mb-14 flex items-center justify-start gap-3 text-[8px] sm:text-[9px] md:text-[10px] text-gray-500 font-light tracking-wider">
                <span className="w-1.5 h-3 md:w-2 md:h-4 rounded-sm" style={{ backgroundColor: accentColor }}></span>
                <span>{t(section.text)}</span>
            </div>
        );
    }

    if (section.type === "pdf_note") {
        return (
            <div className="px-8 sm:px-[6%] mt-4 sm:mt-6 mb-6 text-[10px] sm:text-[11px] xl:text-xs text-gray-800 font-medium leading-relaxed whitespace-pre-line">
                {!section.hidePrefix && <strong>{locale === 'th' ? 'หมายเหตุ :' : 'Note :'} </strong>}{t(section.text)}
            </div>
        );
    }



    return null;
}

export default async function PageDetail({ params }: Props) {
    const { locale, pageId } = await params;
    const page = pagesData[pageId];
    if (!page) notFound();

    const t = (text: { th: string; en: string }) =>
        locale === "th" ? text.th : text.en;

    return (
        <div className="min-h-screen flex flex-col transition-colors duration-300" style={{ backgroundColor: page.backgroundColor || '#f5f8ff' }}>
            {/* Page content */}
            <div className={page.layout === 'pdf_composition' ? "w-full mx-auto lg:p-4 p-2 flex-1" : "flex-1 px-4 sm:px-6 md:px-10 py-6 md:py-10"}>
                <div className={page.layout === 'pdf_composition' ? "grid grid-cols-1 xl:grid-cols-2 gap-2 w-full" : "max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-5 sm:p-6 md:p-8 lg:p-10"}>
                    {page.sections.length > 0 ? (
                        page.sections.map((section, i) => (
                            <div key={i}>
                                {renderSection(
                                    section,
                                    locale,
                                    page.accentColor,
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-16 md:py-24 text-center gap-4">
                            <div
                                className="w-14 h-14 rounded-full flex items-center justify-center"
                                style={{ background: `${page.accentColor}18` }}
                            >
                                <span
                                    className="text-2xl font-bold"
                                    style={{ color: page.accentColor }}
                                >
                                    {page.pageId}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                {locale === "th"
                                    ? "กำลังเตรียมเนื้อหา"
                                    : "Content in preparation"}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Prev / Next navigation
            <div className="shrink-0 border-t border-gray-200 bg-white px-4 sm:px-6 md:px-10 py-4 md:py-5">
                <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
                    {page.prevPage ? (
                        <Link
                            href={`/${locale}/pages/${page.prevPage}`}
                            className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-gray-600 hover:text-[#1e90e6] transition-colors"
                        >
                            <ChevronLeft size={16} />
                            <span>
                                {locale === "th" ? "หน้า" : "Page"}{" "}
                                {page.prevPage}
                            </span>
                        </Link>
                    ) : (
                        <Link
                            href={`/${locale}`}
                            className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-gray-600 hover:text-[#1e90e6] transition-colors"
                        >
                            <ChevronLeft size={16} />
                            <span>{locale === "th" ? "หน้าหลัก" : "Home"}</span>
                        </Link>
                    )}

                    <span className="text-[10px] md:text-xs text-gray-400 text-center hidden sm:block">
                        {locale === "th"
                            ? "รายงานประจำปี 2568"
                            : "Annual Report 2025"}
                    </span>

                    {page.nextPage ? (
                        <Link
                            href={`/${locale}/pages/${page.nextPage}`}
                            className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-gray-600 hover:text-[#1e90e6] transition-colors"
                        >
                            <span>
                                {locale === "th" ? "หน้า" : "Page"}{" "}
                                {page.nextPage}
                            </span>
                            <ChevronRight size={16} />
                        </Link>
                    ) : (
                        <span className="text-xs md:text-sm text-gray-300">
                            {locale === "th"
                                ? "จบเนื้อหาตัวอย่าง"
                                : "End of demo"}
                        </span>
                    )}
                </div>
            </div>
            */}
        </div>
    );
}
