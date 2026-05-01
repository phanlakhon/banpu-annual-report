import type { PageData } from './types';

const page: PageData = {
    pageId: "014",
    title: { th: "ปริมาณสำรองถ่านหินและก๊าซธรรมชาติ", en: "Coal and Natural Gas Reserves" },
    accentColor: "#1e90e6",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_014/014_p01_full_th.webp",
                en: "/page_014/014_p01_full_en.webp",
            },
            items: [
                {
                    type: "pdf_title",
                    large: true,
                    text: { th: "ปริมาณสำรองถ่านหินและก๊าซธรรมชาติ", en: "COAL AND NATURAL GAS RESERVES" },
                },
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_014/014_p01_mobile_table_th.webp",
                        en: "/page_014/014_p01_mobile_table_en.webp",
                    },
                    minWidth: 800,
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_014/014_p02_full_th.webp", en: "/page_014/014_p02_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_014/014_p02_mobile_table_th.webp", en: "/page_014/014_p02_mobile_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
    ],
    prevPage: "013",
    nextPage: "015",
};

export default page;
