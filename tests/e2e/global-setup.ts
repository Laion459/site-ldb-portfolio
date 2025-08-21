import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(_config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Configurações globais para todos os testes
  await page.addInitScript(() => {
    // Mock de APIs externas se necessário
    window.localStorage.clear();

    // Configurar preferências de tema
    window.localStorage.setItem('theme', 'light');

    // Mock de matchMedia para testes responsivos
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  await browser.close();
}

export default globalSetup;
