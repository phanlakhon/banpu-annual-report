import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_031/031_p11_full_th.webp", en: "/page_031/031_p11_full_en.webp" },
    items: [
        {
            type: "pdf_banner",
            src: { th: "/page_031/031_p11_mobile_1_th.webp", en: "/page_031/031_p11_mobile_1_en.webp" },
        },
        {
            type: "pdf_banner",
            src: { th: "/page_031/031_p11_mobile_2_table_th.webp", en: "" },
            minWidth: 800,
        },
    ],
};

export default section;
