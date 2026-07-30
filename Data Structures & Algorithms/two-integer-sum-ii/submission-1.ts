export class Solution {
  twoSum(numbers: number[], target: number): number[] | undefined {
    const map = new Map<number, number[]>();

    for (let i = 0; i < numbers.length; i++) {
      const value = numbers[i];
      if (!map.has(value)) {
        map.set(value, []);
      }
      map.get(value)!.push(i);
    }

    for (let i = 0; i < numbers.length; i++) {
      const diff = target - numbers[i];
      if (map.has(diff)) {
        const indices = map.get(diff)!;
        for (const idx of indices) {
          if (idx !== i) {
            return [i + 1, idx + 1];
          }
        }
      }
    }
  }
}