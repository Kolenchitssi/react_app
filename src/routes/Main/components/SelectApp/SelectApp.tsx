import React, { useCallback } from "react";
import ReactPaginate from "react-paginate";
import Select, { OptionTypeBase } from "react-select";

import style from "./SelectApp.module.scss";

interface SelectOption extends OptionTypeBase {
  value: number;
  label: string;
}

const options: SelectOption[] = [
  { value: 2, label: "two" },
  { value: 3, label: "three" },
  { value: 4, label: "for" },
  { value: 5, label: "five" },
  { value: 10, label: "ten" },
];

type SelectAppType = {
  perPage: number; //количество статей на странице
  setPerPage: (arg: number) => void;
  pageCount: number; //количество страниц
  currentPage: number;
  setCurrentPage: (arg: number) => void;
};

function SelectApp(props: SelectAppType) {
  // const handlePageClick = (selectedItem: { selected: number }) => {
  //   props.setCurrentPage(selectedItem.selected);
  // };

  const memoizeHandlePageClick = useCallback(
    (selectedItem: { selected: number }) => {
      props.setCurrentPage(selectedItem.selected);
    },
    [props.setCurrentPage]
  );

  const memoizeSetPerPage = useCallback(
    (e: SelectOption | null) => {
      if (e != null) {
        props.setPerPage(e.value);
        props.setCurrentPage(0);
      }
    },
    [props.setPerPage]
  );

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.numberPages}>
          <span> The number of displayed pages:</span>
          <Select
            className={style.select}
            defaultValue={options[0]}
            onChange={memoizeSetPerPage}
            value={options.find((item) => item.value === props.perPage)}
            options={options}
          />
          <div>
            <div className={style.paginate}>
              <ReactPaginate
                pageCount={props.pageCount} //количество страниц
                pageRangeDisplayed={3} //количество цифр в центре
                marginPagesDisplayed={2} //количество цифр по краям
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-class"}
                breakLinkClassName={"break-link"}
                onPageChange={memoizeHandlePageClick}
                initialPage={0} //стартовая страница
                forcePage={props.currentPage} //текущая страница
                disableInitialCallback={false}
                containerClassName={"container"}
                pageClassName={"page-li"}
                pageLinkClassName={"page-a"}
                activeClassName={"active"}
                activeLinkClassName={style.activeLink}
                previousClassName={"previous-li"}
                nextClassName={"next-li"}
                previousLinkClassName={"previous-a"}
                nextLinkClassName={"next-a"}
                disabledClassName={"disabled"}
                extraAriaContext={"aria"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectApp;
