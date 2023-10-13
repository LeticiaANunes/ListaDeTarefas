# Gerenciador de Tarefas

Visão Geral
O Gerenciador de Tarefas é uma aplicação web voltada para o gerenciamento eficiente de tarefas. Desenvolvido para atender às necessidades de organização e produtividade dos usuários, o aplicativo oferece uma variedade de recursos que permitem a adição, edição e marcação de tarefas como concluídas. Além disso, o sistema inclui funcionalidades avançadas de filtragem e busca, tornando a localização de tarefas específicas uma tarefa simples e rápida.

Funcionalidades Principais
1. Adição de Tarefas
O Gerenciador de Tarefas permite aos usuários adicionar novas tarefas de forma eficiente. Com uma interface intuitiva e amigável, os usuários podem inserir detalhes, como título, descrição, data de vencimento e prioridade.

2. Edição de Tarefas
A aplicação oferece a capacidade de editar tarefas já existentes. Isso permite aos usuários fazer ajustes em informações essenciais, como título, descrição, data de vencimento e prioridade, de acordo com suas necessidades em constante evolução.

3. Marcação de Tarefas como Concluídas
Para acompanhar o progresso das tarefas, os usuários podem marcar tarefas como concluídas. Essa funcionalidade ajuda a manter um registro claro das tarefas pendentes e das que já foram finalizadas.

4. Filtragem de Tarefas
O Gerenciador de Tarefas oferece opções de filtragem avançadas para que os usuários possam organizar suas tarefas com base em critérios específicos. É possível filtrar tarefas por data de vencimento, prioridade, concluídas ou não concluídas, entre outras opções.

5. Busca de Tarefas
Para localizar tarefas específicas em uma lista extensa, os usuários podem utilizar a função de busca. Isso permite a recuperação rápida e precisa de tarefas com base em palavras-chave, títulos ou descrições.

## Get Started

Como iniciar o projeto

```
git clone <https://github.com/LeticiaANunes/ListaDeTarefas.git>
```

```bash
npm install
```

```bash
npm start
```

## Bibliotecas Utilizadas

```yaml
"dependencies": {
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@mui/material": "^5.14.13",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/material-ui": "^0.21.12",
    "@types/node": "^16.18.58",
    "@types/react": "^18.2.28",
    "@types/react-dom": "^18.2.13",
    "@types/styled-components": "^5.1.28",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.47.0",
    "react-scripts": "5.0.1",
    "styled-components": "^6.0.8",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  }
```

## Lógica Estrutural

O projeto adota uma arquitetura de componentes com baixo acoplamento e alta coesão, estruturada da seguinte forma:

- Em src > components foram colocados os components de input, listagem de tarefas, modal, de forma a facilitar o escalonamento e manutenção da aplicação.

- Em src > mock foi criado um arquivo que contêm uma variável simulando o banco de dados.

- Em src > page foi centralizada a página inicial da aplicação

- Em src > services foram centralizados os repositories que manipulam os valores do respectivo mock


## Lógica 

- Em src > components > input > index o usuário insere o valor via input. Ao submeter o formulário, é chamado InsertTask, passando o valor inserido no input. No dicionário, foi incluído o id, para servir como indexador, de forma a facilitar a identificação da respectiva tarefa e sua eventual manipulação. O id, por sua vez, foi definido baseado no tamanho da array, agregando + 1.

- Para listagem e filtro foi utilizado o método filter, includes e map. Em filter e includes, é repassado como referência o valor que é inserido pelo usuário no input "Pesquisar", estado esse alterado pelo hook useState. O valor de input foi alterado para minúsculo utilizando o método toLowerCase(), de forma a localizar a respectiva tarefa, removendo limitações do tipo "case sensitive". Portanto, map do respectivo index é feito caso includes retorne "True".

- Ao clicar no respectivo checkbox, é chamado, utilizando onChange a função que altera o estilo da fonte, considerando o id do elemento na árvore DOM. O evento repassado é o próprio evento de marcação do component

- src > components > input > editTask é chamado quando o usuário clica no botão "Editar". Ao clicar no botão, o estado "openModal" é alterado para verdadeiro, abrindo o modal e puxando o atributo task no objeto repassado como props para o component. Ao editar o campo input da edição, o valor do respectivo é alterado utilizando o hook useState. Ao submeter, o service editTask é chamado, sendo passado para este o valor do objeto, tendo como referência o próprio id. Considerando o id é basedo em length + 1 e que index inicia-se em 0, a respectiva função de atualização, para definir qual dicionário será alterado, recupera o valor do próprio id e subtrai 1, localizando, portanto, o valor do respectivo objeto na array. Após isso, o component é atualizado e renderizado.


