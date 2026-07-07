export function shuffle() {
    const ids = Array.from({length: 77}, (_, i) => i)
    return ids.sort(() => Math.random() - 0.5)
}