import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_032/032_p03_full_th.webp", en: "/page_032/032_p03_full_en.webp" },
    items: [
        {
            type: "pdf_sub_title",
            text: { th: "โครงสร้างคณะกรรมการบริษัท", en: "Structure of the Board of Directors" },
            color: "#00a6f4",
            size: "sm",
            weight: "medium",
        },
        {
            type: "pdf_body_text",
            text: {
                th: "คณะกรรมการบริษัทประกอบด้วยบุคคลผู้มีความรู้ ความสามารถ ทักษะ และความเชี่ยวชาญอันเป็นที่ยอมรับ โดยมีบทบาทสำคัญในการกำหนดวัตถุประสงค์และเป้าหมายของบริษัท การวางแผนกลยุทธ์และนโยบายการดำเนินงานทั้งในระยะสั้นและระยะยาวร่วมกับผู้บริหารระดับสูง อันครอบคลุมถึงนโยบายการเงิน การบริหารความเสี่ยง และทิศทางการดำเนินธุรกิจในภาพรวม ทั้งยังมีบทบาทในการทบทวนนโยบายและแผนงานสำคัญของบริษัทเป็นประจำทุกปี ตลอดจนกำกับดูแลตรวจสอบ และประเมินผลการปฏิบัติงานของผู้บริหารระดับสูงและผลการดำเนินงานของบริษัทฯ เพื่อให้มั่นใจว่าเป็นไปตามแผนที่วางไว้",
                en: "The Board of Directors comprises directors who are widely recognized for their knowledge and competence. The Board plays a pivotal role in determining the Company's objectives and goals and works with executives to devise strategies and policies for short- and long-term operations. The Board also establishes financial policies, oversees risk management, governs overall management, and reviews significant policies and plans annually. The duties of the Board also include overseeing, monitoring, and evaluating the performance of the Company and senior executives to ensure alignment with the plans.",
            },
        },
        {
            type: "pdf_sub_title",
            text: { th: "คณะกรรมการบริษัท", en: "The Board of Directors" },
            color: "#6b7280",
            size: "sm",
            weight: "medium",
        },
        {
            type: "pdf_body_text",
            text: { th: "ประกอบด้วย", en: "The Board of Directors consists of:" },
        },
        {
            type: "pdf_banner",
            src: { th: "/page_032/032_p03_mobile_1_table_th.webp", en: "/page_032/032_p03_mobile_1_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_banner",
            src: { th: "/page_032/032_p03_mobile_2_th.webp", en: "/page_032/032_p03_mobile_2_en.webp" },
        },
    ],
};

export default section;
