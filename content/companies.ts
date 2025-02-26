import type { CompanyType } from '@/types/company'
import { formatDate } from '@/utils/formatter'

export const COMPANIES: CompanyType[] = [
  {
    title: 'Design Engineer',
    company: 'CyberBrokers',
    image: 'cyberbrokers',
    url: 'https://www.cyberbrokers.com/',
    city: 'Chicago',
    state: 'Illinois',
    startDate: formatDate('2023-05-15T03:00:00.000Z'),
  },
  {
    title: 'Software Engineer',
    company: 'Blockade Games',
    image: 'blockade',
    url: 'https://blockade.games/',
    city: 'Indianapolis',
    state: 'Indiana',
    startDate: formatDate('2021-12-01T03:00:00.000Z'),
    endDate: formatDate('2023-04-28T03:00:00.000Z'),
  },
  {
    title: 'Front End Engineer',
    company: 'Invillia',
    image: 'invillia',
    url: 'https://invillia.com/',
    city: 'Araraquara',
    state: 'São Paulo',
    startDate: formatDate('2022-05-10T03:00:00.000Z'),
    endDate: formatDate('2023-03-10T03:00:00.000Z'),
  },
  {
    title: 'Front End Engineer',
    company: 'Foton Tech',
    image: 'foton',
    url: 'https://foton.tech',
    city: 'Florianópolis',
    state: 'Santa Catarina',
    startDate: formatDate('2021-07-21T03:00:00.000Z'),
    endDate: formatDate('2021-12-01T03:00:00.000Z'),
  },
  {
    title: 'Front End Developer',
    company: 'Insigna Consultoria',
    image: 'insigna',
    url: 'https://www.insignaconsultoria.com.br',
    city: 'Campinas',
    state: 'São Paulo',
    startDate: formatDate('2021-03-21T03:00:00.000Z'),
    endDate: formatDate('2021-07-21T03:00:00.000Z'),
  },
  {
    title: 'Front End Developer',
    company: 'Dryve Tecnologia',
    image: 'dryve',
    url: 'https://dryve.com.br',
    city: 'Ribeirão Preto',
    state: 'São Paulo',
    startDate: formatDate('2019-07-21T03:00:00.000Z'),
    endDate: formatDate('2021-01-21T03:00:00.000Z'),
  },
  {
    title: 'Full Stack Engineer',
    company: 'Datamob',
    image: 'datamob',
    url: 'http://datamob.com.br',
    city: 'Ribeirão Preto',
    state: 'São Paulo',
    startDate: formatDate('2016-07-21T03:00:00.000Z'),
    endDate: formatDate('2019-06-21T03:00:00.000Z'),
  },
]
