# AppUnipar
Angular version 12.0.0.

Projeto iniciado no curso de Pós Graduação Unipar/Toledo-PR

## Para executar esse projeto localmente siga os passos, Instalar dependências locais atravez no NPM
Abrir o terminal e executar o comando

Run `npm install`


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.


## Passos realizados para iniciar o projeto
Verificar se o Node está instalado na maquina, para isso vamos utilizar o NVM para realizar o download e setar a nossa versão no Node
Run `nvm install 14.15`

Run `nvm list`

Run `nvm use 14.15.0`

Run `npm -v`

Confere se a versão que retornou é a correta.

# Angular
Run `npm install -g @angular/cli`

Run `ng version`


## Inicialização do projeto em aula
Run `ng new app-unipar`

Run `cd app-unipar`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Instalação e configuração da biblioteca Bootstrap
Run `npm install bootstrap --save`

Run `npm install @ng-bootstrap/ng-bootstrap --save`

src/app/app.module.ts

Adiciona o import do módulo do bootstrap no módulo principal da aplicação

`import { NgbModule } from '@ng-bootstrap/ng-bootstrap';`

...

`imports: [ ..., NgbModule ]`

src/styles.css

`@import "~bootstrap/dist/css/bootstrap.css";`

## Instalação e configuração da biblioteca ngx-toastr
Biblioteca para alertas, seguir os passos para instalação e configuração

https://www.npmjs.com/package/ngx-toastr
