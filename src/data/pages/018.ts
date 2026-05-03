import type { PageData } from './types';

const page: PageData = {
    pageId: "018",
    title: { th: "ข้อมูลหลักทรัพย์", en: "Security" },
    accentColor: "#1e90e6",
    layout: "pdf_single_column",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_018/018_p01_full_th.webp",
                en: "/page_018/018_p01_full_en.webp",
            },
            items: [
                {
                    type: "pdf_title",
                    large: true,
                    text: { th: "ข้อมูลหลักทรัพย์", en: "SECURITY" },
                },
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_018/018_p01_mobile_table_th.webp",
                        en: "/page_018/018_p01_mobile_table_en.webp",
                    },
                    minWidth: 800,
                },
                {
                    type: "pdf_body_text",
                    paddingLeft: "0.9rem",
                    text: {
                        th: "ณ วันที่ 31 ธันวาคม 2568 บริษัท ไทยเอ็นวีดีอาร์ จำกัด (Thai NVDR) ซึ่งเป็นบริษัทย่อยของตลาดหลักทรัพย์แห่งประเทศไทย ที่เป็นผู้ถือหุ้นของบริษัทฯ เป็นหลักทรัพย์อ้างอิงจำนวน 721,662,579 หุ้น คิดเป็นร้อยละ 7.20 ของ หุ้นที่ออกและชำระแล้ว ณ วันดังกล่าว ซึ่งผู้ถือหุ้นในนาม NVDR จะได้รับผลประโยชน์จากหุ้นของบริษัทฯ ที่นำไปอ้างอิง ทุกประการ แต่ไม่สามารถใช้สิทธิออกเสียงในการประชุมผู้ถือหุ้นได้ เนื่องจากมิใช่ผู้ถือหุ้นโดยตรงของบริษัทฯ แต่ทั้งนี้ในทางปฏิบัติ บริษัท ไทยเอ็นวีดีอาร์ จำกัด จะเข้าร่วมประชุมผู้ถือหุ้นโดยจะออกเสียงลงคะแนนตามดุลยพินิจอิสระของบริษัท ไทยเอ็นวีดีอาร์ จำกัด มิใช่ออกเสียงตามคำสั่งของผู้ถือ NVDR ทั้งนี้จำนวนหุ้นของบริษัทฯ ที่ผู้ลงทุนเข้ามาลงทุนใน NVDR นั้นอาจมีการเปลี่ยนแปลง ซึ่งบริษัทฯ จะไม่สามารถกำหนดได้",
                        en: "As of 31 December 2025, Thai NVDR Company Limited (Thai NVDR), a subsidiary of the Stock Exchange of Thailand, as well as the Company's shareholders hold the underlying securities total amount of 721,662,579 shares, or 7.20% of the issued and paid-up shares at that date. NVDR holders will obtain all financial benefits in the same manner as the Company's ordinary shareholders, except that NVDR holders will have no voting rights at shareholder meetings since they are not the Company's direct shareholders. Practically, Thai NVDR will attend a shareholder meeting and vote at its discretion but not by the instruction of NVDR shareholders. The number of the Company's shares held by the investors who have invested via Thai NVDR is subject to change, which is beyond the Company's control.",
                    },
                },
                {
                    type: "pdf_sub_title",
                    color: "#00a6f4",
                    text: { th: "ข้อจำกัดการถือหุ้นของชาวต่างชาติ", en: "Foreign Ownership Restrictions" },
                },
                {
                    type: "pdf_body_text",
                    paddingLeft: "0.9rem",
                    text: {
                        th: "ผู้ถือหุ้นที่เป็นชาวต่างชาติสามารถถือครองหุ้นของบริษัทฯ รวมกันได้ไม่เกินร้อยละ 40 ของจำนวนหุ้นที่ออกและชำระแล้วโดย ณ วันที่ 31 ธันวาคม 2568 หุ้นของบริษัทฯ ที่ถือครองโดยชาวต่างชาติมีประมาณร้อยละ 14.45 ของทุนชำระแล้ว",
                        en: "Foreign shareholders may own the Company's shares in a total amount not exceeding 40% of the Company's issued and paid-up shares. As of 31 December 2025, the Company's shares owned by foreign shareholders were approximately 14.45% of the Company's paid-up capital.",
                    },
                },
            ],
        },
    ],
    prevPage: "017",
    nextPage: "019",
};

export default page;
