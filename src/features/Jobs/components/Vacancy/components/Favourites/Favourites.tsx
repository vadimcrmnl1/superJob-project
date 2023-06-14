import React, { useState } from 'react'

import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'

export const Favourites = () => {
  const [favourite, setFavourite] = useState<boolean>(false)
  const handleFavorite = () => {
    setFavourite(!favourite)
  }

  return (
    <span>
      {!favourite ? (
        <StarBorderRoundedIcon style={{ color: 'gray' }} onClick={handleFavorite} />
      ) : (
        <StarRoundedIcon style={{ color: 'blue' }} onClick={handleFavorite} />
      )}
    </span>
  )
}
