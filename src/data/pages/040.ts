import type { PageData } from './types';

const page: PageData = {
    pageId: "040",
    title: { th: "เอกสารแนบ 2 : รายละเอียดการดำรงตำแหน่งของผู้บริหาร และผู้มีอำนาจควบคุมในบริษัทย่อย และบริษัทร่วม กิจการร่วมค้า และเงินลงทุนอื่น", en: "Attachment 2: Details of the Management and Controlling Parties of Banpu and Its Subsidiaries" },
    accentColor: "#1e90e6",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_040/040_p01_full_th.webp", en: "/page_040/040_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: { th: "เอกสารแนบ 2 :", en: "ATTACHMENT 2:" },
                    color: "#000000",
                    size: "md",
                    weight: "medium",
                },
                {
                    type: "pdf_title",
                    text: { th: "รายละเอียดการดำรงตำแหน่งของผู้บริหาร และผู้มีอำนาจควบคุมในบริษัทย่อย และบริษัทร่วม กิจการร่วมค้า และเงินลงทุนอื่น", en: "DETAILS OF THE MANAGEMENT AND CONTROLLING PARTIES OF BANPU AND ITS SUBSIDIARIES" },
                    large: true,
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_040/040_p01_mobile_table_th.webp", en: "/page_040/040_p01_mobile_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_040/040_p02_full_th.webp", en: "/page_040/040_p02_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_040/040_p02_mobile_table_th.webp", en: "/page_040/040_p02_mobile_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_040/040_p03_full_th.webp", en: "/page_040/040_p03_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_040/040_p03_mobile_1_table_th.webp", en: "/page_040/040_p03_mobile_1_table_en.webp" },
                    minWidth: 800,
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_040/040_p03_mobile_2_th.webp", en: "/page_040/040_p03_mobile_2_en.webp" },
                },
                {
                    type: "pdf_banner",
                    src: { th: "", en: "/page_040/040_p03_mobile_3_en.webp" },
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_040/040_p04_full_th.webp", en: "/page_040/040_p04_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: { th: "สัญลักษณ์ของบริษัทฯ บริษัทย่อยและบริษัทร่วม กิจการร่วมค้า และเงินลงทุนอื่น", en: "Abbreviation of the Company, Its Subsidiaries and Associated Companies, Joint Ventures and Other Investments" },
                    color: "#6b7280",
                    size: "md",
                    weight: "medium",
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_040/040_p04_mobile_table_th.webp", en: "/page_040/040_p04_mobile_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
        // {
        //     type: "pdf_page",
        //     desktopFullImage: { th: "/page_040/040_p05_full_th.webp", en: "/page_040/040_p05_full_en.webp" },
        //     items: [
        //         {
        //             type: "pdf_banner",
        //             src: { th: "/page_040/040_p05_mobile_th.webp", en: "/page_040/040_p05_mobile_en.webp" },
        //         },
        //     ],
        // },
    ],
    prevPage: "039",
};

export default page;
