import SelectApp from "../SelectApp/SelectApp";
import style from "./NumberedDisplayedPages.module.scss";

export function NumberedDisplayedPages() {
  return (
    <div className={style.wrapper}>
      <div className={style.numberPages}>
        <span> The number of displayed pages:</span>
        <SelectApp />
      </div>
    </div>
  );
}
