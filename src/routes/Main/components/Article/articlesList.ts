import { FormType } from "../../../../store/models";

export const articlesList: Array<FormType> = [
  {
    id: "1",
    title: "Title1",
    text: "Text text  text text text text text text text text text 1111111111",
    date: new Date(),
    author: "Author1",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "2",
    title: "Title2",
    text: "Text text  text text text text text text text text text 2222222",
    date: new Date(),
    author: "Author2",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "3",
    title: "Title3",
    text: "Text text  text text text text text text text text text 3333",
    date: new Date(),
    author: "Author1",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "4",
    title: "Title4",
    text: "Text text444444444  text text text text text text text text text 4444",
    date: new Date(),
    author: "Author2",

    get key() {
      return this.id + this.author;
    },
  },
  {
    id: "5",
    title: "Title5",
    text: "Text text555555555  text text text text text text text text text 555",
    date: new Date(),
    author: "Author1",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "6",
    title: "Title6",
    text: "Text6666666666 text  text text text text text text text text text 6666",
    date: new Date(),
    author: "Author2",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "7",
    title: "Title7",
    text: "Text text  text text text text text text text text text 7777777777",
    date: new Date(),
    author: "Author1",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "8",
    title: "Title8",
    text: "Text 88888888888text  text text text text text text text text text ",
    date: new Date(),
    author: "Author2",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "9",
    title: "Title9",
    text: "Text text  text text text text text text text text text 9999",
    date: new Date(),
    author: "Author3",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "10",
    title: "Title10",
    text: "Text text  text text text text text text text text text 10",
    date: new Date(),
    author: "Author2",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "11",
    title: "Title11",
    text: "Text text  text text text text text text text text text 11",
    date: new Date(),
    author: "Author3",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "12",
    title: "Title12",
    text: "Text   text text text text text text text text text 12",
    date: new Date(),
    author: "Author4",

    get key() {
      return this.id + this.author;
    },
  },
  {
    id: "13",
    title: "Title13",
    text: "Text text555555555  text text text text text text text text text 13",
    date: new Date(),
    author: "Author3",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "14",
    title: "Title14",
    text: "Text6666666666 text  text text text text text text text text text 14",
    date: new Date(),
    author: "Author2",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "15",
    title: "Title15",
    text: "Text text  text text text text text text text text text 15",
    date: new Date(),
    author: "Author5",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "16",
    title: "Title16",
    text: "Text   text text text text text text text text text 16",
    date: new Date(),
    author: "Author2",

    get key() {
      return this.id + this.author;
    },
  },
];
