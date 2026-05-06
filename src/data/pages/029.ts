import type { PageData } from './types';

const page: PageData = {
    pageId: "029",
    title: { th: "บุคคลอ้างอิงอื่น ๆ", en: "Other References" },
    accentColor: "#1e90e6",
    layout: "pdf_single_column",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_029/029_p01_full_th.webp", en: "/page_029/029_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_029/029_p01_mobile_1_th.webp", en: "/page_029/029_p01_mobile_1_en.webp" },
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_029/029_p01_mobile_2_table_th.webp", en: "/page_029/029_p01_mobile_2_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
    ],
    prevPage: "028",
    nextPage: "030",
};

export default page;
