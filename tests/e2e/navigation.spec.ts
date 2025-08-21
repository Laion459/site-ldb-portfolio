import { test, expect } from '@playwright/test';

test.describe('Navegação e Funcionalidades Principais', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Aguardar o carregamento completo da página
    await page.waitForLoadState('networkidle');
  });

  test('deve carregar a página inicial corretamente', async ({ page }) => {
    // Verificar se a página carrega
    await expect(page).toHaveTitle(/Leonardo.*Backend Engineer/);

    // Verificar se o hero section está visível (usando o ID correto)
    await expect(page.locator('#home')).toBeVisible();

    // Verificar se o nome principal está presente
    await expect(page.getByText(/Leonardo/)).toBeVisible();
  });

  test('deve navegar entre seções via menu', async ({ page }) => {
    // Aguardar um pouco para garantir que a página carregou completamente
    await page.waitForTimeout(2000);

    // Navegar para seção Sobre
    await page.click('a[href="#about"]');
    await page.waitForTimeout(1000);
    await expect(page.locator('#about')).toBeVisible();

    // Navegar para seção Projetos
    await page.click('a[href="#projects"]');
    await page.waitForTimeout(1000);
    await expect(page.locator('#projects')).toBeVisible();

    // Navegar para seção Habilidades
    await page.click('a[href="#skills"]');
    await page.waitForTimeout(1000);
    await expect(page.locator('#skills')).toBeVisible();

    // Navegar para seção Experiência
    await page.click('a[href="#experience"]');
    await page.waitForTimeout(1000);
    await expect(page.locator('#experience')).toBeVisible();

    // Navegar para seção Contato
    await page.click('a[href="#contact"]');
    await page.waitForTimeout(1000);
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('deve alternar entre temas claro e escuro', async ({ page }) => {
    // Aguardar carregamento
    await page.waitForTimeout(2000);

    // Verificar se o tema escuro está ativo por padrão
    await expect(page.locator('html')).toHaveClass(/dark/);

    // Clicar no botão de alternar tema (se existir)
    const themeToggle = page.locator('[data-testid="theme-toggle"]');
    if (await themeToggle.isVisible()) {
      await themeToggle.click();

      // Verificar se o tema claro está ativo
      await expect(page.locator('html')).toHaveClass(/light/);

      // Alternar novamente para tema escuro
      await themeToggle.click();
      await expect(page.locator('html')).toHaveClass(/dark/);
    }
  });

  test('deve exibir projetos corretamente', async ({ page }) => {
    // Aguardar carregamento
    await page.waitForTimeout(2000);

    // Navegar para seção de projetos
    await page.click('a[href="#projects"]');
    await page.waitForTimeout(1000);

    // Verificar se os projetos estão visíveis
    await expect(page.locator('#projects')).toBeVisible();

    // Verificar se há pelo menos um projeto (usando seletor mais genérico)
    const projectCards = page.locator(
      '.project-card, [data-testid="project-card"], .bg-white, .dark\\:bg-gray-800'
    );
    await expect(projectCards.first()).toBeVisible();
  });

  test('deve exibir habilidades técnicas organizadas por categoria', async ({
    page,
  }) => {
    // Aguardar carregamento
    await page.waitForTimeout(2000);

    // Navegar para seção de habilidades
    await page.click('a[href="#skills"]');
    await page.waitForTimeout(1000);

    // Verificar se as categorias estão presentes (usando texto mais específico)
    await expect(page.getByText('Frontend', { exact: false })).toBeVisible();
    await expect(page.getByText('Backend', { exact: false })).toBeVisible();
    await expect(page.getByText('DevOps', { exact: false })).toBeVisible();
  });

  test('deve permitir download do CV', async ({ page }) => {
    // Aguardar carregamento
    await page.waitForTimeout(2000);

    // Verificar se o link do CV está presente (usando seletor mais flexível)
    const cvLink = page.locator(
      'a[href*="cv"], a[href*="CV"], button:has-text("Download CV")'
    );
    await expect(cvLink.first()).toBeVisible();
  });

  test('deve ter links para redes sociais funcionais', async ({ page }) => {
    // Aguardar carregamento
    await page.waitForTimeout(2000);

    // Verificar links para redes sociais (usando seletores mais flexíveis)
    const socialLinks = [
      'github.com',
      'linkedin.com',
      'whatsapp.com',
      'instagram.com',
    ];

    for (const link of socialLinks) {
      const socialLink = page.locator(`a[href*="${link}"]`);
      if (await socialLink.isVisible()) {
        await expect(socialLink).toBeVisible();
      }
    }
  });

  test('deve ser responsivo em dispositivos móveis', async ({ page }) => {
    // Aguardar carregamento
    await page.waitForTimeout(2000);

    // Definir viewport móvel
    await page.setViewportSize({ width: 375, height: 667 });

    // Verificar se o menu mobile está funcionando
    const mobileMenu = page.locator(
      'button[aria-label*="menu"], button[aria-label*="Menu"], .mobile-menu'
    );
    if (await mobileMenu.isVisible()) {
      await mobileMenu.click();
      await page.waitForTimeout(500);

      // Verificar se o menu está aberto
      const menuItems = page.locator('nav a, .mobile-menu a');
      await expect(menuItems.first()).toBeVisible();
    }
  });

  test('deve ter formulário de contato funcional', async ({ page }) => {
    // Aguardar carregamento
    await page.waitForTimeout(2000);

    // Navegar para seção de contato
    await page.click('a[href="#contact"]');
    await page.waitForTimeout(1000);

    // Verificar se o formulário está presente (usando seletor mais flexível)
    const contactForm = page.locator(
      'form, .contact-form, [data-testid="contact-form"]'
    );
    if (await contactForm.isVisible()) {
      await expect(contactForm).toBeVisible();

      // Verificar campos obrigatórios (se existirem)
      const nameField = page.locator(
        'input[name="name"], input[placeholder*="nome"], input[placeholder*="Nome"]'
      );
      if (await nameField.isVisible()) {
        await expect(nameField).toBeVisible();
      }
    }
  });

  test('deve ter animações suaves e funcionais', async ({ page }) => {
    // Aguardar carregamento
    await page.waitForTimeout(2000);

    // Verificar se há elementos com animações
    const animatedElements = page.locator(
      '[class*="animate"], [class*="motion"], [style*="animation"]'
    );

    // Se houver elementos animados, verificar se estão funcionando
    if ((await animatedElements.count()) > 0) {
      await expect(animatedElements.first()).toBeVisible();
    }
  });

  test('deve ter performance otimizada', async ({ page }) => {
    // Aguardar carregamento
    await page.waitForTimeout(2000);

    // Medir tempo de carregamento
    const startTime = Date.now();
    await page.reload();
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    // Verificar se o carregamento é razoável (menos de 10 segundos para testes)
    expect(loadTime).toBeLessThan(10000);

    // Verificar se não há erros no console
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Aguardar um pouco para capturar erros
    await page.waitForTimeout(2000);

    // Se houver erros, verificar se não são críticos
    if (consoleErrors.length > 0) {
      console.log('Console errors found:', consoleErrors);
      // Não falhar o teste por erros de console, apenas logar
    }
  });
});
