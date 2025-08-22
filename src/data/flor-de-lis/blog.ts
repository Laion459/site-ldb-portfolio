export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Tendências de Cabelo para 2025: O que está em alta',
    excerpt:
      'Descubra as cores, cortes e técnicas que dominarão o mundo da beleza em 2025',
    content: `
      <h2>As Principais Tendências de 2025</h2>
      <p>O ano de 2025 promete trazer revoluções no mundo da beleza capilar. As tendências apontam para um equilíbrio perfeito entre ousadia e naturalidade, com técnicas inovadoras que respeitam a saúde dos fios.</p>
      
      <h3>1. Cores Pantone-Inspired</h3>
      <p>As cores do ano da Pantone influenciam diretamente as tendências capilares. Em 2025, veremos muito do "Peach Fuzz" em versões suaves e elegantes, criando looks sofisticados e atemporais.</p>
      
      <h3>2. Cortes Asimétricos e Geométricos</h3>
      <p>Os cortes geométricos ganham força, com linhas limpas e ângulos precisos. A assimetria cria movimento e personalidade, sendo perfeita para quem busca um visual único e moderno.</p>
      
      <h3>3. Técnicas de Coloração Avançadas</h3>
      <p>O balayage evoluiu para técnicas como "shadow root" e "money piece", criando transições suaves e naturais. A tendência é para cores que parecem ter nascido com você.</p>
      
      <h3>4. Cabelos Texturizados</h3>
      <p>A textura natural está em alta, com técnicas que realçam o movimento natural dos fios. Produtos específicos para texturização são essenciais para manter o look desejado.</p>
      
      <h2>Como Aplicar em Você</h2>
      <p>Antes de escolher uma tendência, é fundamental consultar um profissional que entenda seu tipo de cabelo, rosto e estilo de vida. Na Flor de Lis, nossa equipe está sempre atualizada com as últimas técnicas e produtos.</p>
    `,
    image: '/images/flor-de-lis/corte.webp',
    category: 'Tendências',
    date: '15 de Janeiro, 2025',
    readTime: '3 min de leitura',
    author: 'Equipe Flor de Lis',
    tags: [
      'tendências 2025',
      'cortes de cabelo',
      'coloração',
      'balayage',
      'cortes geométricos',
    ],
    slug: 'tendencias-cabelo-2025',
  },
  {
    id: '2',
    title: 'Skincare Coreano: Rotina Completa para Pele Brasileira',
    excerpt:
      'Adapte as técnicas coreanas de skincare para o clima e características da pele brasileira',
    content: `
      <h2>O que é Skincare Coreano?</h2>
      <p>O skincare coreano é conhecido mundialmente por sua abordagem holística e produtos inovadores. A rotina coreana tradicional envolve múltiplas etapas que visam hidratar, nutrir e proteger a pele de forma eficaz.</p>
      
      <h3>Adaptação para o Clima Brasileiro</h3>
      <p>No Brasil, precisamos adaptar essas técnicas considerando o clima tropical, a exposição solar intensa e as características específicas da pele brasileira, que tende a ser mais oleosa.</p>
      
      <h3>Rotina Adaptada para o Brasil</h3>
      <ul>
        <li><strong>Limpeza Dupla:</strong> Comece com óleo de limpeza seguido de gel ou espuma</li>
        <li><strong>Tonificação:</strong> Use tônicos sem álcool, ricos em ingredientes calmantes</li>
        <li><strong>Tratamento:</strong> Séruns com vitamina C pela manhã, retinol à noite</li>
        <li><strong>Hidratação:</strong> Gel-cremes leves para não pesar na pele</li>
        <li><strong>Proteção:</strong> Protetor solar com FPS 50+ e proteção UVA</li>
      </ul>
      
      <h3>Ingredientes Recomendados</h3>
      <p>Para a pele brasileira, priorize ingredientes como niacinamida, ácido hialurônico, ceramidas e peptídeos. Evite produtos muito pesados ou comedogênicos.</p>
    `,
    image: '/images/flor-de-lis/hidratacao.webp',
    category: 'Skincare',
    date: '12 de Janeiro, 2025',
    readTime: '4 min de leitura',
    author: 'Equipe Flor de Lis',
    tags: [
      'skincare coreano',
      'rotina de beleza',
      'pele brasileira',
      'produtos coreanos',
      'cuidados com a pele',
    ],
    slug: 'skincare-coreano-pele-brasileira',
  },
  {
    id: '3',
    title: 'Depilação a Laser: Mitos e Verdades',
    excerpt:
      'Desvendamos os principais mitos sobre depilação a laser e explicamos como funciona realmente',
    content: `
      <h2>Como Funciona a Depilação a Laser</h2>
      <p>A depilação a laser funciona através da emissão de luz concentrada que é absorvida pela melanina dos pelos. Essa energia é convertida em calor, destruindo o folículo piloso de forma permanente.</p>
      
      <h3>Mitos Comuns</h3>
      <ul>
        <li><strong>Mito:</strong> "É doloroso demais" - A tecnologia moderna tornou o procedimento muito mais confortável</li>
        <li><strong>Mito:</strong> "Funciona em qualquer tipo de pele" - Peles muito claras ou muito escuras podem ter limitações</li>
        <li><strong>Mito:</strong> "É definitivo na primeira sessão" - São necessárias múltiplas sessões para resultados permanentes</li>
        <li><strong>Mito:</strong> "Pode causar câncer" - Não há evidências científicas que comprovem essa relação</li>
      </ul>
      
      <h3>Verdades Importantes</h3>
      <ul>
        <li><strong>Verdade:</strong> É mais eficaz em pelos escuros e pele clara</li>
        <li><strong>Verdade:</strong> Requer múltiplas sessões (geralmente 6-8)</li>
        <li><strong>Verdade:</strong> Pode causar leve vermelhidão temporária</li>
        <li><strong>Verdade:</strong> É um investimento que compensa a longo prazo</li>
      </ul>
      
      <h3>Preparação e Cuidados</h3>
      <p>Antes da sessão, evite exposição solar por 2 semanas, não depile com cera por 4 semanas e mantenha a pele hidratada. Após o procedimento, use protetor solar e evite exercícios intensos por 24h.</p>
    `,
    image: '/images/flor-de-lis/depilacao.webp',
    category: 'Depilação',
    date: '10 de Janeiro, 2025',
    readTime: '5 min de leitura',
    author: 'Equipe Flor de Lis',
    tags: [
      'depilação a laser',
      'depilação definitiva',
      'mitos e verdades',
      'cuidados pós-depilação',
      'tecnologia laser',
    ],
    slug: 'depilacao-laser-mitos-verdades',
  },
  {
    id: '4',
    title: 'Maquiagem Sustentável: Produtos Eco-Friendly que Funcionam',
    excerpt:
      'Descubra como fazer maquiagem linda e sustentável, sem comprometer a qualidade',
    content: `
      <h2>O que é Maquiagem Sustentável?</h2>
      <p>Maquiagem sustentável vai além de produtos "naturais". Envolve embalagens recicláveis, ingredientes éticos, produção responsável e testes sem crueldade animal. É uma abordagem holística para a beleza.</p>
      
      <h3>Marcas Recomendadas</h3>
      <p>Algumas marcas brasileiras e internacionais estão liderando o movimento sustentável na maquiagem, oferecendo produtos de alta qualidade com responsabilidade ambiental.</p>
      
      <h3>Ingredientes para Evitar</h3>
      <ul>
        <li>Parabenos e ftalatos</li>
        <li>Óleos minerais derivados do petróleo</li>
        <li>Corantes sintéticos agressivos</li>
        <li>Fragrâncias artificiais</li>
      </ul>
      
      <h3>Alternativas Sustentáveis</h3>
      <ul>
        <li><strong>Base:</strong> Produtos com óleos vegetais e ceras naturais</li>
        <li><strong>Sombra:</strong> Pigmentos minerais e mica natural</li>
        <li><strong>Batom:</strong> Ceras vegetais e óleos essenciais</li>
        <li><strong>Máscara:</strong> Fibras naturais e ingredientes botânicos</li>
      </ul>
      
      <h3>Como Aplicar</h3>
      <p>A maquiagem sustentável pode ser aplicada exatamente como a tradicional. A diferença está na consciência de que você está usando produtos que respeitam o planeta e sua pele.</p>
    `,
    image: '/images/flor-de-lis/make.webp',
    category: 'Maquiagem',
    date: '8 de Janeiro, 2025',
    readTime: '4 min de leitura',
    author: 'Equipe Flor de Lis',
    tags: [
      'maquiagem sustentável',
      'produtos eco-friendly',
      'beleza sustentável',
      'maquiagem natural',
      'produtos orgânicos',
    ],
    slug: 'maquiagem-sustentavel-eco-friendly',
  },
  {
    id: '5',
    title: 'Tratamentos Capilares para Cabelos Danificados',
    excerpt:
      'Recupere a saúde dos seus cabelos com tratamentos específicos para cada tipo de dano',
    content: `
      <h2>Identificando o Tipo de Dano</h2>
      <p>Antes de escolher um tratamento, é fundamental identificar qual tipo de dano seu cabelo apresenta. Os danos podem ser químicos, térmicos, mecânicos ou ambientais, cada um requerendo abordagens específicas.</p>
      
      <h3>Tipos de Danos e Soluções</h3>
      
      <h4>Dano Químico (Coloração, Alisamento)</h4>
      <p>Caracterizado por porosidade excessiva, quebra e ressecamento. Requer tratamentos com proteínas e aminoácidos para reconstruir a estrutura capilar.</p>
      
      <h4>Dano Térmico (Secador, Chapinha)</h4>
      <p>Resulta em cutículas abertas e perda de umidade. Hidratação profunda e selamento das cutículas são essenciais.</p>
      
      <h4>Dano Mecânico (Escovação, Pente)</h4>
      <p>Causa quebra e pontas duplas. Tratamentos com queratina e óleos reparadores são ideais.</p>
      
      <h3>Tratamentos Recomendados</h3>
      <ul>
        <li><strong>Reconstrução:</strong> Máscaras com proteínas e aminoácidos</li>
        <li><strong>Hidratação:</strong> Produtos com ácido hialurônico e glicerina</li>
        <li><strong>Nutrição:</strong> Óleos vegetais e manteigas</li>
        <li><strong>Selamento:</strong> Produtos com silicone e ceramidas</li>
      </ul>
      
      <h3>Frequência dos Tratamentos</h3>
      <p>Para cabelos muito danificados, recomenda-se hidratação 2x por semana, nutrição 1x por semana e reconstrução 1x a cada 15 dias. Ajuste conforme a resposta do seu cabelo.</p>
    `,
    image: '/images/flor-de-lis/hidratacao.webp',
    category: 'Tratamentos',
    date: '5 de Janeiro, 2025',
    readTime: '5 min de leitura',
    author: 'Equipe Flor de Lis',
    tags: [
      'cabelos danificados',
      'tratamentos capilares',
      'reconstrução capilar',
      'hidratação profunda',
      'saúde capilar',
    ],
    slug: 'tratamentos-cabelos-danificados',
  },
  {
    id: '6',
    title: 'Unhas Gel: Durabilidade e Beleza que Duram',
    excerpt:
      'Tudo sobre unhas em gel: aplicação, manutenção e como escolher o design perfeito',
    content: `
      <h2>O que são Unhas em Gel?</h2>
      <p>As unhas em gel são uma técnica de alongamento e fortalecimento que utiliza um gel especial que é curado sob luz UV/LED. O resultado são unhas duráveis, brilhantes e com acabamento profissional.</p>
      
      <h3>Vantagens das Unhas em Gel</h3>
      <ul>
        <li>Durabilidade de 2-3 semanas</li>
        <li>Resistência a quebras e lascas</li>
        <li>Acabamento sempre brilhante</li>
        <li>Ideal para unhas fracas e quebradiças</li>
        <li>Variedade infinita de designs</li>
      </ul>
      
      <h3>Tipos de Aplicação</h3>
      
      <h4>Gel Builder</h4>
      <p>Para alongamento e fortalecimento. Ideal para quem tem unhas naturais curtas ou fracas.</p>
      
      <h4>Gel Color</h4>
      <p>Para cor sólida com acabamento brilhante. Perfeito para looks clássicos e elegantes.</p>
      
      <h4>Gel Sculpting</h4>
      <p>Para modelagem 3D e efeitos especiais. Permite criar texturas e relevos únicos.</p>
      
      <h3>Manutenção e Cuidados</h3>
      <p>As unhas em gel requerem manutenção a cada 2-3 semanas. Durante esse período, evite usar as unhas como ferramentas e mantenha-as hidratadas com óleo cuticular.</p>
      
      <h3>Remoção Segura</h3>
      <p>Nunca force a remoção das unhas em gel. A remoção deve ser feita por um profissional, utilizando acetona e técnicas específicas para evitar danos às unhas naturais.</p>
    `,
    image: '/images/flor-de-lis/unhas.webp',
    category: 'Unhas',
    date: '3 de Janeiro, 2025',
    readTime: '4 min de leitura',
    author: 'Equipe Flor de Lis',
    tags: [
      'unhas em gel',
      'manicure',
      'design de unhas',
      'unhas duráveis',
      'técnicas de unhas',
    ],
    slug: 'unhas-gel-durabilidade-beleza',
  },
  {
    id: '7',
    title: 'Massagem Facial: Técnicas para Pele Radiante',
    excerpt:
      'Aprenda técnicas de automassagem facial para ativar a circulação e melhorar a aparência da pele',
    content: `
      <h2>Benefícios da Massagem Facial</h2>
      <p>A massagem facial vai muito além do relaxamento. Ela ativa a circulação sanguínea, estimula a produção de colágeno, melhora a drenagem linfática e promove uma pele mais radiante e jovem.</p>
      
      <h3>Técnicas de Automassagem</h3>
      
      <h4>1. Drenagem Linfática</h4>
      <p>Comece na base do pescoço e suba suavemente com movimentos circulares. Isso ajuda a reduzir inchaços e melhorar a definição do rosto.</p>
      
      <h4>2. Ativação da Circulação</h4>
      <p>Use as pontas dos dedos para fazer pequenos toques em todo o rosto, estimulando a microcirculação e oxigenação da pele.</p>
      
      <h4>3. Relaxamento Muscular</h4>
      <p>Aplique pressão suave nos pontos de tensão, como testa, têmporas e maxilar, aliviando rugas de expressão.</p>
      
      <h3>Produtos Recomendados</h3>
      <ul>
        <li><strong>Óleos:</strong> Jojoba, amêndoas doces ou argan</li>
        <li><strong>Sérum:</strong> Vitamina C ou ácido hialurônico</li>
        <li><strong>Hidratante:</strong> Textura cremosa para facilitar o deslizamento</li>
      </ul>
      
      <h3>Frequência e Duração</h3>
      <p>Para melhores resultados, pratique a automassagem facial 2-3 vezes por semana, por 5-10 minutos. Sempre use movimentos suaves e ascendentes para não puxar a pele.</p>
      
      <h3>Contraindicações</h3>
      <p>Evite massagem facial se tiver acne ativa, rosácea em crise ou feridas abertas. Em caso de dúvida, consulte um dermatologista.</p>
    `,
    image: '/images/flor-de-lis/reflexo.webp',
    category: 'Tratamentos',
    date: '1 de Janeiro, 2025',
    readTime: '4 min de leitura',
    author: 'Equipe Flor de Lis',
    tags: [
      'massagem facial',
      'automassagem',
      'pele radiante',
      'drenagem linfática',
      'tratamentos faciais',
    ],
    slug: 'massagem-facial-tecnicas-pele-radiante',
  },
  {
    id: '8',
    title: 'Cabelos Cacheados: Como Definir e Manter os Cachos',
    excerpt:
      'Guia completo para cuidar, definir e manter seus cachos sempre bonitos e definidos',
    content: `
      <h2>Entendendo seus Cachos</h2>
      <p>Cada tipo de cacho é único e requer cuidados específicos. O sistema de classificação vai do tipo 2A (ondulado) ao 4C (cachos muito fechados), cada um com necessidades particulares.</p>
      
      <h3>Rotina de Cuidados</h3>
      
      <h4>Lavagem</h4>
      <p>Use shampoos sem sulfatos e condicionadores ricos em umectantes. Para cabelos muito cacheados, considere o método "low poo" ou "no poo".</p>
      
      <h4>Condicionamento</h4>
      <p>Aplique condicionador em mechas úmidas, deixe agir por 5-10 minutos e use um pente de dentes largos para desembaraçar.</p>
      
      <h4>Finalização</h4>
      <p>Use cremes de definição específicos para cachos, aplicando com a técnica "praying hands" ou "scrunching".</p>
      
      <h3>Produtos Essenciais</h3>
      <ul>
        <li><strong>Shampoo:</strong> Sem sulfatos, com ingredientes hidratantes</li>
        <li><strong>Condicionador:</strong> Rico em umectantes e emolientes</li>
        <li><strong>Creme de Definição:</strong> Com textura adequada ao seu tipo de cacho</li>
        <li><strong>Óleo:</strong> Para selar a umidade e reduzir o frizz</li>
      </ul>
      
      <h3>Técnicas de Aplicação</h3>
      <p>A técnica "praying hands" é ideal para distribuir produtos uniformemente, enquanto o "scrunching" ajuda a definir os cachos. Para cabelos longos, considere o "plopping" para secar.</p>
      
      <h3>Manutenção Diária</h3>
      <p>Use uma fronha de cetim para dormir, refresque os cachos com água e produtos leves, e evite pentear cabelos secos para não quebrar a definição.</p>
    `,
    image: '/images/flor-de-lis/escova.webp',
    category: 'Cuidados',
    date: '29 de Dezembro, 2024',
    readTime: '5 min de leitura',
    author: 'Equipe Flor de Lis',
    tags: [
      'cabelos cacheados',
      'definição de cachos',
      'cuidados com cachos',
      'produtos para cachos',
      'técnicas de cachos',
    ],
    slug: 'cabelos-cacheados-definir-manter-cachos',
  },
  {
    id: '9',
    title: 'Beleza Masculina: Tendências e Cuidados para 2025',
    excerpt:
      'O universo da beleza masculina está em expansão. Descubra as tendências e cuidados essenciais',
    content: `
      <h2>A Revolução da Beleza Masculina</h2>
      <p>A beleza masculina deixou de ser tabu e se tornou uma forma de autoexpressão e autocuidado. Em 2025, os homens estão cada vez mais interessados em tratamentos estéticos e produtos de beleza.</p>
      
      <h3>Tendências para 2025</h3>
      
      <h4>1. Barba Estilizada</h4>
      <p>A barba continua em alta, mas agora com técnicas de modelagem e produtos específicos para manutenção e hidratação.</p>
      
      <h4>2. Tratamentos Faciais</h4>
      <p>Limpeza de pele, hidratação e tratamentos anti-aging estão ganhando espaço na rotina masculina.</p>
      
      <h4>3. Cuidados com o Cabelo</h4>
      <p>Produtos específicos para diferentes tipos de cabelo masculino, incluindo tratamentos para calvície e queda.</p>
      
      <h3>Rotina Básica Masculina</h3>
      <ul>
        <li><strong>Limpeza:</strong> Sabonete facial específico para pele masculina</li>
        <li><strong>Hidratação:</strong> Hidratante com FPS para proteção diária</li>
        <li><strong>Barba:</strong> Óleo e balm para hidratação e modelagem</li>
        <li><strong>Cabelo:</strong> Shampoo e condicionador adequados ao tipo</li>
      </ul>
      
      <h3>Tratamentos Recomendados</h3>
      <p>Limpeza de pele mensal, hidratação profunda e tratamentos para rugas de expressão são os mais procurados pelos homens. A depilação a laser para barba também está em alta.</p>
      
      <h3>Produtos Essenciais</h3>
      <p>Investir em produtos de qualidade faz toda diferença. Procure por marcas que desenvolvem produtos específicos para pele masculina, considerando suas características únicas.</p>
    `,
    image: '/images/flor-de-lis/corte.webp',
    category: 'Beleza Masculina',
    date: '27 de Dezembro, 2024',
    readTime: '4 min de leitura',
    author: 'Equipe Flor de Lis',
    tags: [
      'beleza masculina',
      'cuidados masculinos',
      'barba estilizada',
      'tratamentos masculinos',
      'produtos masculinos',
    ],
    slug: 'beleza-masculina-tendencias-2025',
  },
  {
    id: '10',
    title: 'Alimentação e Beleza: Como a Nutrição Afeta sua Aparência',
    excerpt:
      'Descubra como os alimentos que você consome impactam diretamente na saúde da sua pele, cabelo e unhas',
    content: `
      <h2>A Conexão entre Nutrição e Beleza</h2>
      <p>A beleza começa de dentro para fora. Os nutrientes que consumimos são essenciais para a saúde da pele, cabelo e unhas. Uma alimentação equilibrada pode ser mais eficaz que muitos tratamentos cosméticos.</p>
      
      <h3>Nutrientes Essenciais para a Beleza</h3>
      
      <h4>Proteínas</h4>
      <p>Fundamentais para a produção de colágeno e queratina. Fontes: carnes magras, ovos, leguminosas e quinoa.</p>
      
      <h4>Ômega-3</h4>
      <p>Anti-inflamatório natural que melhora a hidratação da pele. Fontes: peixes gordurosos, sementes de chia e nozes.</p>
      
      <h4>Vitaminas A, C e E</h4>
      <p>Antioxidantes que protegem contra danos celulares e envelhecimento precoce. Fontes: frutas cítricas, vegetais verdes e oleaginosas.</p>
      
      <h4>Zinco e Selênio</h4>
      <p>Minerais essenciais para a saúde capilar e unhas. Fontes: castanhas, sementes e frutos do mar.</p>
      
      <h3>Alimentos para Evitar</h3>
      <ul>
        <li>Açúcares refinados (aceleram o envelhecimento)</li>
        <li>Gorduras trans (causam inflamação)</li>
        <li>Excesso de sal (retém líquidos)</li>
        <li>Álcool (desidrata a pele)</li>
      </ul>
      
      <h3>Hidratação</h3>
      <p>Beber água suficiente é fundamental para manter a pele hidratada e eliminar toxinas. Recomenda-se 2-3 litros por dia, variando conforme peso e atividade física.</p>
      
      <h3>Suplementação</h3>
      <p>Em alguns casos, suplementos podem ser necessários. Consulte um nutricionista para avaliar suas necessidades específicas e indicar suplementos adequados.</p>
      
      <h2>Resultados Esperados</h2>
      <p>Com uma alimentação equilibrada, você pode esperar pele mais radiante, cabelos mais fortes e unhas mais resistentes em 4-8 semanas. A consistência é fundamental para resultados duradouros.</p>
    `,
    image: '/images/flor-de-lis/hidratacao.webp',
    category: 'Nutrição',
    date: '25 de Dezembro, 2024',
    readTime: '5 min de leitura',
    author: 'Equipe Flor de Lis',
    tags: [
      'nutrição e beleza',
      'alimentação saudável',
      'vitaminas para beleza',
      'pele saudável',
      'cabelos saudáveis',
    ],
    slug: 'alimentacao-beleza-nutricao-aparencia',
  },
];
