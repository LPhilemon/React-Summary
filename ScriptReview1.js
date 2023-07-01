const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
  ];
  
  function getBooks() {
    return data;
  }
  
  function getBook(id) {
    return data.find((d) => d.id === id);
  }
  
  //--------------------------------------------------------------------
  // @ the length method
  // const size = getBooks().length;
  // size;
  
  
  
  //--------------------------------------------------------------------
  //   @Destructuring an Object{}
  //const book = getBook(2);
  // const {author, title, genres, translations, pages, publicationDate, hasMovieAdaptation} = book;
  
  // console.log(title, author, genres);
  
  // const summary = `The book ${title},  was released in ${publicationDate.split("-")[0]}`;
  //  summary;
  
  
  
  //--------------------------------------------------------------------
  //@Destructring an Array
  
  // const book = getBook(2);
  // const {genres} = book;
  // const [primaryGenre, secondaryGenre] = genres;
  // genres;
  
  //--------------------------------------------------------------------
  // @ Insert Delete and Update
  // const book = getBook(1);
  // const newBook = {...book, pages: 120}
  // newBook;
  
  
  // @Insert
  // const newBook = {...book, pages: 120}
  // newBook;
  
  
  //@Update and Delete - uses the map function. Filter function does not mutate objectsl
  // const books = getBooks();
  
  // // @Delete book from Array
  // const deletedOjectOne =  books.filter((x) => x.id !== 1);
  deletedOjectOne;
  
  
  
  //@Update and Delete - uses the map function. Filter function does not mutate objectsl@//    // // // // // 
  
  //@Update and Delete - uses the map function. Filter function does not mutate objectsl
  
  //@Update and Delete - uses the map function. Filter function does not mutate objectsl
  
  //@Update and Delete - uses the map function. Filter function does not mutate objectsl
  
  const updated =  books.map((x) => x.id !== 1? {...x, pages: 123} : x);
  updated;
  
  
  
  //--------------------------------------------------------------------
  // @ the map function
  
  // const books = getBooks();
  
  // const titles = books.map((object) => object.title);
  // titles;
  
  // function getTotalReviewCount(book){
  //   const goodreads = book.reviews?.goodreads?.reviewsCount;
  //   const librarything =  book.reviews?.librarything?.reviewsCount;
  
  //   return goodreads + librarything;
  // }
  
  // function essensialData(books) {
  //   return books.map((book) => ({
  //     // author: book.author,
  //     // title: book.title
  //     totalviews: getTotalReviewCount(book),
  //   }))
  // }
  
  // const essentialDataTabs = essensialData(books);
  // essentialDataTabs;
  
  
  //--------------------------------------------------------------------
  // @ the filter function 
  // const book = getBooks();
  // const filtered = book.filter((x) => x.title.length > 4);
  
  // filtered;
  
  
  
  
  //--------------------------------------------------------------------
  //@ testing synchronous functions
  //  function getAdvice(){
  
  //   const res = fetch("https://api.adviceslip.com/advice");
  //   res;
  //   const data = res.json();
  //   data;
  //   console.log(data.slip.advice);
  // }
  //getAdvice();
  
  // console.log("Here we are!");
  
  
  
  
  
  //--------------------------------------------------------------------
  // @ testing Asynchronous functions
   async function getAdvice(){
  
    const res =  await fetch("https://api.adviceslip.com/advice");
    res;
    const data = await res.json();
    data;
    console.log(data.slip.advice);
  }
  getAdvice();
  
  console.log("Here we are!");