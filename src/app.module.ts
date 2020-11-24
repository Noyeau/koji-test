import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarkdownPdfModule } from './markdown-pdf/markdown-pdf.module';

@Module({
  imports: [MarkdownPdfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
