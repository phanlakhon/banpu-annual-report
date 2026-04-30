import type { PageData } from './types';

const page: PageData = {
    pageId: "006",
    title: { th: "แผนที่แสดงธุรกิจของกลุ่มบ้านปู", en: "Banpu Group's Map of Operations" },
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
                    minWidth: 800,
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
};

export default page;
