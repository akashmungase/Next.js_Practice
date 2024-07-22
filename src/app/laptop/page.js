export default function Page() {
    return (
        <div>
            <h1>generateMetadata for Dynamic meta data in next.js</h1>
        </div>
    )
}

export function generateMetadata() {
    return {
        title: "Laptop page",
        description: "Laptop page description"
    }
} 