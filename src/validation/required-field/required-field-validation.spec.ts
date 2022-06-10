import { RequiredFieldError } from '@/validation/error'
import { RequiredFieldValidation } from './required-field-validation'

describe('Required FieldValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })
})
