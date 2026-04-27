export type BilingualText = { th: string; en: string };
export type BilingualSrc = string | { th: string; en: string };

export type TableRowData = {
    label: BilingualText;
    unit?: BilingualText;
    values: string[];
    isBold?: boolean;
};

export type TableSectionData = {
    title?: BilingualText;
    unit?: BilingualText;
    rows: TableRowData[];
};

export type PageSection =
    | { type: "text"; title?: BilingualText; content: BilingualText }
    | {
          type: "highlights";
          title?: BilingualText;
          content: BilingualText;
          items: Array<{ label: BilingualText; value: string }>;
      }
    | { type: "quote"; content: BilingualText; attribution?: BilingualText }
    | { type: "list"; title?: BilingualText; items: BilingualText[] }
    | {
          type: "image";
          src: BilingualSrc;
          alt?: string;
          caption?: BilingualText;
      }
    | {
          type: "pdf_banner";
          src: BilingualSrc;
          mobileSrcs?: BilingualSrc[];
          alt?: string;
          minWidth?: number;
      }
    | {
          type: "pdf_row";
          items: Array<{ src: BilingualSrc; alt?: string; colSpan?: number }>;
          withGap?: boolean;
      }
    | {
          type: "pdf_page";
          items: PageSection[];
          backgroundColor?: string;
          noPadding?: boolean;
          noMinHeight?: boolean;
          pageNumber?: string;
          pageNumberAlign?: "left" | "right";
          pageNumberColor?: string;
          desktopFullImage?: BilingualSrc;
      }
    | { type: "pdf_note"; text: BilingualText; hidePrefix?: boolean }
    | { type: "pdf_header"; text: BilingualText }
    | { type: "pdf_title"; text: BilingualText }
    | { type: "pdf_sub_title"; text: BilingualText }
    | {
          type: "pdf_quote_block";
          text: BilingualText;
          signatureSrc: BilingualSrc;
          signatureName: BilingualText;
          signaturePosition: BilingualText;
      }
    | {
          type: "pdf_text_columns";
          columns: BilingualText[];
          fontFamily?: string;
      }
    | {
          type: "pdf_table";
          headerTitle?: BilingualText;
          columns: BilingualText[];
          sections: TableSectionData[];
          highlightColumnIndex?: number;
      };

export type PageData = {
    pageId: string;
    title: BilingualText;
    subtitle?: BilingualText;
    accentColor: string;
    backgroundColor?: string;
    layout?: "article" | "pdf_composition" | "pdf_single_full";
    sections: PageSection[];
    prevPage?: string;
    nextPage?: string;
};

export const pagesData: Record<string, PageData> = {
    "000": {
        pageId: "000",
        title: { th: "บทนำ", en: "Introduction" },
        accentColor: "#1e90e6",
        backgroundColor: "#f0f8ff",
        layout: "pdf_composition",
        sections: [
            {
                type: "pdf_page",
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_intro/intro_p01_full_th.webp",
                            en: "/page_intro/intro_p01_full_en.webp",
                        },
                        mobileSrcs: [
                            {
                                th: "/page_intro/intro_p01_mobile_th.webp",
                                en: "/page_intro/intro_p01_mobile_en.webp",
                            },
                        ],
                    },
                ],
            },
            {
                type: "pdf_page",
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_intro/intro_p02_full_th.webp",
                            en: "/page_intro/intro_p02_full_en.webp",
                        },
                        mobileSrcs: [
                            {
                                th: "/page_intro/intro_p02_mobile_mobile_1_th.webp",
                                en: "/page_intro/intro_p02_mobile_mobile_1_en.webp",
                            },
                            {
                                th: "/page_intro/intro_p02_mobile_mobile_2_th.webp",
                                en: "/page_intro/intro_p02_mobile_mobile_2_en.webp",
                            },
                        ],
                    },
                ],
            },
        ],
        prevPage: undefined,
        nextPage: "001",
    },
    "001": {
        pageId: "001",
        title: { th: "จุดเด่นในรอบปี", en: "Financial Highlights" },
        accentColor: "#1e90e6",
        backgroundColor: "#ffffff",
        layout: "pdf_composition",
        sections: [
            {
                type: "pdf_page",
                backgroundColor: "#d0f5fe",
                desktopFullImage: {
                    th: "/page_001/001_p01_full_th.webp",
                    en: "/page_001/001_p01_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_001/001_p01_mobile_1_th.webp",
                            en: "/page_001/001_p01_mobile_1_en.webp",
                        },
                    },
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_001/001_p01_mobile_2_th.webp",
                            en: "/page_001/001_p01_mobile_2_en.webp",
                        },
                    },
                ],
            },
            {
                type: "pdf_page",
                backgroundColor: "#c4f6fd",
                desktopFullImage: {
                    th: "/page_001/001_p02_full_th.webp",
                    en: "/page_001/001_p02_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_note",
                        text: {
                            th: "รายงานฉบับนี้นำเสนอผลการดำเนินงานของปี 2568 ก่อนวันที่ 29 มกราคม 2569 ที่ประชุมวิสามัญผู้ถือหุ้นครั้งที่ 1/2569 ที่ได้มีมติอนุมัติการปรับโครงสร้างกลุ่มบริษัท โดยการควบรวม (Amalgamation) ระหว่างบริษัทฯ และ BPP เพื่อจัดตั้งบริษัทใหม่ (NewCo)",
                            en: "This report presents the operating results for FY2025 prior to 29 January 2026, on which date the Extraordinary General Meeting of Shareholders No. 1/2026 approved the group restructuring through an amalgamation between the Company and BPP to establish a new company (NewCo).",
                        },
                    },
                ],
            },
            {
                type: "pdf_page",
                backgroundColor: "#ddf7ff",
                desktopFullImage: {
                    th: "/page_001/001_p03_full_th.webp",
                    en: "/page_001/001_p03_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_001/001_p03_mobile_th.webp",
                            en: "/page_001/001_p03_mobile_en.webp",
                        },
                    },
                ],
            },
            {
                type: "pdf_page",
                backgroundColor: "#ffffff",
                desktopFullImage: {
                    th: "/page_001/001_p04_full_th.webp",
                    en: "/page_001/001_p04_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_001/001_p04_mobile_table_th.webp",
                            en: "/page_001/001_p04_mobile_table_en.webp",
                        },
                        minWidth: 560,
                    },
                ],
            },
        ],
        prevPage: "000",
        nextPage: "002",
    },
    "002": {
        pageId: "002",
        title: {
            th: "ผลการดำเนินงานในรอบปีที่ผ่านมา",
            en: "Operational Results",
        },
        accentColor: "#2a2e82",
        layout: "pdf_composition",
        sections: [
            {
                type: "pdf_page",
                backgroundColor: "#ffffff",
                // pageNumber: '08',
                // pageNumberAlign: 'left',
                desktopFullImage: {
                    th: "/page_002/002_p01_full_th.webp",
                    en: "/page_002/002_p01_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_002/002_p01_table_th.webp",
                            en: "/page_002/002_p01_table_en.webp",
                        },
                        minWidth: 560,
                    },
                ],
            },
            {
                type: "pdf_page",
                backgroundColor: "#e3f6fc",
                // pageNumber: '09',
                // pageNumberAlign: 'right',
                desktopFullImage: {
                    th: "/page_002/002_p02_full_th.webp",
                    en: "/page_002/002_p02_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_002/002_p02_mobile_th.webp",
                            en: "/page_002/002_p02_mobile_en.webp",
                        },
                    },
                ],
            },
        ],
        prevPage: "001",
        nextPage: "003",
    },
    "003": {
        pageId: "003",
        title: { th: "รายงานคณะกรรมการ", en: "The Board of Directors' Review" },
        accentColor: "#311b92",
        backgroundColor: "#f0f8ff",
        layout: "pdf_composition",
        sections: [
            {
                type: "pdf_page",
                backgroundColor: "#ffffff",
                desktopFullImage: {
                    th: "/page_003/003_p01_full_th.webp",
                    en: "/page_003/003_p01_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_003/003_p01_mobile_1_th.webp",
                            en: "/page_003/003_p01_mobile_1_en.webp",
                        },
                    },
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_003/003_p01_mobile_2_th.webp",
                            en: "/page_003/003_p01_mobile_2_en.webp",
                        },
                    },
                ],
            },
            {
                type: "pdf_page",
                backgroundColor: "#ffffff",
                desktopFullImage: {
                    th: "/page_003/003_p02_full_th.webp",
                    en: "/page_003/003_p02_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: "/page_003/003_p02_mobile_1.webp",
                    },
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_003/003_p02_mobile_2_th.webp",
                            en: "/page_003/003_p02_mobile_2_en.webp",
                        },
                    },
                ],
            },
        ],
        prevPage: "002",
        nextPage: "004",
    },
    "004": {
        pageId: "004",
        title: {
            th: "สารจากประธานเจ้าหน้าที่บริหาร",
            en: "Chief Executive Officer's Review",
        },
        accentColor: "#1565c0",
        backgroundColor: "#f0f8ff",
        layout: "pdf_composition",
        sections: [
            {
                type: "pdf_page",
                backgroundColor: "#ffffff",
                desktopFullImage: {
                    th: "/page_004/004_p01_full_th.webp",
                    en: "/page_004/004_p01_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_004/004_p01_mobile_th.webp",
                            en: "/page_004/004_p01_mobile_en.webp",
                        },
                    },
                    {
                        type: "pdf_sub_title",
                        text: {
                            th: "ความท้าทายและโอกาส",
                            en: "Challenges and Opportunities",
                        },
                    },
                    {
                        type: "pdf_text_columns",
                        fontFamily: "sarabun",
                        columns: [
                            {
                                th: "ปี 2568 เป็นปีที่โลกต้องเผชิญกับการเปลี่ยนแปลงเชิงโครงสร้างครั้งสำคัญ ทั้งจากความต้องการใช้ไฟฟ้าที่เพิ่มสูงขึ้นอย่างมาก การปรับเปลี่ยนสู่โลกดิจิทัลที่รวดเร็ว ตลอดจนระบบพลังงานทั่วโลกที่กำลังพลิกโฉมเพื่อตอบสนองต่อความคาดหวังที่เพิ่มขึ้นในด้านความรับผิดชอบด้านสภาพภูมิอากาศ ขณะเดียวกัน ความผันผวนทางภูมิรัฐศาสตร์และการเปลี่ยนแปลงของห่วงโซ่อุปทานยังคงเป็นบททดสอบสำคัญต่อความแข็งแกร่งของโครงสร้างพื้นฐานด้านพลังงานระดับโลก และความสามารถในการส่งมอบพลังงานที่มั่นคงและต่อเนื่องในระดับมหภาค\n\nจากความไม่แน่นอนที่เกิดขึ้น เห็นได้ชัดว่า การจัดหาพลังงานที่มีความเสถียร เข้าถึงได้ในราคาที่เหมาะสม และเป็นมิตรต่อสิ่งแวดล้อมมากยิ่งขึ้น ยังคงเป็นความท้าทายหลักของอุตสาหกรรมพลังงาน",
                                en: "The year 2025 unfolded against a backdrop of profound global transformation. Accelerating electrification, rapid digitalization, and heightened expectations around climate responsibility continue to reshape energy systems, while geopolitical volatility and evolving supply chains test the resilience of global energy infrastructure and its ability to deliver reliable energy at scale.\n\nAmid such uncertainty, the central challenge faced by the energy sector remains clear and constant: how to deliver energy that is reliable, affordable, and more environmentally responsible.",
                            },
                        ],
                    },
                ],
            },
            {
                type: "pdf_page",
                backgroundColor: "#ffffff",
                desktopFullImage: {
                    th: "/page_004/004_p02_full_th.webp",
                    en: "/page_004/004_p02_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_004/004_p02_mobile_th.webp",
                            en: "/page_004/004_p02_mobile_en.webp",
                        },
                    },
                    {
                        type: "pdf_text_columns",
                        fontFamily: "sarabun",
                        columns: [
                            {
                                th: "ในฐานะประธานเจ้าหน้าที่บริหาร ผมเชื่อมั่นว่าความท้าทายเหล่านี้ไม่ใช่ข้อจำกัด แต่คือโอกาสครั้งสำคัญในการยกระดับบทบาทของบ้านปูเพื่อขับเคลื่อนการเปลี่ยนผ่านพลังงานอย่างมีความรับผิดชอบ ในปีที่ผ่านมา เราได้ดำเนินธุรกิจบนแนวทางที่สร้างสมดุลระหว่างการรักษาความมั่นคงทางพลังงานในปัจจุบัน ควบคู่ไปกับการวางรากฐานสู่อนาคตที่มีคาร์บอนต่ำอย่างเป็นรูปธรรม ภายใต้กลยุทธ์ Energy Symphonics ที่มุ่งผสานทั้งการเติบโต ความยืดหยุ่น และความยั่งยืน ให้ขับเคลื่อนไปพร้อมกันได้อย่างลงตัว",
                                en: "As CEO, I see this challenge not as a constraint, but as an opportunity to strengthen our commitment to lead a responsible energy transition. Over the past year, Banpu’s growth has been guided by a balanced approach that recognizes the ongoing need for supply reliability while actively shaping a lower-carbon future. This philosophy lies at the core of our business strategy, Energy Symphonics, a strategy that harmonizes growth with resilience and sustainability.",
                            },
                        ],
                    },
                ],
            },
            {
                type: "pdf_page",
                backgroundColor: "#e8f4fd",
                desktopFullImage: {
                    th: "/page_004/004_p03_full_th.webp",
                    en: "/page_004/004_p03_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_004/004_p03_mobile_th.webp",
                            en: "/page_004/004_p03_mobile_en.webp",
                        },
                    },
                ],
            },
            {
                type: "pdf_page",
                backgroundColor: "#e8f4fd",
                desktopFullImage: {
                    th: "/page_004/004_p04_full_th.webp",
                    en: "/page_004/004_p04_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_004/004_p04_mobile_th.webp",
                            en: "/page_004/004_p04_mobile_en.webp",
                        },
                    },
                ],
            },
        ],
        prevPage: "003",
        nextPage: "005",
    },
    "005": {
        pageId: "005",
        title: {
            th: "นโยบายและภาพรวมการประกอบธุรกิจ",
            en: "Policy and Business Overview",
        },
        accentColor: "#1e90e6",
        backgroundColor: "#f0f8ff",
        layout: "pdf_composition",
        sections: [
            {
                type: "pdf_page",
                desktopFullImage: "/page_005/005_p01_full.webp",
                items: [],
            },
            {
                type: "pdf_page",
                desktopFullImage: {
                    th: "/page_005/005_p02_full_th.webp",
                    en: "/page_005/005_p02_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_005/005_p02_mobile_th.webp",
                            en: "/page_005/005_p02_mobile_en.webp",
                        },
                    },
                ],
            },
            {
                type: "pdf_page",
                desktopFullImage: {
                    th: "/page_005/005_p03_full_th.webp",
                    en: "/page_005/005_p03_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_005/005_p03_mobile_th.webp",
                            en: "/page_005/005_p03_mobile_en.webp",
                        },
                    },
                ],
            },
            {
                type: "pdf_page",
                desktopFullImage: {
                    th: "/page_005/005_p04_full_th.webp",
                    en: "/page_005/005_p04_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_005/005_p04_mobile_th.webp",
                            en: "/page_005/005_p04_mobile_en.webp",
                        },
                    },
                ],
            },
            {
                type: "pdf_page",
                backgroundColor: "#ffffff",
                desktopFullImage: {
                    th: "/page_005/005_p05_full_th.webp",
                    en: "/page_005/005_p05_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_sub_title",
                        text: {
                            th: '4 กลุ่มธุรกิจหลัก ภายใต้กลยุทธ์ "Energy Symphonics" หลังการปรับโครงสร้างเสร็จสิ้น',
                            en: 'Four Business Pillars of Banpu Under the "Energy Symphonics" Strategy after the Completion of Organizational Restructuring',
                        },
                    },
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_005/005_p05_mobile_th.webp",
                            en: "/page_005/005_p05_mobile_en.webp",
                        },
                    },
                ],
            },
            {
                type: "pdf_page",
                desktopFullImage: {
                    th: "/page_005/005_p06_full_th.webp",
                    en: "/page_005/005_p06_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: "/page_005/005_p06_mobile_en.webp",
                    },
                ],
            },
        ],
        prevPage: "004",
        nextPage: "006",
    },
    "006": {
        pageId: "006",
        title: {
            th: "แผนที่แสดงธุรกิจของกลุ่มบ้านปู",
            en: "Banpu Group's Map of Operations",
        },
        accentColor: "#00838f",
        backgroundColor: "#f0f8ff",
        layout: "pdf_composition",
        sections: [
            {
                type: "pdf_page",
                desktopFullImage: {
                    th: "/page_006/006_p01_full_th.webp",
                    en: "/page_006/006_p01_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_006/006_p01_mobile_head_th.webp",
                            en: "/page_006/006_p01_mobile_head_en.webp",
                        },
                        minWidth: 560,
                    },
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_006/006_p01_mobile_th.webp",
                            en: "/page_006/006_p01_mobile_en.webp",
                        },
                    },
                ],
            },
            {
                type: "pdf_page",
                backgroundColor: "#ffffff",
                desktopFullImage: {
                    th: "/page_006/006_p02_full_th.webp",
                    en: "/page_006/006_p02_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_006/006_p02_mobile_th.webp",
                            en: "/page_006/006_p02_mobile_en.webp",
                        },
                    },
                    {
                        type: "pdf_note",
                        text: {
                            th: "แผนที่ดังกล่าวไม่รวมการดำเนินงานของธุรกิจผลิตไฟฟ้าจากพลังงานแสงอาทิตย์บนหลังคาและทุ่นลอยน้ำ ธุรกิจแบตเตอรี่ ธุรกิจซื้อขายไฟฟ้า ธุรกิจอี-โมบิลิตี้และธุรกิจพัฒนาเมืองอัจฉริยะและจัดการพลังงาน\n* แหล่งผลิตก๊าซธรรมชาติ Marcellus และแหล่งผลิตก๊าซธรรมชาติ Barnett โดยที่แหล่งผลิตก๊าซธรรมชาติ Barnett ได้รวมการลงทุนในสินทรัพย์ก๊าซธรรมชาติ แหล่ง Bedrock Production LLC ที่ได้ลงทุนเมื่อวันที่ 29 กันยายน 2568",
                            en: "The map excludes operations of solar rooftop and solar floating, Energy Storage Systems (ESS), Energy Trading, e-Mobility, and Smart City & Energy Management.\n* The Marcellus and Barnett Shale, with the Barnett Shale including the investment in the natural gas assets of Bedrock Production LLC, completed on 29th September 2025.",
                        },
                    },
                ],
            },
        ],
        prevPage: "005",
        nextPage: "007",
    },
    "007": {
        pageId: "007",
        title: { th: "วิสัยทัศน์และพันธกิจ", en: "Vision & Mission" },
        accentColor: "#4b3fa7",
        layout: "pdf_single_full",
        sections: [
            {
                type: "pdf_page",
                desktopFullImage: {
                    th: "/page_007/007_p01_full_th.webp",
                    en: "/page_007/007_p01_full_en.webp",
                },
                items: [
                    {
                        type: "pdf_banner",
                        src: {
                            th: "/page_007/007_p01_mobile_th.webp",
                            en: "/page_007/007_p01_mobile_en.webp",
                        },
                    },
                ],
            },
        ],
        prevPage: "006",
        nextPage: "008",
    },
    "008": {
        pageId: "008",
        title: {
            th: "สรุปการเปลี่ยนแปลงและพัฒนาการที่สำคัญในรอบปี 2568 รวมทั้งเหตุการณ์ปัจจุบัน",
            en: "Summary of Major Changes and Development in 2025 and Current Events",
        },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "007",
        nextPage: "009",
    },
    "009": {
        pageId: "009",
        title: { th: "ข้อมูลทั่วไปของบริษัท", en: "Banpu Information" },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "008",
        nextPage: "010",
    },
    "010": {
        pageId: "010",
        title: { th: "โครงสร้างรายได้", en: "Revenue Structure" },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "009",
        nextPage: "011",
    },
    "011": {
        pageId: "011",
        title: { th: "ข้อมูลกลุ่มธุรกิจ", en: "Products and Services" },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "010",
        nextPage: "012",
    },
    "012": {
        pageId: "012",
        title: { th: "ภาวะตลาดและการแข่งขัน", en: "Market and Competition" },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "011",
        nextPage: "013",
    },
    "013": {
        pageId: "013",
        title: {
            th: "ทรัพย์สินที่ใช้ในการประกอบธุรกิจ",
            en: "Business Assets",
        },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "012",
        nextPage: "014",
    },
    "014": {
        pageId: "014",
        title: {
            th: "ปริมาณสำรองถ่านหินและก๊าซธรรมชาติ",
            en: "Coal and Natural Gas Reserves",
        },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "013",
        nextPage: "015",
    },
    "015": {
        pageId: "015",
        title: { th: "โครงสร้างกลุ่มบริษัทฯ", en: "Banpu Group Structure" },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "014",
        nextPage: "016",
    },
    "016": {
        pageId: "016",
        title: {
            th: "รายชื่อบริษัทย่อยและบริษัทร่วมและกิจการร่วมค้าและการลงทุนอื่นของบริษัท บ้านปู จำกัด (มหาชน)",
            en: "Detail of The Company, Its Subsidiaries and Associated Companies and Joint Ventures and Other Investment of Banpu Public Company Limited",
        },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "015",
        nextPage: "017",
    },
    "017": {
        pageId: "017",
        title: { th: "ผู้ถือหุ้น", en: "Shareholders" },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "016",
        nextPage: "018",
    },
    "018": {
        pageId: "018",
        title: { th: "ข้อมูลหลักทรัพย์", en: "Security" },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "017",
        nextPage: "019",
    },
    "019": {
        pageId: "019",
        title: { th: "หุ้นกู้", en: "Debentures" },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "018",
        nextPage: "020",
    },
    "020": {
        pageId: "020",
        title: { th: "นโยบายการจ่ายเงินปันผล", en: "Dividend Policy" },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "019",
        nextPage: "021",
    },
    "021": {
        pageId: "021",
        title: { th: "การบริหารจัดการความเสี่ยง", en: "Risk Management" },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "020",
        nextPage: "022",
    },
    "022": {
        pageId: "022",
        title: {
            th: "การขับเคลื่อนธุรกิจเพื่อความยั่งยืน",
            en: "Driving Business for Sustainability",
        },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "021",
        nextPage: "023",
    },
    "023": {
        pageId: "023",
        title: {
            th: "การจัดการผลกระทบต่อผู้มีส่วนได้เสียในห่วงโซ่คุณค่าของธุรกิจ",
            en: "Management of Stakeholder Impacts in Business Value Chain",
        },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "022",
        nextPage: "024",
    },
    "024": {
        pageId: "024",
        title: {
            th: "การจัดการด้านความยั่งยืนในมิติสิ่งแวดล้อม",
            en: "Sustainability Management – Environmental Aspect",
        },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "023",
        nextPage: "025",
    },
    "025": {
        pageId: "025",
        title: {
            th: "การจัดการด้านความยั่งยืนในมิติสังคม",
            en: "Sustainability Management – Society Aspect",
        },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "024",
        nextPage: "026",
    },
    "026": {
        pageId: "026",
        title: {
            th: "ความรับผิดชอบต่อสังคม",
            en: "Corporate Social Responsibility (CSR)",
        },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "025",
        nextPage: "027",
    },
    "027": {
        pageId: "027",
        title: {
            th: "คำอธิบายและการวิเคราะห์ของฝ่ายจัดการ",
            en: "Management's Discussion and Analysis",
        },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "026",
        nextPage: "028",
    },
    "028": {
        pageId: "028",
        title: { th: "อัตราส่วนทางการเงิน", en: "Financial Ratio" },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "027",
        nextPage: "029",
    },
    "029": {
        pageId: "029",
        title: { th: "บุคคลอ้างอิงอื่น ๆ", en: "Other References" },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "028",
        nextPage: "030",
    },
    "030": {
        pageId: "030",
        title: {
            th: "คดีความที่สำคัญในระหว่างปี",
            en: "Significant Litigation During the Year",
        },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "029",
        nextPage: "031",
    },
    "031": {
        pageId: "031",
        title: {
            th: "นโยบายการกำกับดูแลกิจการ",
            en: "Corporate Governance Policy",
        },
        accentColor: "#2a2e82",
        sections: [],
        prevPage: "030",
        nextPage: "032",
    },
    "032": {
        pageId: "032",
        title: {
            th: "โครงสร้างการกำกับดูแลกิจการ",
            en: "Corporate Governance Structure",
        },
        accentColor: "#2a2e82",
        sections: [],
        prevPage: "031",
        nextPage: "033",
    },
    "033": {
        pageId: "033",
        title: {
            th: "ผลการดำเนินงานด้านการกำกับดูแลกิจการ",
            en: "Corporate Governance Performance",
        },
        accentColor: "#2a2e82",
        sections: [],
        prevPage: "032",
        nextPage: "034",
    },
    "034": {
        pageId: "034",
        title: {
            th: "รายงานคณะกรรมการบรรษัทภิบาลและสรรหา",
            en: "Report of the Corporate Governance and Nomination Committee",
        },
        accentColor: "#2a2e82",
        sections: [],
        prevPage: "033",
        nextPage: "035",
    },
    "035": {
        pageId: "035",
        title: {
            th: "รายงานคณะกรรมการกำหนดค่าตอบแทน",
            en: "Report of the Compensation Committee",
        },
        accentColor: "#2a2e82",
        sections: [],
        prevPage: "034",
        nextPage: "036",
    },
    "036": {
        pageId: "036",
        title: {
            th: "รายงานคณะกรรมการตรวจสอบต่อผู้ถือหุ้น",
            en: "Audit Committee Report to Shareholders",
        },
        accentColor: "#2a2e82",
        sections: [],
        prevPage: "035",
        nextPage: "037",
    },
    "037": {
        pageId: "037",
        title: {
            th: "รายงานคณะกรรมการสิ่งแวดล้อม สังคม และการกำกับดูแลกิจการ (คณะกรรมการ ESG)",
            en: "Environment, Social and Governance (ESG) Committee Report",
        },
        accentColor: "#2a2e82",
        sections: [],
        prevPage: "036",
        nextPage: "038",
    },
    "038": {
        pageId: "038",
        title: {
            th: "การควบคุมภายในและรายการระหว่างกัน",
            en: "Internal Control and Connected Transactions",
        },
        accentColor: "#2a2e82",
        sections: [],
        prevPage: "037",
        nextPage: "039",
    },
    "039": {
        pageId: "039",
        title: {
            th: "เอกสารแนบ 1 : รายละเอียดเกี่ยวกับคณะกรรมการบริษัทและผู้บริหาร",
            en: "Attachment 1: Details of the Board of Directors and Management",
        },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "038",
        nextPage: "040",
    },
    "040": {
        pageId: "040",
        title: {
            th: "เอกสารแนบ 2 : รายละเอียดการดำรงตำแหน่งของผู้บริหารและผู้มีอำนาจควบคุมในบริษัทย่อยและบริษัทร่วม กิจการร่วมค้าและเงินลงทุนอื่น",
            en: "Attachment 2: Details of the Management and Controlling Parties of Banpu and Its Subsidiaries",
        },
        accentColor: "#1e90e6",
        sections: [],
        prevPage: "039",
        nextPage: undefined,
    },
};

export const pageOrder = [
    "000",
    "001",
    "002",
    "003",
    "004",
    "005",
    "006",
    "007",
    "008",
    "009",
    "010",
    "011",
    "012",
    "013",
    "014",
    "015",
    "016",
    "017",
    "018",
    "019",
    "020",
    "021",
    "022",
    "023",
    "024",
    "025",
    "026",
    "027",
    "028",
    "029",
    "030",
    "031",
    "032",
    "033",
    "034",
    "035",
    "036",
    "037",
    "038",
    "039",
    "040",
];
