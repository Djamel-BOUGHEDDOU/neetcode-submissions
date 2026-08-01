class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s: string, t: string): string {
    let tFreq = new Map<string, number>();
    for (let char of t) {
      tFreq.set(char, (tFreq.get(char) ?? 0) + 1);
    }

    // Per-char FIFO of positions, capped at the required count for that char.
    let posQueue = new Map<string, number[]>();
    for (let char of tFreq.keys()) {
      posQueue.set(char, []);
    }

    const required = tFreq.size;
    let bestStart = -1;
    let bestLen = Infinity;

    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (!tFreq.has(char)) continue;

      const q = posQueue.get(char)!;
      q.push(i);
      if (q.length > tFreq.get(char)!) {
        q.shift(); // drop the oldest position — no longer needed for this char's requirement
      }

      // Check if every required char currently has enough positions queued.
      let left = i;
      let ok = true;
      for (const c of tFreq.keys()) {
        const cq = posQueue.get(c)!;
        if (cq.length < tFreq.get(c)!) {
          ok = false;
          break;
        }
        left = Math.min(left, cq[0]); // oldest position still "in use" for this char
      }

      if (ok) {
        const len = i - left + 1;
        if (len < bestLen) {
          bestLen = len;
          bestStart = left;
        }
      }
    }

    return bestStart === -1 ? "" : s.slice(bestStart, bestStart + bestLen);
  }
}