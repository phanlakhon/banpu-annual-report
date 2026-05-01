import type { PageData } from './types';

const page: PageData = {
    pageId: "015",
    title: { th: "โครงสร้างกลุ่มบริษัทฯ", en: "Banpu Group Structure" },
    accentColor: "#1e90e6",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_015/015_p01_full_th.webp", en: "/page_015/015_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_015/015_p01_mobile_table_th.webp", en: "/page_015/015_p01_mobile_table_en.webp" },
                    minWidth: 1100,
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_015/015_p02_full_th.webp", en: "/page_015/015_p02_full_en.webp" },
            items: [],
        },
    ],
    prevPage: "014",
    nextPage: "016",
};

export default page;
