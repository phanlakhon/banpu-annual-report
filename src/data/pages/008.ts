import type { PageData } from './types';

const page: PageData = {
    pageId: "008",
    title: {
        th: "สรุปการเปลี่ยนแปลงและพัฒนาการที่สำคัญในรอบปี 2568 รวมทั้งเหตุการณ์ปัจจุบัน",
        en: "Summary of Major Changes and Development in 2025 and Current Events",
    },
    accentColor: "#1e90e6",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            backgroundColor: "#ffffff",
            desktopFullImage: {
                th: "/page_008/008_p01_full_th.webp",
                en: "/page_008/008_p01_full_en.webp",
            },
            items: [
                {
                    type: "pdf_title",
                    text: {
                        th: "สรุปการเปลี่ยนแปลงและพัฒนาการที่สำคัญในรอบปี 2568 รวมทั้งเหตุการณ์ปัจจุบัน",
                        en: "SUMMARY OF MAJOR CHANGES AND DEVELOPMENT IN 2025 AND CURRENT EVENTS",
                    },
                },
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_008/008_p01_mobile_th.webp",
                        en: "/page_008/008_p01_mobile_en.webp",
                    },
                },
            ],
        },
        ...["p02","p03","p04","p05","p06","p07","p08","p09"].map((p) => ({
            type: "pdf_page" as const,
            desktopFullImage: {
                th: `/page_008/008_${p}_full_th.webp`,
                en: `/page_008/008_${p}_full_en.webp`,
            },
            items: [
                {
                    type: "pdf_banner" as const,
                    src: {
                        th: `/page_008/008_${p}_mobile_th.webp`,
                        en: `/page_008/008_${p}_mobile_en.webp`,
                    },
                },
            ],
        })),
    ],
    prevPage: "007",
    nextPage: "009",
};

export default page;
