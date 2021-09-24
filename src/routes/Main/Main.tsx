import React, { Suspense, useState } from "react";

import SelectApp from "./components/SelectApp/SelectApp";
import Article, { propsArticle } from "./components/Article/Article";
import { ArticleList } from "./components/Article/articlesList";
import style from "./Main.module.scss";
import Button from "../../components/Button/Button";

// import { Paginate } from "../../components/Paginate/Paginate";
// import Select from 'react-select';

function Main(): JSX.Element {
  const [articles, setArticles] = useState(ArticleList); //загрузка списка статей
  const [perPage, setPerPage] = useState(2); //количество статей на странице
  const articleCount: number = articles.length;
  const pageCount: number = Math.ceil(articleCount / perPage);
  const [currentPage, setCurrentPage] = useState(1); //текущая страница
  const articleStart = currentPage * perPage;
  const articleEnd = currentPage * perPage + perPage;
  const selectedArticle = articles.slice(articleStart, articleEnd);

  const addArticle = (currentArticles: Array<propsArticle>) => {
    const newArticle: propsArticle = {
      title: "addTitle",
      text: "addText",
      date: String(new Date()),
      author: "addAuthor",

      get id() {
        return String(Math.floor(Math.random() * 100000));
      },

      get key() {
        return this.id + this.author + this.date;
      },
    };

    setArticles([...currentArticles, newArticle]);
  };

  return (
    <section className={style.main}>
      <div className={style.mainHeader}>
        <p>
          Количество статей на странице:{" "}
          <span className={style.spanCount}>{perPage}</span>
        </p>
        <p>
          {" "}
          Количество страниц:{" "}
          <span className={style.spanCount}>{pageCount}</span>
        </p>
        <p>
          Текущая страница;{" "}
          <span className={style.spanCount}>{currentPage + 1}</span>
        </p>
        <div>
          <Button
            typeButton="primary"
            textButton="Add article"
            onClick={() => {
              addArticle(articles);
            }}
          />
        </div>
      </div>
      <div className={style.NumberedDisplayedPages}>
        <SelectApp
          perPage={perPage}
          setPerPage={setPerPage}
          pageCount={pageCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      {selectedArticle.map((items) => {
        return (
          <Article
            id={items.id}
            title={items.title}
            text={items.text}
            key={items.key}
            author={items.author}
            date={items.date}
          />
        );
      })}
      <div className={style.NumberedDisplayedPages}>
        <SelectApp
          perPage={perPage}
          setPerPage={setPerPage}
          pageCount={pageCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
}

export default Main;
