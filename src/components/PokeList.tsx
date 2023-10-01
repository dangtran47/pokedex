import Spinner from '../shared/components/Spinner';
import { useFetchPokeList } from '../shared/fetchers/poke';

import PokeCard from './PokeCard';

const PokeList = () => {
  const { data: pokes, isLoading, isError } = useFetchPokeList();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Somethings wrong</div>;
  }

  return (
    <div className="mx-auto xl:max-w-7xl lg:max-w-5xl max-w-2xl p-8 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {pokes?.results.map((poke) => (
        <div key={poke.name} className="flex justify-center">
          <PokeCard {...poke} />
        </div>
      ))}
    </div>
  );
};

export default PokeList;
