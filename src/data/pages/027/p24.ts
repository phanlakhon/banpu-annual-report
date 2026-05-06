import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_027/027_p24_full_th.webp", en: "/page_027/027_p24_full_en.webp" },
    items: [
        {
            type: "pdf_body_text",
            text: {
                th: "5.3 เงินสดสุทธิได้มาจากกิจกรรมจัดหาเงิน จำนวน 722 ล้านเหรียญสหรัฐ ประกอบด้วย",
                en: "5.3 Net cash received from financing activities of $722 million; comprised of",
            },
            boldPhrase: { th: "กิจกรรมจัดหาเงิน", en: "financing activities" },
        },
        {
            type: "pdf_list",
            paddingLeft: "1.5rem",
            items: [
                { th: "เงินสดรับจากเงินกู้ยืมระยะสั้นและระยะยาวจากสถาบันการเงินและจากการออกหุ้นกู้ จำนวน 4,173 ล้านเหรียญสหรัฐ", en: "Receipts from short-term and long-term loans from financial institutions, and debentures of $4,173 million." },
                { th: "จ่ายคืนเงินกู้ยืมระยะสั้นและระยะยาวจากสถาบันการเงิน หุ้นกู้และเจ้าหนี้สัญญาเช่าการเงิน จำนวน 3,303 ล้านเหรียญสหรัฐ", en: "Repayments of short-term and long-term loans from financial institutions, redemption of debentures and lease payment of $3,303 million." },
                { th: "เงินสดจ่ายค่าธรรมเนียมในการจัดหาหุ้นกู้ จำนวน 16 ล้านเหรียญสหรัฐ", en: "Payment for debenture issuance fee of $16 million." },
                { th: "เงินสดรับสุทธิจากการเสนอขายหุ้นสามัญที่ออกใหม่ของบริษัทย่อย จำนวน 170 ล้านเหรียญสหรัฐ", en: "Receipts from increase in share capital of a subsidiary from non-controlling interests of $170 million." },
                { th: "เงินปันผลจ่ายให้แก่ผู้ถือหุ้นของบริษัทและส่วนได้เสียที่ไม่มีอำนาจควบคุมของบริษัทย่อยจำนวน 154 ล้านเหรียญสหรัฐ", en: "Dividend paid to shareholders and non-controlling interest of subsidiaries of $154 million." },
                { th: "เงินสดจ่ายจากการซื้อหุ้นของบริษัทย่อยจากส่วนได้เสียที่ไม่มีอำนาจควบคุม จำนวน 158 ล้านเหรียญสหรัฐ", en: "Payment for purchase of subsidiary's share from non-controlling interests of $158 million" },
                { th: "เงินสดรับจากการออกสิทธิในการขายคืนแก่ส่วนได้เสียที่ไม่มีอำนาจควบคุมและอื่น ๆ จำนวน 10 ล้านเหรียญสหรัฐ", en: "Receipts from put option liabilities over non-controlling interests of $10 million." },
            ],
        },
        {
            type: "pdf_sub_title",
            text: { th: "6. ปริมาณสำรองถ่านหินคงเหลือ", en: "6. Coal Reserves" },
            color: "#00a6f4",
            size: "sm",
            weight: "medium",
        },
        {
            type: "pdf_body_text",
            text: {
                th: "ปริมาณการจำหน่ายและปริมาณสำรองถ่านหินคงเหลือ สำหรับปีสื้นสุดวันที่ 31 ธันวาคม 2568",
                en: "The quantity of sales and remaining of coal reserves for the year ended 31 December 2025:",
            },
        },
        {
            type: "pdf_banner",
            src: { th: "/page_027/027_p24_mobile_table_th.webp", en: "/page_027/027_p24_mobile_table_en.webp" },
            minWidth: 800,
        },
    ],
};

export default section;
