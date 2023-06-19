import * as React from 'react'

import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

export const PaginationRounded = () => {
  return (
    <Stack spacing={2}>
      <Pagination
        style={{ marginTop: '40px', marginBottom: '40px' }}
        count={10}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  )
}
