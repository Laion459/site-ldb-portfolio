# 📸 INSTRUÇÕES PARA IMAGENS DO PORTFÓLIO

## 🗂️ **ESTRUTURA DE PASTAS CRIADA:**

```
public/
├── images/
│   ├── profile/           # ✅ CRIADA - Sua foto e avatar
│   ├── logo/              # ✅ CRIADA - Logos
│   ├── projects/          # ✅ CRIADA - Imagens dos projetos
│   └── icons/             # ✅ CRIADA - Ícones customizados
```

## 📱 **IMAGENS NECESSÁRIAS:**

### **1. FOTO DO PERFIL (OBRIGATÓRIA)**
- **Arquivo**: `public/images/profile/leonardo.jpg`
- **Dimensões**: 400x400px (quadrada)
- **Formato**: JPG ou PNG
- **Uso**: Foto principal na seção "Sobre Mim"
- **Qualidade**: Alta resolução, profissional

### **2. AVATAR (OPCIONAL)**
- **Arquivo**: `public/images/profile/avatar.jpg`
- **Dimensões**: 100x100px (quadrada)
- **Formato**: JPG ou PNG
- **Uso**: Avatar menor para navbar (se implementado)

### **3. LOGOS (OBRIGATÓRIOS)**
- **Logo Claro**: `public/images/logo/logo.svg`
- **Logo Escuro**: `public/images/logo/logo-dark.svg`
- **Dimensões**: Altura 32px (largura proporcional)
- **Formato**: SVG (recomendado) ou PNG
- **Uso**: Navbar (muda conforme o tema)

### **4. IMAGENS DOS PROJETOS (OBRIGATÓRIAS)**
- **E-commerce**: `public/images/projects/ecommerce.jpg`
- **API Pagamentos**: `public/images/projects/payment-api.jpg`
- **Analytics**: `public/images/projects/analytics.jpg`
- **Auth System**: `public/images/projects/auth-system.jpg`
- **Microservices**: `public/images/projects/microservices.jpg`
- **Cache System**: `public/images/projects/cache-system.jpg`
- **Dimensões**: 600x400px (proporção 3:2)
- **Formato**: JPG ou PNG
- **Qualidade**: Boa, mas otimizada para web

### **5. AVATARES DOS DEPOIMENTOS (OPCIONAIS)**
- **João Silva**: `public/images/profile/joao-silva.jpg`
- **Maria Santos**: `public/images/profile/maria-santos.jpg`
- **Carlos Oliveira**: `public/images/profile/carlos-oliveira.jpg`
- **Ana Costa**: `public/images/profile/ana-costa.jpg`
- **Dimensões**: 100x100px (quadrada)
- **Formato**: JPG ou PNG

### **6. FAVICONS E ÍCONES (OBRIGATÓRIOS)**
- **Favicon**: `public/favicon.ico`
- **Apple Touch**: `public/apple-touch-icon.png` (180x180px)
- **Android Chrome 192**: `public/android-chrome-192x192.png`
- **Android Chrome 512**: `public/android-chrome-512x512.png`
- **Open Graph**: `public/og-image.jpg` (1200x630px)

## 🎯 **COMO APLICAR:**

### **1. COLOCAR AS IMAGENS:**
```bash
# Copie suas imagens para as pastas correspondentes
cp sua-foto.jpg public/images/profile/leonardo.jpg
cp seu-logo.svg public/images/logo/logo.svg
cp seu-logo-escuro.svg public/images/logo/logo-dark.svg
# ... e assim por diante
```

### **2. VERIFICAR SE ESTÃO FUNCIONANDO:**
```bash
npm run dev
# Abra http://localhost:3000 e verifique se as imagens aparecem
```

### **3. TESTAR OS FALLBACKS:**
- Se uma imagem não carregar, o sistema mostrará um placeholder
- Teste removendo temporariamente uma imagem para ver o fallback

## 🔧 **CONFIGURAÇÕES JÁ IMPLEMENTADAS:**

✅ **Constants**: Imagens configuradas em `src/utils/constants.ts`
✅ **AboutSection**: Sua foto principal configurada
✅ **Navbar**: Logo configurado com fallback para texto
✅ **ProjectsSection**: Imagens dos projetos configuradas
✅ **Testimonials**: Avatares configurados
✅ **Fallbacks**: Sistema de fallback implementado

## 📝 **RECOMENDAÇÕES:**

### **Para Fotos:**
- Use fotos profissionais e de alta qualidade
- Mantenha proporções consistentes
- Otimize para web (não muito pesadas)

### **Para Logos:**
- Use formato SVG quando possível
- Mantenha versões para tema claro e escuro
- Teste em diferentes tamanhos

### **Para Projetos:**
- Use screenshots reais dos projetos
- Mantenha proporção 3:2 (600x400px)
- Mostre a funcionalidade principal

## 🚀 **PRÓXIMOS PASSOS:**

1. **Adicione suas imagens** nas pastas criadas
2. **Teste o site** para ver se tudo está funcionando
3. **Ajuste as dimensões** se necessário
4. **Otimize as imagens** para melhor performance

## ❓ **DÚVIDAS?**

Se precisar de ajuda com:
- Otimização de imagens
- Criação de logos
- Configurações adicionais
- Problemas de carregamento

Basta perguntar! 🎯 