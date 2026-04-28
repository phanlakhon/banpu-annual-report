import type { PageData } from './types';

const page: PageData = {
    pageId: "002",
    title: { th: "ผลการดำเนินงานในรอบปีที่ผ่านมา", en: "Operational Results" },
    accentColor: "#2a2e82",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            backgroundColor: "#ffffff",
            desktopFullImage: {
                th: "/page_002/002_p01_full_th.webp",
                en: "/page_002/002_p01_full_en.webp",
            },
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_002/002_p01_table_th.webp",
                        en: "/page_002/002_p01_table_en.webp",
                    },
                    minWidth: 560,
                },
            ],
        },
        {
            type: "pdf_page",
            backgroundColor: "#e3f6fc",
            desktopFullImage: {
                th: "/page_002/002_p02_full_th.webp",
                en: "/page_002/002_p02_full_en.webp",
            },
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_002/002_p02_mobile_th.webp",
                        en: "/page_002/002_p02_mobile_en.webp",
                    },
                },
            ],
        },
    ],
    prevPage: "001",
    nextPage: "003",
};

export default page;
