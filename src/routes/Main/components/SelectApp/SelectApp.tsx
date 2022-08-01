import React, { Fragment, useCallback } from 'react';
import ReactPaginate from 'react-paginate';
import Select, { OptionTypeBase } from 'react-select';

import style from './SelectApp.module.scss';

interface SelectOption extends OptionTypeBase {
  value: number;
  label: string;
}

const options: SelectOption[] = [
  { value: 2, label: 'two' },
  { value: 3, label: 'three' },
  { value: 4, label: 'for' },
  { value: 5, label: 'five' },
  { value: 10, label: 'ten' },
];

type Props = {
  perPage: number; // количество статей на странице
  setPerPage: (arg: number) => void;
  pageCount: number; // количество страниц
  currentPage: number;
  setCurrentPage: (arg: number) => void;
};

function SelectApp({
  perPage,
  setPerPage,
  pageCount,
  currentPage,
  setCurrentPage,
}: Props) {
  const memoizeHandlePageClick = useCallback(
    (selectedItem: { selected: number }) => {
      setCurrentPage(selectedItem.selected);
    },
    [setCurrentPage]
  );

  const memoizeSetPerPage = useCallback(
    (e: SelectOption | null) => {
      if (e != null) {
        setPerPage(e.value);
        setCurrentPage(0);
      }
    },
    [setPerPage, setCurrentPage]
  );

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.numberPages}>
          <span> The number of displayed pages:</span>
          <Select
            className={style.select}
            defaultValue={options[0]}
            onChange={memoizeSetPerPage}
            value={options.find(item => item.value === perPage)}
            options={options}
          />
          <div>
            <div className={style.paginate}>
              <ReactPaginate
                pageCount={pageCount} // количество страниц
                pageRangeDisplayed={3} // количество цифр в центре
                marginPagesDisplayed={2} // количество цифр по краям
                previousLabel='previous'
                nextLabel='next'
                breakLabel='...'
                breakClassName='break-class'
                breakLinkClassName='break-link'
                onPageChange={memoizeHandlePageClick}
                initialPage={0} // стартовая страница
                forcePage={currentPage} // текущая страница
                disableInitialCallback={false}
                containerClassName='container'
                pageClassName='page-li'
                pageLinkClassName='page-a'
                activeClassName='active'
                activeLinkClassName={style.activeLink}
                previousClassName='previous-li'
                nextClassName='next-li'
                previousLinkClassName='previous-a'
                nextLinkClassName='next-a'
                disabledClassName='disabled'
                extraAriaContext='aria'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectApp;
