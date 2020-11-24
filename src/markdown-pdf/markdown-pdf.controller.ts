import { Controller, Body, Post } from '@nestjs/common';
import { MarkdownPdfService } from './markdown-pdf.service';

@Controller('markdown-pdf')
export class MarkdownPdfController {

    constructor(private markdownPdfService: MarkdownPdfService) { }

    @Post()
    async markdownToPdf(@Body() body: { text: string, fileName: string }) {
        console.log(body)
        if (!body.fileName) {
            body.fileName = '_' + Math.random().toString(36).substr(2, 9)
        }
        return this.markdownPdfService.markdownToPdf(body.text, body.fileName)
    }

}
