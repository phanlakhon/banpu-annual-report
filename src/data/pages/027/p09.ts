import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_027/027_p09_full_th.webp", en: "/page_027/027_p09_full_en.webp" },
    items: [
        {
            type: "pdf_sub_title",
            text: { th: "ธุรกิจก๊าซธรรมชาติครบวงจรในสหรัฐอเมริกา", en: "U.S. Closed-Loop Gas" },
            color: "#5b3e96",
            size: "sm",
            weight: "medium",
        },
        {
            type: "pdf_body_text",
            text: {
                th: "รายได้จากธุรกิจก้าซธรรมชาติครบวงจรในสหรัฐอเมริกา จำนวน 913 ล้านเหรียญสหรัฐรวมผลกำไรจากสัญญาแลกราคาซื้อขายและสิทธิที่จะซื้อและขายก๊าซธรรมชาติจำนวน 9 ล้านเหรียญสหรัฐ โดยรายได้จากธุรกิจก๊าซธรรมชาติครบวงจรในสหรัฐอเมริกาเพิ่มขึ้นจำนวน 187 ล้านเหรียญสหรัฐหรือคิดเป็นร้อยละ 26 เมื่อเทียบกับ ปีก่อน โดยมีรายละเอียดดังนี้",
                en: "Sales from U.S. Closed-Loop Gas in 2025 reported at $913 million, including gain on natural gas swaps and options of $9 million. Sales from U.S. Closed-Loop Gas increased by $187 million or 26% compared to 2024. Details were as follows:",
            },
            boldPhrase: { th: "รายได้จากธุรกิจก้าซธรรมชาติครบวงจรในสหรัฐอเมริกา", en: "Sales from U.S. Closed-Loop Gas" },
        },
        {
            type: "pdf_list",
            color: "#00a6f4",
            itemSeparator: "",
            items: [
                {
                    label: { th: "ปริมาณขาย", en: "Sales Volume" },
                    description: { th: "\nปริมาณการขายในปี 2568 จำนวน 304.98 พันล้านลูกบาศก์ฟุต เพิ่มขึ้น 16.58 พันล้านลูกบาศก์ฟุตหรือคิดเป็นร้อยละ 6 จากปีก่อน โดยมีปัจจัยสนับสนุนหลักจากการดำเนินการมาตรการต่าง ๆ และการพัฒนาแหล่งผลิต (Development and Completion Activities) เพื่อเพิ่มผลผลิต รวมทั้งการเข้าซื้อแหล่งผลิตของ Bedrock ในช่วงปลายไตรมาส 3 ของปี", en: "\nNatural gas sales volume was 304.98 Bcf, increasing by 16.58 Bcf or 6% compared to 2024. This increase was mainly supported by the group implementing various productivity enhancement measures and engaging in development and completion activities to increase production volume, together with consolidation of production from newly acquired natural gas assets, Bedrock, since 3Q2025." },
                },
                {
                    label: { th: "ราคาขายท้องถิ่นเฉลี่ย", en: "Average Local Price" },
                    description: { th: "\nเนื่องจากราคาก๊าซธรรมชาติอ้างอิง Henry Hub ปรับตัวเพิ่มขึ้นจากปีก่อน ส่งผลให้ราคาขายท้องถิ่นเฉลี่ยในปีนี้ เท่ากับ 2.93 เหรียญสหรัฐต่อพันลูกบาศก์ฟุต เพิ่มขึ้น 0.85 เหรียญสหรัฐต่อพันลูกบาศก์ฟุต หรือคิดเป็นร้อยละ 41 เมื่อเทียบจากปีก่อนจากการขยายตัวของการส่งออก LNG เพื่อตอบสนองความต้องการในยุโรปและเอเชีย และจากสภาพอากาศที่หนาวเย็นมากขึ้นเมื่อเทียบกับปีก่อน ส่งผลให้อุปสงค์ในการใช้ก๊าซธรรมชาติเพิ่มสูงขึ้น", en: "\nReferring to the higher Henry Hub index price compared to 2024, the average local price per Mcf. in 2025 was $2.93 per Mcf, increasing by $0.85 per Mcf or 41% from 2024. This was due to an increase in LNG export sales driven by growing demand from Europe and Asia, along with colder climate compared to 2024, which led to an increase in natural gas demand." },
                },
                {
                    label: { th: "ต้้นทุนการแยกก๊าซและขนส่ง", en: "Average Cost of Gathering, Processing & Transportation" },
                    description: { th: "\nต้นทุนการแยกก๊าซและขนส่งเฉลี่ย 0.94 เหรียญสหรัฐต่อพันลูกบาศก์ฟุตเพิ่มขึ้น 0.02 เหรียญสหรัฐต่อพันลูกบาศก์ฟุต หรือคิดเป็นร้อยละ 2 เมื่อเทียบจากปีก่อนโดยเป็นผลจากภาวะเงินเฟ้อที่ส่งผลให้ค่าบริการสูงขึ้น อย่างไรก็ตาม บริษัทฯ มีการบริหารจัดการทางด้านต้นทุนการผลิตดังกล่าวเพื่อรองรับกับความผันผวนของราคาตลาดอย่างต่อเนื่อง", en: "\nAverage cost of gathering, processing & transportation per Mcf was $0.94, increased by $0.02 or 2% compared to 2024. This was primarily driven by inflationary pressures that resulted in higher service fees. The group continues to implement cost management measures to strengthen its ability to navigate market price volatility." },
                },
                {
                    label: { th: "ต้นทุนขายเฉลี่ย", en: "Average Cost of Sales" },
                    description: { th: "\nต้นทุนขายเฉลี่ย (ไม่รวมต้นทุนในการแยกก๊าซและขนส่ง) 1.45 เหรียญสหรัฐ ต่อพันลูกบาศก์ฟุต เพิ่มขึ้น 0.15 เหรียญสหรัฐต่อพันลูกบาศก์ฟุตหรือคิดเป็น ร้อยละ 12 จากปีก่อน จากค่าเสื่อมราคาและค่าตัดจำหน่ายต่อหน่วย รวมถึงภาษีจากการผลิตที่สูงขึ้น ซึ่งสอดคล้องกับแนวโน้มราคา Henry Hub เฉลี่ยที่เพิ่มขึ้นเมื่อเทียบกับปีก่อน", en: "\nAverage cost of sales (excluding gathering, processing, and transportation cost) per Mcf was $1.45, increasing by $0.15 or 12% compared to 2024. This increase was mainly due to higher depreciation and amortization costs per unit, together with an increase in production tax aligned with the higher average Henry Hub index price compared to prior year." },
                },
            ],
        },
    ],
};

export default section;
