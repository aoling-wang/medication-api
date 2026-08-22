import { Injectable } from '@nestjs/common';
import { Medication } from './interfaces/medication.interface';

@Injectable()
export class MedicationsService {
    private medications: Medication[] = [
        {
            "id": 1,
            "name": "Acetaminophen",
            "dosage": ["325 mg", "500 mg", "650 mg"],
            "routes": ["oral"],
            "role": "Pain reliever and fever reducer",
            "category": "Analgesic / Antipyretic",
            "formula": "C8H9NO2",
            "interactions": [
                "Alcohol",
                "Warfarin",
                "Other acetaminophen-containing medications"
            ]
        },
        {
            "id": 2,
            "name": "Ibuprofen",
            "dosage": ["200 mg", "300 mg", "600 mg", "800 mg"],
            "routes": ["oral"],
            "role": "Pain reliever, fever reducer, and anti-inflammatory",
            "category": "NSAID",
            "formula": "C13H18O2",
            "interactions": [
                "Aspirin",
                "Warfarin and other anticoagulants",
                "ACE inhibitors",
                "Lithium",
                "Other NSAIDs"
            ]
        },
        {
            "id": 3,
            "name": "Diphenhydramine",
            "dosage": ["25 mg", "50 mg"],
            "routes": ["oral"],
            "role": "Relieves allergy symptoms and provides temporary sleep aid effects",
            "category": "Antihistamine",
            "formula": "C17H21NO",
            "interactions": [
                "Alcohol",
                "Other sedatives",
                "Opioids",
                "MAO inhibitors",
                "Other antihistamines"
            ]
        },
        {
            "id": 4,
            "name": "Loperamide",
            "dosage": ["2 mg"],
            "routes": ["oral"],
            "role": "Reduces the frequency of diarrhea",
            "category": "Antidiarrheal",
            "formula": "C29H33ClN2O2",
            "interactions": [
                "Quinidine",
                "Ritonavir",
                "Gemfibrozil",
                "Other medications that affect heart rhythm"
            ]
        }
    ]

    findAll(): Medication[] {
        return this.medications;
    }

    findOne(id: number): Medication | undefined {
        return this.medications.find(
            medication => medication.id === id,
        );
    }

    create(medication: Omit<Medication, 'id'>): Medication {
        const newMedication: Medication = {
            id: this.medications.length + 1,
            ...medication,
        };

        this.medications.push(newMedication);

        return newMedication;
    }

    remove(id: number): boolean {
        const originalLength = this.medications.length;

        this.medications = this.medications.filter(
            medication => medication.id !== id,
        );

        return this.medications.length < originalLength;
    }
}