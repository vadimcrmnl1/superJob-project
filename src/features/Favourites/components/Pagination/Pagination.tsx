import * as React from 'react'

import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useSearchParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../../app/store'
import { setFavPageAC } from '../../actions'
import { selectFavCount, selectFavTotalCount } from '../../selectors'

export const PaginationFav = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)
  const count = useAppSelector(selectFavCount)
  const totalCount = useAppSelector(selectFavTotalCount)
  const pageCount = Math.ceil(totalCount / count)
  const handleSetFavPage = (event: any, page: number) => {
    dispatch(setFavPageAC(page))
    setSearchParams({ ...params, page: page.toString() })
  }

  return (
    <Stack spacing={2}>
      <Pagination
        onChange={handleSetFavPage}
        style={{ margin: '20px 0 20px 0' }}
        defaultPage={1}
        color={'primary'}
        count={pageCount}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  )
}
