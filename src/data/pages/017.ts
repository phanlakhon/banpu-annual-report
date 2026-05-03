import type { PageData } from './types';

const page: PageData = {
    pageId: "017",
    title: { th: "ผู้ถือหุ้น", en: "Shareholders" },
    accentColor: "#1e90e6",
    layout: "pdf_single_column",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_017/017_p01_full_th.webp",
                en: "/page_017/017_p01_full_en.webp",
            },
            items: [
                {
                    type: "pdf_title",
                    large: true,
                    text: { th: "ผู้ถือหุ้น", en: "SHAREHOLDERS" },
                },
                {
                    type: "pdf_body_text",
                    paddingLeft: "0.9rem",
                    text: {
                        th: "ผู้ถือหุ้นสูงสุด 10 รายแรก ณ วันที่ 31 ธันวาคม 2568 มีดังนี้",
                        en: "Top 10 Major Shareholders, as of 31 December 2025",
                    },
                },
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_017/017_p01_mobile_1_table_th.webp",
                        en: "/page_017/017_p01_mobile_1_table_en.webp",
                    },
                    minWidth: 800,
                },
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_017/017_p01_mobile_2_th.webp",
                        en: "/page_017/017_p01_mobile_2_en.webp",
                    },
                },
            ],
        },
    ],
    prevPage: "016",
    nextPage: "018",
};

export default page;
