import { VocabulariesService } from './vocabularies.service';
import { CreateVocabularyDto } from '../common/dtos/create-vocabulary.dto';
import { Vocabulary } from '../common/schemas/vocabulary.schema';
export declare class VocabulariesController {
    private readonly vocabulariesService;
    constructor(vocabulariesService: VocabulariesService);
    create(dto: CreateVocabularyDto): Promise<Vocabulary>;
    findAll(): Promise<Vocabulary[]>;
}
