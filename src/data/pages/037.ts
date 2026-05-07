import type { PageData } from './types';

const page: PageData = {
    pageId: "037",
    title: { th: "รายงานคณะกรรมการสิ่งแวดล้อม สังคม และการกำกับดูแลกิจการ (คณะกรรมการ ESG)", en: "Environment, Social and Governance (ESG) Committee Report" },
    accentColor: "#2a2e82",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_037/037_p01_full_th.webp", en: "/page_037/037_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_title",
                    text: { th: "รายงานคณะกรรมการสิ่งแวดล้อม สังคมและการกำกับดูแลกิจการ (คณะกรรมการ ESG)", en: "ENVIRONMENT, SOCIAL AND GOVERNANCE (ESG) COMMITTEE REPORT" },
                    large: true,
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_037/037_p01_mobile_th.webp", en: "/page_037/037_p01_mobile_en.webp" },
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_037/037_p02_full_th.webp", en: "/page_037/037_p02_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_037/037_p02_mobile_th.webp", en: "/page_037/037_p02_mobile_en.webp" },
                },
            ],
        },
    ],
    prevPage: "036",
    nextPage: "038",
};

export default page;
