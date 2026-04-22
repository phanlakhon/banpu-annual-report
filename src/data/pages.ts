export type BilingualText = { th: string; en: string };

export type PageSection =
  | { type: 'text'; title?: BilingualText; content: BilingualText }
  | { type: 'highlights'; title?: BilingualText; content: BilingualText; items: Array<{ label: BilingualText; value: string }> }
  | { type: 'quote'; content: BilingualText; attribution?: BilingualText }
  | { type: 'list'; title?: BilingualText; items: BilingualText[] }
  | { type: 'image'; src: string; alt?: string; caption?: BilingualText }
  | { type: 'pdf_banner'; src: string; alt?: string }
  | { type: 'pdf_row'; items: Array<{ src: string; alt?: string; colSpan?: number }>; withGap?: boolean }
  | { type: 'pdf_spread'; leftSrc: string; rightSrc: string; alt?: string }
  | { type: 'pdf_page'; items: PageSection[] }
  | { type: 'pdf_note'; text: BilingualText }
  | { type: 'pdf_header'; text: BilingualText };

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
