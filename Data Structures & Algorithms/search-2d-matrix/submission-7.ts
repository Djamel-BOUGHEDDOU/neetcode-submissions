export class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let left = 0;
        let right = matrix.length - 1;
        let lastElementIdx = matrix[0].length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (matrix[mid][lastElementIdx] < target) {
                left = mid + 1;
            } else if (matrix[mid][lastElementIdx] > target) {
                right = mid - 1;
            } else return true;
        }
        if (left > matrix.length - 1) return false;
        const row = matrix[left];
        left = 0;
        right = row.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (row[mid] < target) {
                left = mid + 1;
            } else if (row[mid] > target) {
                right = mid - 1;
            } else return true;
        }

        return false;
    }
}
