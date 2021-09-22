import React, { Suspense } from "react";

import { NumberedDisplayedPages } from "../../components/NumberedDisplayedPages/NumberedDisplayedPages";
import { Paginate } from "../../components/Paginate/Paginate";
import { ArticleList } from "../Starter/components/Article/articlesList";
import style from "./Main.module.scss";

// import { Paginate } from "../../components/Paginate/Paginate";
// import Select from 'react-select';

import Article from "../Starter/components/Article/Article";

function Main(): JSX.Element {
  return (
    <section className={style.main}>
      {ArticleList.map((items) => {
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
        <NumberedDisplayedPages />
      </div>
    </section>
  );
}

export default Main;
