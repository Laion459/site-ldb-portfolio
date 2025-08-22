module.exports = {
  ci: {
    collect: {
      // 🎯 Configurações de coleta
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'ready on',
      startServerReadyTimeout: 30000,
      url: [
        'http://localhost:3000',
        'http://localhost:3000/projetos/flor-de-lis',
        'http://localhost:3000/projetos/gabriela-n',
      ],
      numberOfRuns: 3,
      settings: {
        // 📱 Configurações de dispositivo
        preset: 'desktop',
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
        },
        // 🎨 Configurações de emulação
        emulatedFormFactor: 'desktop',
        screenEmulation: {
          mobile: false,
          width: 1350,
          height: 940,
          deviceScaleFactor: 1,
          disabled: false,
        },
        // 🔍 Configurações de auditoria
        onlyAudits: [
          'first-contentful-paint',
          'largest-contentful-paint',
          'first-meaningful-paint',
          'speed-index',
          'cumulative-layout-shift',
          'total-blocking-time',
          'max-potential-fid',
          'server-response-time',
          'render-blocking-resources',
          'redirects',
          'critical-request-chains',
          'user-timings',
          'bootup-time',
          'mainthread-work-breakdown',
          'font-display',
          'resource-summary',
          'third-party-summary',
          'largest-contentful-paint-element',
          'layout-shift-elements',
          'long-tasks',
          'non-composited-animations',
          'unsized-images',
        ],
      },
    },
    assert: {
      // ✅ Assertions de performance
      assertions: {
        'categories:performance': ['warn', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'categories:seo': ['warn', { minScore: 0.8 }],
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],
        'speed-index': ['warn', { maxNumericValue: 3000 }],
      },
    },
    upload: {
      // 📤 Configurações de upload
      target: 'temporary-public-storage',
      token: process.env.LHCI_GITHUB_APP_TOKEN,
    },
  },
};
