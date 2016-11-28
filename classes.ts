import * as Interfaces from './interfaces';

class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }
}

abstract class ReferenceItem {

    private _publisher: string;
    static department: string = 'Research';

    constructor(protected title: string, protected year: number) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem...');
    }

    get publisher(): string {
        return this._publisher;
    }

    set publisher(publisher: string) {
        this._publisher = publisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`)
    }

    abstract printCitation(): void;
}



export { UniversityLibrarian, ReferenceItem }