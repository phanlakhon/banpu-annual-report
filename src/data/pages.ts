export type BilingualText = { th: string; en: string };

export type TableRowData = {
  label: BilingualText;
  unit?: BilingualText;
  values: string[];
  isBold?: boolean;
};

export type TableSectionData = {
  title?: BilingualText;
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
  | { type: 'pdf_page'; items: PageSection[] }
  | { type: 'pdf_note'; text: BilingualText; hidePrefix?: boolean }
  | { type: 'pdf_header'; text: BilingualText }
  | { 
      type: 'pdf_table'; 
      headerTitle?: BilingualText; 
      columns: BilingualText[]; 
      sections: TableSectionData[];
    };

export type PageData = {
  pageId: string;
  title: BilingualText;
  subtitle?: BilingualText;
  accentColor: string;
  backgroundColor?: string;
  layout?: 'article' | 'pdf_composition';
  sections: PageSection[];
  prevPage?: string;
  nextPage?: string;
};

export const pagesData: Record<string, PageData> = {
  '00': {
    pageId: '00',
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
            src: '/page-home/page-4.png',
            mobileSrcs: ['/page-home/page-4-mobile-head.png', '/page-home/page-4-mobile.png']
          }
        ]
      },
      {
        type: 'pdf_page',
        items: [
          {
            type: 'pdf_banner',
            src: '/page-home/page-5.png',
            mobileSrcs: ['/page-home/page-5-mobile-head.png', '/page-home/page-5-mobile-1.png', '/page-home/page-5-mobile-2.png']
          }
        ]
      }
    ],
    nextPage: '04'
  },
  '04': {
    pageId: '04',
    title: { th: 'จุดเด่นในรอบปี 2568', en: 'Highlights of 2025' },
    subtitle: { th: '', en: '' },
    accentColor: '#1e90e6',
    backgroundColor: '#e3f6fc',
    layout: 'pdf_composition',
    sections: [
      {
        type: 'pdf_page',
        items: [
          {
            type: 'pdf_banner',
            src: '/04-page/04_p06_banner.png',
          },
          {
            type: 'pdf_row',
            items: [
              { src: '/04-page/04_p06_col1.png' },
              { src: '/04-page/04_p06_col2.png' },
              { src: '/04-page/04_p06_col3.png' }
            ]
          }
        ]
      },
      {
        type: 'pdf_page',
        items: [
          {
            type: 'pdf_banner',
            src: '/04-page/04_p07_banner.png',
          },
          {
            type: 'pdf_row',
            items: [
              { src: '/04-page/04_p07_col1.png' },
              { src: '/04-page/04_p07_col2.png' },
              { src: '/04-page/04_p07_col3.png' }
            ]
          }
        ]
      },
      {
        type: 'pdf_page',
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
              { src: '/04-page/04_p08_row1_left.png' },
              { src: '/04-page/04_p08_row1_right.png' }
            ]
          },
          {
            type: 'pdf_row',
            items: [
              { src: '/04-page/04_p08_row2_left.png' },
              { src: '/04-page/04_p08_row2_right.png' }
            ]
          },
          {
            type: 'pdf_row',
            items: [
              { src: '/04-page/04_p08_row3_left.png' },
              { src: '/04-page/04_p08_row3_right.png' }
            ]
          },
          {
            type: 'pdf_row',
            items: [
              { src: '/04-page/04_p08_row4_left.png' },
              { src: '/04-page/04_p08_row4_right.png' }
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
    prevPage: undefined,
    nextPage: '08',
  },
  '08': {
    pageId: '08',
    title: { th: 'ผลการดำเนินงานในรอบปีที่ผ่านมา', en: 'Performance in the Past Year' },
    subtitle: { th: '', en: '' },
    accentColor: '#2a2e82',
    sections: [],
    prevPage: '04',
    nextPage: '10',
  },
  '10': {
    pageId: '10',
    title: { th: 'รายงานคณะกรรมการบริษัท', en: "Board of Directors' Report" },
    subtitle: { th: '', en: '' },
    accentColor: '#311b92',
    sections: [],
    prevPage: '08',
    nextPage: '12',
  },
  '12': {
    pageId: '12',
    title: { th: 'สารจากประธานเจ้าหน้าที่บริหาร', en: 'Message from the CEO' },
    subtitle: { th: '', en: '' },
    accentColor: '#1565c0',
    sections: [],
    prevPage: '10',
    nextPage: '18',
  },
  '18': {
    pageId: '18',
    title: { th: 'นโยบายและภาพรวมการประกอบธุรกิจ', en: 'Business Policy and Overview' },
    subtitle: { th: '', en: '' },
    accentColor: '#1e90e6',
    sections: [],
    prevPage: '12',
    nextPage: '22',
  },
  '22': {
    pageId: '22',
    title: { th: 'แผนที่แสดงธุรกิจของกลุ่มบ้านปู', en: 'Banpu Group Business Map' },
    subtitle: { th: '', en: '' },
    accentColor: '#00838f',
    sections: [],
    prevPage: '18',
    nextPage: '24',
  },
  '24': {
    pageId: '24',
    title: { th: 'วิสัยทัศน์และพันธกิจ', en: 'Vision and Mission' },
    subtitle: { th: '', en: '' },
    accentColor: '#4b3fa7',
    sections: [],
    prevPage: '22',
    nextPage: '254',
  },
  '254': {
    pageId: '254',
    title: { th: 'นโยบายการกำกับดูแลกิจการ', en: 'Corporate Governance Policy' },
    subtitle: { th: '', en: '' },
    accentColor: '#2a2e82',
    sections: [],
    prevPage: '24',
    nextPage: '282',
  },
  '282': {
    pageId: '282',
    title: { th: 'โครงสร้างการกำกับดูแลกิจการ', en: 'Corporate Governance Structure' },
    subtitle: { th: '', en: '' },
    accentColor: '#311b92',
    sections: [],
    prevPage: '254',
    nextPage: '342',
  },
  '342': {
    pageId: '342',
    title: { th: 'เอกสารแนบ 1: รายละเอียดเกี่ยวกับกรรมการ', en: 'Attachment 1: Director Details' },
    subtitle: { th: '', en: '' },
    accentColor: '#1e90e6',
    sections: [],
    prevPage: '282',
    nextPage: undefined,
  },
};

export const pageOrder = ['04', '08', '10', '12', '18', '22', '24', '254', '282', '342'];
