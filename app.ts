function GetAllBooks() {
    let books = [
        {id: 1, title: 'Ulysses', author: 'James Joyce', available: true, Category: Category.Fiction},
        {id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemmingway', available: false, Category: Category.Fiction},
        {id: 3, title: 'I Know Why The Caged Bird Sings', author: 'Maya Angelou', available: true, Category: Category.Poetry},
        {id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, Category: Category.Fiction}
    ];

    return books;
}

function LogFirstAvailable(books): void {
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

enum Category {Biography, Poetry, Fiction, History, Children}

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {

    console.log('Getting books in category: ' + Category[categoryFilter]);
    const allBooks = GetAllBooks();
    const filteredTitles: Array<string> = [];
    for(let currentBook of allBooks) {
        if(currentBook.Category === categoryFilter) {
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

function GetBookByID(id: number) {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

//****************************

const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));