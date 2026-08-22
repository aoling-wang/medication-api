import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { MedicationsService } from './medications.service';
import type { Medication } from './interfaces/medication.interface';

@Controller('medications')
export class MedicationsController {
    constructor(
        private readonly medicationsService: MedicationsService,
    ) {}

    @Get()
    findAll(): Medication[] {
        return this.medicationsService.findAll();
    }

    @Get(':id')
    findOne(
        @Param('id', ParseIntPipe) id: number,
    ): Medication | undefined {
        return this.medicationsService.findOne(id);
    }

    @Post()
    create(
        @Body() medication: Omit<Medication, 'id'>,
    ): Medication {
        return this.medicationsService.create(medication);
    }

    @Delete(':id')
    remove(
        @Param('id', ParseIntPipe) id: number,
    ): { deleted: boolean } {
        return {
        deleted: this.medicationsService.remove(id),
        };
    }
}