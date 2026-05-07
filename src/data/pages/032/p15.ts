import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_032/032_p15_full_th.webp", en: "/page_032/032_p15_full_en.webp" },
    items: [
        {
            type: "pdf_sub_title",
            text: { th: "ผู้บริหารระดับสูง", en: "Senior Executives" },
            color: "#00a6f4",
            size: "sm",
            weight: "medium",
        },
        {
            type: "pdf_body_text",
            text: { th: "ผู้บริหารระดับสูงของบริษัท (ณ วันที่ 31 ธันวาคม 2568) ประกอบด้วย", en: "Banpu's Senior Executives (As of 31 December 2025) are as follows:" },
        },
        {
            type: "pdf_banner",
            src: { th: "/page_032/032_p15_mobile_table_th.webp", en: "/page_032/032_p15_mobile_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_body_text",
            text: { th: `ทั้งนี้ รายชื่อผู้บริหารระดับสูงข้างต้นเป็นไปตามนิยาม "ผู้บริหาร" ตามประกาศคณะกรรมการการกำกับตลาดทุน ที่ ทจ. 23/2551 โดยได้รับมอบหมายอำนาจหน้าที่ให้ดำเนินงานภายใต้นโยบาย กลยุทธ์ และเป้าหมายที่คณะกรรมการบริษัทกำหนดไว้ ซึ่งคณะกรรมการบริษัทได้อนุมัติการจัดทำอำนาจดำเนินงานในการกำหนดขอบเขตหน้าที่ที่ชัดเจนเพื่อความโปร่งใสและมีความคล่องตัวในการปฏิบัติงานอย่างเหมาะสม`, en: `The above list of senior executives has qualifications as per the definition of "Executives" in the Notification of Capital Market Supervisory Board TorChor 23/2551. These executives are entrusted with authority and duties to manage the Company's operations according to the policy, strategy, and goals set by the Board of Directors. The Board has approved the scope of authority and defined clear segregation of duties to ensure transparent and flexible operations.` },
        },
        {
            type: "pdf_sub_title",
            text: { th: "อำนาจหน้าที่ของประธานเจ้าหน้าที่บริหารและฝ่ายบริหาร", en: "Roles and Responsibilities of the CEO and the Management" },
            color: "#6b7280",
            size: "sm",
            weight: "medium",
        },
        {
            type: "pdf_body_text",
            text: { th: "เพื่อให้ขอบเขตหน้าที่ในการกำกับดูแลและการบริหารจัดการสามารถแบ่งแยกจากกันได้อย่างชัดเจน บริษัทฯ จึงกำหนดให้ฝ่ายบริหาร ซึ่งนำโดยประธานเจ้าหน้าที่บริหาร มีบทบาทหน้าที่สำคัญ ดังต่อไปนี้", en: "To clearly separate the scope of oversight and management, the company has assigned the management, led by the CEO, the following key roles and responsibilities:" },
        },
    ],
};

export default section;
