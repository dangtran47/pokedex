import clsx from 'clsx';
import { IPokeTypeName } from '../shared/types';

const TYPE_COLORS = {
  normal: 'bg-stone-300 text-black',
  fighting: 'bg-red-600 text-slate-100',
  flying: 'bg-indigo-300 text-black',
  poison: 'bg-purple-800 text-slate-100',
  ground: 'bg-amber-300 text-black',
  rock: 'bg-amber-500 text-slate-100',
  bug: 'bg-lime-300 text-black',
  ghost: 'bg-violet-500 text-slate-100',
  steel: 'bg-slate-100 text-secondary-800',
  fire: 'bg-orange-500 text-slate-100',
  water: 'bg-blue-500 text-slate-100',
  grass: 'bg-green-400 text-black',
  electric: 'bg-yellow-300 text-black',
  psychic: 'bg-pink-500 text-slate-100',
  ice: 'bg-teal-300 text-black',
  dragon: 'bg-violet-600 text-slate-100',
  dark: 'bg-amber-900 text-slate-100',
  fairy: 'bg-pink-300 text-black',
  unknown: 'bg-stone-500 text-slate-100',
  shadow: 'bg-sky-950 text-slate-100',
};

const TypeBadge = ({ type }: { type: IPokeTypeName }) => {
  const className = clsx(
    [
      'inline-block',
      'whitespace-nowrap',
      'rounded-[0.27rem]',
      'px-[0.65em]',
      'pb-[0.25em]',
      'pt-[0.35em]',
      'text-center',
      'align-baseline',
      'text-[0.75em]',
      'font-bold',
      'leading-none',
      'mr-1',
    ],
    TYPE_COLORS[type],
  );

  return <span className={className}>{type}</span>;
};

export default TypeBadge;
