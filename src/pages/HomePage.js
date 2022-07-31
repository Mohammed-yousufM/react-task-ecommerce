import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import CustomCard from '../components/customCard';
import CustomBar from '../components/customBar';
import {
  getAllProductsSer,
  getCategoriesSer,
  getProductsByCategorySer,
} from '../services/productsService';
import {
  updateAllItems,
  updateForFilter,
  updateCategories,
  clearData,
} from '../redux/slice/items/itemsSlice';
import { getBookmarksFn } from '../utils/browserStorage';
import { addToBookmarkFn } from '../utils/helperFns/bookmarkHepFns';
import { CATEGORY_ALL } from '../constants';

function HomePage() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items);
  const [bookmarkIdsState, setBookmarkIdsState] = useState([]);

  useEffect(() => {
    const { bookmarkIds } = getBookmarksFn();
    setBookmarkIdsState(bookmarkIds);
  }, []);

  const getAllProductsFn = async () => {
    const { success, data } = await getAllProductsSer();
    success && dispatch(updateAllItems({ data }));
  };

  const getProductsByCategoryFn = async (value) => {
    const { success, data } = await getProductsByCategorySer({ value });
    success && dispatch(updateAllItems({ data }));
  };
  const getAllCategoriesFn = async () => {
    const { success, data } = await getCategoriesSer();
    success && dispatch(updateCategories({ data }));
  };

  const getSearchRes = (searchTxt) => {
    const filteredData = items.itemsWithOutFilter.filter((each) => {
      const search = searchTxt.toLocaleLowerCase();
      const title = each.title.toLocaleLowerCase();
      return title.includes(search);
    });

    dispatch(updateForFilter({ filteredData }));
  };

  const onClickBookMark = ({ each, isBookmarked }) => {
    const { bookmarks: oldBookMarks, bookmarkIds: oldIds } = getBookmarksFn();
    const { newIds } = addToBookmarkFn({
      each,
      isBookmarked,
      oldBookMarks,
      oldIds,
    });
    setBookmarkIdsState(newIds);
  };

  const onChangeSelection = (value) => {
    if (value === CATEGORY_ALL.value) {
      getAllProductsFn();
      return;
    }
    getProductsByCategoryFn(value);
    return;
  };

  useEffect(() => {
    getAllProductsFn();
    getAllCategoriesFn();
    return () => {
      dispatch(clearData());
    };
  }, []);

  return (
    <Container>
      <CustomBar
        getSearchRes={getSearchRes}
        options={items.categories}
        onChangeSelection={onChangeSelection}
      />
      <Row
        xs={1}
        sm={2}
        md={2}
        lg={3}
        xl={4}
        xxl={5}
        className="g-4 mt-2 mb-2 d-flex align-items-stretch"
      >
        {items.allItems?.map((each) => {
          const isBookmarked = bookmarkIdsState.includes(each.id);
          return (
            <CustomCard
              key={each?.id}
              each={each}
              title={each?.title}
              body={each?.description}
              imgSrc={each?.image}
              isBookmarked={isBookmarked || false}
              onClickBookMark={onClickBookMark}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default HomePage;
