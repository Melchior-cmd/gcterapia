# GCTERAPIA - Giovanna Costa 💆

Uma landing page moderna especializada em massoterapia e fisioterapia, desenvolvida com as mais recentes tecnologias web para oferecer a melhor experiência aos clientes.

## 📋 Sobre o Projeto

**GCTERAPIA** é um site elegante e funcional que apresenta os serviços de massoterapia e fisioterapia da terapeuta Giovanna Costa. A plataforma oferece uma experiência fluida com apresentação de serviços, galeria de imagens, informações de contato e integração com sistemas de pagamento.

### ✨ Principais Funcionalidades

- 🎯 **Seção Hero** - Apresentação impactante com call-to-action
- 💼 **Catálogo de Serviços** - Exibição completa de serviços com preços e descrições
- 📸 **Galeria de Imagens** - Visualização otimizada com imagens responsivas
- 📝 **Formulário de Contato** - Sistema de contato direto com a terapeuta
- 💳 **Integração de Pagamentos** - Informações sobre modalidades de pagamento
- 🌙 **Modo Escuro** - Suporte completo a tema claro/escuro
- 📱 **Design Responsivo** - Interface otimizada para todos os dispositivos
- 🎨 **Navegação Intuitiva** - Menu fluido com scroll suave entre seções

## 🛠️ Tecnologias Utilizadas

### Frontend

- **[Next.js 16](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca para construção da interface
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis e customizáveis
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones modernos

### Temas & Estilos

- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas (claro/escuro)
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Merge inteligente de classes Tailwind
- **[Class Variance Authority](https://cva.style/)** - Gerenciamento de variantes de componentes

### UI/UX

- **[Sonner](https://sonner.emilkowal.ski/)** - Notificações toast elegantes
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carrossel responsivo e acessível

### Análise & Performance

- **[Vercel Analytics](https://vercel.com/analytics)** - Análise de performance e uso

## 🏗️ Estrutura do Projeto

```
.
├── app/                          # App Router do Next.js
│   ├── page.tsx                 # Página principal
│   ├── layout.tsx               # Layout raiz
│   └── globals.css              # Estilos globais
├── components/                   # Componentes React
│   ├── about.tsx                # Seção sobre
│   ├── contact.tsx              # Seção de contato
│   ├── footer.tsx               # Rodapé
│   ├── hero.tsx                 # Seção hero
│   ├── navbar.tsx               # Barra de navegação
│   ├── payment.tsx              # Seção de pagamentos
│   ├── scroll-to-top-button.tsx # Botão para topo
│   ├── service-card.tsx         # Card de serviço
│   ├── services.tsx             # Seção de serviços
│   ├── theme-provider.tsx       # Provider de temas
│   └── ui/                      # Componentes de interface
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── ... (outros componentes)
├── hooks/                        # Custom hooks
│   ├── use-mobile.ts            # Detecta viewport mobile
│   └── use-toast.ts             # Hook para notificações
├── lib/                          # Utilitários
│   └── utils.ts                 # Funções auxiliares
├── public/                       # Arquivos estáticos
│   └── images/                  # Imagens do projeto
├── styles/                       # Estilos adicionais
│   └── globals.css
├── package.json
└── tsconfig.json
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/gcterapia.git
cd gcterapia
```

### 2. Instale as Dependências

```bash
npm install
# ou
yarn install
```

### 3. Execute o Projeto

```bash
# Modo de desenvolvimento
npm run dev

# Build para produção
npm run build
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## 📁 Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria a build de produção
npm start        # Inicia o servidor de produção
npm run lint     # Executa o linting do código
```

## 🎨 Configuração de Temas

O projeto suporta modo claro e escuro automaticamente:

- Detecta a preferência do sistema (`prefers-color-scheme`)
- Permite alternância manual de tema via `next-themes`
- Persiste a preferência do usuário no localStorage
- Usa ícones diferentes para cada tema (favicon responsivo)

## 📸 Otimizações de Imagem

Todas as imagens utilizam o componente `<Image>` otimizado do Next.js com:

- Lazy loading automático
- Otimização de tamanho
- Suporte a múltiplos formatos (WebP, JPEG)
- Prop `sizes` configurada para carregamento responsivo

## 🔍 SEO & Metadados

- Metadados configurados em `layout.tsx`
- Title e description otimizados para buscadores
- Favicon responsivo com suporte a modo escuro/claro
- Estrutura semântica HTML apropriada

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👩‍💼 Sobre Giovanna Costa

Terapeuta especializada em massoterapia e fisioterapia, oferecendo atendimento humanizado com foco no bem-estar físico e emocional de seus clientes.

---

<p align="center">
  Desenvolvido com ❤️ para GCTERAPIA
</p>
