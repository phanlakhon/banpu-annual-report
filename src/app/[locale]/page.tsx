import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
    const { locale } = await params;
    const isEn = locale === "en";

    return (
        <div
            className="relative w-full min-h-screen flex items-center overflow-hidden"
            style={{
                background:
                    "linear-gradient(145deg, #a8d8f0 0%, #c2e5f5 22%, #d8eef8 50%, #e6f4fa 75%, #daeef8 100%)",
            }}
        >
            {/* Top-left diagonal decoration */}
            <div className="absolute top-0 left-0 pointer-events-none overflow-hidden w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80">
                <div
                    className="absolute bg-white/30 rounded-3xl"
                    style={{
                        width: 160,
                        height: 340,
                        top: -80,
                        left: -40,
                        transform: "rotate(-30deg)",
                    }}
                />
                <div
                    className="absolute bg-white/20 rounded-2xl hidden sm:block"
                    style={{
                        width: 100,
                        height: 260,
                        top: -60,
                        left: 80,
                        transform: "rotate(-30deg)",
                    }}
                />
            </div>

            {/* Bottom-right decoration */}
            <div className="absolute bottom-0 right-0 pointer-events-none overflow-hidden w-40 h-28 md:w-80 md:h-48">
                <div
                    className="absolute bg-white/15 rounded-3xl"
                    style={{
                        width: 260,
                        height: 130,
                        bottom: -50,
                        right: -50,
                        transform: "rotate(-18deg)",
                    }}
                />
            </div>

            {/* Main content */}
            <div
                className="relative z-10 w-full max-w-7xl mx-auto
                   px-6 sm:px-10 md:px-10
                   py-12 md:py-14
                   flex flex-col lg:flex-row items-center
                   gap-10 md:gap-12 lg:gap-20"
            >
                {/* ── Left: Logo + Text + Buttons ── */}
                <div className="w-full min-w-1/2 md:flex-1 flex flex-col gap-4 md:gap-6 lg:gap-10">
                    {/* Logo */}
                    <div className="mb-1">
                        <Image
                            src="/logo.png"
                            alt="BANPU"
                            width={200}
                            height={56}
                            className="h-10 sm:h-12 md:h-18 w-auto"
                        />
                    </div>

                    {/* Headings */}
                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl lg:text-4xl font-medium leading-relaxed text-gradient-banpu">
                            {isEn
                                ? "Balanced Energy, Paving the Way Forward"
                                : "สมดุลพลังงาน ปูทางสู่อนาคต"}
                        </h1>
                        <h2 className="text-xl md:text-3xl lg:text-3xl font-medium text-[#2a2e82]">
                            {isEn
                                ? "Smart Energy for Sustainability"
                                : "พลังงานอัจฉริยะเพื่อความยั่งยืน"}
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm md:text-xl leading-relaxed">
                        {isEn
                            ? "Committed to building a sustainable energy future to continuously elevate the quality of life for people everywhere."
                            : "มุ่งมั่นสร้างสรรค์อนาคตพลังงานที่ยั่งยืน เพื่อยกระดับคุณภาพชีวิตของผู้คนอย่างต่อเนื่อง"}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3 mt-2">
                        <Link
                            href={`/${locale}/pages/00`}
                            className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold text-sm text-white shadow-md hover:opacity-90 transition-opacity"
                            style={{ background: "#3ab4e8" }}
                        >
                            {isEn ? "Business Overview" : "ดูภาพรวมธุรกิจ"}
                            <ArrowRight size={15} />
                        </Link>
                        <a
                            href="#"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold text-sm text-white shadow-md hover:opacity-90 transition-opacity"
                            style={{ background: "#2a2e82" }}
                        >
                            {isEn ? "Latest Financials" : "งบการเงินล่าสุด"}
                            <span className="w-5 h-5 rounded-full border-2 border-white/50 flex items-center justify-center">
                                <ExternalLink size={9} />
                            </span>
                        </a>
                    </div>
                </div>

                {/* ── Right: Annual Report Cover ── */}
                <div className="shrink-0 flex items-center justify-center">
                    <div className="w-full max-w-sm mx-auto">
                        <Image
                            src="/page_1.png"
                            alt="page-1"
                            width={1240}
                            height={1754}
                            className="w-full h-auto rounded-sm shadow-xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
