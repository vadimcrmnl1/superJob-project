import React, { useEffect, useState } from 'react'

import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'

import { useAppDispatch } from '../../../../../../app/store'
import { deleteFavouriteVacancyTC, setFavouriteVacancyTC } from '../../../../jobs-reducer'

type FavouritesType = {
  favourite: boolean
  id: number
}

export const Favourites: React.FC<FavouritesType> = ({ favourite, id }) => {
  const dispatch = useAppDispatch()
  const [favouriteVacancy, setFavouriteVacancy] = useState<boolean>(false)

  const handleFavorite = () => {
    dispatch(setFavouriteVacancyTC(id))
    setFavouriteVacancy(true)
  }
  const handleUnFavorite = () => {
    dispatch(deleteFavouriteVacancyTC(id))
    setFavouriteVacancy(false)
  }

  useEffect(() => {
    if (!favourite) {
      setFavouriteVacancy(true)
    }
    if (favourite) {
      setFavouriteVacancy(false)
    }
  }, [favourite])

  return (
    <div>
      {!favourite ? (
        <StarBorderRoundedIcon style={{ color: 'gray' }} onClick={handleFavorite} />
      ) : (
        <StarRoundedIcon style={{ color: '#5E96FC' }} onClick={handleUnFavorite} />
      )}
    </div>
  )
}
