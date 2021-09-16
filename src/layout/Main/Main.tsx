import style from './Main.module.scss';

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


import React, { Suspense } from 'react';
const Article = React.lazy(() => import('../../components/Article/Article'));

function Main(): JSX.Element {
  
  return (
    <section className={style.main}>      
      <Suspense fallback={<div>Загрузка...</div>}>
      <Article articleID="article1" titleArticle="Title article1" articleText="text article1" />
      <Article articleID="article1" titleArticle="Title article1" articleText="text article1" />   
      </Suspense>     
    </section>
  )
}

export default Main;

