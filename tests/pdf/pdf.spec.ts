import test, { expect } from "@playwright/test";
//@ts-ignore
import ComparePdf from "compare-pdf";
import { getPDFContents } from "@utils/pdf-handler";

test.describe("Pdf tests", () => {
  test("Pdf2json test", async () => {
    const pdfContents = await getPDFContents(
      "./data/baselinePdfs/LoremIpsum.pdf"
    );
    const pdfTextArr = [];
    for (let i = 0; i < pdfContents.Pages[0].Texts.length; i++) {
      pdfTextArr.push(pdfContents.Pages[0].Texts[`${i}`].R[0].T);
    }
    const regExpClear = new RegExp(",", "g");
    const regExpSpace = new RegExp("%20", "g");
    const regExpComma = new RegExp("%2C", "g");
    const regExpQuestion = new RegExp("%3F", "g");

    const pdfText = pdfTextArr
      .join()
      .replace(regExpClear, "")
      .replace(regExpSpace, " ")
      .replace(regExpComma, ",")
      .replace(regExpQuestion, "?");

    expect(pdfText).toContain("Lorem ipsum dolor");
    expect(pdfContents.Pages.length).toEqual(1);
  });

  const config = {
    paths: {
      actualPdfRootFolder: process.cwd() + "/data/actualPdfs",
      baselinePdfRootFolder: process.cwd() + "/data/baselinePdfs",
      actualPngRootFolder: process.cwd() + "/data/actualPngs",
      baselinePngRootFolder: process.cwd() + "/data/baselinePngs",
      diffPngRootFolder: process.cwd() + "/data/diffPngs",
    },
    settings: {
      imageEngine: "graphicsMagick",
      density: 100,
      quality: 70,
      tolerance: 0,
      threshold: 0.05,
      cleanPngPaths: false,
      matchPageCount: true,
    },
  };

  test("Comapre pdf test", async () => {
    const masks = [
      { pageIndex: 1, coordinates: { x0: 35, y0: 70, x1: 145, y1: 95 } },
      { pageIndex: 1, coordinates: { x0: 185, y0: 70, x1: 285, y1: 95 } },
    ];
    const comparisionResult = await new ComparePdf(config)
      .actualPdfFile("LoremIpsum.pdf")
      .baselinePdfFile("LoremIpsum.pdf")
      .addMask(masks)
      .compare();
    expect(comparisionResult.status).toEqual("passed");
  });

  test.skip("Generate pdf", async ({ page }) => {
    await page.goto("https://en.wikipedia.org/wiki/PDF");
    await page.pdf({ path: "page.pdf" });
  });
});
