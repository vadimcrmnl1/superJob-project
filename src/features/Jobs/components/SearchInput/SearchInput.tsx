import SearchIcon from '@mui/icons-material/Search'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../../app/store'
import { getJobsTC } from '../../jobs-reducer'
import { setKeywordAC } from '../Filters/actions'
import { selectKeyword } from '../Filters/selectors'

import s from './SearchInput.module.css'

type SearchInputType = {
  keyword: string
}

export const SearchInput = () => {
  const dispatch = useAppDispatch()
  const keyword = useAppSelector(selectKeyword)
  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  console.log(params)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SearchInputType>()
  const onSubmit: SubmitHandler<SearchInputType> = data => {
    dispatch(setKeywordAC(data.keyword))
    setSearchParams({ ...params, keyword: keyword })
    dispatch(getJobsTC())
  }

  return (
    <div className={s.container}>
      <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.searchBlock}>
          <SearchIcon style={{ opacity: '0.5', marginLeft: '12px' }} />
          <input placeholder={'Введите название вакансии'} {...register('keyword')} />
          <button className={s.button} type={'submit'}>
            Поиск
          </button>
        </div>
      </form>
    </div>
  )
}
