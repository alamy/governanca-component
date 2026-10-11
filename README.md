# 🏛️ Governança de Componentes e UI Isolada (Angular & Storybook)

> *"Sem governança, o código de front-end entra em colapso escalar."*[cite: 3]

Bem-vindos ao laboratório prático de arquitetura e escalabilidade de interfaces! Este repositório foi estruturado como um guia vivo para entender como combatemos o caos no front-end moderno através da **Governança de Componentes** e ambientes de UI isolados.

---

## 🧭 Por que documentar e isolar componentes?

No desenvolvimento de software tradicional, é comum cairmos em armadilhas que degradam a manutenibilidade do sistema à medida que ele cresce:
* **Código Duplicado:** O mesmo botão ou componente de card acaba copiado e adaptado em dezenas de arquivos diferentes[cite: 3].
* **Acoplamento Pesado:** Regras de negócio, lógica de rotas e chamadas de API ficam emaranhadas com os estilos visuais, impedindo o reaproveitamento.
* **Documentação Morta:** Padrões visuais e decisões de design ficam esquecidos em arquivos estáticos ou desatualizados[cite: 3].

A solução arquitetural para isso é o uso de **Ambientes de UI Isolados** (como o **Storybook**, presente neste projeto). Desenvolver componentes de forma isolada significa construí-los, testá-los e documentá-los fora da lógica pesada da aplicação principal[cite: 4]. Isso garante:
1. **Única Fonte de Verdade Visual:** Uma ponte transparente e viva entre o Design e o Código[cite: 4, 7].
2. **Prevenção de Regressões:** Fim das alterações visuais que quebram layouts silenciosamente em outras telas[cite: 7].
3. **Propagação Universal:** Alterar o estado ou a propriedade de um componente reflete imediatamente no catálogo vivo[cite: 7].

---

## 🛠️ O Ecossistema Técnico

Analisando o nosso `package.json`, esta aplicação foi construída com tecnologias de ponta para garantir performance, tipagem estática rigorosa, testes robustos e documentação automatizada:

* **Core & Framework:** 
  * **Angular 21** (`@angular/core`, `@angular/common`, `@angular/router`): Framework principal para estruturação baseada em componentes reativos.
  * **Angular SSR** (`@angular/ssr`, `express`): Suporte a Server-Side Rendering para otimização de performance e SEO.
* **Isolamento e Documentação de UI:**
  * **Storybook 10** (`storybook`, `@storybook/angular`): Ambiente de desenvolvimento isolado para criar e catalogar os componentes de UI com add-ons de acessibilidade (`@storybook/addon-a11y`) e documentação (`@storybook/addon-docs`).
  * **Compodoc** (`@compodoc/compodoc`): Ferramenta de documentação para gerar a arquitetura técnica baseada no código Angular.
* **Qualidade, Testes e Ferramentas:**
  * **Vitest & JSDOM** (`vitest`, `jsdom`): Motor de testes unitários rápido e moderno.
  * **TypeScript 5.9** (`typescript`): Segurança de tipos em tempo de compilação.
  * **Prettier** (`prettier`): Padronização e formatação de código limpo.

---

## 🚀 Como Executar o Projeto

Certifique-se de utilizar a versão do gerenciador de pacotes especificada (`npm@11.6.2`).

### 1. Instalação das Dependências
```bash
npm install
