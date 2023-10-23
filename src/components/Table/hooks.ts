import {useState} from 'react';

export function useSortBodyData(body: string[][] | undefined) {
  let arr: string[][] | undefined;

  if (body) arr = body.map(el => [...el]);

  const [sortIndex, setSortIndex] = useState<
    [null | number, null | 'up' | 'down']
  >([null, null]);
  const [sortArray, setSortArray] = useState(arr);

  const onSortClick = (idx: number) => {
    if (sortIndex[0] !== idx) {
      setSortIndex([idx, 'up']);

      const array = sortArray?.sort((a, b) => a[idx].localeCompare(b[idx]));
      setSortArray(array);
    } else if (sortIndex[1] === 'up') {
      setSortIndex([idx, 'down']);

      const array = sortArray?.sort((a, b) => b[idx].localeCompare(a[idx]));
      setSortArray(array);
    } else {
      setSortIndex([null, null]);
      setSortArray(arr);
    }
  };

  return {sortArray, sortIndex, onSortClick};
}
