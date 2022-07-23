type Book = {
  title: string | Number,
  author: string,
  yearOfPublication: Number | null,
  publicationHouse: string | null,
  genre: string | null
}

const thingsFallApart : Book = {
  title: 'Things Fall Apart',
  author: 'Chinua Achebe',
  yearOfPublication: 1962,
  publicationHouse: 'Heinamann',
  genre: 'Literature'
}

const lionAndJewel : Book = {
  title: 'Lion and the Jewel',
  author: 'Wole Soyinka',
  yearOfPublication: 1970,
  publicationHouse: null,
  genre: 'Literature'
}

const PrintLiterature = (book : Book) => {
  console.log(`Title: ${book.title}, \n Author: ${book.author}`)
}

PrintLiterature(lionAndJewel)