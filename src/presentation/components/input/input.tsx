import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]

  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }
  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className={Styles.inputWrap}>
      <input
        {...props}
        data-testid={props.name}
        readOnly
        onFocus={enableInput}
        onChange={handleChange}
      />
      <span
        data-testid={`${props.name}-status`}
        title={getTitle()}
        className={Styles.status}
      >
        { getStatus() }
      </span>
    </div>
  )
}

export default Input

/*
readOnly => faz com que o input seja de somente leitura, não podendo ser alterado/digitado
onFocus => quando o input estiver com foco um evento é lançado para setar o readOnly como falso, permitindo a digitação do campo.

Esses dois hacks faz com que o navegador não use o auto-completar, evitando o preenchimento automático dos inputs quando o login estiver salvo no navegador
*/
