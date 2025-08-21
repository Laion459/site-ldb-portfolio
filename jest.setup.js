import '@testing-library/jest-dom';

// Mock do Framer Motion para testes
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
    section: ({ children, ...props }) => (
      <section {...props}>{children}</section>
    ),
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
  },
  useMotionValue: jest.fn(() => ({ get: jest.fn(), set: jest.fn() })),
  useSpring: jest.fn(() => ({ get: jest.fn(), set: jest.fn() })),
  useTransform: jest.fn(() => ({ get: jest.fn(), set: jest.fn() })),
  AnimatePresence: ({ children }) => children,
}));

// Mock do EmailJS
jest.mock('@emailjs/browser', () => ({
  send: jest.fn(() => Promise.resolve({ status: 200 })),
  init: jest.fn(),
}));

// Mock do localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock do matchMedia
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

// Mock do IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock do ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock do scrollIntoView
Element.prototype.scrollIntoView = jest.fn();

// Configuração global para testes
global.console = {
  ...console,
  // Uncomment to ignore a specific log level
  // log: jest.fn(),
  // debug: jest.fn(),
  // info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};
