// Zluri DSA: 
/* Implement the following functionalities of the spreadsheet
Spreadsheets have cells arranged like A1, A2, A3…., B1, B2, B3


As a user, I should be able to assign an integer value to a cell [assignValue(“A1”,5)]
As a user, I should be able to assign a formula (SUM) to a cell [assignValue(“C2”,“SUM”,[“A1”,”B1”,”C1”])]
As a user, I should be able to print the spreadsheet.


Constraint 
1. It’s a 26 X 26 matrix
2. Rows are denoted by numbers 
3. Columns are denoted by letters

Example:
assignValue(“C2”,“SUM”,[“A1”,”B1”,”C1”])
assignValue(“A1”,5) 
assignValue(“B1”,1)
printSpreadsheet()
5 1 0 0 0 0 0 0…(26 columns) 
0 0 6 0 0 0 0 0
0 0 0 0 0 0 0 0
…26 rows
assignValue(“C2”, “SUM”, [“A1”, “B1”])
assignValue(“A1”, 1)
printSpreadsheet()
1 1 0 0 0 0 0 0…(26 columns) 
0 0 2 0 0 0 0 0
0 0 0 0 0 0 0 0
…26 rows

Matrix[0][0] 


----------------------
This problem falls under Spreadsheet Calculation and can be classified as a Graph-based Dependency Problem.

DSA Classification:
Data Structure Used:

2D Matrix (Grid/Table Representation): The spreadsheet is stored as a 2D matrix (this.matrix).

Hash Map (Dependency Graph Representation): The formulas and dependencies between cells are stored in a Map (this.formulas).

Algorithmic Concepts Involved:

Graph (Directed Acyclic Graph - DAG):

Each formula cell depends on other cells, forming a dependency graph.

When a cell value is updated, all dependent formula cells need to be recalculated (similar to topological sorting).

Dynamic Programming / Memoization:

Recalculating formula cells efficiently requires updating only affected cells rather than recomputing everything.

Depth-First Search (DFS) / Recursion (Implicit in formula updates):

When a cell value changes, all dependent formula cells are recursively updated.

DSA Problem Type:
This problem is similar to Excel-like Spreadsheet Formula Calculation, which is a 
Topological Sorting (Graph Dependency) Problem.

Real-World Analogy:
Similar to an Excel Sheet with Formulas, where some cells contain values and others 
contain computed results based on referenced cells.

Used in Dependency Graphs, such as:

Build systems (e.g., Webpack tree-shaking)

Reactive programming (e.g., React state updates)

Project scheduling (e.g., task dependencies in Gantt charts)
---------------------


*/




class Spreadsheet {
    constructor() {
        this.size = 26;
        this.matrix = Array.from({ length: this.size }, () => Array(this.size).fill(0));
        this.formulas = new Map();
    }

    getCellPosition(cell) {
        const col = cell.charCodeAt(0) - 'A'.charCodeAt(0);
        const row = parseInt(cell.slice(1)) - 1;
        return { row, col };
    }

    assignValue(cell, valueOrFormula, references = []) {
        const { row, col } = this.getCellPosition(cell);
        
        if (valueOrFormula === "SUM") {
            this.formulas.set(cell, references);
            this.updateFormulaCell(cell);
        } else {
            this.matrix[row][col] = valueOrFormula;
            this.updateDependentCells(cell);
        }
    }

    updateFormulaCell(cell) {
        const { row, col } = this.getCellPosition(cell);
        const references = this.formulas.get(cell) || [];
        this.matrix[row][col] = references.reduce((sum, refCell) => {
            const { row: r, col: c } = this.getCellPosition(refCell);
            return sum + this.matrix[r][c];
        }, 0);
    }

    updateDependentCells(updatedCell) {
        for (const [cell, references] of this.formulas.entries()) {
            if (references.includes(updatedCell)) {
                this.updateFormulaCell(cell);
            }
        }
    }

    printSpreadsheet() {
        this.matrix.forEach(row => console.log(row.join(' ')));
    }
}

// Example usage
const sheet = new Spreadsheet();
// sheet.assignValue("C2", "SUM", ["A1", "B1", "C1"]);
// sheet.assignValue("A1", 5);
// sheet.assignValue("B1", 1);
// sheet.printSpreadsheet();
// console.log("----------------");
// sheet.assignValue("C2", "SUM", ["A1", "B1"]);
// sheet.assignValue("A1", 1);
// sheet.printSpreadsheet();

console.log(sheet.getCellPosition("A2"));




/* 

 **Time Complexity (TC) & Space Complexity (SC) Analysis**  
Let’s analyze the **time complexity** and **space complexity** 
of your spreadsheet implementation based on different operations.

---

 **1. Time Complexity Analysis (TC)**

 **(A) Assigning a Direct Value** (`assignValue(cell, value)`)  
- Directly updates the matrix at `O(1)`.
- Calls `updateDependentCells(cell)`, which can traverse all formula dependencies.

 **Best Case: `O(1)`**  
- If there are no dependent formula cells, only one cell is updated.

 **Worst Case: `O(N^2)`**  
- If the spreadsheet is fully dependent (worst-case DAG scenario), each update can trigger updates in multiple formula cells.
- In the worst case, **all** `N × N` cells have dependencies, leading to `O(N^2)` traversal.

---

 **(B) Assigning a Formula (SUM Calculation)** (`assignValue(cell, "SUM", references)`)  
- Stores formula references in `O(1)`.
- Calls `updateFormulaCell(cell)`, which sums the referenced cells.

 **Best Case: `O(K)`**  
- If the formula references **K** cells, summing them takes `O(K)`.

 **Worst Case: `O(N^2)`**  
- If the formula references **all** `N × N` cells, the worst case is `O(N^2)`.

---

 **(C) Updating Dependent Formula Cells** (`updateDependentCells(updatedCell)`)  
- Iterates through the **formula map** and updates any formula cells that reference the modified cell.

 **Best Case: `O(1)`**  
- If no formula depends on the updated cell.

 **Worst Case: `O(N^2)`**  
- If all `N × N` cells depend on each other, leading to a full matrix traversal.

---

 **(D) Printing the Spreadsheet** (`printSpreadsheet()`)  
- Prints all `N × N` elements.

 **Time Complexity: `O(N^2)`**

---

 **Final Time Complexity Summary**
| Operation | Best Case | Worst Case |
|-----------|------------|------------|
| Assign Value | `O(1)` | `O(N^2)` |
| Assign Formula (SUM) | `O(K)` | `O(N^2)` |
| Update Dependent Cells | `O(1)` | `O(N^2)` |
| Print Spreadsheet | `O(N^2)` | `O(N^2)` |

👉 **Worst-case time complexity**: **`O(N^2)`** (when the entire grid has dependencies).  
👉 **Best-case time complexity**: **`O(1)`** (for isolated cell updates).

---

 **2. Space Complexity Analysis (SC)**

 **(A) Spreadsheet Storage (`this.matrix`)**
- Uses a **2D array of size `N × N`**.
- **Space Complexity: `O(N^2)`**.

 **(B) Formula Storage (`this.formulas` Map)**
- Stores formulas as key-value pairs.
- In the worst case, all `N × N` cells have formulas referencing other cells.
- **Space Complexity: `O(N^2)`** (storing references for every cell).

---

 **Final Space Complexity Summary**
| Component | Space Complexity |
|-----------|-----------------|
| Matrix Storage | `O(N^2)` |
| Formula Storage | `O(N^2)` |
| Total SC | **`O(N^2)`** |

👉 **Overall Space Complexity: `O(N^2)`**, due to matrix and formula dependencies.

---

 **Final Verdict**
- **Time Complexity:** **Best: `O(1)`, Worst: `O(N^2)`**.
- **Space Complexity:** **`O(N^2)`**.

This is efficient for **small spreadsheets**, but for large `N`, 
optimizations (like lazy evaluation, dependency tracking, or memoization) would help.


*/