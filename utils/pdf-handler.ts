import PDFParser from "pdf2json";
import { PdfFileType } from "./types";

export async function getPDFContents(
  pdfFilePath: string
): Promise<PdfFileType> {
  const pdfParser = new PDFParser();
  return new Promise((resolve, reject) => {
    pdfParser.on("pdfParser_dataError", (errData: { parserError: unknown }) =>
      reject(errData.parserError)
    );
    pdfParser.on("pdfParser_dataReady", (pdfData: PdfFileType) => {
      resolve(pdfData);
    });
    pdfParser.loadPDF(pdfFilePath);
  });
}
