import style from './Main.module.scss';
import Article from '../../components]/Article/Article';

function Main(): JSX.Element {
  return (
    <section className={style.main}>
      <Article articleID="article1" titleArticle="Title article1" articleText="text article1" />
      <Article articleID="article1" titleArticle="Title article1" articleText="text article1" />
    </section>
  )
}

export default Main;
