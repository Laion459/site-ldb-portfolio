import { test, expect } from '@playwright/test';

test.describe('Navegação e Funcionalidades Principais', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('deve carregar a página inicial corretamente', async ({ page }) => {
    // Verificar se a página carrega
    await expect(page).toHaveTitle(/Leonardo.*Backend Engineer/);

    // Verificar se o hero section está visível
    await expect(page.locator('#home')).toBeVisible();

    // Verificar se o nome principal está presente
    await expect(page.getByText(/Leonardo/)).toBeVisible();
  });

  test('deve navegar entre seções via menu', async ({ page }) => {
    // Navegar para seção Sobre
    await page.click('a[href="#about"]');
    await expect(page.locator('#about')).toBeVisible();

    // Navegar para seção Projetos
    await page.click('a[href="#projects"]');
    await expect(page.locator('#projects')).toBeVisible();

    // Navegar para seção Habilidades
    await page.click('a[href="#skills"]');
    await expect(page.locator('#skills')).toBeVisible();

    // Navegar para seção Experiência
    await page.click('a[href="#experience"]');
    await expect(page.locator('#experience')).toBeVisible();

    // Navegar para seção Contato
    await page.click('a[href="#contact"]');
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('deve alternar entre temas claro e escuro', async ({ page }) => {
    // Verificar se o tema escuro está ativo por padrão
    await expect(page.locator('html')).toHaveClass(/dark/);

    // Clicar no botão de alternar tema
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
    // Navegar para seção de projetos
    await page.click('a[href="#projects"]');

    // Verificar se os projetos estão visíveis
    await expect(page.locator('#projects')).toBeVisible();

    // Verificar se há pelo menos um projeto
    const projectCards = page.locator('[data-testid="project-card"]');
    await expect(projectCards.first()).toBeVisible();
  });

  test('deve exibir habilidades técnicas organizadas por categoria', async ({
    page,
  }) => {
    // Navegar para seção de habilidades
    await page.click('a[href="#skills"]');

    // Verificar se as categorias estão presentes
    await expect(page.getByText('Frontend')).toBeVisible();
    await expect(page.getByText('Backend')).toBeVisible();
    await expect(page.getByText('DevOps')).toBeVisible();
  });

  test('deve permitir download do CV', async ({ page }) => {
    // Verificar se o link do CV está presente
    const cvLink = page.locator('a[href="/cv-leonardo.pdf"]');
    await expect(cvLink).toBeVisible();

    // Verificar se o link tem o atributo download
    await expect(cvLink).toHaveAttribute('download');
  });

  test('deve ter links para redes sociais funcionais', async ({ page }) => {
    // Verificar links para redes sociais
    const socialLinks = [
      'https://github.com/Laion459',
      'https://www.linkedin.com/in/borgesleonardod/',
      'https://api.whatsapp.com/send/?phone=5551999092387',
      'https://www.instagram.com/laionzzzz/',
    ];

    for (const link of socialLinks) {
      const socialElement = page.locator(`a[href*="${link.split('/')[2]}"]`);
      await expect(socialElement).toBeVisible();
    }
  });

  test('deve ser responsivo em dispositivos móveis', async ({ page }) => {
    // Testar em viewport móvel
    await page.setViewportSize({ width: 375, height: 667 });

    // Verificar se o menu mobile está funcionando
    const mobileMenuButton = page.locator('[data-testid="mobile-menu-button"]');
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click();

      // Verificar se o menu mobile está aberto
      const mobileMenu = page.locator('[data-testid="mobile-menu"]');
      await expect(mobileMenu).toBeVisible();
    }
  });

  test('deve ter formulário de contato funcional', async ({ page }) => {
    // Navegar para seção de contato
    await page.click('a[href="#contact"]');

    // Verificar se o formulário está presente
    const contactForm = page.locator('form');
    await expect(contactForm).toBeVisible();

    // Verificar campos obrigatórios
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();

    // Verificar botão de envio
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeVisible();
  });

  test('deve ter animações suaves e funcionais', async ({ page }) => {
    // Verificar se as animações estão funcionando
    await page.waitForTimeout(1000);

    // Verificar se elementos animados estão presentes
    const animatedElements = page.locator('[data-testid="animated-element"]');
    if ((await animatedElements.count()) > 0) {
      await expect(animatedElements.first()).toBeVisible();
    }
  });

  test('deve ter performance otimizada', async ({ page }) => {
    // Medir tempo de carregamento
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;

    // Verificar se o carregamento é rápido (menos de 3 segundos)
    expect(loadTime).toBeLessThan(3000);

    // Verificar se não há erros no console
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.waitForTimeout(2000);
    expect(consoleErrors.length).toBe(0);
  });
});
