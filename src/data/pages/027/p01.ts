import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_027/027_p01_full_th.webp", en: "/page_027/027_p01_full_en.webp" },
    items: [
        {
            type: "pdf_title",
            text: { th: "คำอธิบายและการวิเคราะห์ของฝ่ายจัดการ", en: "MANAGEMENT'S DISCUSSION AND ANALYSIS" },
            large: true,
        },
        {
            type: "pdf_sub_title",
            text: { th: "1. ภาพรวมราคาตลาดของกลุ่มสินค้าโภคภัณฑ์ด้านพลังงาน (Energy Commodities)", en: "1. Energy Commodities Price Index" },
            color: "#00a6f4",
            weight: "medium",
        },
        {
            type: "pdf_body_text",
            text: {
                th: "กราฟด้านล่างแสดงการเคลื่อนไหวของราคาถ่านหินและก๊าซธรรมชาติ Henry Hub ตั้งแต่ปี 2566 จนถึงปัจจุบันโดยในช่วงต้นปี 2566 ราคาพลังงานยังคงอยู่ในระดับสูงต่อเนื่องจากวิกฤตความมั่นคงทางพลังงานในยุโรปในปี 2565 ซึ่งราคาพลังงานปรับตัวขึ้นทำสถิติสูงสุดเป็นประวัติการณ์ ก่อนจะเริ่มปรับลง สะท้อนถึงภาวะอุปทานที่ปรับตัวดีขึ้นการเติบโตของอุปสงค์ที่ชะลอตัวลง และระดับปริมาณสำรองของถ่านหินและก๊าซธรรมชาติ (Inventory) ที่กลับเข้าสู่สมดุลสอดคล้องกับทิศทางปัจจัยพื้นฐานทางเศรษฐกิจที่เปลี่ยนแปลงไป",
                en: "The graph below illustrates the movements of thermal coal and Henry Hub natural gas prices from 2023 to present. In early 2023, prices remained elevated following the energy security crisis in Europe during 2022, which had driven fuel prices to record highs. Since then, both markets have transitioned into a normalization phase, with prices gradually adjusting to more sustainable levels. This reflects improving supply conditions, moderated demand growth, and better-balanced global inventories as energy markets recalibrated in line with evolving economic fundamentals.",
            },
        },
        {
            type: "pdf_banner",
            src: { th: "/page_027/027_p01_mobile_1_table_th.webp", en: "/page_027/027_p01_mobile_1_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_banner",
            src: { th: "/page_027/027_p01_mobile_2_table_th.webp", en: "/page_027/027_p01_mobile_2_table_en.webp" },
            minWidth: 800,
        },
    ],
};

export default section;
