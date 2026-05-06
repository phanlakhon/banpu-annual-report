import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_027/027_p07_full_th.webp", en: "/page_027/027_p07_full_en.webp" },
    items: [
        {
            type: "pdf_sub_title",
            text: { th: "1. ธุรกิจเหมืองยุคใหม่", en: "1. Next-Gen Mining" },
            color: "#6b7280",
            weight: "medium",
        },
        {
            type: "pdf_banner",
            src: { th: "/page_027/027_p07_mobile_1_table_th.webp", en: "/page_027/027_p07_mobile_1_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_body_text",
            text: {
                th: "รายได้จากธุรกิจเหมืองยุคใหม่ จำนวน 2,770 ล้านเหรียญสหรัฐ ลดลง 520 ล้านเหรียญสหรัฐ หรือร้อยละ 16 เป็นผลจากราคาขายเฉลี่ยของถ่านหินลดลง จำนวน 21.02 เหรียญสหรัฐต่อตันหรือคิดเป็นร้อยละ 21 และต้นทุนขายเฉลี่ยลดลงจำนวน 13.22 เหรียญสหรัฐต่อตันหรือคิดเป็นร้อยละ 19 ในขณะที่ปริมาณการขายถ่านหินเพิ่มขึ้น จำนวน 2.49 ล้านตันหรือ คิดเป็นร้อยละ 8 เมื่อเทียบกับปีก่อน โดยมีรายละเอียดแยกตามแหล่งผลิตดังนี้",
                en: "Sales from Next-gen mining of $2,770 million decreased by $520 million or 16%, resulted from a decrease in average selling price of $21.02 million per tonne, or 21% and a decrease in average cost of sales of $13.22 per tonne or 19%, whereas sales volume increased by 2.49 million tonnes or 8% compared to 2024, as follows:",
            },
            boldPhrase: { th: "รายได้จากธุรกิจเหมืองยุคใหม่", en: "Sales from Next-gen mining" },
        },
        {
            type: "pdf_banner",
            src: { th: "/page_027/027_p07_mobile_2_table_th.webp", en: "/page_027/027_p07_mobile_2_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_sub_title",
            text: { th: "ธุรกิจเหมืองยุคใหม่ ของเหมืองใน สาธารณรัฐอินโดนีเซีย", en: "Next-Gen Mining in Indonesia" },
            color: "#5b3e96",
            size: "sm",
            weight: "medium",
        },
        {
            type: "pdf_list",
            color: "#00a6f4",
            itemSeparator: "",
            items: [
                {
                    label: { th: "ปริมาณขาย", en: "Sales Volume" },
                    description: { th: "\nสำหรับปี 2568 จำนวน 24.67 ล้านตัน เพิ่มขึ้น 0.63 ล้านตันหรือคิดเป็น ร้อยละ 3เมื่อเทียบกับปีก่อน จากการดำเนินการเชิงพาณิชย์เต็มปีของของแหล่ง GPK และ TIS", en: "\nCoal sales volume was 24.67 million tonnes, increased by 0.63 million tonnes or 3% compared to 2024. This resulted from full year commercial operation of GPK and TIS mines." },
                },
                {
                    label: { th: "ราคาขายเฉลี่ย", en: "Average Selling Price" },
                    description: { th: "\nราคาขายเฉลี่ยเท่ากับ 75.63 เหรียญสหรัฐต่อตัน ลดลง 19.37 เหรียญสหรัฐหรือคิดเป็นร้อยละ 20 เมื่อเทียบกับปีก่อน เป็นผลจากราคาตลาดของถ่านหิน ที่ปรับตัวลดลง", en: "\nAverage selling price per tonne was $75.63, decreased by $19.37 or 20%, compared to 2024, resulting from a decrease in coal market price." },
                },
                {
                    label: { th: "ต้นทุนขายเฉลี่ย", en: "Average Cost of Sales" },
                    description: { th: "\nต้นทุนขายเฉลี่ยต่อตัน 48.26 เหรียญสหรัฐ ลดลง 7.48 เหรียญสหรัฐหรือ คิดเป็นร้อยละ 13 จากปีก่อน เป็นผลจากการบริหารจัดการต้นทุนการผลิตรวมทั้ง ค่าใช้จ่ายของเหมืองอย่างรัดกุม เพื่อรองรับกับความผันผวนของราคาตลาดถ่านหิน", en: "\nAverage cost of sales per tonne was $48.26, decreased by $7.48 or 13% compared to 2024. This resulted from effectively managing production costs and expenditures to cope with the volatility of coal market prices." },
                },
            ],
        },
    ],
};

export default section;
