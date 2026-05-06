import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_031/031_p26_full_th.webp", en: "/page_031/031_p26_full_en.webp" },
    items: [
        {
            type: "pdf_body_text",
            text: { th: "นอกจากนี้ได้มีการเปิดเผยข้อมูลสารสนเทศต่าง ๆ เพื่อให้ผู้มีส่วนได้เสียกลุ่มอื่น ๆ ได้รับรู้ข้อมูลอย่างเท่าเทียมและทั่วถึง", en: "" },
        },
        {
            type: "pdf_banner",
            src: { th: "/page_031/031_p26_mobile_1_table_th.webp", en: "" },
            minWidth: 800,
        },
        {
            type: "pdf_banner",
            src: { th: "/page_031/031_p26_mobile_2_th.webp", en: "/page_031/031_p26_mobile_2_en.webp" },
        },
    ],
};

export default section;
