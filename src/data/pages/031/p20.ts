import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_031/031_p20_full_th.webp", en: "/page_031/031_p20_full_en.webp" },
    items: [
        {
            type: "pdf_banner",
            src: { th: "/page_031/031_p20_mobile_1_table_th.webp", en: "" },
            minWidth: 800,
        },
        {
            type: "pdf_banner",
            src: { th: "/page_031/031_p20_mobile_2_th.webp", en: "/page_031/031_p20_mobile_2_en.webp" },
        },
    ],
};

export default section;
