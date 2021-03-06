import axios from "axios";
import { faker } from "@faker-js/faker";

export const mockHttpResponse = (): any => ({
  data: faker.random.word(),
  status: faker.random.numeric(),
});

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>; // tem acesso a tudo que o axios tem

  mockedAxios.post.mockResolvedValue(mockHttpResponse());

  return mockedAxios;
};
