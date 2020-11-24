import { Injectable } from '@nestjs/common';
const markdownpdf = require("markdown-pdf")
const fs = require('fs');


@Injectable()
export class MarkdownPdfService {



    /**
     * Create PDF file from Markdown text and save file in 'public/pdf' folder 
     * @param text Markdown text
     * @param fileName name of file
     * return the path of file
     */
    markdownToPdf(text, fileName) {
        return new Promise((resolve, reject) => {
            markdownpdf()
            .from.string(text)
            .to.buffer({}, (error, buf) => {
                if (error) {
                    reject(error)
                    return;
                }
                fs.writeFile(`./public/pdf/${fileName}.pdf`, buf,(err)=>{
                    if(err){
                        reject(err)
                        return
                    }
                    resolve(`http://localhost:3000/pdf/${fileName}.pdf`)
                })
            })

        })
    }
}
