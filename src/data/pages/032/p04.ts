import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_032/032_p04_full_th.webp", en: "/page_032/032_p04_full_en.webp" },
    items: [
        {
            type: "pdf_sub_title",
            text: { th: "ความรู้ความชำนาญ (Board Skill Matrix)", en: "Board Skill Matrix" },
            color: "#2a2e82",
            size: "sm",
            weight: "medium",
        },
        {
            type: "pdf_body_text",
            text: {
                th: "คณะกรรมการบริษัทได้จัดให้มีการประเมินความหลากหลายของความรู้ความชำนาญของคณะกรรมการ เพื่อให้มั่นใจว่า คุณสมบัติของคณะกรรมการชุดปัจจุบันมีความเหมาะสมและสอดรับกับกลยุทธ์และทิศทางการดำเนินธุรกิจของบริษัทฯ ดังแสดงผลในตาราง Board Skill Matrix นี้",
                en: "The Board of Directors has assessed the diversity of expertise within the Board to ensure that the qualifications of the current directors are appropriate and align with the Company's strategies and business directions, as shown in the Board Skill Matrix:",
            },
        },
        {
            type: "pdf_banner",
            src: { th: "/page_032/032_p04_mobile_table_th.webp", en: "/page_032/032_p04_mobile_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_sub_title",
            text: { th: "องค์ประกอบของคณะกรรมการบริษัท", en: "Board Composition" },
            color: "#2a2e82",
            size: "sm",
            weight: "medium",
        },
        {
            type: "pdf_body_text",
            text: {
                th: "โครงสร้างคณะกรรมการบริษัท ณ วันที่ 31 ธันวาคม 2568 มีจำนวนกรรมการรวมทั้งสิ้น 13 คน ประกอบด้วยกรรมการอิสระ 5 คน กรรมการที่ไม่เป็นผู้บริหาร 7 คน และกรรมการที่เป็นผู้บริหาร 1 คน",
                en: "As of 31 December 2025, the Board of Directors is composed of 13 directors: 5 independent directors, 7 non-executive directors, and an executive director.",
            },
        },
    ],
};

export default section;
