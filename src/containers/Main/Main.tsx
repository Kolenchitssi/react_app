import style from "./Main.module.scss";
import { ArticleList } from "../../routes/Starter/components/Article/articlesList";

// import Article from '../../components/Article/Article';

// function Main(): JSX.Element {
//   return (
//     <section className={style.main}>
//       <Article articleID="article1" titleArticle="Title article1" articleText="text article1" />
//       <Article articleID="article1" titleArticle="Title article1" articleText="text article1" />
//     </section>
//   )
// }

// export default Main;

import React, { Suspense } from "react";

const Article = React.lazy(
  () => import("../../routes/Starter/components/Article/Article")
);

function Main(): JSX.Element {
  return (
    <section className={style.main}>
      <Suspense fallback={<div>Загрузка...</div>}>
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
      </Suspense>
    </section>
  );
}

export default Main;
