function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
}

// console.log(formatString("Hello"));          // Output: "HELLO"
// console.log(formatString("Hello", true));   // Output: "HELLO"
// console.log(formatString("Hello", false));  // Output: "hello"


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

console.log(filterByRating(books));
Output: [{ title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 }]

