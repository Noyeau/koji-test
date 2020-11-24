import { Injectable } from '@nestjs/common';

@Injectable()
export class MarkdownPdfService {

    /**
     * Create PDF file from Markdown text and save file in 'public/pdf' folder 
     * @param text Markdown text
     * @param fileName name of file
     * 
     * return the path of file
     */
    markdownToPdf(text, fileName) {
        return new Promise((resolve, reject) => {


        })
    }
}
