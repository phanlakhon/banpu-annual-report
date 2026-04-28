import type { PageData } from './types';

const page: PageData = {
    pageId: "005",
    title: { th: "นโยบายและภาพรวมการประกอบธุรกิจ", en: "Policy and Business Overview" },
    accentColor: "#1e90e6",
    backgroundColor: "#f0f8ff",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: "/page_005/005_p01_full.webp",
            items: [],
        },
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_005/005_p02_full_th.webp",
                en: "/page_005/005_p02_full_en.webp",
            },
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_005/005_p02_mobile_th.webp",
                        en: "/page_005/005_p02_mobile_en.webp",
                    },
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_005/005_p03_full_th.webp",
                en: "/page_005/005_p03_full_en.webp",
            },
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_005/005_p03_mobile_th.webp",
                        en: "/page_005/005_p03_mobile_en.webp",
                    },
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_005/005_p04_full_th.webp",
                en: "/page_005/005_p04_full_en.webp",
            },
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_005/005_p04_mobile_th.webp",
                        en: "/page_005/005_p04_mobile_en.webp",
                    },
                },
            ],
        },
        {
            type: "pdf_page",
            backgroundColor: "#ffffff",
            desktopFullImage: {
                th: "/page_005/005_p05_full_th.webp",
                en: "/page_005/005_p05_full_en.webp",
            },
            items: [
                {
                    type: "pdf_sub_title",
                    text: {
                        th: '4 กลุ่มธุรกิจหลัก ภายใต้กลยุทธ์ "Energy Symphonics" หลังการปรับโครงสร้างเสร็จสิ้น',
                        en: 'Four Business Pillars of Banpu Under the "Energy Symphonics" Strategy after the Completion of Organizational Restructuring',
                    },
                },
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_005/005_p05_mobile_th.webp",
                        en: "/page_005/005_p05_mobile_en.webp",
                    },
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_005/005_p06_full_th.webp",
                en: "/page_005/005_p06_full_en.webp",
            },
            items: [
                {
                    type: "pdf_banner",
                    src: "/page_005/005_p06_mobile_en.webp",
                },
            ],
        },
    ],
    prevPage: "004",
    nextPage: "006",
};

export default page;
