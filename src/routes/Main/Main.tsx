import React, { useState } from "react";
import { createSelector } from "reselect";

import SelectApp from "./components/SelectApp/SelectApp";
import Article, { PropsArticle } from "./components/Article/Article";
import style from "./Main.module.scss";
import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { addArticle } from "./modules/store/action";
import { RootState } from "../../store/models";
import { MyForm } from "./components/Form/Form";
import Modal from "./Modal/Modal";

// ======================= create reselect===================================================

const articlesSelector = createSelector(
  (state: RootState) => state.reducerStarter,
  (state: RootState, pageData: [number, number]) => pageData,
  (articles, pageData) => {
    console.log("сложная обработка", articles);
    const [currentPage, perPage] = pageData;
    const articleStart = currentPage * perPage;
    const articleEnd = currentPage * perPage + perPage;
    return articles.slice(articleStart, articleEnd);
  }
);
//===========================================================================

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const [perPage, setPerPage] = useState(3); //количество статей на странице
  const [currentPage, setCurrentPage] = useState(1); //текущая страница
  const articleCount: number = useAppSelector(
    (state) => state.reducerStarter
  ).length;
  const articles = useAppSelector((state) =>
    articlesSelector(state, [currentPage, perPage])
  );

  const pageCount: number = Math.ceil(articleCount / perPage);

  const add = (currentArticles: PropsArticle[]) => {
    const newArticle: PropsArticle = {
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

    dispatch(addArticle(newArticle));
  };

  return (
    <section className={style.main}>
      <div>
        <Button
          typeButton="secondary"
          textButton="Add article Modal"
          onClick={() => (window.location.href = "addArticle")}
        />
      </div>
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
              add(articles);
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
      {articles.map((items) => {
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
