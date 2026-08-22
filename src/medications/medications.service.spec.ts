import { Test, TestingModule } from '@nestjs/testing';
import { MedicationsService } from './medications.service';

describe('MedicationsService', () => {
  let service: MedicationsService;

  beforeEach(async () => {
    const module: TestingModule =
      await Test.createTestingModule({
        providers: [MedicationsService],
      }).compile();

    service = module.get<MedicationsService>(
      MedicationsService,
    );
  });

  it('should return medications', () => {
    const medications = service.findAll();

    expect(medications.length).toBeGreaterThan(0);
  });

  it('should find a medication by id', () => {
    const medication = service.findOne(1);

    expect(medication).toBeDefined();
    expect(medication?.name).toBe('Acetaminophen');
  });
});