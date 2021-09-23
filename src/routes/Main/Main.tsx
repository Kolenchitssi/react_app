import React, { Suspense, useState } from "react";

import SelectApp from "./components/SelectApp/SelectApp";
import Article from "./components/Article/Article";
import { ArticleList } from "./components/Article/articlesList";
import style from "./Main.module.scss";

// import { Paginate } from "../../components/Paginate/Paginate";
// import Select from 'react-select';

function Main(): JSX.Element {
  const [perPage, setPerPage] = useState(2); //количество статей на странице
  const articleCount: number = ArticleList.length;
  const pageCount: number = Math.ceil(articleCount / perPage);
  const [currentPage, setCurrentPage] = useState(1); //текущая страница
  const articleStart = currentPage * perPage;
  const articleEnd = currentPage * perPage + perPage;
  const selectedArticle = ArticleList.slice(articleStart, articleEnd);
  return (
    <section className={style.main}>
      <p>
        количество статей на странице {perPage} количество страниц {pageCount}{" "}
        текущая страница {currentPage + 1}
      </p>
      <SelectApp
        perPage={perPage}
        setPerPage={setPerPage}
        pageCount={pageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
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
