import type { PageData } from './types';

const page: PageData = {
    pageId: "001",
    title: { th: "จุดเด่นในรอบปี", en: "Financial Highlights" },
    accentColor: "#1e90e6",
    backgroundColor: "#ffffff",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            backgroundColor: "#d0f5fe",
            desktopFullImage: {
                th: "/page_001/001_p01_full_th.webp",
                en: "/page_001/001_p01_full_en.webp",
            },
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_001/001_p01_mobile_1_th.webp",
                        en: "/page_001/001_p01_mobile_1_en.webp",
                    },
                },
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_001/001_p01_mobile_2_th.webp",
                        en: "/page_001/001_p01_mobile_2_en.webp",
                    },
                },
            ],
        },
        {
            type: "pdf_page",
            backgroundColor: "#c4f6fd",
            desktopFullImage: {
                th: "/page_001/001_p02_full_th.webp",
                en: "/page_001/001_p02_full_en.webp",
            },
            items: [
                {
                    type: "pdf_note",
                    text: {
                        th: "รายงานฉบับนี้นำเสนอผลการดำเนินงานของปี 2568 ก่อนวันที่ 29 มกราคม 2569 ที่ประชุมวิสามัญผู้ถือหุ้นครั้งที่ 1/2569 ที่ได้มีมติอนุมัติการปรับโครงสร้างกลุ่มบริษัท โดยการควบรวม (Amalgamation) ระหว่างบริษัทฯ และ BPP เพื่อจัดตั้งบริษัทใหม่ (NewCo)",
                        en: "This report presents the operating results for FY2025 prior to 29 January 2026, on which date the Extraordinary General Meeting of Shareholders No. 1/2026 approved the group restructuring through an amalgamation between the Company and BPP to establish a new company (NewCo).",
                    },
                },
            ],
        },
        {
            type: "pdf_page",
            backgroundColor: "#ddf7ff",
            desktopFullImage: {
                th: "/page_001/001_p03_full_th.webp",
                en: "/page_001/001_p03_full_en.webp",
            },
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_001/001_p03_mobile_th.webp",
                        en: "/page_001/001_p03_mobile_en.webp",
                    },
                },
            ],
        },
        {
            type: "pdf_page",
            backgroundColor: "#ffffff",
            desktopFullImage: {
                th: "/page_001/001_p04_full_th.webp",
                en: "/page_001/001_p04_full_en.webp",
            },
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_001/001_p04_mobile_table_th.webp",
                        en: "/page_001/001_p04_mobile_table_en.webp",
                    },
                    minWidth: 560,
                },
            ],
        },
    ],
    prevPage: "000",
    nextPage: "002",
};

export default page;
