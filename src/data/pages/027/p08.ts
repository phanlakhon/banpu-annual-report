import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_027/027_p08_full_th.webp", en: "/page_027/027_p08_full_en.webp" },
    items: [
        {
            type: "pdf_banner",
            src: { th: "/page_027/027_p08_mobile_1_table_th.webp", en: "/page_027/027_p08_mobile_1_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_sub_title",
            text: { th: "ธุรกิจเหมืองยุคใหม่ ของเหมืองในประเทศออสเตรเลีย", en: "Next-Gen Mining in Australia" },
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
                    description: { th: "\nสำหรับปี 2568 จำนวน 7.16 ล้านตัน ลดลง 0.76 ล้านตัน หรือร้อยละ 10 เมื่อเทียบกับปีก่อน ซึ่งเป็นผลมาจากปริมาณการผลิตและขายถ่านหินภายในประเทศที่ลดลงของเหมือง Springvale จากการย้ายเครื่องจักร Longwall ในช่วงระหว่างปี รวมถึงปัญหาทางด้านธรณีวิทยา", en: "\nCoal sales volume was 7.16 million tonnes, decreased by 0.76 million tonnes or 10% compared to 2024. This was due to a decrease in production and domestic coal sales volume from Springvale mine, resulting from longwall relocation during the year and geological issues." },
                },
                {
                    label: { th: "ราคาขายเฉลี่ย", en: "Average Selling Price" },
                    description: { th: "\nราคาขายเฉลี่ยต่อตันเท่ากับ 152.90 เหรียญออสเตรเลีย ลดลง 18.08 เหรียญออสเตรเลียต่อตันหรือคิดเป็นร้อยละ 11 เมื่อเทียบกับปีก่อน ซึ่งเป็นผลมาจากราคาตลาดถ่านหินเฉลี่ยที่ปรับตัวลดลงเมื่อเทียบกับปีก่อน แม้ว่าการอ่อนค่าของเงินสกุลเหรียญออสเตรเลียต่อเงินสกุลเหรียญสหรัฐ เป็นปัจจัยช่วยให้การแปลงค่าราคาขายถ่านหินส่งออกให้สูงขึ้น อัตราแลกเปลี่ยนเฉลี่ยของเงินสกุลเหรียญออสเตรเลียต่อเงินสกุลเหรียญสหรัฐในปี 2568 เท่ากับ 0.6445 (ปี 2567 เท่ากับ 0.6596)", en: "\nAverage selling price per tonne was A$152.90 decreased by A$18.08 or 11% compared to 2024. This was due to a decrease in average coal market price compared to prior year, even though depreciation of AUD currency against USD currency resulted in higher export sales from currency conversion. The average exchange rate of the AUD currency against the USD currency in 2025 was $0.6445 (2024: $0.6596)." },
                },
                {
                    label: { th: "ต้นทุนขายเฉลี่ย", en: "Average Cost of Sales" },
                    description: { th: "\nต้นทุนขายเฉลี่ย 143.80 เหรียญออสเตรเลียต่อตันลดลง 24.36 เหรียญออสเตรเลียต่อต้นหรือคิดเป็นร้อยละ 14 เป็นผลจากการบริหารจัดการลดต้นทุนและค่าใช้จ่ายต่าง ๆ ตามนโยบายของกลุ่มบริษัท", en: "\nAverage cost of sales per tonne was A$143.80 decreased by A$24.36 or 14% resulting from cost and expense management in accordance with the group policy." },
                },
            ],
        },
        {
            type: "pdf_sub_title",
            text: { th: "2. ธุรกิจก๊าซธรรมชาติครบวงจรในสหรัฐอเมริกา", en: "2. U.S. Closed-Loop Gas" },
            color: "#6b7280",
            weight: "medium",
        },
        {
            type: "pdf_banner",
            src: { th: "/page_027/027_p08_mobile_2_table_th.webp", en: "/page_027/027_p08_mobile_2_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_banner",
            src: { th: "/page_027/027_p08_mobile_3_th.webp", en: "/page_027/027_p08_mobile_3_en.webp" },
        },
    ],
};

export default section;
