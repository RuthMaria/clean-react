# CLEAN ARCHITECTURE

<br>

<p align="center">
  <img  src="./assets/clean-react.png" width="700px">
</p>

<br>

# CAMADAS

<br>

- #### DOMAIN: Descreve o que o projeto faz, onde fica as regras de negócios da aplicação.

<br>

Estruturas de pastas

- DOMAIN
  - errors => as mensagens de errors da aplicação
  - models => um objeto relacionado ao problema, são os types
  - test => dados mockados (NÃO TEM)
  - usecases => cria apenas interfaces para serem implementadas.

O ideal é que o domain não dependa de nada.

Ex.: Criou a interface Authentication com o método auth que recebe um email e um password, retornando um accessToken.

<br>

- #### DATA: onde fica as implementações dos casos de uso do domain.

<br>

Estruturas de pastas

- DATA
  - models
  - protocols => tudo relacionado ao http: tipagens de resposta, código de respostas, interfaces, etc.
  - test => dados mockados (NÃO TEM)
  - usecases => Implementa as interfaces do usecases do domain.

Ex.: a classe RemoteAuthentication implementou a interface Authentication tratando a resposta da API e os seus erros. Também recebe a interface httpPostClient para fazer a requisição post.

<br>

- #### INFRA: onde fica as implementações dos métodos que são chamados no usecases do DATA, normalmente usam frameworks externos.

<br>

Estruturas de pastas

- INFRA
  - http => faz requisições a API, é a implementação de fato do método chamado no usecases do DATA.
  - test => dados mockados(NÃO TEM)

Ex.: a classe AxiosHttpClient implementa a interface HttpPostClient, usando o axios para fazer a requisição post.
O método post dessa classe é chamado no usecases do DATA através do HttpPostClient.

<br>

- #### PRESENTATION: onde ficam as IUs e o tratamento de conversão de dados(transformar um date em um dado formatado, por exemplo)

Faz a renderização da view, controle de estado, navegação e gravar dados no cache

<br>

Estruturas de pastas

- PRESENTATION
  - components => os componentes gerais usadas em várias páginas
  - hooks
  - pages => paginas da aplicação
  - protocols =>
  - styles => estilos globais

Ex.: o componente Login depende apenas das interfaces authentication e validation

<br>

- #### VALIDATION: faz as validações do sistema

<br>

Estruturas de pastas

- VALIDATION
  - errors =>
  - protocols =>
  - validators =>

Ex.: requiredFieldValidation e emailFieldValidation faz a validação da senha e do email do formulário.

<br>

- #### MAIN: Depende de todas as camadas

Vão ter factories, ou seja, classes que retornam instâncias de outras classes.

<br>

### IMPORTANTE!!

Quando quisermos desacoplar uma camada, criamos uma interface para ela e fazemos ela implementá-la. Assim, fica dependendo apenas de uma abstração e não de uma implementação.
