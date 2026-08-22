import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicationsModule } from './medications/medications.module';

@Module({
  imports: [MedicationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
