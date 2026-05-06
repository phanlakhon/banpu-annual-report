import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_031/031_p03_full_th.webp", en: "/page_031/031_p03_full_en.webp" },
    items: [
        {
            type: "pdf_title",
            text: { th: "นโยบายการกำกับดูแลกิจการ", en: "CORPORATE GOVERNANCE POLICY" },
            large: true,
        },
        {
            type: "pdf_banner",
            src: { th: "/page_031/031_p03_mobile_th.webp", en: "/page_031/031_p03_mobile_en.webp" },
        },
    ],
};

export default section;
