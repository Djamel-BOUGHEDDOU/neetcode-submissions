class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let rowsSet = new Map<number, Set<string>>();
        let colsSet = new Map<number, Set<string>>();
        let gridSet = new Map<string, Set<string>>();

        let boardSize = board.length;

        for (let i = 0; i < boardSize; i++) {
            rowsSet.set(i, new Set<string>());
            colsSet.set(i, new Set<string>());
        }

        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                gridSet.set(`${r}-${c}`, new Set<string>());
            }
        }

        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                const val = board[i][j];

                if (val === ".") continue;

                if (rowsSet.get(i)!.has(val)) return false;
                if (colsSet.get(j)!.has(val)) return false;

                let index: string =
                    Math.trunc(i / 3).toString() + "-" + Math.trunc(j / 3).toString();

                if (gridSet.get(index)!.has(val)) return false;

                rowsSet.get(i)!.add(val);
                colsSet.get(j)!.add(val);
                gridSet.get(index)!.add(val);
            }
        }

        return true;
    }
}
