import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_032/032_p17_full_th.webp", en: "/page_032/032_p17_full_en.webp" },
    items: [
        {
            type: "pdf_banner",
            src: { th: "/page_032/032_p17_mobile_1_table_th.webp", en: "/page_032/032_p17_mobile_1_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_banner",
            src: { th: "/page_032/032_p17_mobile_2_th.webp", en: "" },
        },
    ],
};

export default section;
