export function searchDocumentation(query: string) {
    // Sample data structure containing documentation pages
    const docs = [
        { title: "Getting Started", content: "This is how to get started...", path: "/getting-started" },
        { title: "API Reference", content: "Here is the API reference...", path: "/api" },
        // Add more pages...
    ];

    // Specify which pages to include in the search
    const allowedPaths = ["/getting-started", "/api"];

    // Filter and search results
    const results = docs.filter(doc => 
        allowedPaths.includes(doc.path) && 
        (doc.title.toLowerCase().includes(query.toLowerCase()) || doc.content.toLowerCase().includes(query.toLowerCase()))
    );

    return results;
}
