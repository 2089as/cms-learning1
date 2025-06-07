import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VocabulariesController } from './vocabularies.controller';
import { VocabulariesService } from './vocabularies.service';
import { Vocabulary, VocabularySchema } from '../common/schemas/vocabulary.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Vocabulary.name, schema: VocabularySchema }])],
  controllers: [VocabulariesController],
  providers: [VocabulariesService],
})
export class VocabulariesModule {}