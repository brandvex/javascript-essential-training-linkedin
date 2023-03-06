class Book {
    constructor(
        bookName,
        author,
        pages,
        isBought
    )
    {
        this.Bookname = bookName;
        this.author = author;
        this.pages = pages;
        this.isBought = false;
    }

    purchase(purchaseConfirm){
        this.isBought = purchaseConfirm;
    }
}

export default Book;