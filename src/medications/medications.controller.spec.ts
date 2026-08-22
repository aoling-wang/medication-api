import { Test, TestingModule } from '@nestjs/testing';
import { MedicationsController } from './medications.controller';
import { MedicationsService } from './medications.service';

describe('MedicationsController', () => {
  let controller: MedicationsController;
  let service: MedicationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicationsController],
      providers: [MedicationsService],
    }).compile();

    controller = module.get<MedicationsController>(MedicationsController);
    service = module.get<MedicationsService>(MedicationsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    it('should return a single user object', async () => {
      const result = await controller.findOne(1);
      
      expect(result).toEqual({
        "id": 1,
        "name": "Acetaminophen",
        "dosage": [
          "325 mg",
          "500 mg",
          "650 mg"
        ],
        "routes": [
          "oral"
        ],
        "role": "Pain reliever and fever reducer",
        "category": "Analgesic / Antipyretic",
        "formula": "C8H9NO2",
        "interactions": [
          "Alcohol",
          "Warfarin",
          "Other acetaminophen-containing medications"
        ]
      });
    });

    it('should call MedicationsService.findOne with the correct arguments', async () => {
      await controller.findOne(1);
      
      expect(service.findOne).toHaveBeenCalledWith(1);
    });
  });
});
