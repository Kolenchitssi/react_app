import React, { useState } from "react";
import { createSelector } from "reselect";

import SelectApp from "./components/SelectApp/SelectApp";
import Article, { PropsArticle } from "./components/Article/Article";
import style from "./Main.module.scss";
import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { addArticle } from "./modules/store/action";
import { RootState } from "../../store/models";

function Main(): JSX.Element {
  // const [articles, setArticles] = useState(articlesList); //загрузка списка статей

  // ======================= create reselect===================================================

  // const getSelector = useAppSelector(
  //   (state) => state.reducerStarter.articles  );
  // нужна функция а не значение

  //---1 ------
  const getSelector2 = (state: RootState) => state.reducerStarter.articles;

  const getCreateSelector = createSelector(getSelector2, (articles) => {
    console.log("сложная обработка", articles);
    return articles;
  });

  // ---2--- то же самое  но без отдельного селекта------
  // const getCreateSelector = createSelector(
  //   (state: RootState) => state.reducerStarter.articles,
  //   (articles) => {
  //     console.log("сложная обработка", articles);
  //     return articles;
  //   }
  // );
  //===========================================================================

  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => getCreateSelector(state));

  //  const articles = useAppSelector((state) =>state.reducerStarter.articles);

  const [perPage, setPerPage] = useState(2); //количество статей на странице
  const articleCount: number = articles.length;
  const pageCount: number = Math.ceil(articleCount / perPage);
  const [currentPage, setCurrentPage] = useState(1); //текущая страница
  const articleStart = currentPage * perPage;
  const articleEnd = currentPage * perPage + perPage;
  const selectedArticle = articles.slice(articleStart, articleEnd);

  const add = (currentArticles: Array<PropsArticle>) => {
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
