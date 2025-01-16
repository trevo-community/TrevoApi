
# 📱 Como Rodar Seu Projeto no Termux

Este guia ensina como configurar e executar seu projeto Node.js diretamente no **Termux**.

---

## ✅ Pré-requisitos

- Aplicativo **Termux** instalado ([Baixar aqui](https://f-droid.org/packages/com.termux/))  
- Permissão de armazenamento concedida ao Termux  
- Conexão com a internet

---

## 🚀 Passo a Passo

### 1️⃣ Configuração Inicial

Execute os comandos abaixo no Termux para configurar o ambiente:

```bash
termux-setup-storage  # Concede permissão de armazenamento
pkg update -y         # Atualiza a lista de pacotes
pkg upgrade -y        # Atualiza os pacotes instalados
pkg install git -y    # Instala o Git
pkg install nodejs -y # Instala o Node.js
pkg install npm -y    # Instala o NPM
pkg install yarn -y   # Instala o Yarn
```

---

### 2️⃣ Clonar o Projeto

Clone o repositório do GitHub com o comando:

```bash
cd /sdcard/
git clone https://github.com/trevo-community/TrevoApi.git
cd TrevoApi
```

---

### 3️⃣ Instalar Dependências

Dentro da pasta do projeto, instale as dependências:

```bash
yarn install  
# Ou
npm install
```

---

### 4️⃣ Iniciar o Projeto

Agora, basta iniciar o projeto com o comando:

```bash
npm start
```

Pronto! O projeto estará rodando e pronto para uso.

---

### 💡 Dicas Extras

- Se o projeto estiver no armazenamento interno, use:

```bash
cd /sdcard/TrevoApi
```

- Para atualizar o projeto:

```bash
git pull
```

---

Feito por @CLOVERMYT
