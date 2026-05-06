import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_031/031_p12_full_th.webp", en: "/page_031/031_p12_full_en.webp" },
    items: [
        {
            type: "pdf_banner",
            src: { th: "/page_031/031_p12_mobile_1_th.webp", en: "/page_031/031_p12_mobile_1_en.webp" },
        },
        {
            type: "pdf_banner",
            src: { th: "", en: "/page_031/031_p12_mobile_2_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_banner",
            src: { th: "", en: "/page_031/031_p12_mobile_3_en.webp" },
        },
        {
            type: "pdf_body_text",
            text: {
                th: "",
                en: "the executive team are held for directors to transfer related technical knowledge and experience about the Company's business. Knowledge-sharing sessions regarding new technological advancements in energy are also organized for the executives so that they can share such experiences and knowledge with Board members. In 2025, the Board of Directors attended seminars and training programs as follows:",
            },
        },
    ],
};

export default section;
