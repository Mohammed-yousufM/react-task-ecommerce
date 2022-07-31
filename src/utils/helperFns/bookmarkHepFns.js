import { setBookmarksFn } from '../browserStorage';

export const addToBookmarkFn = ({
  each,
  isBookmarked,
  oldBookMarks,
  oldIds,
}) => {
  // const { bookmarks: oldBookMarks, bookmarkIds: oldIds } = getBookmarksFn();

  if (isBookmarked) {
    const filterIds = oldIds.filter((storedId, index) => {
      const removeEl = storedId === each.id;
      removeEl && oldBookMarks.splice(index, 1); //removing from array also
      return !removeEl;
    });
    // setBookmarkIdsState(filterIds);
    setBookmarksFn({ newBookmarks: oldBookMarks, newIds: filterIds });
    return { newIds: filterIds, newBookmarks: oldBookMarks };
  }

  const newIds = [...oldIds, each.id];
  const newBookmarks = [...oldBookMarks, each];
  // setBookmarkIdsState(newIds);
  setBookmarksFn({ newBookmarks, newIds });
  return { newBookmarks, newIds };
};
