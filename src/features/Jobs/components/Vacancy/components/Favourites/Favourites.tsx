import React, { useEffect, useState } from 'react'

import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'

import { useAppDispatch, useAppSelector } from '../../../../../../app/store'
import {
  deleteFavouriteVacancyTC,
  setFavouriteVacancyTC,
} from '../../../../../Favourites/favorites-reducer'
import { selectFavVac } from '../../../../../Favourites/selectors'

import s from './Favorites.module.css'

type FavouritesType = {
  favourite: boolean
  id: number
  type: 'full' | 'short'
}

export const Favourites: React.FC<FavouritesType> = ({ favourite, id, type }) => {
  const dispatch = useAppDispatch()
  const fav = useAppSelector(selectFavVac)
  const handleFavorite = () => {
    dispatch(setFavouriteVacancyTC(id))
  }
  const handleUnFavorite = () => {
    dispatch(deleteFavouriteVacancyTC(id))
  }

  useEffect(() => {
    if (!favourite && type === 'full') {
      favourite = fav
    }
    if (favourite && type === 'full') {
      favourite = fav
    }
  }, [favourite, fav])

  return (
    <div>
      {!favourite && !fav ? (
        <StarBorderRoundedIcon className={s.favOff} onClick={handleFavorite} />
      ) : (
        <StarRoundedIcon className={s.favOn} onClick={handleUnFavorite} />
      )}
    </div>
  )
}
