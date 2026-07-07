export default async function GetCard(tone: string, id: number): Promise<any> {

    try {
        const res = await fetch(`/data/${tone}.json`)

        if (!res.ok) throw new Error(`Error status: ${res.status}`)

        const data = await res.json()
        const values = Object.values(data)
        const resImg = await fetch(`/assets/cards-${tone}/${id}.png`, {method: "GET"})

        if (!res.ok) {
            console.log(res)
            throw new Error(`Error card status: ${res.status}`)
        }

        const contentType = resImg.headers.get("Content-Type") || "";

        if (!contentType.startsWith("image/")) {
            throw new Error(`No card found`)
        }

        return values.find((el: any) => el.id === id)

    } catch (error) {
        if (
            window.confirm(
                `Error to get cards: ${error}, return to Home Page ?`
            )) {
            window.location.href = '/'
        }
    }
}