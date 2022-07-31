import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import CustomCard from '../components/customCard';
import { getBookmarksFn } from '../utils/browserStorage';
import { addToBookmarkFn } from '../utils/helperFns/bookmarkHepFns';

function BookmarksPage() {
  const [bookmarkValuesState, setBookmarkValuesState] = useState([]);
  const [bookmarkIdsState, setBookmarkIdsState] = useState([]);

  const onClickBookMark = ({ each, isBookmarked }) => {
    const { bookmarks: oldBookMarks, bookmarkIds: oldIds } = getBookmarksFn();
    const { newIds, newBookmarks } = addToBookmarkFn({
      each,
      isBookmarked,
      oldBookMarks,
      oldIds,
    });
    setBookmarkIdsState(newIds);
    setBookmarkValuesState(newBookmarks);
  };

  useEffect(() => {
    const { bookmarkIds, bookmarks } = getBookmarksFn();
    setBookmarkIdsState(bookmarkIds);
    setBookmarkValuesState(bookmarks);
  }, []);

  return (
    <Container>
      <Row
        xs={1}
        sm={2}
        md={2}
        lg={3}
        xl={4}
        xxl={5}
        className="g-4 mt-2 mb-2 d-flex align-items-stretch"
      >
        {bookmarkValuesState.length
          ? bookmarkValuesState?.map((each) => {
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
            })
          : 'No bookmarks!'}
      </Row>
    </Container>
  );
}

export default BookmarksPage;
