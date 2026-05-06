import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_027/027_p05_full_th.webp", en: "/page_027/027_p05_full_en.webp" },
    items: [
        {
            type: "pdf_sub_title",
            text: { th: "3. การวิเคราะห์ผลการดำเนินงานของบริษัท", en: "3. Group Performance Analysis" },
            color: "#00a6f4",
            weight: "medium",
        },
        {
            type: "pdf_body_text",
            text: {
                th: "การวิเคราะห์ผลการดำเนินงานเปรียบเทียบสำหรับปี สิ้นสุดวันที่ 31 ธันวาคม 2568 และ 2567 สรุปได้ดังนี้",
                en: "The analysis and explanation of Banpu Group performance for the year ended 31 December 2025 and 2024 were as follows:",
            },
        },
        {
            type: "pdf_sub_title",
            text: { th: "งบกำไรขาดทุนรวมสำหรับปี สิ้นสุดวันที่ 31 ธันวาคม 2568 เปรียบเทียบกับปี 2567", en: "Consolidated Statement of Income for the year ended 31 December 2025 and 2024" },
            color: "#6b7280",
            size: "sm",
            weight: "medium",
        },
        {
            type: "pdf_banner",
            src: { th: "/page_027/027_p05_mobile_table_th.webp", en: "/page_027/027_p05_mobile_table_en.webp" },
            minWidth: 800,
        },
    ],
};

export default section;
