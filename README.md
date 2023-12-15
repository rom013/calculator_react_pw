# Visão Geral

Este repositório contém um projeto de calculadora desenvolvido em React, como parte de uma atividade da disciplina de Programação Web.

## Guia de Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/rom013/calculator_react_pw.git
   ```

2. Acesse o diretório local do repositório:
   ```bash
   cd calculator_react_pw
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```
4. Instale o json-server globalmente:
   ```bash
   npm install -g json-server
   ```

5. Inicie a API com JSON Server:
   ```bash
   json-server --watch db/history.json
   ```

6. Execute o projeto:
   ```bash
   npm run dev
   ```

- O projeto estará disponível na URL: http://localhost:5175
- O servidor estará disponível na URL: http://localhost:3000

# API
**Retorna todos os itens**
```http
  GET /history
```

**Retorna um registro através do seu ID**
```http
  GET /history/<ID>
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `ID` | `string` | ID do registro |

# Autores

- [@rom013](https://github.com/rom013)
- [@Fernando-Fernandes05](https://github.com/Fernando-Fernandes05)
- [@LuanaAlcantara]()
