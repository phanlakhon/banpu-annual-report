import type { PageData } from './types';

const page: PageData = {
    pageId: "009",
    title: { th: "ข้อมูลทั่วไปของบริษัท", en: "Banpu Information" },
    accentColor: "#1e90e6",
    layout: "pdf_single_full",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_009/009_p01_full_th.webp",
                en: "/page_009/009_p01_full_en.webp",
            },
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_009/009_p01_mobile_th.webp",
                        en: "/page_009/009_p01_mobile_en.webp",
                    },
                },
            ],
        },
    ],
    prevPage: "008",
    nextPage: "010",
};

export default page;
