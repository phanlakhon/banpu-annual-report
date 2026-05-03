import type { PageData } from './types';

const page: PageData = {
    pageId: "021",
    title: { th: "การบริหารจัดการความเสี่ยง", en: "Risk Management" },
    accentColor: "#1e90e6",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_021/021_p01_full_th.webp",
                en: "/page_021/021_p01_full_en.webp",
            },
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_021/021_p01_mobile_th.webp",
                        en: "/page_021/021_p01_mobile_en.webp",
                    },
                },
                {
                    type: "pdf_sub_title",
                    color: "#00a6f4",
                    text: { th: "โครงสร้างการบริหารความเสี่ยง", en: "Risk Management Structure" },
                },
                {
                    type: "pdf_body_text",
                    paddingLeft: "0.9rem",
                    text: {
                        th: "บริษัทฯ ให้ความสำคัญกับการบริหารความเสี่ยงในฐานะกลไกสำคัญในการสนับสนุนการดำเนินกลยุทธ์ การตัดสินใจลงทุนและการสร้างการเติบโตอย่างยั่งยืนในระยะยาว โดยกำหนดโครงสร้างการบริหารความเสี่ยงที่ชัดเจน ครอบคลุมตั้งแต่ระดับคณะกรรมการผู้บริหารระดับสูง ไปจนถึงหน่วยงานปฏิบัติการ เพื่อให้การบริหารความเสี่ยงถูกนำมาใช้ประกอบการตัดสินใจในทุกระดับขององค์กร ภายใต้แนวคิดการบริหารความเสี่ยงแบบบูรณาการทั่วทั้งองค์กร (Enterprise-wide Risk Management)",
                        en: "Banpu places great importance on risk management, viewing it as a key mechanism for supporting strategy execution, guiding investment decisions, and fostering long-term sustainable growth. A clearly defined risk management structure has been established, encompassing the Board of Directors, senior management, and operational units to ensure that risk management is integrated into decision-making at all levels, in line with the principles of enterprise-wide risk management.",
                    },
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_021/021_p02_full_th.webp", en: "/page_021/021_p02_full_en.webp" },
            items: [
                { type: "pdf_banner", src: { th: "/page_021/021_p02_mobile_1_table_th.webp", en: "/page_021/021_p02_mobile_1_table_en.webp" }, minWidth: 800 },
                { type: "pdf_banner", src: { th: "/page_021/021_p02_mobile_2_th.webp", en: "/page_021/021_p02_mobile_2_en.webp" } },
            ],
        },
    ],
    prevPage: "020",
    nextPage: "022",
};

export default page;
