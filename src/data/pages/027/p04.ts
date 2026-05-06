import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_027/027_p04_full_th.webp", en: "/page_027/027_p04_full_en.webp" },
    items: [
        {
            type: "pdf_banner",
            src: { th: "/page_027/027_p04_mobile_th.webp", en: "/page_027/027_p04_mobile_en.webp" },
        },
        {
            type: "pdf_sub_title",
            text: { th: "Pillar 4: ธุรกิจเทคโนโลยีแห่งอนาคต (Future Tech)", en: "Pillar 4: Future Tech" },
            color: "#5b3e96",
            weight: "medium",
        },
        {
            type: "pdf_body_text",
            text: {
                th: "ปัจจุบัน BANPU มีโรงงานผลิตแบตเตอรี่รวมกำลังการผลิต 3.2 กิกะวัตต์ชั่วโมง และดำเนินธุรกิจยานยนต์ไฟฟ้า (E-Mobility) โดยบริหารจัดการยานยนต์ไฟฟ้ารวม 876 คัน พร้อมทั้งเดินหน้าศึกษาความเป็นไปได้ในการขยายการลงทุนในธุรกิจที่มีศักยภาพเติบโตสูง อาทิ ธุรกิจ Data Centers\n\nในส่วนของหน่วยงาน Corporate Venture Capital (CVC) ได้เข้าลงทุนจำนวน 2 ล้านเหรียญสหรัฐ คิดเป็นสัดส่วนร้อยละ 1.9ใน Mixx Technologies, Inc. ผู้พัฒนาระบบโครงสร้างพื้นฐานสำหรับ AI และอีก 2 ล้านเหรียญสหรัฐ คิดเป็นสัดส่วน ร้อยละ 1.3 ใน ARC Clean Technology ผู้พัฒนา Advanced Small Modular Reactor (aSMR) เพื่อรองรับการเติบโตของพลังงานไฟฟ้าปลอดคาร์บอนสำหรับผู้ใช้ไฟฟ้ารายใหญ่ เช่น Data Centers และผู้ผลิตไฮโดรเจน",
                en: "Currently, a battery manufacturing plant operates with a total production capacity of 3.2 GWh and E-Mobility business manages a total of 876 electric vehicles. BANPU continues to explore investment opportunities in high growth potential countries, with a particular focus on the Data Center sector.\n\nUnder its Corporate Venture Capital (CVC), invested USD 2 million for a 1.9% equity stake in Mixx Technologies, Inc., a developer of Al infrastructure solutions and another USD 2 million for a 1.3% equity stake in ARC Clean Technology, a developer of Advanced Small Modular Reactor (aSMR) technology, aimed at supporting the growing demand for carbon-free power among large-scale electricity users, such as Data Centers and hydrogen producers.",
            },
        },
        {
            type: "pdf_note",
            text: {
                th: "¹ กำไรก่อนหักดอกเบี้ย ภาษี และค่าเสื่อมราคา (EBITDA) ได้รวมผลกำไร (ขาดทุน) ที่รับรู้จากการป้องกันความเสี่ยงด้านสินค้าโภคภัณฑ์แล้ว (Realized gain/loss from commodity hedging)",
                en: "¹ EBITDA included realized profit (loss) on realized commodity hedging.",
            },
        },
    ],
};

export default section;
