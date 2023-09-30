import { useQuery } from 'react-query';
import { PokeBrief, IPokeTypeName } from '../types';
import pokeClient from '../axios/pokeClient';

type IReponse<T> = {
  data: T;
};

type IPokeList = {
  results: PokeBrief[];
};

export const useFetchPokeList = () =>
  useQuery<IPokeList, Error>(
    'pokes',
    async () => {
      const response = await pokeClient.get<IReponse<IPokeList>, IReponse<IPokeList>>('/pokemon?limit=100');

      return response.data;
    },
    {},
  );

type IPokeType = {
  slot: number;
  type: {
    name: IPokeTypeName;
    url: string;
  };
};

type ISprite = {
  front_default: string;
};

type IPokeDetail = {
  types: IPokeType[];
  sprites: ISprite;
};

export const useFetchPokeDetail = (url: string) =>
  useQuery<IPokeDetail, Error>(url, async () => {
    const response = await pokeClient.get<IReponse<IPokeDetail>, IReponse<IPokeDetail>>(url);

    return response.data;
  });
