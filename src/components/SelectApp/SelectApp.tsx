import React, { useState } from "react";
import Select, { OptionTypeBase } from "react-select";
import { Paginate } from "../Paginate/Paginate";
import style from "./SelectApp.module.scss";

interface SelectOption extends OptionTypeBase {
  value: number;
  label: string;
}

const options: SelectOption[] = [
  { value: 2, label: "two" },
  { value: 5, label: "five" },
  { value: 10, label: "ten" },
];

function SelectApp() {
  const [selectedOption, setSelectedOption] = useState(2);

  return (
    <div>
      <Select
        className={style.select}
        defaultValue={options[0]}
        onChange={(e: SelectOption | null) => {
          if (e != null) {
            setSelectedOption(e.value);
            // console.log(e.value, "change", selectedOption);
          }
        }}
        value={options.find((item) => item.value === selectedOption)}
        options={options}
      />
      <div>
        <Paginate
          pageCount={130} //количество страниц
          pageRangeDisplayed={5} //количество цифр в центре
          marginPagesDisplayed={3} //количество цифр по краям
          initialPage={23} //текущая страница
        />
      </div>
    </div>
  );
}

export default SelectApp;
