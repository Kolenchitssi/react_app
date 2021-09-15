function Button(props: any): JSX.Element {
  const typeButton: string = `btn btn-${props.typeButton}`;
  return (
    <button type="button" className={typeButton}> {props.textButton}</button>
  )
}

export default Button;
