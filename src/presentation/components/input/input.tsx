import React from 'react'
import Styles from './input-styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput}/>
      <span className={Styles.status}>🔴</span>
    </div>
  )
}

export default Input

/*
readOnly => faz com que o input seja de somente leitura, não podendo ser alterado/digitado
onFocus => quando o input estiver com foco um evento é lançado para setar o readOnly como falso, permitindo a digitação do campo.

Esses dois hacks faz com que o navegador não use o auto-completar, evitando o preenchimento automático dos inputs quando o login estiver salvo no navegador
*/
