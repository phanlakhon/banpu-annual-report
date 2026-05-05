import type { PageData } from './types';

const page: PageData = {
    pageId: "020",
    title: { th: "นโยบายการจ่ายเงินปันผล", en: "Dividend Policy" },
    accentColor: "#1e90e6",
    layout: "pdf_single_column",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_020/020_p01_full_th.webp",
                en: "/page_020/020_p01_full_en.webp",
            },
            items: [
                {
                    type: "pdf_title",
                    large: true,
                    text: { th: "นโยบายการจ่ายเงินปันผล", en: "DIVIDEND POLICY" },
                },
                { type: "pdf_gradient_divider" },
                {
                    type: "pdf_gradient_text",
                    text: {
                        th: "บริษัทฯ มีนโยบายที่จะจ่ายเงินปันผลประมาณร้อยละ 50 ของกำไรสุทธิของงบการเงินรวมหลังหักเงินสำรองต่าง ๆ ทุกประเภทที่กฎหมายและบริษัทฯ ได้กำหนดไว้ อย่างไรก็ตามอัตราการจ่ายเงินปันผลดังกล่าวจะขึ้นอยู่กับกระแสเงินสดและภาระการลงทุนของบริษัทฯ และบริษัทในเครือ รวมถึงข้อจำกัดทางกฎหมายและความจำเป็นอื่น ๆ",
                        en: "Banpu has a policy to pay approximately 50% of its net profits from the consolidated financial statements, less all kinds of statutory and corporate reserves. However, the dividend payout rate will depend on cash flows, investment obligations of the Company and its affiliates as well as legal restrictions and other requirements.",
                    },
                },
                { type: "pdf_gradient_divider", thin: true },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "บริษัทย่อยมีนโยบายจ่ายเงินปันจากผลกำไรสุทธิจากการประกอบกิจการหลังหักเงินสำรองตามที่กฎหมายกำหนดโดยคณะกรรมการจะพิจารณาถึงกำไรจากการดำเนินงาน เงื่อนไขทางการเงิน และความต้องการเงินทุน หลังจากนั้น จึงนำเสนอผู้ถือหุ้นเพื่ออนุมัติการจ่ายเงินปันผล โดย 5 ปีที่ผ่านมา บริษัท บ้านปู จำกัด (มหาชน) มีการจ่ายเงินปันผลตามรายละเอียดดังต่อไปนี้",
                        en: "The Company's affiliates have a policy to pay the dividend from net profits after the deduction of all reserves required by governing laws. The Board of Directors shall consider the dividend payout rate based on operating income, financial conditions, and capital requirements. After that, it will be proposed to shareholders for approval. For the past five years, Banpu Public Company Limited has paid out dividends as follows:",
                    },
                },
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_020/020_p01_mobile_table_th.webp",
                        en: "/page_020/020_p01_mobile_table_en.webp",
                    },
                    minWidth: 800,
                },
            ],
        },
    ],
    prevPage: "019",
    nextPage: "021",
};

export default page;
