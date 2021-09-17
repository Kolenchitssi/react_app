function About ():JSX.Element {
  return(
      <>
      <h2>About page</h2>
      <p>this use NavLinK особый тип Link если ссылка совпадает с текущим местоположением она выделяется</p>
      <p> пока не работает непонятно обязателен ли <b>activeClassName="hurray"</b></p>
      <p>{`Каждый раз, когда вы хотите принудительно выполнить навигацию, вы можете отобразить файл <Redirect >. Во время <Redirect>рендеринга он будет перемещаться, используя свою toprop ###<<Redirect to="/login" />###`} </p>
      </>
  )
}

export default About;
