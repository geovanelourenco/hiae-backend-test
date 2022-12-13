# hiae-backend-test

# Live Code

## Desafios

### 1. Crie uma função que receba um array de strings e retorne um array com as strings em ordem aleatória.

js
const fruits = ["Abacaxi", "Banana", "Pera", "Manga", "Laranja"];

### 2. Remova itens de um array de números repetidos e o retorne em ordem decrescente.

js
const numbers = [1, 2, 3, 2, 1, 2, 4, 6, 5, 1, 3, 2, 9, 8, 1, 2, 3, 4];

### 3. Abaixo existe dados de perguntas e alternativas de um quiz, estruture os de forma coerente para salvamento em um banco de dados, e discurse como você se seria um banco relacional ou não, e por quais motivos.

- Qual o verdadeiro nome do Homem de Ferro? Peter Parker, Tony Stark, Robert Bruce Banner, Clark Kent
- Em que país nasceu o ator Tom Holland? Estados Unidos, Canadá, Reino Unido, Austrália
- Qual desses super-heróis não possui um poder sobre-humano? Homem-aranha, Lanterna Verde, Batman, Thor

### 4. Quais statusCode você utilizaria nos returns desse fluxo? Discurse.

js
const userExists = await user.find({​​​​​​​ where: name }​​​​​​​);

if (userExists) {​​​​​​​
return response.statusCode(x).json(user);
}​​​​​​​

const newUser = await user.create({​​​​​​​ data: {​​​​​​​ name }​​​​​​​ }​​​​​​​);

if (!newUser) {​​​​​​​
return response.statusCode(y).json({​​​​​​​ error: "create user" }​​​​​​​);
}​​​​​​​

return response.statusCode(z).json(user);
