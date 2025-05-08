function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter((item: { title: string; rating: number }) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const newArr: T[] = [];
    arrays.forEach((arr: T[]) => {
        newArr.push(...arr);
    })
    return newArr;
}

class Vehicle {
    constructor(private make: string, private year: number) { }
    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year);
    }
    getModel() {
        console.log(`Model: ${this.model}`);
    }
}

function processValue(value: string | number): number {
    if (typeof value === 'string') return value.length;
    return value * 2;
}

interface Product {
    name: string;
    price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
    if (!products.length) return null;
    let mostExpensiveProduct: Product = products[0];
    products.slice(1, products.length).forEach((product: Product) => {
        if (product.price > mostExpensiveProduct.price) {
            mostExpensiveProduct = product;
        }
    })
    return mostExpensiveProduct;
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
function getDayType(day: Day): string {
    if (day === Day.Sunday) return "Weekend";
    return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n >= 0) {
            setTimeout(() => {
                resolve(n * n);
            }, 1000)
        } else {
            reject(new Error("Negative number not allowed"));
        }
    })
}