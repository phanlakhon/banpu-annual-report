import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_031/031_p23_full_th.webp", en: "/page_031/031_p23_full_en.webp" },
    items: [
        {
            type: "pdf_banner",
            src: { th: "/page_031/031_p23_mobile_1_th.webp", en: "/page_031/031_p23_mobile_1_en.webp" },
        },
        {
            type: "pdf_banner",
            src: { th: "", en: "/page_031/031_p23_mobile_2_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_banner",
            src: { th: "", en: "/page_031/031_p23_mobile_3_en.webp" },
        },
    ],
};

export default section;
