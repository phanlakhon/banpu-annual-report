import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_032/032_p30_full_th.webp", en: "/page_032/032_p30_full_en.webp" },
    items: [
        {
            type: "pdf_sub_title",
            text: { th: "หน่วยงานนักลงทุนสัมพันธ์", en: "Investor Relations" },
            color: "#6b7280",
            size: "sm",
            weight: "medium",
        },
        {
            type: "pdf_body_text",
            text: { th: "บริษัทฯ จัดตั้งหน่วยงานนักลงทุนสัมพันธ์ (Investor Relations) เพื่อให้ผู้ถือหุ้นและนักลงทุนภายนอกสามารถเข้าถึง ข้อมูลของบริษัทได้สะดวก โดยหน่วยงานนักลงทุนสัมพันธ์ทำหน้าที่เปิดเผยข้อมูลสารสนเทศต่าง ๆ เพื่อให้ผู้มีส่วนได้เสียกลุ่มอื่น ๆ ได้รับรู้ข้อมูลอย่างเท่าเทียมและทั่วถึง ตลอดจนสื่อสารโดยตรงกับผู้ถือหุ้น นักลงทุน และนักวิเคราะห์หลักทรัพย์ทั้งในและต่างประเทศ โดยมีนางสาวเกษรา ตั้งวิโรจน์ธรรม เป็นผู้อำนวยการสาย - นักลงทุนสัมพันธ์", en: "The Company has established an Investor Relations Department to ensure that shareholders and external investors can conveniently access corporate information. The Department is responsible for the disclosure of relevant information to provide stakeholders with equitable and comprehensive access to updates while maintaining direct communication with shareholders, investors, and securities analysts, both domestically and internationally. Ms. Kesara Tangwirottham serves as Head of Investor Relations." },
        },
        {
            type: "pdf_banner",
            src: { th: "/page_032/032_p30_mobile_1_table_th.webp", en: "/page_032/032_p30_mobile_1_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_banner",
            src: { th: "/page_032/032_p30_mobile_2_th.webp", en: "" },
        },
    ],
};

export default section;
