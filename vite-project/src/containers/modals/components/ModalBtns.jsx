import React, { useState } from 'react'


import useGlobalContext from '../../../context/GlobalContext'

export default function ModalBtns(props) {
  const { setModalActive,setChildModalActive,modalActive,childModalActive } = useGlobalContext();

    const {confirm,cancel,form} = props


  return (
    <div className="modal__btns">
       {form ?  <input onClick={(e) =>     props.className === 'modal-child' ?   setChildModalActive(false) : setModalActive(false) }  type="submit" className={`modal__btns__btn btn-${confirm} `} placeholder={confirm}/> 
       : <button onClick={(e) =>   props.className === 'modal-child' ?   setChildModalActive(false) : setModalActive(false)} className={`modal__btns__btn btn-${confirm} `}>{confirm}</button>}
        <button onClick={(e) =>   props.className === 'modal-child' ?   setChildModalActive(false) : setModalActive(false)} className={`modal__btns__btn btn-${cancel} `}>{cancel}</button>
    </div>
  )
}
