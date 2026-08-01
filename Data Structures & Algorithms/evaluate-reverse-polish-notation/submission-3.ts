class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack = [];
        let operators = new Set(["+", "-", "*", "/"]);
        for (let char of tokens) {
            if (operators.has(char)) {
                const rValue = Number(stack.pop()!);
                const lValue = Number(stack.pop()!);
                let result = Infinity;
                switch (char) {
                    case "+":
                        result = lValue + rValue;
                        break;
                    case "-":
                        result = lValue - rValue;
                        break;
                    case "*":
                        result = lValue * rValue;
                        break;
                    case "/":
                        result = Math.trunc(lValue / rValue);
                        break;
                }
                stack.push(result);
            } else {
                stack.push(char);
            }
        }
        return Number(stack.pop());
    }
}
