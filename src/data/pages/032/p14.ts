import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_032/032_p14_full_th.webp", en: "/page_032/032_p14_full_en.webp" },
    items: [
        {
            type: "pdf_sub_title",
            text: { th: "", en: "Shareholding of the Board of Directors and Executives as of 31 December 2025" },
            color: "#00a6f4",
            size: "sm",
            weight: "medium",
        },
        {
            type: "pdf_body_text",
            text: { th: "", en: "Members of the Board of Directors are required to report their shareholdings in Banpu Public Company Limited, including those held by their spouses, minor children who are not sui juris, and related juristic persons. Such disclosures must be made at the Board meeting following their appointment as directors. In addition, if any directors, their spouses, minor children who are not sui juris, or related juristic persons buy or sell the Company's shares, they are required to report such transactions at the subsequent Board meeting. Shareholding of the Board of Directors and Executives as of 31 December 2025 is shown in the following table." },
        },
        {
            type: "pdf_banner",
            src: { th: "", en: "/page_032/032_p14_mobile_table_en.webp" },
            minWidth: 800,
        },
    ],
};

export default section;
