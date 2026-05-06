import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_031/031_p27_full_th.webp", en: "/page_031/031_p27_full_en.webp" },
    items: [
        {
            type: "pdf_banner",
            src: { th: "", en: "/page_031/031_p27_mobile_1_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_body_text",
            text: { th: "", en: "The Company's information and news are also made available and equally accessible to all stakeholders." },
        },
        {
            type: "pdf_banner",
            src: { th: "", en: "/page_031/031_p27_mobile_2_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_banner",
            src: { th: "/page_031/031_p27_mobile_3_th.webp", en: "/page_031/031_p27_mobile_3_en.webp" },
        },
    ],
};

export default section;
