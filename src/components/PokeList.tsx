import { useCallback, useEffect, useState } from 'react';

import Spinner from '../shared/components/Spinner';
import { useFetchPokeList } from '../shared/fetchers/poke';
import useIsInViewport from '../shared/hooks/useIsInViewPort';

import PokeCard from './PokeCard';

const PokeList = () => {
  const [viewMoreRef, setViewMoreRef] = useState<{ current: HTMLDivElement | null }>({ current: null });
  const { data: pokes, isFetching, isError, fetchNextPage, hasNextPage } = useFetchPokeList();
  const accessViewMore = useIsInViewport(viewMoreRef);

  useEffect(() => {
    if (hasNextPage && accessViewMore) {
      fetchNextPage();
    }
  }, [accessViewMore, viewMoreRef]);

  const measuredViewMoreRef = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      setViewMoreRef({ current: node });
    }
  }, []);

  if (isFetching && !pokes) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return <div>Somethings wrong</div>;
  }

  return (
    <div className="mx-auto xl:max-w-7xl lg:max-w-5xl max-w-2xl p-8 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {pokes?.pages.map((page) =>
        page.results.map((poke) => (
          <div key={poke.name} className="flex justify-center">
            <PokeCard {...poke} />
          </div>
        )),
      )}
      {hasNextPage && isFetching && (
        <div className="w-72 flex flex-col justify-center items-center h-32 w-full p-4 pt-10">
          <Spinner />
        </div>
      )}
      <div ref={measuredViewMoreRef} />
    </div>
  );
};

export default PokeList;
