import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_027/027_p25_full_th.webp", en: "/page_027/027_p25_full_en.webp" },
    items: [
        {
            type: "pdf_sub_title",
            text: { th: "7. ปริมาณสำรองก๊าซธรรมชาติคงเหลือ", en: "7. Natural Gas Reserves" },
            color: "#00a6f4",
            size: "sm",
            weight: "medium",
        },
        {
            type: "pdf_body_text",
            text: {
                th: "ปริมาณการจำหน่ายและปริมาณสำรองก๊าซธรรมชาติคงเหลือ สำหรับปีสิ้นสุดวันที่ 31 ธันวาคม 2568",
                en: "The quantity of sales and remaining of natural gas reserves for the year ended 31 December 2025",
            },
        },
        {
            type: "pdf_banner",
            src: { th: "/page_027/027_p25_mobile_table_th.webp", en: "/page_027/027_p25_mobile_table_en.webp" },
            minWidth: 800,
        },
    ],
};

export default section;
