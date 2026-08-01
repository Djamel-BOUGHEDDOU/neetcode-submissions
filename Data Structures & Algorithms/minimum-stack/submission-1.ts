class MinStack {
    constructor(
        private stack: Array<number> = [],
        private min: number = Infinity,
    ) {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.min = Math.min(this.min, val);
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.min = Math.min(...this.stack);
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min;
    }
}
