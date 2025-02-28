import type { Post, Trip } from '@/.contentlayer/generated'
import type { BookType } from '@/types/book'
import type { CompanyType } from '@/types/company'
import type { ProjectType } from '@/types/project'
import type { TravelType } from '@/types/travel'
import type { UseType } from '@/types/use'
import { http } from './http'

export const getTrips = async () => {
  const { data } = await http.get<Trip[]>('/trips', {
    cache: 'force-cache',
  })

  return data
}

export const getTripBySlug = async (slug: string) => {
  const { data } = await http.get<Trip>(`/trips/${slug}`, {
    cache: 'force-cache',
  })

  return data
}

export const getProjects = async () => {
  const { data } = await http.get<ProjectType[]>('/projects', {
    cache: 'force-cache',
  })

  return data
}

export const getCompanies = async () => {
  const { data } = await http.get<CompanyType[]>('/companies', {
    cache: 'force-cache',
  })

  return data
}

export const getBooks = async () => {
  const { data } = await http.get<BookType[]>('/bookshelf', {
    cache: 'force-cache',
  })

  return data
}

export const getUses = async () => {
  const { data } = await http.get<UseType[]>('/uses', {
    cache: 'force-cache',
  })

  return data
}

export const getTravel = async () => {
  const { data } = await http.get<TravelType[]>('/travels', {
    cache: 'force-cache',
  })

  return data
}

export const getPosts = async () => {
  const { data } = await http.get<Post[]>('/posts', {
    cache: 'force-cache',
  })

  return data
}
