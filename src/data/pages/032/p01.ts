import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_032/032_p01_full_th.webp", en: "/page_032/032_p01_full_en.webp" },
    items: [
        {
            type: "pdf_title",
            text: { th: "โครงสร้างการกำกับดูแลกิจการ", en: "CORPORATE GOVERNANCE STRUCTURE" },
            large: true,
        },
        {
            type: "pdf_sub_title",
            text: { th: "โครงสร้างองค์กร", en: "Banpu Group Organizational Structure" },
            color: "#00a6f4",
            size: "md",
            weight: "medium",
        },
        {
            type: "pdf_sub_title",
            text: { th: "ณ วันที่ 31 ธันวาคม 2568", en: "As of 31 December 2025" },
            color: "#2a2e82",
            size: "sm",
            weight: "medium",
        },
        {
            type: "pdf_banner",
            src: { th: "/page_032/032_p01_mobile_table_th.webp", en: "/page_032/032_p01_mobile_table_en.webp" },
            minWidth: 800,
        },
    ],
};

export default section;
