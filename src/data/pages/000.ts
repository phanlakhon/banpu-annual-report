import type { PageData } from './types';

const page: PageData = {
    pageId: "000",
    title: { th: "บทนำ", en: "Introduction" },
    accentColor: "#1e90e6",
    backgroundColor: "#f0f8ff",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_intro/intro_p01_full_th.webp",
                        en: "/page_intro/intro_p01_full_en.webp",
                    },
                    mobileSrcs: [
                        {
                            th: "/page_intro/intro_p01_mobile_th.webp",
                            en: "/page_intro/intro_p01_mobile_en.webp",
                        },
                    ],
                },
            ],
        },
        {
            type: "pdf_page",
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_intro/intro_p02_full_th.webp",
                        en: "/page_intro/intro_p02_full_en.webp",
                    },
                    mobileSrcs: [
                        {
                            th: "/page_intro/intro_p02_mobile_mobile_1_th.webp",
                            en: "/page_intro/intro_p02_mobile_mobile_1_en.webp",
                        },
                        {
                            th: "/page_intro/intro_p02_mobile_mobile_2_th.webp",
                            en: "/page_intro/intro_p02_mobile_mobile_2_en.webp",
                        },
                    ],
                },
            ],
        },
    ],
    prevPage: undefined,
    nextPage: "001",
};

export default page;
