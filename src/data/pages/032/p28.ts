import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_032/032_p28_full_th.webp", en: "/page_032/032_p28_full_en.webp" },
    items: [
        {
            type: "pdf_body_text",
            text: { th: "ทั้งนี้ โครงสร้างการโยกย้ายบุคลากร ประกอบด้วยการบริหารจัดการคนเก่ง (Talent Management) และการมอบหมายงานในต่างประเทศ (Overseas Assignment) เพื่อเสริมสร้างประสบการณ์ข้ามวัฒนธรรมและมุมมองระดับโลก โดยบริษัทฯ มุ่งพัฒนาเส้นทางผู้นำและเสริมความแข็งแกร่งของบุคลากรอย่างเป็นระบบ เพื่อรองรับการเติบโตระยะยาวขององค์กร", en: "The talent mobility framework consists of Talent Management and Overseas Assignments, providing employees with cross-cultural exposure and global perspectives. Through this systematic approach, the Company strengthens its leadership pipeline and builds organizational resilience to support long-term growth." },
        },
        { type: "pdf_gradient_divider", thin: true },
        {
            type: "pdf_gradient_text",
            text: {
                th: `มุ่งมั่นบุกเบิกอนาคตของการทำงานที่สอดประสานทุกข้อมูล ตามแนวคิด "Energy Symphonics" ด้วยการสนับสนุนความคล่องตัวในการทำงาน ผ่านการพัฒนาระบบนิเวศดิจิทัลทางการบริหารทรัพยากรมนุษย์ (HR Digital Ecosystem) เพื่อสร้างประสบการณ์ที่ดีให้กับพนักงาน (Employee Experience)และเชื่อมต่อข้อมูลพนักงานในทุกประเทศให้เป็นหนึ่งเดียว พร้อมสร้างสภาพแวดล้อมที่สนับสนุน มีส่วนร่วม และมีประสิทธิภาพสำหรับพนักงานในระยะยาว`,
                en: `Banpu is committed to pioneering the future of work by integrating all data under the "Energy Symphonics" concept. The Company supports agile working through the development of an HR Digital Ecosystem, enhancing the overall employee experience. By unifying employee data across all countries, Banpu fosters a supportive, engaging, and efficient work environment, empowering its people for long-term success.`,
            },
        },
        { type: "pdf_gradient_divider", thin: true },
        {
            type: "pdf_banner",
            src: { th: "/page_032/032_p28_mobile_th.webp", en: "/page_032/032_p28_mobile_en.webp" },
        },
    ],
};

export default section;
