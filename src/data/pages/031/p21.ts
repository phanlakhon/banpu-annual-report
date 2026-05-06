import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_031/031_p21_full_th.webp", en: "/page_031/031_p21_full_en.webp" },
    items: [
        {
            type: "pdf_banner",
            src: { th: "", en: "/page_031/031_p21_mobile_1_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_banner",
            src: { th: "/page_031/031_p21_mobile_2_th.webp", en: "/page_031/031_p21_mobile_2_en.webp" },
        },
    ],
};

export default section;
