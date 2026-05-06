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
    | { type: "pdf_title"; text: BilingualText; large?: boolean }
    | { type: "pdf_sub_title"; text: BilingualText; color?: string; size?: "lg" | "md" | "sm"; weight?: "bold" | "semibold" | "medium"; textAlign?: "center" }
    | { type: "pdf_gradient_text"; text: BilingualText; boldPhrase?: BilingualText }
    | { type: "pdf_gradient_divider"; thin?: boolean }
    | { type: "pdf_body_text"; text: BilingualText; paddingLeft?: string; colorPhrase?: BilingualText; boldPhrase?: BilingualText }
    | { type: "pdf_list"; items: Array<BilingualText | { label: BilingualText; description: BilingualText }>; paddingLeft?: string; color?: string; itemSeparator?: string }
    | {
          type: "pdf_numbered_list";
          items: Array<{
              label: BilingualText;
              description: BilingualText;
              subItems?: BilingualText[];
          }>;
          paddingLeft?: string;
          startFrom?: number;
      }
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
    layout?: "article" | "pdf_composition" | "pdf_single_column" | "pdf_single_full";
    sections: PageSection[];
    prevPage?: string;
    nextPage?: string;
};
