class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    heap: MinHeap<number> = new MinHeap<number>();
    maxHeapSize: number;
    constructor(k: number, nums: number[]) {
        this.maxHeapSize = k;
        for (let num of nums) {
            if (this.heap.size() < k) {
                this.heap.insert(num);
            } else {
                const kthElement = this.heap.peek()!;
                if (kthElement >= num) continue;

                this.heap.extractMin();
                this.heap.insert(num);
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        if (this.heap.size() < this.maxHeapSize) {
            this.heap.insert(val);
            return this.heap.peek()!;
        } else {
            if (this.heap.peek()! >= val) return this.heap.peek()!;

            this.heap.extractMin();
            this.heap.insert(val);
            return this.heap.peek()!;
        }
    }
}

type Comparator<T> = (a: T, b: T) => number;

class MinHeap<T> {
    private heap: T[] = [];
    private compare: Comparator<T>;

    constructor(comparator: Comparator<T> = (a, b) => (a < b ? -1 : a > b ? 1 : 0)) {
        this.compare = comparator;
    }

    public insert(value: T): void {
        this.heap.push(value);
        this.heapifyUp();
    }

    public extractMin(): T | undefined {
        if (this.isEmpty()) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown();
        return min;
    }

    public peek(): T | undefined {
        return this.heap[0];
    }

    public size(): number {
        return this.heap.length;
    }

    public isEmpty(): boolean {
        return this.heap.length === 0;
    }

    private getParentIndex(i: number): number {
        return Math.floor((i - 1) / 2);
    }

    private getLeftChildIndex(i: number): number {
        return 2 * i + 1;
    }
    private getRightChildIndex(i: number): number {
        return 2 * i + 2;
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    private heapifyUp(): void {
        let index = this.heap.length - 1;
        while (
            index > 0 &&
            this.compare(this.heap[index], this.heap[this.getParentIndex(index)]) < 0
        ) {
            const parentIndex = this.getParentIndex(index);
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    private heapifyDown(): void {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);

            if (
                rightChildIndex < this.heap.length &&
                this.compare(this.heap[rightChildIndex], this.heap[smallerChildIndex]) < 0
            ) {
                smallerChildIndex = rightChildIndex;
            }

            if (this.compare(this.heap[index], this.heap[smallerChildIndex]) <= 0) {
                break;
            }

            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }
}
