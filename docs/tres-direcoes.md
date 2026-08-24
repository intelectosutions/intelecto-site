# Direção de arte: veredito, separação e especificação final

## 1. As três não eram três

Duas delas eram a mesma direção com dois filtros de cor por cima. A #1 e a #3 tinham inclusive o mesmo nome ("Sala de Máquinas"), a mesma tese ("quem escreve o software opera o servidor"), a mesma assinatura (uma régua lateral numerada em unidades de rack com um bloco de luz dirigido por scroll), a mesma seção "A máquina" com ficha técnica em pares rótulo mono / valor grande, a mesma tabela de console no herói, o mesmo diagrama de camadas e o mesmo escuro tingido como estado primário. A diferença era âmbar contra ciano. Isso não é uma direção alternativa, é uma variante de token.

Só a PRELO era realmente outra coisa.

**O que eu fiz:** mantive a régua de rack, o SVG técnico e o ciano na #3, que é onde esse vocabulário nasce inteiro, e reconstruí a #1 em outro eixo. A #1 agora é a direção do **produto**, não da máquina: clara por padrão (osso quente), sem régua, sem LED, sem desenho de rack, sem ficha técnica como protagonista. O herói dela não é um console inventado, é o Mirante rodando. As três passam a dividir a tese em três metades diferentes do mesmo argumento:

| | BANCADA (era #1) | PRELO (#2) | SALA DE MÁQUINAS (era #3) |
|---|---|---|---|
| O que a página mostra | o software rodando | a instituição publicando | o ferro operando |
| Tema nativo | claro (osso quente) | claro (papel de miolo) | escuro (grafite azulado) |
| Acento | âmbar `#E8A317` | vermelhão `#C0341A` | ciano `#3FE0F2`, único |
| Display | Bricolage Grotesque | Fraunces | Archivo |
| Texto | Geist | Instrument Sans | Archivo (mesma família, outra largura) |
| Mono | Geist Mono | Martian Mono | JetBrains Mono |
| Serifa | nenhuma | é a família principal | Instrument Serif em 2 lugares |
| Raio de canto | 12px e 14px | 0px em tudo | 4px, chanfro em 2 peças |
| Elevação | painel elevado sobre o chão | nenhuma, folhas chapadas | painel com filete de luz |
| Estrutura | bento e scrollytelling | folhas de sangria e sumário | faixas endereçadas por U |
| Assinatura | o painel único que atravessa a página | o registro fora de esquadro | a régua de rack e o cross-connect |

**Alocação exclusiva de recurso técnico** (isto é regra, não sugestão: se um recurso aparecer em duas direções, elas voltam a parecer a mesma):

- scrollytelling com painel travado, bento grid, spotlight de ponteiro e borda cônica animada: **só BANCADA**
- folhas de cor em sangria total, pontilhado leader, marcas de registro, duotone, marquee: **só PRELO**
- régua lateral, SVG de elevação e de cabo, LEDs fora de sincronia, contadores que sobem, foto real do hardware: **só SALA DE MÁQUINAS**
- grão e máscara de dissolução: nas três, com ladrilho, opacidade e blend diferentes (é a base, não a assinatura)

Outros ajustes que fiz sem pedir licença: tirei o cobre da SALA DE MÁQUINAS (ela passa a ter uma cor só, mais três cores de estado em ponto de 7px), porque cobre encostava no vermelhão da PRELO e no âmbar da BANCADA. E tirei os contadores animados da PRELO: página impressa não anima número, o que anima lá é o pontilhado se compondo.

---

## 2. BANCADA

> Direção do produto. A prova de que a Intelecto é boa não é a descrição do serviço, é a tela do Mirante e do Conformis funcionando, reconstruída em DOM, com dado real, sob uma luz quente de oficina. Clara por padrão porque câmara projeta em telão e imprime, e porque o claro quente é o território que nenhum concorrente do nicho ocupa.

**Referência visual:** parece o Attio e o Resend feitos por gente que mora no interior de São Paulo: osso quente, painel elevado, âmbar de luminária, produto no lugar da ilustração.

### Paleta clara (nativa)

```
--bg-000   #F2EEE4   chão da página (o mais escuro do tema claro)
--bg-100   #F8F5ED   fundo de seção
--panel    #FDFBF6   painel, card, superfície de produto
--panel-hi #FFFEFA   painel em destaque e linha em hover
--line-100 #E7E1D3   divisor interno
--line-200 #D9D2C1   borda de painel
--line-300 #C3BAA4   borda de ênfase
--fg-ink   #1B1712   título e número            16.1:1 sobre --bg-100
--fg-body  #4A4238   corpo                       9.0:1
--fg-weak  #74695B   rótulo mono e legenda       4.9:1
--acc-fill #E8A317   preenchimento de botão (tinta --fg-ink em cima, 8.1:1)
--acc-text #9A5B04   link e texto colorido       5.0:1
--acc-hover-fill #D18E08
--acc-hover-text #7E4903
--acc-wash #FAEBCF   fundo de badge
--ok #0F7A54 · --warn #9A5B04 · --crit #B02A25   (só ponto de 7px e rótulo mono)
grão: opacity .045, mix-blend-mode multiply, ladrilho 200px
```

Regra que define o tema: o painel é **mais claro** que o chão. Isso inverte a lógica do papel e é a razão de a página não ler como documento mesmo tendo muita área clara.

### Paleta escura

```
--bg-000 #100E0B · --bg-100 #16130F · --panel #1D1915 · --panel-hi #26211B
--line-100 rgba(255,250,240,.07) · --line-200 rgba(255,250,240,.12) · --line-300 rgba(255,250,240,.20)
--fg-ink #EFE9DF  15.3:1   --fg-body #BDB3A5   --fg-weak #948A7D  5.4:1
--acc-fill #E8A317 (idêntico ao claro, com tinta #1B1712: o botão primário é o mesmo nos dois temas e isso vira marca)
--acc-text #F5B942  10.4:1
--acc-wash rgba(232,163,23,.10) · --glow rgba(232,163,23,.14) · --veil rgba(255,255,255,.03)
grão: opacity .035, mix-blend-mode overlay, ladrilho 180px
```

### Tipografia

- **Bricolage Grotesque** (variável, opsz 12..96, wdth 75..100, wght 200..800), só acima de 24px. H1: `opsz 96, wdth 86, wght 720`, `clamp(2.6rem, 6.2vw, 5rem)`, line-height .94, tracking -.035em, text-wrap balance. H2: `opsz 40, wdth 90, wght 640`.
- **Geist** (wght 100..900). Corpo 16.5px / 1.62 / 400, medida 66ch. Lead 19px / 1.5 / 380. Botão 15px / 500.
- **Geist Mono**. Rótulo 11px caixa alta tracking .14em; dado e chip 12.5px com `tabular-nums`.
- Escala em três degraus e nada entre eles. Fallbacks: `'Arial Narrow', system-ui`, `system-ui, 'Segoe UI'`, `ui-monospace, Consolas`. `font-display: swap`, preconnect nos dois hosts, `size-adjust` calibrado.

### Estrutura da home

1. **Header** de 60px, fundo `--bg-100` sólido (sem vidro: é o claro, não precisa), fio inferior ao grudar.
2. **Herói** com o painel único à direita.
3. **Faixa "em produção agora"**: seis chips em mono, um por produto, cada um com ponto de estado e a quantidade de organizações que usa aquele produto hoje.
4. **Mirante** em scrollytelling: coluna de texto rolando à esquerda, o painel travado à direita trocando de aba (Despesas, Licitações, e-SIC, PNTP).
5. **E-mail no .leg.br**: o mesmo painel vira caixa de e-mail; o prazo de maio de 2027 aparece **dentro da interface**, como um aviso de sistema, não como banner de marketing.
6. **Conformis** em scrollytelling espelhado: esteira de adequação com estados verde e vermelho vindos do próprio produto.
7. **Bento** dos demais (votação eletrônica de plenário, e-SIC, ouvidoria, ITSM, BI, hospedagem gerenciada), 4 colunas, linhas de 180px, `auto-flow: dense`, células 1x1.
8. **Quem usa** (prova social).
9. **Por baixo de tudo isso**: seis pares de spec da infraestrutura própria, em uma faixa curta de duas linhas. A máquina aparece como rodapé do argumento, e é aqui que esta direção deliberadamente entrega menos que a SALA DE MÁQUINAS.
10. **Atualizações**: seis linhas datadas de changelog real dos produtos.
11. **Contato**: dois caminhos, "Falar com quem desenvolve" e "Abrir um portal de exemplo".
12. **Rodapé** sobre `--bg-000`, com versão CalVer, hash curto e ponto de estado.

### Herói

Altura 92svh, grade de 12 colunas, contêiner 1240px.

**Esquerda (colunas 1 a 6).** Kicker em Geist Mono 11px caixa alta `--fg-weak`, precedido de um ponto `--ok` de 7px. H1 em Bricolage com quebra manual em três linhas, a terceira em `--fg-body` para criar hierarquia dentro do próprio título sem negrito nem cor. Lead em Geist 19px, 46ch. Dois botões: primário `--acc-fill` com tinta `--fg-ink`, altura 46px, raio 10px; secundário com `inset 0 0 0 1px var(--line-300)`. Abaixo, uma linha de mono 12px com três dados verdadeiros separados por ponto médio.

**Direita (colunas 7 a 12).** O **painel único**: 620x440, raio 14px, `--panel`, contorno por `box-shadow: inset 0 0 0 1px var(--line-200)`, filete de luz de 1px no topo em gradiente âmbar a 40%, grão interno em `::before` com `inset:1px`, e um radial âmbar de 10% atrás dele sangrando para fora. Dentro: barra de título com o nome do portal em mono e um ponto `--ok`; menu de transparência reconstruído em DOM; tabela de despesas com seis linhas em `tabular-nums`; um selo PNTP. Nenhum screenshot, nenhum laptop em perspectiva, nenhuma sombra difusa. O painel encosta 24px acima da linha de base do texto, para quebrar o alinhamento perfeito.

### Copy do herói

> **Kicker:** `EM PRODUÇÃO AGORA · 22 ORGANIZAÇÕES · 31 DOMÍNIOS`
>
> **Headline:**
> Quem escreve o sistema
> é quem atende
> o telefone.
>
> **Subtítulo:** Portal de transparência, e-mail no domínio .leg.br e conformidade com a LGPD em plataformas que a Intelecto desenvolve e opera na própria máquina, em São Paulo. Sem revenda, sem intermediário, sem chamado que morre na fila.

### Prova social

Quatro camadas, nenhuma parede de brasão.

1. **Chips de produto** logo abaixo do herói: cada produto com o número de organizações que o usa hoje. É prova por adoção, e ela aparece antes de qualquer texto de venda.
2. **A lista por produto**, não por segmento: para cada cliente, o nome, a cidade, o ano de início e **qual produto ele usa**. Isso responde à pergunta que o prospecto realmente faz ("alguém como eu já usa isto?") e é impossível de imitar por quem não tem carteira.
3. **Duas citações nominais** com nome, cargo e órgão em mono, sem foto redonda e sem aspas gigantes, cada uma acompanhada de uma métrica única do cliente ("portal no ar desde 2019", "migração de 30 caixas sem downtime").
4. **Grade estática** de brasões, monocromática, `opacity .38` subindo para .92 no hover, apenas para quem tem versão vetorial. Sem marquee (marquee é da PRELO).

### Movimento

- **Painel travado** por `position: sticky` puro, altura do trecho definida pelo pai; os gatilhos de troca de aba vêm de IntersectionObserver, nunca de listener de scroll.
- **Troca de estado do painel** com transição de opacidade de 220ms e `translateY(6px)`; o cromo (barra de título, ponto de estado) nunca se move, só o miolo.
- **Revelação** em `animation-timeline: view()`, `entry 0% cover 35%`, deslocamento de 18px, em três momentos por página, sempre dentro de `@supports not` com estado final visível.
- **Cascata** do bento com `transition-delay: calc(var(--i) * 45ms)`, classe entrando no contêiner.
- **Spotlight de bancada**: um listener de `pointermove` no bento, coalescido por rAF, escreve `--mx` e `--my`; cada card pinta um radial de 280px em `--acc-wash`. Desligado em `(hover: none)`.
- **Borda cônica animada** em exatamente um elemento da página inteira: o painel único, e só enquanto ele está travado. `@property --ang`, recorte por `mask-composite: exclude` para preservar o raio.
- **Contrato**: `--ease: cubic-bezier(.2,.65,.3,1)`, `--dur-mov: 140ms`, `--dur-cor: 300ms`. Cor sempre mais lenta que movimento. Tudo sob `prefers-reduced-motion: no-preference`.

### Assinatura

**O PAINEL ÚNICO.** A página inteira tem **um** painel de produto, e ele nunca é substituído: ele atravessa o site travado à direita, trocando de conteúdo conforme o texto rola, do Mirante para a caixa de e-mail e depois para o Conformis, mantendo a mesma moldura, o mesmo filete de luz e a mesma barra de estado. O efeito é o de uma bancada onde a mesma peça é aberta, examinada e trocada de função na frente do visitante. Diz a tese comercial (é tudo o mesmo fornecedor, na mesma máquina) sem escrever a frase, custa `position: sticky` mais um IntersectionObserver, e nenhum concorrente do nicho consegue fazer porque nenhum deles tem os três produtos.

### Ganha e perde

Ganha o comprador que quer **ver antes de falar** (secretário de TI, diretor da farmacêutica, presidente novo que já usa software bom no celular); perde o presidente de câmara mais tradicional, que quer ver instituição, papel e formalidade antes de ver tela.

---

## 3. PRELO

> Prelo é a prensa: a máquina que publica. A página não é folheto de fornecedor, é uma edição impressa por quem tem a máquina: capa, sumário com pontilhado, folhas de cor que se alternam como cadernos, coluna de margem com nota técnica e um expediente no lugar da parede de logotipos. A autoridade vem de compostura, não de brilho.

**Referência visual:** a Bloomberg Businessweek da fase Richard Turley encontrando a página de especificações da Oxide, impressa em duas tintas sobre papel de miolo quente.

### Paleta clara (folha PAPEL, nativa)

```
--paper   #F6F1E8   fundo
--paper-2 #EDE6D9   superfície rebaixada (ticker, specs, rodapé)
--paper-3 #FFFCF6   única superfície elevada (cartão do formulário)
--ink     #17140F   texto e fio grosso            16.2:1
--ink-2   #453F35   subtítulo e olho               9.2:1
--muted   #6F675A   legenda, rótulo, metadado      5.0:1
--rule    #DCD3C2   fio de 1px
--rule-strong #17140F  fio de 3px (é a própria tinta, nunca cinza)
--dot     #C3B9A5   pontilhado do sumário
--accent  #C0341A   VERMELHÃO, a segunda tinta     5.0:1
--accent-deep #A02A12 · --accent-ink #FFF8F2 · --accent-wash #F1DED4
--ok #2E6B3E (só ponto de estado)
folha TINTA: fundo #17140F com texto #F3EDE2
folha VERMELHÃO: fundo #C0341A com texto #FFF3EC (uma só na página)
grão: opacity .052, multiply, ladrilho 220px
```

### Paleta escura (folha PROVA)

```
--paper #100E0A · --paper-2 #17140F · --paper-3 #211D16
--ink #F3EDE2  16.5:1 · --ink-2 #C4BBAB · --muted #8B8272  5.1:1
--rule #2E2820 · --rule-strong #F3EDE2 · --dot #3A332A
--accent #F2603C  6.5:1 · --accent-deep #FF7A57 · --accent-ink #17110C · --accent-wash #2A1710
folha invertida: fundo #EDE6D9 com texto #17140F (o ritmo de cadernos se preserva)
folha VERMELHÃO: continua #C0341A. É o único elemento idêntico nos dois temas, e por isso vira assinatura.
grão: opacity .045, soft-light, ladrilho 260px
```

Arquitetura: `:root` em hex, `@media (prefers-color-scheme: dark)` com `:root:not([data-theme="light"])` redefinindo só os 18 nomes, e `:root[data-theme="dark"]` repetindo para o botão vencer nos dois sentidos. Zero `@media` dentro de componente.

### Tipografia

- **Fraunces** (opsz 9..144, wght 100..900, SOFT, WONK). H1 `opsz 144, wght 340, SOFT 0, WONK 1`. H2 `opsz 96, wght 420, WONK 0`. Números do expediente `wght 300` com `tabular-nums`. Citação em itálico `opsz 72, wght 320, SOFT 60, WONK 1`. **WONK 0 explícito em tudo abaixo de 18pt.** Fallback Georgia com `size-adjust ~96%`.
- **Instrument Sans** (wght 400..700, wdth 75..100). Corpo 17px / 1.62 / 400 / wdth 100, 66ch. Navegação e botão `wght 500, wdth 88`.
- **Martian Mono** (wdth 75..112.5, wght 100..800), trocada do Geist Mono justamente para não encostar na BANCADA. Rótulo `wdth 75, wght 500`, 11px caixa alta, tracking .12em. Ficha técnica `wdth 100, wght 400`, 13px.
- Escala por salto: `--fs-mega: clamp(3.5rem, 11.2vw, 10.5rem)`, `--fs-alta: clamp(2.25rem, 5.2vw, 4.5rem)`, `--fs-olho: clamp(1.125rem, 1.5vw, 1.375rem)`, corpo 1.0625rem, mono .8125rem, rótulo .6875rem. Nada entre alta e olho.

### Superfície

Zero sombra, zero raio, zero `backdrop-filter` na página inteira. Profundidade por **folha**: sequência de faixas de sangria total que trocam de fundo em corte seco (papel, papel, tinta, papel, papel, vermelhão, papel). Fio de 1px existe, mas obedece a três leis que o separam do documento rejeitado: é sempre horizontal, sangra de borda a borda e tem peso semântico (3px abre seção, 1px separa item, pontilhado só como leader). Retângulo fechado não existe. Cruz de registro de 14px nos quatro cantos de cada folha. Imagem sempre em duotone (grayscale mais camada `--accent` em multiply a 18%) dissolvida por máscara de dez paradas.

### Estrutura da home

`§00` cabeçalho corrente que troca de tinta ao cruzar cada folha · `§01` capa · `§02` ticker dos 31 domínios · `§03` NESTA EDIÇÃO (sumário com pontilhado) · `§04` A MÁQUINA (folha tinta, ficha técnica) · `§05` PARA O PODER PÚBLICO · `§06` PARA A EMPRESA PRIVADA (mesma grade espelhada) · `§07` EXPEDIENTE · `§08` citação em folha vermelhã · `§09` últimas atualizações · `§10` contato · `§11` colofão.

### Herói

Linha 1, cabeçalho de edição: fio de 3px sangrado e, abaixo, uma fileira em mono caixa alta com quatro campos alinhados pela base. Linha 2, a capa: H1 nas colunas 1 a 9 em Fraunces `opsz 144 wght 340`, line-height .86, `margin-left: -.055em` para pendurar a primeira haste fora da margem, três linhas com quebra dura; olho nas colunas 1 a 5; dois botões de canto reto; coluna de margem em 10 a 12 com fio vertical e cinco pares em mono com pontilhado leader. Linha 3, ticker de 44px.

### Copy do herói

> **Kicker:** `INTELECTO SOLUTIONS · CAMPINAS/SP · TECNOLOGIA PARA QUEM PUBLICA O QUE É PÚBLICO`
>
> **Headline:**
> Para quem
> não pode
> *sair do ar.*  (a terceira linha em itálico e em vermelhão, fora de registro)
>
> **Subtítulo:** Há mais de dez anos a Intelecto mantém portal de transparência, e-mail institucional e sistema crítico no ar para 22 organizações públicas e privadas, em máquina própria no Brasil, operada por gente com nome, telefone e hora marcada.

### Prova social

O **EXPEDIENTE**, em tipografia pura. À esquerda, quatro números estáticos em Fraunces `wght 300` com rótulo em mono embaixo (22 organizações, 31 domínios, 12 municípios, mais de dez anos). À direita, a lista completa em seis grupos, cada linha com nome à esquerda, pontilhado leader no vão e um metadado curto em mono à direita. O cliente âncora recebe fio de 2px em vez de 1px e o metadado em vermelhão. Complemento: uma única citação real ocupando a folha vermelhã inteira, com atribuição nominal. Logotipo só no rodapé, monocromático, em marquee de 40px mascarado em 48px fixos; quem não tem vetor monocromático não entra.

Regra de honestidade que a estética impõe e que é parte do valor: nada de número redondo, nada de "diversos órgãos", nada de depoimento sem autorização. Quem não autorizou vira "Câmara Municipal, interior de SP" com o metadado verdadeiro.

### Movimento

Seis técnicas, cinco delas em CSS puro. Registro na carga (760ms, `cubic-bezier(.16,1,.3,1)`, parando num desalinho residual de .055em) · registro derivando no scroll por `view()` · registro cutucado no hover dos H2 · pontilhado que se compõe da esquerda para a direita por `animation-timeline: view()` · revelação sóbria de 18px em três momentos · ticker de 110s com máscara em pixel fixo · troca de tinta do cabeçalho por IntersectionObserver (descartei `mix-blend-mode: difference`, que devolve ciano sobre a folha vermelhã) · sublinhado de revisão nos links por `background-size` · `::selection` como marca-texto. Nada mais se move.

### Assinatura

**O REGISTRO.** Todo título grande é impresso em duas tintas: uma camada vermelhã fora de posição e a tinta preta por cima, com `mix-blend-mode` multiply no claro e screen no escuro. Na carga da capa as duas convergem e param num desalinho residual, porque prensa nenhuma acerta o registro perfeito. Ao rolar, o vermelhão volta a derivar. As cruzes de registro nos cantos completam o motivo. Custa dois transforms e um blend, a camada duplicada é `aria-hidden`, degrada para um título comum, e diz literalmente o que a empresa faz: publicar corretamente aquilo que é público.

### Ganha e perde

Ganha o presidente de câmara, o vereador, o procurador e o comprador público, que leem instituição séria e permanente antes de lerem tecnologia; perde o comprador técnico, que sai da página sem ter visto uma única tela do produto nem um número de operação.

---

## 4. SALA DE MÁQUINAS

> A Intelecto não revende nuvem, opera o ferro. Num nicho onde todo concorrente revende hospedagem e mostra ilustração de nuvem, o argumento incopiável é hardware próprio com endereço. Então a página não fala da máquina: a página é a máquina, organizada sobre uma régua de unidades de rack, com o conteúdo aparecendo como instrumentação.

**Referência visual:** a página de especificações da Oxide encontrando a planta de elevação de um rack, com a voz curta da Fly.io, em ciano de fibra sobre grafite azulado.

### Paleta escura (nativa)

```
--bg-000 #080C0E · --bg-100 #0D1316 · --bg-200 #12191D · --bg-300 #182126
--line-000 rgba(198,232,238,.065)  grade de engenharia de 32px
--line-100 #182328 · --line-200 #222E35 · --line-300 #314047
--fg-weak #8B9AA1  6.4:1 · --fg-body #B9C6CB  10.6:1 · --fg-ink #ECF3F5  16.6:1
--acc      #3FE0F2   ÚNICO acento: traço, LED, link, número de destaque   11.7:1
--acc-dim  #1B7F8C   traço de segundo plano, cabo inativo
--acc-fill #2ACBDE com tinta --acc-ink #04141A
--acc-glow rgba(63,224,242,.10)
estados, só em ponto de 7px, barra de 3px e rótulo mono:
--st-ok #47E39B · --st-warn #FFC44D · --st-err #FF7A7A
grão: opacity .035, overlay, ladrilho 240px
```

**Mudança que fiz:** o cobre saiu. A direção tem uma cor de marca só. O bloco do prazo de 2027 usa `--st-warn` em uma barra de 3px e no rótulo, com o contador em `--fg-ink`, nunca um campo de cor inteiro.

### Paleta clara

```
--bg-000 #E9EEEF · --bg-100 #F1F5F5 · --bg-200 #F8FBFB · --bg-300 #FCFEFE
--line-000 rgba(11,40,48,.055) · --line-100 #E2E9EA · --line-200 #D3DDDF · --line-300 #BAC8CB
--fg-weak #5C6D73  4.9:1 · --fg-body #3E4E54  7.9:1 · --fg-ink #0C1417  17.2:1
--acc-text #0B6E7C  5.4:1 (o ciano vivo NÃO carrega texto no claro)
--acc-fill #0E9AAE com tinta #04141A
grão: opacity .022, multiply
```

O claro aqui não é conversão automática: **muda de registro**. Deixa de ser rack aceso e vira planta técnica impressa, com a grade mais presente, o traço mais escuro e o LED reduzido a ponto sólido sem halo. Isso precisa ser desenhado de propósito.

### Tipografia

- **Archivo** (wght 100..900, wdth 62..125), display e corpo na mesma família mudando de largura. H1 `wdth 88, wght 700`, `clamp(2.9rem, 6.4vw, 5.6rem)`, line-height .94, tracking -.032em. H2 `wdth 92, wght 650`. Corpo `wdth 100, wght 400`, 17px / 1.6, 66ch. Botão `wdth 94, wght 550`.
- **JetBrains Mono** em dose curta e função fixa: rótulo 11px caixa alta tracking .14em; chave de spec 13px; número de KPI `clamp(2.2rem, 4.5vw, 3.4rem)` com `tabular-nums`; domínio e caminho 14px.
- **Instrument Serif** (estática, romano e itálico) em exatamente dois lugares: uma palavra do H1 e as citações de cliente. Nunca abaixo de 20px. É o contraponto humano que impede a página de virar terminal.

### Superfície

Grade de engenharia de 32px (mesmo passo de 1U) por seção, nunca no body, recortada por máscara. Painel definido por `inset 0 0 0 1px var(--line-200)` mais um filete de luz de 1px no topo em gradiente ciano a 50%. Raio 4px em tudo, chanfro de 12px por `clip-path` em duas peças apenas. Profundidade por faixa de cor difusa que nasce e morre na cor do fundo, nunca por `blur(120px)`. `backdrop-filter` em um só lugar, a barra de console, atrás de `@supports`, desligado abaixo de 900px.

### Estrutura da home

`U00` barra de console (host, ano de início, domínios, build, ponto de estado) · `U03-U14` herói · `U15-U18` faixa de operação (quatro números que sobem uma vez) · `U19-U30` A MÁQUINA (ficha técnica mais elevação do rack em SVG) · `U31-U38` AS CAMADAS (o menu de produtos é a arquitetura, empilhada de baixo para cima) · a régua zera e recomeça no segundo rack · `U01-U16` grade de produtos · `U17-U26` cross-connect (prova social) · `U27-U32` prazo de maio de 2027 · `U33-U38` suporte com nome · rodapé como placa de identificação.

### Herói

Esquerda: kicker em mono `./infra-propria` precedido de um traço de 24px; H1 em Archivo com uma palavra em Instrument Serif itálico ciano; subtítulo 46ch; dois botões (46px, raio 4px, primário `--acc-fill`); linha de credenciais em mono com CNPJ e cidade.

Direita: painel de operação com cabeçalho em mono e ponto `--st-ok` pulsando; **elevação frontal do rack em SVG inline**, traço de 1.25px, quatro sleds com orelhas de fixação e ventilação hachurada, a sled do host destacada em ciano; coluna de seis LEDs por sled animando **só opacity** com durações primas entre si (1.3s a 3.7s) para nunca sincronizarem; um cabo tracejado saindo do host em dois cotovelos de 90 graus, com um ponto de 5px percorrendo por `offset-path`; quatro pares chave-valor; e um log de três linhas com eventos reais e datados. Se não houver fonte real para o log, o log some. A honestidade do dado é parte do argumento.

### Copy do herói

> **Kicker:** `./infra-propria`
>
> **Headline:**
> A máquina é *nossa.*
> O domínio é seu.
>
> **Subtítulo:** Bare metal próprio em São Paulo, Proxmox e Coolify, 31 domínios em produção. O portal, o e-mail e os sistemas da sua organização rodam em ferro que a gente administra, não em revenda de nuvem estrangeira nem em conta compartilhada que ninguém sabe quem controla.

### Prova social

O **CROSS-CONNECT**, um painel de patch entre duas colunas. À esquerda o inventário da carteira em pares rótulo mono / número grande (08, 02, 01, 03, 01, 07, 31). À direita o muro tipográfico de municípios em três colunas, com a UF em mono sobrescrita, sob um contador grande. No meio, 31 portas quadradas de 12px numeradas: passar o mouse (ou tocar) em qualquer município ou em qualquer linha do inventário **acende a porta correspondente** e desenha um cabo tracejado de 1px até o nome, animando `stroke-dashoffset` em 260ms. Quinze linhas de JS delegado, nenhuma biblioteca. Abaixo, duas citações em Instrument Serif itálico com atribuição em mono e uma métrica única por cliente. É a resposta literal à pergunta que todo prospecto faz: quem mais está nessa máquina.

### Movimento

Régua de rack com carro de posição por `animation-timeline: scroll(root block)`, com fallback por IntersectionObserver · rótulo de seção trocando por `content` com `step-end` (versão `.srOnly` para leitor de tela) · LEDs animando só opacity com atrasos individuais · pacote percorrendo o cabo por `offset-path` · cabos se desenhando por `stroke-dashoffset` amarrado a `view()` · contadores por IntersectionObserver mais rAF de 900ms com `unobserve` · header que cola por `@container scroll-state(stuck: top)` · revelação de 18px. Contrato: `--ease: cubic-bezier(.33,1,.68,1)`, `--dur: 180ms`, cor em 420ms. Sem spotlight de ponteiro e sem borda cônica: esses dois foram para a BANCADA.

### Assinatura

**A RÉGUA DE RACK.** Gutter sticky de 56px na esquerda, marcada em unidades: ticks de 1px a cada 32px, tick reforçado a cada 5U, numeração U01 a U42 em mono de 9px e um carro ciano que desce com a leitura. Cada seção tem endereço, e o título de cada seção é esse endereço ("U19 / A MÁQUINA"). Passando de 42U a régua zera e recomeça: é o segundo rack, e essa virada marca a mudança de assunto sem trocar de página. É índice, barra de progresso, retícula de alinhamento de todo o layout (o passo de 32px é o mesmo da grade) e tradução literal do único argumento incopiável da empresa. Abaixo de 1180px colapsa para um trilho de 3px, com `aria-hidden` e âncoras equivalentes no header.

### Ganha e perde

Ganha quem decide por infraestrutura e já se queimou com revenda (diretor de TI da farmacêutica, secretário de administração, contador de câmara que apanhou de e-mail fora do ar); perde o público não técnico e qualquer apresentação em plenário com telão em sala clara, onde o registro escuro vira ruído.

---

## 5. Minha recomendação, sem meio termo

**Assino a BANCADA para o site.** É a que converte, é a única que responde à objeção real do comprador ("como é a tela que eu vou usar?"), é clara por padrão (o que resolve telão, impressão e monitor velho sem depender de toggle), e é a que menos depende de ativos que ainda não existem: precisa do Mirante e do Conformis, que já estão em produção.

A **SALA DE MÁQUINAS** é a mais memorável e a mais difícil de copiar, e é a segunda escolha. Ela depende de duas coisas que hoje não existem prontas: uma foto de estúdio decente do bare metal e um `status.json` regenerado no deploy. Se o Luiz topar produzir as duas, ela vira a melhor das três. Se não, ela vira teatro, e teatro descoberto destrói exatamente a credibilidade que ela constrói.

A **PRELO** não é um site, é um sistema de identidade impressa que por acaso cabe numa página. Meu conselho é usá-la onde ela é imbatível: no PDF do alerta do fim do e-mail do Interlegis, nas propostas, nos ofícios e numa landing de campanha de página única para o prazo de 2027. Como home institucional ela é a mais arriscada, porque o visitante sai sem ter visto o produto.

**Três pendências que travam qualquer uma das três e precisam ser resolvidas antes do primeiro pixel:** o ano exato de fundação (a copy diz "mais de dez anos" justamente porque 2010, 2014 e 2015 aparecem em fontes diferentes; conferir no cartão CNPJ), a autorização por escrito para citar nominalmente cada cliente e para exibir domínio em tela, e a contagem verdadeira de municípios e estados atendidos (12 e 3 são estimativa a partir do mapa de zonas DNS, não dado auditado).