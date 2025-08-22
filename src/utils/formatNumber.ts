/**
 * Formata um número para exibição com pontos de milhares
 * @param value - Número a ser formatado
 * @param decimals - Número de casas decimais (padrão: 2)
 * @returns String formatada (ex: 1.234,56)
 */
export const formatNumber = (value: number, decimals: number = 2): string => {
  if (isNaN(value) || !isFinite(value)) {
    return '0,00';
  }

  // Formata o número com pontos de milhares e vírgula decimal
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

/**
 * Formata um número para exibição compacta
 * @param value - Número a ser formatado
 * @returns String formatada (ex: 1,23K, 1,45M)
 */
export const formatCompactNumber = (value: number): string => {
  if (isNaN(value) || !isFinite(value)) {
    return '0';
  }

  if (value < 1000) {
    return formatNumber(value, 2);
  }

  if (value < 1000000) {
    return `${(value / 1000).toFixed(2).replace('.', ',')}K`;
  }

  if (value < 1000000000) {
    return `${(value / 1000000).toFixed(2).replace('.', ',')}M`;
  }

  return `${(value / 1000000000).toFixed(2).replace('.', ',')}B`;
};
