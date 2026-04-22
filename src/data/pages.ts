export type BilingualText = { th: string; en: string };

export type PageSection =
  | { type: 'text'; title?: BilingualText; content: BilingualText }
  | { type: 'highlights'; title?: BilingualText; content: BilingualText; items: Array<{ label: BilingualText; value: string }> }
  | { type: 'quote'; content: BilingualText; attribution?: BilingualText }
  | { type: 'list'; title?: BilingualText; items: BilingualText[] }
  | { type: 'image'; src: string; alt?: string; caption?: BilingualText };

export type PageData = {
  pageId: string;
  title: BilingualText;
  subtitle?: BilingualText;
  accentColor: string;
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
    sections: [],
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
