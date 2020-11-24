import { Test, TestingModule } from '@nestjs/testing';
import { MarkdownPdfService } from './markdown-pdf.service';

describe('MarkdownPdfService', () => {
  let service: MarkdownPdfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarkdownPdfService],
    }).compile();

    service = module.get<MarkdownPdfService>(MarkdownPdfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
