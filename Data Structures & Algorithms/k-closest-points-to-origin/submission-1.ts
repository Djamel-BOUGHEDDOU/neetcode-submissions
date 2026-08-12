class Solution {
    kClosest(points: number[][], k: number): number[][] {
        const maxHeap = new MaxHeap<number[]>(
            [],
            ([x1, y1], [x2, y2]) => x1 ** 2 + y1 ** 2 - (x2 ** 2 + y2 ** 2),
            k,
        );

        for (const point of points) {
            maxHeap.insert(point);
        }

        return maxHeap.getAll();
    }
}

class MaxHeap<T> {
    private heap: T[] = [];

    constructor(
        nums: T[] = [],
        private compare: (a: T, b: T) => number,
        private limit?: number,
    ) {
        this.heap = [...nums];

        if (this.limit !== undefined && this.heap.length > this.limit) {
            this.heap = this.heap.slice(0, this.limit);
        }

        this.buildHeap();
    }

    size(): number {
        return this.heap.length;
    }

    getAll(): T[] {
        return this.heap;
    }

    root(): T | undefined {
        return this.heap[0];
    }

    insert(value: T): void {
        // Heap is full
        if (this.limit !== undefined && this.heap.length >= this.limit) {
            // New value is not better than the current worst value
            if (this.compare(value, this.heap[0]) >= 0) {
                return;
            }

            // Remove the current worst value
            this.extractRoot();
        }

        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    extractRoot(): T | undefined {
        if (this.heap.length === 0) {
            return undefined;
        }

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

            if (this.compare(this.heap[parent], this.heap[index]) >= 0) {
                break;
            }

            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    private bubbleDown(index: number): void {
        while (true) {
            let largest = index;

            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left < this.heap.length && this.compare(this.heap[left], this.heap[largest]) > 0) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.compare(this.heap[right], this.heap[largest]) > 0
            ) {
                largest = right;
            }

            if (largest === index) {
                break;
            }

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];

            index = largest;
        }
    }
}
