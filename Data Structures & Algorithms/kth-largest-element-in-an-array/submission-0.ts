class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        let minHeap = new MinHeap<number>((a, b) => a - b);

        for(let num of nums) {
            if(minHeap.size() === k) {
                if(minHeap.peek() < num) {
                    minHeap.extractMin();
                } else {
                    continue;
                }
            }
            minHeap.insert(num);
        }
        return minHeap.peek();
    }
}

export class MinHeap<T> {
    private heap: T[];

    constructor(
        private readonly compare: (a: T, b: T) => number,
        items: T[] = [],
    ) {
        this.heap = [...items];
        this.buildHeap();
    }

    size(): number {
        return this.heap.length;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    peek(): T {
        if (this.isEmpty()) {
            throw new Error("Heap is empty");
        }

        return this.heap[0];
    }

    insert(value: T): void {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin(): T {
        if (this.isEmpty()) {
            throw new Error("Heap is empty");
        }

        const min = this.heap[0];
        const last = this.heap.pop()!;

        if (!this.isEmpty()) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }

        return min;
    }

    private buildHeap(): void {
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.bubbleDown(i);
        }
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.compare(this.heap[index], this.heap[parent]) >= 0) {
                break;
            }

            this.swap(index, parent);
            index = parent;
        }
    }

    private bubbleDown(index: number): void {
        const n = this.heap.length;

        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            let smallest = index;

            if (left < n && this.compare(this.heap[left], this.heap[smallest]) < 0) {
                smallest = left;
            }

            if (right < n && this.compare(this.heap[right], this.heap[smallest]) < 0) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            this.swap(index, smallest);
            index = smallest;
        }
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}
