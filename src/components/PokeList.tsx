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
    <div className="mx-auto max-w-7xl grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {pokes?.results.map((poke) => <PokeCard key={poke.name} {...poke} />)}
    </div>
  );
};

export default PokeList;
