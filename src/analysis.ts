export async function analyzeText(
  s: string
): Promise<{ numWords: number; numLetters: number }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const words = s.split(/\s+/);
        const wordCounts = words.map((w) => w.length);
        const numLetters = wordCounts.reduce((acc, count) => acc + count, 0);
        resolve({ numWords: words.length, numLetters });
      } catch (err) {
        reject(err);
      }
    }, 10000);
  });
}
