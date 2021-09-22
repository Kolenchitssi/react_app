import * as React from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import style from "./Paginate.module.scss";

export function Paginate(props: ReactPaginateProps) {
  return (
    <div className={style.paginate}>
      <ReactPaginate
        pageCount={props.pageCount} //количество страниц
        pageRangeDisplayed={props.pageRangeDisplayed} //количество цифр в центре
        marginPagesDisplayed={props.marginPagesDisplayed} //количество цифр по краям
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-class"}
        breakLinkClassName={"break-link"}
        onPageChange={(selectedItem: { selected: number }) => null}
        initialPage={props.initialPage} //текущая страница
        forcePage={7} //! ???
        disableInitialCallback={false}
        containerClassName={"container"}
        pageClassName={"page-li"}
        pageLinkClassName={"page-a"}
        activeClassName={"active"}
        activeLinkClassName={"active"}
        previousClassName={"previous-li"}
        nextClassName={"next-li"}
        previousLinkClassName={"previous-a"}
        nextLinkClassName={"next-a"}
        disabledClassName={"disabled"}
        hrefBuilder={(pageIndex: number) => null}
        extraAriaContext={"aria"}
      />
    </div>
  );
}
