import type { PageData } from './types';

const page: PageData = {
    pageId: "030",
    title: { th: "คดีความที่สำคัญในระหว่างปี", en: "Significant Litigation During the Year" },
    accentColor: "#1e90e6",
    layout: "pdf_single_column",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_030/030_p01_full_th.webp", en: "/page_030/030_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_title",
                    text: { th: "คดีความที่สำคัญในระหว่างปี", en: "SIGNIFICANT LITIGATION DURING THE YEAR" },
                    large: true,
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "ในปี 2568 ไม่มีข้อพิพาททางกฎหมาย",
                        en: "In 2025, the Company was not involved in any legal disputes.",
                    },
                },
                {
                    type: "pdf_banner",
                    src: "/page_030/030_p01_mobile.webp",
                },
            ],
        },
    ],
    prevPage: "029",
    nextPage: "031",
};

export default page;
