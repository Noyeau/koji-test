import { Test, TestingModule } from '@nestjs/testing';
import { MarkdownPdfController } from './markdown-pdf.controller';

describe('MarkdownPdfController', () => {
  let controller: MarkdownPdfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarkdownPdfController],
    }).compile();

    controller = module.get<MarkdownPdfController>(MarkdownPdfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
