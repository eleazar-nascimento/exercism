
export const allergies = [
    'eggs',
    'peanuts',
    'shellfish',
    'strawberries',
    'tomatoes',
    'chocolate',
    'pollen',
    'cats',
  ]

interface IAllergies {
  list: () => Array<String>
  allergicTo: (allergen: unknown) => unknown
}

export class Allergies implements IAllergies {
    constructor(private allergenIndex: number) {
      this.allergenIndex = allergenIndex
    }

    list(): Array<String> {
      return allergies.filter((allergy, index) => this.allergenIndex & Math.pow(2, index))
    }

    allergicTo(allergen: unknown): unknown {
      return this.list().some(allergy => allergy === allergen)
    }
}