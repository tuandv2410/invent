import { Module } from '@nestjs/common';
import { CogsController } from './cogs.controller';
import { CogsService } from './cogs.service';

@Module({
  controllers: [CogsController],
  providers: [CogsService]
})
export class CogsModule {}
