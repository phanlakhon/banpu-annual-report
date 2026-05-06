import type { PageData } from './types';

const page: PageData = {
    pageId: "028",
    title: { th: "อัตราส่วนทางการเงิน", en: "Financial Ratio" },
    accentColor: "#1e90e6",
    layout: "pdf_single_column",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_028/028_p01_full_th.webp", en: "/page_028/028_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_028/028_p01_mobile_1_th.webp", en: "/page_028/028_p01_mobile_1_en.webp" },
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_028/028_p01_mobile_2_table_th.webp", en: "/page_028/028_p01_mobile_2_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
    ],
    prevPage: "027",
    nextPage: "029",
};

export default page;
