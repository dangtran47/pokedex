import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { IPokeTypeName, PokeBrief } from '../types';
import pokeClient from '../axios/pokeClient';

type IResponse<T> = {
  data: T;
};

type IPokeList = {
  results: PokeBrief[];
};

export const useFetchPokeList = () =>
  useInfiniteQuery<IPokeList, Error>({
    queryKey: ['pokes'],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await pokeClient.get<IResponse<IPokeList>, IsReponse<IPokeList>>(
        `/pokemon?limit=20&offset=${pageParam * 20}`,
      );

      return response.data;
    },
    getNextPageParam: (lastPage, pages) => {
      return lastPage.next ? pages.length : undefined;
    },
  });

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
  useQuery<IPokeDetail, Error>({
    queryKey: [url],
    queryFn: async () => {
      const response = await pokeClient.get<IResponse<IPokeDetail>, IResponse<IPokeDetail>>(url);

      return response.data;
    },
    keepPreviousData: true,
  });
