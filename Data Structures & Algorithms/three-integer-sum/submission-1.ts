class Solution {
  threeSum(nums: number[]): number[][] {
    const sol: number[][] = [];
    const seen = new Set<string>();

    for (let i = 0; i < nums.length - 1; i++) {
      const map = new Map<number, number>();
      for (let j = i + 1; j < nums.length; j++) {
        const target = (nums[i] + nums[j]) * -1;
        if (map.has(target)) {
          const triplet = [target, nums[i], nums[j]].sort((a, b) => a - b);
          const key = triplet.join(",");
          if (!seen.has(key)) {
            seen.add(key);
            sol.push(triplet);
          }
        }
        map.set(nums[j], j);
      }
    }

    return sol;
  }
}