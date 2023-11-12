import styled from 'styled-components'
import {FormTextField} from './FormTextField'
import { FormSelect } from './FormSelect'
import { FormButton } from './FormButton'

const ProductFormWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`

const InputsWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 30%;
  }
`

export const ProductForm = () => {
  return (
    <ProductFormWrapper>
      <InputsWrapper>
        <FormTextField />
        <FormSelect />
      </InputsWrapper>
      <FormButton />
    </ProductFormWrapper>
  )
}