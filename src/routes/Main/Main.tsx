import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { createSelector } from "reselect";

import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { RootState } from "../../store/models";
import Article from "./components/Article/Article";
import SelectApp from "./components/SelectApp/SelectApp";
import style from "./Main.module.scss";
import { getArticle, GET_ARTICLE } from "./modules/store/action";

// ======================= create reselect===================================================

const articlesSelector = createSelector(
  (state: RootState) => state.reducerStarter,
  (state: RootState, pageData: [number, number]) => pageData,
  (articles, pageData) => {
    // console.log("сложная обработка reselect", articles);
    const [currentPage, perPage] = pageData;
    const articleStart = currentPage * perPage;
    const articleEnd = currentPage * perPage + perPage;
    return articles.slice(articleStart, articleEnd);
  }
);
// end create reselect===========================================================================

const Main = React.memo((): JSX.Element => {
  const history = useHistory();

  const [perPage, setPerPage] = useState(3); //количество статей на странице
  const [currentPage, setCurrentPage] = useState(1); //текущая страница
  const articleCount: number = useAppSelector(
    (state) => state.reducerStarter
  ).length;

  const articles = useAppSelector((state) =>
    articlesSelector(state, [currentPage, perPage])
  );

  const pageCount: number = Math.ceil(articleCount / perPage);

  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("use effect start");
    // console.log(getArticle(GET_ARTICLE));
    dispatch(getArticle());
  }, []);

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
            onClick={() => history.push("/article/add")}
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
});

export default Main;
