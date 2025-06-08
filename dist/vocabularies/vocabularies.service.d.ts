import { Model } from 'mongoose';
import { Vocabulary } from '../common/schemas/vocabulary.schema';
import { CreateVocabularyDto } from '../common/dtos/create-vocabulary.dto';
export declare class VocabulariesService {
    private vocabularyModel;
    constructor(vocabularyModel: Model<Vocabulary>);
    create(dto: CreateVocabularyDto): Promise<Vocabulary>;
    findAll(): Promise<Vocabulary[]>;
}
