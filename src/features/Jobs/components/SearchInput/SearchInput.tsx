import SearchIcon from '@mui/icons-material/Search'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAppDispatch } from '../../../../app/store'
import { getJobsTC } from '../../jobs-reducer'
import { setKeywordAC } from '../Filters/actions'

import s from './SearchInput.module.css'

type SearchInputType = {
  keyword: string
}

export const SearchInput = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SearchInputType>()
  const onSubmit: SubmitHandler<SearchInputType> = data => {
    dispatch(setKeywordAC(data.keyword))
    dispatch(getJobsTC())
  }

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
