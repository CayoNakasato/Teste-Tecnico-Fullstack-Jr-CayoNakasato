import { useContext } from "react";
import { ContactDataContext } from "../../context/contactData";
import { FormContact } from "../FormContact"
import style from "./style.module.css";


export const ContainerContactForm = () =>{

  const {handleNavigation} = useContext(ContactDataContext)

  const handleNavigate = () =>{
    handleNavigation()
  }

  return (
    <>
      <div className={style.container}>
        <h1>Cadastre um Contato!</h1>
        <FormContact/>
        <button onClick={handleNavigate}>Voltar</button>
      </div>
    </>
  )
}