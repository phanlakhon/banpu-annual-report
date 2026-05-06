import type { PageSection } from '../types';

const section: PageSection = {
    type: "pdf_page",
    desktopFullImage: { th: "/page_027/027_p23_full_th.webp", en: "/page_027/027_p23_full_en.webp" },
    items: [
        {
            type: "pdf_sub_title",
            text: { th: "5. งบกระแสเงินสดรวม", en: "5. Statement of Consolidated Cash Flows" },
            color: "#00a6f4",
            size: "sm",
            weight: "medium",
        },
        {
            type: "pdf_body_text",
            text: {
                th: "งบกระแสเงินสดรวมสำหรับปีสิ้นสุดวันที่ 31ธันวาคม 2568 กลุ่มบริษัทมีเงินสดสุทธิลดลงรวม จำนวน 190 ล้านเหรียญสหรัฐ (รวมผลกำไรของอัตราแลกเปลี่ยนที่ยังไม่เกิดขึ้นจริงจากการแปลงค่า ณ วันสิ้นปี จำนวน 10 ล้านเหรียญสหรัฐ) โดยรายละเอียดของแต่ละกิจกรรมมีดังนี้",
                en: "Statement of consolidated cash flows for the year ended 31 December 2025 presented a decrease of net cash flow by $190 million (including the effect from unrealized gain on exchange rate translation at the end of the year of $10 million). The details were as follows:",
            },
        },
        {
            type: "pdf_banner",
            src: { th: "/page_027/027_p23_mobile_table_th.webp", en: "/page_027/027_p23_mobile_table_en.webp" },
            minWidth: 800,
        },
        {
            type: "pdf_body_text",
            text: {
                th: "5.1 เงินสดสุทธิได้มาจากกิจกรรมดำเนินงาน จำนวน 430 ล้านเหรียญสหรัฐ โดยมีสาระสำคัญดังนี้",
                en: "5.1 Net cash received from operating activities of $430 million; with major items as follows:",
            },
            boldPhrase: { th: "กิจกรรมดำเนินงาน", en: "operating activities" },
        },
        {
            type: "pdf_list",
            paddingLeft: "1.5rem",
            items: [
                { th: "รับเงินจากการขาย จำนวน 4,306 ล้านเหรียญสหรัฐ", en: "Collections from sales of $4,306 million." },
                { th: "จ่ายชำระเจ้าหนี้ จำนวน 2,874 ล้านเหรียญสหรัฐ", en: "Payments to contractors and suppliers of $2,874 million." },
                { th: "จ่ายดอกเบี้ย จำนวน 341 ล้านเหรียญสหรัฐ", en: "Interest payments of $341 million." },
                { th: "จ่ายภาษีเงินได้นิติบุคคล จำนวน 134 ล้านเหรียญสหรัฐ", en: "Payments of income tax of $134 million." },
                { th: "การรับคืนภาษีเงินได้ จำนวน 47 ล้านเหรียญสหรัฐ", en: "Income tax refund of $47 million" },
                { th: "จ่ายค่าภาคหลวง จำนวน 288 ล้านเหรียญสหรัฐ", en: "Payment of royalty fee of $288 million." },
                { th: "เงินจ่ายอื่น ๆ จำนวน 286 ล้านเหรียญสหรัฐ", en: "Other payments of $286 million." },
            ],
        },
        {
            type: "pdf_body_text",
            text: {
                th: "5.2 เงินสดสุทธิใช้ไปในกิจกรรมลงทุน จำนวน 972 ล้านเหรียญสหรัฐ โดยมีสาระสำคัญดังนี้",
                en: "5.2 Net cash used in investing activities of $972 million; with major items as follows:",
            },
            boldPhrase: { th: "กิจกรรมลงทุน", en: "investing activities" },
        },
        {
            type: "pdf_list",
            paddingLeft: "1.5rem",
            items: [
                { th: "งินสดจ่ายเพื่อลงทุนในเครื่องจักรและอุปกรณ์ จำนวน 552 ล้านเหรียญสหรัฐ", en: "Payments for machines and equipment of $552 million." },
                { th: "เงินสดรับจากการจำหน่ายที่ดิน อาคารและอุปกรณ์ และสินทรัพย์ไม่มีตัวตน จำนวน 24 ล้านเหรียญสหรัฐ", en: "Receipts from sales of fixed assets and intangible assets of $24 million." },
                { th: "เงินสดจ่ายจากสินทรัพย์ทางการเงินที่วัดมูลค่าด้วยมูลค่ายุติธรรมผ่านกำไรขาดทุน จำนวน 67 ล้านเหรียญสหรัฐ", en: "Payments for financial assets measured at fair value through profit and loss of $67 million." },
                { th: "เงินสดจ่ายสำหรับสินทรัพย์ทางการเงินที่วัดมูลค่าด้วยราคาทุนตัดจำหน่าย จำนวน 46 ล้านเหรียญสหรัฐ", en: "Payments for financial assets measured at amortized cost of $46 million." },
                { th: "เงินสดรับสำหรับสินทรัพย์ทางการเงินที่วัดมูลค่าด้วยมูลค่ายุติธรรมผ่านกำไรเบ็ดเสร็จอื่น จำนวน 56 ล้านเหรียญสหรัฐ", en: "Receipts for financial assets measured at fair value through other comprehensive income of $56 million." },
                { th: "เงินสดจ่ายเพื่อเพิ่มเงินลงทุนในบริษัทร่วมและการร่วมค้าและจากการรวมธุรกิจ จำนวน 52 ล้านเหรียญสหรัฐ", en: "Payments for addition of investment in associate, joint ventures, and business combination of $52 million." },
                { th: "เงินสดจ่ายเพื่อซื้อกลุ่มสินทรัพย์จากบริษัทย่อย จำนวน 270 ล้านเหรียญสหรัฐ", en: "Payments for acquisition of a group of net assets of $270 million." },
                { th: "เงินสดจ่ายสำหรับค่าใช้จ่ายในการสำรวจและพัฒนารอตัดบัญชี จำนวน 188 ล้านเหรียญสหรัฐ", en: "Payments for deferred exploration and development expenditure of $188 million." },
                { th: "เงินปันผลรับ จำนวน 84 ล้านเหรียญสหรัฐ", en: "Receipts from dividends of $84 million." },
                { th: "เงินสดจ่ายสำหรับเงินฝากธนาคารที่มีข้อจำกัดในการใช้ จำนวน 6 ล้านเหรียญสหรัฐ", en: "Payment from placement of restricted deposits held at banks of $6 million." },
                { th: "เงินรับจากดอกเบี้ยรับและอื่น ๆ จำนวน 45 ล้านเหรียญสหรัฐ", en: "Receipts from interest income and others of $45 million." },
            ],
        },
    ],
};

export default section;
