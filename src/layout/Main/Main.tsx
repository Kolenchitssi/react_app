import style from './Main.module.scss';
import Article from '../../components/Article/Article';
import CounterOld from '../../components/Counter/CounterOld';
import Counter from '../../components/Counter/Counter';
import CounterNew from '../../components/Counter/CounterNew';

function Main(): JSX.Element {
  return (
    <section className={style.main}>
      <Article articleID="article1" titleArticle="Title article1" articleText="text article1" />
      <Article articleID="article1" titleArticle="Title article1" articleText="text article1" />
      <CounterOld />
      <br />
      <Counter />
      <CounterNew/>
    </section>
  )
}

export default Main;
