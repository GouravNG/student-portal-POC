import { useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query'
import {
  fn_getAllPlacement,
  fn_getPlacementById,
} from '../function/placement.function'

export const usePlacementById = (id: number) =>
  useQuery({
    queryKey: ['placement', { id }],
    queryFn: () => fn_getPlacementById(id),
  })

export const useGetAllPlacement = () =>
  useSuspenseInfiniteQuery({
    queryKey: ['placement'],
    queryFn: ({ pageParam }) => {
      console.log(pageParam)
      return fn_getAllPlacement(pageParam)
    },
    initialPageParam: 1,
    getNextPageParam: ({ hasNext, page }) => {
      return hasNext ? +page + 1 : undefined
    },
    select: (data) => data.pages,
  })
