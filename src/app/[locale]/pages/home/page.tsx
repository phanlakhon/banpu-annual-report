import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { pageOrder, pagesData } from "@/data/pages";

type Props = { params: Promise<{ locale: string }> };

export default async function PagesHomePage({ params }: Props) {
    const { locale } = await params;
    const isEn = locale === "en";

    return (
        <div className="w-full bg-[#f0f8ff] min-h-screen flex flex-col items-center">
            {/* The report pages container - simulating a 2-page vertical spread */}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 w-full mx-auto lg:p-4 p-2">
                <div className="">
                    <Image
                        src="/page-home/page-4.png"
                        alt="page-1"
                        width={1240}
                        height={1754}
                        className="w-full h-auto mb-2 sm:block hidden"
                        priority
                    />
                    <Image
                        src="/page-home/page-4-mobile-head.png"
                        alt="page-1"
                        width={1240}
                        height={1754}
                        className="w-full h-auto sm:hidden block"
                    />
                    <Image
                        src="/page-home/page-4-mobile.png"
                        alt="page-1"
                        width={1240}
                        height={1754}
                        className="w-full h-auto mb-2 sm:hidden block"
                        priority
                    />
                </div>

                <div className="">
                    <Image
                        src="/page-home/page-5.png"
                        alt="page-1"
                        width={1240}
                        height={1754}
                        className="w-full h-auto sm:block hidden"
                        priority
                    />
                    <Image
                        src="/page-home/page-5-mobile-head.png"
                        alt="page-1"
                        width={1240}
                        height={1754}
                        className="w-full h-auto sm:hidden block"
                    />
                    <Image
                        src="/page-home/page-5-mobile-1.png"
                        alt="page-1"
                        width={1240}
                        height={1754}
                        className="w-full h-auto sm:hidden block"
                        priority
                    />
                    <Image
                        src="/page-home/page-5-mobile-2.png"
                        alt="page-1"
                        width={1240}
                        height={1754}
                        className="w-full h-auto sm:hidden block"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
