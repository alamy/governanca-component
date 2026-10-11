# Governança de Componentes

Este repositório é um espaço de estudo para organizar uma aplicação Angular e desenvolver componentes de interface de forma consistente, documentada e reutilizável.

## 🧭 Por que governar os componentes?

À medida que uma aplicação cresce, diferentes páginas podem acabar recriando os mesmos botões, cabeçalhos e padrões visuais. Sem uma estratégia comum, isso tende a gerar:

- **Código duplicado:** cada cópia precisa ser corrigida e evoluída separadamente.
- **Acoplamento pesado:** páginas conhecem detalhes internos de componentes que deveriam ser independentes.
- **Documentação morta:** especificações e capturas de tela ficam desatualizadas em relação ao código que está em produção.
- **Regressões de CSS:** uma alteração feita para resolver uma tela pode afetar outras sem que o impacto fique evidente.

Uma biblioteca de componentes bem governada reduz esses problemas ao definir componentes reutilizáveis, contratos claros e uma forma consistente de validar sua aparência.

### 🎨 Storybook como ambiente isolado de UI

O Storybook permite desenvolver, visualizar e documentar componentes fora do fluxo completo da aplicação. Cada componente pode ser exibido em diferentes estados com dados controlados, sem depender de uma página específica, de uma API ou de toda a navegação.

Neste projeto, o Storybook é a **Única Fonte de Verdade Visual** para os componentes compartilhados: as histórias demonstram os estados e a aparência esperados, e a aplicação Angular consome esses mesmos componentes. Essa prática cria uma ponte transparente entre design e código, facilita a revisão visual e ajuda a identificar regressões de CSS antes que se espalhem pelas páginas.

> Uma história deve representar um estado útil e reproduzível do componente. Mudanças visuais importantes devem ser verificadas no Storybook e também nas páginas que usam o componente.

## 📁 Organização atual do projeto

```text
src/
├── app/
│   ├── pages/
│   │   ├── index/          # Página inicial
│   │   └── formulario/     # Estrutura inicial da página de formulário
│   ├── app.routes.ts       # Rotas da aplicação
│   └── ...                 # Configuração e layout principal
└── stories/
    ├── button.component.ts
    ├── header.component.ts
    ├── page.component.ts
    └── *.stories.ts        # Histórias dos componentes no Storybook
```

A aplicação possui as rotas `/index` e `/formulario`. A página de formulário é apenas uma estrutura inicial; os campos e o comportamento do formulário ainda não foram implementados.

## 🅰️ Comandos essenciais do Angular CLI

Execute os comandos na pasta `app`, onde está o `angular.json`. Se o Angular CLI não estiver disponível globalmente, use `npx ng` no lugar de `ng`.

### Iniciar o servidor de desenvolvimento

```bash
ng serve
```

Abre a aplicação em `http://localhost:4200/` e recompila os arquivos quando há alterações.

### Gerar código

```bash
# Componente
ng generate component caminho/nome-do-componente

# Serviço
ng generate service caminho/nome-do-servico

# Diretiva ou pipe
ng generate directive caminho/nome-da-diretiva
ng generate pipe caminho/nome-do-pipe

# Consultar todos os schematics disponíveis
ng generate --help
```

Antes de gerar um componente, identifique se ele pertence a uma página da aplicação ou se deve ser reutilizável. Componentes visuais compartilhados podem ter histórias próprias no Storybook.

### Compilar a aplicação

```bash
ng build
```

Gera os artefatos de produção em `dist/`. Para recompilar automaticamente durante o desenvolvimento:

```bash
ng build --watch --configuration development
```

### Executar testes unitários

```bash
ng test
```

O projeto usa **Vitest** como runner de testes unitários. Os testes ajudam a verificar comportamento e evitar regressões ao modificar componentes ou rotas.

### Testes end-to-end

O Angular CLI não configura um framework de testes end-to-end por padrão. Não há atualmente um comando `ng e2e` configurado neste projeto; para usar esse tipo de teste, primeiro é necessário instalar e configurar uma ferramenta apropriada.

## 📚 Storybook com Angular

### Pré-requisitos

- **Angular 18 ou superior** para usar a integração moderna do Storybook com Angular.
- **Webpack 5** como bundler suportado pela integração do `@storybook/angular`.
- Dependências do projeto instaladas com `npm install`.

Este workspace usa Angular 21 e o builder `@storybook/angular`. Os comandos abaixo são os alvos configurados no `angular.json`.

### Executar o Storybook

```bash
ng run app:storybook
```

Inicia o ambiente interativo de desenvolvimento das histórias dos componentes. Abra no navegador o endereço local informado pelo CLI.

### Gerar build estático do Storybook

```bash
ng run app:build-storybook
```

Gera uma versão estática do catálogo em `storybook-static/`, adequada para publicação como documentação visual.

Os mesmos alvos também estão disponíveis como scripts npm:

```bash
npm run storybook
npm run build-storybook
```

### 📝 Documentar componentes com Compodoc

O projeto integra o [Compodoc](https://compodoc.app/) ao builder do Storybook. O Compodoc analisa o código e os comentários JSDoc dos componentes Angular e exporta metadados em JSON. O Storybook pode usar essa documentação para identificar propriedades e eventos — como `@Input` e `@Output` — e exibi-los como controles e informações interativas na documentação.

Nos alvos `storybook` e `build-storybook` do `angular.json`, a configuração relevante é:

```json
{
  "compodoc": true,
  "compodocArgs": ["-e", "json", "-d", "."]
}
```

- `"compodoc": true` ativa a geração da documentação pelo Compodoc durante a execução do Storybook.
- `"-e", "json"` define o formato de saída como JSON.
- `"-d", "."` indica o diretório atual como destino dos arquivos gerados.

Para que a extração seja útil, mantenha comentários JSDoc próximos às propriedades públicas e documente claramente o propósito de cada entrada e evento. Por exemplo:

```ts
/**
 * Texto apresentado no botão.
 */
@Input() label = '';

/**
 * Emitido quando o usuário ativa o botão.
 */
@Output() onClick = new EventEmitter<Event>();
```

### 🔍 Fluxo recomendado para evoluir um componente

1. Defina a responsabilidade do componente e suas entradas e eventos públicos.
2. Implemente o componente de forma independente de uma página específica.
3. Registre histórias que demonstrem seus estados relevantes.
4. Documente propriedades e eventos com JSDoc.
5. Confira o resultado visual e os controles no Storybook.
6. Use o componente nas páginas da aplicação e execute os testes e o build.

## 🔗 Recursos adicionais

- [Angular CLI: visão geral e referência](https://angular.dev/tools/cli)
- [Storybook para Angular](https://storybook.js.org/docs/get-started/frameworks/angular)
- [Documentação do Compodoc](https://compodoc.app/)
- [Vitest](https://vitest.dev/)
