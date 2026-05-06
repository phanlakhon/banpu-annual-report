import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_027/027_p21_full_th.webp", en: "/page_027/027_p21_full_en.webp" },
    items: [
        {
            type: "pdf_banner",
            src: { th: "/page_027/027_p21_mobile_1_table_th.webp", en: "/page_027/027_p21_mobile_1_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_list",
            color: "#00a6f4",
            itemSeparator: "",
            items: [
                {
                    label: { th: "ส่วนของหุ้นกู้ที่ถึงกำหนดไถ่ถอนในหนึ่งปีและหุ้นกู้", en: "Current portion and non-current portion of debentures" },
                    description: { th: "จำนวน 403 ล้านเหรียญสหรัฐและ 3,296 ล้านเหรียญสหรัฐตามลำดับ รวมเป็นจำนวน 3,699 ล้านเหรียญสหรัฐเพิ่มขึ้น 967 ล้านเหรียญสหรัฐ คิดเป็นร้อยละ 35 มีรายละเอียดดังนี้", en: "of $403 million and $3,296 million, respectively, totaling $3,699 million increased by $967 million or 35% derived from:" },
                },
            ],
        },
        {
            type: "pdf_numbered_list",
            items: [
                {
                    label: { th: "", en: "" },
                    description: { th: "พิ่มขึ้นจากการออกหุ้นกู้ในระหว่างงวด จำนวน 937 ล้านเหรียญสหรัฐ", en: "An increase from additions during the year of $937 million." },
                },
                {
                    label: { th: "", en: "" },
                    description: { th: "ลดลงจากการไถ่ถอนในระหว่างงวด จำนวน 176 ล้านเหรียญสหรัฐ", en: "A decrease from redemptions during the year of $176 million." },
                },
                {
                    label: { th: "", en: "" },
                    description: { th: "ลดลงจากการจ่ายค่าใช้จ่ายในการออกหุ้นกู้สุทธิกับการตัดจำหน่ายค่าใช้จ่ายจากการออกหุ้นกู้ จำนวน 11 ล้านเหรียญสหรัฐ", en: "A decrease from deferred financing service fee net with amortization of $11 million." },
                },
                {
                    label: { th: "", en: "" },
                    description: { th: "เพิ่มขึ้นจากผลกระทบของอัตราแลกเปลี่ยนที่ยังไม่เกิดขึ้นจริงจากการแปลงค่าณ วันสิ้นปี จำนวน 217 ล้านเหรียญสหรัฐ", en: "An increase from unrealized effects on exchange rate translation during the year and at end of the year total of $217 million" },
                },
            ],
        },
        {
            type: "pdf_banner",
            src: { th: "/page_027/027_p21_mobile_2_table_th.webp", en: "/page_027/027_p21_mobile_2_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_list",
            color: "#00a6f4",
            itemSeparator: "",
            items: [
                {
                    label: { th: "หนี้สินอนุพันธ์การเงินที่ถึงกำหนดภายในหนึ่งปีและหนี้สินอนุพันธ์การเงิน", en: "Current portion and non-current portion of derivative liabilities" },
                    description: { th: "จำนวน 13 ล้านเหรียญสหรัฐ และ 12 ล้านเหรียญสหรัฐ ตามลำดับ รวมจำนวน 25 ล้านเหรียญสหรัฐ เป็นผลจากการปรับมูลค่ายุติธรรมของตราสารอนุพันธ์ทางการเงินหนี้สินอนุพันธ์การเงิน ณ วันสิ้นปี ประกอบด้วย", en: "reported at $13 million and $12 million, respectively, totaling $25 million. This was a result of changes in fair value of financial derivative liability at the end of the year, that consisted of:" },
                },
            ],
        },
        {
            type: "pdf_numbered_list",
            items: [
                {
                    label: { th: "", en: "" },
                    description: { th: "สัญญาแลกเปลี่ยนเงินตราต่างประเทศและอัตราดอกเบี้ย จำนวน 10 ล้านเหรียญสหรัฐ", en: "Cross currency swap and interest rate swap of $10 million." },
                },
                {
                    label: { th: "", en: "" },
                    description: { th: "สัญญาแลกราคาซื้อขายและสิทธิที่จะซื้อและขายก๊าซธรรมชาติและ ก๊าซธรรมชาติเหลวจำนวน 8 ล้านเหรียญสหรัฐ", en: "Natural gas and natural gas liquid swap and options contracts of $8 million." },
                },
                {
                    label: { th: "", en: "" },
                    description: { th: "สัญญาซื้อขายไฟฟ้าล่วงหน้าและสัญญาให้สิทธิการซื้อไฟฟ้า จำนวน 7 ล้านเหรียญสหรัฐ", en: "Electricity forward contracts and electricity call options of $7 million." },
                },
            ],
        },
    ],
};

export default section;
