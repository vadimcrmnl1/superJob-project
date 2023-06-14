import React from 'react'

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

import s from '../../Vacancy.module.css'
type LocationType = {
  town: string
}
export const Location: React.FC<LocationType> = ({ town }) => {
  return (
    <div className={s.locationBlock}>
      <p>
        <LocationOnOutlinedIcon />
      </p>
      <span>{town}</span>
    </div>
  )
}
