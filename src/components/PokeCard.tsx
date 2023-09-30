import capitalize from 'lodash/fp/capitalize';

import { useFetchPokeDetail } from '../shared/fetchers/poke';
import { PokeBrief } from '../shared/types';
import TypeBadge from './TypeBadge';
import Spinner from '../shared/components/Spinner';

const PokeCard = ({ name, url }: PokeBrief) => {
  const { data: poke, isLoading, isError } = useFetchPokeDetail(url);

  if (isError || !poke) return null;

  return (
    <div className="group flex flex-col items-center h-32 w-full block rounded-lg bg-white p-4 pt-10 mt-10 shadow-md hover:bg-slate-50 hover:shadow-lg cursor-pointer">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <img
            className="w-20 -mt-16 group-hover:w-28 group-hover:-mt-24 duration-300"
            src={poke.sprites.front_default}
            alt="pokemon"
          />

          <div>{capitalize(name)}</div>

          <div>
            {poke.types.map((type) => (
              <TypeBadge key={`${name}_${type.type.name}`} type={type.type.name} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PokeCard;
