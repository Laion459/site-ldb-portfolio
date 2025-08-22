'use client';

import { useEffect } from 'react';

export const useCleanupExtensions = () => {
  useEffect(() => {
    // Lista de atributos conhecidos de extensões que causam hydration mismatch
    const problematicAttributes = [
      'cz-shortcut-listen',
      'data-extension',
      'data-browser-extension',
      'data-colorzilla',
      'data-color-picker',
    ];

    // Função para limpar atributos problemáticos
    const cleanupAttributes = () => {
      const body = document.body;
      if (body) {
        problematicAttributes.forEach(attr => {
          if (body.hasAttribute(attr)) {
            body.removeAttribute(attr);
          }
        });
      }
    };

    // Limpar imediatamente
    cleanupAttributes();

    // Configurar observer para limpar atributos que forem adicionados
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (
          mutation.type === 'attributes' &&
          mutation.target === document.body
        ) {
          const attributeName = mutation.attributeName;
          if (attributeName && problematicAttributes.includes(attributeName)) {
            // Remover o atributo problemático
            document.body.removeAttribute(attributeName);
          }
        }
      });
    });

    // Observar mudanças no body
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: problematicAttributes,
    });

    // Limpar observer quando componente for desmontado
    return () => {
      observer.disconnect();
    };
  }, []);
};
