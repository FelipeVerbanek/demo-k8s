# Use uma imagem base oficial do Node.js
FROM node:14-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta que o app vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
