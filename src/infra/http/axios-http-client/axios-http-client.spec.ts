import axios from 'axios'
import { faker } from '@faker-js/faker'
import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios> // tem acesso a tudo que o axios tem

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL', async () => {
    const url = faker.internet.url()
    const sut = new AxiosHttpClient()
    await sut.post({ url })
    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
