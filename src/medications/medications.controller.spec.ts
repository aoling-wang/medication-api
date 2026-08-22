import { Test, TestingModule } from '@nestjs/testing';
import { MedicationsController } from './medications.controller';
import { MedicationsService } from './medications.service';

describe('MedicationsController', () => {
  let controller: MedicationsController;
  let service: MedicationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicationsController],
      providers: [
        {
          provide: MedicationsService,
          useValue: {
            findOne: jest.fn().mockResolvedValue(1), 
          },
        },
      ],
    }).compile();

    controller = module.get<MedicationsController>(MedicationsController);
    service = module.get<MedicationsService>(MedicationsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    it('should return a single medication object', async () => {
      const result = await controller.findOne(1);
      
      expect(result).toEqual(1);
    });

    it('should call MedicationsService.findOne with the correct arguments', async () => {
      await controller.findOne(1);
      
      expect(service.findOne).toHaveBeenCalledWith(1);
    });
  });
});
