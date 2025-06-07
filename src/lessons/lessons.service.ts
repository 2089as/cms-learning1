import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { Lesson } from '../common/schemas/lesson.schema';
import { CreateLessonDto } from '../common/dtos/create-lesson.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class LessonsService {
  constructor(
    @InjectModel(Lesson.name) private lessonModel: Model<Lesson>,
    private readonly httpService: HttpService,
  ) {}

  async create(dto: CreateLessonDto): Promise<Lesson> {
    if (!dto.level_id || !dto.title || dto.day === undefined || dto.day === null) {
      throw new BadRequestException('level_id, title, and day are required fields');
    }

    let embedVideoUrl = dto.video_url;
    if (dto.video_url) {
      const isEmbeddable = await this.checkVideoEmbeddable(dto.video_url);
      if (!isEmbeddable) {
        throw new BadRequestException('Video is not embeddable');
      }
      // Chuyển đổi URL sang định dạng embed
      const videoId = this.extractVideoId(dto.video_url);
      if (videoId) {
        embedVideoUrl = `https://www.youtube.com/embed/${videoId}`;
      }
    }

    const lesson = new this.lessonModel({
      ...dto,
      video_url: embedVideoUrl, // Lưu URL đã chuyển đổi
      day: Number(dto.day),
    });
    return lesson.save();
  }

  async findAll(levelId?: string): Promise<Lesson[]> {
    const query: any = {};
    if (levelId) {
      query.level_id = levelId;
    }

    const lessons = await this.lessonModel.find(query).exec();

    return lessons.map((lesson: Document & Lesson) => {
      const lessonObj = lesson.toObject();
      let dayValue: number | undefined;
      if (lessonObj.day !== undefined && lessonObj.day !== null) {
        if (typeof lessonObj.day === 'object' && '$numberInt' in lessonObj.day) {
          dayValue = parseInt((lessonObj.day as any).$numberInt || '0');
        } else {
          dayValue = Number(lessonObj.day);
        }
      }

      return {
        ...lessonObj,
        day: dayValue,
        createdAt: lessonObj.createdAt ? new Date(lessonObj.createdAt).toISOString() : undefined,
        updatedAt: lessonObj.updatedAt ? new Date(lessonObj.updatedAt).toISOString() : undefined,
      };
    });
  }

  private async checkVideoEmbeddable(videoUrl: string): Promise<boolean> {
    const videoId = this.extractVideoId(videoUrl);
    if (!videoId) {
      throw new BadRequestException('Invalid YouTube URL');
    }

    const apiKey = process.env.YOUTUBE_API_KEY;
    if (!apiKey) {
      throw new BadRequestException('YouTube API key is not configured');
    }

    try {
      const url = `https://www.googleapis.com/youtube/v3/videos?part=status&id=${videoId}&key=${apiKey}`;
      const response = await firstValueFrom(this.httpService.get(url));
      const data = response.data;

      if (data.items && data.items.length > 0) {
        return data.items[0].status.embeddable;
      }
      throw new BadRequestException('Video not found');
    } catch (error) {
      throw new BadRequestException(`Error checking video embeddable: ${error.message}`);
    }
  }

  private extractVideoId(url: string): string | null {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/);
    return match ? match[1] : null;
  }
}