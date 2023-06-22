import * as React from 'react'

import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useSearchParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../app/store'
import { setPageAC } from '../../../features/Jobs/actions'
import { selectPageCount, selectTotalCount } from '../../../features/Jobs/selectors'

import s from './../../../features/Jobs/JobsContainer.module.css'

export const PaginationRounded = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)
  const totalCount = useAppSelector(selectTotalCount)
  const pageCount = useAppSelector(selectPageCount)
  const countPages = Math.ceil(totalCount / pageCount)

  const handleChangePage = (event: any, page: number) => {
    dispatch(setPageAC(page))
    setSearchParams({ ...params, page: page.toString() })
  }

  return (
    <div className={s.pagination}>
      <Stack spacing={1}>
        <Pagination
          // style={{ marginTop: '40px', marginBottom: '40px' }}
          count={countPages}
          onChange={handleChangePage}
          size={'medium'}
          siblingCount={1}
          defaultPage={1}
          color={'standard'}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  )
}
