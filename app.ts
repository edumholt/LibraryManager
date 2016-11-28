import { Category } from './enums';
import { Book, Logger, Author, Librarian } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import { CalculateLateFees as CalcFee, MaxBooksAllowed, Purge } from './lib/utilityFunctions';
import refBook from './encyclopedia';

let reference = new refBook('Fact Book', 2016, 1);

function GetAllBooks(): Book[] {
    let books = [
        {id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction},
        {id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemmingway', available: false, category: Category.Fiction},
        {id: 3, title: 'I Know Why The Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry},
        {id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction}
    ];

    return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for(let currentBook of books) {
        if(currentBook.available) {
            firstAvailable  = currentBook.title;
            break;
        }
    }

    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {

    console.log('Getting books in category: ' + Category[categoryFilter]);
    const allBooks = GetAllBooks();
    const filteredTitles: Array<string> = [];
    for(let currentBook of allBooks) {
        if(currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}

function LogBookTitles(titles: Array<string>): void {
    for(let title of titles) {
        console.log(title);
    }
}

function GetBookByID(id: number): Book {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string) {
    console.log('Creating customer: ' + name);
    if(age) {
        console.log('Age: ' + age);
    }
    if(city) {
        console.log('City: ' + city);
    }
}

function CheckoutBooks(customer: string, ...bookIds: number[]): string[] {
    console.log('Checking out books for ' + customer);

    let booksCheckedOut: Array<string> = [];
    for(let id of bookIds) {
        let book = GetBookByID(id);
        if(book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
    const allBooks = GetAllBooks();
    const foundTitles: Array<string> = [];
    if(typeof bookProperty === 'string') {
        for(let book of allBooks) {
            if(book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if(typeof bookProperty === 'boolean') {
        for(let book of allBooks) {
            if(book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}

function printBook(book: Book): void {
    console.log(book.title + ' by ' + book.author);
}

//****************************

let inventory: Array<Book> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A.B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C.D.', available: true, category: Category.Software },
];

let purgedBooks: Array<Book> = Purge<Book>(inventory);
purgedBooks.forEach(book => console.log(book.title));

// let Newspaper = class extends ReferenceItem {
//     printCitation(): void {
//         console.log(`Newspaper: ${this.title}`);
//     }
// }

// let myPaper = new Newspaper('The Gazette', 2014);
// myPaper.printItem();
// myPaper.printCitation();

// let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 1928, 10);
// refBook.printItem();
// refBook.printCitation();

// let favLibrarian: Librarian = new UniversityLibrarian();
// favLibrarian.name = 'Sharon';
// favLibrarian.assistCustomer('Bimbo');

// let hermansBooks = GetTitles('Herman Melville');
// hermansBooks.forEach(title => console.log(title));

// LogFirstAvailable();

// let myBooks: Array<string> = CheckoutBooks('Howard', 1, 3, 4);
// myBooks.forEach(title => console.log(title));

// CreateCustomer('Bill', 22, 'Eau Claire, WI');

// let poetryBooks = GetBookTitlesByCategory(Category.Poetry);
// poetryBooks.forEach(title => console.log(title));

// let fictionBooks = GetBookTitlesByCategory();
// fictionBooks.forEach(title => console.log(title));
// let IdGenerator: (chars: string, id: number) => string;

// IdGenerator = (name: string, id: number) => { return id + name; }

// let myID: string = IdGenerator('Edward', 23);
// console.log(myID);
// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));