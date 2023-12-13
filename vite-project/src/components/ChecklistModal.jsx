import React from "react";
import { ChecklistsModalData } from "../data/popupsData";
import FormComp from "./FormComp";
import PopupBtns from "./popup/PopupBtns";
import useFormData from "../hooks/useFormData";
import useGlobalContext from "../context/GlobalContext";

function ChecklistModal({data,tag,active}) {
  const {setFormContent,formContent} = useGlobalContext()
  const checklistDOM = data.list.map((name) => {
    let formItem = data.title + name
    return (
      <li className="modal-checklist__item">
      <label className="check">
        <input id={formItem} checked={formContent.formItem} onChange={(e) => useFormData(setFormContent,formItem,e.target.value,e.target.type,e.target.checked)} className="check__input" type="checkbox" />
        <span className="check__box"></span>
        {name}
      </label>
    </li>
    )
  })
  
  return (
    <div tag={tag} className={`modal-checklist popup ${active ? 'open' : 'closed'}`}>
      <div className="modal-checklist__container">
        <div className="triangle"></div>
        <div className="modal-checklist__list">
          <h3 className="modal-checklist__title">{data.title}</h3>
        
        <FormComp btns={<PopupBtns  form={true} cancel={data.btns?.cancel}  confirm={data.btns?.confirm} />} inputs={checklistDOM} rest={null} />
         

      </div>
      </div>
    </div>
  );
}

export default ChecklistModal;
