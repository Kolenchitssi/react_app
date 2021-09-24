function Button(props: any): JSX.Element {
  const typeButton: string = `btn btn-${props.typeButton}`;
  return (
    <button type="button" className={typeButton} onClick={props.onClick}>
      {" "}
      {props.textButton}
    </button>
  );
}

export default Button;
