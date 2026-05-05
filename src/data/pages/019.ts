import type { PageData } from './types';

const page: PageData = {
    pageId: "019",
    title: { th: "หุ้นกู้", en: "Debentures" },
    accentColor: "#1e90e6",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_019/019_p01_full_th.webp",
                en: "/page_019/019_p01_full_en.webp",
            },
            items: [
                {
                    type: "pdf_title",
                    large: true,
                    text: { th: "หุ้นกู้", en: "DEBENTURES" },
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "หุ้นกู้ชนิดระบุชื่อผู้ถือ ประเภทไม่ด้อยสิทธิ ไม่มีหลักประกัน",
                        en: "Unsecured and Unsubordinated Registered Debentures",
                    },
                },
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_019/019_p01_mobile_table_th.webp",
                        en: "/page_019/019_p01_mobile_table_en.webp",
                    },
                    minWidth: 800,
                },
                {
                    type: "pdf_sub_title",
                    color: "#00a6f4",
                    text: {
                        th: "ข้อมูลเกี่ยวกับการใช้เงินที่ได้จากการเสนอขายหุ้นกู้",
                        en: "Use of proceeds from debenture issuance",
                    },
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "ในปี 2568 บริษัทฯ ได้ออกหุ้นกู้และได้นำเงินที่ได้จากการออกและเสนอขายหุ้นกู้ดังกล่าวไปใช้ตามวัตถุประสงค์ที่ระบุในแบบแสดงรายการข้อมูลการเสนอขายหุ้นกู้ครบถ้วนแล้ว",
                        en: "In 2025, the Company issued debentures and has fully utilized the proceeds from the issuance of such debentures in accordance with the purposes stated in the debenture offering memorandum.",
                    },
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_019/019_p02_full_th.webp",
                en: "/page_019/019_p02_full_en.webp",
            },
            items: [],
        },
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_019/019_p03_full_th.webp",
                en: "",
            },
            items: [],
        },
    ],
    prevPage: "018",
    nextPage: "020",
};

export default page;
