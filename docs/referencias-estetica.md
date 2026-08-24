# Referências de estética moderna

85 sites carregados e conferidos, 22/08/2026.

## Movimentos estéticos identificados

- Painel escuro com grao interno: o bloco de conteudo deixa de ser card com sombra e vira retangulo de borda 1px com camada de ruido em opacity 0.06 a 0.08 por dentro, mais um glow. Visto em Linear (div .grain com inset:1px), Hex (token --texture-paper-img trocando de tile por tema) e Tailscale. E o gesto que mais afasta a pagina da leitura de papel, e custa um webp de poucos KB.
- Rampa numerada como unico sistema de cor: nenhuma cor literal em componente, tudo sai de --gray-100..1000, --bg-100/200/300 e --fg-100..1200. Vercel (--ds-gray, --ds-background-100, variantes alpha), Hex (--bg100..500 e --fg100..1200) e Attio (--color-black-50..400 alimentando aliases semanticos como --color-weak-stroke). E o que faz claro e escuro custarem um bloco de CSS em vez de duas folhas de estilo.
- Borda luminosa animada por gradiente conico: --border-color: conic-gradient(from var(--angle)...) com @property --angle animado de 0 a 360deg, produzindo um fio de luz girando na borda. Assinatura da Resend. Puro CSS, degrada sozinho onde @property nao existe.
- Mascara em gradiente no lugar de moldura e sombra: mask-image: linear-gradient(to bottom, #000 78%, transparent 100%) faz capturas de produto e listas se dissolverem em vez de terminarem em corte. Clerk usa 61 vezes, Attio 91 vezes. Praticamente gratis e e o detalhe que mais denuncia site feito com cuidado.
- Tres vozes tipograficas com papel fixo: grotesca larga ou estreita no display, sans tecnica na interface, mono no rotulo e no dado, mais serifa editorial na citacao. Hex (PP Formula SemiExtended + GT Cinetype + PP Editorial New + IBM Plex Mono), Fly.io (Mackinac + Fricolage + Fragment Mono), Railway (Inter Tight + Inter + JetBrains Mono + IBM Plex Serif, tudo Google Fonts). A hierarquia vem do contraste de familia, nao de negrito.
- Titulo grande em peso LEVE: escala de 56 a 72px com weight 200 a 300 e tracking negativo. Temporal com Aeonik Light e o caso mais puro. Le como confianca; a mesma escala em peso 700 le como anuncio.
- Preto e branco tingidos, nunca neutros: #08090A azulado (Linear), #141614 esverdeado (Modal), #13111C arroxeado (Railway), #141413 amarelado (Anthropic). E no claro, #EEEFF1 frio (Attio), #F5F8F4 sagem (Baseten), #FAF9F5 marfim (Anthropic), #EEEBEA rosado (Tailscale). Zero sites premiados usam #FFF ou #000 como fundo.
- Uma cor de marca, oito a dez vizinhos dela: Modal com nove verdes adjacentes (#80EE64 ate #059345), Vanta com cinco roxos, Supabase com a familia do #3ECF8E. A unidade vem de nunca sair da familia, e o gradiente e o grafico saem de graca da propria rampa.
- Uma curva de easing so, tokenizada e repetida: Baseten usa cubic-bezier(0.5,0.2,0.4,1) 98 vezes, Clerk usa cubic-bezier(0.33,1,0.68,1) 60 vezes, Anthropic usa cubic-bezier(0.16,1,0.3,1). Declarar --ease e --dur no :root e usar sempre os dois e a mudanca de maior impacto por menor esforco.
- Prova por numero, nao por adjetivo nem por parede de logo: Chainguard abre com 2.500+ / 260K+ / 520K+ / 1B+ / 2M+ logo abaixo do herói; Linear usa citacao nominal com cargo e empresa mais 'over 40,000 product teams'. Substitui a fileira de brasoes, que e justamente o que faria a Intelecto parecer portal de prefeitura.
- Diagrama luminoso no lugar de ilustracao decorativa: contorno fino e brilhante desenhando a arquitetura real do produto (Clerk com --stroke-color:#5DE3FF, Cloudflare com keyframes de beam, Linear com matriz de pontos animada por opacity). Comunica competencia de infraestrutura sem foto e sem stock.
- Dois caminhos de conversao lado a lado no herói: um consultivo e um self-service ('Talk to an expert' + 'Get started free' na Chainguard). Atende publico que compra por relacionamento e publico que quer olhar sozinho, sem escolher entre os dois.
- Movimento com contrato de acessibilidade: prefers-reduced-motion declarado (Anthropic sete vezes, Attio, Cloudflare) e prefers-color-scheme como base antes de qualquer botao de tema (Resend, Tailscale, Liveblocks). Nenhum site premiado de 2025/2026 anima sem essa guarda.
- Textura e ruido tokenizados por tema, nao fixos: Hex declara --texture-paper-img com tile de 200px no escuro e 256px no claro, mais --texture-paper-mixBlendMode, e anima com @keyframes noise movendo background-position. Reconhece que ruido claro sobre fundo claro exige outro contraste.
- Escuro nativo com preto verdadeiro e cinza dessaturado: a escala inteira em matiz 0 e saturacao 0% (Vercel), fundo #000 a #0d0d0d, e ZERO azul institucional. A cor de marca entra so como acento em alfa baixo. E o oposto exato do azul gov.br recusado, e e o consenso absoluto entre os 14 sites.
- Mask-image de gradiente como acabamento universal: presente em 13 dos 14 sites. Nenhum screenshot, marquee ou grade termina numa borda reta; tudo dissolve. Mintlify prova que a versao boa usa dez ou mais paradas calculadas em curva, nao duas, para nao produzir banda visivel.
- Gradiente conico como luz, nao como arco-iris: usado de tres formas distintas: borda que gira com angulo em custom property (Clerk, Railway, Mintlify, Stripe), feixe de holofote caindo do topo com dezenas de paradas em poucos graus (Liveblocks), e brilho que segue o cursor (Raycast).
- Aperto optico da tipografia: letter-spacing negativo escalonado por tamanho em todos os sites, de -.005em em texto pequeno a -.08rem em titulo grande, mais text-wrap: balance universal. Liveblocks usa valores fracionarios (-.0075em, -.013em, -.014em), o que revela ajuste por tamanho e nao escala fixa.
- Serifa de display contra grotesca: Instrument Serif (Raycast e Warp), Domaine (Resend), Arizona Flare (Mintlify), Goga (Modal). A serifa entra em dose pequena, muitas vezes uma palavra dentro de um titulo em sans, criando enfase sem negrito nem cor. E o gesto que mais afasta de 'neutro institucional'.
- Mono como voz tecnica e credibilidade: Geist Mono, JetBrains Mono, Commit Mono, Azeret Mono, IBM Plex Mono em rotulos, numeros, eyebrows e badges. Liveblocks formaliza a oposicao: titulo em sans com tracking negativo contra rotulo mono de 10px em caixa alta com tracking positivo.
- Grade tecnica de 1px quase invisivel: linhas a 7% de opacidade (Modal #ffffff12) ou em cinza um degrau acima do fundo (Trigger #15171a sobre #121317). Diz engenharia sem dizer tabela, que e a linha exata que o dono tracou.
- Hairline por box-shadow e nao por border: Linear usa box-shadow: 0 0 0 1px #08090a1a, 0 0 64px #08090a66, contorno e sombra ambiente na mesma declaracao. Clerk usa borda com alfa (gray-950/5 no claro, white/10 no escuro) para o hairline se adaptar ao que esta atras.
- Mural de logos dessaturado que acende no hover: a receita literal da Warp e grayscale mais opacity .4, subindo para cor cheia e opacity .9 em 200ms, dentro de container com mask-image de borda dissolvida. E a solucao correta para logos de clientes com cores e pesos visuais incompativeis.
- Produto como UI reconstruida em DOM, nao screenshot: Resend, Linear, Liveblocks e Raycast desenham a interface em HTML e CSS. Pesa menos que PNG, fica nitida em qualquer densidade, e responsiva de graca e nunca desatualiza.
- Numeros grandes como prova, com contagem: Warp (718K, 51%, 179K), Neon (15,000,000), Railway com contador que literalmente comeca em zero. Substitui adjetivo por evidencia.
- Temporizacao desigual e proposital: Clerk separa 450ms com cubic-bezier(0.33, 1, 0.68, 1) para cor e fundo contra 200ms para transform, ou seja, a cor demora mais que o movimento. Stripe usa keyframes separados para entrada e saida de hover em vez de reverter a mesma animacao.
- Luz sem peso: halo monocromatico por bloco solido com blur enorme e opacidade minima (Vercel, bg cinza com blur 120px a 15%), ou faixa de cor difusa que nasce e morre na cor do fundo (Railway). Nenhum deles depende de imagem, WebGL ou backdrop-filter pesado.
- Vitalidade datada na home: Linear, Trigger.dev e Resend colocam changelog e posts com data na propria pagina inicial. E prova social de continuidade, que para comprador publico responde a duvida de se o fornecedor vai existir daqui a tres anos.
- Retrato de hardware: fotografia de estudio da propria maquina como heroi, recortada em fundo escuro, no lugar de ilustracao de nuvem ou de icone de servidor (Oxide, Hetzner, foto 'NVME IMAP Servers' da Fastmail). E a forma mais direta e menos falsificavel de dizer 'a maquina e nossa'.
- Ficha tecnica como estetica: specs em pares rotulo-mono/valor-grande, com grandeza fisica (mm, kg, kW, TB, Gbit/s) e numeros quebrados em vez de redondos. Convence porque nao poderia ter sido inventado (Oxide specs, Hetzner: 4.000 m2, 10.790 Gbit/s).
- Faixa de metricas de operacao em quatro colunas, em mono com numerais tabulares: regioes, tempo de boot, tempo de deploy, SLA (Fly.io); PoPs, capacidade, latencia media (Bunny); tempo medio de resposta do suporte (Bunny, Mittwald).
- Contador que sobe: um numero real animado de zero ate o valor atual, no fecho da pagina ('0+ deploys per month (and counting)' da Railway). JS de odometro, dez linhas.
- Muro tipografico de cidades no lugar de mapa: nomes das localidades atendidas agrupados por regiao, com contador grande em cima (Cloudflare network, 348 cities). Zero imagem, funciona no celular, comunica alcance.
- Titulo de secao como comando de shell ou caminho de arquivo: './deploy-metal.sh', './global-edge-locations' (Latitude.sh). Ar tecnico moderno a custo zero, e o oposto de titulo de documento.
- Orbita em CSS no heroi: um elemento central (a maquina) com satelites girando e contra-girando, via transform e quatro @keyframes (hero-orbit, hero-counter-orbit, hero-pulse na Latitude.sh). Sem WebGL, roda em maquina fraca.
- Papel quente em vez de branco puro: fundo #f9f7f6 (Tailscale) ou creme #f9f3e9 sobre preto #08070c (Railway). E a saida imediata do ar de folha A4 que o dono rejeitou.
- Escuro quase preto com UM acento fluorescente: #080f11 com menta #48d597 (Oxide), #11192e com verde acido #80d34a (DigitalOcean), escuro com limao #ebff8d (Latitude). Nada de segunda e terceira cor de destaque.
- Tres vozes tipograficas: serifada expressiva no titulo, grotesca no corpo, mono nos rotulos e numeros (Fly.io com Mackinac/Fricolage/Fragment Mono; Railway com Inter Tight/Inter/IBM Plex Serif/JetBrains Mono). Equivalentes gratuitos no Google Fonts: Instrument Serif ou Fraunces, Space Grotesk ou Plus Jakarta Sans, JetBrains Mono.
- Titulo grande com tracking negativo e quebra de linha manual: 'Deploy anything / without the complexity'. Tailscale usa letter-spacing negativo em 77 lugares; e o detalhe que separa 2026 de 2016.
- Prova social com UMA metrica por cliente em vez de depoimento longo: Corelight '1.000+ horas economizadas', Cribl '25x', Instacart '90% menos chamados' (Tailscale). Para camara vira 'portal no ar desde 2019', '0 incidente em 14 meses'.
- Carrossel de logos com mascara nas bordas: mask-image com linear-gradient dissolvendo inicio e fim da faixa (Railway, 34 usos). Faz oito logos parecerem quarenta sem mentir.
- Diagrama de camadas da propria stack como espinha da pagina: cada camada e uma secao, a base e o hardware proprio (DigitalOcean, 'Five layers. One platform.'). Resolve o problema de vender publico institucional e privado na mesma home.
- Comparacao em duas colunas do problema contra a solucao, com nome de vilao explicito: 'Traditional on-prem' contra 'The public cloud' (Oxide). Para a Intelecto: 'E-mail do Interlegis que sai do ar em 2027' contra 'Dominio .leg.br em servidor proprio'.
- Pilares nomeados como valor e nao como feature: 'Data Sovereignty', 'Open, Independent Technology', 'Transparent Pricing' (Scaleway). Soberania do dado municipal e o argumento de venda mais forte que a Intelecto tem e quase ninguem usa.
- Linha tracejada como motivo de planta tecnica: a mesma linha de 1px, quando tracejada, deixa de parecer papel timbrado e vira blueprint (Cloudflare, 101 ocorrencias de dashed).
- Selo de operacao em texto e mono: 'Servidor proprio no Brasil', 'ISO 27001', '100% energia renovavel', 'backup diario' como badge tipografico, nunca como brasao ou escudo (Mittwald).
- Brilho radial suave atras dos blocos como fonte de profundidade, em vez de sombra de card: 75 radial-gradient na Mittwald. CSS puro, leve, e tira a pagina do chapado sem virar gradiente de agencia.
- Movimento minimo e proposital: Tailscale tem 2 @keyframes na pagina inteira (um ponto que pulsa e um check que se desenha com stroke-dasharray) e parece cara. Animar pouco e sinal de confianca.
- Precisao de produto (craft-led minimalism): a estetica Linear / Vercel / Raycast. Quase escala de cinza, um unico acento deliberado, espacamento tipografico apertado, uma ideia por secao, hover e empty state tratados, transicao de 120 a 200ms. Comunica bem para diretor de farmaceutica e para secretario de TI; comunica mal para quem espera calor humano imediato.
- Aurora UI (gradiente de malha borrado sobre base quase preta). Quatro a cinco radial-gradients com alpha baixo mais uma camada conic com blur(80px) saturate(1.4) derivando em 18s. Comunica bem contemporaneidade instantanea num hero; comunica mal como superficie de conteudo, porque o contraste do texto oscila abaixo de 4.5:1.
- Liquid Glass e glassmorphism de segunda geracao (iOS 26 / macOS Tahoe). Translucidez com refracao, specular highlight na borda, cor herdada do que esta atras, morphing conforme a navegacao. Comunica bem em header fixo sobre fundo colorido; comunica mal sobre fundo chapado (vira mancha cinza) e sobre dado denso (halo em glifo pequeno).
- Dark mode premium por camadas de elevacao. Nao e inversao: e uma escada de superficies (#121212, #1e1e1e, #2a2a2a, #333) com texto em 15:1 e 7.4:1 e acento rebaixado ao peso 300 a 400. Comunica bem sofisticacao de produto; comunica mal como default de leitura longa e em sala clara de camara.
- Bento grid maduro. Grid de 4 colunas, linhas de 180px, gap unico, auto-flow dense, celula heroi 2x2 e apoios 1x1, radius de 20 a 28px. Comunica bem um portfolio heterogeneo numa tela so; comunica mal se todas as celulas tiverem o mesmo tamanho, quando vira grid de cards com nome da moda.
- Brutalismo tatil (brutalismo refinado). Charcoal ate preto puro, hairline de 1px, canto reto, zero sombra, profundidade por z-index e linha de grid, um unico acento acido, grao de filme por cima. Comunica bem rigor de engenharia; comunica mal se a hairline for preta sobre branco, porque ai vira exatamente o documento institucional que foi rejeitado.
- Technical Mono / code brutalism. Monoespacada, alto contraste, layout denso em grid, ASCII como ornamento, exemplos Vercel, Factory AI, Unit Software. Comunica bem credibilidade tecnica em rotulo e numero; comunica mal como fonte da pagina inteira diante de um presidente de camara.
- Renascenca serifada editorial. Serifa de display de altissimo contraste no titulo (Editorial New, Canela, Domaine; no Google Fonts, Fraunces e Instrument Serif) sobre grotesca neutra no corpo, com hierarquia por dissonancia de escala e espaco vazio usado como estrutura. Comunica bem autoridade com calor; comunica mal se a serifa descer para o corpo do texto na tela.
- Grao e ruido como textura. Overlay de SVG feTurbulence ou grain animado sobre superficie solida, quebrando a perfeicao digital e dando qualidade de papel impresso ou de filme. Comunica bem autoria humana a custo quase zero; comunica mal se aplicado em cima de texto pequeno.
- Tipografia variavel e fluida dirigida por scroll. Escala com clamp() em vw, eixos de peso e largura mapeados na posicao de rolagem, titulo ocupando a largura toda. Comunica bem dominio tecnico; comunica mal quando vira circo e o texto fica ilegivel em movimento.
- Profundidade espacial e z-layering (heranca do visionOS no plano 2D). Tres a cinco camadas com velocidade de scroll calibrada, foco por profundidade, transicao que preserva contexto entre views. Comunica bem imersao; comunica mal quando vira scrolljacking ou parallax de cinco camadas em maquina fraca.
- Neo-esqueuomorfismo dosado (neumorphism refinado). Sombra inset suave apenas no estado de interacao, elevacao sutil sobre fundo apagado, texto e icone sempre em cor solida. Comunica bem tatilidade em botao e toggle; comunica mal em pagina inteira, em texto ou em alto contraste, onde e armadilha de acessibilidade.
- Design generativo e dados como ornamento. O enfeite da pagina e gerado a partir do dado real da operacao (dominios em producao, uptime, carteira por segmento) em SVG ou canvas 2D leve, em vez de ilustracao decorativa. Comunica bem para os dois publicos ao mesmo tempo, porque a prova social vira a propria textura visual.
- Nostalgia de interface e neo-nostalgia (Frutiger Aero, Heisei Retro, Lo-fi Pixel, Y3K Hyperfuturism, Dreamcore, KidCore e colagem de scrapbook). Movimento real e forte em 2026, mas comunica subcultura e moda; comunica pessimamente para camara municipal e para farmaceutica suica.
- Surveillance aesthetic / CCTV tech dystopia. Grao de camera de seguranca, timestamp, moldura de reconhecimento facial, glitch. Comunica bem em cultura visual jovem; comunica pessimamente para quem vende LGPD e DPO as a service, porque o significado e literalmente o oposto do produto.
- Maximalismo cromatico e dopamine design. Neon saturado, gradiente arco-iris, composicao densa e sobreposta (Spotify, Liquid Death). Comunica bem para marca de consumo; comunica mal para infraestrutura contratada por licitacao.
- PAR 1, EDITORIAL DE SOFTWARE (minha recomendacao principal). Display: Instrument Serif 400 roman, 56 a 112px via clamp, line-height 0.95, letter-spacing -0.02em, italico so em uma palavra da manchete para dar acento. Texto: Instrument Sans variavel, wght 400 no corpo (16 a 17px, line-height 1.55) e wght 600 nos subtitulos, com wdth 92 nas etiquetas de navegacao. Mono: Geist Mono 500 em 11 a 12px, caixa alta, letter-spacing 0.12em, exclusivamente em olho de secao, numero de KPI e cabecalho de tabela. Sensacao: revista de tecnologia que tambem opera servidor. Serifa condensada gigante da autoridade sem a poeira do documento; a grotesca neutra do corpo mantem a leitura limpa; a mono assina competencia tecnica. Direcao estetica: editorial tech contemporaneo, vizinha de Vercel e Linear. Evidencia real: o Fonts In Use documenta essa mesma combinacao em pecas premiadas de 2024 e 2025 (Instrument Serif com Geist Sans, com Geist Mono e com JetBrains Mono).
- PAR 2, GROTESCA COM SOTAQUE (uma familia so, maxima personalidade por byte). Bricolage Grotesque em tudo, mudando o eixo optico: h1 em opsz 96 / wght 750 / wdth 78, subtitulo em opsz 40 / wght 500 / wdth 90, corpo em opsz 12 / wght 400 / wdth 100 a 16px. Mono de apoio: Martian Mono wdth 75 / wght 500 nas etiquetas. Sensacao: estudio que faz produto proprio, com irregularidade proposital nas curvas em vez de neutralidade esteril. Direcao estetica: quirky grotesque, o antidoto direto ao Public Sans do mockup rejeitado. Vantagem operacional: um unico woff2 cobre display e texto, o que resolve o requisito de maquina velha. Risco: e a opcao mais autoral, melhor para a marca Intelecto do que para o portal de um cliente conservador.
- PAR 3, SUICO AQUECIDO (menor risco, melhor para a TRB Pharma e para telas densas). Display: Geist 600 em 48 a 88px com letter-spacing -0.03em, imitando o aperto do especimen oficial da Vercel. Texto: Geist 400 a 16px, line-height 1.6. Contraponto editorial: Newsreader italico 400 com opsz 28 exclusivamente em depoimento de cliente, para quebrar a monotonia sem trocar de universo. Mono: Geist Mono. Sensacao: infraestrutura seria, precisao suica, sem enfeite. Direcao estetica: minimalismo tecnico. Vantagem: a mesma familia serve landing, painel do Mirante e sistema de votacao de plenario, o que reduz manutencao. Cuidado: sozinho, Geist pode escorregar de volta para o neutro sem carater, por isso o italico da Newsreader e a mono nas etiquetas nao sao opcionais.
- PAR 4, WONK CONTROLADO (calor humano, melhor para o publico de camaras). Display: Fraunces com opsz 96, wght 650, SOFT 30, WONK 1, em 64 a 104px. Os h, n e m inclinados e os terminais em bola aparecem so aqui. Texto: Schibsted Grotesk 400 a 17px, com 600 nos titulos de secao. Mono: JetBrains Mono 500 nas etiquetas. Sensacao: acolhedor e artesanal, Arts and Crafts relido em 2026, sem virar blog de casamento. Direcao estetica: neo humanista quente. Regra inegociavel: WONK 0 e explicito em todo texto abaixo de 18pt, porque o especimen avisa que as substituicoes entram automaticamente nesse tamanho e destruiriam a leitura.
- PAR 5, LARGURA COMO HIERARQUIA (autoridade tipografica sem burocracia). Display: Archivo em wdth 125 / wght 800 numa manchete de tres a cinco palavras, ou o oposto, wdth 62 / wght 700 para um titulo alto e estreito de cartaz. Texto: Archivo wdth 100 / wght 400. Numero e data: Space Mono 400, que e estatica e tem quirk suficiente para virar assinatura. Sensacao: cartaz institucional moderno, peso e escala em vez de ornamento. Direcao estetica: modernismo grafico americano. Uso pratico na Intelecto: a secao de prova social ganha muito com isso, contagem de clientes em Archivo expandido gigante e o nome de cada camara em wdth 100 pequeno.
- PAR 6, LEITURA LONGA (para conteudo, blog, materia de PNTP e paginas de produto). Titulo: Literata opsz 60 / wght 700. Corpo: Literata opsz 12 / wght 400 a 18px com line-height 1.7 e medida de 66 caracteres. Interface ao redor (menu, botao, rodape): Instrument Sans 400 e 600. Codigo e identificador tecnico: Fira Code 400. Sensacao: material que se le por dez minutos sem cansar, com respeito ao leitor. Direcao estetica: editorial digital. E o unico par em que a serifa entra no corpo do texto, e funciona porque o eixo optico da Literata vai de 7 a 72 e foi desenhado para tela.
- MOVIMENTO, MONO COMO VOZ DE ENGENHARIA. Nao usar monoespacada para codigo na landing, usar como marcador de rigor. Aplicacao concreta: olho de secao em 11px caixa alta com tracking 0.12em e cor de texto fraco; numero grande de prova social (31, 8, 10+) em mono 500 num tamanho de 40 a 64px, alinhado a direita em coluna tabular com font-variant-numeric: tabular-nums; e a etiqueta de status (por exemplo, um ponto colorido mais a palavra OPERACIONAL). Geist Mono e o mais discreto, JetBrains Mono o mais tecnico, Martian Mono wdth 75 o mais grafico, Space Mono o mais expressivo. Escolher UM e nunca misturar dois monos.
- MOVIMENTO, CONTRASTE EXTREMO DE ESCALA. O mockup rejeitado provavelmente tinha escala linear (16, 18, 20, 24, 28), que e o que faz uma pagina parecer relatorio. A alternativa e o salto: um tamanho enorme (clamp(2.75rem, 7vw, 6.5rem)) e um tamanho de leitura (1.0625rem), com quase nada entre os dois, e a mono minuscula (0.6875rem) como terceiro degrau. Tres tamanhos, tres papeis, sem meio-termo. O tamanho enorme precisa de line-height 0.95 a 1.0 e letter-spacing negativo; o de leitura precisa de 1.55 a 1.7 e tracking zero. Implementavel com clamp puro, sem JS.
- PALETA 1, GRAFITE E LIMAO ACIDO. Claro: fundo #FCFDFF, superficie #F5F7F9, borda sutil #E2E7EB, borda #D0D7DD, texto fraco #757B82 (4.2:1), texto #1A2026 (16.1:1), preenchimento de acento #ABE841 com tinta #181C12 por cima (11.8:1), e para LINK ou texto colorido usar o limao escurecido #4F7800 (5.13:1), porque #ABE841 sobre branco da so 1.44:1 e nunca pode carregar texto. Escuro: fundo #0C0F11, superficie #14181B, borda sutil #21262B, borda #2F353B, texto fraco #8E9398 (6.2:1), texto #F1F4F6 (17.4:1), acento #AFF03C (14.1:1 sobre o fundo), hover #BFFF52, tinta sobre acento #0E1217. Sensacao: energia de produto de infraestrutura, o oposto de azul corporativo. O limao brilha no tema escuro e vira sinal, nao decoracao.
- PALETA 2, OSSO QUENTE E TERRACOTA (minha recomendacao para o publico de camaras). Claro: fundo #FFFDFB, superficie #FAF6F1, borda sutil #EDE5DB, borda #E0D4C6, texto fraco #84786A (4.24:1), texto #281D10 (16.25:1), acento #C05621 que serve como link (4.5:1) e como botao com texto branco (4.57:1), hover #AC4403. Escuro: fundo #120D08, superficie #1C160E, borda sutil #2D2318, borda #3E3224, texto fraco #9B9085 (6.18:1), texto #F7F3EE (17.49:1), acento #EF8448 (7.42:1), hover #FF9459, tinta sobre acento #181006. Sensacao: papel e tinta, calor brasileiro, editorial. E a paleta que mais se afasta de gov.br mantendo seriedade; funciona porque o neutro nao e cinza, e osso quente (hue 70, chroma 0.016), na linha dos neutros temperados que a Tailwind v4 acabou de adotar (taupe, olive, mist).
- PALETA 3, PETROLEO E MENTA. Claro: fundo #FBFEFE, superficie #F2F8F8, borda sutil #DCE9E8, borda #C8DAD9, texto fraco #6C7F7D (4.17:1), texto #102322 (16.11:1), preenchimento #00C09A com tinta #111E19 (7.36:1), e para link a menta escura #008060 (4.87:1), porque branco sobre #00C09A da 2.33:1 e reprova. Escuro: fundo #08100F, superficie #0F1919, borda sutil #192927, borda #253837, texto fraco #869695 (6.24:1), texto #EEF5F4 (17.41:1), acento #47E1BA (11.68:1), hover #5CF2CA, tinta sobre acento #061514. Sensacao: software de infraestrutura e banco de dados, vizinho do Supabase. Boa para o Conformis e para telas de sistema; um pouco fria demais para a landing institucional.
- PALETA 4, ARDOSIA E IRIS. Claro: fundo #FDFDFF, superficie #F6F6FA, borda sutil #E5E5ED, borda #D4D5DF, texto fraco #797984 (4.23:1), texto #1E1E28 (16.26:1), acento #6E52E3 (5.19:1 como link, 5.28:1 com texto branco em cima), hover #5E3DCF. Escuro: fundo #0E0E12, superficie #16171C, borda sutil #24242C, borda #33333D, texto fraco #91919A (6.16:1), texto #F3F3F7 (17.4:1), acento #9789FF (6.73:1), hover #A699FF. O neutro tem hue 285, ou seja, e um cinza levemente malva, casando com o iris (equivale ao Mauve da Radix). Sensacao: SaaS moderno, sem tocar em azul. Ressalva: violeta e a cor mais 'startup' da lista, otima para Conformis e TRB, discutivel diante de um presidente de camara.
- PALETA 5, TAUPE E AMBAR. Claro: fundo #FFFDFB, superficie #FAF6F3, borda sutil #EDE5DE, borda #DFD4CB, texto fraco #83786F (4.24:1), texto #271D15 (16.26:1), preenchimento #CF8700 com tinta #201910 (5.89:1), link em ambar escuro #A45300 (5.42:1), porque branco sobre #CF8700 da 2.95:1 e reprova. Escuro: fundo #120D0A, superficie #1C1611, borda sutil #2C231C, borda #3D3229, texto fraco #9A9089 (6.18:1), texto #F7F3EF (17.49:1), acento #F3B01D (10.15:1), hover #FFC039. Sensacao: ouro fosco, premium sobrio, ar de empresa que existe ha decadas sem parecer velha. Combina especialmente bem com Fraunces e com Instrument Serif.
- PALETA 6, TINTA E CORAL MAGENTA. Claro: fundo #FDFDFE, superficie #F7F6F8, borda sutil #E7E5EA, borda #D6D5DB, texto fraco #7B797F (4.23:1), texto #201E24 (16.23:1), acento de preenchimento #DC3864 com texto branco (4.38:1) e, para LINK, usar o mais escuro #C61E54, porque #DC3864 sobre o fundo claro da 4.31:1, logo abaixo do minimo de 4.5:1. Escuro: fundo #0F0E10, superficie #18171A, borda sutil #262429, borda #353339, texto fraco #939196 (6.17:1), texto #F4F3F5 (17.41:1), acento #FF6885 (6.94:1), hover #FF7894, tinta sobre acento #121115. Sensacao: editorial contemporaneo com sangue, tipo revista de cultura digital. E a mais arriscada das seis para o publico publico, mas a melhor se a marca quiser ser lembrada.
- MOVIMENTO, NEUTRO COM TEMPERATURA. Regra unica que separa amador de profissional: nao existe cinza puro na paleta. Todo neutro carrega uma chroma pequena (0.006 a 0.016) na mesma hue do acento, ou numa hue vizinha. E o que a Radix formalizou com Sand, Olive, Sage, Mauve e Slate, e o que a Tailwind v4 acabou de incorporar com taupe, mauve, olive e mist. Consequencia pratica: o fundo branco da paleta 2 e #FFFDFB e nao #FFFFFF, e o preto do tema escuro e #120D08 e nao #000000. Ninguem nota conscientemente, todo mundo sente.
- MOVIMENTO, TEMA POR TROCA DE TOKEN, NUNCA POR REGRA DUPLICADA. Estrutura: :root define os oito tokens do tema claro em hex, seguidos da mesma declaracao em oklch() para quem suporta; @media (prefers-color-scheme: dark) com :root:not([data-theme=light]) redefine SO os oito tokens; :root[data-theme=dark] repete para o botao de alternancia vencer nos dois sentidos. Nenhum componente sabe que existe tema. O hex vem antes do oklch porque oklch() so existe a partir do Chrome 111 e Firefox 113, e a maquina velha da camara do interior pode ser mais antiga que isso. Mesma logica para hover: declarar o hex do hover e so depois, opcionalmente, a versao com oklch(from var(--accent) calc(l - 0.06) c h).
- Infra-dark console: a estetica das empresas de infraestrutura de 2026 (Linear, Vercel, Railway, Resend). Fundo off-black com temperatura, nao preto puro (#0A0B0D a #0E1014), uma unica cor de destaque saturada em oklch, superficies elevadas por 1px de branco a 6% em vez de sombra cinza, e tipografia grotesk apertada. Profissional sem ser burocratico: parece painel de controle de gente que opera servidor, que e literalmente o que a Intelecto faz.
- Aurora com grao: gradiente de malha animado (tres a cinco radial-gradients de cores proximas, posicoes dirigidas por @property, ciclo de 20s a 30s) coberto por uma camada fixa de feTurbulence a 4% de opacidade em mix-blend-mode overlay. O grao e o que transforma gradiente CSS em material fotografico e mata a bandagem. Resolve a objecao contra 'zero imagem' sem precisar de banco de imagens.
- Luz como borda: nada de hairline cinza de 1px. A borda dos cards e um conic-gradient girando por @property, e o gradiente responde ao ponteiro. Um unico listener de pointermove no container escreve --x e --y, e cada card calcula seu proprio brilho em CSS. Sem cursor customizado, sem esconder o cursor do sistema.
- Tipografia cinetica fluida: manchete em clamp(2.75rem, 7vw, 6rem), letter-spacing negativo (-0.03em), text-wrap: balance, e uma varredura de luz lenta dentro das letras via background-clip: text. Grotesk moderna do Google Fonts (Inter Tight, Space Grotesk, Geist ou Instrument Sans) com fallback system-ui. A tipografia carrega o peso institucional que o azul gov.br carregava, mas com autoridade contemporanea.
- Movimento escravo do scroll: nada anima sozinho. Tudo que se move e dirigido por animation-timeline: view() e scroll(), portanto o usuario controla o ritmo. Deslocamento maximo de 24px, opacidade de 0 a 1, duracao amarrada a entry 0% cover 40%, tudo dentro de prefers-reduced-motion: no-preference.
- Estados declarativos reativos: header que ganha sombra so quando gruda, depoimento que acende quando faz snap, sombra de rolagem que aparece quando ha mais conteudo. Tudo via @container scroll-state(), zero listener de scroll em JS, zero jank em maquina fraca.
- Scrollytelling de produto: coluna de texto rolando contra um painel travado que troca de estado. E como se mostra Mirante e Conformis funcionando em vez de descreve-los em bullets, e e o oposto direto da estetica de documento anexado a processo.
- Bento grid vivo: grade assimetrica de cards de tamanhos diferentes (um card largo para o Mirante, dois medios, quatro pequenos de metricas), com stagger de revelacao por sibling-index() e spotlight que segue o ponteiro. Substitui a tabela como forma de organizar informacao densa.
- Prova social como infraestrutura, nao como logo wall generico: contadores que sobem uma vez (8 camaras, 2 prefeituras, 3 autarquias, 31 dominios em producao, 10+ anos), logos dos clientes em marquee lento com mascara de fade nas duas bordas, e um card de destaque para a TRB Pharma com quina chanfrada. Numeros reais dao mais autoridade que selo institucional.
- Continuidade entre paginas: view transitions cross-document (@view-transition { navigation: auto }) para que um site estatico multipagina em nginx se comporte como aplicativo, com o titulo e a imagem do card se transportando de uma pagina para outra em cerca de 300ms.

## O que evitar

- Azul institucional saturado do padrao gov.br e qualquer variacao dele. Nenhum dos 14 sites verificados usa azul corporativo como cor dominante; quando ha azul, e um acento pontual (#266DF0 na Attio, #4B70CC na Tailscale) ou e substituido por lavanda, roxo, verde ou terracota.
- Fundo #FFFFFF puro e texto #000000 puro. Nenhuma das referencias faz isso. Branco puro e o que produz a leitura de folha de papel que o dono rejeitou.
- Hairline de 1px cinza sobre branco como unica linguagem visual. A borda de 1px continua valida, mas so quando o painel tem grao, glow ou fundo tingido por dentro (Linear, Hex). Sozinha, ela e o vocabulario do documento anexado a processo.
- Tabela como elemento decorativo ou como forma de apresentar servico e preco na home. Tabela e para dado real; virar layout e o que da ar de planilha.
- Tipografia neutra de governo (Public Sans, Rubik generico, Open Sans, Roboto sem par). O problema nao e a fonte isolada, e usar UMA fonte neutra sozinha. Toda referencia premiada usa no minimo duas familias com papeis distintos, quase sempre com uma mono.
- Negrito como unica ferramenta de hierarquia. As referencias fazem hierarquia por contraste de FAMILIA e por peso LEVE em escala grande, o contrario do reflexo institucional.
- Foto de banco de imagens: reuniao, aperto de mao, plenario generico, servidor publico sorrindo, rack de servidor azulado. Zero ocorrencias nas 14 referencias.
- Gradiente roxo-para-azul generico de SaaS 2021 aplicado em fundo de secao inteira. Onde ha gradiente hoje, ele e derivado da rampa da propria marca (Modal) ou e um fio conico de borda (Resend), nao um lencol de fundo.
- Glassmorphism pesado com backdrop-filter em tudo. Clerk tem uma escada de dez niveis de blur, mas usa cada um em contexto especifico. Blur e a unica coisa cara do conjunto em maquina antiga de camara do interior: no maximo um ou dois usos, preferencialmente so na barra fixa.
- WebGL, shader e biblioteca de animacao pesada. O briefing exige rodar em maquina velha e o resultado visual das melhores referencias vem de opacity, transform, mask-image e um tile de ruido, nao de GPU.
- Parede de logos de clientes como prova social principal. Brasao de camara municipal nao carrega reconhecimento de marca e, agrupado, produz exatamente o visual de portal de prefeitura que se quer evitar. Trocar por numeros verificaveis e por citacao nominal com cargo.
- Carrossel de depoimento com foto redonda e aspas gigantes. As referencias usam citacao estatica com nome, cargo e empresa em texto, sem carrossel.
- Sombra difusa grande (box-shadow com blur alto) para separar card do fundo. Substituir por borda de 1px mais mudanca de fundo, ou por mask-image em gradiente.
- Herói com captura de dashboard flutuando em perspectiva com sombra. Ou o produto aparece em movimento e recortado por mascara (Linear, Attio), ou nao aparece e o espaco vai para ilustracao autoral (Fly.io).
- Animacao de entrada em todo elemento no scroll e qualquer forma de scroll-jacking. Movimento nas referencias e continuo e ambiente (grao, pontos, marquee), nao um desfile de blocos subindo.
- Icone line-art generico de biblioteca gratuita em grade de servicos. Se houver icone, deve ser SVG inline desenhado no mesmo peso de traco da tipografia.
- Cinco ou mais familias de cor competindo. A regra observada e uma cor de marca com seus vizinhos, mais no maximo um contraponto de temperatura oposta.
- Travessao no texto da pagina e em qualquer material escrito para o Luiz.
- Azul institucional gov.br e qualquer paleta que remeta a orgao publico. Nenhum dos 14 sites usa azul corporativo como cor dominante. Vercel chega ao extremo de zerar a saturacao da escala inteira.
- Fundo branco puro com hairline de 1px em cinza fixo formando grade de tabela. Clerk, que tem o melhor tema claro da lista, nao usa branco puro: usa #fff com um vies de sombra de 3% descendo pela pagina e bordas em alfa, nao em cinza fixo.
- Tipografia neutra com tracking padrao (Public Sans, Source Sans, Open Sans, Roboto no peso 400 e espacamento zero). O tracking negativo escalonado e universal nos 14 sites, e a ausencia dele e o que faz um titulo parecer documento em vez de produto.
- Screenshot cortado em borda reta. Praticamente todo screenshot dos 14 sites termina dissolvido por mask-image. Borda reta e o sinal mais rapido de pagina feita as pressas.
- Dissolucao com gradiente de duas paradas no tema claro: produz banda visivel, e em monitor antigo de camara, com profundidade de cor pior, a banda fica gritante. Usar a curva de muitas paradas do Mintlify.
- Gradiente de arco-iris colorido em fundo grande e blob organico difuso, estetica de 2020 e 2021. O gradiente conico moderno e usado como luz direcional ou borda fina, nunca como preenchimento de heroi.
- Glassmorphism com backdrop-filter espalhado pela pagina. E o filtro que mais trava em GPU integrada antiga. Raycast obtem a mesma sensacao de vidro empilhando box-shadow com inset, que e composto e barato. Linear usa backdrop-filter em UM elemento so, o cabecalho.
- Foto de banco de imagens, ilustracao de mascote e icone colorido de biblioteca generica. Nenhum dos 14 sites usa. A ilustracao, quando existe, e a propria interface do produto.
- Animacao de entrada em todo elemento ao rolar a pagina. Os sites de referencia animam pouco e com proposito. Alem disso e obrigatorio respeitar prefers-reduced-motion, principalmente em marquee e gradiente deslizante.
- WebGL, canvas de particulas e video de fundo em autoplay. O requisito de rodar em maquina velha de camara do interior elimina os tres, e nenhum efeito da lista precisa deles.
- oklch sem fallback em hex. Vercel, Modal, Trigger e Supabase usam oklch, mas o publico da Intelecto inclui navegador antigo. Declarar sempre a cor em hex ou hsl antes da versao em oklch.
- Mural de logos em cor cheia numa grade estatica. Brasoes de camara municipal tem cores, pesos e niveis de detalhe totalmente incompativeis entre si; em cor cheia destroem a composicao e, sendo 22 organizacoes, nao cabem numa grade. Dessaturar a 40% dentro de marquee mascarado.
- Dizer a quantidade de clientes por adjetivo ('diversos orgaos', 'varios clientes'). Os sites de referencia usam numero cru e grande. A Intelecto tem numeros verdadeiros e fortes: mais de 10 anos, 22 organizacoes, 31 dominios em producao, infraestrutura bare metal propria.
- Uma unica familia tipografica em toda a pagina. Todos os 14 sites usam no minimo duas (sans mais mono) e varios usam tres (mais uma serifa de display). Familia unica e justamente o que produz o ar de documento neutro que foi recusado.
- Empilhar o efeito de borda conica giratoria em varios elementos ao mesmo tempo. Ele repinta continuamente; usar em no maximo um ou dois pontos de destaque da pagina.
- Qualquer coisa que reencene o mockup rejeitado: branco #ffffff chapado, hairline cinza de 1px como unico recurso grafico, Public Sans, azul institucional do gov.br (#1351B4 e vizinhos), blocos de tabela, ar de peca anexada a processo. Nenhuma referencia deste lote usa branco puro como fundo de heroi.
- Azul corporativo generico como cor de marca (#2563EB, #0067b9, #0054f5 e afins) sem um segundo acento fora do azul. E o caminho mais curto para o site cinza corporativo que o dono nao quer.
- Globo 3D em WebGL girando no heroi. Virou clichê de provedor de cloud entre 2020 e 2024, custa CPU, quebra em maquina velha de camara e nao diz nada sobre onde as maquinas estao. A Latitude resolve o mesmo com quatro @keyframes de orbita.
- Mascote, coelho, asteroide, personagem: Bunny e Uberspace se sustentam nisso por causa do publico deles (dev hobbista). Presidente de camara e diretor de farmaceutica leem como brincadeira.
- Font Awesome, biblioteca de icones ou qualquer sprite externo (Bunny carrega o pacote inteiro). Alem de proibido pela restricao de CDN, engorda a pagina. Icone e SVG inline: Oxide tem 70, Scaleway 233, e nenhum arquivo externo.
- Glassmorphism e backdrop-filter em quantidade (Cloudflare usa 51 vezes). Derruba o scroll em GPU integrada antiga e ja soa a 2021.
- Gradiente cronico: 192 linear-gradient (Bunny) ou 92 mais 33 radial (Railway) exigem equipe. Em pagina estatica, gradiente em excesso vira cara de template de hospedagem barata.
- Numero de vaidade ou numero redondo inventado ('2M+ developers', '99,9%' sem medicao). A Intelecto tem numeros pequenos e VERDADEIROS (10 anos, 31 dominios em producao, 8 camaras, 2 prefeituras, 3 autarquias, 1 consorcio, 1 instituto, 7 empresas privadas). Numero pequeno verificavel bate numero grande generico neste mercado.
- Ilustracao isometrica de estoque com servidor, nuvem e engrenagem. E o oposto do movimento vencedor, que e fotografar a maquina de verdade.
- Carrossel de depoimentos girando sozinho com foto redonda e aspas gigantes. Substituir por logo do cliente mais uma metrica curta.
- Muro de features em grade: a Migadu (migadu.com) empilha mais de vinte cartoes de feature identicos e a pagina vira catalogo ilegivel. Purelymail (purelymail.com) vai ao extremo oposto, HTML quase sem estilo, e parece abandonada. Os dois extremos afastam cliente institucional.
- Dark mode como tema unico. Camara projeta em telao, imprime, abre em monitor velho com brilho baixo. Tem que ter os dois temas, definidos por tokens em :root, com o escuro sob prefers-color-scheme e sob data-theme, como fazem Oxide (36 ocorrencias) e Fastmail (50).
- animation-timeline e scroll-driven animation como base do layout (Railway usa 5 vezes). Serve como enfeite progressivo atras de @supports, nunca como estrutura, porque navegador velho de camara nao suporta.
- Copy de agencia sem substancia ('solucoes inovadoras', 'transformacao digital', 'parceria de sucesso'). Toda referencia forte deste lote fala de coisa concreta: 500ms de deploy, 47 U de rack, 61 TB por disco, 1,5 minuto para primeira resposta do suporte.
- Video de fundo no heroi e imagem pesada nao otimizada. A restricao de maquina velha e de celular do interior mata os dois.
- Tudo que ele ja rejeitou, nomeado para nao voltar por acidente: fundo branco com hairline preta de 1px, tabela usada como layout, azul institucional do gov.br, Public Sans ou qualquer neo-grotesca neutra de orgao publico, zero imagem, ar de peca anexada a processo licitatorio.
- Nao usar hairline clara sobre escuro achando que resolve sozinha. So funciona com o pacote completo (base #0B0B0C, um acento acido unico, grao por cima); hairline sem esse contexto volta a ler como planilha.
- Frutiger Aero, Y2K, Heisei Retro, dreamcore, kidcore, colagem de scrapbook e pixel lo-fi. Sao movimentos reais de 2026 mas infantilizam e queimam credibilidade com presidente de camara e diretor de farmaceutica.
- Surveillance aesthetic (grao de CCTV, timestamp, moldura de reconhecimento facial). Contradiz frontalmente quem vende DPO/LGPD.
- Brutalismo cru original: Times New Roman, link azul default, borda preta dura, sem estilo. Numa camara isso e lido como site quebrado, nao como escolha estetica.
- Neumorphism em pagina inteira, em texto ou em qualquer coisa que precise passar contraste WCAG. So como sombra inset em estado :active.
- Glassmorphism espalhado pela pagina. backdrop-filter e o efeito mais caro do CSS e a restricao inclui maquina velha de camara do interior. Maximo uma superficie fixa.
- Texto de corpo cravado direto sobre gradiente aurora. A luminancia varia ao longo da tela e o contraste cai abaixo dos 4.5:1 da WCAG 1.4.3 conforme a cor se move. Texto sempre em painel opaco.
- WebGL, Three.js, GSAP, Lottie e qualquer biblioteca via CDN. Barrado pela restricao de pagina autocontida e mata GPU integrada antiga. Canvas 2D leve e SVG resolvem.
- Monoespacada como fonte de toda a pagina. Mono e tempero para rotulo, numero e dado, nao a voz principal.
- Parallax de cinco camadas, scrolljacking e animacao presa a listener de scroll em JS. E exatamente o que trava maquina velha. Usar animation-timeline: scroll() e view() em CSS, com @supports de fallback.
- Hero com video autoplay e texto por cima do video. Peso, contraste imprevisivel e falha em conexao ruim de interior.
- Foto de banco de imagens: aperto de mao corporativo, gente sorrindo em sala de reuniao, servidor com luz azul. Le como agencia generica e destroi a tese de que esta gente e boa.
- Prova social como fileira achatada de logos em escala de cinza. Para a Intelecto o ativo e a especificidade (8 camaras, 2 prefeituras, 1 consorcio, 3 autarquias de saneamento, 1 instituto de previdencia, 7 empresas privadas, 31 dominios em producao, 10+ anos), entao os numeros e os nomes por segmento tem que ser o ornamento, nao um carrossel de logos.
- Inter como fonte de titulo. E correta e invisivel; le como template. Serifa de alto contraste no H1 (Fraunces ou Instrument Serif) sobre grotesca no corpo.
- Gradiente arco-iris de SaaS generico (indigo, teal, rosa, violeta na mesma tela). Puxar a aurora para a paleta da marca com no maximo tres matizes, senao a sobreposicao vira marrom.
- Mais de duas familias tipograficas mais um mono. Sistema de tres vozes no maximo.
- Animacao sem prefers-reduced-motion e tema sem prefers-color-scheme. Ambos sao obrigatorios aqui, inclusive porque o cliente publico cobra acessibilidade.
- Inter, Poppins, Montserrat, Roboto, Open Sans, Lato, Nunito, Space Grotesk e Plus Jakarta Sans. Todas batidas ao ponto de nao comunicarem nada. Space Grotesk em especial ja virou o clichê de startup 2021.
- Public Sans e qualquer neo grotesca de orgao publico. Foi exatamente o que o dono rejeitou, e a Typewolf explica o porque: neo grotesca soa fria e esteril, e o antidoto e uma grotesca com irregularidade proposital.
- Playfair Display e DM Serif Display. Sao as serifas de blog de casamento e de e-commerce de 2018. Se a direcao for serifa, usar Instrument Serif (condensada, contemporanea), Fraunces (expressiva, variavel) ou Newsreader e Literata (leitura). DM Serif Display ainda por cima e estatica, sem eixo nenhum.
- General Sans e Switzer. Verifiquei por HTTP: o endpoint do Google Fonts retorna 400 para as duas. Sao da Fontshare e exigiriam hospedar arquivo proprio, o que sai da restricao combinada.
- Azul institucional em qualquer tom: gov.br, #1E3A5F, #2563EB, #0052CC. Nenhuma das seis paletas usa azul, e isso e deliberado. Se um dia o azul voltar, que seja deslocado para iris (hue 286) ou para petroleo (hue 172), nunca o azul de link padrao.
- Cinza neutro puro sem temperatura (#FFFFFF, #F5F5F5, #333333, #000000). E metade do que fez o mockup parecer planilha. Todo neutro precisa de chroma pequena na hue do acento.
- Fundo branco com hairline de 1px, tabela e tipografia neutra. O dono ja disse nao. Substituir hairline por superficie elevada (fundo levemente diferente) e por bordas em alpha, e substituir tabela por cartao com hierarquia tipografica quando o dado permitir.
- Unbounded e Syne como fonte de texto. Ambas sao display de personalidade altissima; Unbounded em paragrafo e ilegivel e Syne cansa. No maximo uma palavra de manchete, e mesmo assim arriscado para publico institucional.
- Fraunces com WONK ligado no corpo do texto. O proprio especimen avisa que as substituicoes entram automaticamente abaixo de 18pt. WONK 1 so no h1 e no numero de destaque, com WONK 0 explicito em todo o resto.
- Mais de tres familias tipograficas ou mais de quatro arquivos de fonte. O alvo e uma variavel de texto, uma display e uma mono, tudo em woff2, com preconnect nos dois origins do Google Fonts e font-display: swap.
- font-display: block e qualquer FOIT. Em conexao ruim de camara do interior, o texto fica invisivel por segundos. Usar swap, e calibrar size-adjust no fallback para nao haver salto de layout quando a fonte chegar.
- Escala tipografica linear (16, 18, 20, 24, 28). E o ritmo de documento. Trocar por salto extremo: um tamanho enorme em clamp, um de leitura e uma mono minuscula, sem degraus intermediarios.
- Texto cinza claro tipo #999999 sobre branco. Nas seis paletas, o token de texto fraco foi calculado para ficar acima de 4.2:1 no claro e acima de 6.1:1 no escuro, justamente para nao repetir esse erro.
- Gradiente arco-iris, glassmorphism, blob roxo e rosa desfocado, sombra colorida gigante e ilustracao 3D generica. E o outro extremo do que ele rejeitou: em vez de burocratico, vira agencia de marketing vazia. Textura, se houver, vem de ruido em CSS (os props de ruido do Open Props), nunca de imagem decorativa.
- Uma sombra preta unica servindo tema claro e escuro. Sombra precisa de par por tema, senao no escuro ela some e a interface achata.
- Azul institucional do gov.br (#1351B4 e familia) e a paleta do Design System do governo. E exatamente o que o dono rejeitou e e o que faz o site parecer orgao publico em vez de fornecedor de tecnologia.
- Public Sans, Rawline e qualquer fonte associada ao padrao gov.br. Trocar por grotesk contemporanea com metrica apertada.
- Hairline de 1px em cinza (#E5E7EB) sobre branco puro como elemento estrutural. Se precisar de separacao, use gradiente que some nas pontas ou mudanca de superficie, nunca linha de tabela.
- Branco absoluto #FFFFFF e preto absoluto #000000. Tema claro em off-white com temperatura (#FAFAF9 a #F7F8FA) e tema escuro em off-black (#0A0B0D a #0E1014). Preto puro em OLED gera smearing no scroll e branco puro cansa a vista.
- Tabela como elemento visual principal. Comparacao de planos vira grade de cards com destaque; dados de carteira viram contadores; escopo de servico vira bento grid.
- Layout com cara de documento: cabecalho com data alinhada a direita, caixa de 'Objeto', numeracao de secoes, margens de folha A4, assinatura no rodape. Isso e proposta comercial, nao site.
- Parallax pesado de fundo com imagem grande deslocando muito. Se usar parallax, no maximo 8% a 12% de deslocamento em transform translateY, e sempre dentro de prefers-reduced-motion.
- Cursor customizado que esconde ou substitui o cursor do sistema. Quebra acessibilidade e usabilidade em maquina de camara, e ja e clichê de portfolio de agencia.
- backdrop-filter em area grande, em varios elementos empilhados, ou com blur animado. Limite de dois usos na pagina inteira, raio abaixo de 20px, nunca animar o raio.
- Animacao de entrada em absolutamente todos os elementos. Escolher no maximo tres momentos de revelacao por pagina; o resto entra pronto. Movimento que aparece em tudo vira ruido e denuncia template.
- Neon roxo saturado de template SaaS generico (#7C3AED com glow forte), gradiente rosa-para-roxo, e o visual cyberpunk. Nao passa no teste do diretor de farmaceutica.
- Ilustracoes isometricas de startup, icones de banco de imagens, mockup de laptop flutuando em angulo, foto de aperto de mao em reuniao. Se precisar de imagem, use captura real do Mirante e do Conformis.
- Sombra difusa cinza padrao (box-shadow: 0 4px 6px rgba(0,0,0,.1)). Em tema escuro, elevacao se faz com borda luminosa e mudanca de superficie, nao com sombra.
- Marquee de logos rodando rapido ou sem mascara de fade nas bordas. Velocidade de 40s a 60s por ciclo, pausar no hover, e prefers-reduced-motion desliga.
- Texto sobre gradiente ou sobre imagem com contraste abaixo de 4.5:1. Gradiente em texto so em manchete de display, com cor solida declarada antes como fallback.
- Video em autoplay, WebGL pesado, ou qualquer bundle que passe de algumas centenas de KB. A restricao de maquina velha de camara do interior e real e derruba o argumento de competencia tecnica se o site travar.
- Depender de feature de ponta sem @supports. sibling-index(), scroll-state(), animation-trigger e view transitions precisam ter o estado degradado bonito, nao quebrado.
- Bloco de texto centralizado em largura total da tela. Medida de leitura entre 60 e 75 caracteres (max-width: 65ch), sempre.

---

## Sites analisados

### Linear

<https://linear.app/>

**Estética:** Fundo #08090A (preto levemente azulado, nunca preto puro). Texto principal #E2E4E7, texto secundario #8A8F98, terciario #62666D, bordas #2E2E32 e #3E3E44. Tipografia InterVariable em arquivo proprio, titulos com tracking negativo e peso intermediario (~510), corpo em 15-16px. A pagina inteira e uma pilha de PAINEIS: cada bloco e um retangulo com borda de 1px, canto arredondado, e dentro dele duas camadas empilhadas, uma div de grao (classe .grain com inset:1px, imagem de ruido em opacity 0.08) e uma div de glow. Cor saturada aparece so como pontinho dentro de ilustracoes de produto: indigo #4354B8, laranja #E5591D, rosa #F79CE0, ciano #55CDFF, verde #89D196, roxo #8B5CF6. Movimento: uma matriz de pontos animada com keyframes nomeados individualmente (grid-dot-4-4-agent, grid-dot-4-3-pong, grid-dot-4-2-updown), cada ponto oscilando opacity 0.3 em 16 passos de 6,25%, desenhando padroes que atravessam a grade. Herói: 'The product development system for teams and agents' com subtitulo 'Purpose-built for planning and building products.' Prova social e citacao nominal com cargo e empresa (Gabriel Peal/OpenAI, Nik Koblov/Ramp, Kaz Nejatian/Opendoor) mais o numero 'over 40,000 product teams', nao parede de logo anonima.

**Técnica:** Cabe inteiro em CSS puro. O grao e um webp de ruido em background-repeat com opacity 0.08 dentro de cada painel. A matriz de pontos e uma grade de spans com animation-delay escalonado, zero JS, e anima so opacity (a propriedade mais barata que existe, roda liso em maquina velha). Tema controlado por atributo data-theme no root.

**Aplicável:** E o modelo estrutural que a Intelecto deve adotar: cada produto (Mirante, e-mail .leg.br, Conformis, ITSM) vira um painel com borda de 1px, grao interno e glow, em vez de card branco com sombra. A matriz de pontos animada pode virar a representacao dos 31 dominios em producao ou dos municipios atendidos, gerando movimento sem imagem, sem biblioteca e sem peso. O padrao de prova social por citacao nominal serve melhor que logo de camara, porque nome de presidente de camara e cargo tem mais peso que brasao.

### Vercel

<https://vercel.com/>

**Estética:** Monocromatico radical. Preto e branco puros como base, e TODO o resto da interface sai de uma escala de cinza numerada exposta como token: --ds-gray-200, --ds-gray-400, --ds-gray-alpha-200, --ds-background-100, com variantes alpha para superficies empilhadas. Nao existe cor de marca no layout, a cor so entra em logo de terceiro. Tipografia Geist (sans) e Geist Mono no mesmo par, arquivos woff2 proprios com nome hasheado. Botoes e campos declaram altura, --x-padding e --themed-border como variaveis locais, entao o mesmo componente muda de densidade trocando tres numeros. Titulo atual da home: 'Agentic Infrastructure'.

**Técnica:** E a licao de arquitetura de tokens mais util do lote: uma unica rampa numerada de cinza (100 a 1000) mais uma rampa alpha resolve tema claro e escuro sem duplicar regra, porque so os valores da rampa mudam no :root. Cem por cento CSS custom properties, nenhum framework necessario.

**Aplicável:** E exatamente a espinha dorsal tecnica que a Intelecto precisa para claro/escuro sem manutencao dobrada: definir --gray-100..1000 e --bg-100/200/300 no :root, redefinir so a rampa no tema escuro, e nunca escrever cor literal em componente. Resolve o requisito de dois temas com um bloco de CSS. O par Geist pode ser substituido por Inter + JetBrains Mono do Google Fonts sem perder o efeito.

### Resend

<https://resend.com/>

**Estética:** Canvas preto absoluto (#000000, com --bg-color declarado como linear-gradient(#000,#000)). Escala de cinza fria e curta: #A0A0A0 e #ABABAB para texto de apoio, #6C6C6C para desativado, #EBECED para texto forte, #535353 e #1B1B1B para superficie e borda. Um unico desvio de temperatura: #C7C2BC, um cinza QUENTE, usado como contraponto no meio de tudo frio. Assinatura visual da marca: a borda luminosa giratoria, declarada como --border-color: conic-gradient(from var(--angle) at 50% 50%, ...), ou seja um gradiente conico cujo angulo e animado, produzindo um fio de luz que da a volta na borda do card. Mascaras em linear-gradient cortam as capturas de produto para elas sumirem na base em vez de terminarem em moldura. Easing propria cubic-bezier(.36,.66,.6,1). Respeita prefers-color-scheme.

**Técnica:** A borda giratoria e o truque mais copiavel do conjunto: exige @property --angle {syntax:'<angle>'; inherits:false; initial-value:0deg} e uma animation que vai de 0deg a 360deg, com o conic-gradient num pseudo-elemento atras do card. Puro CSS, sem JS, sem canvas. Onde @property nao existe, a borda simplesmente fica estatica, entao degrada sozinho. Custo de GPU baixissimo.

**Aplicável:** A borda luminosa e o efeito de maior retorno visual por linha de codigo para o site da Intelecto: aplicada so no card do produto principal ou no botao de contato, ja tira a pagina do lugar de 'documento' sem virar enfeite. O truque do cinza quente unico (#C7C2BC) no meio de uma paleta fria e uma forma barata de a pagina parecer autoral e nao gerada por template.

### Clerk

<https://clerk.com/>

**Estética:** Escuro em tres camadas com hierarquia declarada: fundo #131316, superficie elevada #212126, borda #2F3037, texto #F7F7F8 e #D9D9DE, apoio #747686 e #5E5F6E. O acento e um ciano eletrico usado como LINHA, nao como preenchimento: --stroke-color:#5DE3FF e #64E5FF desenham contornos, fios de conexao e halos, o que faz a pagina parecer um diagrama tecnico iluminado em vez de um site colorido. Duas caracteristicas de artesanato aparecem na fonte: mask-image usado 61 vezes (tudo desaparece em gradiente, quase nada tem borda dura ou sombra) e uma escada completa de backdrop-filter (blur de 1, 2, 3, 4, 5, 6, 8, 10, 12 e 16px), ou seja o desfoque e um token de profundidade graduado, nao um efeito solto. Movimento governado por duas easings repetidas: cubic-bezier(0.33,1,0.68,1) usada 60 vezes e cubic-bezier(0.4,0.36,0,1) usada 46 vezes. Ha mix-blend-mode:overlay para os halos.

**Técnica:** Mask-image em linear-gradient e backdrop-filter sao CSS puro e amplamente suportados. Atencao ao publico da Intelecto: backdrop-filter e a UNICA coisa cara aqui em maquina antiga, entao usar no maximo dois niveis da escada (por exemplo 8px na barra fixa) e nao dez. Ja o mask-image e praticamente gratis e resolve sozinho o fim de qualquer bloco.

**Aplicável:** Duas apropriacoes diretas: (1) trocar toda sombra por mask-image em gradiente, o que faz capturas do Mirante e do Conformis terminarem em fade em vez de retangulo recortado, e (2) adotar o ciano como fio de contorno para desenhar a topologia de infraestrutura propria (Proxmox, Coolify, Docker, 31 dominios) como diagrama luminoso. Isso comunica competencia de infra sem uma unica foto e sem virar marketing.

### Attio

<https://attio.com/>

**Estética:** A melhor referencia de TEMA CLARO do lote, e prova que claro nao precisa ser branco de documento. A base nao e #FFF: e #EEEFF1 e #E6E7EA, cinzas levemente frios, com o conteudo em cartoes mais claros por cima, tinta #101112 e #1C1D1F, texto secundario #75777C e #5C5E63, borda #CDCED2. Escuro correspondente em #242629 e #2E3238. Tokens nomeados por RAMPA e por FUNCAO ao mesmo tempo: --color-black-50 ate --color-black-400 alimentando --color-surface, --color-weak-stroke, --color-primary-background, --color-caption-foreground. Acento azul #266DF0 usado com parcimonia, mais uma familia de estados semanticos (verde #007D53 sobre #CBF7E1 e #E0FCED, vermelho #FF5454) que vem direto da UI do produto para a landing. Uso extremo de mask-image (91 ocorrencias) e um canvas para a animacao de radar do pipeline.

**Técnica:** O par rampa-numerada mais alias-semantico e o padrao correto e e CSS puro. O canvas do radar e opcional e existe uma versao CSS equivalente (dois circulos com scale e opacity animados). Declara prefers-reduced-motion, o que e obrigatorio num site que vai rodar em maquina de camara.

**Aplicável:** Resolve o problema central do briefing: o dono rejeitou 'documento branco', e Attio mostra o caminho, que e um claro CINZA (#EEEFF1) com cartoes mais claros por cima, invertendo a logica do papel. Copiar tambem a ideia de trazer as cores de estado do proprio produto (verde de conformidade, vermelho de pendencia) para a pagina de vendas: no caso da Intelecto, o verde de item LGPD atendido e o vermelho de prazo Interlegis vencendo em maio/2027 viram elementos visuais legitimos, nao decoracao.

### Hex

<https://hex.tech/>

**Estética:** O sistema de tema mais sofisticado que encontrei, e o mais instrutivo para quem precisa de claro e escuro de verdade. Escuro: #01011B, #0F0F15, #111118, #14141C. Claro: #FCF8F8, #F9F1F1, #ECEDF2, com bordas #E9E5E8 e #DBD7DA. Tokens numerados em duas direcoes, --bg100 ate --bg500 e --fg100 ate --fg1200, mais nomes com voz propria (--fontColorLOUD, --fontColorDEFAULT, --grid300, --grid500). Tipografia em TRES vozes deliberadas: PP Formula SemiExtended (grotesca LARGA, quase condensada ao contrario, para display), GT Cinetype (sans de desenho tecnico, para interface), PP Editorial New (serifa editorial, para citacao e enfase) e IBM Plex Mono para dado. A paleta de dados nao e inventada: sao as cores exatas do colormap viridis (#472D7B, #3B528B, #21918C, #5EC962, #ADDC30, #FDE725), o que sinaliza para quem entende que ali tem gente de dados de verdade. Textura: existe um token de PAPEL, --texture-paper-img apontando para bkg-noise.webp (tile de 200px) no escuro e light-bkg-noise.webp (tile de 256px) no claro, com --texture-paper-mixBlendMode. O grao e ANIMADO por @keyframes noise que move background-position de -1024px para 0.

**Técnica:** O grao animado e literalmente quatro linhas de CSS e um webp de alguns KB, sem JS, sem canvas: @keyframes noise{from{background-position:-1024px -1024px}to{background-position:0 0}}. Roda em qualquer maquina. Trocar a textura por tema via variavel e a jogada esperta, porque ruido claro sobre fundo claro precisa de outro contraste que ruido branco sobre preto. backdrop-filter blur 7.5px e 15px so em sobreposicao.

**Aplicável:** Esta e a referencia numero um para a Intelecto. Primeiro, o esquema de tres tipografias (grotesca larga em titulo, sans tecnica em interface, serifa editorial em citacao de cliente) resolve o 'moderno e profissional' sem gastar um pixel de enfeite, e da para montar com Google Fonts apenas. Segundo, o token --texture-paper-img trocando de ruido conforme o tema e a resposta exata para 'nao quero cara de documento': e a textura que tira a pagina do papel. Terceiro, os nomes de token com voz (LOUD, DEFAULT) tornam o CSS legivel meses depois.

### Modal

<https://modal.com/>

**Estética:** Preto com temperatura verde-oliva, nao cinza: fundo #141614 e #212525, superficie #28281F (um preto claramente amarelado). Sobre isso, uma RAMPA inteira de verde neon em vez de uma cor unica: #80EE64, #7BEB63, #6FE562, #5ADA60, #3DCA5D, #18B759, #10A550, #09AF58, #059345, mais o mint claro #BFF9B4 e um laranja de contraponto #FF8E63. Ter nove verdes vizinhos, em vez de um so, e o que produz a sensacao de gradiente vivo e de dado em movimento sem usar imagem. Usa mix-blend-mode:multiply em oito lugares para as camadas de cor se somarem em vez de se cobrirem, e um canvas para o grafico de infraestrutura. Alterna tema por data-theme. Titulo: 'High-performance AI infrastructure'.

**Técnica:** A rampa de nove tons vizinhos e apenas uma lista de custom properties, e serve tanto para gradiente (linear-gradient encadeando 4 deles) quanto para colorir barras de um grafico SVG inline. mix-blend-mode e CSS puro e barato. O canvas e substituivel por SVG inline com stroke-dasharray animado, que roda melhor em hardware fraco.

**Aplicável:** Duas licoes praticas: (1) escolher UMA cor de marca e derivar dela oito a dez vizinhos, e depois nunca mais usar outra familia, o que sozinho ja da unidade de site premiado; (2) preto quente ou frio, mas nunca #000 neutro, porque o preto tingido e o que separa visualmente de tema escuro padrao de framework. Para a Intelecto, a rampa pode sair do azul ou do verde e alimentar os graficos de transparencia do Mirante, que ja sao dado real.

### Temporal

<https://temporal.io/>

**Estética:** O oposto do sobrio, e funciona porque e disciplinado. Fundo #000000 puro e por cima dele uma paleta de acentos altamente saturados, cada um usado o mesmo numero de vezes (31 ocorrencias cada, o que indica um sistema, nao improviso): roxo #B664FF, magenta #FF6BFF, lima #C3FF62, mint #1FF1A5, verde #34D399, indigo #444CE7, vermelho #FF5555, mais #DBFF4B e azul #0066FF. Tipografia Aeonik Light, ou seja titulo grande em peso LEVE, nao bold, o que e uma inversao deliberada: escala grande com peso fino le como confianca, escala grande com peso pesado le como anuncio. Titulo: 'Durable Execution Solutions'.

**Técnica:** Nao ha nenhuma tecnica cara aqui, e esse e o ponto: o efeito vem inteiro da escolha de paleta e do peso tipografico. Aeonik e comercial, mas o mesmo gesto sai com Inter no peso 200/300 em tamanho grande, ou com Space Grotesk, ambos no Google Fonts.

**Aplicável:** E a prova de que 'profissional' nao exige paleta apagada. Para a Intelecto, o aprendizado transferivel e o PESO: colocar o titulo do herói em 56 a 72px com peso 300 e tracking negativo derruba imediatamente qualquer leitura de documento oficial, custa zero e funciona igual em maquina velha. A disciplina de usar cada acento o mesmo numero de vezes tambem vale como regra de projeto.

### Chainguard

<https://www.chainguard.dev/>

**Estética:** Empresa de seguranca de cadeia de software, ou seja o publico mais desconfiado que existe, e mesmo assim a paleta e agressiva: magenta #EB02E0 dominante (242 ocorrencias), violeta #6226FB, laranja #F85722, carmim #D40555, ciano #00A0EB, sobre navy quase preto #0D161C e #192228, com off-white levemente lilas #F8F6FE e #F1ECFE no lado claro. A estrutura do herói e o que mais importa: headline 'Secure-by-default open source software', dois botoes ('Talk to an expert' e 'Get started free', ou seja um caminho consultivo e um self-service lado a lado) e logo abaixo uma FILEIRA DE NUMEROS grandes como prova, nao uma parede de logos: 2.500+ projetos, 260 mil+ versoes, 520 mil+ imagens, 1 bilhao+ de manifests, 2 milhoes+ de versoes de biblioteca.

**Técnica:** A fileira de estatisticas e um grid de quatro a cinco colunas com o numero em display grande e o rotulo em mono minusculo, com contador animado opcional via IntersectionObserver e requestAnimationFrame (umas 20 linhas de JS puro, ou estatico se preferir). Nada aqui exige biblioteca.

**Aplicável:** Este e o padrao de prova social que serve melhor a Intelecto do que logo de cliente, porque brasao de camara municipal nao carrega marca reconhecivel e junta tudo num visual de portal de prefeitura. Trocar por numeros verificaveis: 10+ anos, 8 camaras, 2 prefeituras, 3 autarquias de saneamento, 1 consorcio, 1 instituto de previdencia, 7 empresas privadas, 31 dominios em producao, infraestrutura bare metal propria. E o mesmo argumento dos dois botoes: 'Falar com especialista' para o presidente de camara e 'Ver o Mirante' para quem quer olhar sozinho.

### Fly.io

<https://fly.io/>

**Estética:** A referencia mais autoral e a que menos parece SaaS. Tres tipografias com papeis nitidos: Mackinac (serifa de display com contraste alto, usada em titulo grande), Fricolage Grotesque (grotesca variavel para interface) e Fragment Mono (mono de largura estreita para rotulo, comando e metadado), com versoes italicas dos tres. Paleta lavanda e roxa incomum para infraestrutura: cinza-roxo #686082 como texto de apoio, lavandas #D5CFEF, #E6E0FE, #D4C4FD, #F4F3FB como superficie, e roxos saturados #7C3AED, #5046E4, #996BEC, #BA7BF0, mais azul #4D7CFE. Nada de captura de dashboard: sao 30 imagens de ILUSTRACAO com personagem e cena, num registro quase editorial, e apenas 6 SVGs. Copy no mesmo registro: 'Computers for agents' seguido de 'Sandboxes aren't enough.', frase curta e opinativa, sem jargao de marketing.

**Técnica:** Nao ha nenhum efeito pesado, o valor esta na direcao de arte e no par serifa-display + mono. Substitutos no Google Fonts com desenho equivalente: Instrument Serif ou Fraunces no lugar de Mackinac, Bricolage Grotesque no lugar de Fricolage, e o proprio Fragment Mono esta disponivel no Google Fonts.

**Aplicável:** E o antidoto exato ao que o dono rejeitou. Mostra que uma empresa de INFRAESTRUTURA pode usar serifa de display e cor lavanda e ainda ser lida como tecnica e seria, desde que a mono segure o rigor. Para a Intelecto, uma serifa de display no titulo (Instrument Serif) mais Fragment Mono nos rotulos de dado (uptime, numero de dominios, versao) cria personalidade instantanea sem custar nada e sem risco de virar agencia de marketing.

### Anthropic

<https://www.anthropic.com/>

**Estética:** O melhor exemplo de tema claro QUENTE, que e o caminho oposto ao branco de documento sem cair no escuro. A base e marfim: #FAF9F5 e #F0EEE6, com superficie #E8E6DC, cinzas quentes #C6C4BA, #B0AEA5, #87867F, #3D3D3A, e tinta #141413 (preto amarelado, nunca #000). Um unico acento em toda a marca, terracota #D97757, usado com extrema economia. Tipografia com serifa PROPRIA de display ('Anthropic Serif', com fallback declarado para Georgia) contra uma sans neutra no corpo, ou seja a hierarquia e feita por CONTRASTE DE FAMILIA, nao por tamanho ou negrito. Movimento minimo e civilizado: @keyframes marquee para a faixa de logos, @keyframes fadein, easing cubic-bezier(0.16,1,0.3,1) (easeOutExpo, entra rapido e assenta devagar) e prefers-reduced-motion respeitado em sete lugares distintos.

**Técnica:** Tudo trivial em CSS puro e leve. A declaracao de fallback para Georgia e um detalhe importante: mesmo que a fonte custom nao carregue em maquina lenta, a pagina continua com serifa e nao desaba para Arial. Marquee de logos e uma animation de translateX com o conteudo duplicado, sem JS.

**Aplicável:** E o registro tonal certo para o publico duplo da Intelecto: marfim quente e terracota leem como instituicao SERIA e contemporanea ao mesmo tempo, e nao carregam nenhuma associacao com portal de governo. Serve como tema claro, com o Linear/Hex servindo de tema escuro, e os dois convivem porque ambos evitam branco e preto puros. A regra de UM acento so, aplicado com economia, e a diferenca entre parecer maduro e parecer template.

### Tailscale

<https://tailscale.com/>

**Estética:** Neutros quentes num produto de rede e seguranca, o que e uma escolha contraintuitiva e por isso memoravel. Claro em #EEEBEA (off-white levemente rosado, nao cinza), escuros em #181717, #232222, #2E2D2D e #0C0404, cinzas #7F7F7F, #BCBCBC, #444444, #4F4F4F. Acentos que fogem do azul corporativo: periwinkle #ADC7FC e azul #4B70CC de um lado, e do outro um par de tijolo/vinho #BF3F3F, #DD9B9B, #722626, que aparece em alerta e destaque. Usa grao e responde a prefers-color-scheme. Titulo: 'Secure Connectivity for AI, IoT & Multi-Cloud'.

**Técnica:** Paleta e textura, sem efeito caro. O grao e o mesmo padrao de tile de ruido do Linear e do Hex. prefers-color-scheme como base, o que e o comportamento correto antes de qualquer botao de tema.

**Aplicável:** Mostra que uma empresa que vende CONECTIVIDADE E SEGURANCA (exatamente o territorio da Intelecto com e-mail institucional, hospedagem gerenciada e LGPD) nao precisa de azul frio nem de cadeado. O par periwinkle e tijolo e uma paleta pronta que a Intelecto pode adaptar: periwinkle para o eixo publico (camaras, Mirante) e o vinho ou terracota para o eixo privado (Conformis, TRB), diferenciando os dois publicos dentro do mesmo site sem construir dois sites.

### Baseten

<https://www.baseten.co/>

**Estética:** Tema claro com tintura de sagem, mais uma prova de que branco puro nao e obrigatorio: fundos #F5F8F4 e #F0F5EE (branco levemente esverdeado), superficies #E1EADD, bordas #B9C6B3 e #A4B09F, com verde neon #19E76E e #00B86B como acento, mais rosa #FFA9FD, ambar #EDB54B e terracota #C36E3B como cores de apoio. O detalhe mais revelador de artesanato: a MESMA curva de easing, cubic-bezier(0.5,0.2,0.4,1), aparece 98 vezes na folha de estilo. Uma unica assinatura de movimento em todo o site, o que faz cada hover, cada abertura e cada transicao parecerem a mesma mao. Titulo: 'Inference Platform: Deploy AI models in production'.

**Técnica:** Zero tecnica exotica. O aprendizado e de PROCESSO: declarar --ease: cubic-bezier(0.5,0.2,0.4,1) e --dur: 180ms uma vez no :root e usar sempre esses dois em toda transicao do site. Custo nenhum, ganho de coesao enorme.

**Aplicável:** Duas apropriacoes diretas: (1) o fundo claro tingido (verde ou azul de baixissima saturacao, tipo #F5F8F4) resolve o tema claro sem cara de papel e sem exigir escuro; (2) a regra de uma easing so, tokenizada, e provavelmente a mudanca de maior impacto por menor esforco no site da Intelecto, porque e o que separa 'tem animacao' de 'tem direcao de movimento'.

### Railway

<https://railway.com/>

**Estética:** Inversao de tema declarada de forma exemplar e curta: no claro, --background: hsl(0,0%,100%) e --secondaryBg: hsl(0,0%,98%); no escuro, --background: hsl(250,24%,9%) e --secondaryBg: hsl(250,21%,11%), com --foreground trocando entre os dois. Ou seja o escuro nao e cinza, e um roxo-preto (matiz 250) com saturacao de 24 por cento, o que aparece na pagina como #13111C, #121015, #0E0717, #0B0812. Acentos: rosa #F9A8D4, roxo profundo #13044C e #2C0A5C, magenta #5E084D, mais um par quente #C67839 e #609F89. O mais importante para as restricoes da Intelecto: o site inteiro roda com fontes do GOOGLE FONTS, quatro familias com papeis distintos, Inter (corpo, 300 a 800), Inter Tight (titulo, versao mais estreita para escala grande), JetBrains Mono (codigo e rotulo tecnico) e IBM Plex Serif (incluindo italico, para citacao e enfase editorial). Titulo: 'The all-in-one intelligent cloud provider'.

**Técnica:** Este e o unico do conjunto que e integralmente reprodutivel dentro das restricoes do briefing: Google Fonts e permitido, HSL em custom property e CSS puro, e a inversao de tema e literalmente seis declaracoes. Usar HSL em vez de HEX nos tokens permite gerar variacoes com calc no proprio CSS.

**Aplicável:** E o esqueleto tecnico pronto para copiar: tokens em HSL, matiz unico tingindo todo o escuro (a Intelecto pode usar matiz 215 azul ou 160 verde no lugar de 250), e o quarteto Inter Tight + Inter + JetBrains Mono + IBM Plex Serif entrega a hierarquia de tres vozes do Hex e do Fly sem uma unica fonte comercial. A presenca de uma SERIFA com italico num provedor de nuvem e o sinal mais claro de que serifa nao significa documento burocratico, significa voz editorial.

### Linear

<https://linear.app>

**Estética:** Escuro nativo, nao e um tema alternativo: fundo #08090a, paineis #0f1011, e por cima deles um veu de luz de 3% (linear-gradient(0deg,#ffffff03,#ffffff03) sobre o painel) que separa camadas sem usar borda. Tipografia InterVariable, uma so familia, com peso 500-560 nos titulos e 400 no corpo, tracking negativo que cresce com o tamanho. Titulo do hero grande com text-wrap:balance (as linhas quebram equilibradas em vez de deixar uma orfã). Cabecalho flutuante com backdrop-filter: blur(32px) mais um gradiente 180deg que dissolve o fundo do header no conteudo. O gesto assinatura e o shine: um feixe de luz radial de 200px (--shine-beam-length) que percorre a borda de cards via -webkit-mask-image: radial-gradient(ellipse ... at var(--mask-x)), cor #383b3f. Hairlines nunca sao border: sao box-shadow: 0 0 0 1px #08090a1a, 0 0 64px #08090a66, ou seja, o contorno de 1px e a sombra ambiente saem da mesma declaracao. Secoes de produto numeradas 1.0 a 5.0. Blocos de codigo com paleta autoral (keyword #F79CE0 rosa, string #ffdf9f ambar, comentario #8B93A1). Prova social: tres depoimentos citados de executivos (OpenAI, Ramp, Opendoor) mais a frase de escala 'over 40,000 product teams', nao um mural de logos anonimo.

**Técnica:** CSS puro, sem biblioteca. O shine precisa de @property para animar --mask-x com suavidade; onde nao houver suporte, um pseudo-elemento com transform translateX faz o mesmo e e mais barato. O truque do hairline por box-shadow em vez de border e gratuito e evita o pulo de 1px no layout. text-wrap:balance e uma linha de CSS que degrada sem quebrar nada.

**Aplicável:** O hairline por box-shadow e a separacao de camadas por veu de luz de 3% resolvem o problema central da Intelecto: dar hierarquia sem desenhar tabela nem moldura, que foi exatamente o que o dono rejeitou. As secoes numeradas 1.0 a 5.0 sao o formato ideal para explicar um fluxo (protocolo, tramitacao, publicacao no portal) com ar de engenharia e nao de manual. A prova social por citacao nomeada mais numero de escala cabe perfeito na carteira real: tres falas de presidentes de camara e diretores, mais 'X orgaos, Y dominios em producao'.

### Vercel

<https://vercel.com>

**Estética:** Neutralidade radical e proposital: a escala de cinza inteira e definida em HSL com matiz 0 e saturacao 0%, do --ds-gray-100 ate --ds-gray-1000. Claro: fundo #fff, superficie #fafafa, texto no cinza 9%. Escuro: fundo #000 preto puro, superficie 4% de luminancia, texto no cinza 93%. Nao existe azul institucional em lugar nenhum; a cor so entra em graficos e badges. Tipografia Geist Sans nos textos e Geist Mono nos rotulos, numeros e eyebrows, com fallback declarado (GeistSans Fallback) para nao dar salto de layout. Usa oklch pesado (173 ocorrencias) para interpolar cor sem sujeira. A luz nao vem de gradiente colorido: vem de um bloco solido cinza com blur enorme e opacidade baixissima (bg-gray-1000 com blur-[120px] e dark:opacity-15, invisivel no claro), ou seja, um halo monocromatico. Bordas de topo e base de screenshots dissolvidas por -webkit-mask-image: linear-gradient(#000 50%, #0000 95%). Prova social por carrossel de clientes em keyframe proprio (customer-carousel scroll).

**Técnica:** Tudo reproduzivel. A escala de cinza dessaturada e so uma lista de custom properties; o halo e uma div com background solido, border-radius grande, filter: blur(120px) e opacity baixa, composto pela GPU e barato ate em maquina fraca. Cuidado com oklch: exige navegador recente, entao precisa de fallback em hex antes da declaracao oklch. Geist e Geist Mono estao no Google Fonts (verificado, HTTP 200), logo cabem na restricao.

**Aplicável:** Este e o antidoto direto ao que o dono recusou. Ele rejeitou 'azul gov.br e ar de planilha', e a resposta da Vercel e provar que seriedade vem de uma escala de cinza perfeitamente dessaturada mais uma unica cor de acento usada com avareza, nao de um azul de orgao publico. O par Geist Sans e Geist Mono da a voz tecnica que a Intelecto precisa para falar com diretor de farmaceutica sem parecer agencia. O halo cinza com blur e a forma de ter luz e profundidade sem gradiente colorido, que envelhece rapido.

### Resend

<https://resend.com>

**Estética:** A referencia mais util da lista para quem tem dois publicos, porque mistura tres tipografias com funcoes distintas: Domaine (serifa de display) nos titulos de secao, ABC Favorit ou Inter no corpo, e Commit Mono no codigo e nos rotulos. Titulo hero 'Email for developers' com quebra dura entre as duas metades. Tracking negativo agressivo e escalonado: -.01em, -.02em, -.03em nos tamanhos pequenos e ate -.08rem nos titulos grandes. Escuro por padrao com selection colorida diferente por tema (selection:bg-black/10 no claro, selection:bg-white/20 no escuro), um detalhe que quase ninguem faz. Linhas de luz de 1px e 300px de largura posicionadas nos cantos, visiveis so no escuro (h-px w-[300px] hidden dark:block): sao filetes de luz, nao bordas de tabela. Sombras de rolagem (scroll-shadow-line) que aparecem quando ha conteudo fora da area. O produto e mostrado como UI reconstruida em DOM (editor, dashboard de analytics, webhooks), nao como screenshot: da para ver os componentes reais.

**Técnica:** Tudo CSS puro. A linha de luz de 1px e uma div com height:1px e um linear-gradient horizontal que vai de transparente a cor e volta a transparente; custo zero. A selection por tema sao duas regras. A UI reconstruida em DOM e mais leve que screenshot (nao carrega imagem), fica nitida em qualquer densidade de tela e e responsiva de graca. Domaine e comercial, mas Instrument Serif no Google Fonts (verificado) faz o mesmo papel de serifa de display.

**Aplicável:** O modelo de tres tipografias com papeis separados resolve o problema dos dois publicos da Intelecto numa unica pagina: serifa de display para a voz institucional que fala com a camara, sans para o corpo, mono para os numeros e rotulos tecnicos que impressionam o diretor da TRB. E a UI reconstruida em DOM e a recomendacao mais forte de todas para o Mirante e o Conformis: mostra o produto de verdade, pesa menos que um PNG, funciona na maquina velha da camara e nao precisa de screenshot novo a cada release.

### Clerk

<https://clerk.com>

**Estética:** Trabalha claro e escuro com igual esmero, o que e raro. No claro o fundo nao e branco puro: e linear-gradient(#0000 0%, #00000008 100%) sobre #fff, ou seja, um vies de sombra de 3% que desce pela pagina, e superficies em #f7f7f8f2 com transparencia. Bordas em cor com alfa em vez de cinza fixo: border-gray-950/5 no claro e border-white/10 no escuro, o que faz o hairline se adaptar ao que esta atras. Tipografia Suisse nos titulos com Inter de fallback, mais geistMono e soehneMono para codigo. O gesto assinatura e o gradiente conico de marca: conic-gradient(from 135deg, #7c3aed 0deg, #6430f700 82.8deg, #3ad4fd00 183.6deg, #38bdf8 262.8deg, #7c3aed 356.4deg), roxo virando ciano e voltando, com duas paradas totalmente transparentes no meio para o arco ficar quebrado em vez de circular fechado. Transicoes longas e caras: 450ms com cubic-bezier(0.33, 1, 0.68, 1) para cor e fundo, e 200ms para transform, ou seja, a cor demora mais que o movimento. Filtros SVG inline com versao dedicada para o escuro (filter0_ii_3879_1051 e filter0_ii_3879_1051_dark).

**Técnica:** O conic-gradient com paradas transparentes e uma unica declaracao CSS e funciona em qualquer navegador moderno; para gira-lo precisa de @property --angle, e sem isso basta um transform: rotate no elemento que carrega o gradiente. As bordas com alfa (rgb com barra de opacidade) sao CSS nativo. A separacao de duracao entre cor (450ms) e transform (200ms) e so escrever a propriedade transition estendida a mao.

**Aplicável:** Duas licoes diretas. Primeira: o fundo claro com vies de sombra de 3% em vez de branco puro, mais borda com alfa em vez de cinza fixo, e como fugir do 'documento branco com hairline de 1px' que o dono recusou, mantendo o tema claro obrigatorio. Segunda: a temporizacao desigual (cor lenta, movimento rapido) e o que separa uma interface que parece cara de uma que parece template, e nao custa um byte de JS.

### Stripe

<https://stripe.com>

**Estética:** A referencia mais antiga da lista e ainda a mais imitada. Tipografia Sohne variavel (sohne-var) e Source Code Pro no codigo. O gesto historico e a malha de gradiente animada no topo, hoje acompanhada de gradientes conicos de marca: conic-gradient(from 0deg, #7232f1 0, #fb76fa 33%, #ffcf5e 66%, #7232f1 100%), ou seja, roxo, rosa e ambar num circuito fechado, usado como borda que gira (keyframe agentic-commerce-graphic-border-spin). Domina o mask-image como acabamento em duas direcoes: mask-image: linear-gradient(180deg, #000, #fff 20%, #fff 80%, #000) para dissolver topo e base ao mesmo tempo, e mask-image: radial-gradient(#000 0, #000 30%, transparent 75%) para vinhetar radialmente. Sobreposicoes de cor solida em azul escuro corporativo (#122054) com gradiente para transparente. Micro interacoes nomeadas na navegacao (nav-hover-arrow-in e nav-hover-arrow-out): a seta entra e sai por keyframes separados, nao por reversao da mesma animacao.

**Técnica:** O mask-image de dupla parada (#000, #fff 20%, #fff 80%, #000) e uma linha de CSS e resolve elegantemente o problema de cortar screenshot longo. Os gradientes conicos sao CSS nativo. As duas animacoes separadas para entrada e saida de hover exigem so dois keyframes e a troca de animation-name, tecnica que funciona sem JS.

**Aplicável:** O mask-image de dupla parada e o item mais imediatamente util do relatorio inteiro: qualquer screenshot longo do Mirante ou do Conformis passa a terminar dissolvido em vez de cortado numa borda reta, que e o que faz uma pagina parecer feita as pressas. E o par de keyframes separados para hover de entrada e de saida da a navegacao um acabamento que o publico corporativo reconhece como caro, sem uma linha de JavaScript.

### Supabase

<https://supabase.com>

**Estética:** Escuro profundo com verde de marca como unico acento, em gradientes curtos e saturados: linear-gradient(45deg, #fff 0, var(--color-green-1200) 100%) para texto e linear-gradient(270deg, #71fb8e, #acecbc) com background-size 400% 400% animado, ou seja, o gradiente e quatro vezes maior que a caixa e desliza dentro dela. Fundos em cinza carvao com matiz quente (#161616, #1c1c1c, #060809). Tipografia Inter no corpo, Manrope em alguns titulos e Source Code Pro ou Office Code Pro no codigo. Usa oklch (60 ocorrencias). O mural de logos e um marquee com tres keyframes distintos: marquee, marquee-reverse e marquee-vertical, com as bordas dissolvidas por mask-image: linear-gradient(90deg, transparent, black 20%, black 80%, transparent). Alterna blocos de codigo por tema com duas copias no DOM (block dark:hidden e dark:block).

**Técnica:** O gradiente que desliza e background-size: 400% com um keyframe animando background-position: barato, sem JS, mas convem desligar em prefers-reduced-motion. O marquee em duas direcoes e duplicacao do conteudo mais translateX de -50%, composto pela GPU. O mask-image de borda dissolvida no marquee e obrigatorio: sem ele os logos aparecem e somem num corte seco.

**Aplicável:** O marquee com bordas dissolvidas e exatamente a area de prova social que o briefing pede, e a versao dele resolve o problema real da Intelecto: sao 8 camaras, 2 prefeituras, 1 consorcio, 3 autarquias, 1 instituto e 7 empresas privadas, ou seja, logos demais para uma grade estatica e de mais de um universo visual. O marquee acomoda quantidade sem virar tabela. A alternancia de duas copias por tema tambem resolve o problema pratico de brasao de camara, que costuma ser colorido e ilegivel no escuro.

### Railway

<https://railway.com>

**Estética:** Fundo roxo quase preto e nao cinza neutro: #08070c e #07060b, com gradiente sutil entre eles (linear-gradient(#07060b 50%, #0a090e 100%)). Sobre esse fundo, faixas de cor difusa a 80% de alfa que sobem e descem: linear-gradient(#08070c 0%, #0d74cecc 40% 70%, #08070c 100%) em azul, e as mesmas variantes em teal (#107d98cc), verde (#208368cc) e roxo (#8145b5cc), sempre nascendo e morrendo na cor do fundo. Borda de IA que gira por gradiente conico com angulo em custom property: conic-gradient(from var(--ai-angle), #6366f199, #a855f799, #6366f199), com keyframes dedicados ai-border-spin e ai-glow-rotate. Titulos com voz humana e curta ('Ship software peacefully', 'Deploy anything without the complexity', 'Finally, a development workflow that actually flows'). Prova social sob o titulo 'Trusted by the best in business' com logos de servico nomeados no alt (Amazon-ecs, Betterstack, Cilium, Cloudrun) e um contador que comeca em zero ('0+ deploys per month (and counting)'). Marquee com mask-image: linear-gradient(90deg, #0000 0, #000 50px calc(100% - 50px), #0000 100%), ou seja, dissolucao em pixel fixo e nao em porcentagem.

**Técnica:** As faixas de cor difusa sao um unico linear-gradient por elemento, custo praticamente zero e muito mais leve que blur de 120px em maquina velha. A borda conica animada precisa de @property --ai-angle registrada como <angle> para interpolar; sem isso ela pula. O contador que sobe de zero e o unico item que exige JavaScript, e resolve com IntersectionObserver mais um loop de requestAnimationFrame em cerca de quinze linhas.

**Aplicável:** A tecnica de faixa de cor difusa que nasce e morre na cor do fundo e a maneira mais barata de dar luz e profundidade sem blur pesado, o que importa muito dado o requisito de rodar em maquina velha de camara do interior. E a dissolucao do marquee em pixel fixo (50px) em vez de porcentagem e o detalhe que faz o mural de logos funcionar igual no desktop e no celular, que e um requisito explicito do projeto.

### Raycast

<https://www.raycast.com>

**Estética:** O caso mais interessante de mistura tipografica: Instrument Serif (serifa de display, com italico) convivendo com Inter, mais Geist Mono, JetBrains Mono, IBM Plex Mono e SF Pro Text. A serifa e usada em pequenas doses, geralmente numa palavra dentro de um titulo em sans, criando enfase sem negrito nem cor. Gradiente conico de arco-iris como assinatura de marca: conic-gradient(from 136.95deg, #0294fe -55.68deg, #ff2136 113.23deg, #9b4dff 195deg, #0294fe 304.32deg, #ff2136 473.23deg), azul, vermelho e roxo, com angulos iniciais ligeiramente diferentes entre variantes (136.95deg e 147.14deg) para dar vida. Ha ainda um gradiente conico reativo ao cursor: conic-gradient(from calc(var(--r2) - 80deg) at var(--x) 15px, transparent 0%, #eca5a7 20%, transparent 25%), ou seja, o brilho segue a posicao do mouse. Sombras de altissima especificidade que simulam vidro fisico: box-shadow: 0 -6px 16px -8px #ffffffb3, inset 0 1px 1px #ffffff59 e box-shadow: 0 0 .5px 1px #000, inset 0 2px 1px 1px #00000040, empilhando luz de cima e sombra interna. Mask-image escalonada em varias paradas com alfa intermediario: linear-gradient(#000 0% 35%, #0000001a 55%, #0000 70%), a dissolucao nao e linear, tem um degrau. Marquee proprio (Marquee scroll-x, scrollLeft, scrollRight).

**Técnica:** Tudo CSS puro. O brilho que segue o cursor exige JS minimo (um listener de mousemove que escreve --x e --r2 no elemento), umas dez linhas, e deve ser desativado no toque. A sombra de vidro por empilhamento de box-shadow com inset e gratuita e nao usa backdrop-filter, que e o filtro caro. A mask-image com parada de alfa intermediario (#0000001a no meio) e o que diferencia uma dissolucao com curva de uma dissolucao chapada. Instrument Serif, Inter, Geist Mono, JetBrains Mono e IBM Plex Mono estao todos no Google Fonts (verificado).

**Aplicável:** O uso da serifa em dose pequena dentro de um titulo em sans e o gesto que mais afasta a Intelecto do que o dono recusou: da alma e voz ao texto sem apelar para imagem, ilustracao ou azul institucional, e continua serio o bastante para um presidente de camara. A sombra de vidro por empilhamento de box-shadow entrega profundidade sem backdrop-filter, que e justamente o efeito que trava em maquina velha, entao resolve requisito estetico e requisito de desempenho na mesma declaracao.

### Warp

<https://www.warp.dev>

**Estética:** Traz a receita completa e explicita do mural de logos moderno, que e o item que o briefing pede. O container tem borda de topo e base de 1px mais [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)], e cada logo recebe: h-6 w-auto max-w-[120px] object-contain opacity-40 grayscale transition-all duration-200 group-hover:opacity-90 group-hover:grayscale-0. Ou seja, os logos ficam em escala de cinza a 40% de opacidade e, no hover do grupo, voltam a cor e sobem para 90% em 200ms. Ha duas versoes trocadas por tema (dark:hidden e not-dark:hidden). Fundo escuro #0d0d0d. Tipografia mista e ousada: Inter e Matter no corpo, Instrument Serif como display, Azeret Mono e Hack no codigo, mais Abel. Texto com gradiente que varre: linear-gradient(90deg, var(--color-muted-foreground) 0%, var(--color-foreground) 42%, var(--color-muted-foreground) 84%), com o claro no meio. Borda conica com um so tom e duas zonas transparentes de 60deg a 300deg. Numeros grandes como prova: 718K desenvolvedores ativos, 51% da Fortune 500, 179K agentes por dia. Depoimentos nominais (Microsoft, OpenAI, Stripe). Marquee em tres direcoes (scroll-left, scroll-right, scroll-up). Produto mostrado por screenshot estatico com painel de metricas, mais blocos expansiveis com indicadores de mais e menos.

**Técnica:** O mural de logos e reproduzivel literalmente, sem framework: uma linha de mask-image no container, e filter: grayscale(1) com opacity: .4 e transition de 200ms em cada logo. E a solucao mais barata que existe para o problema de logos de clientes com cores e pesos visuais totalmente diferentes. O texto com gradiente usa background-clip: text mais color: transparent, suportado em todos os navegadores atuais com prefixo webkit.

**Aplicável:** Este e o modelo direto para a area de prova social da Intelecto. O grayscale a 40% resolve o problema real de brasoes de camara municipal, que sao coloridos, desenhados de forma inconsistente e destruiriam qualquer composicao se entrassem em cor cheia; dessaturados e apagados eles viram textura uniforme, e a cor volta so quando o visitante passa o mouse, o que premia a curiosidade. Os tres numeros grandes tambem se traduzem direto para os dados verdadeiros que a empresa ja tem: 31 dominios em producao, mais de 10 anos, 22 organizacoes atendidas.

### Neon

<https://neon.com>

**Estética:** Acento verde eletrico #00e599 usado com muita disciplina sobre fundo #09090b, quase sempre em gradiente vertical que morre no fundo: linear-gradient(#00e59900 0%, #00e5991a 100%) e linear-gradient(#00e59933 20%, #00e59999 100%), ou seja, o verde aparece em alfa de 0 a 10% e so em pequenas superficies chega a 60%. Ha tambem verde escuro para profundidade (#007f55) e um degradê para o fundo (#09090b00 0% para #09090b 73.36%). Tipografia Inter mais IBM Plex Sans, com GeistMono nos rotulos. Tracking negativo em escala completa e nomeada (tracking-extra-tight, tracking-snug, leading-dense), ou seja, o aperto e um token do sistema e nao um ajuste avulso. Mask-image assimetrica: linear-gradient(90deg, #000 85%, #0000 100%) dissolve so a direita, e linear-gradient(90deg, #494b50 0% 72%, #0000 100%) usa cinza em vez de preto na mascara para controlar opacidade parcial. Keyframes de rolagem infinita nomeados infinityScroll e logoMove. Prova social por numero unico e enorme (15,000,000) mais logo de cliente ancora nomeado no alt (Databricks).

**Técnica:** O verde em alfa baixissimo sobre fundo escuro e a licao central: a cor de marca aparece como atmosfera, nao como preenchimento, e isso e um linear-gradient de duas paradas. A mascara em cinza (#494b50) em vez de preto e um truque pouco conhecido e util, porque a luminancia da mascara define a opacidade final, entao da para deixar a area 'semi visivel' de forma permanente.

**Aplicável:** O padrao de acento em alfa de 10% e a resposta para o dilema da Intelecto: ela precisa de uma cor propria que nao seja o azul de gov.br, e a licao da Neon e que a cor escolhida importa menos do que a dose. Um verde ou ambar aplicado a 10% de alfa em gradientes que morrem no fundo da identidade sem nunca parecer bandeira de orgao. A escala de tracking nomeada tambem e um habito que vale copiar, porque garante consistencia entre paginas feitas em momentos diferentes.

### Mintlify

<https://mintlify.com>

**Estética:** O melhor exemplo de dissolucao com curva de verdade. Em vez de um gradiente de duas paradas, monta a mascara com dez ou mais paradas calculadas para imitar um desfoque gaussiano: linear-gradient(#151616 0%, rgba(21,22,22,.95) 4.7%, rgba(21,22,22,.89) 8.8%, rgba(21,22,22,.827) 12.6%, rgba(21,22,22,.76) 16.3%, e assim por diante), com a versao clara equivalente em #f7f7f7. O olho nao percebe a banda que um gradiente linear simples produz. Borda conica que responde a marca: conic-gradient(from 0deg, var(--color-border-surface) 0deg, var(--color-brand) 60deg, var(--color-brand) 270deg, var(--color-border-surface)), ou seja, a cor de marca ocupa 210 dos 360 graus e o resto e a cor de borda normal. Ha ainda uma mascara conica combinada com linear-gradient em content-box para desenhar so o anel. Tipografia Arizona Flare (serifa de display expressiva) contra Inter, mais Geist Mono e Paper Mono. Botoes com feedback tatil: active:scale-[0.97] e transition-[transform,background-color] duration-150 com ease-out-strong. Logos de cliente com cor trocada por tema no proprio SVG (fill-[#0052FF] dark:fill-[#578BFA]). Keyframes de dithering e de rolagem de estatisticas (dither-toggle, stats-scroll, digit-in).

**Técnica:** O gradiente de muitas paradas e so CSS e vale o esforco: e a diferenca entre uma dissolucao que parece profissional e uma que mostra faixas. Da para gerar as paradas com uma funcao de easing uma vez e colar o resultado. O active:scale(0.97) com 150ms e uma linha e melhora enormemente a sensacao de resposta em toque, que importa no requisito de celular. A troca de fill do SVG por tema resolve logo monocromatico sem duplicar arquivo.

**Aplicável:** O gradiente de muitas paradas resolve um problema que vai aparecer na pratica: no tema claro, dissolver um screenshot com apenas duas paradas produz banda visivel, e em monitor velho de camara, que costuma ter profundidade de cor pior, a banda fica gritante. Vale gerar a curva uma vez e reusar. A troca de fill por tema tambem e o caminho para os brasoes e logos dos clientes quando existir versao vetorial monocromatica.

### Modal

<https://modal.com>

**Estética:** Verde de marca em gradiente longo e muito escalonado, com nove paradas para dar volume em vez de chapado: linear-gradient(25deg, #80ee64 6.4%, #7beb63 21.31%, #6fe562 36.23%, #5ada60 51.97%, #3dca5d 67.71%, #18b759 83.45%, #09af58 ...). Sobre fundo escuro, uma grade tecnica de 1px quase invisivel formada por dois gradientes cruzados: linear-gradient(90deg, #ffffff12 1px, #0000 1px) e linear-gradient(#ffffff12 1px, #0000 1px), ou seja, linhas brancas a 7% de opacidade, presentes o suficiente para dar estrutura e discretas o suficiente para nao virar tabela. Mask-image de altissima resolucao em ambos os sentidos: linear-gradient(#000 0% 20%, #000000f2 30%, #000000e6 40% 40%, #0009 70%, #0000 100%) e a versao invertida, permitindo dissolver topo e base de forma independente. Marquee horizontal em duas direcoes. Tipografia Inter Variable com Goga como display e Fira Mono no codigo, mais KaTeX completo para formulas matematicas. Usa oklch pesado (93 ocorrencias). Titulos em frases curtas e afirmativas terminadas em ponto final ('The production cloud for AI.', 'Your cloud environment, in code.', 'Built for speed, at any scale.').

**Técnica:** A grade de 1px sao duas declaracoes de background-image com background-size definindo o passo; custo baixo, mas convem aplicar em uma secao e nao no body inteiro em maquina fraca. As mascaras assimetricas sao CSS puro. O ponto final nos titulos e decisao editorial, custo zero, e muda bastante o tom.

**Aplicável:** A grade de 1px a 7% e a textura de fundo ideal para a Intelecto, porque diz 'engenharia e infraestrutura' (que e literalmente o que a empresa opera: Proxmox, Coolify, 31 dominios) sem dizer 'planilha' nem 'documento', que foi a recusa do dono. E o padrao de titulo curto, afirmativo e com ponto final e o registro certo para os dois publicos ao mesmo tempo: funciona igualmente bem em 'Transparencia que passa na fiscalizacao.' e em 'Conformidade LGPD, operada por gente.'

### Liveblocks

<https://liveblocks.io>

**Estética:** O uso mais sofisticado de gradiente conico da lista inteira, e nao para girar bordas: para simular feixes de luz caindo de cima. Sao conic-gradient(from 15deg at 50% 0, ...) com dezenas de paradas alternando branco e preto em alfas diferentes dentro de poucos graus (#0000 0deg, #000c 2deg, #fff3 6deg, #0009 8deg, #fff9 10deg, #00000080 13deg, #0000 16deg 52deg), com origem no topo da caixa (at 50% 0). O resultado sao raios irregulares de luz, como um holofote atras de um objeto, e nao um arco-iris. Ha varias variantes com angulos iniciais diferentes (-3deg, 12deg, 15deg, 180deg) sobrepostas. Bordas de destaque desenhadas por mascara linear e nao por border: uma div absoluta em -inset-px com border de 1px na cor de acento mais mask-linear-from-60% mask-linear-to-80% e opacity-30, ou seja, a borda so existe em parte do perimetro. Tipografia Inter mais Suisse, com JetBrains Mono nos rotulos em caixa alta de 10px com tracking positivo (text-[10px] leading-none tracking-wide uppercase). Tracking negativo de precisao cirurgica: -.005em, -.0075em, -.013em, -.014em, -.015em, valores fracionarios que indicam ajuste optico por tamanho e nao por escala fixa. Mask-image com parada em rem absoluto (linear-gradient(#000 0% 54rem, #0000 98rem)).

**Técnica:** Os feixes conicos sao CSS puro e sao um unico elemento; a complexidade esta no valor do gradiente, nao na tecnica, e da para escrever uma vez e reutilizar. A borda parcial por mascara e a solucao correta para o efeito de 'borda que brilha so num canto' sem recorrer a SVG nem a pseudo-elemento rotacionado. Os rotulos mono em 10px caixa alta com tracking positivo sao o inverso exato do titulo (que leva tracking negativo), e essa oposicao e deliberada.

**Aplicável:** A oposicao tipografica e a licao mais transferivel: titulo grande em sans com tracking negativo, contra rotulo minusculo em mono, caixa alta e tracking positivo. Isso sozinho ja cria a hierarquia que o dono quer sem tabela, sem hairline e sem azul. E a borda parcial por mascara e a forma de destacar o card do produto principal (Mirante ou Conformis) numa grade de servicos sem recorrer a moldura fechada, que remeteria de novo a caixa de documento.

### Trigger.dev

<https://trigger.dev>

**Estética:** Fundo #121317 com grade de 1px em cinza levemente mais claro que o fundo (#15171a e #1c1e21), portanto uma grade que so se percebe de perto. Sobre ela, textura de padrao em imagem (crosses-64x64.png) recortada por gradiente nos dois eixos: linear-gradient(#12131700 0%, #121317 25% 75%, #12131700 100%) combinado com image-set do padrao, ou seja, a textura aparece so no miolo e some nas bordas. Gradiente de marca em azul para roxo com paradas densas: linear-gradient(90deg, #155dfc, #3b5cfd, #515bfe 25%, #7557ff 50%, #aa4eff), e uma variante escrita em color(xyz ...) para interpolacao mais fiel. Ha tambem um gradiente verde que so aparece nas pontas: linear-gradient(90deg, #47ce90, #33415500 30%, #33415500, #33415500 70%, #47ce90), usado como linha de conexao. Tipografia Geist e Geist Mono mais Satoshi Variable. Usa oklch (83 ocorrencias). Prova social sob o titulo 'Trusted by developers at companies all over the world' com marquee de logos nomeados no alt (AWS, Algora, Arena, Astro). A pagina inteira e organizada por blocos de capacidade nomeados (AI Agents, Realtime, Concurrency e queues, Scheduled tasks, Observability e monitoring) e termina com changelog e blog datados na propria home.

**Técnica:** A textura recortada por gradiente e background-image com dois valores, o padrao e a mascara, e nao custa nada alem do PNG de 64px, que e minusculo e cabe embutido em base64 para manter a pagina autocontida. A grade quase invisivel sao dois linear-gradient. O gradiente que so aparece nas pontas e um truque de paradas, util para linhas de conexao entre secoes.

**Aplicável:** Duas coisas. A primeira e a textura recortada: da superficie e materia a um fundo escuro sem imagem grande nem WebGL, o que atende a restricao de maquina fraca e de pagina autocontida. A segunda e estrutural e importa mais: colocar changelog e posts datados na propria home e a prova social mais forte que existe para uma empresa de software de 10 anos, porque mostra que o produto esta vivo. Para a Intelecto, que vende Mirante e Conformis para orgao publico, uma faixa de 'ultimas atualizacoes' com datas reais responde a duvida silenciosa de todo comprador publico, que e saber se o fornecedor vai sumir.

### Vercel Geist (sistema de design publico)

<https://vercel.com/geist/introduction>

**Estética:** A documentacao publica do sistema que sustenta a estetica descrita acima, util porque expoe as regras em vez do resultado. Confirma a escala de cinza em matiz 0 e saturacao 0 com dez degraus (gray-100 a gray-1000), a inversao completa entre claro e escuro (o token gray-1000 e o texto de maior contraste nos dois temas, 9% de luminancia no claro e 93% no escuro), e o par tipografico Geist Sans e Geist Mono. Os tokens sao publicados em tres formatos simultaneos por tema: hsla com a tripla em variavel separada (--ds-background-100-value: 0, 0%, 100%), hex direto e lab() para navegadores que suportam. O padrao de nomeacao separa o valor cru do valor final, o que permite compor alfa sem redeclarar a cor.

**Técnica:** O padrao de guardar a tripla HSL numa variavel separada da cor final e a tecnica mais valiosa daqui e e CSS puro: com --cor-value: 0, 0%, 4% da para escrever hsla(var(--cor-value), 0.5) em qualquer lugar e obter a mesma cor com transparencia arbitraria, sem criar um token novo para cada nivel de alfa. Resolve tema claro e escuro com uma unica redeclaracao de dez variaveis.

**Aplicável:** E o esqueleto pronto para o requisito de tema claro e escuro da Intelecto. Definir dez cinzas dessaturados como triplas HSL, redeclarar so essas dez sob prefers-color-scheme e sob o seletor de tema manual, e derivar todas as bordas, veus e sombras por alfa sobre essas triplas. Isso da um sistema inteiro em cerca de trinta linhas de CSS, mantido a mao, sem build e sem framework, que e exatamente a restricao tecnica do projeto.

### Oxide Computer

<https://oxide.computer/>

**Estética:** Fundo quase preto #080f11 sobre preto puro #000000, com UM unico acento verde menta fluorescente (#00d497 e #48d597) e um roxo secundario #c58cff usado com conta-gotas. Tipografia Suisse Intl (grotesca suica, bem fechada) para texto e GT America Mono para rotulos, numeros e legendas de spec. O heroi nao e ilustracao: e fotografia de estudio do proprio rack deles em tres estados (1, 2 e 3 racks lado a lado), recortada no fundo escuro, com pontos de acesso CLI/API/Console marcados. Titulo: 'On-prem that feels like the public cloud' e o subtitulo 'The cloud you own'. Prova social logo abaixo do heroi: 'Powering the best teams' com Switch, Stoke Space, LLNL, INL e Jump Trading. Numeros aparecem como par rotulo-mono/valor-grande: '12x Cooling Efficiency', '55% Less Power', '2-hour setup', '2.4M MSG/SEC'. Uma secao inteira compara 'Traditional on-prem' (8+ fornecedores) contra 'The public cloud' (contas imprevisiveis e egress), em duas colunas.

**Técnica:** 70 SVGs inline na pagina (zero icone por CDN). Tema claro/escuro real via atributo data-theme (36 ocorrencias no CSS). 19 @keyframes leves com nomes autoexplicativos (marquee, gentle-ping, ping, fadeIn, scaleIn, grow), tudo CSS puro. 29 usos de font-feature-settings e tabular-nums para numeros alinharem em coluna. 9 blocos prefers-reduced-motion. Nao usa WebGL nem canvas. Tudo isso e reproduzivel em CSS/JS puro: o custo real esta na FOTOGRAFIA do hardware, nao no codigo.

**Aplicável:** E a referencia numero um para 'a maquina e nossa'. O movimento a copiar: fotografar o proprio servidor bare metal da Intelecto (foto real do rack/host Proxmox, luz lateral, fundo escuro, recorte) e coloca-lo como heroi em vez de ilustracao de nuvem. O par 'Traditional vs Cloud' vira, para camara: 'Portal do Interlegis que vai sair do ar / E-mail terceirizado que ninguem controla' contra 'Servidor da Intelecto, no Brasil, com nome e sobrenome de quem administra'. Copiar tambem o padrao rotulo em mono + numero grande para os dados reais da Intelecto (31 dominios em producao, 10 anos, 8 camaras).

### Oxide Computer, pagina de especificacoes

<https://oxide.computer/product/specifications>

**Estética:** Ficha tecnica tratada como peca de design, nao como tabela de documento. Especificacoes em pares rotulo/valor empilhados, valores em mono com numerais tabulares, agrupados por bloco tematico: 'Available Guest Resources', 'Cloud Computer Hardware Specs', requisitos de instalacao. Os numeros sao fisicos e por isso convencem: 'Up to 7,875 vCPUs', '30.6 TiB' de memoria, '1.7 PiB' de storage por rack, '192 / 384' cores/threads por sled, '12.8 Tbit/s' de banda, dimensoes '2354mm (92.7") x 600mm (23.7") x 1060mm (41.8")', peso '~1,145 kg', energia 'Up to 21.6 kW redundant or 30 kW non-redundant'. Muito espaco em branco (escuro) entre grupos; nada de linhas de grade de planilha.

**Técnica:** Puro HTML/CSS: grid de duas colunas com rotulo em mono minusculo e valor em corpo maior, separadores por espacamento e nao por borda. Nenhuma biblioteca. Custa quase nada implementar e escala bem no celular virando lista de uma coluna.

**Aplicável:** Da a Intelecto uma forma de exibir infraestrutura sem parecer anexo de licitacao: uma secao 'A maquina' com specs REAIS do bare metal (vCPU, RAM, disco, uptime, localizacao, Proxmox, backup) em pares mono/valor sobre fundo escuro. Milimetro, quilo e kW sao a licao: grandeza fisica gera confianca. Para a Intelecto o equivalente e RAM em GB, disco em TB, portas fechadas, janela de backup, e o fato de o hardware ser proprio e nao alugado por hora.

### Fly.io

<https://fly.io/>

**Estética:** Roxo eletrico como cor de marca inteira, nao como detalhe: #7c3aed dominante, com #8b5cf6, #6d28d9, #a78bfa e #ddd6fe formando escala, mais um ferrugem #aa2e06 de contraponto quente. Tipografia em tres vozes: Mackinac (serifada expressiva, com barriga, usada em titulos grandes tipo 'Machines that Remember' e 'A Real Durable Filesystem'), Fricolage Grotesque (sans com personalidade) para interface e Fragment Mono para rotulos tecnicos. O h1 e um bloco curto e afirmativo: 'Computers for agents'. Faixa de metricas em quatro colunas: '18+ Regions worldwide', '<1 second Machine boot time', '500ms Deploy time, typical', '99.9% Uptime SLA'. Secao de prova social nomeada de forma humana: 'Teams building on Fly.io'. Fecha com 'Support that knows the stack'.

**Técnica:** CSS unico de ~700 KB gerado por utilitarios, fontes proprias servidas localmente, apenas 6 SVGs inline e 30 imagens (as ilustracoes sao arquivos, nao codigo). Nada de canvas ou video. A identidade vem 100% de escolha de fonte e de paleta, ou seja, e o tipo de resultado que se alcanca com Google Fonts sem framework nenhum. Substitutos gratuitos com a mesma energia: Instrument Serif ou Fraunces no lugar de Mackinac, Space Grotesk no lugar de Fricolage, JetBrains Mono no lugar de Fragment Mono.

**Aplicável:** Prova que uma empresa de infraestrutura pode ter serifa expressiva no titulo e continuar tecnica; o mono nos rotulos e que segura o tom. Para a Intelecto: serifa nos titulos institucionais (fala com presidente de camara), grotesca no corpo, mono nos numeros e nos nomes de dominio (.leg.br fica lindo em mono). A faixa de quatro metricas e o formato exato para 'anos de operacao / dominios em producao / camaras atendidas / tempo de resposta'.

### Railway

<https://railway.com/>

**Estética:** Preto profundo #08070c e #13111c contra creme #f9f3e9, mais uma paleta de acentos dessaturados que parecem etiquetas de cabo: verde #95d0b4, verde escuro #26543f, azul #1d4596, terracota #d97757, roxo #59497a. Tipografia Inter Tight (titulos), Inter (corpo), IBM Plex Serif (citacoes) e JetBrains Mono (dados). H1 emocional, nao tecnico: 'Ship software peacefully'. Titulos com quebra dura de linha intencional: 'Deploy anything / without the complexity', 'Instant networking. / Zero setup.', 'Grow big / without the growing pains'. Prova social: 'Trusted by the best in business'. E o fecho e um contador que sobe de zero: '0+ deploys per month (and counting)'. Referencias reais de operacao aparecem no corpo: '100 Gbps internal networking without VPC configuration', '1,500+ requests per second', '2M+ developers'.

**Técnica:** 47 @keyframes, 5 usos de animation-timeline (animacao dirigida por scroll nativa do CSS, sem JS), 34 mask-image (usados para dissolver as bordas dos carrosseis de logo e dos gradientes), 92 linear-gradient e 33 radial-gradient. Nomes de keyframe entregam o conceito: trainOneAnimation, train-scroll-forwards, scrollable-train, tweets, shimmer, wiggle. Google Fonts explicito no head (Inter Tight e JetBrains Mono), ou seja, exatamente o que a Intelecto pode usar. O contador de deploys e JS simples de odometro. Tudo isso cabe em CSS/JS puro; o cuidado e por animation-timeline atras de @supports para nao quebrar em navegador velho de camara.

**Aplicável:** Modelo de como ser moderno sem ser de agencia: o layout e sobrio, o que da vida sao tres coisas baratas (quebra de linha nos titulos, contador que sobe, mascara nas bordas do carrossel). O contador e o gancho perfeito para a Intelecto: 'X e-mails entregues neste mes', 'Y dias sem incidente', 'Z documentos publicados nos portais Mirante', puxando de um numero real. E o par preto/creme e a saida elegante do branco puro que o dono rejeitou.

### Tailscale

<https://tailscale.com/>

**Estética:** Papel quente, nao branco: fundo #f9f7f6 e #faf9f8 com tinta #1f1e1e e #2e2d2d, cinza de apoio #706e6d. Os acentos sao poucos e nada corporativos: azul #3f5db3, azul palido #adc7fc, coral #e46c63 e rosa palido #ffd3cf. Tipografia Inter para corpo e uma mono de marca ('mdio') usada em rotulo e em micro-titulo, o que da cara de ferramenta. Titulos com tracking muito fechado (77 declaracoes de letter-spacing negativo no CSS) e tamanho grande, esse e o truque que faz parecer 2026. As figuras sao ilustracoes proprias de linha, quase desenho a mao: um laptop com o popup de status do Tailscale, cenas de casos de uso de TI. Prova social forte e quantificada: '40,000 businesses choose Tailscale' e tres estudos de caso com uma metrica cada (Corelight '1,000+ hours saved', Cribl '25x headcount growth', Instacart '90% reduction in internal support requests'), seguidos de carrossel de logos (Cohere, Duolingo, Microsoft, NVIDIA, Cribl).

**Técnica:** Extremamente contido em movimento: apenas 2 @keyframes na pagina inteira (pulse e draw-check, ou seja, um ponto que pulsa e um check que se desenha via stroke-dasharray). 62 SVGs inline, 1 backdrop-filter, 2 gradientes radiais. Tema por prefers-color-scheme. Isto e a prova de que a sensacao de 'caro' vem de tipografia e ilustracao, e nao de animacao: praticamente tudo aqui roda em maquina velha.

**Aplicável:** E a resposta direta ao que o dono rejeitou: mesma sobriedade de leitura, zero cara de documento, porque o fundo e papel quente e nao branco de escritorio, os titulos sao grandes e apertados, e a prova social vem com UM numero por cliente. Para a Intelecto: cada logo de camara acompanhado de uma metrica curta ('portal no ar desde 2019', 'PNTP 2026 coberta', '0 incidente em 14 meses'). E o desenho de linha do check que se desenha com stroke-dasharray e um efeito de dois minutos que muda a percepcao da pagina.

### Cloudflare, pagina de rede

<https://www.cloudflare.com/network/>

**Estética:** A pagina nao usa mapa interativo: usa TIPOGRAFIA como mapa. Contadores gigantes no topo ('348 cities', '8 regions', '234B+ ameacas bloqueadas por dia', '250ms') e, embaixo, um muro de nomes de cidade agrupado por regiao com codigo de pais (America do Norte 54, America Latina e Caribe 64 com presenca pesada no Brasil, Europa 57, Oriente Medio 19, Asia 71, China 36, Oceania 14). A frase que faz o trabalho todo: '95% of the world's Internet-connected population is within 50 milliseconds of a Cloudflare data center, most are within 20ms'. Mais '13,000+ network interconnections'. A cor de marca e o laranja #ff5e1f sobre preto #262626 e branco, com verdes #00bb7f e #00c758 e amarelo #fcbb00 como semaforo de status.

**Técnica:** No site principal deles a assinatura visual e a LINHA TRACEJADA: 101 ocorrencias de 'dashed' no CSS, formando uma malha de blueprint que costura secoes e cards. Tambem 16 tickers, 51 @keyframes, 32 mask-image, 8 conic-gradient e 20 will-change. Isso e pesado demais para o publico da Intelecto, mas a pagina de rede em si e quase so texto e grid: baratissima de reproduzir, e a parte que vale copiar.

**Aplicável:** Melhor achado do lote para prova social geografica sem mapa: a Intelecto pode listar as cidades atendidas (Riolandia, Orindiuva, General Salgado, Magda, Jaguariuna, Capivari, Dolcinopolis, Americo de Campos, Ituiutaba, Tocos do Moji) como muro tipografico com UF ao lado, sob um contador '12 municipios, 3 estados'. Isso comunica alcance sem precisar de globo 3D, funciona em celular e nao usa imagem. A linha tracejada tambem serve como motivo de 'diagrama tecnico' em vez de hairline de documento: a mesma linha de 1px, quando tracejada, deixa de parecer papel timbrado e passa a parecer planta de rede.

### Bunny.net

<https://bunny.net/>

**Estética:** Azul marinho profundo #183d6d e #051e38 com laranja #fd8d32 e ambar #ffaf48 como cor quente, mais rosa choque #ff2a64 para destaque, e azul gelo #e1f2ff e #b0e4ff nas areas claras. Fonte Rubik (arredondada, geometrica) em tudo, o que amacia a cara tecnica. A faixa de numeros e o coracao da pagina: '119 Edge Locations', '1 million+ Requests per Second', '250 Tbps+ Network Capacity', '24 ms average global latency', '6 continentes e 82 paises'. Depois vem uma faixa de operacao de suporte com tempo medio de resposta e '24/7 AVAILABILITY', e 'Join 100k+ happy customers' com nota do G2. O tom da copy e brincalhao ('The global edge platform that truly hops', 'Hop to the edge and never look back').

**Técnica:** 37 referencias a 'globe' (mapa de PoPs animado), tickers, 42 @keyframes com nomes de entrada (slideInBottom, revealDown, zoomIn), 192 linear-gradient, 16 usos de 'dashed', 42 border-radius:0. Font Awesome carregado inteiro, o que e exatamente o que NAO fazer. A parte reaproveitavel (faixa de numeros, faixa de suporte, mapa de pontos) e HTML/CSS trivial; o mapa pode ser um SVG estatico com pontos posicionados por CSS.

**Aplicável:** Serve como aula dupla: o QUE copiar e a faixa de operacao (latencia media, disponibilidade, tempo medio de resposta do suporte), porque e o unico tipo de numero que um diretor de farmaceutica realmente le. O que NAO copiar e o pacote Rubik + gradiente azul/laranja + mascote, que puxa a pagina para cara de template de hospedagem barata. Para a Intelecto, a metrica de suporte e mais forte que a metrica de infra: 'resposta em ate X horas uteis, falando com quem administra o servidor'.

### Scaleway

<https://www.scaleway.com/en/>

**Estética:** Titulo curto e territorial: 'European Cloud & AI.' seguido de 'What if your cloud met European expectations?'. Space Grotesk (grotesca com detalhes idiossincraticos nos terminais) como fonte de marca, sobre cinza-azulado escuro #252a3b e #303445 com branco. Quatro pilares nomeados como valores e nao como features: 'Data Sovereignty', 'Open, Independent Technology', 'Transparent Pricing', 'Fast-moving Innovation'. Numeros de porte: '100+ Cloud & AI products', '4 Multi-AZ regions in Europe', '65+ Points of presence', '5,000+ GPUs'. E a frase que importa para a Intelecto: 'your Hardware in our secured French datacenters'. Secao 'They trust us' com logos. Bare Metal aparece como PRIMEIRO item do portfolio, antes de compute e containers.

**Técnica:** 233 SVGs inline (icones e diagramas todos vetoriais dentro do HTML, nenhum sprite externo), 69 @keyframes gerados por CSS-in-JS. Space Grotesk esta no Google Fonts, entao esse exato sabor tipografico e gratuito e permitido na restricao da Intelecto.

**Aplicável:** E o argumento de soberania traduzido em design, que e exatamente a venda da Intelecto para camara: dado publico municipal hospedado em maquina propria, no Brasil, sob LGPD, e nao numa nuvem estrangeira. Copiar a estrutura: quatro pilares com nome de valor (Soberania do dado, Infraestrutura propria, Preco transparente, Suporte com nome), e colocar 'Servidor proprio' como primeiro item da lista de servicos, do mesmo jeito que a Scaleway coloca Bare Metal antes de tudo.

### Latitude.sh

<https://www.latitude.sh/>

**Estética:** Bare metal brasileiro com identidade de produto de software. Titulos de secao escritos como comando de shell, e essa e a marca registrada: './global-edge-locations' e './deploy-metal.sh' aparecem literalmente como cabecalho da secao, acima de um bloco de codigo com abas de Terraform, CLI, Go SDK e Node SDK. Frases curtas e possessivas: 'The power of bare metal meets the flexibility of the cloud', 'Your servers. Your tools.', 'Deploy everywhere', 'Won't break the bank'. Mapa de presenca com '25 locations' e '5 continents'. Tipografia Aeonik (grotesca neutra) com aeonikFono (a mono da mesma familia) nos rotulos, mais Inter. Acentos acidos fora do azul corporativo: verde limao #ebff8d e #e0fe56, violeta #8261fb, rosa #ea3388, sobre base escura.

**Técnica:** Heroi animado em CSS puro, os nomes dos keyframes entregam a construcao: hero-orbit, hero-counter-orbit, hero-pulse, hero-float-in (elementos orbitando um centro, mais um contra-giro para o conteudo interno nao rodar de cabeca para baixo, mais um pulso). 46 SVGs inline, 1 canvas, 4 will-change, 2 prefers-reduced-motion. Ou seja: a sensacao de 'infra viva' sai de 4 @keyframes e transform, nao de WebGL. Isso roda liso em maquina fraca e e trivial de portar.

**Aplicável:** E a referencia mais copiavel do lote inteiro para a Intelecto, e ainda por cima e brasileira. Dois moves: (1) titulos de secao como caminho de arquivo ou comando ('./infra-propria', './camaras-atendidas', './backup-diario.sh') dao ar tecnico moderno sem custo nenhum e sem virar documento; (2) o heroi de orbita em CSS, com o servidor da Intelecto no centro e os dominios dos clientes orbitando, e literalmente a imagem de 'a maquina e nossa e ela sustenta esta gente'. E 'Your servers. Your tools.' vira 'A maquina e nossa. O dominio e seu.'

### Hetzner, pagina do datacenter

<https://www.hetzner.com/unternehmen/rechenzentrum/>

**Estética:** Aqui a prova de competencia e fotografica e numerica, sem estilizacao: foto real do parque de datacenter no topo, depois quatro blocos ilustrados por foto de infraestrutura de verdade (alimentacao redundante com no-break, climatizacao de alta eficiencia, racks de colocation, protecao contra incendio), mais link para tour 360 graus. Os numeros sao especificos ao ponto de nao poderem ter sido inventados: '4,000 m2 de area de colocation', 'ate 47 U em racks de 19 polegadas', '~10,790 Gbit/s de peering', '11,600 Gbit/s de transito', 'mais de 27,730 Gbit/s de peering privado', seis localidades nomeadas (Nuremberg, Falkenstein, Helsinki, Ashburn, Hillsboro, Singapura), ISO 27001. Tipografia Inter com Hack (mono) e Montserrat.

**Técnica:** Pagina simples, sem animacao relevante: o peso todo esta em fotografia propria de boa qualidade e em uma lista de especificacoes. O tour 360 e um extra opcional. Reproduzir isso e questao de PRODUCAO (fotografar o rack, o no-break, a sala) e nao de codigo, o que casa perfeitamente com a restricao de HTML/CSS/JS estatico da Intelecto.

**Aplicável:** E o modelo direto de uma pagina 'Nossa infraestrutura' para a Intelecto: foto real do bare metal, do rack, do link, com legenda tecnica embaixo de cada foto, mais uma lista de numeros verificaveis (nucleos, RAM, disco, banda, backup, localizacao, certificacao/LGPD). O detalhe que faz diferenca: numero quebrado e mais crivel que numero redondo. '10,790 Gbit/s' convence, '10 Gbit/s' nao. A Intelecto deve publicar os numeros exatos do host Proxmox, nao arredondados.

### Uberspace

<https://uberspace.de/en/>

**Estética:** Hospedagem com voz de gente e paleta que nenhum concorrente ousa: rosa choque #ff0068 e #ce0058, amarelo #ffca3a, lavanda clarissima #f4f1ff e #f9f7ff como fundo, com um display condensado (Alternate Gothic No3) em caixa alta para os titulos e Open Sans no corpo. H1: 'Uberspace, Hosting on Asteroids since 2010'. Logo abaixo, uma lista de publico que se troca sozinha, palavra por palavra, com cursor piscando: 'Universal hosting for hackers / inventors / creators / bloggers / photographers / shell lovers / privacy enthusiasts / Unix friends / makers / people who know what they want / you'. As secoes tem titulo de manifesto e nao de feature: '100 % friendly, zero fuss, no frills', 'Fair, sustainable, data-economical', 'You ask, all of us learn', 'Pay what you think is right'. E a frase da casa: 'we deliver the machine for your ideas'.

**Técnica:** Site minusculo (16 KB de HTML) e rapidissimo. Dois efeitos apenas: @keyframes typedjsBlink (o cursor do efeito de digitacao na lista de publico, que da para escrever em 20 linhas de JS sem biblioteca) e @keyframes floating-server (um SVG de servidor que flutua devagar), mais um asteroide em SVG. Nenhum framework. E o exemplo mais limpo de que carater vem de copy e de paleta, nao de tecnologia.

**Aplicável:** Duas licoes aproveitaveis e uma armadilha. Aproveitavel: (1) o rotativo de publico em uma linha resolve o problema central da Intelecto, que e vender para camara E para farmaceutica na mesma home ('Infraestrutura para camaras / prefeituras / autarquias / consorcios / industrias'); (2) o servidor em SVG que flutua e um jeito barato e nao clichê de mostrar hardware. Armadilha: o tom asteroide/pague-quanto-quiser nao serve para presidente de camara; a Intelecto deve pegar a MECANICA (palavra que troca, servidor que flutua) e nao a personalidade.

### Mittwald

<https://www.mittwald.de/>

**Estética:** Hospedagem alema vendida para agencias, e visualmente o oposto de cinza corporativo mesmo sendo sobria. Base grafite #404448 e #121518 com azul marinho #27367b, e acentos que nao sao azul de governo: verde menta #01df97 e #00a674, violeta #847afd, lilas #e08dff, rosa #f84474, azul eletrico #0054f5, sobre lavagens de azul palido #dce9f7. Inter mais ProximaNova. A confianca e construida por certificacao e por numero de operacao, nao por foto de hardware: 'Rechenzentrum in Deutschland, ISO 27001 zertifiziert', '100 % betrieben mit Strom aus erneuerbaren Energien', 'unter 1,5 Min initialer Support', 'uber 200 Mitarbeiter', 'ab 13 EUR pro Monat'. Prova social e explicitamente de par: 'Agenturen lieben mittwald' com nota do OMR Reviews e logos de clientes grandes (Hermes, ALBA, LanXess). Heroi com oferta concreta em vez de slogan: 'Wir ubernehmen den Umzug deiner Webseite, kostenlos und ohne Downtime'.

**Técnica:** 75 radial-gradient usados como brilhos suaves atras dos blocos (a fonte da profundidade), 7 mask-image, 2 texturas de ruido, e apenas 1 @keyframes na pagina inteira: quase nenhuma animacao. Um canvas e dois videos curtos. Ou seja, a pagina parece cara por causa de cor e de brilho radial, coisas que sao CSS puro e leves.

**Aplicável:** E o padrao mais proximo do caso da Intelecto (empresa media, cliente institucional, precisa parecer solida e moderna). Tres coisas para copiar: (1) heroi que oferece a MIGRACAO gratuita e sem downtime, que e exatamente a dor das camaras saindo do e-mail do Interlegis em 2027; (2) selo de infraestrutura em texto ('Servidor proprio no Brasil', 'LGPD', 'backup diario') tratado como badge em mono e nao como brasao; (3) tempo de primeira resposta do suporte como numero de vitrine. E o brilho radial suave e a forma barata de fugir do branco chapado sem cair em gradiente de agencia.

### Fastmail, 'Why we use our own hardware'

<https://www.fastmail.com/blog/why-we-use-our-own-hardware/>

**Estética:** Nao e um layout bonito, e um ARGUMENTO, e por isso entra na lista: e a melhor peca escrita de 'a maquina e nossa' que existe em provedor de e-mail. Prosa corrida com tabelas de custo embutidas e UMA fotografia de rack legendada 'NVME IMAP Servers'. Os numeros fazem o trabalho: 1 PB de backup custa 'USD 252,000/ano' na Amazon S3, 'USD 72,000/ano' na Backblaze B2, 'USD 11,880/ano' no Glacier Deep Archive, contra '~USD 190k uma vez' em servidores 2U com 24 discos NVMe de 61 TB. Cita modelo de disco (Seagate Exos 24, Solidigm D5 P5336), esquema de redundancia (ZFS RAIDz2), ganho de compressao medido em 1 milhao de e-mails ('39.9%' e '41.7%') e desgaste real dos SSDs ('4%' apos anos). O site principal da Fastmail, para efeito de paleta, usa azul #0067b9 sobre cinzas quentes, Proxima Nova com a serifada 'roca' nos titulos, tema claro/escuro real (50 ocorrencias de data-theme) e apenas 6 keyframes.

**Técnica:** Conteudo puro: HTML, tabela, uma foto. Zero dependencia. O ponto tecnico interessante e o site principal, que implementa tema claro/escuro por atributo data-theme com paleta completa, exatamente o padrao que a Intelecto precisa.

**Aplicável:** Da a Intelecto o roteiro para transformar 'temos servidor proprio' em vantagem economica demonstravel para o cliente, com tabela de comparacao (custo de caixa de e-mail terceirizada por usuario por ano contra o plano da Intelecto no bare metal proprio), citando disco, redundancia e janela de backup pelo nome. Uma pagina assim, assinada, vale mais que qualquer selo. E a foto legendada com o nome interno da maquina ('host Proxmox, Eveo, Sao Paulo') e o detalhe que faz parecer verdade.

### DigitalOcean

<https://www.digitalocean.com/>

**Estética:** O achado aqui e estrutural: a home inteira e organizada como um DIAGRAMA DE CAMADAS da propria stack, sob o titulo 'Five layers. One platform. Open at every layer.', e cada camada vira uma secao na ordem de cima para baixo: 'Managed Agents', 'Data & Learning', 'Inference Engine', 'Core Cloud', 'Infrastructure'. Ou seja, o menu de produtos e a arquitetura. Acima disso, tres cartoes de numero grande sozinhos ('67%', '2x', '40%') com uma frase de contexto cada ('67% lower cost, Workato runs 1T+ automation tasks'). Paleta escura de base #11192e, #000c2a e #000a0a com verde acido #80d34a e um creme #fffef4, e tipografia Inter (corpo) com Plus Jakarta Sans (titulos) e JetBrains Mono (dados), todas no Google Fonts.

**Técnica:** Pagina leve para o tamanho da empresa: 42 KB de CSS proprio, apenas 4 @keyframes, 16 marquees, 3 mask-image, 4 prefers-reduced-motion, 91 SVGs inline. Nada de canvas ou WebGL. A cara moderna vem da combinacao Plus Jakarta Sans + JetBrains Mono + fundo escuro azulado + um acento verde acido, e as tres fontes sao gratuitas e permitidas.

**Aplicável:** Resolve o maior problema estrutural da Intelecto, que e vender coisas muito diferentes (portal Mirante, e-mail .leg.br, hospedagem, DPO/Conformis, sistemas sob medida) sem virar lista de servicos de agencia. A saida e apresentar como camadas empilhadas sobre a base propria: Infraestrutura (bare metal proprio, Proxmox, Coolify) na base, depois Hospedagem gerenciada, depois Plataformas (Mirante, Conformis), depois Sistemas sob medida, depois Consultoria/DPO. O diagrama de camadas E o argumento de 'a maquina e nossa', porque mostra que tudo que a Intelecto vende repousa sobre hardware que ela mesma opera.

### Apple Newsroom: Liquid Glass, a nova linguagem de design (iOS 26 / macOS Tahoe)

<https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/>

**Estética:** Material translucido com specular highlight na borda, onde a luz entorta e cria separacao entre camadas. A cor do painel e informada pelo conteudo que esta atras e troca sozinha entre ambiente claro e escuro. A sidebar refrata o conteudo atras dela enquanto reflete o wallpaper. A tab bar expande fluidamente quando o usuario rola para cima e encolhe para dar foco ao conteudo. Na Lock Screen, a San Francisco muda dinamicamente peso, largura e altura de cada numeral para encaixar na foto de fundo.

**Técnica:** A versao fiel exige refracao em tempo real (Metal no Apple, WebGL na web), o que esta fora do escopo. Em CSS puro da para o eco convincente: backdrop-filter: blur(14px) saturate(160%), borda 1px rgba(255,255,255,.22) e um highlight de 1px no topo com linear-gradient. backdrop-filter e o efeito mais caro do CSS em GPU integrada antiga, entao vale em no maximo duas superficies fixas da pagina. O truque do numeral que se ajusta e reproduzivel com font-variation-settings de fonte variavel.

**Aplicável:** Usar em exatamente dois lugares: o header sticky sobre o hero e o cartao de destaque da prova social. Da assinatura de contemporaneidade de 2026 (o presidente de camara reconhece porque tem iPhone) sem custar performance na maquina velha. O detalhe do peso do numeral que se adapta vira o tratamento dos numeros da Intelecto: 10+ anos, 31 dominios, 8 camaras.

### Typewolf (fontes em uso nos sites premiados agora)

<https://www.typewolf.com/>

**Estética:** O que os sites do dia estao efetivamente usando em dezembro: Suisse Int'l, Neue Montreal, Diatype + Diatype Mono, Editorial Old, Neue Haas Grotesk, Styrene, Swear + DM Mono, Tobias. O padrao que se repete e sempre o mesmo trio: uma grotesca neutra de texto, uma serifa de display para o titulo e um mono para rotulo e numero. As mais populares da base: Apercu, GT America, Founders Grotesk, Graphik, Canela.

**Técnica:** Todas comerciais e caras. Equivalentes de desenho proximo no Google Fonts (permitido pela restricao): Instrument Sans ou Schibsted Grotesk no lugar de Suisse Int'l e Neue Montreal, Geist no lugar de Diatype, Instrument Serif ou Fraunces no lugar de Editorial Old, Geist Mono ou DM Mono para os rotulos. Duas familias mais um mono, nunca mais que isso.

**Aplicável:** Define o sistema tipografico inteiro da Intelecto. Esse trio (grotesca no corpo, serifa de alto contraste no H1, mono nos rotulos e nos numeros) e literalmente o que faz uma pagina parecer feita por gente que entende de software, e e a mudanca de maior impacto por menor custo em relacao ao mockup rejeitado.

### Fireart Studio: Web Design Trends 2026 (Tactile Brutalism)

<https://fireart.studio/blog/the-best-web-design-trends/>

**Estética:** Brutalismo tatil: paleta ciber-monocromatica de charcoal ate preto puro, violentamente interrompida por um unico acento altissimamente saturado (cyan, magenta ou chartreuse). Borda 1px solida, canto reto de 0px, zero drop shadow. A profundidade vem de linhas de grid sobrepostas, alto contraste e z-index, nao de sombra. Textura de grao de filme e scanline de CRT geradas por CSS. Tipografia dimensionada em vw ocupando a largura toda, com peso e largura da fonte variavel mapeados na posicao do scroll. Gradientes cineticos que deslizam como mapa termico.

**Técnica:** Tudo em CSS puro, sem uma linha de JS. O grao e um SVG com feTurbulence embutido como data-uri num ::after, custo de render proximo de zero. vw typography com clamp(). O scroll e animation-timeline: scroll(). Explicitamente pensado para evitar o lag de processador do WebGL. Cita rozebunker.nl, masaigon.space e valientebrands.com.

**Aplicável:** Este e o movimento mais delicado do dossie e o mais importante de entender. Hairline de 1px foi exatamente o que o dono rejeitou, mas o que ele rejeitou foi hairline preta sobre branco com azul gov.br e ar de planilha. A mesma hairline em rgba(255,255,255,.08) sobre #0B0B0C, com um unico acento acido e grao por cima, le como instrumentacao de produto, nao como documento anexado a processo. E a ponte entre o rigor que a Intelecto precisa passar e o moderno que ele pediu.

### The Crit: Design Trends That Will Actually Matter in 2026

<https://thecrit.co/resources/design-trends-2026>

**Estética:** Movimento como linguagem: entrada em cascata (stagger), transformacao de conteudo dirigida por scroll, fisica de mola e transicoes espaciais que preservam contexto entre views. Neumorphism voltando de forma refinada: sombra inset suave apenas para estado de interacao, elevacao sutil sobre fundo apagado, texto e icone em cor solida, usado como acento e nunca como linguagem inteira. Profundidade por parallax leve, transform 3D em CSS e cards que respondem ao cursor. Tipografia expressiva com serifa distinta no titulo, eixo de fonte variavel reagindo a interacao e tensao entre pesos diferentes.

**Técnica:** Tudo cabe em CSS: transition-delay incremental para o stagger, cubic-bezier de mola, box-shadow inset em :active, transform e opacity apenas. O texto avisa que efeito 3D precisa ser leve para nao destruir Core Web Vitals, e que neumorphism em pagina inteira, em texto e em alto contraste continua sendo problema.

**Aplicável:** Da a regua exata do movimento: stagger de 40ms nos cards de cliente, mola curta no hover, inset sutil so no estado :active dos botoes. E entrega a frase que resolve a briga de tipografia com o dono: um portfolio em Inter diz que a pessoa jogou pelo seguro. Movimento curto e funcional e o que separa profissional de enfeite gratuito.

### Superdesign: Aurora UI, a receita CSS e quando quebra

<https://superdesign.dev/styles/aurora>

**Estética:** Base quase preta #05010f com quatro radial-gradients posicionados em porcentagem e alpha entre 0.40 e 0.55 (indigo #6366f1, teal #2dd4bf, rosa #ec4899, violeta #8b5cf6), mais uma camada conic-gradient com filter: blur(80px) saturate(1.4) e opacity 0.55, derivando em loop de 18s. Limite duro de tres a quatro matizes: passou disso, as cores sobrepostas viram marrom. O blur(80px) e o que transforma parada dura de gradiente em luz; o saturate impede que o borrao lave para cinza. Aurora sobre fundo claro nao tem contra o que brilhar e morre.

**Técnica:** CSS puro, sem WebGL, sem imagem, resolucao independente, muito melhor de LCP do que um PNG de 2MB. Cuidados obrigatorios: blur(80px) numa camada grande custa GPU, entao fixar dimensao e desligar a animacao em prefers-reduced-motion. A falha classica documentada e por texto direto sobre o gradiente: as bandas mudam matiz e luminancia ao longo da tela e o contraste do corpo cai abaixo dos 4.5:1 da WCAG 1.4.3 conforme a cor se move.

**Aplicável:** E o hero da Intelecto. Um brilho contido atras do titulo de abertura resolve o pedido de moderno em cerca de 30 linhas de CSS, sem asset, sem CDN, sem framework. Regra nao negociavel: texto sempre em painel opaco ou de vidro por cima, nunca cravado no gradiente. Paleta ajustada para a marca (nao esse arco-iris de SaaS generico): dois azuis profundos mais um verde-agua unico.

### Superdesign: Bento Grid, receita e limites

<https://superdesign.dev/styles/bento-grid>

**Estética:** Compartimentos arredondados de tamanhos diferentes num CSS Grid. Celula heroi 2x2 ancora a feature principal, celulas de apoio 1x1 e 2x1 preenchem, o que faz uma tela unica mostrar muita coisa sem parecer entulhada. Radius grande de 20 a 28px e a assinatura do estilo. Fundo neutro suave #f5f5f7 no claro e #161617 no escuro, padding generoso e overflow clipado nas imagens.

**Técnica:** grid-template-columns: repeat(4, minmax(0,1fr)); grid-auto-rows: 180px; gap unico de 16px; grid-auto-flow: dense para tapar buraco deixado por celula que faz span. Colapso responsivo 4 para 2 para 1. Falha com conteudo longo e com celula interativa (ordem de foco vira problema de acessibilidade). O aviso que importa: se toda celula tem o mesmo tamanho, e so um grid de cards usando um nome da moda.

**Aplicável:** E o formato certo para o portfolio heterogeneo da Intelecto sem virar lista de servicos: Mirante e Conformis em celulas 2x2 (sao produtos proprios, precisam de peso visual), e e-mail .leg.br, votacao de plenario, e-SIC, ouvidoria, ITSM, BI e hospedagem em celulas menores. A assimetria faz a hierarquia comercial sozinha, sem precisar escrever que um vale mais que o outro.

### Superdesign: Dark Mode UI como sistema de camadas

<https://superdesign.dev/styles/dark-mode>

**Estética:** Escuro bom e sistema desenhado, nao inversao de cor, e expressa profundidade por camadas mais claras em vez de sombra. Superficies com elevacao crescente: #121212 fundo de pagina, #1e1e1e card e painel elevado, #2a2a2a dropdown e header fixo, #333333 tooltip e popover. Texto #e6e6e6 primario (15.0:1 sobre a base) e #a3a3a3 secundario (7.4:1); #6b6b6b so para desabilitado. Acento da marca rebaixado para o peso 300 a 400 e dessaturado, porque cor saturada vibra visualmente contra fundo escuro.

**Técnica:** Variaveis CSS por camada de elevacao. O teste de contraste tem que ser feito contra a superficie mais clara em que aquele texto aparece, nao contra o fundo da pagina. Texto apagado por opacity falha silenciosamente quando cai numa superficie elevada. O proprio texto avisa que escuro nao serve de default para leitura longa, ambiente claro, produto com imagem de fundo branco ou marca cuja cor saturada nao passa em contraste.

**Aplicável:** Define o tema escuro da Intelecto com numero em vez de achismo, e da o argumento honesto de arquitetura: a pagina abre no claro, respeita prefers-color-scheme e oferece toggle. Os quatro tiers viram tokens (--surface-0 a --surface-3) e resolvem de uma vez os dois temas exigidos, incluindo o header de vidro que precisa de contraste testado contra a camada mais clara.

### Superdesign: Glassmorphism, receita e cenarios de falha

<https://superdesign.dev/styles/glassmorphism>

**Estética:** Painel de vidro fosco com quatro propriedades: background rgba(255,255,255,0.12), backdrop-filter: blur(12px) saturate(160%), borda 1px rgba(255,255,255,0.25) e sombra 0 8px 32px rgba(0,0,0,0.25). O saturate(160%) e o que impede a cor atras de lavar para cinza. O blur mantem o conteudo de tras visivel mas ilegivel, criando profundidade sem textura pesada. Uso em alta em 2026, de 7,5% para 9,9% das geracoes entre janeiro e maio na plataforma.

**Técnica:** Quebra em tres cenarios especificos: fundo chapado (o blur nao tem com o que trabalhar e vira mancha cinza), fundo de conteudo nao controlado (o contraste do texto despenca conforme o conteudo rola por tras) e dado denso (halo de blur em volta de glifo pequeno mata a leitura de tabela). backdrop-filter continua sendo o efeito mais caro do CSS em maquina fraca.

**Aplicável:** Justifica usar vidro exatamente uma vez na pagina da Intelecto: no header fixo por cima do hero aurora. E o unico lugar que tem fundo colorido para refratar e onde o custo de GPU e constante e previsivel. Vidro em card de servico ou em area de tabela esta descartado pelo terceiro cenario de falha.

### Studio Maydit: a estetica Linear, Vercel e Raycast, o que ela e de verdade

<https://studiomaydit.com/blog/linear-vercel-raycast-aesthetic>

**Estética:** Paleta quase em escala de cinza com um unico acento deliberado usado com parcimonia. Sistema tipografico preciso e confiante, espacamento apertado e intencional, tipografia de qualidade como fundacao no lugar da cor. Muito espaco em branco, poucas cores, uma ideia por secao. Movimento sutil e proposital que guia atencao e nunca decora. Hover state real, empty state pensado, microcopy honesto, cuidado no nivel do pixel.

**Técnica:** Nao ha nada exotico e o artigo se recusa a dar hex, justamente por isso: e disciplina de escala tipografica, espacamento em multiplos consistentes e transicao de 120 a 200ms. Roda em qualquer maquina, inclusive as velhas. A critica central: copiar traco de superficie (fundo escuro, gradiente) sem o rigor por tras le como derivativo, vira fantasia e parece fotocopia.

**Aplicável:** E a espinha do projeto e o antidoto contra o risco real aqui. Para a Intelecto isso significa que a pagina precisa provar rigor de operacao (uptime, 31 dominios em producao, 10+ anos, carteira nomeada por segmento) e nao apenas ter cara de Linear. E o que faz o diretor da TRB Pharma e o presidente de camara chegarem na mesma conclusao: esta gente e boa.

### Ioana Teleanu (AI Goodies): Aesthetics in the AI era, trends 2026

<https://aigoodies.beehiiv.com/p/aesthetics-2026>

**Estética:** Catalogo de onze movimentos nomeados com exemplo real de cada. Os relevantes: Technical Mono / code brutalism (tipografia monoespacada, preto e branco ou verde sobre preto, layout denso em grid, ASCII como ornamento, exemplos Vercel/Evil Rabbit, Factory AI, Unit Software, Player Zero AI) e Immersive 3D. Os que precisam ser nomeados justamente para serem descartados: Frutiger Aero e Interface Nostalgia (esqueuomorfismo brilhante, botao gel 3D, azul-verde luminoso), Heisei Retro, Lo-fi Pixel, Y3K Hyperfuturism (cromo liquido, holografico), Dreamcore (pastel desfocado, VHS), KidCore e colagem de scrapbook, e Surveillance Aesthetic (grao de CCTV, timestamp, glitch).

**Técnica:** Technical Mono e o mais barato de todos: e so tipografia e alinhamento em grid, zero asset, zero JS, roda em qualquer maquina. Os outros exigem render 3D, ilustracao ou WebGL, todos fora da restricao.

**Aplicável:** Pegar a dose exata de Technical Mono: mono apenas nos rotulos e nos numeros (uptime, versao, CNPJ, 8 camaras, 31 dominios), ao lado da grotesca. Mono junto de grotesca comunica isto foi medido, que e exatamente o que o diretor de farmaceutica precisa ler. Mono na pagina inteira comunicaria isto e para hacker e perderia o presidente de camara. O resto do catalogo entra como lista de veto.

### Figma Resource Library: Top Web Design Trends

<https://www.figma.com/resource-library/web-design-trends/>

**Estética:** Treze tendencias com marca real ao lado de cada. Relevantes: tipografia bold com titulo superdimensionado e fonte variavel respondendo a movimento (Glossier, Samsung); dark mode como toggle padrao; motion design com narrativa por scroll e micro-animacao guiando atencao (Nike, Ralph Lauren); neumorphism com sombra suave e gradiente sutil deixando o elemento quase tocavel (Stripe, Apple). Irrelevantes ou perigosos para este caso: gamificacao (Duolingo, Sephora), maximalismo denso (Spotify, Liquid Death), colagem estilo scrapbook (La Palatine) e neo-brutalismo anti-design (Balenciaga, Diesel).

**Técnica:** A leitura util e o alinhamento por setor: marca institucional e de software fica do lado tipografia mais movimento mais escuro; marca de moda e consumo fica do lado maximalismo mais anti-design. Tudo do primeiro grupo cabe em CSS puro.

**Aplicável:** Confirma por evidencia de mercado que o eixo da Intelecto e tipografia grande mais movimento discreto mais escuro opcional, e fecha a porta para colagem, maximalismo e anti-design. Serve como argumento com o dono: as marcas que fazem colagem sao Balenciaga e Diesel, nao empresa que vende portal de transparencia e DPO as a service.

### Awwwards, sites em destaque e taxonomia de estilo

<https://www.awwwards.com/websites/>

**Estética:** Vitrine do que esta sendo premiado agora: Cipher, Alethia, Revelatio Studio, Studio K95, Noomo Showcase, 2xA Studio, Rechroma, Why Zero, Hearst Exhibit 2026, Made With GSAP. A taxonomia de filtro do proprio site expoe as familias vigentes: animation, scrolling, UI design, interaction design, minimal, typography, portfolio, 3D, WebGL, parallax, microinteractions, responsive, alem de clean, colorful, flat design, photographic e retro.

**Técnica:** A maioria dos vencedores depende de WebGL e de biblioteca de scroll (GSAP aparece ate no nome de um dos destaques), o que esta fora do escopo (sem CDN, sem framework, maquina velha). O que da para levar dali e repertorio de composicao e ritmo, nao a stack.

**Aplicável:** Serve de calibragem de nivel, nao de copia, e ajuda a separar o que e alcancavel: a faixa premiada minimal + typography + microinteractions cabe inteira em CSS puro e e onde a Intelecto deve jogar; a faixa 3D + WebGL + parallax pesado nao cabe na restricao e tentar imitar produziria justamente o site bonito e vazio que o dono nao quer.

### Creative Boom: 50 fontes populares entre designers em 2026

<https://www.creativeboom.com/resources/top-50-fonts-in-2026/>

**Estética:** O canone atual em duas colunas. Grotescas suicas e neo-grotescas: Suisse Int'l (o Swiss Grotesk digital definitivo, do Estilo Tipografico Internacional de Basileia e Zurique), Akkurat (descrito como precisao tecnica, confiabilidade e neutralidade sem parecer da moda), Diatype (quente e afiada, otimizada para tela), Sohne, GT America, Neue Montreal, Aeonik, Founders Grotesk. Serifas editoriais afiadas: Domaine, Tiempos, Canela (entre a sans e a serifa, influenciada por talha em pedra), Editorial New (serifa estreita e elegante com sensibilidade retro de meados dos anos 90), GT Sectra, Lyon Text. O consenso do levantamento e retorno a territorio familiar, serifas elegantes reimaginadas para a era digital ao lado de sans expressivas.

**Técnica:** Todas comerciais e pagas. Substituicoes de desenho proximo no Google Fonts: Instrument Sans e Schibsted Grotesk para a grotesca neutra, Geist para a grotesca de produto, Fraunces e Instrument Serif para o display serifado de alto contraste, Newsreader ou Literata para serifa de leitura longa, Geist Mono para rotulo. Todas variaveis, o que casa com o movimento de tipografia fluida.

**Aplicável:** Da o argumento tecnico de por que nao usar Inter no titulo: Inter e correta e invisivel. Uma serifa de alto contraste no H1 sobre grotesca neutra no corpo e o que faz a pagina da Intelecto parecer autoral em vez de template, e a descricao da Akkurat (precisao tecnica, confiabilidade, neutralidade, sem modismo) e literalmente o posicionamento que a empresa quer projetar, agora traduzido em escolha de fonte em vez de em azul de orgao publico.

### MDN: CSS scroll-driven animations

<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations>

**Estética:** Nao e uma estetica, e o motor que torna tres dos movimentos acima viaveis sob a restricao. Permite que opacidade, transform e eixos de fonte variavel sejam funcao da posicao de rolagem, sem uma linha de JavaScript e sem event listener de scroll.

**Técnica:** animation-timeline: scroll(nearest block) e animation-timeline: view(), mais animation-range, view-timeline-inset e timeline-scope. Fallback declarado com @supports not (animation-timeline: --x) para navegador antigo, que simplesmente ve o estado final. Regra de performance da propria pagina: animar apenas propriedades baratas (transform, opacity), evitar width e height, usar will-change com parcimonia. E GPU-acelerado quando possivel.

**Aplicável:** E exatamente como a Intelecto entrega movimento de nivel premiado sem framework, sem CDN e sem travar PC de camara do interior, porque o que trava maquina velha e o JS rodando a cada evento de scroll, nao o compositor. Aplicacoes diretas: revelacao em cascata dos cards de cliente com view(), barra de progresso de leitura com scroll(), e o peso da fonte variavel do H1 adensando conforme a secao entra na viewport.

### Google Fonts Metadata API (verificacao dura de disponibilidade e eixos)

<https://fonts.google.com/metadata/fonts>

**Estética:** Nao e uma pagina visual, e a fonte de verdade. Baixei os 2,7 MB de JSON e extrai os eixos reais de cada familia da lista. Resultado auditado: Instrument Sans (wght 400..700 + wdth 75..100), Instrument Serif (ESTATICA, so roman 400 e italico), Bricolage Grotesque (opsz 12..96, wdth 75..100, wght 200..800), Geist e Geist Mono (wght 100..900), Onest (100..900), Schibsted Grotesk (400..900), Familjen Grotesk (400..700), Figtree (300..900), Manrope (200..800), Sora (100..800), Outfit (100..900), Unbounded (200..900), Gabarito (400..900), Fraunces (wght 100..900 + opsz 9..144 + SOFT 0..100 + WONK 0..1), Newsreader (opsz 6..72, wght 200..800), Literata (opsz 7..72, wght 200..900), Spectral (ESTATICA), Playfair Display (400..900), DM Serif Display (ESTATICA), Syne (400..800), Archivo (wdth 62..125, wght 100..900), Anybody (wdth 50..150, wght 100..900), Chivo (100..900), JetBrains Mono (100..800), Martian Mono (wdth 75..112.5, wght 100..800), Space Mono (ESTATICA), Fira Code (300..700). Todas com subset latin-ext, ou seja, acentuacao portuguesa completa.

**Técnica:** Verificado tambem por HTTP direto no endpoint https://fonts.googleapis.com/css2?family=NOME: todas as 28 familias acima retornam 200. General Sans retorna 400 e Switzer retorna 400, ou seja, NAO EXISTEM no Google Fonts (sao da Fontshare/Indian Type Foundry e exigiriam self-host de arquivo, o que quebra a restricao de pagina autocontida com Google Fonts).

**Aplicável:** Corta o risco de escolher uma fonte que nao existe ou que nao tem o eixo que se imagina. Dois achados que mudam decisao: (1) Instrument Serif e estatica, entao so da para usar 400 e italico, o que a torna fonte de display exclusivamente, nunca de interface. (2) Bricolage Grotesque tem wdth ate 100, nao 200, entao nao existe versao expandida dela. (3) General Sans e Switzer estao fora do jogo, esquecer.

### Fonts In Use, Instrument Serif

<https://fontsinuse.com/typefaces/219915/instrument-serif>

**Estética:** Serifa de display condensada, desenhada por Rodrigo Fuenzalida com Jordan Egstad, lancada em junho de 2023 para a marca da agencia Instrument. Proporcao estreita, contraste alto entre haste e filete, serifas finas e afiadas. E uma old style contemporanea: tem a autoridade de uma serifa editorial sem a poeira de uma serifa de cartorio. Funciona em 56 a 112px com line-height 0.95 e letter-spacing -0.02em; abaixo de 28px perde a graca.

**Técnica:** Estatica, dois arquivos (roman e italico), pesa quase nada. font-family: 'Instrument Serif', Georgia, serif. Zero JS.

**Aplicável:** Esta e a evidencia real de que o par que eu recomendo ja e praticado por quem ganha premio. O banco de dados lista 14 usos documentados, e tres deles sao exatamente a combinacao que serve a Intelecto: Instrument Serif com Geist Sans (cartaz Sommerfest 25, 2025), com Geist Mono (portfolio Quang Dinh, 2024) e com JetBrains Mono (Gemeinschaft Immanuel, 2025). Tambem aparece em marca de produto de consumo (David protein bars, 2024, com Suisse Int'l e ABC Monument Grotesk Mono). Ou seja: serifa condensada gigante no h1 + grotesca neutra no corpo + mono nas etiquetas e um movimento vivo e testado, nao invencao minha.

### Bricolage Grotesque, especimen oficial do Atelier Triay

<https://ateliertriay.github.io/bricolage/>

**Estética:** Grotesca de tres eixos por Mathieu Triay (tres anos de trabalho, financiada pelo Google Fonts). O eixo optico nao e escala: tem masters dedicados. Em opsz 12 as proporcoes abrem, o corpo baixo cresce em relacao as maiusculas e o desenho fica neutro e legivel. Em opsz 96 o desenho fica expressivo, as curvas ficam tensas e o corpo baixo encolhe. O eixo de largura viaja de uma largura francesa relaxada (influencia da Antique Olive) ate um britanico comprimido e ansioso (Grotesque No 9 da Stephenson Blake). O designer diz que buscou 'a foundation of a feeling' em vez de neutralidade invisivel.

**Técnica:** Uma familia variavel unica cobre display e texto. Um so arquivo woff2, controlado por font-variation-settings 'opsz' e 'wdth'. Da para animar o eixo optico no scroll com CSS puro (transition em font-variation-settings) sem nenhuma biblioteca.

**Aplicável:** E a resposta mais economica ao pedido do dono: personalidade forte com UMA familia so. Manchete em opsz 96 / wght 750 / wdth 78 e corpo em opsz 12 / wght 400 / wdth 100 parecem duas fontes diferentes e sao o mesmo arquivo. Resolve o custo de banda para a maquina velha da camara e ainda entrega o 'carater' que o dono quer. Aviso: o desenho tem quirk, entao e a opcao mais autoral, mais adequada a marca Intelecto do que a um portal de transparencia de cliente.

### Fraunces, site oficial da Undercase Type

<https://fraunces.undercase.xyz/>

**Estética:** Serifa de display de quatro eixos por Phaedra Charles e Flavia Zimbardi. O eixo SOFT controla a 'molhadura' da letra: no extremo Sharp o contraste entre grosso e fino fica extremo e as serifas arredondadas ficam afiadas; indo para SuperSoft o contraste cai e as bordas amolecem. O eixo WONK liga substituicoes expressivas: h, n e m inclinados (herdados da Windsor) e, no italico, terminais em bola. O eixo optico abre o entreletras, aumenta o corpo baixo e reduz contraste abaixo de 18pt. As referencias sao Arts and Crafts: Cooper Black, Windsor, Clearface, e o revival setentista do Ed Benguiat, descrito como 'irreverence and friendliness' contra o modernismo austero.

**Técnica:** Variavel, quatro eixos, um arquivo. font-variation-settings: 'opsz' 96, 'wght' 650, 'SOFT' 30, 'WONK' 1. Importante: as substituicoes WONK ocorrem automaticamente abaixo de 18pt, entao o valor precisa ser explicitamente zerado no corpo de texto.

**Aplicável:** E o caminho para calor humano sem cair em agencia de marketing. Um h1 em Fraunces opsz 96 wght 650 SOFT 30 WONK 1, com o corpo em Schibsted Grotesk 400, produz uma pagina que um presidente de camara le como 'gente que se importa' e nao como formulario. Regra de uso: WONK 1 SOMENTE no h1 e no numero grande de KPI. WONK no paragrafo vira cafeteria artesanal e destroi a credibilidade tecnica junto ao diretor da farmaceutica.

### Geist, tipografia da Vercel

<https://vercel.com/font>

**Estética:** Familia desenhada pela Vercel declaradamente sobre 'simplicity, minimalism, and speed', com heranca do design suico, priorizando precisao, clareza e funcionalidade. Nove pesos expostos no playground (Thin, Ultra Light, Light, Regular, Medium, Semi Bold, Bold, Black, Ultra Black). A propria pagina traz inspetor de glifo com cap height, x-height, baseline e descender e um controle de espacamento negativo (mostra -3%). Nasceu como monoespacada para codigo e depois virou Sans e Pixel.

**Técnica:** Variavel wght 100..900 no Google Fonts, um arquivo. O detalhe do especimen que vale copiar: tracking negativo em titulo grande. Em CSS, h1 { letter-spacing: -0.03em } com Geist 600 em 64px reproduz o aperto do especimen.

**Aplicável:** E a opcao de MENOR risco para o publico TRB Pharma e para telas densas de sistema (votacao de plenario, e-SIC, painel do Mirante). Geist Sans no corpo + Geist Mono nos rotulos entrega ar de infraestrutura seria, nao de site institucional. Vantagem operacional: uma familia cobre marketing e produto, o que reduz manutencao entre a landing e o sistema.

### Vercel Geist, sistema de cor

<https://vercel.com/geist/colors>

**Estética:** Dez escalas de cor com dez degraus cada (100 a 1000) e papel fixo por degrau, nao por gosto: 100 fundo padrao, 200 fundo em hover, 300 fundo ativo, 400 a 600 bordas, 700 e 800 fundos de alto contraste, 900 e 1000 texto e icone. Hues: gray, gray-alpha, blue, red, amber, green, teal, purple, pink, mais uma escala dedicada so a backgrounds com dois valores (--ds-background-100 e 200). O cinza e o modelo de referencia de toda a estrutura. Nenhum hex e exposto: tudo vive em custom property.

**Técnica:** CSS custom properties puras, sem build. O modelo se copia inteiro num arquivo estatico: :root define os dez degraus, e o tema escuro so redefine os mesmos dez nomes. Componente nenhum sabe que existe tema.

**Aplicável:** E exatamente a arquitetura de token que a landing da Intelecto precisa para ter tema claro e escuro sem duplicar CSS. Adotar o contrato de papeis (1 a 3 fundo, 4 a 6 borda, 7 e 8 fundo solido, 9 e 10 texto) elimina a maior fonte de feiura amadora, que e escolher cinza no olho. Tambem mostra que uma paleta profissional tem 2 fundos e 3 bordas, nao um cinza so.

### Radix Colors, composicao de paletas

<https://www.radix-ui.com/colors/docs/palette-composition/scales>

**Estética:** Trinta hues, cada uma com 12 degraus, e quatro variantes por hue: escala clara, escala clara alpha, escala escura e escala escura alpha. O ponto decisivo para este projeto e o conjunto de NEUTROS: alem de Gray, existem Mauve, Slate, Sage, Olive e Sand. Sao cinzas com temperatura, feitos para casar com a hue do acento. Nos coloridos ha Gold, Bronze, Brown, Tomato, Ruby, Crimson, Plum, Iris, Jade, Grass, Mint, Sky, entre outros. As escalas Black Alpha e White Alpha nao mudam entre claro e escuro, sao para overlay.

**Técnica:** Distribuido como CSS puro, um arquivo por escala, sem runtime. As variantes alpha resolvem sobreposicao em fundo com textura sem recalcular cor.

**Aplicável:** Da o vocabulario para fugir do cinza neutro puro que o dono associa a documento. Se o acento for terracota, o neutro e Sand, nao Gray. Se for iris, o neutro e Mauve. Esse detalhe de temperatura e a diferenca entre 'peca anexada a processo licitatorio' e 'produto de software'. As escalas alpha tambem permitem borda sutil sobre qualquer fundo, incluindo fundo com ruido.

### Evil Martians, OKLCH in CSS: why we moved from RGB and HSL

<https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl>

**Estética:** Explica por que paleta feita em HSL fica suja: em HSL, somar 10% de lightness rende resultado diferente para azul e para roxo, e mudar hue altera a claridade percebida, quebrando contraste de texto sem aviso. OKLCH e perceptual: oklch(L C H), L de 0 a 1, C de 0 ate cerca de 0.37 em sRGB, H de 0 a 360, com vermelho comecando em 20, amarelo em 90, verde em 140, azul em 220. Exemplos do artigo: oklch(0.8 0.12 100) amarelo e oklch(0.8 0.12 225) azul tem a MESMA claridade percebida.

**Técnica:** Duas tecnicas diretamente aplicaveis: hover derivado por sintaxe de cor relativa, background: oklch(from var(--accent) calc(l - 0.1) c h), e tema escuro trocando so as custom properties da paleta, sem @media dentro de componente. Para P3, o artigo mostra elevar a chroma dentro de @media (color-gamut: p3), por exemplo oklch(0.7 0.2 145) em sRGB e oklch(0.7 0.29 145) em P3. Suporte declarado como completo nos navegadores atuais, sem polyfill.

**Aplicável:** E o motor das seis paletas que eu montei. Permite gerar a rampa inteira variando so o L com C e H fixos, garantindo que o tom nao vire lama no tema escuro. Ressalva pratica para a maquina velha de camara: oklch() so existe a partir do Chrome 111 e Firefox 113, entao declarar o hex primeiro e o oklch logo depois na mesma regra, e nao usar sintaxe de cor relativa como unico caminho para o hover (Chrome 119+), sempre com um hex de hover declarado antes.

### Tailwind CSS v4, paleta de cores

<https://tailwindcss.com/docs/colors>

**Estética:** Vinte e cinco familias com 11 degraus cada (50 a 950), TODAS definidas em OKLCH. Exemplos concretos da pagina: --color-red-50: oklch(97.1% 0.013 17.38), --color-red-500: oklch(63.7% 0.237 25.331), --color-red-950: oklch(25.8% 0.092 26.042). O dado mais relevante para este briefing: os neutros nao sao mais so slate, gray, zinc, neutral e stone; a v4 traz TAUPE, MAUVE, OLIVE e MIST. Ou seja, o padrao da industria em 2026 e cinza com temperatura, nao cinza puro.

**Técnica:** Valores prontos em OKLCH para copiar direto em custom property, sem instalar Tailwind. Basta ler os degraus da familia escolhida e colar no :root do arquivo estatico.

**Aplicável:** Duas coisas. Primeira, confirma a direcao dos neutros temperados: o cinza neutro puro do mockup rejeitado e justamente o que a industria abandonou. Segunda, e uma biblioteca de valores auditados em OKLCH que eu posso usar como ancora de claridade ao montar as rampas da Intelecto, sem inventar numero. Note que a estrutura de 11 degraus e mais granular do que os 10 da Vercel e os 12 da Radix; para uma landing estatica, 6 a 8 tokens por tema bastam.

### Open Props

<https://open-props.style/>

**Estética:** Conjunto de tokens em CSS puro. Cor: 18 hues com 13 degraus (0 a 12), valores em RGB, com alternativa HSL por import separado, mais 16 variaveis oklch dinamicas que geram 360 hues via --palette-hue, --palette-hue-rotate-by e --palette-chroma. Hues incluem choco, camo, jungle, sand e stone, ou seja, terrosos que nenhum sistema corporativo tem. Alem de cor: 6 sombras externas, 6 de texto e 5 internas que ADAPTAM a tema claro e escuro, 30 gradientes lineares desenhados a mao, 5 props de ruido para textura, easings (elastic, spring, bounce, step, mais as equacoes de Robert Penner), escalas de tamanho fluidas em clamp, raios de borda, aspect ratios, z-index e duracoes.

**Técnica:** Cem por cento CSS custom properties, zero JS, zero build. Da para importar so o que interessa ou simplesmente copiar os valores. Os 5 props de ruido resolvem textura sem imagem externa, o que respeita a restricao de pagina autocontida sem CDN.

**Aplicável:** Resolve tres buracos de uma vez: sombra que muda sozinha entre claro e escuro (o erro classico e usar a mesma sombra preta nos dois), easing com carater (spring e elastic, em vez do ease padrao do navegador que denuncia amadorismo), e TEXTURA sem arquivo de imagem, via os props de ruido, que e o antidoto direto ao 'zero imagem' do mockup rejeitado. As escalas fluidas em clamp sao o mecanismo do contraste de escala tipografica que eu descrevo nos movimentos.

### Evil Martians, Martian Mono

<https://evilmartians.com/opensource/martian-mono>

**Estética:** Primeira tipografia open source da Evil Martians. Dois eixos, o que e raro em monoespacada: peso do fino ao grosso e largura de Condensed a Wide (no Google Fonts, wdth 75 a 112.5, wght 100 a 800). A largura permite apertar a mono ate ela caber como etiqueta sem virar sopa de letra.

**Técnica:** Variavel de dois eixos, arquivo unico. font-variation-settings: 'wdth' 75, 'wght' 500 gera uma etiqueta compacta; 'wdth' 112 abre para numero grande de dashboard.

**Aplicável:** A pagina declara que o proposito e codigo. Isso e exatamente a ressalva que importa: nao usar Martian Mono como fonte de leitura. O uso certo aqui e voz de engenharia em doses curtas, etiquetas em caixa alta de 11 a 12px com letter-spacing 0.12em, numeros de KPI (31 dominios em producao, 8 camaras, 10+ anos) e cabecalho de tabela. Se a preferencia for algo mais discreto, Geist Mono ou JetBrains Mono no mesmo papel.

### Typewolf, The 40 Best Google Fonts

<https://www.typewolf.com/google-fonts>

**Estética:** Colecao curada pelo Jeremiah Shoaf. A pagina e propositalmente pratica: lista pesos e italicos disponiveis e marca quais servem para corpo de texto, sem prosa estetica. Do meu conjunto, aparecem no top 40: Space Mono (2 pesos com italico, marcada como boa para corpo), Syne (5 pesos e um italico), Fraunces (9 pesos com italico, boa para corpo), Manrope (7 pesos, sem italico) e Chivo (9 pesos com italico, boa para corpo).

**Técnica:** Nao traz codigo, traz curadoria. O valor esta na secao de FAQ.

**Aplicável:** O achado util esta fora do top 40: o autor lista como 'newer releases that are really great' exatamente Instrument Sans, Instrument Serif, Bricolage Grotesque, Newsreader, Familjen Grotesk, Literata e Outfit, que sao o nucleo da minha recomendacao. Serve como validacao independente de que esse grupo e o que esta em alta agora, e nao capricho meu. Registrar tambem a ausencia: Schibsted Grotesk, Sora, Gabarito, Unbounded, JetBrains Mono e Martian Mono nao aparecem em nenhum ponto da pagina, ou seja, sao apostas menos consagradas pela curadoria.

### Typewolf, Top 10 Quirky Grotesque Fonts

<https://www.typewolf.com/top-10-quirky-grotesque-fonts>

**Estética:** Define a categoria que resolve o problema do dono. As quirky grotesques sao 'sans-serif typefaces that draw inspiration from some of the crude and irregular grotesques of the late nineteenth century', e o autor diz que servem para adicionar calor e personalidade quando a neo grotesca tipo Helvetica soa fria e esteril. A lista e paga (Apercu, Supria Sans, Mabry, Monotype Grotesque, Maple, Founders Grotesk, Roc Grotesk, Questa Sans, Tablet Gothic, Dia).

**Técnica:** Nenhuma das dez esta no Google Fonts, entao a lista serve como alvo estetico, nao como escolha. O equivalente livre e direto e Bricolage Grotesque, e em segundo plano Familjen Grotesk e Schibsted Grotesk.

**Aplicável:** E o diagnostico exato do mockup rejeitado. O que soou 'burocratico' nao foi so a cor branca e a hairline, foi a grotesca neutra sem carater. Public Sans e literalmente uma neo grotesca de orgao publico. A saida nao e ir para o lado do enfeite, e trocar a neutralidade esteril por uma grotesca com irregularidade controlada, mantendo layout disciplinado. E o mesmo rigor com temperatura diferente.

### web.dev, Best practices for fonts

<https://web.dev/articles/font-best-practices>

**Estética:** Nao e estetica, e a condicao para a estetica sobreviver na maquina velha da camara do interior. Compara font-display: optional (renderiza fallback em 100ms, elimina layout shift, mas pode nunca trocar a fonte), swap (mostra fallback e troca, com risco de salto visual) e block (texto invisivel por 2 a 3 segundos).

**Técnica:** Recomendacoes concretas: usar SOMENTE woff2 (30% melhor compressao que woff, suporte universal); preconnect nos dois origins do Google Fonts, <link rel=preconnect href=https://fonts.googleapis.com> e <link rel=preconnect href=https://fonts.gstatic.com crossorigin>; declarar o @font-face inline no head em vez de folha externa, para descoberta mais cedo; evitar preload quando se usa folha externa; subset por unicode-range; usar size-adjust para casar as metricas do fallback com as da fonte web e matar o CLS; e trocar icon font por SVG. Sobre variaveis: um arquivo variavel substitui varios estaticos, mas se so um peso for usado o estatico e menor.

**Aplicável:** Define o orcamento tipografico do projeto: no maximo tres familias e idealmente tres arquivos woff2 (uma variavel de texto, uma display, uma mono), font-display: swap, preconnect nos dois hosts, e um font-family de fallback com size-adjust calibrado para que a pagina nao pule quando a fonte chegar em conexao ruim. Isso torna viavel usar Instrument Serif + Instrument Sans + Geist Mono sem penalizar quem abre num PC de 2014.

### MDN Web Docs: CSS scroll-driven animations (guia)

<https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations>

**Estética:** O efeito visual e este: um card de servico comeca 24px abaixo da posicao final e com opacidade 0; conforme o usuario rola, ele sobe e ganha opacidade, e termina exatamente quando cruza 40% da altura da tela. Nada acontece por conta propria: se o usuario para de rolar, o movimento congela no meio. Isso da a sensacao fisica de que a pagina tem peso, oposto do 'fade-in de 600ms' que dispara sozinho e denuncia template. Serve tambem para uma barra de progresso de leitura de 3px no topo, que preenche da esquerda para a direita em accent saturado (por exemplo oklch(0.72 0.17 250)) enquanto a pagina rola.

**Técnica:** CSS puro, zero JS. `animation: reveal linear both; animation-timeline: view(); animation-range: entry 0% cover 40%;` para revelacao por elemento. Para a barra de progresso: `animation-timeline: scroll();` com `transform: scaleX()` de 0 a 1 e `transform-origin: left`. Existem tambem timelines nomeadas (`scroll-timeline: --main-timeline` no container, `animation-timeline: --main-timeline` no filho) e `timeline-scope` para atravessar a arvore. Suporte em 2026: Chrome/Edge 115+, Safari 18+, Firefox 132+ (ainda atras da flag `layout.css.scroll-driven-animations.enabled` no stable ate a 152). Roda no compositor, custo praticamente zero se voce animar so `opacity` e `transform`. Degradacao: `@supports not (animation-timeline: view()) { .reveal { opacity: 1; transform: none; } }`, o elemento simplesmente aparece pronto. Nunca deixe o estado inicial invisivel sem esse guard, senao navegador sem suporte mostra pagina em branco.

**Aplicável:** E a espinha dorsal do movimento do site da Intelecto: revelacao dos cards de solucao (Mirante, Conformis, e-mail .leg.br), barra de progresso de leitura, e entrada escalonada da grade de clientes. Substitui integralmente qualquer biblioteca tipo AOS/GSAP ScrollTrigger, o que importa porque a restricao e pagina autocontida sem CDN.

### Josh W. Comeau: Scroll-Driven Animations

<https://www.joshwcomeau.com/animation/scroll-driven-animations/>

**Estética:** Comeau descreve o comportamento em termos de distancia, nao de tempo: o bloco 'termina de aparecer quando chega ao centro da viewport'. Os quatro ranges dao quatro sensacoes distintas: `cover` (do primeiro pixel entrando ao ultimo saindo, movimento longo e cinematografico), `contain` (so enquanto o elemento cabe inteiro na tela, bom para painel grande), `entry` (revelacao curta e seca na borda de baixo) e `exit` (elemento se despede subindo e desbotando na borda de cima). Para um site institucional, `entry` sozinho ja basta: e discreto e nunca deixa conteudo invisivel por muito tempo.

**Técnica:** Sintaxe longa para controle fino: `animation-range-start: cover 0%; animation-range-end: cover 50%;`. Armadilha documentada: com `animation-range: contain` e posicao inicial fora da tela, e obrigatorio `animation-fill-mode: backwards`, senao o elemento aparece na posicao errada antes do range comecar. Ele cita ~85% de suporte global e degradacao natural (o estado inicial do CSS fica visivel). Acessibilidade nao e opcional aqui: todo o bloco vai dentro de `@media (prefers-reduced-motion: no-preference) { ... }`, porque vestibular disorder e sintoma fisico, nao preferencia estetica.

**Aplicável:** Define a dosagem correta para o publico da Intelecto. Presidente de camara em maquina velha e diretor de farmaceutica com politica de acessibilidade corporativa: usar `entry` curto, gate de reduced-motion, e nunca esconder texto atras de animacao.

### Chrome for Developers: CSS scroll-triggered animations (animation-trigger, Chrome 145)

<https://developer.chrome.com/blog/scroll-triggered-animations>

**Estética:** Diferenca visual que importa: scroll-driven amarra o progresso ao dedo (rolar para tras desfaz); scroll-triggered dispara uma animacao de tempo proprio ao cruzar um limiar e ela roda ate o fim sozinha. Visualmente e a diferenca entre um contador de '31 dominios em producao' que sobe e desce se voce chacoalhar a roda do mouse, e um contador que sobe uma vez de 0 a 31 em 900ms com easing e fica la, firme. Para numero de prova social, o segundo e o unico aceitavel.

**Técnica:** `timeline-trigger: --t view() entry 100% exit 0%;` no container e `animation: unclip 0.35s ease-in-out both; animation-trigger: --t play-forwards play-backwards;` no elemento. Aceita tambem par de ranges separados por barra (`entry 100% exit 0% / entry 0% exit 100%`) para ativar num ponto e desativar em outro. Chega no Chrome 145 (2026), portanto e minoria de navegadores hoje: tratar como enfeite de topo de linha. O proprio demo oficial embute fallback com IntersectionObserver, que e exatamente a estrategia certa: escrever o IntersectionObserver primeiro (uma linha de `entry.target.classList.add('in')` e `observer.unobserve()`) e usar `@supports (animation-trigger: --t)` para desligar o JS onde o CSS nativo resolve.

**Aplicável:** Contadores da area de prova social (8 camaras, 2 prefeituras, 3 autarquias, 10+ anos, 31 dominios) e o 'destrave' dos cards de produto. Como o suporte e novo, na pratica a Intelecto entrega com IntersectionObserver e ganha o caminho nativo de graca nos navegadores novos.

### web.dev (Adam Argyle): Use conic gradients to create a cool border

<https://web.dev/articles/conic-gradient-border>

**Estética:** A borda deixa de ser uma linha cinza de 1px e vira um arco de luz. Concretamente: conic-gradient girando entre um azul-cyan saturado (hsl(200 100% 60%)) e transparente, de modo que so um quadrante da moldura brilha por vez e o resto fica na cor base do card. Quando o mouse entra no card, o angulo do gradiente segue o ponteiro, entao o brilho parece um reflexo real de luz na quina do cartao. Em tema escuro isso e o que separa um site premiado de um site com `border: 1px solid #333`.

**Técnica:** Base estatica: `border: 1px solid; border-image-slice: 1; border-image-source: conic-gradient(from var(--angle), ...)`. Interatividade: um unico listener de `pointermove` no container que escreve `el.style.setProperty('--angle', deg + 'deg')`. Armadilha seria: `border-image` ignora `border-radius`, entao para card arredondado a versao correta e um pseudo-elemento com o conic-gradient e `mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); mask-composite: exclude;` que recorta so a faixa da borda. Suporte de `border-image-source` e antigo e universal (Chrome 15+, Firefox 15+, Safari 6+); o fallback e a borda solida, que ja e o estado padrao. Performance: escrever custom property em pointermove so repinta, nao relayouta; use `requestAnimationFrame` para coalescer eventos e nunca mexa em `top/left`.

**Aplicável:** Assinatura visual dos cards de produto (Mirante, Conformis) e do botao primario de contato. E o detalhe caro que faz o diretor pensar 'esta gente sabe fazer software', e custa 12 linhas de CSS mais 4 de JS.

### Ryan Mulligan: CSS @property and the New Style

<https://ryanmulligan.dev/blog/css-property-new-style/>

**Estética:** E o motor invisivel por tras de tudo que brilha. Sem `@property`, uma variavel de angulo pula de 0deg para 360deg em degraus visiveis e o gradiente rotativo fica engasgado; com `@property`, o navegador interpola e o giro fica continuo como seda. Vale igual para cor: hover que atravessa de um cinza-azulado para o accent sem passar por cinza morto no meio.

**Técnica:** ```css
@property --gradient-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
```
Os tres campos (`syntax`, `initial-value`, `inherits`) sao obrigatorios. Tipos uteis alem de `<angle>`: `<color>`, `<percentage>`, `<length>`, `<number>`. O artigo registra que `@property` ganhou suporte em todos os navegadores modernos (Baseline). Custo: a interpolacao acontece no thread principal para propriedades nao-compositaveis, entao registre poucas variaveis e evite animar dezenas ao mesmo tempo. Degradacao: navegador sem `@property` simplesmente nao anima o valor, o gradiente fica parado na posicao inicial, o que e visualmente aceitavel e nunca quebra layout.

**Aplicável:** Habilita, com uma unica dependencia, o glow rotativo da borda, a varredura do texto em gradiente, e a transicao de cor dos estados de hover. E o pre-requisito tecnico dos itens 4 e 10 desta lista.

### CSS-Tricks: Grainy Gradients

<https://css-tricks.com/grainy-gradients/>

**Estética:** Esta e a tecnica que tira o aspecto plastico dos gradientes CSS. Sem grao, um gradiente radial de azul para roxo em tela grande mostra bandas horizontais e cheira a template. Com grao, ganha textura de papel fotografico ou de filme 35mm: um ruido fino, quase imperceptivel, que so aparece se voce chegar perto da tela. Em tema escuro sobre um fundo quase preto (#0A0B0D), o grao a 4% de opacidade e o que faz a superficie parecer material, nao pixel.

**Técnica:** ```xml
<svg viewBox="0 0 200 200" xmlns='http://www.w3.org/2000/svg'>
  <filter id='noiseFilter'>
    <feTurbulence type='fractalNoise' baseFrequency='0.65'
      numOctaves='3' stitchTiles='stitch' />
  </filter>
  <rect width='100%' height='100%' filter='url(#noiseFilter)' />
</svg>
```
e no CSS: `background: linear-gradient(to right, blue, transparent), url(noise.svg); filter: contrast(170%) brightness(1000%);`. Regra de ouro para producao: nao aplique o filtro vivo na pagina inteira. Gere o SVG uma vez, embuta como data-URI num pseudo-elemento `::after` com `position: fixed; inset: 0; opacity: .04; mix-blend-mode: overlay; pointer-events: none;`. Assim o navegador trata como imagem estatica ladrilhada (`stitchTiles='stitch'` garante que os ladrilhos casem sem costura visivel) e o custo cai a quase nada. O artigo registra que comentaristas apontaram custo real quando se empilha filtros. Degradacao: sem suporte, o gradiente aparece liso, sem perda funcional.

**Aplicável:** Camada de textura do hero e das secoes escuras. E o item de menor custo e maior retorno estetico da lista inteira, e resolve diretamente a objecao do dono contra 'branco chapado sem imagem'.

### Codrops: SVG Filter Effects, Creating Texture with feTurbulence

<https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/>

**Estética:** Referencia para calibrar o grao em vez de chutar. `type='turbulence'` (padrao) gera linhas onduladas, base de textura liquida; `type='fractalNoise'` gera padrao nublado e suave, base de gas e nuvem. `baseFrequency` controla o tamanho do grao: 0.001 gera manchas enormes tipo aurora, 0.02 a 0.2 e a faixa util para textura organica, 0.65 a 0.9 vira grao de filme fino. `numOctaves` adiciona detalhe com retorno decrescente a partir de 5. `seed` muda o desenho do ruido mantendo a mesma familia, util para ter duas texturas irmas na mesma pagina.

**Técnica:** ```xml
<feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
<feDiffuseLighting in="noise" lighting-color="white" surfaceScale="2">
  <feDistantLight azimuth="45" elevation="60" />
</feDiffuseLighting>
```
Aviso explicito do artigo sobre custo: filtros SVG sao intensivos, a recomendacao e 'nao exagerar' e manter animacoes de filtro limitadas a areas pequenas. Traducao pratica para o caso da Intelecto: usar duas camadas fixas, uma de aurora com baseFrequency baixo (0.008 a 0.02) e outra de grao com baseFrequency alto (0.7), ambas geradas uma vez e congeladas como data-URI. Jamais animar `baseFrequency` em tela cheia, que e o que trava maquina velha.

**Aplicável:** Define os numeros exatos das duas texturas do site (aurora de fundo e grao de superficie) e da o argumento tecnico para congelar o filtro em vez de deixar vivo, que e a condicao para rodar em PC de camara do interior.

### Chrome for Developers: Cross-document view transitions for MPAs

<https://developer.chrome.com/docs/web-platform/view-transitions/cross-document>

**Estética:** E o unico item da lista que muda a percepcao do site inteiro, nao de um componente. Hoje, clicar em 'Mirante' num site estatico da um flash branco e um recarregamento. Com view transitions, o titulo da secao e a imagem do card se transportam da home para a pagina interna num movimento continuo de cerca de 300ms, e o resto faz crossfade. O visitante nao consegue dizer se aquilo e um site estatico ou um aplicativo. Para uma empresa que vende software, essa e a prova social mais barata que existe.

**Técnica:** Opt-in em ambas as paginas: `@view-transition { navigation: auto; }`. Elementos que devem se transportar recebem o mesmo `view-transition-name` nas duas paginas. Customizacao via `html::view-transition-old(nome)` e `html::view-transition-new(nome)`. Para casos dinamicos existem os eventos `pageswap` (antes do ultimo frame da pagina velha) e `pagereveal` (depois da nova inicializar, antes do primeiro render), sendo que o listener de `pagereveal` precisa estar num script classico bloqueante no `<head>`, nem module, nem async, nem defer. Suporte: Chrome 126+, Edge 126+, Safari 18.2+; Firefox ainda nao. Degradacao perfeita: sem suporte, a navegacao acontece normalmente, sem erro e sem efeito. Vale so para navegacao same-origin do tipo traverse/push/replace.

**Aplicável:** Encaixe exato na arquitetura descrita (HTML estatico multipagina servido por nginx em container). E o item que entrega sensacao de aplicativo sem framework, sem bundler e sem uma linha de JS obrigatoria.

### web.dev: Create OS-style backgrounds with backdrop-filter

<https://web.dev/articles/backdrop-filter>

**Estética:** Barra de topo que nao e opaca nem transparente: o conteudo passa por tras dela desfocado e com saturacao aumentada, como as barras do macOS e do iOS. Receita concreta que funciona em tema escuro: `background: color-mix(in oklch, var(--surface) 65%, transparent); backdrop-filter: blur(12px) saturate(180%);` mais uma borda inferior de 1px em branco a 8% de opacidade. O saturate e o segredo: sem ele o vidro fica cinza e sujo; com ele as cores por tras ficam vivas atraves do desfoque.

**Técnica:** Sintaxe: `backdrop-filter: brightness(150%) saturate(150%) blur(1rem);`. Requisito absoluto: o elemento de cima precisa ser parcialmente transparente, senao nao ha nada para filtrar. Armadilhas reais: (1) qualquer valor diferente de `none` cria um novo stacking context, e se um ancestral tiver `opacity`, `filter` ou `mix-blend-mode` ele vira o backdrop root e o desfoque so alcanca o que esta entre os dois, nao a pagina; (2) Safari antigo exige `-webkit-backdrop-filter`, declare os dois; (3) `blur()` e o filtro mais caro porque amostra um kernel grande, entao mantenha o raio abaixo de 20px, nao empilhe mais de tres ou quatro elementos com backdrop-filter na mesma viewport e nunca anime o raio. Fallback oficial do artigo:
```css
@supports (backdrop-filter: none) { .background { backdrop-filter: blur(10px); } }
@supports not (backdrop-filter: none) { .background { background-image: blurred-hero.png; } }
```
Para a Intelecto o fallback melhor que imagem e simplesmente uma cor solida opaca.

**Aplicável:** Header sticky e, no maximo, o cartao de destaque do formulario de contato. Exatamente dois usos. A restricao de 'maquina velha de camara do interior' torna proibido usar vidro em area grande ou em varios cards ao mesmo tempo.

### web.dev: Speedy CSS Tip, Animated Gradient Text

<https://web.dev/articles/speedy-css-tip-animated-gradient-text>

**Estética:** A manchete do hero em tamanho `clamp(3rem, 25vmin, 8rem)`, o que significa que num notebook de camara ela ocupa quase a largura toda e no celular continua legivel sem quebrar. Por dentro do desenho das letras corre uma varredura de luz de 8 segundos, linear e infinita, indo de uma cor a outra e voltando. Nao pisca, nao chama atencao: e um brilho lento que voce so nota se ficar olhando, tipo reflexo em metal escovado.

**Técnica:** ```css
.boujee-text {
  --bg-size: 400%;
  --color-one: hsl(15 90% 55%);
  --color-two: hsl(40 95% 55%);
  font-size: clamp(3rem, 25vmin, 8rem);
  background: linear-gradient(90deg, var(--color-one), var(--color-two), var(--color-one))
    0 0 / var(--bg-size) 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
@media (prefers-reduced-motion: no-preference) {
  .boujee-text { animation: move-bg 8s linear infinite; }
  @keyframes move-bg { to { background-position: var(--bg-size) 0; } }
}
```
O prefixo `-webkit-background-clip` continua necessario. Cuidados que o artigo nao cobre mas sao obrigatorios aqui: declare `color` solido antes de `color: transparent` (fallback se background-clip falhar, senao o texto some), aplique so em texto de display e nunca em paragrafo, e verifique contraste do ponto mais claro do gradiente contra o fundo (minimo 4.5:1). Custo: anima `background-position`, o que repinta, entao use em um unico elemento por pagina.

**Aplicável:** Uma manchete e so uma, no hero. Combinada com uma grotesk moderna do Google Fonts (Inter Tight, Space Grotesk ou Geist), com `letter-spacing: -0.03em` e `text-wrap: balance`, e o que substitui a tipografia neutra rejeitada pelo dono sem cair em agencia de marketing.

### The Pudding: Easier scrollytelling with position sticky

<https://pudding.cool/process/scrollytelling-sticky/>

**Estética:** A secao 'como funciona o portal Mirante' vira isto: coluna da direita fica travada mostrando uma tela do produto em tamanho grande; coluna da esquerda rola com tres ou quatro paragrafos curtos, e a cada paragrafo a tela da direita troca de estado (aba de despesas, depois licitacoes, depois o e-SIC). O visual e o do New York Times e da Bloomberg, nao o de um site de orgao publico. Quando o ultimo passo termina, a coluna travada se solta e a pagina volta a rolar normal.

**Técnica:** A licao central do artigo e de arquitetura: o grafico travado e 100% CSS (`position: sticky` no filho, altura definida pelo pai), e o JS cuida so dos gatilhos de passo. O motivo explicito: listeners de scroll em JS 'inibem performance e as vezes sao bem travados' e podem sair de sincronia, fazendo o elemento saltar em vez de travar suave. Restricoes reais: o sticky so gruda dentro dos limites do pai, entao a altura do pai define a duracao do trecho travado; e qualquer ancestral com `overflow: hidden` mata o sticky silenciosamente (bug classico). Degradacao: sem suporte o elemento fica estatico na ordem do documento, sem quebra. Em 2026 os gatilhos de passo saem de graca com `animation-timeline: view()` ou IntersectionObserver, sem biblioteca.

**Aplicável:** Melhor formato para explicar dois produtos complexos (Mirante e Conformis) sem transformar a pagina em folheto de texto. E o antidoto direto contra a estetica de documento: aqui o produto aparece, se move e se explica sozinho.

### CSS-Tricks: Scroll-Driven Sticky Heading

<https://css-tricks.com/scroll-driven-sticky-heading/>

**Estética:** Um rotulo fino travado no alto da tela que troca de texto conforme a secao passa, com um degrade que o funde ao fundo (`linear-gradient(0deg, transparent, black 1em)`), sem caixa nem borda. Vai mostrando 'Camaras e Prefeituras', depois 'Empresas', depois 'Infraestrutura' enquanto o visitante desce. A troca e seca, sem crossfade, porque usa `step-end`. Da a sensacao de indice vivo em vez de menu.

**Técnica:** ```css
.scrollDrivenHeading { position: sticky; top: 0; padding: .5em .25em; white-space: nowrap;
  background-image: linear-gradient(0deg, transparent, black 1em); }
.scrollDrivenHeading::after {
  content: '';
  animation-name: headingContent;
  animation-timing-function: step-end;
  animation-timeline: scroll();
}
@keyframes headingContent {
  0%   { content: 'Primary Colors' }
  30%  { content: 'Red Power' }
  60%  { content: 'Blue Calm' }
  90%, 100% { content: 'Yellow Joy' }
}
```
Detalhe de acessibilidade que o artigo resolve bem: o titulo animado leva `aria-hidden="true"` e existe um titulo estatico com classe `.srOnly`, exibido apenas quando `@supports (animation-timeline: scroll())` confirma o suporte. Tudo dentro de `@media (prefers-reduced-motion: no-preference)`. Curiosidade util: animar `content` em keyframes permite ate revelacao letra a letra, incrementando 1% por caractere.

**Aplicável:** Rotulo de secao para a pagina longa de solucoes, e prova de que da para ter movimento sofisticado sem sacrificar leitor de tela. Como a carteira inclui orgao publico, acessibilidade nao e detalhe, e requisito de contrato.

### Smashing Magazine: State, Logic, And Native Power, CSS Wrapped 2025

<https://www.smashingmagazine.com/2025/12/state-logic-native-power-css-wrapped-2025/>

**Estética:** Tres coisas visuais aproveitaveis. (1) Stagger de verdade: a grade de logos de clientes revela em cascata, cada item 100ms depois do anterior, sem escrever indice na mao no HTML. (2) Carrossel de depoimentos com bolinhas de navegacao de 24px geradas pelo proprio navegador, e setas nas laterais, sem uma linha de JS. (3) `corner-shape` permite quinas chanfradas em vez do border-radius padrao, que e uma forma barata de fugir do cartao arredondado generico de SaaS.

**Técnica:** Stagger nativo:
```css
.card-container > * {
  animation: reveal 0.6s ease-out forwards;
  animation-delay: calc(sibling-index() * 0.1s);
}
```
Carrossel sem JS:
```css
.carousel {
  overflow-x: auto;
  scroll-marker-group: after;
  &::scroll-button(inline-end), &::scroll-button(inline-start) { content: " "; position: absolute; }
  div::scroll-marker { content: " "; width: 24px; border-radius: 50%; }
}
```
O artigo cobre ainda `view-transition-group: nearest` para grupos aninhados de view transition, `appearance: base-select` para estilizar select nativo, `@function`, `shape()`, `attr()` tipado e text-box-trim. Realidade de suporte: sao features de 2025 em Chromium, varias ainda experimentais; entao a regra e usar cada uma como camada extra sobre um layout que ja funciona sem ela. `sibling-index()` degrada para delay 0 (todos revelam juntos, aceitavel); `::scroll-marker` degrada para um carrossel que ainda rola com o dedo e com a barra, que e o comportamento minimo aceitavel.

**Aplicável:** Resolve dois componentes obrigatorios do briefing sem JS: a area de prova social com cascata de logos e o carrossel de depoimentos de clientes. Menos codigo para manter num projeto que faz deploy por git push.

### Chrome for Developers (Adam Argyle): CSS scroll-state() queries

<https://developer.chrome.com/blog/css-scroll-state-queries>

**Estética:** Tres acabamentos que sinalizam software bem feito. (1) O header sticky nao tem sombra enquanto a pagina esta no topo; no instante em que ele gruda, ganha sombra e a transicao de .3s faz ele parecer flutuar sobre o conteudo. (2) No carrossel de depoimentos, o cartao central fica em opacidade cheia e os vizinhos caem para 25%, entao o foco se move sozinho conforme o dedo arrasta. (3) Sombras de rolagem: um degrade aparece na borda de cima so quando ainda ha conteudo acima, e some ao chegar no fim, o que informa que ha mais para ver sem escrever 'role para baixo'.

**Técnica:** Passo 1, `container-type: scroll-state` no pai; passo 2, estilizar um descendente (nunca o proprio container). Header:
```css
.stuck-top { container-type: scroll-state; position: sticky; top: 0px;
  > nav { transition: box-shadow .3s ease;
    @container scroll-state(stuck: top) { box-shadow: var(--shadow-5); } } }
```
Carrossel:
```css
> article { container-type: scroll-state; scroll-snap-align: center;
  @supports (container-type: scroll-state) {
    > * { transition: opacity .5s ease;
      @container not scroll-state(snapped: x) { opacity: .25; } } } }
```
Estados disponiveis: `stuck: top|bottom`, `snapped: x|y|inline|block`, `scrollable: top|right|bottom|left`. Suporte em 2026: Chrome/Edge 133+, sem Firefox e sem Safari, portanto e obrigatorio o padrao do proprio artigo, envolver tudo em `@supports (container-type: scroll-state)` para que o estado degradado seja o bonito (todos os depoimentos em opacidade 1, header sem sombra). Todo movimento dentro de `@media (prefers-reduced-motion: no-preference)`. Custo zero de JS e nenhum listener de scroll.

**Aplicável:** Substitui o classico `window.addEventListener('scroll', ...)` que trava em maquina fraca. Header da Intelecto, carrossel de prova social e sombras de rolagem em tabelas de comparacao de planos.
