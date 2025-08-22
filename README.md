# 🚀 LDB - Portfolio Profissional

[![CI/CD Pipeline](https://github.com/Laion459/LDB/actions/workflows/ci.yml/badge.svg)](https://github.com/Laion459/LDB/actions/workflows/ci.yml)
[![Code Coverage](https://img.shields.io/badge/coverage-80%25-brightgreen)](https://github.com/Laion459/LDB)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-blue)](https://reactjs.org/)

## 🎯 **Sobre o Projeto**

Portfolio profissional de **Leonardo D. Borges**, desenvolvedor Full Stack e Product Manager especializado em Laravel, React e PHP. Este projeto demonstra expertise em desenvolvimento web moderno, arquitetura escalável e boas práticas de engenharia de software.

## ✨ **Características Principais**

### 🎨 **Design System Avançado**

- **12 variantes de botões** com animações e efeitos visuais
- **Sistema de cores responsivo** com suporte a tema claro/escuro
- **Animações fluidas** com Framer Motion
- **Partículas interativas** e morphing shapes
- **Micro-interações** e efeitos de hover

### 🏗️ **Arquitetura Robusta**

- **Store global** com Zustand + Immer
- **Hooks customizados** para responsividade e tema
- **Validação de dados** com Zod
- **Componentização modular** e reutilizável
- **TypeScript strict** com tipagem completa

### 📱 **Performance e Responsividade**

- **Mobile-first approach** com breakpoints inteligentes
- **Lazy loading** e otimizações de imagem
- **Bundle analyzer** integrado
- **Lighthouse CI** para métricas de performance
- **PWA ready** com manifest e service workers

### 🧪 **Qualidade e Testes**

- **Cobertura de testes** de 80%+
- **Testes unitários** com Jest
- **Testes E2E** com Playwright
- **Storybook** para documentação de componentes
- **ESLint + Prettier** para qualidade de código

## 🚀 **Stack Tecnológica**

### **Frontend**

- **Next.js 15.5** - App Router e Turbopack
- **React 19.1** - Versão cutting-edge
- **TypeScript 5** - Tipagem estática robusta
- **Tailwind CSS 4** - Framework CSS moderno
- **Framer Motion** - Animações performáticas

### **Estado e Validação**

- **Zustand** - Gerenciamento de estado global
- **Immer** - Imutabilidade eficiente
- **Zod** - Validação de schemas
- **React Hook Form** - Gerenciamento de formulários

### **Testes e Qualidade**

- **Jest** - Framework de testes unitários
- **Playwright** - Testes E2E
- **Storybook** - Documentação de componentes
- **ESLint + Prettier** - Linting e formatação

### **DevOps e Deploy**

- **GitHub Actions** - CI/CD pipeline completo
- **Vercel** - Deploy automático
- **Husky** - Git hooks
- **Commitlint** - Padronização de commits

## 📁 **Estrutura do Projeto**

```
src/
├── app/                    # App Router do Next.js
├── components/            # Componentes reutilizáveis
│   ├── layout/           # Componentes de layout
│   ├── projetos/         # Projetos específicos
│   ├── sections/         # Seções da página principal
│   └── ui/              # Componentes base
├── store/                # Store global (Zustand)
├── hooks/                # Custom hooks
├── types/                # Definições TypeScript
├── utils/                # Utilitários e validação
└── data/                 # Dados estáticos
```

## 🚀 **Como Executar**

### **Pré-requisitos**

- Node.js 18+
- npm 8+

### **Instalação**

```bash
# Clone o repositório
git clone https://github.com/Laion459/LDB.git
cd LDB

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
```

### **Desenvolvimento**

```bash
# Modo desenvolvimento
npm run dev

# Com análise de bundle
npm run dev:analyze

# Limpeza e desenvolvimento
npm run dev:clean
```

### **Build e Deploy**

```bash
# Build de produção
npm run build

# Análise de bundle
npm run analyze

# Deploy para staging
npm run deploy:staging

# Deploy para produção
npm run deploy:production
```

### **Testes**

```bash
# Testes unitários
npm run test

# Testes com coverage
npm run test:coverage

# Testes E2E
npm run test:e2e

# Testes de performance
npm run lighthouse
```

### **Qualidade de Código**

```bash
# Verificação completa
npm run quality:check

# Correção automática
npm run quality:fix

# Auditoria de segurança
npm run security:audit
```

## 🎯 **Funcionalidades Principais**

### **🎨 Sistema de Temas**

- **Tema claro/escuro** com persistência
- **Preferências do sistema** automáticas
- **Transições suaves** entre temas
- **Tema baseado em horário** e localização

### **📱 Responsividade Inteligente**

- **Breakpoints automáticos** com hooks customizados
- **Classes responsivas** dinâmicas
- **Orientação de tela** detectada automaticamente
- **Preferências de movimento** respeitadas

### **🔍 Sistema de Busca e Filtros**

- **Busca em tempo real** com debounce
- **Filtros avançados** por categoria e tecnologia
- **Ordenação flexível** por relevância, data, nome
- **Estado persistente** de filtros

### **📊 Analytics e Monitoramento**

- **Tracking de páginas** e interações
- **Métricas de performance** com Lighthouse
- **Análise de bundle** integrada
- **Relatórios de qualidade** automatizados

## 🚀 **CI/CD Pipeline**

### **🔍 Qualidade de Código**

- **ESLint** - Análise estática
- **Prettier** - Formatação automática
- **TypeScript** - Verificação de tipos
- **Husky** - Pre-commit hooks

### **🧪 Testes Automatizados**

- **Testes unitários** em múltiplas versões do Node
- **Testes E2E** com Playwright
- **Cobertura de código** com relatórios
- **Testes de performance** com Lighthouse

### **🏗️ Build e Deploy**

- **Build otimizado** com Next.js
- **Análise de bundle** automática
- **Deploy para staging** (branch develop)
- **Deploy para produção** (branch main)

### **🔒 Segurança e Performance**

- **Auditoria de segurança** com npm audit
- **Scan de vulnerabilidades** com Snyk
- **Métricas de performance** com Lighthouse CI
- **Notificações** para Slack/Discord

## 📊 **Métricas de Qualidade**

| Métrica                      | Valor | Status |
| ---------------------------- | ----- | ------ |
| **Cobertura de Testes**      | 80%+  | ✅     |
| **Performance (Lighthouse)** | 90+   | ✅     |
| **Acessibilidade**           | 95+   | ✅     |
| **SEO**                      | 90+   | ✅     |
| **Boas Práticas**            | 90+   | ✅     |

## 🎯 **Roadmap**

### **🚀 Próximas Versões**

- [ ] **PWA completa** com service workers
- [ ] **Internacionalização** (i18n) multi-idioma
- [ ] **CMS headless** para conteúdo dinâmico
- [ ] **Blog integrado** com MDX
- [ ] **Dashboard admin** para projetos

### **🔧 Melhorias Técnicas**

- [ ] **Micro-frontends** com Module Federation
- [ ] **Edge functions** para APIs
- [ ] **GraphQL** com Apollo Client
- [ ] **Real-time** com WebSockets
- [ ] **Machine Learning** para recomendações

## 🤝 **Contribuição**

### **Como Contribuir**

1. **Fork** o projeto
2. **Crie** uma branch para sua feature
3. **Commit** suas mudanças seguindo o padrão
4. **Push** para a branch
5. **Abra** um Pull Request

### **Padrões de Commit**

```bash
feat: adiciona nova funcionalidade
fix: corrige bug
docs: atualiza documentação
style: formatação de código
refactor: refatoração de código
test: adiciona ou corrige testes
chore: tarefas de manutenção
```

## 📄 **Licença**

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 **Contato**

- **LinkedIn**: [Leonardo D. Borges](https://www.linkedin.com/in/borgesleonardod/)
- **GitHub**: [@Laion459](https://github.com/Laion459)
- **Email**: laion459@gmail.com
- **WhatsApp**: +55 51 99909-2387

## 🙏 **Agradecimentos**

- **Next.js Team** pela excelente framework
- **Vercel** pela plataforma de deploy
- **Tailwind CSS** pelo sistema de design
- **Framer Motion** pelas animações
- **Zustand** pelo gerenciamento de estado

---

**⭐ Se este projeto te ajudou, considere dar uma estrela!**
