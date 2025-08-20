# 🚀 Leonardo - Portfolio Profissional

Portfólio moderno e responsivo de Leonardo, Backend Engineer especializado em criar APIs escaláveis, seguras e de alta performance.

## ✨ Características

- **🎨 Design Moderno**: Interface limpa e profissional com animações suaves
- **📱 Totalmente Responsivo**: Mobile-first design que funciona perfeitamente em todos os dispositivos
- **🌙 Dark/Light Mode**: Tema automático com toggle manual
- **⚡ Performance Otimizada**: Lighthouse score acima de 90
- **🔒 TypeScript**: Tipagem forte para código robusto e manutenível
- **🎭 Framer Motion**: Animações fluidas e profissionais
- **📧 Formulário de Contato**: Integração com EmailJS para comunicação direta
- **📱 PWA Ready**: Instalável como aplicativo móvel

## 🛠️ Stack Tecnológica

### Frontend
- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca de interface do usuário
- **TypeScript 5** - Tipagem estática para JavaScript
- **Tailwind CSS 4** - Framework CSS utility-first

### Animações & UX
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos e consistentes
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas

### Qualidade & Performance
- **ESLint** - Linting com regras rigorosas
- **Turbopack** - Bundler rápido para desenvolvimento
- **PWA** - Progressive Web App capabilities

## 🏗️ Arquitetura

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── ui/             # Componentes base (Button, etc.)
│   ├── sections/       # Seções da página (Hero, About, etc.)
│   └── layout/         # Componentes de layout (Navbar, Footer)
├── hooks/              # Hooks customizados
├── utils/              # Utilitários e helpers
├── types/              # Definições TypeScript
├── data/               # Dados mockados para o portfólio
└── styles/             # Estilos globais e CSS
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/username/leonardo-portfolio.git
cd leonardo-portfolio

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Abra http://localhost:3000 no navegador
```

### Scripts Disponíveis
```bash
npm run dev          # Desenvolvimento com Turbopack
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
```

## 📱 Seções do Portfólio

### 1. **Hero Section**
- Nome em destaque com animações
- Título profissional impactante
- CTAs para projetos e contato
- Background animado com gradientes

### 2. **Sobre Mim**
- Foto/avatar profissional
- Descrição pessoal e profissional
- Estatísticas de experiência
- Links para CV e LinkedIn

### 3. **Projetos**
- Grid de projetos em destaque
- Cards interativos com hover effects
- Modal detalhado para cada projeto
- Informações sobre problema, solução e impacto

### 4. **Habilidades Técnicas**
- Organização por categoria (Frontend, Backend, DevOps)
- Níveis de proficiência (Avançado, Intermediário, Básico)
- Ícones e microanimações

### 5. **Experiência**
- Timeline vertical interativo
- Foco em impacto real e métricas
- Tecnologias utilizadas em cada posição

### 6. **Depoimentos**
- Prova social de clientes e colegas
- Sistema de avaliação visual
- Cards com informações profissionais

### 7. **Contato**
- Formulário com validação
- Informações de contato direto
- Links para redes sociais
- Indicador de disponibilidade

## 🎨 Sistema de Design

### Cores
- **Primária**: `#2563eb` (Azul)
- **Secundária**: `#64748b` (Cinza)
- **Acento**: `#8b5cf6` (Roxo)
- **Sucesso**: `#10b981` (Verde)
- **Aviso**: `#f59e0b` (Amarelo)
- **Erro**: `#ef4444` (Vermelho)

### Tipografia
- **Sans**: Geist Sans (Google Fonts)
- **Mono**: Geist Mono (Google Fonts)
- **Hierarquia**: H1 (6xl-8xl), H2 (4xl-5xl), H3 (2xl-3xl)

### Espaçamento
- **Base**: 4px (0.25rem)
- **Seções**: `py-20` (80px)
- **Componentes**: `p-8` (32px)
- **Gaps**: `gap-8` (32px)

## 📱 Responsividade

### Breakpoints
- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`

### Grid System
- **Mobile**: 1 coluna
- **Tablet**: 2 colunas
- **Desktop**: 3-4 colunas

## 🔧 Configuração

### Variáveis de Ambiente
```env
# EmailJS (opcional)
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template
```

### Personalização
1. **Dados**: Edite os arquivos em `src/data/`
2. **Cores**: Modifique as variáveis CSS em `src/app/globals.css`
3. **Animações**: Ajuste os presets em `src/utils/animations.ts`
4. **Metadados**: Atualize `src/app/layout.tsx`

## 📊 Performance

### Otimizações Implementadas
- **Lazy Loading**: Componentes carregados sob demanda
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Separação automática de bundles
- **CSS Purge**: Tailwind CSS otimizado
- **Font Loading**: Fontes com `display: swap`

### Métricas Alvo
- **Lighthouse Performance**: > 90
- **Lighthouse Accessibility**: > 95
- **Lighthouse Best Practices**: > 95
- **Lighthouse SEO**: > 95

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instale Vercel CLI
npm i -g vercel

# Deploy
vercel

# Ou conecte diretamente ao GitHub
```

### Outras Plataformas
- **Netlify**: Compatível com Next.js
- **AWS Amplify**: Suporte nativo
- **Docker**: Containerização disponível

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: leonardo@email.com
- **LinkedIn**: [linkedin.com/in/username](https://linkedin.com/in/username)
- **GitHub**: [github.com/username](https://github.com/username)

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework incrível
- [Tailwind CSS](https://tailwindcss.com/) - CSS utility-first
- [Framer Motion](https://www.framer.com/motion/) - Animações fluidas
- [Lucide](https://lucide.dev/) - Ícones consistentes

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
# site-ldb-portfolio
