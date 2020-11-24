import { Module } from '@nestjs/common';
import { MarkdownPdfService } from './markdown-pdf.service';
import { MarkdownPdfController } from './markdown-pdf.controller';

@Module({
  providers: [MarkdownPdfService],
  controllers: [MarkdownPdfController]
})
export class MarkdownPdfModule {}
