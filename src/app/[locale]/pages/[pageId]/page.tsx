import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { pagesData, type PageSection } from "@/data/pages";

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

    return null;
}

export default async function PageDetail({ params }: Props) {
    const { locale, pageId } = await params;
    const page = pagesData[pageId];
    if (!page) notFound();

    const t = (text: { th: string; en: string }) =>
        locale === "th" ? text.th : text.en;

    return (
        <div className="min-h-screen bg-[#f5f8ff] flex flex-col">
            {/* Page content */}
            <div className="flex-1 px-4 sm:px-6 md:px-10 py-6 md:py-10">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-5 sm:p-6 md:p-8 lg:p-10">
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

            {/* Prev / Next navigation */}
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
        </div>
    );
}
