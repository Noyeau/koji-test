import { Controller, Body, Post } from '@nestjs/common';
import { MarkdownPdfService } from './markdown-pdf.service';

@Controller('markdown-pdf')
export class MarkdownPdfController {

    constructor(private markdownPdfService: MarkdownPdfService) { }

    /**
     * Convert markdown to PDF.
     * Markdown must be converted with encodeURIComponent in JSON Object
     * @param body 
     */
    @Post()
    async markdownToPdf(@Body() body: { text: string, fileName: string }) {
        console.log(body)
        let mdTxt = decodeURIComponent(body.text)
        let fileName = body.fileName
        if (!fileName) {
            fileName = '_' + Math.random().toString(36).substr(2, 9)
        }
        return this.markdownPdfService.markdownToPdf(mdTxt, fileName)
    }

}
