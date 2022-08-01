function Button(props: any): JSX.Element {
  const {typeButton, onClick, textButton}=props
  const typeBtn: string = `btn btn-${typeButton}`;
  return (
    <button type="button" className={typeBtn} onClick={onClick}>
      {" "}
      {textButton}
    </button>
  );
}

export default Button;
