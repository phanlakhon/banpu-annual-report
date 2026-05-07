import type { PageData } from './types';

const page: PageData = {
    pageId: "035",
    title: { th: "รายงานคณะกรรมการกำหนดค่าตอบแทน", en: "Report of the Compensation Committee" },
    accentColor: "#2a2e82",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_035/035_p01_full_th.webp", en: "/page_035/035_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_title",
                    text: { th: "รายงานคณะกรรมการกำหนดค่าตอบแทน", en: "REPORT OF THE COMPENSATION COMMITTEE" },
                    large: true,
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_035/035_p01_mobile_th.webp", en: "/page_035/035_p01_mobile_en.webp" },
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_035/035_p02_full_th.webp", en: "/page_035/035_p02_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_035/035_p02_mobile_th.webp", en: "/page_035/035_p02_mobile_en.webp" },
                },
            ],
        },
    ],
    prevPage: "034",
    nextPage: "036",
};

export default page;
