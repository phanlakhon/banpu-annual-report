export type BilingualText = { th: string; en: string };

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
  | { type: 'text'; title?: BilingualText; content: BilingualText }
  | { type: 'highlights'; title?: BilingualText; content: BilingualText; items: Array<{ label: BilingualText; value: string }> }
  | { type: 'quote'; content: BilingualText; attribution?: BilingualText }
  | { type: 'list'; title?: BilingualText; items: BilingualText[] }
  | { type: 'image'; src: string; alt?: string; caption?: BilingualText }
  | { type: 'pdf_banner'; src: string; mobileSrcs?: string[]; alt?: string }
  | { type: 'pdf_row'; items: Array<{ src: string; alt?: string; colSpan?: number }>; withGap?: boolean }
  | { type: 'pdf_page'; items: PageSection[]; backgroundColor?: string; noPadding?: boolean; noMinHeight?: boolean; pageNumber?: string; pageNumberAlign?: 'left' | 'right'; pageNumberColor?: string; desktopFullImage?: string }
  | { type: 'pdf_note'; text: BilingualText; hidePrefix?: boolean }
  | { type: 'pdf_header'; text: BilingualText }
  | { type: 'pdf_title'; text: BilingualText }
  | { type: 'pdf_sub_title'; text: BilingualText }
  | {
    type: 'pdf_quote_block';
    text: BilingualText;
    signatureSrc: string;
    signatureName: BilingualText;
    signaturePosition: BilingualText
  }
  | { type: 'pdf_text_columns'; columns: BilingualText[]; fontFamily?: string }
  | {
    type: 'pdf_table';
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
  layout?: 'article' | 'pdf_composition' | 'pdf_single_full';
  sections: PageSection[];
  prevPage?: string;
  nextPage?: string;
};

export const pagesData: Record<string, PageData> = {
  '000': {
    pageId: '000',
    title: { th: 'บทนำ', en: 'Introduction' },
    accentColor: '#1e90e6',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_composition',
    sections: [
      {
        type: 'pdf_page',
        items: [
          {
            type: 'pdf_banner',
            src: '/page-intro/intro_p02_full.webp',
            mobileSrcs: ['/page-intro/page-4-mobile-head.webp', '/page-intro/page-4-mobile.webp']
          }
        ]
      },
      {
        type: 'pdf_page',
        items: [
          {
            type: 'pdf_banner',
            src: '/page-intro/intro_p03_full.webp',
            mobileSrcs: ['/page-intro/page-5-mobile-head.webp', '/page-intro/page-5-mobile-1.webp', '/page-intro/page-5-mobile-2.webp']
          }
        ]
      }
    ],
    prevPage: undefined,
    nextPage: '001',
  },
  '001': {
    pageId: '001',
    title: { th: 'จุดเด่นในรอบปี', en: 'Financial Highlights' },
    accentColor: '#1e90e6',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [
      {
        type: 'pdf_page',
        backgroundColor: '#d0f5fe',
        pageNumber: '04',
        pageNumberAlign: 'left',
        desktopFullImage: '/page-04/04_p04_full.webp',
        items: [
          {
            type: 'pdf_banner',
            src: '/page-04/04_p06_banner.webp',
          },
          {
            type: 'pdf_row',
            items: [
              { src: '/page-04/04_p06_col1.webp' },
              { src: '/page-04/04_p06_col2.webp' },
              { src: '/page-04/04_p06_col3.webp' }
            ]
          }
        ]
      },
      {
        type: 'pdf_page',
        backgroundColor: '#c4f6fd',
        pageNumber: '05',
        pageNumberAlign: 'right',
        desktopFullImage: '/page-04/04_p05_full.webp',
        items: [
          {
            type: 'pdf_banner',
            src: '/page-04/04_p07_banner.webp',
          },
          {
            type: 'pdf_row',
            items: [
              { src: '/page-04/04_p07_col1.webp' },
              { src: '/page-04/04_p07_col2.webp' },
              { src: '/page-04/04_p07_col3.webp' }
            ]
          }
        ]
      },
      {
        type: 'pdf_page',
        backgroundColor: '#ddf7ff',
        pageNumber: '06',
        pageNumberAlign: 'left',
        desktopFullImage: '/page-04/04_p06_full.webp',
        items: [
          {
            type: 'pdf_header',
            text: {
              th: 'การประกอบธุรกิจและผลการดำเนินงาน | การกำกับดูแลกิจการ | การรับรองความถูกต้องของข้อมูล',
              en: 'Business and Operational Performance | Corporate Governance | Certification of Information Accuracy'
            }
          },
          {
            type: 'pdf_row',
            items: [
              { src: '/page-04/04_p08_row1_left.webp' },
              { src: '/page-04/04_p08_row1_right.webp' }
            ]
          },
          {
            type: 'pdf_row',
            items: [
              { src: '/page-04/04_p08_row2_left.webp' },
              { src: '/page-04/04_p08_row2_right.webp' }
            ]
          },
          {
            type: 'pdf_row',
            items: [
              { src: '/page-04/04_p08_row3_left.webp' },
              { src: '/page-04/04_p08_row3_right.webp' }
            ]
          },
          {
            type: 'pdf_row',
            items: [
              { src: '/page-04/04_p08_row4_left.webp' },
              { src: '/page-04/04_p08_row4_right.webp' }
            ]
          },
          {
            type: 'pdf_note',
            text: {
              th: 'รายงานฉบับนี้นำเสนอผลการดำเนินงานของปี 2568 ก่อนวันที่ 29 มกราคม 2569 ที่ประชุมวิสามัญผู้ถือหุ้นครั้งที่ 1/2569 ที่ได้มีมติอนุมัติการปรับโครงสร้างกลุ่มบริษัท โดยการควบรวม (Amalgamation) ระหว่างบริษัทฯ และ BPP เพื่อจัดตั้งบริษัทใหม่ (NewCo)',
              en: 'This report presents the performance of 2025 prior to January 29, 2026, when the EGM No. 1/2026 approved the corporate restructuring through the amalgamation between the Company and BPP to form a new company (NewCo).'
            }
          }
        ]
      },
      {
        type: 'pdf_page',
        backgroundColor: '#ffffff',
        pageNumber: '07',
        pageNumberAlign: 'right',
        desktopFullImage: '/page-04/04_p07_full.webp',
        items: [
          {
            type: 'pdf_header',
            text: {
              th: 'รายงานประจำปี 2568 แบบแสดงรายการข้อมูลประจำปี (แบบ 56-1 One Report) บริษัท บ้านปู จำกัด (มหาชน)',
              en: 'Annual Report 2025 (Form 56-1 One Report) Banpu Public Company Limited'
            }
          },
          {
            type: 'pdf_table',
            headerTitle: { th: 'สำหรับปีสิ้นสุดวันที่', en: 'For the year ended' },
            highlightColumnIndex: 0,
            columns: [
              { th: '31 ธันวาคม 2568', en: '31 December 2025' },
              { th: '31 ธันวาคม 2567', en: '31 December 2024' },
              { th: '31 ธันวาคม 2566', en: '31 December 2023' }
            ],
            sections: [
              {
                title: { th: 'ฐานะการเงิน', en: 'Financial Position' },
                rows: [
                  { label: { th: 'สินทรัพย์รวม', en: 'Total Assets' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['13,941', '12,399', '13,000'] },
                  { label: { th: 'หนี้สินรวม', en: 'Total Liabilities' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['9,048', '7,698', '8,172'] },
                  { label: { th: 'ส่วนของผู้ถือหุ้น', en: 'Shareholders\' Equity' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['4,893', '4,701', '4,828'] },
                  { label: { th: 'ทุนที่ออกและเรียกชำระแล้ว', en: 'Issued and paid-up share capital' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['285', '285', '285'] },
                ]
              },
              {
                title: { th: 'ผลการดำเนินงาน', en: 'Operating Results' },
                rows: [
                  { label: { th: 'รายได้จากการขายรวม', en: 'Sales Revenue' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['5,278', '5,148', '5,083'] },
                  { label: { th: 'ต้นทุนขาย', en: 'Cost of Sales' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['(4,080)', '(3,900)', '(3,665)'] },
                  { label: { th: 'กำไรขั้นต้น', en: 'Gross Profit' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['1,198', '1,248', '1,418'], isBold: true },
                  { label: { th: 'ค่าใช้จ่ายในการขายและบริหาร', en: 'Selling and administrative expenses' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['(688)', '(615)', '(556)'] },
                  { label: { th: 'ค่าภาคหลวง', en: 'Royalties' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['(290)', '(329)', '(379)'] },
                  { label: { th: 'รายได้อื่น', en: 'Other income' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['189', '245', '219'] },
                  { label: { th: 'ค่าใช้จ่ายอื่น', en: 'Other expenses' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['(151)', '(136)', '(96)'] },
                  { label: { th: 'กำไรจากการดำเนินงาน', en: 'Operating Profit' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['258', '413', '606'] },
                  { label: { th: 'ส่วนแบ่งกำไรจากกิจการร่วมค้า', en: 'Share of profit from joint ventures' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['126', '196', '268'] },
                  { label: { th: 'ดอกเบี้ยจ่าย', en: 'Interest expenses' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['(341)', '(377)', '(374)'] },
                  { label: { th: 'ค่าใช้จ่ายทางการเงิน', en: 'Financial expenses' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['(20)', '(24)', '(10)'] },
                  { label: { th: 'ภาษีเงินได้', en: 'Income taxes' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['7', '(97)', '(119)'] },
                  { label: { th: 'ส่วนที่เป็นของส่วนได้เสียที่ไม่มีอำนาจควบคุม', en: 'Non-controlling interests' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['(92)', '(135)', '(212)'] },
                  { label: { th: 'กำไร (ขาดทุน) สุทธิ', en: 'Net Profit (Loss)' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['(61)', '(24)', '160'], isBold: true },
                  { label: { th: 'กำไรจากการดำเนินงานก่อนดอกเบี้ย ภาษี ค่าเสื่อมราคา และค่าใช้จ่ายตัดจ่าย', en: 'EBITDA' }, unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' }, values: ['1,191', '1,326', '1,487'], isBold: true },
                ]
              },
              {
                title: { th: 'อัตราส่วนทางการเงิน', en: 'Financial Ratios' },
                rows: [
                  { label: { th: 'อัตรากำไรขั้นต้น', en: 'Gross profit margin' }, unit: { th: '(%)', en: '(%)' }, values: ['22.7', '24.2', '27.9'] },
                  { label: { th: 'อัตรากำไร (ขาดทุน) สุทธิต่อรายได้รวม', en: 'Net profit (loss) margin' }, unit: { th: '(%)', en: '(%)' }, values: ['0.55', '1.99', '6.67'] },
                  { label: { th: 'อัตราผลตอบแทนจากสินทรัพย์', en: 'Return on assets' }, unit: { th: '(%)', en: '(%)' }, values: ['0.23', '0.88', '2.90'] },
                  { label: { th: 'อัตราผลตอบแทนผู้ถือหุ้น', en: 'Return on equity' }, unit: { th: '(%)', en: '(%)' }, values: ['(1.80)', '(0.66)', '4.42'] },
                  { label: { th: 'อัตราส่วนความสามารถในการชำระดอกเบี้ย', en: 'Interest coverage ratio' }, unit: { th: '(เท่า)', en: '(times)' }, values: ['3.49', '3.53', '3.98'] },
                  { label: { th: 'อัตราส่วนหนี้สินสุทธิต่อส่วนของผู้ถือหุ้น', en: 'Net debt to equity ratio' }, unit: { th: '(เท่า)', en: '(times)' }, values: ['0.98', '0.79', '0.90'] },
                ]
              },
              {
                title: { th: 'ข้อมูลต่อหุ้น', en: 'Share Data' },
                rows: [
                  { label: { th: 'กำไรสุทธิต่อหุ้น', en: 'Earnings per share' }, unit: { th: '(เหรียญสหรัฐ)', en: '(USD)' }, values: ['(0.006)', '(0.002)', '0.018'] },
                  { label: { th: 'มูลค่าตามบัญชีต่อหุ้น', en: 'Book value per share' }, unit: { th: '(เหรียญสหรัฐ)', en: '(USD)' }, values: ['0.49', '0.47', '0.48'] },
                  { label: { th: 'เงินปันผลต่อหุ้น', en: 'Dividend per share' }, unit: { th: '(บาท)', en: '(THB)' }, values: ['0.30*', '0.30', '0.45'] },
                ]
              }
            ]
          },
          {
            type: 'pdf_note',
            hidePrefix: true,
            text: {
              th: '* บริษัทฯ กำหนดการจ่ายเงินปันผลสำหรับผลการดำเนินงานประจำปี 2568 งวดวันที่ 1 มกราคม 2568 ถึงวันที่ 31 ธันวาคม 2568 ในอัตราหุ้นละ 0.30 บาท ซึ่งได้จ่ายเป็นเงินปันผลระหว่างกาลในอัตราหุ้นละ 0.12 บาท เมื่อวันที่ 25 กันยายน 2568 คงเหลือจ่ายเงินปันผลสำหรับผลการดำเนินงานประจำปี 2568 อีกหุ้นละ 0.18 บาท และบริษัทฯ กำหนดจ่ายเงินปันผลในวันที่ 29 เมษายน 2569',
              en: '* The Company scheduled the dividend payment for the 2025 operational results from 1 Jan 2025 to 31 Dec 2025 at THB 0.30 per share. An interim dividend of THB 0.12 per share was paid on 25 Sep 2025. The remaining THB 0.18 per share will be paid on 29 Apr 2026.'
            }
          },
          {
            type: 'pdf_note',
            text: {
              th: 'ข้อมูลทางการเงินและอัตราส่วนทางการเงินเป็นข้อมูลจากงบการเงินรวม\nรายงานฉบับนี้นำเสนอผลการดำเนินงานของปี 2568 ก่อนวันที่ 29 มกราคม 2569 ที่ประชุมวิสามัญผู้ถือหุ้นครั้งที่ 1/2569 ที่ได้มีมติอนุมัติการปรับโครงสร้างกลุ่มบริษัท โดยการควบรวม (Amalgamation) ระหว่างบริษัทฯ และ BPP เพื่อจัดตั้งบริษัทใหม่ (NewCo)',
              en: 'Financial data and ratios are based on consolidated financial statements.\nThis report presents the performance of 2025 prior to January 29, 2026, when the EGM No. 1/2026 approved the corporate restructuring through the amalgamation between the Company and BPP to form a new company (NewCo).'
            }
          }
        ]
      }
    ],
    prevPage: '000',
    nextPage: '002',
  },
  '002': {
    pageId: '002',
    title: { th: 'ผลการดำเนินงานในรอบปีที่ผ่านมา', en: 'Operational Results' },
    accentColor: '#2a2e82',
    layout: 'pdf_composition',
    sections: [
      {
        type: 'pdf_page',
        backgroundColor: '#ffffff',
        pageNumber: '08',
        pageNumberAlign: 'left',
        desktopFullImage: '/page-08/08_p08_full.webp',
        items: [
          {
            type: 'pdf_header',
            text: {
              th: 'การประกอบธุรกิจและผลการดำเนินงาน | การกำกับดูแลกิจการ | การรับรองความถูกต้องของข้อมูล',
              en: 'Business and Operational Performance | Corporate Governance | Certification of Information Accuracy'
            }
          },
          {
            type: 'pdf_title',
            text: {
              th: 'ผลการดำเนินงานในรอบปีที่ผ่านมา',
              en: 'Operational Results'
            }
          },
          {
            type: 'pdf_table',
            headerTitle: { th: 'สิ้นสุด ณ ปี', en: 'As of Year' },
            highlightColumnIndex: 0,
            columns: [
              { th: '2568', en: '2025' },
              { th: '2567', en: '2024' },
              { th: '2566', en: '2023' }
            ],
            sections: [
              {
                title: { th: 'ปริมาณการขายถ่านหิน', en: 'Coal Sales Volume' },
                unit: { th: '(ล้านตัน)', en: '(Million Tonnes)' },
                rows: [
                  { label: { th: 'ปริมาณการขายถ่านหิน - อินโดนีเซีย', en: 'Coal Sales Volume - Indonesia' }, values: ['20.5', '19.6', '17.0'] },
                  { label: { th: 'ปริมาณการขายถ่านหิน - แหล่งอื่น', en: 'Coal Sales Volume - Others' }, values: ['4.2', '4.4', '4.0'] },
                  { label: { th: 'รวมปริมาณการขายถ่านหิน - อินโดนีเซีย', en: 'Total Coal Sales Volume - Indonesia' }, values: ['24.7', '24.0', '21.0'], isBold: true },
                  { label: { th: 'ปริมาณการขายถ่านหิน - ออสเตรเลีย', en: 'Coal Sales Volume - Australia' }, values: ['7.2', '7.9', '7.0'] },
                  { label: { th: 'ปริมาณการขายถ่านหิน - มองโกเลีย', en: 'Coal Sales Volume - Mongolia' }, values: ['1.6', '-', '-'] },
                  { label: { th: 'ปริมาณการขายถ่านหิน - จีน (ซื้อขายถ่านหิน) และแหล่งอื่น', en: 'Coal Sales Volume - China (Trading) and Others' }, values: ['1.8', '0.9', '1.9'] },
                  { label: { th: 'รวมปริมาณการขายถ่านหิน', en: 'Total Coal Sales Volume' }, values: ['35.3', '32.8', '29.9'], isBold: true },
                ]
              },
              {
                title: { th: 'ปริมาณการขายก๊าซธรรมชาติ', en: 'Natural Gas Sales Volume' },
                unit: { th: '(พันล้านลูกบาศก์ฟุตเทียบเท่า)', en: '(BCFe)' },
                rows: [
                  { label: { th: 'ปริมาณการขายก๊าซธรรมชาติ - แหล่งมาร์เซลลัส', en: 'Natural Gas Sales Volume - Marcellus' }, values: ['34.2', '42.8', '51.4'] },
                  { label: { th: 'ปริมาณการขายก๊าซธรรมชาติ - แหล่งบาร์เนตต์', en: 'Natural Gas Sales Volume - Barnett' }, values: ['270.8', '245.6', '262.3'] },
                  { label: { th: 'รวมปริมาณการขายก๊าซธรรมชาติ', en: 'Total Natural Gas Sales Volume' }, values: ['305.0', '288.4', '313.7'], isBold: true },
                  { label: { th: 'ปริมาณการกักเก็บคาร์บอน', en: 'Carbon Capture Volume' }, unit: { th: '(พันตันคาร์บอนไดออกไซด์เทียบเท่า)', en: '(MT CO2e)' }, values: ['138.3', '165.1', '8.2'], isBold: true },
                ]
              },
              {
                title: { th: 'รายได้รวม', en: 'Total Revenue' },
                unit: { th: '(ล้านเหรียญสหรัฐ)', en: '(USD Million)' },
                rows: [
                  { label: { th: 'รายได้ - อินโดนีเซีย', en: 'Revenue - Indonesia' }, values: ['1,879', '2,294', '2,398'] },
                  { label: { th: 'รายได้ - ออสเตรเลีย', en: 'Revenue - Australia' }, values: ['712', '914', '805'] },
                  { label: { th: 'รายได้ - มองโกเลีย', en: 'Revenue - Mongolia' }, values: ['51', '-', '-'] },
                  { label: { th: 'รายได้ - จีน (ซื้อขายถ่านหิน) และแหล่งอื่น', en: 'Revenue - China (Trading) and Others' }, values: ['128', '82', '118'] },
                  { label: { th: 'รวมรายได้ธุรกิจเหมืองยุคใหม่', en: 'Total Revenue from Modern Mining' }, values: ['2,770', '3,290', '3,321'], isBold: true },
                  { label: { th: 'รายได้ธุรกิจก๊าซธรรมชาติครบวงจร', en: 'Revenue from Integrated Natural Gas' }, values: ['913', '726', '706'] },
                  { label: { th: 'รายได้ธุรกิจไฟฟ้าและธุรกิจที่เกี่ยวเนื่อง', en: 'Revenue from Power and Related Business' }, values: ['888', '777', '860'] },
                  { label: { th: 'รายได้ธุรกิจเทคโนโลยีแห่งอนาคต', en: 'Revenue from Future Energy Technology' }, values: ['699', '350', '191'] },
                  { label: { th: 'รายได้ธุรกิจอื่น', en: 'Revenue from Others' }, values: ['8', '6', '5'] },
                  { label: { th: 'รายได้รวม', en: 'Total Revenue' }, values: ['5,278', '5,149', '5,083'], isBold: true },
                ]
              },
              {
                title: { th: 'อัตรากำไรขั้นต้น', en: 'Gross Profit Margin' },
                unit: { th: '(%)', en: '(%)' },
                rows: [
                  { label: { th: 'อัตรากำไรขั้นต้น - อินโดนีเซีย', en: 'Gross Profit Margin - Indonesia' }, values: ['37', '42', '46'] },
                  { label: { th: 'อัตรากำไรขั้นต้น - ออสเตรเลีย', en: 'Gross Profit Margin - Australia' }, values: ['6', '5', '1'] },
                  { label: { th: 'อัตรากำไรขั้นต้น - มองโกเลีย', en: 'Gross Profit Margin - Mongolia' }, values: ['59', '-', '-'] },
                  { label: { th: 'อัตรากำไรขั้นต้น - จีน (ซื้อขายถ่านหิน) และแหล่งอื่น', en: 'Gross Profit Margin - China (Trading) and Others' }, values: ['8', '14', '13'] },
                  { label: { th: 'อัตรากำไรขั้นต้น - ธุรกิจเหมืองยุคใหม่', en: 'Gross Profit Margin - Modern Mining' }, values: ['28', '31', '34'], isBold: true },
                  { label: { th: 'อัตรากำไรขั้นต้น - ธุรกิจก๊าซธรรมชาติครบวงจร', en: 'Gross Profit Margin - Integrated Natural Gas' }, values: ['24', '17', '-1'] },
                  { label: { th: 'อัตรากำไรขั้นต้น - ธุรกิจไฟฟ้าและธุรกิจที่เกี่ยวเนื่อง', en: 'Gross Profit Margin - Power and Related Business' }, values: ['18', '10', '31'] },
                  { label: { th: 'อัตรากำไรขั้นต้น - ธุรกิจเทคโนโลยีแห่งอนาคต', en: 'Gross Profit Margin - Future Energy Technology' }, values: ['5', '27', '25'] },
                  { label: { th: 'อัตรากำไรขั้นต้น - ธุรกิจอื่น', en: 'Gross Profit Margin - Others' }, values: ['70', '7', '8'] },
                  { label: { th: 'อัตรากำไรขั้นต้นรวม', en: 'Total Gross Profit Margin' }, unit: { th: '(%)', en: '(%)' }, values: ['23', '24', '28'], isBold: true },
                ]
              }
            ]
          },
          {
            type: 'pdf_note',
            text: {
              th: 'รายงานฉบับนี้นำเสนอผลการดำเนินงานของปี 2568 ก่อนวันที่ 29 มกราคม 2569 ที่ประชุมวิสามัญผู้ถือหุ้นครั้งที่ 1/2569 ที่ได้มีมติอนุมัติการปรับโครงสร้างกลุ่มบริษัท โดยการควบรวม (Amalgamation) ระหว่างบริษัทฯ และ BPP เพื่อจัดตั้งบริษัทใหม่ (NewCo)',
              en: 'This report presents the performance of 2025 prior to January 29, 2026, when the EGM No. 1/2026 approved the corporate restructuring through the amalgamation between the Company and BPP to form a new company (NewCo).'
            }
          }
        ]
      },
      {
        type: 'pdf_page',
        backgroundColor: '#e3f6fc',
        pageNumber: '09',
        pageNumberAlign: 'right',
        desktopFullImage: '/page-08/08_p09_full.webp',
        items: [
          {
            type: 'pdf_header',
            text: {
              th: 'การประกอบธุรกิจและผลการดำเนินงาน | การกำกับดูแลกิจการ | การรับรองความถูกต้องของข้อมูล',
              en: 'Business and Operational Performance | Corporate Governance | Certification of Information Accuracy'
            }
          },
          {
            type: 'pdf_row',
            items: [
              { src: '/page-08/08_row1_col1.webp' },
              { src: '/page-08/08_row1_col2.webp' },
              { src: '/page-08/08_row1_col3.webp' }
            ]
          },
          {
            type: 'pdf_row',
            items: [
              { src: '/page-08/08_row2_col1.webp' },
              { src: '/page-08/08_row2_col2.webp' }
            ]
          },
          {
            type: 'pdf_sub_title',
            text: { th: 'รายได้รวม', en: 'Total Revenue' }
          },
          {
            type: 'pdf_row',
            items: [
              { src: '/page-08/08_row3_col1.webp' },
              { src: '/page-08/08_row3_col2.webp' },
              { src: '/page-08/08_row3_col3.webp' }
            ]
          }
        ]
      }
    ],
    prevPage: '001',
    nextPage: '003',
  },
  '003': {
    pageId: '003',
    title: { th: 'รายงานคณะกรรมการ', en: "The Board of Directors' Review" },
    accentColor: '#311b92',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [
      {
        type: 'pdf_page',
        backgroundColor: '#ffffff',
        noPadding: true,
        pageNumber: '10',
        pageNumberAlign: 'left',
        desktopFullImage: '/page-10/10_p10_full.webp',
        items: [
          {
            type: 'pdf_page',
            backgroundColor: '#e3f6fc',
            noMinHeight: true,
            items: [
              {
                type: 'pdf_header',
                text: {
                  th: 'การประกอบธุรกิจและผลการดำเนินงาน | การกำกับดูแลกิจการ | การรับรองความถูกต้องของข้อมูล',
                  en: 'Business and Operational Performance | Corporate Governance | Certification of Information Accuracy'
                }
              },
              {
                type: 'pdf_banner',
                src: '/page-10/10_quote_message.webp',
              },
            ]
          },
          {
            type: 'pdf_page',
            backgroundColor: '#ffffff',
            noMinHeight: true,
            items: [
              {
                type: 'pdf_text_columns',
                fontFamily: 'sarabun',
                columns: [
                  {
                    th: 'ในปี 2568 คณะกรรมการบริษัทได้กำกับดูแลการดำเนินงานของบ้านปูภายใต้บริบทที่มีความท้าทายเพิ่มขึ้น จากทั้งการเปลี่ยนแปลงด้านภูมิรัฐศาสตร์ สภาพแวดล้อมทางธุรกิจและเทคโนโลยีที่มีความซับซ้อนมากขึ้น โดยคณะกรรมการยังคงยึดมั่นในหลักธรรมาภิบาล ความโปร่งใส และความรับผิดชอบต่อผู้มีส่วนได้เสียทุกฝ่าย เพื่อเสริมสร้างรากฐานของการดำเนินงานที่มั่นคงและยั่งยืนในระยะยาว\n\nสำหรับประเด็นเชิงยุทธศาสตร์ขององค์กร คณะกรรมการได้กำกับดูแลในประเด็นสำคัญที่ฝ่ายบริหารนำเสนอภายใต้ยุทธศาสตร์ Energy Symphonics ที่สะท้อนทิศทางหลักในการขับเคลื่อนธุรกิจของบ้านปู รวมถึงกำกับดูแลการลงทุนของบริษัทฯ และบริษัทย่อยให้เป็นไปตามแผนกลยุทธ์ การควบรวมระหว่างบ้านปู และบ้านปู เพาเวอร์ เพื่อสนับสนุนการปรับโครงสร้างองค์กรให้มีความคล่องตัว และประสิทธิภาพด้านเงินทุนมากยิ่งขึ้น โดยคณะกรรมการให้ความสำคัญกับบทบาทกำกับดูแล (Oversight) ในด้านความโปร่งใส การปฏิบัติตามกฎหมาย และการประเมินความเสี่ยง เพื่อให้กระบวนการดังกล่าวเป็นไปอย่างรัดกุมและสอดคล้องกับหลักธรรมาภิบาล',
                    en: 'In 2025, the Board of Directors oversaw Banpu\'s operations within an increasingly challenging context, driven by geopolitical shifts and more complex business and technological environments. The Board remains committed to corporate governance, transparency, and accountability to all stakeholders to strengthen the foundation for stable and sustainable long-term operations.\n\nRegarding corporate strategic issues, the Board oversaw key matters presented by the management under the "Energy Symphonics" strategy, reflecting the core direction of Banpu\'s business. This included overseeing investments of the Company and its subsidiaries in accordance with the strategic plan, and the amalgamation between Banpu and Banpu Power to support corporate restructuring for greater agility and capital efficiency. The Board prioritized its oversight role in transparency, legal compliance, and risk assessment to ensure these processes were rigorous and aligned with corporate governance principles.'
                  },
                  {
                    th: 'คณะกรรมการให้ความสำคัญกับการนำเทคโนโลยีและปัญญาประดิษฐ์ (AI) มาเพิ่มประสิทธิภาพการดำเนินธุรกิจ ที่ผ่านมาบริษัทฯ ได้นำ AI มาใช้ในธุรกิจหลัก ทั้งในด้านแผนการผลิต การตลาด และการจัดการห่วงโซ่อุปทาน เพื่อช่วยวิเคราะห์ข้อมูลเชิงลึก ควบคุมคุณภาพสินค้า และช่วยให้ลูกค้าสามารถสร้างมูลค่าเพิ่มเสริมความได้เปรียบในการแข่งขัน ในขณะเดียวกันด้านการกำกับดูแล ได้ส่งเสริมการนำเทคโนโลยีดิจิทัลและ AI มาประยุกต์ใช้ในการวิเคราะห์และการตรวจสอบ เพื่อเพิ่มประสิทธิภาพการตรวจสอบและติดตามผลอันนำไปสู่การปกป้ององค์กรจากความเสียหายและการสร้างมูลค่าเพิ่ม\n\nด้านการขับเคลื่อนด้านความยั่งยืน คณะกรรมการได้ทบทวนและปรับปรุงนโยบายด้าน ESG ที่สำคัญในปี 2568 ได้แก่ นโยบายสิทธิมนุษยชน นโยบายด้านการเปลี่ยนแปลง',
                    en: 'The Board places high importance on leveraging technology and Artificial Intelligence (AI) to enhance business efficiency. The Company has integrated AI into its core businesses, including production planning, marketing, and supply chain management, to facilitate in-depth data analysis, quality control, and enable customers to create added value and competitive advantages. Concurrently, in terms of governance, the Board promoted the application of digital technology and AI in analysis and auditing to improve monitoring efficiency, leading to organizational protection and value creation.\n\nIn driving sustainability, the Board reviewed and updated key ESG policies in 2025, including the Human Rights Policy and Climate Change Policy.'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: 'pdf_page',
        backgroundColor: '#ffffff',
        noPadding: true,
        pageNumber: '11',
        pageNumberAlign: 'right',
        desktopFullImage: '/page-10/10_p11_full.webp',
        items: [
          {
            type: 'pdf_page',
            backgroundColor: '#e3f6fc',
            noMinHeight: true,
            items: [
              {
                type: 'pdf_header',
                text: {
                  th: 'รายงานประจำปี 2568 แบบแสดงรายการข้อมูลประจำปี (แบบ 56-1 One Report) บริษัท บ้านปู จำกัด (มหาชน)',
                  en: 'Annual Report 2025 (Form 56-1 One Report) Banpu Public Company Limited'
                }
              },
              {
                type: 'pdf_banner',
                src: '/page-10/10_chairman_photo.webp',
              },
            ]
          },
          {
            type: 'pdf_page',
            backgroundColor: '#ffffff',
            noMinHeight: true,
            items: [
              {
                type: 'pdf_text_columns',
                fontFamily: 'sarabun',
                columns: [
                  {
                    th: 'สภาพภูมิอากาศ นโยบายด้านความหลากหลายทางชีวภาพ และหลักจรรยาบรรณคู่ค้า รวมถึงได้ตั้งเป้าหมายระยะ 5 ปี สำหรับรอบปี 2569 - 2573 โดยหัวข้อที่ได้มีการตั้งเป้าหมาย เช่น การใช้น้ำ คุณภาพอากาศ และอาชีวอนามัย และความปลอดภัย เป็นต้น พร้อมทั้งติดตามประเด็นความเสี่ยงด้าน ESG เพื่อให้การดำเนินงานด้านความยั่งยืนมีความครบถ้วน\n\nสำหรับการควบคุมภายในและบริหารความเสี่ยง คณะกรรมการได้ติดตามความมีประสิทธิภาพของระบบควบคุมภายใน การจัดการความเสี่ยง และการปฏิบัติตามกฎหมาย พร้อมสนับสนุนแผนการตรวจสอบประจำปีให้เป็นไปตามมาตรฐานการตรวจสอบภายในสากล (Global Internal Audit Standards) และมุ่งเน้นการตรวจสอบตามระดับความเสี่ยงที่มีนัยสำคัญ (Risk-based Approach) เพื่อให้บริษัทฯ มีความพร้อมต่อความเสี่ยงด้านไซเบอร์ เทคโนโลยี และความท้าทายที่เพิ่มขึ้นในสภาวะแวดล้อมทางธุรกิจปัจจุบัน',
                    en: 'Climate Change, Biodiversity Policy, and Supplier Code of Conduct. The Board also established 5-year targets for 2026-2030, covering areas such as water usage, air quality, and occupational health and safety, while monitoring ESG risk issues to ensure comprehensive sustainability operations.\n\nFor internal control and risk management, the Board monitored the effectiveness of internal control systems, risk management, and legal compliance. The Board supported the annual audit plan in alignment with Global Internal Audit Standards, focusing on a risk-based approach to ensure the Company\'s preparedness for cyber risks, technology shifts, and increasing challenges in the current business environment.'
                  },
                  {
                    th: 'ในปี 2568 คณะกรรมการยังคงติดตามและประเมินประสิทธิภาพในการนำนโยบายบรรษัทภิบาลและคู่มือจริยธรรมธุรกิจไปปฏิบัติในองค์กร ซึ่งผลสำรวจที่ได้อยู่ในระดับที่น่าพอใจ นอกจากนี้ยังได้พิจารณาปรับปรุงแบบประเมินผลการปฏิบัติงานของคณะกรรมการประจำปี 2568 ทั้งรายคณะและรายบุคคล เพื่อพัฒนาเกณฑ์การประเมินดังกล่าวให้สอดรับกับบริบทขององค์กรในปัจจุบัน และสะท้อนความคิดเห็นของกรรมการได้อย่างมีประสิทธิภาพยิ่งขึ้น\n\nคณะกรรมการขอขอบคุณผู้ถือหุ้น ลูกค้า คู่ค้า ชุมชน พนักงานและผู้มีส่วนได้เสียทุกกลุ่มที่ให้การสนับสนุนอย่างต่อเนื่อง คณะกรรมการบริษัทเชื่อมั่นว่าความมุ่งมั่นในการกำกับดูแลด้วยความโปร่งใส ซื่อสัตย์ และรับผิดชอบ เพื่อให้กลุ่มบริษัทฯ เติบโตอย่างมั่นคง ท่ามกลางสถานการณ์โลกที่ท้าทายดังเช่นในปี 2568 จะเสริมสร้างรากฐานที่มั่นคงให้แก่บ้านปู และสนับสนุนให้บริษัทฯ มีความพร้อมในการรับมือกับความท้าทายและโอกาสในอนาคต',
                    en: 'In 2025, the Board continued to monitor and assess the effectiveness of corporate governance policy and business ethics manual implementation, with satisfactory survey results. Additionally, the Board refined the performance evaluation forms for the Board and individual directors for 2025 to better align with the current organizational context and more effectively reflect directors\' feedback.\n\nThe Board expresses its gratitude to shareholders, customers, partners, communities, employees, and all stakeholders for their ongoing support. The Board of Directors remains confident that our commitment to governance with transparency, integrity, and responsibility—ensuring stable growth amidst global challenges as seen in 2025—will strengthen Banpu\'s foundation and ensure the Company\'s readiness for future challenges and opportunities.'
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    prevPage: '002',
    nextPage: '004',
  },
  '004': { pageId: '004', title: { th: 'สารจากประธานเจ้าหน้าที่บริหาร', en: "Chief Executive Officer's Review" }, accentColor: '#1565c0', sections: [], prevPage: '003', nextPage: '005' },
  '005': { pageId: '005', title: { th: 'นโยบายและภาพรวมการประกอบธุรกิจ', en: 'Policy and Business Overview' }, accentColor: '#1e90e6', sections: [], prevPage: '004', nextPage: '006' },
  '006': { pageId: '006', title: { th: 'แผนที่แสดงธุรกิจของกลุ่มบ้านปู', en: "Banpu Group's Map of Operations" }, accentColor: '#00838f', sections: [], prevPage: '005', nextPage: '007' },
  '007': { pageId: '007', title: { th: 'วิสัยทัศน์และพันธกิจ', en: 'Vision & Mission' }, accentColor: '#4b3fa7', sections: [], prevPage: '006', nextPage: '008' },
  '008': { pageId: '008', title: { th: 'สรุปการเปลี่ยนแปลงและพัฒนาการที่สำคัญในรอบปี 2568 รวมทั้งเหตุการณ์ปัจจุบัน', en: 'Summary of Major Changes and Development in 2025 and Current Events' }, accentColor: '#1e90e6', sections: [], prevPage: '007', nextPage: '009' },
  '009': { pageId: '009', title: { th: 'ข้อมูลทั่วไปของบริษัท', en: 'Banpu Information' }, accentColor: '#1e90e6', sections: [], prevPage: '008', nextPage: '010' },
  '010': { pageId: '010', title: { th: 'โครงสร้างรายได้', en: 'Revenue Structure' }, accentColor: '#1e90e6', sections: [], prevPage: '009', nextPage: '011' },
  '011': { pageId: '011', title: { th: 'ข้อมูลกลุ่มธุรกิจ', en: 'Products and Services' }, accentColor: '#1e90e6', sections: [], prevPage: '010', nextPage: '012' },
  '012': { pageId: '012', title: { th: 'ภาวะตลาดและการแข่งขัน', en: 'Market and Competition' }, accentColor: '#1e90e6', sections: [], prevPage: '011', nextPage: '013' },
  '013': { pageId: '013', title: { th: 'ทรัพย์สินที่ใช้ในการประกอบธุรกิจ', en: 'Business Assets' }, accentColor: '#1e90e6', sections: [], prevPage: '012', nextPage: '014' },
  '014': { pageId: '014', title: { th: 'ปริมาณสำรองถ่านหินและก๊าซธรรมชาติ', en: 'Coal and Natural Gas Reserves' }, accentColor: '#1e90e6', sections: [], prevPage: '013', nextPage: '015' },
  '015': { pageId: '015', title: { th: 'โครงสร้างกลุ่มบริษัทฯ', en: 'Banpu Group Structure' }, accentColor: '#1e90e6', sections: [], prevPage: '014', nextPage: '016' },
  '016': { pageId: '016', title: { th: 'รายชื่อบริษัทย่อยและบริษัทร่วมและกิจการร่วมค้าและการลงทุนอื่นของบริษัท บ้านปู จำกัด (มหาชน)', en: 'Detail of The Company, Its Subsidiaries and Associated Companies and Joint Ventures and Other Investment of Banpu Public Company Limited' }, accentColor: '#1e90e6', sections: [], prevPage: '015', nextPage: '017' },
  '017': { pageId: '017', title: { th: 'ผู้ถือหุ้น', en: 'Shareholders' }, accentColor: '#1e90e6', sections: [], prevPage: '016', nextPage: '018' },
  '018': { pageId: '018', title: { th: 'ข้อมูลหลักทรัพย์', en: 'Security' }, accentColor: '#1e90e6', sections: [], prevPage: '017', nextPage: '019' },
  '019': { pageId: '019', title: { th: 'หุ้นกู้', en: 'Debentures' }, accentColor: '#1e90e6', sections: [], prevPage: '018', nextPage: '020' },
  '020': { pageId: '020', title: { th: 'นโยบายการจ่ายเงินปันผล', en: 'Dividend Policy' }, accentColor: '#1e90e6', sections: [], prevPage: '019', nextPage: '021' },
  '021': { pageId: '021', title: { th: 'การบริหารจัดการความเสี่ยง', en: 'Risk Management' }, accentColor: '#1e90e6', sections: [], prevPage: '020', nextPage: '022' },
  '022': { pageId: '022', title: { th: 'การขับเคลื่อนธุรกิจเพื่อความยั่งยืน', en: 'Driving Business for Sustainability' }, accentColor: '#1e90e6', sections: [], prevPage: '021', nextPage: '023' },
  '023': { pageId: '023', title: { th: 'การจัดการผลกระทบต่อผู้มีส่วนได้เสียในห่วงโซ่คุณค่าของธุรกิจ', en: 'Management of Stakeholder Impacts in Business Value Chain' }, accentColor: '#1e90e6', sections: [], prevPage: '022', nextPage: '024' },
  '024': { pageId: '024', title: { th: 'การจัดการด้านความยั่งยืนในมิติสิ่งแวดล้อม', en: 'Sustainability Management – Environmental Aspect' }, accentColor: '#1e90e6', sections: [], prevPage: '023', nextPage: '025' },
  '025': { pageId: '025', title: { th: 'การจัดการด้านความยั่งยืนในมิติสังคม', en: 'Sustainability Management – Society Aspect' }, accentColor: '#1e90e6', sections: [], prevPage: '024', nextPage: '026' },
  '026': { pageId: '026', title: { th: 'ความรับผิดชอบต่อสังคม', en: 'Corporate Social Responsibility (CSR)' }, accentColor: '#1e90e6', sections: [], prevPage: '025', nextPage: '027' },
  '027': { pageId: '027', title: { th: 'คำอธิบายและการวิเคราะห์ของฝ่ายจัดการ', en: "Management's Discussion and Analysis" }, accentColor: '#1e90e6', sections: [], prevPage: '026', nextPage: '028' },
  '028': { pageId: '028', title: { th: 'อัตราส่วนทางการเงิน', en: 'Financial Ratio' }, accentColor: '#1e90e6', sections: [], prevPage: '027', nextPage: '029' },
  '029': { pageId: '029', title: { th: 'บุคคลอ้างอิงอื่น ๆ', en: 'Other References' }, accentColor: '#1e90e6', sections: [], prevPage: '028', nextPage: '030' },
  '030': { pageId: '030', title: { th: 'คดีความที่สำคัญในระหว่างปี', en: 'Significant Litigation During the Year' }, accentColor: '#1e90e6', sections: [], prevPage: '029', nextPage: '031' },
  '031': { pageId: '031', title: { th: 'นโยบายการกำกับดูแลกิจการ', en: 'Corporate Governance Policy' }, accentColor: '#2a2e82', sections: [], prevPage: '030', nextPage: '032' },
  '032': { pageId: '032', title: { th: 'โครงสร้างการกำกับดูแลกิจการ', en: 'Corporate Governance Structure' }, accentColor: '#2a2e82', sections: [], prevPage: '031', nextPage: '033' },
  '033': { pageId: '033', title: { th: 'ผลการดำเนินงานด้านการกำกับดูแลกิจการ', en: 'Corporate Governance Performance' }, accentColor: '#2a2e82', sections: [], prevPage: '032', nextPage: '034' },
  '034': { pageId: '034', title: { th: 'รายงานคณะกรรมการบรรษัทภิบาลและสรรหา', en: 'Report of the Corporate Governance and Nomination Committee' }, accentColor: '#2a2e82', sections: [], prevPage: '033', nextPage: '035' },
  '035': { pageId: '035', title: { th: 'รายงานคณะกรรมการกำหนดค่าตอบแทน', en: 'Report of the Compensation Committee' }, accentColor: '#2a2e82', sections: [], prevPage: '034', nextPage: '036' },
  '036': { pageId: '036', title: { th: 'รายงานคณะกรรมการตรวจสอบต่อผู้ถือหุ้น', en: 'Audit Committee Report to Shareholders' }, accentColor: '#2a2e82', sections: [], prevPage: '035', nextPage: '037' },
  '037': { pageId: '037', title: { th: 'รายงานคณะกรรมการสิ่งแวดล้อม สังคม และการกำกับดูแลกิจการ (คณะกรรมการ ESG)', en: 'Environment, Social and Governance (ESG) Committee Report' }, accentColor: '#2a2e82', sections: [], prevPage: '036', nextPage: '038' },
  '038': { pageId: '038', title: { th: 'การควบคุมภายในและรายการระหว่างกัน', en: 'Internal Control and Connected Transactions' }, accentColor: '#2a2e82', sections: [], prevPage: '037', nextPage: '039' },
  '039': { pageId: '039', title: { th: 'เอกสารแนบ 1 : รายละเอียดเกี่ยวกับคณะกรรมการบริษัทและผู้บริหาร', en: 'Attachment 1: Details of the Board of Directors and Management' }, accentColor: '#1e90e6', sections: [], prevPage: '038', nextPage: '040' },
  '040': { pageId: '040', title: { th: 'เอกสารแนบ 2 : รายละเอียดการดำรงตำแหน่งของผู้บริหารและผู้มีอำนาจควบคุมในบริษัทย่อยและบริษัทร่วม กิจการร่วมค้าและเงินลงทุนอื่น', en: 'Attachment 2: Details of the Management and Controlling Parties of Banpu and Its Subsidiaries' }, accentColor: '#1e90e6', sections: [], prevPage: '039', nextPage: undefined },
};

export const pageOrder = [
  '000', '001', '002', '003', '004',
  '005', '006', '007', '008', '009', '010', '011', '012', '013', '014',
  '015', '016', '017', '018', '019', '020', '021', '022', '023', '024',
  '025', '026', '027', '028', '029', '030',
  '031', '032', '033', '034', '035', '036', '037', '038',
  '039', '040',
];
