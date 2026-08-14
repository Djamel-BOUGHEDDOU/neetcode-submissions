class Solution {
    leastInterval(tasks: string[], n: number): number {
        const freq = new Map<string, number>();

        for (const task of tasks) {
            freq.set(task, (freq.get(task) ?? 0) + 1);
        }

        const maxHeap = new MaxHeap<number>((a, b) => a - b);

        for (const count of freq.values()) {
            maxHeap.insert(count);
        }

        let time = 0;

        while (maxHeap.size() > 0) {
            const tasksInCycle: number[] = [];

            for (let i = 0; i <= n; i++) {
                if (maxHeap.size() === 0) break;

                const count = maxHeap.extractRoot();
                tasksInCycle.push(count);
            }

            for (const count of tasksInCycle) {
                if (count > 1) {
                    maxHeap.insert(count - 1);
                }
            }

            if (maxHeap.size() > 0) {
                time += n + 1;
            } else {
                time += tasksInCycle.length;
            }
        }

        return time;
    }
}

class MaxHeap<T> {
    private heap: T[] = [];

    constructor(private comparator: (a: T, b: T) => number) {}

    size(): number {
        return this.heap.length;
    }

    insert(value: T): void {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    extractRoot(): T {
        if (this.heap.length === 0) {
            throw new Error("Heap is empty");
        }

        const root = this.heap[0];
        const last = this.heap.pop()!;

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }

        return root;
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.comparator(this.heap[index], this.heap[parent]) <= 0) {
                break;
            }

            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];

            index = parent;
        }
    }

    private bubbleDown(index: number): void {
        const n = this.heap.length;

        while (true) {
            let largest = index;

            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left < n && this.comparator(this.heap[left], this.heap[largest]) > 0) {
                largest = left;
            }

            if (right < n && this.comparator(this.heap[right], this.heap[largest]) > 0) {
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
