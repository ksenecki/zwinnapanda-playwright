export type PdfFileType = {
  Transcoder: string;
  Meta: {
    PDFFormatVersion: string;
    IsAcroFormPresent: boolean;
    IsXFAPresent: boolean;
    Producer: string;
    CreationDate: string;
    ModDate: string;
    Metadata: unknown;
  };
  Pages: {
    Width: number; // Page width
    Height: number; // Page height
    // Horizontal text lines with X and Y coordinates, Width, Length, Original Color and CoLoR
    HLines: {
      x: number;
      y: number;
      w: number;
      l: number;
      oc: string;
      clr: string;
    }[];
    // Same for Vertical text lines
    VLines: {
      x: number;
      y: number;
      w: number;
      l: number;
      oc: string;
      clr: string;
    }[];
    Fills: {
      x: number;
      y: number;
      w: number;
      h: number;
      oc: string;
      clr: number;
    }[];
    // Alignment and text aRray with actual Text, Style and Text Style
    Texts: {
      x: number;
      y: number;
      w: number;
      oc: string;
      clr: number;
      sw: number;
      A: string;
      R: { T: "string"; S: number; TS: number[] }[];
    }[];
    Fields: unknown[];
    Boxsets: unknown[];
  }[];
};
