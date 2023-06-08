import { useEffect, useState } from 'react'

import ClearIcon from '@mui/icons-material/Clear'
import { useForm } from 'react-hook-form'

import { useAppDispatch, useAppSelector } from '../../../../app/store'

import * as actions from './actions'
import { getCataloguesTC } from './filters-reducer'
import s from './Filters.module.css'
import { selectCatalogs, selectPaymentFrom } from './selectors'

interface FormFilter {
  payment_from: number
  payment_to: number
  catalogues: number
}

const styles = {
  select: {
    height: '42px',
    borderRadius: '8px',
    border: 'Grey 300',
  },
  button: {
    height: '40px',
    borderRadius: '8px',
    background: '#5E96FC',
    color: 'white',
  },
}

export const Filters = () => {
  const dispatch = useAppDispatch()
  const catalogs = useAppSelector(selectCatalogs)
  const [catalogue, setCatalogue] = useState<string>('')
  const payFrom = useAppSelector(selectPaymentFrom)
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFilter>()
  const onSubmit = handleSubmit(data => {
    dispatch(actions.setCatalogKeyAC(data.catalogues))
    dispatch(actions.setPaymentFromAC(data.payment_from))
    dispatch(actions.setPaymentToAC(data.payment_to))
  })
  const handleResetForm = () => {
    reset()
  }

  useEffect(() => {
    dispatch(getCataloguesTC())
  }, [])

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.titleBlock}>
          <div className={s.filters}>Фильтры</div>
          <div className={s.resetAll} onClick={handleResetForm}>
            Сбросить все <ClearIcon style={{ width: '15px' }} />
          </div>
        </div>
        <div className={s.formStyle}>
          <form onSubmit={onSubmit}>
            <div className={s.catalogBlock}>
              <label>Отрасль</label>
              <select placeholder={'Выберите отрасль'} {...register('catalogues')}>
                {catalogs.map((cat, index) => {
                  return (
                    <option key={index} value={cat.key}>
                      {cat.title}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className={s.catalogBlock}>
              <label>Оклад</label>
              <input placeholder={'От'} type={'number'} {...register('payment_from', { min: 1 })} />
              <input placeholder={'До'} type={'number'} {...register('payment_to')} />
            </div>
            <input type={'submit'} />
          </form>
          {/*<form onSubmit={formik.handleSubmit}>*/}
          {/*  <div className={s.catalogBlock}>*/}
          {/*    <p>Отрасль</p>*/}
          {/*    <Select*/}
          {/*      sx={styles.select}*/}
          {/*      fullWidth*/}
          {/*      value={catalogue}*/}
          {/*      onChange={handleSelectValue}*/}
          {/*      id={'select'}*/}
          {/*      defaultValue={catalogue}*/}
          {/*      variant={'outlined'}*/}
          {/*    >*/}
          {/*      {catalogs.map((cat, index) => {*/}
          {/*        return (*/}
          {/*          <MenuItem key={index} value={cat.url_rus}>*/}
          {/*            {cat.title}*/}
          {/*          </MenuItem>*/}
          {/*        )*/}
          {/*      })}*/}
          {/*    </Select>*/}
          {/*  </div>*/}
          {/*  <div className={s.catalogBlock}>*/}
          {/*    <p>Оклад</p>*/}
          {/*    <TextField*/}
          {/*      onChange={handleChangePayFrom}*/}
          {/*      value={payFrom}*/}
          {/*      fullWidth*/}
          {/*      type={'number'}*/}
          {/*      name={'payment_from'}*/}
          {/*    ></TextField>*/}
          {/*  </div>*/}
          {/*  <button type={'submit'}>Применить</button>*/}
          {/*</form>*/}
        </div>
      </div>
    </div>
  )
}
