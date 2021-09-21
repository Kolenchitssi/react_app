type propsArticle = {
  id: string;
  key: string;
  title: string;
  text: string;
  date: string;
  author: string;
};

export const ArticleList: Array<propsArticle> = [
  {
    id: "1",
    title: "Title1",
    text: "Text text  text text text text text text text text text 1111111111",
    date: "20-09-2021",
    author: "Author1",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "2",
    title: "Title2",
    text: "Text text  text text text text text text text text text 2222222",
    date: "20-09-2021",
    author: "Author2",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "3",
    title: "Title3",
    text: "Text text  text text text text text text text text text 3333",
    date: "21-09-2021",
    author: "Author1",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "4",
    title: "Title4",
    text: "Text text444444444  text text text text text text text text text 4444",
    date: "21-09-2021",
    author: "Author2",

    get key() {
      return this.id + this.author;
    },
  },
  {
    id: "5",
    title: "Title5",
    text: "Text text555555555  text text text text text text text text text 555",
    date: "20-09-2021",
    author: "Author1",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "6",
    title: "Title6",
    text: "Text6666666666 text  text text text text text text text text text 6666",
    date: "20-09-2021",
    author: "Author2",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "7",
    title: "Title7",
    text: "Text text  text text text text text text text text text 7777777777",
    date: "21-09-2021",
    author: "Author1",

    get key() {
      return this.id + this.author;
    },
  },

  {
    id: "8",
    title: "Title8",
    text: "Text 88888888888text  text text text text text text text text text ",
    date: "21-09-2021",
    author: "Author2",

    get key() {
      return this.id + this.author;
    },
  },
];
