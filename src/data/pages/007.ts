import type { PageData } from './types';

const page: PageData = {
    pageId: "007",
    title: { th: "วิสัยทัศน์และพันธกิจ", en: "Vision & Mission" },
    accentColor: "#4b3fa7",
    layout: "pdf_single_full",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_007/007_p01_full_th.webp",
                en: "/page_007/007_p01_full_en.webp",
            },
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_007/007_p01_mobile_th.webp",
                        en: "/page_007/007_p01_mobile_en.webp",
                    },
                },
            ],
        },
    ],
    prevPage: "006",
    nextPage: "008",
};

export default page;
