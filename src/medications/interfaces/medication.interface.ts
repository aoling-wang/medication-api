export interface Medication {
    id: number;
    name: string;
    dosage: string[];
    routes: string[];
    role: string;
    category: string;
    formula: string;
    interactions: string[];
}