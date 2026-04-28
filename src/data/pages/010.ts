import type { PageData } from './types';

const page: PageData = {
    pageId: "010",
    title: { th: "โครงสร้างรายได้", en: "Revenue Structure" },
    accentColor: "#1e90e6",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_010/010_p01_full_th.webp",
                en: "/page_010/010_p01_full_en.webp",
            },
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_010/010_p01_head_th.webp",
                        en: "/page_010/010_p01_head_en.webp",
                    },
                },
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_010/010_p01_table_th.webp",
                        en: "/page_010/010_p01_table_en.webp",
                    },
                    minWidth: 560,
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_010/010_p02_full_th.webp",
                en: "/page_010/010_p02_full_en.webp",
            },
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_010/010_p02_table_th.webp",
                        en: "/page_010/010_p02_table_en.webp",
                    },
                    minWidth: 560,
                },
            ],
        },
    ],
    prevPage: "009",
    nextPage: "011",
};

export default page;
