import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_027/027_p14_full_th.webp", en: "/page_027/027_p14_full_en.webp" },
    items: [
        {
            type: "pdf_sub_title",
            text: { th: "4. งบฐานะการเงินรวม", en: "4. Statements of Consolidated Financial Position" },
            color: "#00a6f4",
            size: "sm",
            weight: "medium",
        },
        {
            type: "pdf_body_text",
            text: {
                th: "งบฐานะการเงินรวม ณ วันที่ 31 ธันวาคม 2568 เปรียบเทียบกับงบฐานะการเงินรวม ณ วันที่ 31 ธันวาคม 2567",
                en: "Statements of Consolidated Financial Position as of 31 December 2025 in comparison with 31 December 2024.",
            },
        },
        {
            type: "pdf_banner",
            src: { th: "/page_027/027_p14_mobile_1_table_th.webp", en: "/page_027/027_p14_mobile_1_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_body_text",
            text: {
                th: "4.1 สินทรัพย์รวม จำนวน 13,941 ล้านเหรียญสหรัฐ เพิ่มขึ้น 1,542 ล้านเหรียญสหรัฐ คิดเป็นร้อยละ 12 เมื่อเทียบกับ สินทรัพย์รวม ณ วันที่ 31 ธันวาคม 2567 โดยมีรายละเอียดของการเพิ่มขึ้นและลดลงที่มีสาระสำคัญดังนี้",
                en: "4.1 Total Assets of $13,941 million increased by $1,542 million or 12% compared to total assets as of 31 December 2024 with details described below:",
            },
            boldPhrase: { th: "4.1 สินทรัพย์รวม", en: "4.1 Total Assets" },
        },
        {
            type: "pdf_banner",
            src: { th: "/page_027/027_p14_mobile_2_table_th.webp", en: "/page_027/027_p14_mobile_2_table_en.webp" },
            minWidth: 800,
        },
    ],
};

export default section;
