import axios from 'axios'

import { CatalogsDataType } from './components/Filters/types'

const instance = axios.create({
  baseURL: 'https://startup-summer-2023-proxy.onrender.com/2.0/',
  headers: {
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
    'X-Api-App-Id':
      'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
  },
})

export const jobsAPI = {
  authWithPass(params: AuthParamsType) {
    return instance.get('oauth2/password', { params })
  },
  getCategories() {
    return instance.get<CatalogsDataType[]>('catalogues/')
  },
  getVacancies(params: VacanciesParamsType) {
    return instance.get<VacanciesResponseType>('vacancies', { params })
  },
}

export type AuthParamsType = {
  login: string
  password: string
  client_id: number
  client_secret: string
  hr: number
}
export type VacanciesParamsType = {
  id_vacancy?: number
  id_client?: number
  keyword?: string
  payment_from?: number
  payment_to?: number
  catalogues?: number
}
export type VacanciesResponseType = {
  objects: VacancyType[]
}

export type VacancyType = {
  canEdit: boolean
  is_closed: boolean
  id: number
  id_client: number
  payment_from: number
  payment_to: number
  date_pub_to: number
  date_archived: number
  date_published: number
  address: string
  profession: string
  work?: any
  compensation?: any
  candidat: string
  metro: any[]
  currency: string
  vacancyRichText: string
  covid_vaccination_requirement: VacancyCovid_vaccination_requirement
  contact: string
  moveable: boolean
  agreement: boolean
  anonymous: boolean
  is_archive: boolean
  is_storage: boolean
  type_of_work: VacancyType_of_work
  place_of_work: VacancyPlace_of_work
  education: VacancyEducation
  experience: VacancyExperience
  maritalstatus: VacancyMaritalstatus
  children: VacancyChildren
  client: VacancyClient
  languages: any[]
  driving_licence: any[]
  catalogues: VacancyCatalogues[]
  agency: VacancyAgency
  town: VacancyTown
  already_sent_on_vacancy: boolean
  rejected: boolean
  response_info: any[]
  phone: string
  phones: VacancyPhones[]
  fax?: any
  faxes?: any
  favorite: boolean
  client_logo: string
  highlight: boolean
  age_from: number
  age_to: number
  gender: VacancyGender
  firm_name: string
  firm_activity: string
  link: string
  isBlacklisted: boolean
  video: VacancyVideo
  latitude: number
  longitude: number
}
export type VacancyCovid_vaccination_requirement = {
  id: number
  title: string
}
export type VacancyType_of_work = {
  id: number
  title: string
}
export type VacancyPlace_of_work = {
  id: number
  title: string
}
export type VacancyEducation = {
  id: number
  title: string
}
export type VacancyExperience = {
  id: number
  title: string
}
export type VacancyMaritalstatus = {
  id: number
  title: string
}
export type VacancyChildren = {
  id: number
  title: string
}
export type VacancyClientTown = {
  id: number
  title: string
  declension: string
  hasMetro: boolean
  genitive: string
}
export type VacancyClient = {
  id: number
  title: string
  link: string
  industry: any[]
  description: string
  vacancy_count: number
  staff_count: string
  client_logo: string
  address?: any
  addresses: any[]
  url: string
  short_reg: boolean
  is_blocked: boolean
  registered_date: number
  town: VacancyClientTown
}
export type VacancyCataloguesPositions = {
  id: number
  title: string
  key: number
}
export type VacancyCatalogues = {
  id: number
  title: string
  key: number
  positions: VacancyCataloguesPositions[]
}
export type VacancyAgency = {
  id: number
  title: string
}
export type VacancyTown = {
  id: number
  title: string
  declension: string
  hasMetro: boolean
  genitive: string
}
export type VacancyPhones = {
  number: number
  additionalNumber?: any
}
export type VacancyGender = {
  id: number
  title: string
}
export type VacancyVideo = {
  id: string
  url: string
  type: string
}
