/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    for (let asteroid of asteroids) {
        let destroyed = false;

        while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
            let top = stack[stack.length - 1];

            if (Math.abs(top) > Math.abs(asteroid)) {
                destroyed = true;
                break;
            } else if (Math.abs(top) === Math.abs(asteroid)) {
                stack.pop();
                destroyed = true;
                break;
            } else {
                stack.pop();
            }
        }

        if (!destroyed) stack.push(asteroid);
    }

    return stack;
};



/* 
The idea is to iterate through the asteroids array and use the stack to handle collisions efficiently.

Optimized Approach (Stack)
Iterate through each asteroid.

If the asteroid is moving right (> 0), push it onto the stack.

If the asteroid is moving left (< 0):

Compare it with the top of the stack (if the top is moving right).

If the right-moving asteroid is larger, continue.

If the left-moving asteroid is larger, pop the right-moving asteroid.

If they are the same size, both explode.

Continue this until all collisions are resolved.

Time Complexity
O(n) where n is the number of asteroids (each asteroid is pushed and popped at most once).





Space Complexity (SC) Analysis
The space complexity of this solution is O(n) in the worst case.

Best Case: O(1)
If there are no collisions (e.g., all asteroids move in the same direction: [1, 2, 3] or [-3, -2, -1]), we just store them in the stack.

The stack remains of size n, but since there are no extra operations, it can be considered O(1) in terms of additional space usage.

Worst Case: O(n)
If all asteroids survive (e.g., [-2, -1, 1, 2]), we store all n asteroids in the stack.

So, in the worst case, we use O(n) space.

Thus, Space Complexity = O(n) in the worst case, but it's optimal considering the constraints.

*/