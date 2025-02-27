var isValidSudoku = function(board) {
    let rows = new Array(9).fill(null).map(() => new Set());
    let cols = new Array(9).fill(null).map(() => new Set());
    let boxes = new Array(9).fill(null).map(() => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let num = board[r][c];
            if (num === '.') continue;

            let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            if (rows[r].has(num) || cols[c].has(num) || boxes[boxIndex].has(num)) {
                return false;
            }

            rows[r].add(num);
            cols[c].add(num);
            boxes[boxIndex].add(num);
        }
    }

    return true;
};



/* 
Time Complexity: O(9 ^2)=O(81)=O(1)
Space Complexity: O(9)=O(1) 
*/