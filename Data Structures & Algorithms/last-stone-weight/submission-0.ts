class Solution {
    lastStoneWeight(stones: number[]): number {
        const heap = new MaxHeap(stones);

        while (heap.size() > 1) {
            const y = heap.extractRoot();
            const x = heap.extractRoot();

            if (y !== x) {
                heap.insert(y - x);
            }
        }

        return heap.size() ? heap.root() : 0;
    }
}

class MaxHeap {
    private heap: number[] = [];

    constructor(nums: number[] = []) {
        this.heap = nums;
        this.buildHeap();
    }

    size(): number {
        return this.heap.length;
    }

    root(): number {
        return this.heap[0];
    }

    insert(value: number): void {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    extractRoot(): number {
        const max = this.heap[0];
        const last = this.heap.pop()!;

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }

        return max;
    }

    private buildHeap(): void {
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.bubbleDown(i);
        }
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] >= this.heap[index]) break;

            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    private bubbleDown(index: number): void {
        while (true) {
            let largest = index;

            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];

            index = largest;
        }
    }
}
