# Dossiê de referências verificadas

Workflow `referencias-site-intelecto`, run `wf_a6b17938-88a`, 21/08/2026.
72 referências, todas carregadas e conferidas antes de entrar na lista.

---

## Concorrente direto: portais para câmaras e prefeituras

### Instar Tecnologia (SWOP)

<https://www.instarswop.com.br/>

**O que funciona:** A página inteira é uma lista de garantias em grade de ícones, não uma promessa de marca. Três blocos empilhados: 6 "Nossos Diferenciais" (ATUALIZAÇÕES CONSTANTES 100% GRATUITAS, RENOVAÇÃO DE LAYOUT TODO ANO, CONSOLIDAÇÃO LEGISLATIVA, ASSESSORIA JURÍDICA, CERTIFICADO DIGITAL, e "EXIGÊNCIAS LEGAIS: ATENDEMOS A TODAS AS LEIS FEDERAIS E ESTADUAIS; E AO MP E TCE"), 6 "Vantagens Competitivas" e 9 garantias de entrega que incluem "HOSPEDAGEM DE E-MAILS Corporativos", "IMPLANTAÇÃO 100% gratuita", "BACKUP E SEGURANÇA dos dados" e "VALIDADO NO W3C/WCAG Acessibilidade legal". Fecha com faixa de 4 contadores em corpo enorme: "20 ANOS de experiência digital", "28 COLABORADORES", "17 ESTADOS Atendidos", "490 ÓRGÃOS em nosso portfólio", seguida de "ÍNDICE DE CLIENTES POR ESTADO". O portfólio é abas: PREFEITURAS / CÂMARAS / AUTARQUIAS / DIVERSOS. Tem barra de acessibilidade fixa no topo com atalhos Alt+1 a Alt+6, alternador de contraste e página /acessibilidade dedicada. Rodapé com 12 telefones regionais (SP, RJ, ES, MG, PR, SC, RS, DF, MT, MS, BA) que simulam capilaridade nacional. Paleta vermelho escuro e cinza sobre branco.

**O que aproveitar:** 1) A grade de garantias operacionais, porque é literalmente o que o diretor administrativo cola no processo de contratação: implantação, backup, suporte, migração, acessibilidade, atualização sem custo. A Intelecto consegue uma grade melhor, com itens que a Instar não tem (infraestrutura própria, DPO/LGPD, SPF/DKIM/DMARC por domínio, e-mail no domínio oficial .leg.br). 2) A barra de acessibilidade com atalhos Alt+1 a Alt+6, contraste e página /acessibilidade: é assinatura visual de quem trabalha para o setor público brasileiro e custa poucas dezenas de linhas de CSS e JS, cabendo na restrição de site estático. 3) As abas de portfólio por tipo de órgão, que encaixam na carteira real (8 câmaras, 2 prefeituras, CONSISP, autarquias de água e esgoto, CAPIVARIPREV, privado).

**Por que é relevante:** É o concorrente que já tomou o e-mail de Pontes Gestal e controla o DNS da câmara de Riolândia. Ponto fraco explorável: os números não batem entre os dois sites da própria empresa (instar.com.br, também carregado, diz "9 Estados Atendidos" e "35 colaboradores"; instarswop.com.br diz "17 ESTADOS" e "28 COLABORADORES"), o hero é carrossel com o texto embutido dentro da imagem e há erros de português no menu ("PORTIFÓLIO") e nos títulos ("VANTANGENS COMPETITIVAS").

## Concorrente direto: vende e-mail .leg.br e .gov.br para câmaras

### Nuvem Legislativa

<https://www.nuvemlegislativa.com.br/>

**O que funciona:** Uma one-page longa com uma seção por produto, na ordem da dor do servidor: Processo Legislativo, Votação Eletrônica, Portal e Aplicativo, Ouvidoria, E-mail Corporativo, TV Câmara. Cada seção abre com um parágrafo que cita a lei em texto corrido ("Atender a Lei de Acesso à Informação é uma obrigação! ... além de cumprir as exigências da Lei 12.527"; "Atenda as exigências da Lei 13.460/2017 e 12.527/2011") e só então desce para bullets curtos. O argumento do e-mail é palavra por palavra o da Intelecto: "A utilização de endereços de e-mails com extensão .gov.br ou .leg.br ... Identifica a Câmara sem deixar dúvidas de que se trata de uma instituição governamental e ainda comprova a veracidade das informações contidas nas mensagens." A prova social é uma frase sobre um mapa do Brasil: "Solução testada e aprovada por Câmaras Municipais de 11 estados do Brasil!". E a seção do processo legislativo fecha com seis links para portais de clientes reais, cada um apontando para uma tela específica ("Presença em plenário", "Relatórios das Sessões Plenárias", "Exemplo de ata gerada pelo sistema"). Há uma seção nomeada "Como contratar?".

**O que aproveitar:** 1) Prova por link ao vivo em vez de logo: seis links diretos para telas reais em produção. A Intelecto pode fazer o mesmo com o Mirante ("veja o portal da Câmara de Jaguariúna", "veja o e-SIC de Capivari", "veja a página de licitações de Orindiúva"), o que é muito mais forte que um carrossel de brasões e não custa nada de produção. 2) Uma seção por produto abrindo com a lei citada no primeiro parágrafo, não um selo genérico no rodapé. 3) O mapa do Brasil com uma única frase de cobertura, que é a forma barata e honesta de mostrar alcance enquanto o número de clientes ainda é pequeno.

**Por que é relevante:** É a prova de que o e-mail .leg.br já é vendido como produto de prateleira por concorrente, com o mesmo discurso de institucionalidade e veracidade. Ponto fraco explorável e que a Intelecto deve atacar de frente no site: eles não vendem direto ("Para adquirir a Nuvem Legislativa, as Câmaras Municipais devem contatar os revendedores autorizados"), não mostram um único cliente nomeado com brasão, não mencionam LGPD nem migração de caixas, e o endereço é um apartamento em Paraisópolis/MG.

## Concorrente direto: portais, transparência e webmail corporativo

### Portal Fácil

<https://portalfacil.com.br/>

**O que funciona:** Hero em duas colunas: à esquerda um kicker vermelho pequeno em caixa alta ("PORTAL INSTITUCIONAL"), headline preta pesadíssima em duas linhas ocupando quase metade da altura da dobra ("Tecnologia e inovação à serviço do setor público"), três linhas de subtítulo cinza e um único botão azul sólido ("Clique e saiba mais"); à direita, uma forma geométrica azul recortada com foto. O carrossel troca apenas o kicker e a headline mantendo o mesmo esqueleto (PORTAL INSTITUCIONAL, PORTAL DA TRANSPARÊNCIA, GESTÃO TRIBUTÁRIA). Logo abaixo vem a faixa de números ("+500 Entidades Atendidas", "17 anos de mercado") e mais adiante o catálogo em grade com 15 produtos nomeados: Portal Institucional, Portal da Transparência, Portal Legislativo, Nota Fiscal Eletrônica, Aplicativo Móvel, Compilação de Leis, Web TV, Gestão Tributária, Webmail Corporativo, DocFacil, Auditor Digital, Processo Seletivo, Ouvidoria, Guia de Serviços, Intranet. A prova de credibilidade mais forte da página não é logo nem número de clientes: é "Portais com avaliação nota 10 pelo MPF". Botão flutuante circular de acessibilidade no canto inferior esquerdo.

**O que aproveitar:** 1) A nota de terceiro como manchete de credibilidade. A Intelecto tem o equivalente e não usa: a nota PNTP dos portais Mirante já em produção, atribuída pelo Tribunal de Contas. Uma linha do tipo "Câmaras atendidas pela Intelecto com nota X no PNTP 2026" vale mais que qualquer selo comprado, e é auditável. 2) O esqueleto do hero (kicker + headline gigante + três linhas + um CTA único), rotacionando só o kicker por serviço: serve a home e às 4 páginas de serviço sem redesenho. 3) O catálogo em grade de caixas nomeadas, que é como o comprador público monta o objeto do contrato.

**Por que é relevante:** É o gêmeo mais próximo do que a Intelecto vende, e prova que "Webmail Corporativo" cabe no mesmo catálogo do portal, validando o roadmap de entrar por e-mail e subir para portal. Antipadrão a evitar: o hero usa foto de banco de imagem de uma jovem sorrindo com notebook, com quem nenhum presidente de câmara ou controlador interno se identifica, e a headline tem erro de regência ("à serviço").

## Incumbente e origem do gatilho comercial

### Interlegis (Senado Federal)

<https://www12.senado.leg.br/interlegis>

**O que funciona:** O elemento central da home é um mapa do Brasil clicável rotulado "Casas Legislativas atendidas", com o contador impresso dentro de cada estado: MG 485, RS 252, GO 224, PR 218, PI 216, SP 202, PE 175, RN 139, TO 136, BA 129, MT 114, PB 111, AL 99, SC 87, MA 76, PA 68, CE 65, RJ 64, RO 48, ES 47, MS 36, AM 32, SE 31, AC 24, RR 17, AP 16, DF 2. Ao lado do mapa, a instrução "Clique no estado ou pesquise por município" e um combo de UF, transformando a prova em ferramenta. Abaixo, quatro blocos de vídeo em caixa alta funcionam como catálogo: "CONHEÇA O DOMÍNIO .LEG", "CONHEÇA O PORTAL MODELO", "CONHEÇA O SISTEMA DE APOIO AO PROCESSO LEGISLATIVO (SAPL)", mais Hospedagem. Menu curto e institucional: Sobre, Produtos, Oficinas, Publicações, Acordo de Cooperação Técnica.

**O que aproveitar:** 1) O mapa do Brasil com número por estado é o formato que o público-alvo já reconhece, porque vem do Senado. A Intelecto tem o dado bruto para preencher o mesmo mapa com uma leitura que ninguém mais tem: 482 câmaras com MX Interlegis e 1.250 com portal Interlegis sem e-mail, por UF, vindas do radar/scan_results.csv. Um mapa com o título "Quantas câmaras do seu estado perdem o e-mail em maio/2027" é a peça de captação mais forte possível, é dado proprietário e não é copiável pelos concorrentes. 2) O par mapa mais busca por município: transformar o mapa em ferramenta ("digite sua cidade e veja a situação do e-mail da sua câmara"), o mesmo truque que a CESPRO usa no hero com o campo "Informe o nome do município". Converte visita anônima em lead qualificado. 3) O vocabulário exato dos produtos (Portal Modelo, SAPL, domínio .leg, hospedagem, reapontamento), que é como o servidor da câmara nomeia as coisas.

**Por que é relevante:** É o site que o presidente da câmara já visitou, então falar a mesma língua visual e nominal reduz atrito. E confirma a lacuna informacional que a Intelecto ocupa: a home do Interlegis não avisa em lugar nenhum sobre a desativação do E-mail Legislativo, o aviso está enterrado no FAQ da Central de Atendimento.

## Referência de credibilidade institucional (govtech nacional)

### 1Doc

<https://1doc.com.br>

**O que funciona:** A ordem é hero, carrossel de logos de clientes colado imediatamente abaixo, quatro módulos (Fluxos, Assinatura, Atendimento, Indicadores), painel de estatísticas, IA, diagnóstico de maturidade digital, quatro cases, faixa de selos, rodapé. O painel de estatísticas usa quatro números de consequência, não de vaidade: "100% Presente nos 26 estados brasileiros", "+900 Organizações e Entidades Transformadas", "R$ 1 bilhão Em economia de papel para a gestão pública", "25% Da população brasileira já é beneficiada". A faixa de selos traz 8 marcas verificáveis (ISO 27001, ISO 9001, ABES, Pacto Brasil, Empresa Limpa). A validade jurídica da assinatura eletrônica aparece com o número da lei visível na tela: "Lei nº 14.063/2020" e "MP 2200-2/2001". Hero: "Simplifique sua gestão com processos digitais, seguros e transparentes." CTA único e repetido na página inteira: "FALE COM VENDAS".

**O que aproveitar:** 1) Trocar métrica de vaidade por métrica de consequência. Para a Intelecto: contas de e-mail migradas sem perda de mensagem, câmaras operando no domínio oficial, anos sem indisponibilidade não programada, municípios atendidos em SP e MG. 2) Citar o número da lei em corpo grande dentro da seção do produto, não em letra miúda no rodapé: Lei 12.527/2011, LC 131/2009, Lei 13.460/2017, Lei 14.133/2021, LGPD 13.709/2018, e para o e-mail o prazo de maio/2027. 3) Um único rótulo de CTA repetido em toda a página, em vez de sete variações que confundem quem só quer falar com alguém.

**Por que é relevante:** É o padrão-ouro de como uma govtech brasileira demonstra seriedade sem virar startup de Silicon Valley. Ressalva honesta: a Intelecto não tem ISO 27001 nem 900 clientes, então não deve imitar a faixa de selos, e sim substituí-la por prova que possui de verdade (CNPJ e anos de mercado, contratos públicos vigentes, nota PNTP dos portais, infraestrutura própria descrita com nome e local).

## Referência de hero, prova de escala e catálogo por área

### IPM Sistemas

<https://www.ipm.com.br>

**O que funciona:** Hero com headline curta e imperativa ("Impulsione resultados extraordinários") e um trecho rotativo de benefício ("progresso econômico", "qualidade de vida", "a satisfação do cidadão"), com CTA único "Solicite uma demonstração". A prova vem logo em seguida como afirmação de liderança seguida de três números de impacto social, não de produto: "+30 milhões de brasileiros impactados", "+R$8 bilhões de recursos públicos poupados", "+850 clientes em 5 estados confiam na IPM". O catálogo é um conjunto de 7 abas por área de governo (Prefeitura e Gestão, Saúde, Educação, Social, Vigilância, Comunicação, Fintech), cada uma com CTA secundário "Quero conhecer".

**O que aproveitar:** 1) Abas por área e dor em vez de lista plana de módulos. Para a Intelecto: Legislativo e Transparência, LGPD, Hospedagem e E-mail, Sistemas sob medida, e cada aba vira uma das 4 páginas de serviço previstas. 2) O par número mais unidade humana ("+850 clientes em 5 estados"), que é exatamente o formato honesto para o porte da Intelecto: "13 órgãos públicos em 2 estados" é mais crível e mais checável que "centenas de clientes". 3) O CTA único "Solicite uma demonstração", que para portal e sistemas é o pedido certo e que na página de e-mail vira "Solicite o diagnóstico do e-mail da sua câmara", aproveitando que o radar DNS já sabe a resposta.

**Por que é relevante:** Mostra o teto do mercado e é a régua de tom que o comprador usa inconscientemente. Antipadrão que não deve ser copiado: a faixa de selos do rodapé é toda de employer branding (GPTW, Melhores empresas para trabalhar, Empresa Amiga dos Animais), inútil para quem precisa justificar contratação ao Tribunal de Contas.

## Referência de catálogo de módulos e comunicado normativo

### Fiorilli Software

<https://www.fiorilli.com.br>

**O que funciona:** Hero em três linhas com a palavra-chave em destaque tipográfico ("Referência em tecnologia para / Gestão pública com eficiência e transparência."), subtítulo que já entrega os três números que importam ("Há mais de 25 anos desenvolvendo sistemas de gestão para prefeituras, câmaras e autarquias, com mais de mil clientes atendidos em todo o Brasil.") e dois CTAs lado a lado, um primário ("Nossos sistemas") e um secundário ("Fale com a gente"). Logo abaixo do hero, e isso é raro no setor, aparece um comunicado datado ("Comunicado nº 570 / A lei orçamentária para o ano de 2027 / 12/08/2026") e um aviso antifraude em destaque: "ALERTA: A Fiorilli Software não homologa ou comercializa produtos de terceiros, confira aqui os parceiros e representantes credenciados em seus estados." O catálogo é uma grade de cartões com sigla grande, nome por extenso, parágrafo e botão "Conhecer": SCPI, SIP, SIA, SCIM (descrito como quem produz "os relatórios exigidos pelos Tribunais de Contas Estaduais"), SIS, SIE, mais um link "Ver o catálogo completo". Fecha com faixa de 4 números: "+1.000 Clientes em todo o Brasil", "+25 Anos de história e inovação", "+50 Sistemas desenvolvidos", "27 Estados atendidos".

**O que aproveitar:** 1) O bloco de comunicado datado logo abaixo do hero. É prova viva de que a empresa acompanha mudança legal, e para a Intelecto esse bloco é o gatilho inteiro: "Comunicado: o Interlegis desativa o E-mail Legislativo em maio/2027, veja o que a sua câmara precisa fazer", com data visível. Transforma o site em fonte de notícia setorial e alimenta o SEO local pretendido ("e-mail interlegis desativado", "e-mail .leg.br"). 2) O aviso antifraude em destaque, que sinaliza operação séria e, no caso da Intelecto, resolve uma objeção real: atendimento direto, sem revendedor no meio. 3) O cartão de módulo com sigla grande: Mirante e Conformis já são nomes de produto e merecem esse tratamento, com uma linha de definição e um "Conhecer".

**Por que é relevante:** É a estrutura de catálogo mais legível do conjunto e a mais barata de reproduzir em HTML estático, porque é grid de cartões sem JS. E a descrição do SCIM mostra a fórmula certa de copy para o comprador público: nomear o Tribunal de Contas como destinatário do relatório que o sistema gera.

## Referência de hero que vende conformidade com prazo

### Betha Sistemas

<https://www.betha.com.br>

**O que funciona:** O hero é um carrossel de 8 slides em que cada slide é uma manchete de conformidade ou de prova, sobre fundo branco levemente azulado, com headline preta pesada em três linhas, parágrafo de duas linhas e botão azul sólido ("Clique e saiba mais", "Confira aqui"). Os dois slides capturados: "Reforma Tributária: Betha realiza adequações da Nota Técnica nº 004 para IBS e CBS nos sistemas de NFS-e / Atualização prepara municípios e contribuintes para a obrigatoriedade do destaque dos tributos, que inicia em agosto, garantindo uma transição gradual e segura" e "Novos clientes Betha se destacam no ranking Siconfi com nota A". A logo é um wordmark azul em caixa alta, o menu tem 7 itens e um botão contornado "Portal do cliente" à direita. As notícias mais recentes são de cliente ("Município de Lucas do Rio Verde (MT) alcança classificação A no CAPAG"). Existe uma seção "Nossos certificados" e o rodapé separa três links de governança nomeados: "Conformidade e Integridade", "LGPD", "Canal de Denúncias".

**O que aproveitar:** 1) A tese do hero: não vender software, vender "nós já resolvemos a mudança legal que está vindo contra você, e ela tem data". É exatamente a posição da Intelecto com maio/2027. O primeiro bloco da home deve ser prazo, consequência, o que a Intelecto faz e um botão, nessa ordem. 2) Notícia de cliente como prova ("Câmara X passou a operar e-mail no domínio oficial", "portal Y atingiu nota Z no PNTP"), que é prova de terceiro em vez de autoelogio. 3) O trio de links de governança no rodapé, que custa três páginas simples e é a primeira coisa que o controlador interno procura antes de recomendar um fornecedor.

**Por que é relevante:** Betha é a maior do setor e escolheu ancorar a home em prazo regulatório em vez de features. Isso confirma que o gatilho Interlegis maio/2027 merece a posição de topo absoluto da home da Intelecto, e não uma menção em banner secundário.

## Referência de faixa de logos oficiais e prova de infraestrutura

### Elotech

<https://www.elotech.com.br>

**O que funciona:** Hero curto com headline institucional ("Gestão pública eficiente, inovadora e transparente"), subtítulo de uma linha ("A tecnologia ao alcance do cidadão") e CTA "Saiba mais". A prova de credibilidade é uma seção nomeada com uma frase que faz o trabalho sozinha: "Grandes entidades utilizam os softwares da Elotech", seguida de 10 brasões municipais e estaduais reais e nomeáveis (Maringá, Ponta Grossa, Foz do Iguaçu, Umuarama, Bento Gonçalves, Naviraí, Engenheiro Beltrão, Moreira Sales, Palmeira e Ministério Público do Paraná). Em seguida vem uma seção de infraestrutura, "Tecnologia a serviço do cidadão", que expõe o stack como argumento de venda: datacenter Tier III+, Amazon Web Services com 99,7% de disponibilidade, mais logos de Java, Spring, Angular, React e Flutter. Selo GPTW 2025-2026 e fundação em 1985 no rodapé.

**O que aproveitar:** 1) A frase que enquadra a faixa de logos. "Grandes entidades utilizam" converte uma tira de imagens em afirmação, e o carrossel de logos pedido no briefing precisa exatamente disso. A Intelecto tem 8 câmaras, 2 prefeituras, CONSISP, SAE Ituiutaba, SAAE Pedreira, DMAAE Ouro Fino, CAPIVARIPREV, mais TRB Pharma, Fracttal, Pieralisi e Del Arco no privado. Brasão oficial de órgão público é imagem pública e é muito mais forte que logotipo genérico. 2) Expor a infraestrutura como diferencial visível e com número. A Intelecto tem um argumento melhor que "AWS": servidor bare-metal próprio em datacenter no Brasil, Proxmox, Coolify, backup em S3, SPF, DKIM e DMARC configurados por domínio. Isso responde de frente à pergunta "onde ficam os dados da minha câmara e quem os opera". 3) A separação Cases, Cursos e Conteúdos no menu, que sinaliza empresa que ensina o cliente em vez de só vender.

**Por que é relevante:** Mostra o formato de faixa de clientes que funciona no setor público brasileiro, com brasão oficial e não logotipo estilizado. Antipadrão: a home termina em "Fale com nosso time comercial" e não diz uma palavra sobre licitação, Lei 14.133 ou como contratar, deixando o comprador sem o próximo passo administrativo.

## Concorrente adjacente: sistema legislativo, referência de prova social em escala pequena

### Legiflow (Govsys)

<https://www.legiflow.com.br/>

**O que funciona:** Hero com headline de promessa e mockup de desktop mais celular exibindo a tela real do sistema ("O Sistema que leva sua Câmara de Vereadores para o futuro."), subtítulo que abre com a empresa e o tempo de mercado ("Desenvolvido pela Govsys, no mercado de software desde 2007...") e CTA "Falar com o Comercial". A página empilha quatro camadas distintas de prova, e é isso que a torna útil: um case nomeado com pioneirismo verificável (Câmara de Gramado/RS como primeira câmara do Brasil com IA integrada); 11 brasões municipais de estados diferentes (RS, PR, TO, PA, RN, SP), o que sustenta alcance nacional com poucos clientes; um depoimento com nome, cargo e casa (Fernando Escobar Bins, procurador, Câmara de Guaíba); e uma faixa de logos de imprensa (Terra, ClicRBS/GZH, O Globo, Valor Econômico). Selos ICP-Brasil e ABES. Um item de funcionalidade vende migração explicitamente: importação de dados de sistemas existentes, com compatibilidade SAPL. Copy de assinatura: "Dê um fim à papelada com a Assinatura Eletrônica ICP-Brasil integrada em todos processos".

**O que aproveitar:** 1) A escada de prova em quatro degraus, reproduzível com o que a Intelecto tem hoje: um case nomeado (a primeira câmara migrada do E-mail Legislativo), os brasões dos órgãos atendidos, um depoimento com nome e cargo, e menção de imprensa ou parceria quando houver. 2) Vender migração como item de catálogo, nomeando o sistema de origem. "Importamos do SAPL" é o equivalente exato de "migramos o E-mail Legislativo do Interlegis sem perder mensagem", e isso precisa estar como bullet na página de e-mail, não escondido dentro da proposta. 3) O depoimento assinado por procurador ou controlador interno, não por vereador: é o perfil que dá segurança a quem vai defender a contratação.

**Por que é relevante:** É a govtech pequena que melhor resolve o problema central da Intelecto: poucos clientes e necessidade de parecer sólida. Antipadrão claro a evitar: a faixa de métricas do Legiflow mostra "0+" em tramitações, proposições, usuários e anos, porque são contadores animados que não disparam. Em site estático sem build, número precisa ser texto no HTML.

## Referência de faixa de números e isca de conteúdo

### PublicSoft

<https://www.publicsoft.com.br/>

**O que funciona:** Hero minimalista com uma linha de posicionamento e dois CTAs ("Soluções", "Entre em contato"). Imediatamente abaixo, antes de qualquer produto, uma faixa horizontal de 4 números com prefixo em corpo pequeno e número em corpo grande, rótulo em duas linhas: "MAIS DE 300 MUNICÍPIOS ATENDIDOS", "06 ESTADOS PRESENTES", "MAIS DE 3000 USUÁRIOS NO BRASIL", "MAIS DE 600 CLIENTES". Em seguida, grade de 8 nomes de solução em caixa alta com ícone, incluindo "LICITAÇÃO" e "PORTAL DA TRANSPARÊNCIA". A afirmação de autoridade é regional e por isso crível: "A maior empresa de software para gestão pública da Paraíba / Há 20 anos somos uma empresa que busca incansavelmente soluções inovadoras para a gestão pública." Fecha com download de e-books atrás de formulário ("GESTÃO PÚBLICA RESPONSÁVEL", "E-BOOK IPTU, ITBI e Taxas").

**O que aproveitar:** 1) A afirmação de liderança regional em vez de nacional. A Intelecto pode dizer com verdade algo como "especialista em câmaras do interior de São Paulo e Minas Gerais", que é checável e não soa inflado, ao contrário de "líder nacional". 2) A faixa de 4 números logo abaixo da dobra, antes de qualquer produto, com prefixo pequeno separado do número grande. 3) O e-book como isca com formulário: a Intelecto já tem a peça pronta (Alerta_Fim_Email_Interlegis_2027.pdf) e ela é a melhor isca possível para a landing camara.intelecto.solutions, porque troca um PDF de utilidade real pelo e-mail institucional do servidor da câmara, que é justamente o contato que a operação de prospecção precisa.

**Por que é relevante:** É o modelo mais próximo do porte real da Intelecto e da estratégia de captação já decidida no projeto (landing mais sequência SendGrid). Antipadrão: o hero não diz para quem é nem o que resolve, e o chatbot "PublicBot" abre sozinho cobrindo conteúdo.

## Concorrente do mesmo porte e principal fonte de antipadrões

### Câmaras e Prefeituras (Regente Feijó/SP)

<https://www.camaraseprefeituras.com.br/>

**O que funciona:** Duas coisas funcionam de verdade. Primeira: uma chamada de auditoria gratuita no meio da página, escrita como pergunta direta ao gestor, "O seu portal já cumpre as exigências legais? Vamos analisar gratuitamente seu site e ver se ele contempla uma estrutura adequada", com CTA "Solicite uma visita". Segunda: a seção "Soluções Completas" em três cartões de pacote, cada um com público indicado e lista de itens com marcador, no formato exato de um objeto de contrato: "Gerenciamento Eletrônico / Controle" (Indicado: Prefeitura ou Câmara; Consolidação de Leis, Diário Oficial Eletrônico, Pesquisa Rápida e Avançada, Armazenamento na nuvem, Protocolo Eletrônico, Backup em nuvem, Painel Administrativo); "Consultoria / Portal Governamental" (Lei da Transparência, Lei de Acesso à Informação, "Exigências: TCE / M.P", "Acessibilidade / LGPD", "Hospedagem / E-mails", Suporte Mensal, Gerenciamento Dinâmico, Treinamento Local, Atualizações); e "Soluções On-line" (transmissão de licitações e sessões ao vivo, simultâneo em site, Facebook e YouTube, e-SIC, Ouvidoria). Cada cartão fecha com "Fale com um consultor....". A seção de serviços nomeia o instrumento legal no próprio título: "Transparência (LC 131/2009)", "Acesso às Informações (Lei 12.527/2011)", "M.P e TC-E", "PNTP".

**O que aproveitar:** 1) Os três cartões de pacote com "Indicado:" e checklist. É o formato que o diretor administrativo consegue transportar direto para o termo de referência, e resolve a exigência de tratar licitação sem escrever um tratado sobre a Lei 14.133. 2) A auditoria gratuita como CTA principal do site inteiro: "Vamos analisar gratuitamente o portal e o e-mail da sua câmara". Para a Intelecto isso é quase automático, porque o radar DNS já sabe a resposta antes mesmo do contato. 3) Citar a norma entre parênteses no título do serviço (LC 131/2009, Lei 12.527/2011, PNTP), que é exatamente como o servidor busca no Google.

**Por que é relevante:** É o retrato do que a Intelecto não pode parecer: mesmo porte, mesmo discurso, execução amadora. O title da página é um bloco de palavras-chave que inclui o nome dos concorrentes ("webline sistemas, marilia, instar penapolis, king page, plenus maringa, inga digital"), há erros de digitação visíveis no corpo ("manutenação", "estatíscas", "protocolo eletrönico", "Vivencia", "Arçatuba", "muncípio"), a data institucional se contradiz ("15 anos no mercado" no hero contra "Desde 2002" no institucional) e o CTA termina em quatro pontos. Cada detalhe desses é o que separa "fornecedor sério" de "primo que mexe com site" aos olhos de quem vai defender a contratação numa auditoria.

## govtech internacional, portais e servicos digitais para governo local

### CivicPlus

<https://www.civicplus.com/>

**O que funciona:** H1 curto e possessivo do resultado, nao do produto: "The Best-Run Local Governments Run on CivicPlus Technology", com sub em uma linha "Streamline operations, boost engagement, and nurture public trust". Um unico botao no hero ("Get Online Demo"). Logo abaixo do hero vem a faixa numerica de credibilidade com 5 numeros grandes e rotulo minusculo embaixo: 13K+ clientes de governo local, 100K+ servidores publicos usuarios, 340M+ residentes atendidos, 25 anos, 98% de retencao. Depois grade de 13 produtos, cada um com descricao de menos de 15 palavras. O bloco mais forte e o "Supercharge and Connect Every Function", em abas por CARGO: Administration, Communications Director/PIO, Clerk, Recreation Director, Community Development Director. Testemunhos assinados por cargo real de cidade pequena (Police Chief de Grafton/WI, Chief Innovation Officer de Lebanon/NH, Web Specialist de Key West).

**O que aproveitar:** Duas coisas. (1) A faixa de 5 numeros logo abaixo do hero, que a Intelecto pode montar com dados que JA existem e sao verdadeiros: 8 camaras municipais, 2 prefeituras, 1 consorcio intermunicipal, 3 autarquias de agua, 10+ anos, e o numero do radar proprio (482 camaras mapeadas). (2) A navegacao por CARGO em vez de por produto. Trocar a aba "Clerk" por "Presidente da Camara", "Diretor Administrativo", "Controlador Interno" e "Gestor de TI": exatamente as 3 personas descritas no briefing. Cada aba responde a pergunta que aquele cargo faz, nao o que o software faz.

**Por que é relevante:** E o concorrente estrutural mais parecido com o que a Intelecto quer ser: vende site, e-mail, agenda e notificacao para governos locais pequenos, e organiza tudo por quem vai assinar o contrato. Prova que numero de clientes modesto pode ser apresentado com peso institucional quando vem com rotulo preciso.

## govtech internacional, licenciamento e permitting para prefeituras e condados

### Accela

<https://www.accela.com/>

**O que funciona:** A pagina inteira e uma argumentacao em 4 movimentos, na ordem. (1) H1 de tres palavras "Modern government, accelerated" mais uma linha do que e. (2) Faixa "Trusted by" com 4 numeros: 900+ agencias, 50%+ das maiores cidades e condados dos EUA, 300M+ cidadaos, 25+ anos em GovTech. (3) E entao, antes de qualquer produto, um bloco de PROBLEMA escrito na voz do comprador: "Agencies are being asked to do more with less. The pressure isn't letting up. Higher constituent expectations. Siloed departments. Escalating regulatory complexity. Labor shortages. Funding uncertainty. These forces are outpacing the systems agencies rely on, and incremental fixes aren't working." (4) So depois vem prova, e a prova sao 3 cartoes onde o numero e o titulo do cartao: "3 days" (permite residencial caiu de tres semanas para tres dias) assinado por Luis Vasquez, Chief Building Official, City of McAllen/TX; "178%" por Debbie Brannan, Cabarrus County/NC; "$250K" por Glenna Campana, Manatee County/FL. Fecha com "Built differently. Accountable for results. Three things that separate Accela", e um dos tres e uma promessa de servico auditavel: "8-year average tenure and a 100% implementation success rate over five years".

**O que aproveitar:** A sequencia problema antes de produto, e o formato do cartao de prova onde o NUMERO e o titulo. Para a Intelecto o bloco de problema ja esta pronto e e melhor que o da Accela porque tem data: "Em maio de 2027 o Senado desliga o E-mail Legislativo. 482 camaras no Brasil ainda dependem dele. Quando o servico cair, o e-mail oficial da Camara para de funcionar no meio do exercicio, e o Portal Modelo e o SAPL nao resolvem isso." E os cartoes de prova viram: "482 camaras mapeadas", "maio/2027", "10 dias ate a caixa nova funcionando". A promessa de servico auditavel tambem: em vez de "suporte", escrever o compromisso numerico que o Luiz consegue cumprir sozinho (resposta em ate X horas uteis, atendimento pelo dono da empresa).

**Por que é relevante:** E o unico dos 12 que constroi urgencia com linguagem de pressao operacional em vez de linguagem de marketing, e o cliente da Intelecto tem uma urgencia REAL com data no calendario. O padrao de citacao com cargo tecnico completo (Chief Building Official, nao "gestor") e o que da credibilidade diante de auditoria.

## govtech internacional, ERP e plataforma unica para cidades e condados

### OpenGov

<https://opengov.com/>

**O que funciona:** Quatro numeros no topo, e o primeiro nao e um numero de vendas, e um numero de alcance social: "1 in 3 / People in the U.S. live in communities powered by OpenGov", seguido de 2,000+ governos, 4,500+ implantacoes, $670B+ em dinheiro publico gerenciado. Traduzir tamanho em impacto civico e o truque. Depois vem um bloco de tres colunas com titulo em frases de tres palavras: "We show up. We deliver. We stay.", e cada coluna e sobre PESSOAS e nao software: visitas presenciais a prefeituras, plano de projeto desenhado por servicos profissionais, gerentes de sucesso que continuam aparecendo anos depois do go-live. A pagina termina com um FAQ de 6 perguntas que sao literalmente as perguntas de um processo licitatorio: quanto tempo leva a implantacao ("typically ranging from 3 to 6 months"), e seguro e conforme, que tipos de orgao usam, e o que diferencia. E ha uma frase de posicionamento que e uma faca: "It's not a horizontal platform trying to fit government workflows. We build with our customers, not just for them."

**O que aproveitar:** O FAQ de procurement na propria home ou no fim de cada pagina de servico. Para a Intelecto as perguntas ja se escrevem sozinhas: "Quanto tempo leva a migracao do e-mail?", "O Portal Modelo e o SAPL param de funcionar?" (resposta: nao, porque e reapontamento e nao delegacao), "Como isso e contratado dentro da Lei 14.133?", "Onde ficam hospedados os dados?", "Quem assina o oficio para o Interlegis?". Isso desarma o medo de auditoria do TCE antes da reuniao. Roubar tambem a estrutura "Nos aparecemos. Nos entregamos. Nos ficamos", que e o unico jeito de uma empresa de uma pessoa transformar tamanho pequeno em vantagem: atendimento pelo dono, nao por call center.

**Por que é relevante:** O comprador descrito no briefing (diretor administrativo que precisa justificar a contratacao e teme auditoria) le FAQ antes de ler feature. Nenhum site govtech brasileiro faz isso, e custa zero para implementar em HTML estatico com elementos details.

## govtech de nicho, sites e conformidade para special districts pequenos nos EUA

### Streamline (getstreamline.com)

<https://www.getstreamline.com/>

**O que funciona:** E a referencia mais transponivel das 12 porque e uma empresa pequena vendendo para orgaos publicos minusculos. O H1 nao vende site, vende alivio de risco: "The #1 Compliant Website Platform for Special Districts", e o sub explica o resultado emocional: "Districts that choose Streamline finally get to stop worrying about accessibility, compliance, and reputation risks. They get their time and control back." Seis cartoes de beneficio, e o primeiro deles nao e design, e ADA Compliance. O centro do produto e um painel de conformidade descrito assim: "presents all known legislation affecting your specific district in one dashboard... You can track your compliance and shoot for all green lights". O FAQ responde as objecoes duras sem rodeio: tempo economizado ("about 20 hours per month, or 5 hours per week"), suporte ("a real human will get back to you in less than an hour") e contrato ("Nope! Streamline is a low-cost monthly subscription. No long-term contracts or hidden fees"). Depoimentos de gente real de orgao minusculo, com cargo completo: Matthew Benedict, Fire Chief, Cannon Beach RFPD; Meghan Orsetti, Administrative Services Technician, Groveland Community Services District. No rodape ha uma isca de topo de funil: "Is your website accessible? Visit checkmydistrict.org and use our free scanner to find out." A pagina /plans usa nomes de plano por INTENCAO, nao por tamanho: Compliance Essentials, Community Pro, Operations Pro, com tabela comparativa por linha de recurso.

**O que aproveitar:** Tres coisas, todas de alto retorno. (1) Painel de conformidade como produto visivel: a Intelecto tem a matriz PNTP 2026 (cerca de 83 criterios) e pode mostrar na pagina de transparencia um mock do checklist com "todos os itens verdes", que e exatamente a imagem mental do controlador interno. (2) A isca de diagnostico gratuito: a Intelecto ja tem o radar DNS de 5.571 municipios. Uma pagina "Verifique o e-mail e o dominio da sua Camara" que recebe o slug .leg.br e devolve o status (MX Interlegis, sem e-mail, ou ja migrado) e o melhor gerador de lead possivel, e o dado ja existe em radar/scan_results.csv. (3) Nomear planos por intencao ("Conformidade Essencial", "Camara Conectada") em vez de Basico/Pro/Premium. Observacao: o dominio checkmydistrict.org nao resolveu quando tentei carregar, entao o padrao da isca esta confirmado na home da Streamline, mas o scanner em si nao foi verificado.

**Por que é relevante:** Empresa pequena, nicho estreito, comprador publico sem equipe de TI, prazo regulatorio como gatilho: e o espelho exato da situacao da Intelecto. E prova que da para ser especifico e caloroso sem parecer agencia.

## govtech internacional, plataforma modular para municipios e condados

### GovPilot

<https://www.govpilot.com/>

**O que funciona:** Duas invencoes boas. (1) A faixa de logos nao mostra so o brasao, mostra NOME mais ESTADO em texto: Atlantic City / New Jersey, Jackson County / Mississippi, Cocke County / Tennessee, Rutland / Vermont, cerca de 20 entradas. Funciona porque brasao de cidade pequena e ilegivel, mas nome de lugar e reconhecivel. (2) Os cartoes de case sao um formato fechado e repetido seis vezes: rotulo "Case Study: Big Bear Lake, CA" no topo, aspa verbatim no meio, nome e cargo do servidor embaixo (Lawrence Vaupel, Director of Tourism Management), e entao um selo com o resultado quantificado e a conta feita por extenso: "24 Days Saved: processing paper renewals previously took 15 minutes per paper application. Multiplied by 2,300 properties is 24 days worth of time saved." Outros selos: "30 Minutes to 30 Seconds", "100 Hours per Week", "97% Time Savings". Ha ainda faixa de validacao de terceiros (Capterra 4.6/5, GovTech100 por 8 anos consecutivos). A pagina /pricing explica a LOGICA mesmo sem revelar valor: "straightforward pricing based on population and number of modules selected", com 4 faixas (5, 10, 20, 125+ modulos) e "Unlimited Users & Support" em todas.

**O que aproveitar:** O nome-do-lugar-em-texto na faixa de clientes, obrigatorio para a Intelecto: "Camara Municipal de Jaguariuna / SP", "Camara Municipal de Capivari / SP", "SAE Ituiutaba / MG", "CONSISP / SP". Um presidente de camara de 12 mil habitantes reconhece a cidade vizinha, nao reconhece brasao. E o formato de card de case com a CONTA por extenso: "Migracao de 30 contas em 11 dias uteis, sem um unico e-mail perdido" convence mais que "agilidade". A logica de preco publicada tambem: dizer que o preco e por numero de contas e se ha migracao, mesmo mantendo o valor sob consulta, ja tira o medo de ser tratado como otario.

**Por que é relevante:** Resolve o problema visual concreto que a Intelecto tem: 8 camaras e 3 autarquias com identidades heraldicas que num carrossel de logos ficam ruins. GovPilot mostra como transformar isso em forca.

## govtech internacional, experiencia digital e comunicacao para governo (lider do setor)

### Granicus

<https://granicus.com/>

**O que funciona:** O bloco de prova social e o mais bem calibrado do setor: 7.000+ clientes do setor publico, 360M de pessoas na rede de assinantes, 100% das agencias de gabinete federal dos EUA, 48 das 50 maiores cidades, 30B de experiencias digitais por ano, 22B de mensagens por ano, seguido de um mural com 12 logos de orgaos. As historias de cliente na home vem sempre como par organizacao mais numero: Veterans Affairs "71% increase in audience reach", Oklahoma Health Care Authority "135% increase in daily enrollments", Wyandotte County "30% decrease in calls", Oregon Dept. of Corrections "80% engagement rate", Plover Area CVB "15x increase in website visitors". O CTA final e uma pergunta dirigida ao gestor: "Ready to deliver exceptional outcomes?"

**O que aproveitar:** O par fixo "nome do orgao mais um numero" como unidade minima de prova social, repetido 4 ou 5 vezes na home. Cada cliente da Intelecto rende um: Jaguariuna e os anos de portal no ar, Capivari e o numero de itens PNTP publicados, TRB Pharma e os anos de contrato. E o CTA em forma de pergunta no fim da pagina, dirigido ao cargo ("Sua Camara ja tem plano para maio de 2027?") em vez de "Fale conosco".

**Por que é relevante:** E o benchmark de topo do setor e mostra o teto do que prova social pode fazer. Serve mais como calibragem de tom (institucional, numerico, nada fofo) do que como layout a copiar, porque o resto da pagina sofre do problema de nomenclatura abstrata descrito nos antipadroes.

## govtech internacional, biblioteca de casos filtravel

### Granicus ANZ, biblioteca de Success Stories

<https://www.granicus.com.au/success-stories>

**O que funciona:** Uma pagina que existe so para hospedar casos, com uma frase de abertura curta ("Granicus is proud to serve organisations that use our digital solutions to change the world. Click below to read their stories.") e dois filtros lado a lado: por REGIAO (Australia, New South Wales, New Zealand, Queensland, South Australia, Tasmania, Victoria, Western Australia) e por SOLUCAO. Cada cartao tem a regiao como etiqueta acima do titulo, o titulo em forma de narrativa com o nome do orgao dentro, e um unico link "Read Story". Exemplos: "Designed for How People Live, Search, and Engage: City of Parramatta's Award-Winning Digital Transformation", "How Horowhenua District Council Modernised its Dog Registration Renewal Process", "Byron Shire Council engages community with innovative website restructure". Paginacao por "Load More", nao por numeros de pagina.

**O que aproveitar:** O filtro por regiao e a etiqueta geografica no cartao. Para a Intelecto o filtro natural e por UF (SP, MG) e por tipo de orgao (Camara, Prefeitura, Autarquia, Consorcio). E principalmente o formato de TITULO de case: comeca pelo verbo do que mudou e cita o orgao pelo nome ("Como a Camara de Dolcinopolis passou a publicar os 83 itens da PNTP sem contratar equipe"), nunca "Case de sucesso 03". Com 14 clientes reais, uma biblioteca de 6 a 8 casos ja parece robusta se cada cartao vier etiquetado por UF.

**Por que é relevante:** E o modelo de como uma quantidade modesta de casos vira uma biblioteca com cara de escala. E HTML estatico puro: grade de cartoes com data-atributos e filtro em JS de 20 linhas resolve, dentro da restricao de nao usar framework.

## govtech internacional, orcamento e transparencia financeira para governos locais

### ClearGov

<https://cleargov.com/>

**O que funciona:** O H1 e uma sequencia de verbos que descreve o ciclo de trabalho do comprador, nao o produto: "Plan, budget, report, and engage with confidence", com sub que ja e prova ("2,000+ local governments and school districts use ClearGov's cloud-based software to manage the finance cycle"). Faixa de tres numeros apenas: 2,000+ clientes, $540B em orcamentos geridos, 98% de satisfacao. O bloco "Our Difference" tem tres itens e o do meio e a frase mais roubavel do conjunto: "ClearGov was built for the public sector, not adapted to it. Our solutions are designed to solve your unique challenges with workflows that are purpose-built for the way agencies like yours work." O terceiro item vende a EQUIPE como diferencial: "our customer success team, which includes former local government finance officers". Depoimentos sempre com nome, cargo e cidade em tres linhas: Diane Waldron / Comptroller / Bristol, CT; Amy Dent / Auditor / Christian County, MO. A biblioteca em /customer-stories filtra por solucao, por regiao (Northeast, Midwest, South, West) e por publico (School ou Local Government), mostra "6 out of 60" com Load More, e cada cartao traz o brasao do orgao e um titulo narrativo ("A Growing Town Fast-Tracks Budget Transformation, Cutting Production Time to Weeks").

**O que aproveitar:** A frase de posicionamento, adaptada ao que a Intelecto tem de verdade e nenhum concorrente tem: "Feito para camara municipal, nao adaptado de um site de empresa", encostada no fato de que o Mirante e multi-tenant e nasceu para atender PNTP. E o argumento de equipe: no caso da Intelecto o diferencial nao e "ex-servidores publicos", e "quem atende voce e quem opera a infraestrutura e ja intermediou dominio .leg.br junto ao Interlegis". Roubar tambem o H1 em verbos do ciclo do comprador, algo como "Publicar, comprovar, atender e responder ao TCE, com o mesmo fornecedor".

**Por que é relevante:** Vende exatamente para o cargo mais dificil do briefing (controlador interno e diretor administrativo que precisa justificar gasto) e faz isso com linguagem de processo, nao de tecnologia. E o modelo mais proximo do que a pagina de Transparencia da Intelecto precisa ser.

## civic tech internacional, dados de comunidade e confianca publica para cidades

### Zencity

<https://zencity.io/>

**O que funciona:** Posiciona o produto por um conceito abstrato e o ancora imediatamente: hero "Powering the work of government with community voices" mais "Join over 600 local governments globally", e logo abaixo um bloco titulado "Trust Matters. Measure, Earn, Build it." Os depoimentos aparecem intercalados entre secoes de produto, um por vez, sempre com nome e cargo institucional completo (Kelly Corsette, Communications and Public Affairs Director at City of Scottsdale, AZ; Dan Ault, Assistant City Manager, Cary, NC), e a citacao escolhida e sempre a que ADMITE um problema em vez de elogiar o vendedor: "Zencity was very useful in identifying our blindspots... I can't imagine we would have been aware of them otherwise." A faixa numerica e de OPERACAO, nao de vendas: 250M+ pontos de dado por ano, 100.000 fontes de midia analisadas, 1.2M+ respostas de pesquisa. Fecha com faixa de premios de terceiros (Fast Company Most Innovative 2025, GovTech Top 100 de 2022 a 2025, CB Insights AI 100).

**O que aproveitar:** A escolha da citacao: pegar o depoimento onde o cliente admite o problema anterior, nao o que elogia. Para a Intelecto, uma frase de presidente de camara do tipo "a gente usava e-mail pessoal do Gmail para assunto oficial e nao percebia o risco" vale dez vezes mais que "empresa excelente". E a metrica de operacao em vez de metrica de vendas: a Intelecto pode publicar numeros do proprio trabalho (contas de e-mail administradas, itens de transparencia publicados por mes, uptime da infraestrutura Proxmox), verificaveis e independentes de ter muitos clientes.

**Por que é relevante:** Mostra como vender um bem intangivel (confianca publica) para politico eleito sem virar discurso vazio: sempre um conceito seguido de uma evidencia mensuravel na linha seguinte. O Mirante vende a mesma coisa intangivel.

## govtech internacional, permitting para governos de todos os portes

### Clariti

<https://www.claritisoftware.com/>

**O que funciona:** Resolve o problema de vender para portes muito diferentes com produtos NOMEADOS por porte, ditos em uma linha cada: "Clariti Enterprise: permitting software for large local governments" e "Clariti Launch: permitting software for small to mid-sized local governments". As bullets de cada um sao opostas de proposito: Enterprise diz "For high volumes & complex requirements / Extensive functionality / Premium support"; Launch diz "Quick to set up / Framework of essential workflows / Easily add unique rules / Easy to manage & adjust without code". Ha um caminho explicito de auto-selecao repetido tres vezes na pagina: "Which solution is right for me?" e um botao "TAKE QUIZ". A prova social de fechamento e uma frase com nomes grandes: "Leading cities and counties like Los Angeles, Phoenix, and Orange County deliver great services with Clariti. Join them."

**O que aproveitar:** O caminho de auto-selecao. A Intelecto vende para camara de 5 mil habitantes e para a TRB Pharma na mesma pagina, e isso confunde. Uma faixa com tres portas na home ("Sou de uma Camara Municipal", "Sou de uma Prefeitura ou autarquia", "Sou empresa privada e preciso de DPO") resolve sem construir nada alem de tres ancoras. E nomear as ofertas por porte: um pacote de e-mail para camara de ate 10 contas nao pode ter o mesmo nome do projeto de portal completo.

**Por que é relevante:** A Intelecto tem 7 linhas de produto e um publico que vai de 5 mil habitantes a farmaceutica suica. Clariti e o unico dos 12 que enfrenta esse problema de frente e resolve com nomenclatura, nao com mais menu.

## govtech internacional, maior fornecedor de software para setor publico dos EUA

### Tyler Technologies

<https://www.tylertech.com/>

**O que funciona:** Duas coisas boas apesar de uma home fraca. (1) A faixa "Get Started Fast" logo abaixo do hero, com 5 atalhos que cobrem TODOS os motivos de visita, inclusive os que nao sao compra: "Find a Product / Get Product Support / Attend an Event / Find a Career / Get Investor Info". Reconhece que quem chega no site nem sempre quer comprar. (2) O bloco "We Serve the Public Sector: from small rural counties to large metropolitan cities, we've got you covered", com 6 fichas de segmento: Federal Agencies, States, Counties, Municipalities, K-12 Education, Special Districts. O H1 e institucional e sem jargao: "We Empower the Public Sector to Create Smarter, Safer, and Stronger Communities", sub "Software and services designed for government and schools".

**O que aproveitar:** A faixa de atalhos por INTENCAO abaixo do hero, adaptada ao caso da Intelecto: "Ver os servicos", "Ja sou cliente e preciso de suporte", "Quero verificar o dominio da minha Camara", "Documentos para licitacao". Esse quarto atalho e o mais valioso e nenhum concorrente brasileiro tem: uma pagina com atestado de capacidade tecnica, CNPJ, certidoes e modelo de termo de referencia, que e literalmente o que o diretor administrativo procura as 17h de uma sexta.

**Por que é relevante:** Serve como referencia de tom institucional grave (nada de startup) e como aviso: e o exemplo mais claro do antipadrao de catalogo, com megamenu de mais de 100 links e corpo de pagina quase vazio. Da para estudar o que fazer e o que nao fazer no mesmo site.

## govtech do Reino Unido, plataforma de sites e formularios para councils

### Jadu

<https://www.jadu.net/>

**O que funciona:** A faixa de clientes chamada "Built for the Public Sector and Enterprise" lista os orgaos por NOME em texto, sem depender de logo: North Sydney Council, Fanshawe College, Wigan Council, Carnegie Mellon University, Runnymede Borough Council, Rochdale Borough Council. E ha um bloco de pauta regulatoria que funciona como isca de consultoria: "From Local Government Reorganisation to service reform: Devolution and Local Government Reorganisation is more than just a structural shake-up, it's a once-in-a-generation opportunity to reform public services through digital-first thinking", com CTA "Learn how we can support you". Ou seja, transformam uma mudanca legal em andamento no pais numa secao permanente da home.

**O que aproveitar:** O bloco de pauta regulatoria como secao fixa da home. A Intelecto tem duas pautas quentes e datadas: a desativacao do E-mail Legislativo do Interlegis em maio/2027 e a PNTP 2026. Uma faixa "O que muda para a sua Camara em 2027" com tres bullets e um link para a pagina explicativa e a coisa de maior retorno comercial que cabe nessa home, porque e o unico conteudo que gera busca organica ("e-mail interlegis desativado") e o unico que abre conversa fria sem parecer venda.

**Por que é relevante:** Empresa de porte medio vendendo para councils (equivalente britanico da camara e prefeitura pequena), operando com a mesma tese da Intelecto: a mudanca regulatoria e o gancho. Confirma que a estrategia de conteudo em torno de prazo legal e padrao no mercado maduro, nao improviso.

## govtech internacional (software para cidades e condados nos EUA)

### OpenGov

<https://opengov.com/>

**O que funciona:** Faixa de logos colada logo abaixo do hero, sem titulo nenhum acima dela. Sao 13 selos de cidades (Tucson, Orlando, Minneapolis, San Antonio, Miami, Killeen, Tampa, Taylor County, Kansas City, Lauderdale Lakes, San Diego, Boston) repetidos em dois grupos identicos no mesmo track. O CSS real da pagina: `.dotcom-logo-ticker__item img { display:block; height:80px; width:auto; max-width:none; max-height:80px; object-fit:contain; filter:brightness(0) invert(1) }`, com `gap:130px` entre itens, secao em fundo escuro (classe `colorway-dark`), `animation: logoTickerScroll 90s linear infinite` e keyframe indo de `translate3d(0,0,0)` ate `translate3d(-50%,0,0)`. Fecha com `@media (prefers-reduced-motion:reduce){ .dotcom-logo-ticker__track{ animation:none; transform:none } }`.

**O que aproveitar:** Tres tecnicas prontas para copiar: (a) normalizar por ALTURA fixa de 80px com `width:auto` e `object-fit:contain`, nunca por largura, que e o unico jeito de um brasao redondo e uma logo horizontal pesarem igual na linha; (b) `filter: brightness(0) invert(1)`, que achata qualquer brasao policromatico e ornamentado numa silhueta branca solida (o grayscale comum NAO resolve brasao, o invert resolve); (c) duplicar o grupo inteiro de logos e animar ate -50% para o loop nao ter emenda, com 90s de duracao, ou seja, um deslize quase imperceptivel em vez de esteira de aeroporto.

**Por que é relevante:** Selo de cidade americana e o equivalente exato do brasao de camara municipal brasileira: circular, ornamentado, policromatico, com texto minusculo na borda. Este site resolve na pratica o problema que a Intelecto vai enfrentar com os brasoes de Jaguariuna, Capivari, Magda, Orindiuva e cia. E o publico e o mesmo: gestor publico municipal.

## govtech internacional (comunicacao e experiencia digital para setor publico)

### Granicus

<https://granicus.com/>

**O que funciona:** Bloco unico que combina duas provas em sequencia vertical: primeiro o titulo "The trusted partner for public sector organizations worldwide", logo abaixo uma faixa de numeros com contador animado (`<span data-countup>7000</span>+` clientes do setor publico, 360M de pessoas na rede, 100% das agencias federais de nivel ministerial dos EUA, 48 das 50 maiores cidades, 22B de mensagens governamentais por ano) e so depois a grade ESTATICA de cerca de 20 selos de orgaos (ATF, DFPI, City of Austin, Department of Labor, MDHHS, Honolulu, Kansas City, Nova Scotia, Nashville, WSDOT). Grade, nao carrossel.

**O que aproveitar:** A ordem exata: frase de autoridade, depois numero, depois logo. O numero prepara o leitor para interpretar a grade ("48 das 50 maiores cidades" faz 20 logos parecerem uma amostra de milhares, nao o estoque total). Roubar tambem a escolha de grade estatica quando os clientes sao orgaos publicos: o leitor institucional QUER procurar um orgao parecido com o dele, e carrossel impede a busca visual.

**Por que é relevante:** E o concorrente estrutural mais proximo do posicionamento da Intelecto: vende para orgao publico e precisa provar escala sem parecer agencia. Mostra que no setor publico o numero ("8 camaras, 2 prefeituras, 1 consorcio") carrega tanto peso quanto a logo.

## govtech internacional (plataforma de dados para prefeituras)

### Zencity

<https://www.zencity.io/>

**O que funciona:** Titulo em uma linha so, especifico e contavel: "Trusted by 600+ cities, counties, state agencies, and law enforcement organizations", seguido de um carrossel (`.logo_carousell` com `.city_logo_item > .logo_box > img`, biblioteca slick) com selos de Aurora, Carlsbad CA, Fort Lauderdale, Sarasota County FL, West Sacramento, Austin e Sugar Land TX. O detalhe de producao: os arquivos ja foram exportados em CANVAS QUADRADO (Aurora-280x280.png com 279x279, Carlsbad-CA-Square.png com 372x373), ou seja, o respiro foi assado no proprio PNG. Perto dos logos aparecem selos de premio (GovTech Badge, AI Badge, "most innovative companies 2025").

**O que aproveitar:** Normalizar no PIPELINE DE ASSET, nao so no CSS: exportar todo brasao de camara centralizado num canvas quadrado unico (ex.: 400x400 PNG transparente) com a mesma margem interna. Assim o CSS vira trivial (`width:100%` no quadrado) e brasao redondo, brasao em escudo e brasao com faixa horizontal param de brigar. Roubar tambem o formato do titulo: numero + lista dos TIPOS de orgao atendidos.

**Por que é relevante:** A Intelecto tem exatamente o mesmo mix heterogeneo de tipos de cliente (camara, prefeitura, consorcio, autarquia de agua, instituto de previdencia). O titulo do Zencity mostra como transformar essa bagunca em prova de amplitude: "8 camaras, 2 prefeituras, 1 consorcio intermunicipal, 3 autarquias de saneamento e 1 instituto de previdencia".

## govtech brasileiro (concorrente direto de nicho: gestao publica municipal)

### 1Doc

<https://1doc.com.br/>

**O que funciona:** Carrossel Swiper logo depois do hero, com 11 brasoes EM CORES CHEIAS (nenhuma classe grayscale aplicada no markup, confirmado no HTML): Americana, Caceres, Registro, Restinga Seca, Turvo, Campo Florido, Teresopolis, Chapadao do Sul, Sao Lourenco do Oeste, alem de CDL Florianopolis e Fundunesp. Cada imagem tem largura FIXADA A MAO, uma por uma: 149, 152, 163, 169, 153, 167, 149, 180, 162, 170, 170. O alt de cada uma e escrito por extenso: `alt="Brasao da Prefeitura de Americana, que e cliente 1Doc"`. Mais adiante, bloco de numeros: presente nos 26 estados, +900 organizacoes, R$ 1 bilhao em economia de papel, 25% da populacao beneficiada.

**O que aproveitar:** Duas coisas. Primeiro o alt text: escrever "Brasao da Camara Municipal de Jaguariuna, cliente Intelecto Solutions" em cada logo faz o nome da cidade virar texto indexavel, o que importa muito quando o proximo prospect googla "portal transparencia camara [cidade vizinha]". Segundo, a coragem de manter o brasao COLORIDO: brasao municipal e simbolo oficial e o publico o le como selo de autenticidade, nao como marca. O ajuste manual de largura logo a logo (149 a 180px) e o reconhecimento honesto de que brasao nao normaliza sozinho.

**Por que é relevante:** E o benchmark brasileiro mais proximo, mesmo comprador (prefeitura e camara), mesmo ativo visual (brasao municipal). Prova que no Brasil a faixa colorida de brasoes funciona e nao parece amadora, ao contrario do que a regra generica de SaaS ("sempre cinza") sugere.

## B2B infraestrutura (referencia de execucao tecnica de grade estatica)

### Supabase

<https://supabase.com/>

**O que funciona:** Grade estatica pura, sem nenhuma animacao. Markup real: `<ul aria-label="Trusted by fast-growing companies worldwide" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-10 gap-x-6 list-none">`, cada `<li class="flex items-center justify-center h-10 text-foreground-lighter opacity-70">`. As logos NAO sao imagens: sao SVG inline com `fill="currentColor"`, `role="img"`, `aria-label="Lovable"` e classe `h-8 lg:h-12 w-auto`. Acima da grade, so uma linha discreta: "Trusted by fast-growing companies worldwide" em `text-sm text-foreground-lighter`. A secao inteira e delimitada por `border-y` e `border-x`, virando uma caixa.

**O que aproveitar:** O padrao tecnico completo: SVG inline com `fill="currentColor"` + `opacity:.7` resolve monocromia, tema claro/escuro e acessibilidade de uma vez so, sem filtro CSS e sem duas versoes do arquivo. A celula com altura fixa (`h-10`) e a logo com `h-8 w-auto` dentro dela e a normalizacao optica correta. E o `aria-label` na `<ul>` mais `role="img"` em cada SVG faz a faixa ser lida por leitor de tela como conteudo, nao como decoracao.

**Por que é relevante:** O site da Intelecto e HTML/CSS estatico sem build, sem CDN e precisa ser autocontido: SVG inline com currentColor e literalmente a unica tecnica que atende essas quatro restricoes ao mesmo tempo. E acessibilidade nao e opcional para quem vende portal de transparencia (eMAG e WCAG entram em edital).

## B2B SaaS (referencia de marquee bem implementado)

### Sanity

<https://www.sanity.io/>

**O que funciona:** Marquee horizontal sob o titulo "Trusted by leaders and innovators", com 17 logos (Shopify, Figma, Redis, Replit, Anthropic, Spotify, Linear, Skims, Arc'teryx, Brex, Unity, MoMA e outras), todas servidas com `sizes="160px"`, ou seja, slot uniforme. O CSS: `.marquee .marquee-track{ animation-name:marquee-scroll; animation-duration:var(--marquee-duration,20s); animation-timing-function:linear; animation-iteration-count:infinite; will-change:transform }`, mais duas regras que importam: `.marquee:hover .marquee-track{ animation-play-state:paused }` e `@media (prefers-reduced-motion:reduce){ .marquee-track{ animation-play-state:paused } }`. Tem tambem `[data-paused=true]` como controle programatico.

**O que aproveitar:** As duas regras de seguranca, que a maioria das implementacoes de marquee esquece: pausar no hover e pausar em `prefers-reduced-motion`. Sem elas a faixa viola o criterio WCAG 2.2.2 (Pause, Stop, Hide) para qualquer movimento automatico com mais de 5 segundos. Roubar tambem `--marquee-duration` como variavel CSS, para calibrar a velocidade sem reescrever a animacao.

**Por que é relevante:** Se a Intelecto decidir animar a faixa, esta e a implementacao minima defensavel. Vender portal de transparencia com acessibilidade cobrada em edital e ter no proprio site um carrossel que nao pausa e um gol contra que um controlador interno mais atento pode notar.

## B2B SaaS de compliance (referencia de logo + micro-resultado)

### Vanta

<https://www.vanta.com/>

**O que funciona:** Titulo "Trusted by 16,000+ customers, from startup to enterprise" e logo abaixo APENAS 9 logos em cinza, em grade estatica, posicionada entre o hero e o bloco de metricas. O que diferencia: cada logo carrega um micro-resultado imediatamente abaixo dela, do tipo "Eliminated 10 spreadsheets", "2,000 hrs. saved annually", "20% faster deal cycles", "Automated 93% of questionnaires". As marcas sao Ramp, Cursor, Snowflake, Clay, Lovable, Samsara, Icelandair, Replit e GitHub.

**O que aproveitar:** Colar um numero de resultado embaixo de cada logo transforma uma faixa decorativa em nove mini estudos de caso lidos em dois segundos. E o motivo de 9 logos baterem 30: cada uma passa a carregar informacao propria em vez de virar textura. Formato direto para a Intelecto: "Camara de Jaguariuna, portal PNTP desde 2019"; "TRB Pharma, 10 anos de infraestrutura"; "CONSISP, consorcio com 12 municipios".

**Por que é relevante:** A Intelecto tem poucos clientes, mas cada um com historia longa e verificavel, que e exatamente a materia prima desse formato. Para um presidente de camara, "portal no ar desde 2019 sem apontamento do TCE" vale mais do que mais dez brasoes anonimos.

## infraestrutura global (referencia de logo wall grande e de mix publico/privado)

### Cloudflare

<https://www.cloudflare.com/>

**O que funciona:** Titulo curto e com jogo de palavras: "Trusted by the teams you trust.". A faixa (componente `LogosCompact`, dentro de `homeCustomers.logoWall`) lista 32 logos em SVG: Visa, Canva, Uber, Broadcom, HubSpot, L'Oreal, Roche, Carrefour, Telefonica, Anthropic, Atlassian, Stripe, Workday, Mars, Garmin, Indeed e, no meio delas, US Department of Commerce e Department of Homeland Security. Fecha embaixo com uma legenda discreta: "And thousands more...".

**O que aproveitar:** Duas coisas. Primeiro, misturar orgao publico e marca privada na MESMA faixa: o orgao publico prova conformidade e sobrevivencia a auditoria, a marca privada prova competencia tecnica de mercado, e juntas cobrem as duas objecoes. Segundo, o rodape "And thousands more..." em texto pequeno, que sinaliza que a lista e recorte e nao inventario, sem precisar mentir numero.

**Por que é relevante:** A Intelecto tem exatamente esse mix e hoje o trata como duas carteiras separadas. Colocar Jaguariuna, Capivari e CONSISP lado a lado com TRB Pharma, Pieralisi e Fracttal na mesma faixa diz ao presidente de camara "nao e uma casinha de software de prefeitura, e uma empresa de TI que tambem atende farmaceutica suica", que e precisamente o tom institucional pedido.

## B2B SaaS (referencia de rotulo acima da faixa)

### Deel

<https://www.deel.com/>

**O que funciona:** A faixa (`logo-stripe-standard-wrapper`) e precedida por um rotulo em `<p>` com as classes `text-tertiary overline-small-semibold text-center w-full uppercase` e o texto "Trusted by 40,000+ companies from startups to enterprise". Ou seja: caixa alta, corpo pequeno, peso semibold, cor terciaria (cinza claro), centralizado, ocupando a largura toda. A faixa fica dentro de um `group` com transicao de opacidade no hover.

**O que aproveitar:** O tratamento tipografico do rotulo. Nao e um `<h2>` grande: e uma overline discreta em caixa alta e cinza que NAO compete com a logo do cliente nem com o titulo da secao seguinte. Esse e o registro certo para prova social, que deve ser lida perifericamente. Versao Intelecto: "ATENDEMOS 8 CAMARAS, 2 PREFEITURAS E 1 CONSORCIO INTERMUNICIPAL" em 12px, uppercase, letter-spacing folgado, na cor slate #6B7280 da paleta existente.

**Por que é relevante:** Resolve na pratica o risco de a faixa de logos virar uma segunda manchete e roubar a atencao do gatilho comercial (fim do E-mail Legislativo em maio/2027), que precisa ser a mensagem dominante da pagina.

## B2B pagamentos (referencia de celula de tamanho igual)

### Stripe (pagina de clientes)

<https://stripe.com/customers>

**O que funciona:** Apresentacao em carrossel horizontal com controles de navegacao, logos em escala de cinza, entre 15 e 20 marcas visiveis (Shopify, Wayfair, Google, Peloton, Instacart, Amazon, Notion, Figma). O ponto central: cada logo fica numa CELULA DE TAMANHO IGUAL dentro do carrossel, entao logo quadrada, logo horizontal longa e logo com simbolo mais texto ocupam o mesmo retangulo, com o respiro ficando por conta da celula e nao do arquivo.

**O que aproveitar:** O modelo mental da celula: pense na faixa como uma linha de caixas identicas onde a logo e CENTRADA e limitada por `max-height` e `max-width` da caixa, em vez de pensar em uma fila de imagens de larguras variadas. Isso e o que impede o efeito serrilhado onde uma logo larga parece tres vezes mais importante que a vizinha.

**Por que é relevante:** Diagnostico direto do defeito mais comum em faixa de brasoes brasileira: brasoes redondos ficam pequenos demais e brasoes com faixa de texto horizontal (comuns em camaras) ficam gigantes. A celula fixa com centralizacao resolve, mesmo que a Intelecto opte por grade estatica em vez de carrossel.

## govtech internacional (contra exemplo instrutivo: numero no lugar da logo)

### Accela

<https://www.accela.com/>

**O que funciona:** Logo abaixo do hero existe uma secao "Trusted by" que NAO tem logo nenhuma. Sao quatro numeros em linha horizontal: 900+ agencias governamentais, 50%+ das maiores cidades e condados dos EUA, 300M+ de cidadaos atendidos, 25+ anos em GovTech. Os nomes de clientes aparecem so mais abaixo, dentro de depoimentos atribuidos com cidade (Rochester MN, Charlotte NC, Citrus County FL, McAllen TX, Cabarrus County NC, Manatee County FL).

**O que aproveitar:** O plano B legitimo: quando as logos disponiveis sao poucas, feias ou de uso nao autorizado, a faixa numerica com quatro metricas cumpre a mesma funcao de prova sem exibir marca de terceiro. E a separacao de papeis: numero prova escala, depoimento com cidade prova especificidade, e nenhum dos dois precisa da logo.

**Por que é relevante:** Cobre um risco juridico real da Intelecto: usar brasao oficial de camara municipal em material comercial pede autorizacao, porque brasao e simbolo oficial do municipio e nao marca comercial. Se alguma camara nao autorizar, a Intelecto tem aqui um formato pronto que nao perde forca: "14 orgaos publicos atendidos, 10+ anos, portais no ar sem interrupcao".

## govtech internacional (segundo contra exemplo: estatistica com icone)

### CivicPlus

<https://www.civicplus.com/>

**O que funciona:** Sob a manchete "The Best-Run Local Governments Run on CivicPlus Technology", a prova social e feita com icones abstratos em cinza pareados a numeros: 13K+ clientes de governo local, 100K+ servidores usuarios, 340M+ residentes atendidos, 25 anos de experiencia, 98% de retencao de clientes. Nenhuma logo de cidade aparece em faixa.

**O que aproveitar:** A metrica de RETENCAO (98%) como item da faixa. Para comprador publico, que teme trocar de fornecedor no meio de um contrato e ter que justificar isso ao Tribunal de Contas, permanencia vale mais que crescimento. A Intelecto tem esse numero de graca e nao usa: carteira de camaras mantida ha muitos anos, com clientes desde 2019.

**Por que é relevante:** O medo central do diretor administrativo de camara nao e "sera que e bom", e "sera que some no ano que vem e eu fico na mao no meio do mandato". Numero de retencao e tempo de casa atacam essa objecao de frente, e cabem na mesma faixa das logos.

## DPO as a Service (Brasil) / pagina de servico

### Infolock (DPO as a Service)

<https://infolock.com.br/dpo/>

**O que funciona:** E a melhor pagina de servico de DPO em portugues que carreguei. Headline em duas partes, com a segunda metade destacada em italico: 'A LGPD exige DPO. Sua empresa ja tem um encarregado de dados atuante?'. O subtitulo mata a objecao de preco antes dela existir: 'Contratar um DPO interno e caro, complexo e raramente a melhor opcao para medias empresas. O DPO as a Service da Infolock resolve isso com DPO certificada, atuante e por uma fracao do custo.' A pagina desce em 14 blocos numa escada logica: (1) 4 icones de entregavel, (2) 4 blocos de problema, (3) faixa estatistica com '85% das empresas brasileiras' e '1/3 do custo', (4) secao 'O Risco Real' com cenarios praticos, (5) comparacao problema vs solucao lado a lado, (6) 'Como Funciona' em 6 etapas numeradas, (7) foto e credencial da CEO certificada, (8) faixa 4+ anos / 100+ empresas / 5 certificacoes ISO, (9) FAQ accordion de 6 perguntas, (10) CTA final duplo. Usa medo com precisao cirurgica, sem citar valor de multa: 'Nao ter encarregado de dados nomeado ja e descumprimento da lei' e 'Voce pode continuar sem DPO e torcer para que a ANPD nao bata a porta'. Isso e afirmacao verificavel, nao chantagem.

**O que aproveitar:** Copiar inteiro o esqueleto de 6 etapas numeradas para a pagina /lgpd do Conformis, trocando o conteudo: (1) Nomeacao e publicacao do Encarregado no portal da Camara, (2) Canal de atendimento ao titular com prazo controlado, (3) Interface com a ANPD e com o Tribunal de Contas, (4) Treinamento de vereadores e servidores, (5) ROPA e relatorios periodicos, (6) Evidencia para auditoria. Cada etapa vira um card numerado grande (numero em navy #1E3A5F a 48px, titulo a 20px, uma frase de 15 palavras). Roubar tambem o padrao de headline em duas partes: afirmacao da lei + pergunta ao gestor. Para camara: 'A LGPD vale para a Camara desde 2021. A sua ja publicou o Encarregado?'. E roubar o bloco 'O Risco Real' em vez de bloco de multa: descrever o cenario concreto (pedido de titular chega por e-mail, ninguem sabe responder, prazo de 15 dias corre).

**Por que é relevante:** E exatamente o mesmo produto que a Intelecto vende (Conformis + DPO terceirizado) para um comprador igualmente nao tecnico, e resolve o problema central do briefing: explicar servico intangivel sem juridiques. Nenhum outro site que carreguei traduz a obrigacao legal em 6 entregaveis tangiveis com essa clareza.

## DPO as a Service (Brasil) / lider de mercado

### DPOnet

<https://dponet.com.br/>

**O que funciona:** E o maior player brasileiro do nicho e joga toda a ficha em numeros de escala logo abaixo do hero: '+5 Mil clientes satisfeitos', '+97% satisfacao no suporte', '+14 Mil certificacoes emitidas'. Exibe ISO 27001 e ISO 27701 como selos graficos, alem de GPTW e um 'selo de canal de comunicacao de titulares' que o cliente pode colar no proprio site. A secao mais inteligente da pagina chama-se 'LGPD descomplicada' e opoe duas colunas: o que as pessoas acham que e adequacao a LGPD versus o que adequacao realmente e. Tem uma secao inteira 'DPOnet vs Consultoria', que ataca frontalmente o modelo de escritorio de advocacia por hora. FAQ extenso no fim. Notavel pelo que NAO faz: nao cita valor de multa em lugar nenhum, so 'protecao contra multas, penalidades e perdas de contratos'.

**O que aproveitar:** Duas coisas. Primeira, o bloco de duas colunas 'o que voce acha que e' vs 'o que realmente e': na pagina da Intelecto vira 'Adequacao a LGPD nao e um documento PDF assinado uma vez. E um processo continuo com Encarregado nomeado, canal de titular funcionando e evidencia para o TCE'. Isso educa o presidente de camara em 10 segundos e desqualifica o concorrente que vende PDF. Segunda, o selo entregavel: a Intelecto pode entregar ao cliente um selo 'Camara em conformidade LGPD, monitorada por Intelecto Solutions' com link para o canal de titular, que aparece no rodape do portal da camara. Isso e marketing recorrente gratuito e prova social visivel para as camaras vizinhas.

**Por que é relevante:** E o benchmark direto de posicionamento no Brasil e prova que da para vender LGPD sem citar R$ 50 milhoes de multa. Tambem revela a lacuna que a Intelecto ocupa: a DPOnet lista saude, e-commerce, industria, cartorios e SEBRAE como segmentos, e nao menciona prefeitura nem camara em lugar nenhum. O setor publico municipal esta descoberto pelo lider.

## DPO as a Service (Brasil) / operacao pequena e credivel

### DPO Oficial

<https://dpooficial.com.br/>

**O que funciona:** E o exemplo de como uma operacao pequena constroi autoridade sem inventar numero. Hero minimalista: titulo 'DPO as a Service' e subtitulo de uma linha 'Total autonomia, seguranca e independencia para o seu negocio'. O unico numero de escala e '5+ Anos de Experiencia', honesto e suficiente. A confianca e sustentada por duas coisas: a pilha de certificacoes nomeadas (EXIN DPO, IAPP, ISO 27701, que sao credenciais de pessoa fisica e nao de plataforma) e cinco depoimentos com empresa nominal e identificavel (IPOG, Instituto Cavazanna, Racional Engenharia, Associated Spring, VIP MED). A ordem das secoes e didatica e nessa sequencia: 'O que e um DPO as a Service?' vem ANTES de 'Quem Somos', ou seja, explica a categoria antes de se vender. Cita o artigo 41 da LGPD como fundamento, mas nao cita valor de multa.

**O que aproveitar:** A sequencia 'explique a categoria antes de se apresentar'. Na pagina de LGPD da Intelecto, o primeiro bloco depois do hero deve ser 'O que a lei exige de uma Camara Municipal', em linguagem de vereador, e so depois 'Quem e a Intelecto'. Roubar tambem a substituicao de numero de escala por profundidade: a Intelecto nao tem 5 mil clientes, mas tem '10+ anos' e '8 camaras municipais, 2 prefeituras, 1 consorcio intermunicipal, autarquias de agua e esgoto e um instituto de previdencia'. Listar por tipo de orgao vale mais que um numero redondo. E copiar o padrao de depoimento nominal: nome, cargo e orgao, nunca 'cliente satisfeito'.

**Por que é relevante:** E o espelho estrutural mais proximo da Intelecto: uma operacao enxuta que vende servico juridico-tecnico intangivel e precisa parecer solida sem forjar escala. Mostra que credencial nomeada mais cliente nomeado substituem contador de clientes.

## DPO as a Service (Brasil) / preco e diagnostico

### Legal Comply (DPO as a Service)

<https://www.legalcomply.com.br/dpo-as-a-service/>

**O que funciona:** E a unica das brasileiras que carreguei que publica preco: 'Planos a partir de R$350 mensal', num bloco de pricing no meio da pagina, depois de listar as 9 atividades incluidas no plano mensal (governanca, atualizacao de programas, avaliacao de riscos, respostas a solicitacoes de titulares, mediacao, atendimento ilimitado, materiais educativos, treinamentos). A ordem importa: entregavel primeiro, preco depois, entao o numero chega ja ancorado em 9 itens. Oferece dois CTAs de temperatura diferente: 'Quero contratar' (alto compromisso, ancora para a secao de projeto) e 'Quero um diagnostico gratuito' (baixo compromisso, formulario). Cita sancoes da ANPD de forma sobria: 'A falta dela pode causar a aplicacao de sancoes'.

**O que aproveitar:** O CTA duplo de temperaturas diferentes, que e a lacuna mais provavel do site da Intelecto. O botao quente e 'Solicitar proposta'; o frio precisa ser algo que um diretor administrativo clica sem pedir autorizacao ao presidente, tipo 'Diagnostico gratuito de LGPD da sua Camara' (checklist de 10 pontos: Encarregado publicado? canal de titular no portal? politica de privacidade? aviso de cookies?). Isso captura lead sem exigir decisao de compra e alimenta a prospeccao. Roubar tambem a ordem entregavel antes de preco: se a Intelecto publicar valor, publicar depois da lista de 9 ou 10 itens, nunca antes.

**Por que é relevante:** Resolve o atrito especifico do comprador publico: o servidor que pesquisa precisa levar um numero e um escopo para dentro do processo licitatorio (Lei 14.133) antes de conseguir marcar reuniao. Escopo detalhado mais faixa de preco publicada e o que permite ele montar o termo de referencia.

## Privacidade SaaS (EUA) / tom antimedo e garantia

### Osano

<https://www.osano.com/>

**O que funciona:** Faz a coisa mais dificil do nicho: vende compliance sem vender panico. Headline 'Stop Sweating Privacy. We've Got Your Back.' fala com o alivio, nao com o medo. E entao ancora com o elemento mais forte que vi em toda a pesquisa, uma garantia financeira nomeada de $500,000 'No Fines, No Penalties' Guarantee, colocada dentro do proprio hero. Logo abaixo, antes de qualquer secao de produto, vem a barra de reputacao: '4.5/5 based on 175+ reviews' com os selos G2, Capterra e GetApp. Os numeros de contexto regulatorio aparecem depois, em secao propria, e sao especificos e datados, nao genericos: '21 distinct U.S. privacy laws' em 2026, '130M US consumers now have the right to file a DSAR', 'total noncompliance fines reached $1 billion' em 2024. Ordem das secoes: hero com garantia, ratings, tres switchbacks de produto, grid de 7 solucoes, 25+ logos, depoimentos, 'The Struggle is Real', 'The Osano Way', recursos e CTA.

**O que aproveitar:** O par 'alivio no hero, risco no meio'. O hero da pagina LGPD da Intelecto deve prometer sossego ao presidente ('A Camara em conformidade com a LGPD, sem voce virar especialista em lei'), e o dado assustador entra depois, ja com a solucao a vista. E roubar o mecanismo da garantia, adaptado ao que uma empresa de uma pessoa pode honrar: nao garantir ausencia de multa, mas garantir SLA ('respondemos qualquer pedido de titular em ate 5 dias uteis, ou o mes e gratuito') ou garantir defesa ('se a ANPD ou o TCE questionar, produzimos toda a documentacao de evidencia sem custo adicional'). Uma promessa com consequencia financeira, mesmo pequena, vale mais que dez adjetivos.

**Por que é relevante:** O comprador da Intelecto e um politico que odeia se sentir culpado e um controlador interno que teme auditoria. Osano e o unico site do conjunto que resolve os dois ao mesmo tempo, e ensina a usar prazo e risco regulatorio com dado especifico e datado, que e exatamente como o gatilho de maio/2027 deve ser tratado.

## Compliance automation (EUA) / prova social quantificada

### Vanta

<https://www.vanta.com/>

**O que funciona:** Headline de tres palavras, 'Trust is everything', com subhead que entrega numero e mecanismo numa frase so: 'Earn and prove it with 35+ compliance frameworks, automated and continuously monitored.' Logo abaixo do hero vem um carrossel de logos com '16,000+ customers' (Ramp, Snowflake, GitHub, Duolingo, Intercom). Mas o movimento decisivo e o seguinte: em vez de deixar os logos mudos, a secao imediatamente posterior atribui um resultado a cada cliente, com o numero grande e o logo pequeno: 'Eliminated 10 spreadsheets' (Ramp), '2,000 hrs. saved annually' (Snowflake), '20% faster deal cycles' (Clay), 'Automated 93% of questionnaires', 'Saved hundreds of thousands' (Duolingo). Depois vem grid de 8 certificacoes (SOC 2, ISO 27001, GDPR, HIPAA, HITRUST, ISO 42001, FedRAMP, DORA), segmentacao por porte (Startup / Mid-market / Enterprise) e o selo Forrester Wave.

**O que aproveitar:** A transformacao de logo mudo em logo com resultado. A Intelecto tem 8 camaras, 2 prefeituras, CONSISP, SAE Ituiutaba, SAAE Pedreira, DMAAE Ouro Fino, CAPIVARIPREV e TRB Pharma. Em vez de uma faixa cinza de logos, montar 4 cards com numero grande em azure #2563EB acima do nome do orgao: 'Nota maxima na PNTP 2026' (camara X), '11 anos de operacao continua' (TRB Pharma), 'Migracao de e-mail sem 1 hora de indisponibilidade' (camara Y), 'Encarregado publicado em 15 dias' (prefeitura Z). Roubar tambem a segmentacao em tres colunas, trocando porte por tipo de orgao: Camara Municipal / Prefeitura e autarquia / Empresa privada, cada uma com o proprio CTA.

**Por que é relevante:** Resolve o problema de a Intelecto ter prova social forte e subutilizada. O carrossel de logos pedido no briefing so funciona se cada logo carregar um resultado; caso contrario e decoracao. Vanta e o melhor exemplo carregado desse padrao.

## Compliance automation (EUA) / metrica por secao

### Drata

<https://www.drata.com/>

**O que funciona:** Barra de confianca compacta logo abaixo do hero: 'Trusted By 8,500+ Global Customers' mais '4.8 / 5.0 G2 Reviews' mais um grid de aproximadamente 24 logos. O padrao mais util e estrutural: cada uma das secoes de produto carrega UMA metrica gigante como assinatura, sempre no mesmo formato numero grande seguido de frase curta. 'Enterprise GRC' vem com '3x Increased productivity with automated monitoring controls'; 'Compliance Automation' com '75% Reduced its SOC 2 audit duration'; 'Trust Center' com '10x faster turnaround on trust documentation'; 'Questionnaire Automation' com '375 Saves 375+ hours per year'. Frameworks aparecem em grid de logos (SOC 2, ISO 27001, ISO 42001, GDPR, HIPAA, PCI DSS) com um '+ More'. Depoimentos sao rotulados como 'Flight Reports', um nome proprio para uma secao banal.

**O que aproveitar:** A regra de uma metrica por secao. Cada bloco de servico do site da Intelecto (transparencia, LGPD, hospedagem, sistemas) deve terminar com um numero unico em corpo grande, nao com um paragrafo. Exemplos honestos e verificaveis: '8 camaras municipais no ar', '11 anos sem trocar de fornecedor (TRB Pharma)', '482 camaras precisam migrar ate maio/2027', '~83 criterios da PNTP cobertos'. Roubar tambem o grid de normas como logos: PNTP, LGPD, Lei 14.133, Lei de Acesso a Informacao e e-MAG viram um grid de 6 selos, que e a versao brasileira e institucional do grid de frameworks e comunica competencia regulatoria em um relance.

**Por que é relevante:** O grid de normas resolve diretamente a necessidade do controlador interno que precisa justificar a contratacao: ele bate o olho e ve que o fornecedor conhece o vocabulario normativo dele. E o antidoto ao 'parece agencia de marketing'.

## Privacidade enterprise (EUA) / autoridade institucional

### OneTrust

<https://www.onetrust.com/>

**O que funciona:** E o mais institucional do conjunto e o mais util como referencia de TOM, nao de layout. Hero nomeia a plataforma com marca registrada: 'The OneTrust AI-Ready Governance Platform(TM)' com subhead 'Make Governance Work at the Speed and Scale of AI'. Logo abaixo, tres proposicoes de valor em colunas iguais, cada uma com verbo no infinitivo e uma frase de apoio ('Unlock Responsible Innovation', 'Accelerate Better Decisions', 'Stay Ahead of Emerging Risk'). A secao de clientes usa uma frase de credibilidade em vez de contador: 'More than half of the Fortune 500 choose OneTrust', com Aetna, Adobe, Samsung e Chewy. Os selos de analista sao tratados como conteudo de primeira classe, com citacao literal: 'Visionary in the 2026 Magic Quadrant(TM) for AI Governance Platforms' (Gartner) e 'Leader in The Forrester Wave(TM) for Privacy Management Software, Q4 2025' (Forrester). Os 6 modulos de produto vem numerados e nomeados de forma seca: AI Governance, Consent & Preferences, Data Use Governance, Privacy Automation, Tech Risk & Compliance, Third-Party Management.

**O que aproveitar:** Duas mecanicas. Primeira, a frase de credibilidade no lugar do contador: a Intelecto nao tem numero grande, entao usa qualificacao ('8 das camaras municipais que atendemos passaram a PNTP com o Mirante' ou 'A mesma infraestrutura que sustenta a operacao brasileira de uma farmaceutica suica ha 11 anos'). Segunda, o tratamento de terceiro validador como conteudo: como nao existe Gartner do setor publico municipal, o equivalente e citar a fonte normativa com o nome exato e o ano, do jeito que OneTrust cita Q4 2025. Blocos tipo 'Portal Mirante atende aos criterios da Cartilha PNTP 2026 (Programa Nacional de Transparencia Publica, Atricon)' funcionam como selo de analista para esse publico.

**Por que é relevante:** E a calibragem exata do tom pedido no briefing: confiabilidade institucional e competencia tecnica de verdade, sem virar startup. Nomear modulos de forma seca e citar a norma com ano e data e o oposto de agencia de marketing generica.

## Privacidade SaaS (EUA) / barra de metricas e quadrante

### Transcend

<https://transcend.io/>

**O que funciona:** Hero em duas frases que criam tensao antes de oferecer solucao: 'Your AI initiatives are ready. Your data is not.' O subhead se posiciona por exclusao com uma pergunta que o comprador ja se faz: 'the only real-time data governance and decision layer that answers Can I use this data?'. Imediatamente abaixo do hero vem uma barra de 4 metricas em linha, todas com numero grande e rotulo pequeno: $1.9B Revenue Unlocked, 174B Automated Data Decisions, 418M Operations & Agents Governed, 99% Addressable Audience Per Purpose. Os modulos sao renomeados como beneficios com verbo, nao como funcionalidades: 'Govern as Code', 'Activate Growth', 'Scale with Confidence'. Mais adiante ha um diagrama de arquitetura e um quadrante comparativo nomeando OneTrust, Securiti, BigID, DataGrail e Ketch, com o eixo escolhido de forma a favorecer a Transcend ('runtime data decision infrastructure' contra 'documentation-only').

**O que aproveitar:** O hero de duas frases em tensao, que e o formato perfeito para o gatilho de maio/2027 sem apelacao: 'Sua Camara ja tem portal. O e-mail institucional dela deixa de existir em maio de 2027.' Ou para LGPD: 'A LGPD vale para a Camara desde 2021. A maioria ainda nao nomeou o Encarregado.' E roubar a barra de 4 metricas em linha logo abaixo do hero da home, com dados reais e verificaveis da Intelecto: '10+ anos', '8 camaras municipais', '482 camaras com prazo ate mai/2027', '~83 criterios PNTP'. Nao copiar o quadrante nomeando concorrentes (Instar), que num mercado municipal pequeno pega mal e cria atrito comercial.

**Por que é relevante:** E o exemplo mais limpo de usar prazo e mudanca regulatoria como abertura sem soar alarmista: apenas afirma o fato e deixa a consequencia implicita. E exatamente o registro que o briefing pede para o gatilho do fim do E-mail Legislativo.

## DPO externo + compliance (Alemanha) / experts in the loop

### DataGuard

<https://www.dataguard.com/>

**O que funciona:** Nasceu como DPO externo europeu e hoje vende '4,000 organizations across 50+ countries' e '1.5 million total hours' de experiencia da equipe, que e uma metrica de PROFUNDIDADE em vez de escala, muito reaproveitavel por operacao pequena. O posicionamento central e uma frase de quatro palavras que resolve a tensao entre software e servico: 'AI-powered automation with experts-in-the-loop', repetida no subhead do hero. Logo abaixo do hero vem quatro cards de beneficio quantificados: 'Automate up to 40% of tasks', 'Achieve certification 75% faster', gestao de risco e 'Access expert help when needed / Connect with certified experts for help on demand'. Depois, uma secao de abordagem em 4 passos. Exibe cinco badges de analista (lider em Data Privacy Management em varias regioes, mais Momentum Leader) numa faixa propria. Reivindica '100% success rate' nas certificacoes.

**O que aproveitar:** O conceito 'experts in the loop' traduzido: 'plataforma propria, operada por gente que voce conhece pelo nome'. Esse e literalmente o modelo da Intelecto (Conformis + Luiz), e e o diferencial contra a DPOnet, que e plataforma escalada e impessoal. Roubar tambem a metrica de profundidade em vez de escala: em vez de '1.5 milhao de horas', usar '10+ anos e mais de uma centena de processos de transparencia e adequacao conduzidos', ou horas acumuladas de operacao dos portais. E roubar os 4 cards quantificados imediatamente abaixo do hero, que sao a versao compacta da barra de metricas e cabem bem numa home one-page.

**Por que é relevante:** E a empresa desta lista cuja essencia mais se parece com a da Intelecto: servico humano especializado empacotado em plataforma, vendido a organizacao que nao quer contratar especialista interno. Um presidente de camara nao vai contratar um DPO CLT, e essa e a mesma frase que a DataGuard construiu o negocio inteiro em cima.

## Governanca de dados enterprise (EUA) / conceito nomeado

### Securiti

<https://securiti.ai/>

**O que funciona:** Toda a arquitetura da pagina gira em torno de UM conceito proprietario nomeado e registrado, o 'DataAI Command Graph(TM)', apresentado como o nucleo comum que sustenta todo o resto. O hero e 'Your DataAI Command Platform(TM)'. Em seguida, quatro pilares em verbos curtos: Secure, Build, Govern, Automate. A pagina se segmenta por EQUIPE e nao por produto, em quatro blocos (times de seguranca, times construtores, times de privacidade, times de governanca), o que faz cada visitante achar rapido o paragrafo dele. A vitrine de premios reune Frost & Sullivan, Gartner Customers Choice, Forrester Wave, IDC Worldwide Leader, G2 e IAPP Innovation Award numa faixa unica. Numeros de credibilidade tecnica: '1000+ pre-built integrations'.

**O que aproveitar:** Nomear a metodologia. Hoje a Intelecto vende 'adequacao LGPD', que e commodity; nomeada vira produto proprietario, do mesmo jeito que Mirante e Conformis ja sao. Criar e registrar visualmente algo como 'Ciclo Conformis' com 4 fases em verbos curtos (Mapear, Nomear, Publicar, Monitorar) e usar esse mesmo diagrama de 4 fases na pagina de LGPD, na proposta comercial e no PDF. Roubar tambem a segmentacao por perfil de leitor em vez de por produto: a home ganha tres portas nomeadas pelo cargo do visitante (Presidente da Camara / Diretor administrativo e controlador interno / Gestor de TI de empresa privada), que sao exatamente os tres publicos do briefing.

**Por que é relevante:** A segmentacao por quem le, e nao por o que vendemos, e a solucao estrutural para o problema de a Intelecto ter tres publicos muito diferentes num one-page so. E o conceito nomeado e o que separa fornecedor de servico de fornecedor de produto na percepcao de quem vai montar um termo de referencia.

## Consentimento e privacidade (Franca) / enquadramento do problema

### Didomi

<https://www.didomi.io/>

**O que funciona:** Reenquadra compliance como ganho e nao como custo. O hero e 'The privacy platform that powers better data', com subhead que junta obrigacao e beneficio na mesma frase ('capturing user consent and preferences, activating more first-party data and helping you stay ahead of every regulation') e a linha 'Trusted by +2,000 clients worldwide'. O bloco seguinte e o melhor artificio visual da pagina: uma comparacao lado a lado rotulada 'Your data pipeline today' versus 'with Didomi', ancorada num numero que doi, '45% of your collected data is effectively lost'. Os depoimentos trazem delta numerico em vez de elogio ('+12% consent rate increase', '+12% traffic recovered'). O rodape de confianca empilha selos heterogeneos: ISO, Google Certified CMP Partner, IAPP Bronze Member, Meta Business Partner, G2, Capterra.

**O que aproveitar:** O diagrama 'hoje' vs 'com a gente' em duas colunas, que e o formato mais eficiente ja visto para explicar servico intangivel a leigo. Para a Intelecto: coluna esquerda 'Hoje na sua Camara' (e-mail pessoal @gmail respondendo por ato oficial, nenhum Encarregado publicado, pedido de titular sem prazo controlado, portal sem os itens da PNTP) e coluna direita 'Com a Intelecto' (e-mail no dominio oficial .leg.br, Encarregado publicado e ativo, canal de titular com prazo, portal auditado). Colocar esse bloco logo abaixo do hero de cada pagina de servico, e no da LGPD principalmente. Roubar tambem o empilhamento de selos heterogeneos: parceiro do Interlegis, certificacoes da equipe, CNPJ e tempo de mercado, num rodape de credibilidade.

**Por que é relevante:** Um presidente de camara nao entende 'governanca de dados', mas entende duas colunas com o antes e o depois da propria casa dele. E o mecanismo mais barato de traduzir servico juridico intangivel em imagem concreta, sem uma linha de juridiques.

## design system de governo (linguagem visual que o comprador ja reconhece)

### gov.br Design System (Padrao Digital de Governo) - Fundamentos Visuais

<https://www.gov.br/ds/fundamentos-visuais/tipografia>

**O que funciona:** E uma SPA, entao abri no navegador e li o conteudo renderizado. Tipografia: uma unica familia (Rawline), com fallback declarado em cascata para Raleway e depois sans-serif. Fonte base 14px, escala Minor Third (1,2) com tokens nomeados: --font-size-scale-base 14px, up-01 16,8px, up-02 20,16px, up-03 24,19px, up-04 29,03px, up-05 34,84px, up-06 41,8px, up-07 50,16px, e down-01/02/03 (11,67 / 9,72 / 8,10px). Pesos 100 a 900 com token por peso. Na pagina de Cores o DS declara conformidade minima nivel AA (4,5:1 texto normal, 3:1 para texto grande, definido como 24px ou 19px em negrito), usa #333333 para texto em fundo claro (nao preto puro) e branco em fundo escuro, e afirma que o sistema de gradacao e as familias de cor foram adaptados do U.S. Web Design System. Inspecionando o portal gov.br ao vivo, os tokens reais sao --color-primary-default: #1351b4, --interactive: #1351b4, --font-family-base: Rawline, Raleway, sans-serif, --font-size-scale-base: 14px, e o body renderiza a 16px.

**O que aproveitar:** Tres coisas concretas. (1) O azul institucional #1351B4: ele tem 7,3:1 de contraste com branco (passa ate AAA) e e a cor que presidente de camara e controlador associam a 'governo'. O azure atual da Intelecto (#2563EB) tem so 5,17:1 e puxa para 'startup'. Recomendo manter #1E3A5F como navy de texto/cabecalho (11,5:1 no branco) e trocar o azul de acao para #1351B4, guardando #2563EB apenas para hover/foco. (2) A arquitetura de tokens em escala fixa: definir --step--1 ate --step-6 em :root e nunca escrever font-size solto no CSS. Como o publico e mais velho, usar base 16px ou 17px em vez dos 14px do gov.br, mas com a mesma razao. (3) Texto corpo em #333333 ou #374151 em vez de preto puro, exatamente como o DS faz.

**Por que é relevante:** O comprador (presidente de camara, controlador interno) passa o dia dentro de sistemas gov.br, SAPL e Portal Modelo. Um site que fala a mesma lingua cromatica e tipografica desses sistemas e lido como 'do ramo' antes de qualquer texto ser lido. E o unico jeito de parecer institucional sem parecer prefeitura dos anos 2000: mesma familia visual, execucao moderna.

## exigencia legal brasileira de acessibilidade

### eMAG - Modelo de Acessibilidade em Governo Eletronico

<https://emag.governoeletronico.gov.br/>

**O que funciona:** Versao vigente e a 3.1 (abril/2014), baseada na WCAG 2.0. A Portaria n. 3 de 7 de maio de 2007 institucionalizou o eMAG no ambito do SISP e tornou sua observancia obrigatoria em sitios e portais do governo brasileiro. Exige elementos de pagina bem especificos: barra de acessibilidade no topo com os links 'Ir para o conteudo [1]', 'Ir para o menu [2]' e 'Ir para a busca [3]' usando accesskey 1, 2 e 3; toda funcao construida com script tem que ser operavel por teclado; hierarquia semantica de cabecalhos; alt em imagem nao decorativa; e uma pagina de acessibilidade com o mapa de atalhos.

**O que aproveitar:** Implementar a barra de acessibilidade de verdade (nao decorativa) no topo de todas as paginas, com skip links reais apontando para #conteudo, #menu e #busca, mais accesskey='1|2|3', mais um controle de alto contraste e de aumentar/diminuir fonte que persista em localStorage. Custa umas 40 linhas de CSS e 20 de JS, roda sem framework, e vira argumento de venda: a Intelecto entrega em eMAG e o cliente compra de quem ja entende de eMAG. O proprio site institucional deve ser a prova.

**Por que é relevante:** Duas funcoes ao mesmo tempo. Primeira: o publico e orgao publico, e acessibilidade digital nao e opcional para eles (eMAG obrigatorio no SISP, LBI 13.146/2015 art. 63 para sites em geral). Segunda: o Mirante e vendido como portal de transparencia que atende PNTP, e PNTP pontua acessibilidade. Se o site da propria fornecedora nao tiver barra de acessibilidade, o controlador interno percebe na hora.

## design system de governo (padrao ouro de clareza e foco acessivel)

### GOV.UK Design System - Colour e Focus states

<https://design-system.service.gov.uk/styles/colour/>

**O que funciona:** Mantido pelo Government Digital Service. Paleta minuscula e nomeada por funcao, nao por matiz: texto #0b0c0c, link #1a65a6, botao/marca #1d70b8, erro #ca3535, e foco #ffdd00 com a instrucao explicita de que essa cor amarela so pode ser usada para indicar o elemento em foco. A pagina de focus states explica o motivo do desenho: 'a yellow has a high contrast with dark backgrounds and the thick black border has a high contrast against light backgrounds', ou seja, amarelo com borda inferior preta grossa funciona sobre qualquer fundo usado no GOV.UK e por isso atende o criterio 1.4.11 Non-text contrast nivel AA. A pagina de cor manda expressamente atender o SC 1.4.3 Contrast (minimum) nivel AA da WCAG 2.2. Estrutura do site: Styles, Components, Patterns, e cada componente vem com orientacao de acessibilidade e de pesquisa com usuario.

**O que aproveitar:** O estilo de foco. Em vez do outline azul padrao do browser (que some sobre azul e sobre navy), definir :focus-visible com fundo amarelo, texto preto e box-shadow de 0 -2px do amarelo mais 0 4px do preto. Fica visivel sobre o navy do header, sobre o azure dos botoes e sobre o branco do corpo, com uma unica regra. Roubar tambem o vocabulario da paleta: nomear tokens por papel (--cor-texto, --cor-link, --cor-foco, --cor-erro) em vez de --azul-500, porque isso e o que torna o dark mode trivial depois.

**Por que é relevante:** E o exemplo mais maduro no mundo de site publico que e ao mesmo tempo simples e serio, sem parecer datado. Como o site da Intelecto e HTML/CSS estatico sem framework, esse tipo de sistema (paleta de 6 cores, componentes de formulario, foco padronizado) e copiavel em uma tarde, ao contrario de design systems de produto SaaS.

## design system de governo (componentes e padroes de pagina)

### U.S. Web Design System (USWDS)

<https://designsystem.digital.gov/>

**O que funciona:** Sistema federal americano para construir sites de governo acessiveis e mobile-first. Traz mais de 50 componentes (botoes, formularios, modais, tabelas, banner de identificacao de site oficial, breadcrumb, accordion), design tokens, utilitarios e templates de pagina inteira. Alem dos componentes, documenta patterns de tarefa (perfil do usuario, formularios complexos, selecao de idioma) e uma secao dedicada de acessibilidade por componente. E a base declarada do sistema de cores do gov.br.

**O que aproveitar:** Os templates de pagina e o padrao de 'documentation page' com navegacao lateral fixa e ancoras. Para as 4 paginas de servico (transparencia, LGPD, hospedagem, sistemas) o layout certo nao e landing page de marketing: e pagina de documentacao, com sumario lateral sticky em desktop, secoes ancoradas e um bloco final de 'como contratar'. Roubar tambem a ideia do banner oficial no topo: uma faixa fina informando CNPJ e natureza da empresa cumpre o mesmo papel de identidade verificavel.

**Por que é relevante:** O comprador publico le documento, nao anuncio. Ele vai querer imprimir a pagina, colar trecho em processo administrativo e mostrar para o juridico. Estrutura de documentacao com ancoras e exatamente o formato que sobrevive a esse uso, e diferencia a Intelecto de agencia de marketing.

## norma tecnica de acessibilidade

### W3C - Web Content Accessibility Guidelines (WCAG) 2.2

<https://www.w3.org/TR/WCAG22/>

**O que funciona:** Recomendacao W3C. Introduz 9 criterios novos em relacao a 2.1: 2.4.11 Focus Not Obscured (Minimum) AA, 2.4.12 Focus Not Obscured (Enhanced) AAA, 2.4.13 Focus Appearance AAA, 2.5.7 Dragging Movements AA, 2.5.8 Target Size (Minimum) AA, 3.2.6 Consistent Help A, 3.3.7 Redundant Entry A, 3.3.8 Accessible Authentication (Minimum) AA, 3.3.9 Accessible Authentication (Enhanced) AAA. Remove o criterio 4.1.1 Parsing. Verifiquei tambem o Understanding do 2.5.8: alvo minimo de 24 por 24 pixels CSS, nivel AA, com cinco excecoes (spacing, equivalent, inline, user agent control, essential).

**O que aproveitar:** Tres regras que mudam CSS de verdade neste site. (1) Todo alvo clicavel com no minimo 24x24px de area (recomendo 44x44 nos botoes de acao e itens de menu mobile); os icones de rede social do rodape e os controles do carrossel de logos sao o lugar onde isso costuma falhar. (2) 2.4.11 Focus Not Obscured: se o header for sticky, o elemento focado no teclado nao pode ficar escondido atras dele, o que se resolve com scroll-margin-top igual a altura do header em todo alvo de ancora. (3) 3.2.6 Consistent Help: o mesmo canal de contato (WhatsApp/telefone) tem que aparecer na mesma posicao em todas as 5 paginas.

**Por que é relevante:** O eMAG 3.1 e de 2014 e ainda aponta para WCAG 2.0. Entregar WCAG 2.2 AA e superar a exigencia formal e virar argumento tecnico verificavel na proposta. Como o comprador teme auditoria do Tribunal de Contas, poder dizer 'atendemos eMAG e WCAG 2.2 nivel AA' com criterio numerado e vantagem comercial concreta, nao enfeite.

## B2B tecnico de infraestrutura (tom de competencia real, dark)

### Oxide Computer Company

<https://oxide.computer/>

**O que funciona:** Abri no navegador e medi os estilos computados. Fundo do body em oklch(0.162 0.01 260), praticamente preto azulado. O H1 e 'On-prem that feels like the public cloud', renderizado a 65px com line-height 65px (razao 1,0), font-weight 400 (regular, nao bold) e letter-spacing -1,625px (cerca de -0,025em), alinhado a esquerda. O botao primario 'CONTACT SALES' e minusculo em comparacao: 12px, familia monospace, caixa alta, letter-spacing 0,64px, fundo verde-petroleo escuro com texto verde vivo. Acima do titulo, e nao abaixo, aparece um painel de produto com abas CLI / API / Console e uma etiqueta em monospace 'FIG. 1 OXIDE CLOUD COMPUTER'. Logo apos o hero vem a faixa de clientes (Switch, Stoke Space, LLNL, INL, Jump Trading), depois quatro areas de capacidade, depois uma comparacao explicita 'Traditional on-prem' versus 'The public cloud'.

**O que aproveitar:** Quatro moves. (1) Titulo grande em peso regular ou medium com tracking negativo, em vez de black/extrabold: peso 400 a 500 em 56 a 64px le como editorial e institucional; peso 800 le como anuncio. (2) Monospace so em rotulos, etiquetas, kickers e dados tecnicos (MX, DNS, SLA, numero de contas), nunca em texto corrido: e o sinal barato e honesto de 'aqui tem engenharia'. (3) A etiqueta tipo 'FIG. 1' vira, no caso da Intelecto, 'FIG. 1 - DIAGRAMA DE REAPONTAMENTO DNS', legendando um diagrama real de MX/SPF/DKIM. (4) A comparacao lado a lado 'como esta hoje' versus 'como fica', que e literalmente o argumento do fim do e-mail Interlegis.

**Por que é relevante:** E o analogo mais proximo do que a Intelecto e: empresa pequena que vende infraestrutura propria para comprador conservador, e que precisa provar competencia tecnica sem gritar. Mostra que dark mode e monospace podem soar institucional e nao gamer, desde que o layout seja rigido e o texto seja especifico.

## concorrente direto de categoria (e-mail em dominio proprio), tom anti-marketing

### Migadu (hospedagem de e-mail em dominio proprio) e sua pagina Pro/Cons

<https://migadu.com/procon/>

**O que funciona:** Carreguei a home no navegador e medi: H1 'The Missing Email Service For Domains' a 45px / line-height 54px (razao 1,2), peso 700, cor rgb(0,29,108) que e #001D6C, um navy quase identico ao #1E3A5F da Intelecto, alinhado a esquerda dentro de um container de cerca de 660px de largura maxima (aproximadamente 65 caracteres por linha). Body a 14px em system-ui, sem webfont. Zero foto de banco de imagens, zero ilustracao de humor: so uma captura do painel real. Na navegacao principal, entre 'Pricing' e 'Guides', existe um item chamado 'Pro/Cons'. Carreguei essa pagina: e uma lista com mais de 20 desvantagens admitidas, com indice ancorado, aberta com 'We do not want you to use our services if they do not fit your requirements'. Duas admissoes textuais: 'Email as we know it and encryption are incompatible. If someone is telling you otherwise, they are not to be trusted.' e 'If you cannot accept a few hours of email downtime under any circumstances, Migadu is probably not for you.'

**O que aproveitar:** A pagina de limites. Criar em camara.intelecto.solutions (ou na pagina de hospedagem) uma secao honesta chamada 'O que voce precisa saber antes de contratar', listando: que o reapontamento depende de oficio assinado pelo Presidente e de chamado no Interlegis, com prazo que nao esta sob controle da Intelecto; que reapontamento nao e delegacao e por que a Camara nao deve pedir troca de NS (isso derrubaria Portal Modelo e SAPL); qual e a janela de migracao de caixas; e o que nao esta incluso. Roubar tambem a medida tipografica: coluna de 60 a 70 caracteres, H1 em 1,2 de entrelinha, navy escuro, sem imagem decorativa nenhuma.

**Por que é relevante:** E o produto exato que a Intelecto esta vendendo (e-mail em dominio proprio), vendido por uma equipe pequena, e a estrategia de confianca deles e o oposto de marketing: dizer os defeitos primeiro. Para um controlador interno que teme auditoria, um fornecedor que documenta os proprios limites e menos arriscado que um que promete tudo. E resolve o problema real da Intelecto de depender de um prazo do Senado que ela nao controla.

## B2B tecnico com prova social quantificada

### Tailscale

<https://tailscale.com/>

**O que funciona:** Hero: titulo 'The best secure connectivity platform for the AI era', subtitulo explicando em uma frase o que substitui (VPN legado, SASE, PAM) e para quem serve, e dois CTAs em ordem fixa: 'Start connecting devices' (acao) e 'Contact sales' (conversa). A ordem descendo a pagina e: showcase de produto em abas com cinco categorias, secao de recurso com captura de tela real, bloco de estatistica '40,000 businesses choose Tailscale' com tres estudos de caso com resultado quantificado, faixa de logos de clientes (Duolingo, Microsoft, NVIDIA, Netlify, Instacart, Revolut e outros), tres beneficios ilustrados, carrossel de depoimentos de usuarios reais, e um bloco final de CTA repetindo os dois botoes.

**O que aproveitar:** A sequencia numero + logos + caso, nessa ordem, logo depois do hero. Para a Intelecto: um bloco com tres numeros verificaveis ('8 camaras municipais', '2 prefeituras', '10+ anos'), a faixa com os 8 brasoes/logos das camaras e da TRB Pharma, e tres frases de resultado com nome do orgao. Roubar tambem o par de CTAs em ordem: acao concreta primeiro ('Ver diagnostico do dominio da sua Camara'), conversa depois ('Falar com o Luiz no WhatsApp'). Nunca so um botao de 'fale com especialista'.

**Por que é relevante:** A Intelecto tem prova social forte e subutilizada (8 camaras, 2 prefeituras, consorcio, autarquias, TRB Pharma) e um argumento numerico proprio (482 camaras precisam migrar ate maio/2027). Esse e o padrao de como transformar isso em hierarquia visual sem inventar nada.

## B2B de linguagem simples para comprador nao tecnico

### Basecamp

<https://basecamp.com/>

**O que funciona:** O hero e uma frase unica e longa, em tipo grande e negrito, que ja e a proposta inteira: 'The refreshingly straightforward project management system that's rock-solid and easy to use.' Nao ha subtitulo separado; no lugar, um convite a um tour de 3 minutos. A pagina segue com carrossel de depoimentos de 8 clientes (nome e cargo, sem foto), um recado assinado pelo fundador Jason Fried contando os 20 anos de historia da empresa, um bloco de estatisticas com numeros gigantes (84 milhoes de contas, 60 milhoes de projetos, 99,99% de uptime), uma secao sobre a qualidade do suporte com tempo de casa da equipe, e um bloco de 21 perguntas rapidas do tipo 'da para fazer X?' respondidas objetivamente. Tema claro, muito espaco em branco, sem foto de banco de imagens.

**O que aproveitar:** Tres elementos, todos aplicaveis direto. (1) O recado assinado: uma secao curta com foto real do Luiz e texto em primeira pessoa dizendo que a empresa e operada por ele com automacao, ha 10 anos, com telefone direto. Empresa de uma pessoa vira vantagem (voce fala com quem resolve) em vez de risco escondido. (2) O bloco de numeros de confiabilidade: uptime, tempo de resposta de suporte, anos de operacao, quantidade de caixas administradas. (3) O formato de 21 perguntas rapidas, que na versao Intelecto vira 'Da para manter o Portal Modelo funcionando? Sim.', 'Da para migrar as caixas sem perder mensagem antiga? Sim.', 'Precisa trocar o dominio da Camara? Nao.' Isso mata objecao antes da reuniao.

**Por que é relevante:** O comprador principal e politico e nao tecnico. Basecamp e o melhor exemplo verificavel de site B2B que fala em portugues claro (no caso, ingles claro), com tipo grande e sem jargao, e ainda assim passa solidez. Alem disso, a estrutura de 'fundador assinado + historia longa + numeros de uptime' e exatamente a defesa contra a objecao 'e uma empresa de uma pessoa so'.

## pesquisa de usabilidade aplicada a confianca

### Nielsen Norman Group - Trustworthiness in Web Design: 4 Credibility Factors

<https://www.nngroup.com/articles/trustworthy-design/>

**O que funciona:** Define quatro fatores de credibilidade com recomendacoes concretas. (1) Design quality: layout e navegacao organizados, hierarquia visual e espaco em branco adequados, e a observacao de que erros de digitacao e links quebrados degradam credibilidade rapidamente. (2) Upfront disclosure: contato visivel, custos e taxas documentados com clareza, politicas expostas, e evitar conteudo com barreira que exige dados antes de entregar valor. (3) Comprehensive, correct and current: informacao completa que demonstra expertise, fotos de todas as etapas do servico e nao so do resultado final, e conteudo de apoio (casos, depoimentos) segmentado por tipo de cliente. (4) Connected to the rest of the web: links para fontes externas e avaliacoes de terceiros, porque as pessoas confiam mais em fonte externa do que em conteudo patrocinado pela propria empresa.

**O que aproveitar:** Aplicar o fator 2 e o fator 4 literalmente, que sao onde site de TI B2B brasileiro mais falha. Fator 2: publicar faixa de preco na pagina de hospedagem/e-mail (ancoragem: a partir de R$ 500/mes ate 10 contas) em vez de esconder atras de formulario, e colocar CNPJ, endereco, telefone e horario de atendimento no rodape de todas as paginas. Fator 4: linkar para fontes externas verificaveis, como a pagina do Interlegis sobre o fim do E-mail Legislativo, a Lei 14.133, a cartilha PNTP, e os proprios portais das camaras clientes em producao. Link que sai do site prova mais que qualquer selo desenhado.

**Por que é relevante:** O comprador precisa justificar a contratacao em processo administrativo e teme auditoria. Cada um dos quatro fatores mapeia direto no que reduz o medo dele: preco explicito reduz risco de questionamento, portais de clientes reais em producao sao prova auditavel, e link para a norma citada e o que o juridico vai querer conferir.

## tipografia (pares concretos disponiveis via Google Fonts)

### Google Fonts CSS2 API (verificacao das familias)

<https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=IBM+Plex+Sans:wght@400;600&family=IBM+Plex+Mono:wght@400&family=Inter:wght@400;600&family=Newsreader:opsz,wght@6..72,400&family=Libre+Franklin:wght@400;700&display=swap>

**O que funciona:** Requisitei o CSS real da API e ele retorna regras @font-face para as sete familias, com font-display: swap: Public Sans, Source Serif 4, IBM Plex Sans, IBM Plex Mono, Inter, Newsreader e Libre Franklin. Nenhuma faltou, o que confirma disponibilidade, nomes exatos e eixos (Source Serif 4 e Newsreader sao variaveis com eixo optical size).

**O que aproveitar:** Tres pares testados contra navy #1E3A5F e azul #1351B4, todos servidos por um unico link de Google Fonts. Par A (o mais seguro e o que recomendo): Public Sans para titulos e texto, IBM Plex Mono para rotulos tecnicos. Public Sans nasceu no U.S. Web Design System, tem esqueleto neutro proximo de Helvetica e nao carrega nenhum sinal de startup; usar 600 em titulos de 44 a 56px com letter-spacing -0.02em, e 400 em 17px com line-height 1.65 no corpo. Par B (mais editorial, bom para as paginas de servico e para o material sobre o prazo de 2027): Source Serif 4 em titulos (peso 600, optical size alto) com IBM Plex Sans em 400 no corpo; serifa aqui le como documento oficial, nao como blog. Par C (mais moderno sem perder sobriedade): Libre Franklin 700 em titulo com Inter 400 no corpo. Em todos os casos: carregar no maximo 2 familias e 3 pesos, sempre com display=swap e fallback declarado (system-ui, Arial), e usar font-variant-numeric: tabular-nums nas tabelas de preco.

**Por que é relevante:** O briefing exige Google Fonts, pagina autocontida sem CDN de JS, e paleta navy/azure. Esses tres pares foram escolhidos por baixo contraste de personalidade: nenhum deles tem as formas arredondadas de Poppins/Montserrat que gritam agencia de marketing, e Public Sans especificamente tem procedencia de governo, o que combina com a audiencia.

## tecnica CSS pura (dark mode sem JS)

### MDN Web Docs - funcao CSS light-dark() e propriedade color-scheme

<https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark>

**O que funciona:** light-dark(valorClaro, valorEscuro) devolve um dos dois valores conforme o esquema de cor ativo, sem media query. Exige color-scheme declarado, tipicamente :root { color-scheme: light dark; }. Status Baseline 2024, disponivel desde maio de 2024. Aceita cores e tambem imagens/gradientes. Verifiquei na mesma sessao outras tres tecnicas relacionadas: prefers-reduced-motion e Baseline widely available desde janeiro de 2020 e aceita os valores no-preference e reduce; text-wrap: balance e pretty sao Baseline desde outubro de 2024, com balance limitado a 6 linhas no Chromium e 10 no Firefox e destinado a titulos e legendas, e pretty destinado a texto corrido para eliminar orfas; animation-timeline com scroll() e view() permite animacao guiada por rolagem sem JavaScript, mas a propria MDN marca como 'Limited availability, not Baseline'.

**O que aproveitar:** Arquitetura de tema em tres passos, toda em CSS: (1) :root { color-scheme: light dark; } e todos os tokens definidos com light-dark(), por exemplo --superficie: light-dark(#FFFFFF, #0F172A) e --texto: light-dark(#1E3A5F, #E2E8F0); (2) um botao de tema que so escreve color-scheme: light ou color-scheme: dark no elemento raiz e grava a escolha em localStorage, com tres estados (sistema, claro, escuro); (3) text-wrap: balance em h1 e h2 e text-wrap: pretty em p, que sozinho ja melhora a aparencia dos titulos longos em portugues sem uma linha de JS. Usar animation-timeline apenas dentro de @supports (animation-timeline: view()), como enfeite progressivo, nunca como estrutura.

**Por que é relevante:** A restricao e HTML/CSS/JS estatico servido por nginx, sem build e sem CDN. light-dark() elimina a duplicacao de paleta em @media (prefers-color-scheme) e reduz o CSS de tema a um bloco de tokens, o que e exatamente o que uma operacao de uma pessoa consegue manter. E o alerta sobre animation-timeline evita construir a identidade do site em cima de um recurso que ainda quebra em parte dos navegadores usados por camaras (parque de maquinas antigo).

## tecnica-marquee

### The Infinite Marquee (Ryan Mulligan)

<https://ryanmulligan.dev/blog/css-marquee/>

**O que funciona:** Carreguei a pagina e conferi o codigo. Ele resolve o unico bug que quebra 90% dos marquees: o salto no fim do loop quando existe gap entre os itens. A estrutura sao DOIS <ul> irmaos identicos dentro de um .marquee com display:flex, overflow:hidden e gap:var(--gap). Cada <ul> tem flex-shrink:0 e min-width:100%, o que garante que a faixa preencha a tela mesmo com poucos logos. O keyframe nao usa -50%, usa translateX(calc(-100% - var(--gap))): -100% e a largura de UMA lista, e o + gap compensa o espaco entre a lista 1 e a lista 2. Sem esse var(--gap) na conta existe um pulo visivel de exatamente uma goteira a cada volta. O segundo <ul> leva aria-hidden="true" para o leitor de tela nao ler a lista de clientes duas vezes.

**O que aproveitar:** Copiar literalmente a arquitetura de dois tracks + o keyframe translateX(calc(-100% - var(--gap))). Sobre ela empilhar tres coisas que o artigo nao traz: (1) pausa em .marquee:hover .marquee__track E .marquee:focus-within .marquee__track com animation-play-state:paused, para o usuario de teclado tambem conseguir parar; (2) mask-image: linear-gradient(to right, transparent, #000 8rem, #000 calc(100% - 8rem), transparent) para os logos sumirem em fade nas bordas em vez de serem cortados na guilhotina; (3) no bloco @media (prefers-reduced-motion: reduce), zerar a animacao, trocar o track para flex-wrap:wrap; justify-content:center e dar display:none no track aria-hidden, virando uma grade estatica centralizada de 15 logos.

**Por que é relevante:** A Intelecto tem 15+ clientes reais (8 camaras, 2 prefeituras, CONSISP, 3 autarquias de agua, TRB Pharma, Fracttal, Pieralisi) e a prova social e o argumento de venda mais forte contra a Instar. Uma faixa que da um tranco a cada 40 segundos destroi exatamente a impressao de competencia tecnica que o site precisa passar para um controlador interno que teme auditoria do TCE.

## tecnica-marquee-alternativa

### Infinite-Scrolling Logos In Flat HTML And Pure CSS (Smashing Magazine)

<https://www.smashingmagazine.com/2024/04/infinite-scrolling-logos-html-css/>

**O que funciona:** Carreguei e confirmei. E a abordagem oposta a do Ryan Mulligan e vale conhecer porque NAO duplica marcacao: existe um unico conjunto de logos, cada um posicionado e animado individualmente, e o efeito de fila continua vem de um atraso negativo calculado por indice: --marquee-delay: calc(var(--marquee-duration) / var(--marquee-items) * (var(--marquee-items) - var(--marquee-item-index)) * -1). O delay negativo faz a animacao comecar "no passado", entao no primeiro frame os logos ja estao espalhados pela tela, sem aquele 1 segundo de faixa vazia. Usa --marquee-item-offset: max(calc(var(--marquee-item-width) * var(--marquee-items)), calc(100% + var(--marquee-item-width))) para os itens nao se sobreporem quando a tela e estreita, e transform: translateX(-50%) para centrar itens de larguras diferentes. Trata reduced-motion com @media (prefers-reduced-motion) { .marquee__item { animation-play-state: paused; } }.

**O que aproveitar:** Duas coisas pontuais, mesmo mantendo a tecnica de dois tracks como base. Primeira: o max() no offset, para blindar a faixa em 360px de largura (vereador abrindo o site no celular). Segunda: passar largura e altura reais do logo por custom property inline no elemento (style="--w:228; --h:48"), padrao que serve de ponte para a normalizacao optica do item seguinte da lista.

**Por que é relevante:** O site e HTML estatico servido por nginx, sem build. Ter as duas tecnicas mapeadas evita ficar preso quando a lista de clientes crescer de 15 para 40 logos e a duplicacao de marcacao comecar a incomodar na manutencao manual do HTML.

## acessibilidade-motion

### How to Play and Pause CSS Animations with CSS Custom Properties (CSS-Tricks)

<https://css-tricks.com/how-to-play-and-pause-css-animations-with-css-custom-properties/>

**O que funciona:** Carreguei e confirmei. O artigo cravaverdade tecnica que muita gente erra: animation-play-state:paused e a UNICA forma de pausar de verdade. Zerar animation-duration ou remover a animacao nao pausa, apenas esconde algo que continua rodando e consumindo GPU. Mostra o padrao de declarar a shorthand toda via variaveis com fallback, animation: var(--animn,none) var(--animdur,1s) var(--animtf,linear) var(--animdel,0s) var(--animic,infinite) var(--animdir,alternate) var(--animfm,none) var(--animps,running), de modo que um unico ponto (--animps) controle play e pause de qualquer lugar da cascata, inclusive de @media (prefers-reduced-motion) { --animps: paused; }.

**O que aproveitar:** Adotar --animps (ou --marquee-state) como unica chave de controle e ligar tres gatilhos nela: :hover, :focus-within e um botao real de pausa. O botao e o ponto: um <button class="marquee__toggle" aria-pressed="false">Pausar</button> com 4 linhas de JS que so alternam um atributo no container, e o container fazendo [data-motion="paused"] .marquee__track { --animps: paused; }. Sem framework, sem biblioteca.

**Por que é relevante:** WCAG 2.2.2 (Pause, Stop, Hide, nivel A) exige mecanismo de pausa para conteudo que se move sozinho por mais de 5 segundos. Hover nao e mecanismo para quem usa teclado ou toque. A Intelecto vende portais de transparencia que sao auditados por acessibilidade (e-MAG/PNTP): um site institucional com carrossel impossivel de pausar e um gol contra que o concorrente pode apontar numa concorrencia.

## acessibilidade-suporte

### prefers-reduced-motion (MDN)

<https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion>

**O que funciona:** Carreguei e confirmei. Documenta que a media feature tem apenas dois valores, no-preference (avalia como false) e reduce, e que @media (prefers-reduced-motion) sozinho equivale a @media (prefers-reduced-motion: reduce). Confirma o status Baseline: Widely available, disponivel em todos os navegadores desde janeiro de 2020. O padrao recomendado na pagina e escrever a animacao completa como padrao e depois SOBRESCREVER dentro de @media (prefers-reduced-motion: reduce), nao o contrario.

**O que aproveitar:** Duas regras de uso diferentes para dois casos diferentes, e essa distincao e o pulo do gato. Para o marquee (que existe mesmo sem animacao): escrever animado por padrao e neutralizar em @media (prefers-reduced-motion: reduce). Para os reveals de scroll (que so existem por causa da animacao): escrever DENTRO de @media (prefers-reduced-motion: no-preference), porque assim quem pediu menos movimento simplesmente nunca entra no bloco e ve o conteudo estatico e integro, sem depender de sobrescrita.

**Por que é relevante:** Suporte desde 2020 significa que funciona ate nas maquinas antigas de camara municipal, entao nao ha desculpa para pular. E o publico do site inclui gente mais velha (presidente de camara, diretor administrativo), faixa em que sensibilidade vestibular e mais comum.

## normalizacao-optica-logos

### Building the Perfect Logo Strip (9elements)

<https://9elements.com/blog/building-the-perfect-logo-strip/>

**O que funciona:** Carreguei e confirmei. E o unico material que ataca o problema real de frente e mostra tres metodos em ordem crescente de qualidade. Metodo 1, altura igual para todos: simples e visualmente desequilibrado, porque um logo horizontal 6:1 fica com area gigante ao lado de um brasao quadrado. Metodo 2, escala por proporcao com interpolacao linear: --factor-horizontal: min((-0.1 * var(--base-ratio)) + 1.1, 1), ou seja, proporcao 2 vira fator 0,9 (90% da altura base), com piso em var(--base-height) / 2 para nada sumir. Metodo 3, o recomendado, area igual: o fator de escala e a raiz quadrada de (altura base ao quadrado dividido por largura x altura do logo), fazendo todos ocuparem a MESMA area visual. Traz ainda uma variavel de forca de 0 a 1 para interpolar entre altura base e altura calculada, porque area 100% igual exagera em proporcoes extremas. A marcacao passa as dimensoes por variavel inline, <div class="logo" style="--width:228; --height: 48;">, e o container e flex com justify-content:center, align-items:center, flex-wrap:wrap, gap:3rem 2rem.

**O que aproveitar:** Metodo 3 com forca em torno de 0,7, e a arquitetura de embrulhar cada logo numa div com --width/--height inline em vez de estilizar o <img> direto. Como os valores sao fixos e conhecidos, da para pre-calcular o fator na mao e escrever style="--scale:0.82" direto no HTML, zero dependencia de sqrt() em CSS e zero JavaScript. Concretamente: altura base 2.75rem (44px) para o brasao quadrado da Camara de Jaguariuna, e o logotipo horizontal da TRB Pharma ou da Fracttal caindo para algo perto de 1.9rem, o que na tela faz os dois pesarem igual em vez de a TRB dominar a faixa.

**Por que é relevante:** Este e o problema numero um da faixa da Intelecto, e nao e teorico: brasoes de camara sao quadrados ou verticais e logotipos corporativos (TRB Pharma, Fracttal, LOGCARD, Zambianco, Pieralisi) sao horizontais e largos. Sem normalizacao por area, a faixa parece que a Intelecto atende sobretudo empresas, quando o argumento de venda e justamente as 8 camaras. A normalizacao optica literalmente conta a historia comercial certa.

### Aligning Logo Images in CSS (Ahmad Shadeed)

<https://ishadeed.com/article/aligning-logos-css/>

**O que funciona:** Carreguei e confirmei. Complementa o 9elements no lado sujo da vida real: arquivos que o cliente manda com fundo branco, tamanhos aleatorios e proporcoes mistas. Solucoes concretas mostradas: grade responsiva com grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); caixa de tamanho fixo com .brands__item img { width: 130px; height: 75px; object-fit: contain; }, que contem o logo sem distorcer e centraliza sobra; centralizacao interna com flex (justify-content:center, align-items:center, height:100%); e mix-blend-mode: multiply para dissolver fundo branco de JPG. Recomenda explicitamente pedir PNG transparente ou SVG ao inves de aceitar JPG com fundo, e centralizar a ultima fileira incompleta com flex.

**O que aproveitar:** A caixa fixa com object-fit:contain como rede de seguranca por baixo do calculo de area (se um logo novo chegar sem --width/--height medidos, ele ainda assim nao estoura o layout), e o conselho de exigir SVG ou PNG transparente. IMPORTANTE: NAO usar mix-blend-mode:multiply neste projeto, porque o site tem tema escuro e multiply sobre fundo escuro apaga o logo inteiro. O caminho correto para os arquivos ruins e limpar o fundo uma vez no arquivo, nao mascarar com blend mode em runtime.

**Por que é relevante:** Os logos das camaras vao vir por WhatsApp de um servidor da camara, em JPG com fundo branco e 800x600. Ter o padrao de caixa + contain + a regra de sempre exigir vetor evita que a faixa vire uma colcha de retangulos brancos, que e exatamente a cara de site de prefeitura dos anos 2000 que o cliente pediu para evitar.

## tema-claro-escuro

### light-dark() (MDN)

<https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark>

**O que funciona:** Carreguei e confirmei. A funcao recebe duas cores e devolve uma conforme o esquema ativo, eliminando os blocos duplicados de @media (prefers-color-scheme). Exige que color-scheme esteja declarado (tipicamente :root { color-scheme: light dark; }), caso contrario nao funciona. Exemplo confirmado na pagina: body { color: light-dark(#333b3c, #efefec); background-color: light-dark(#efedea, #223a2c); }. Aceita tambem imagens e gradientes: background-image: light-dark(url("light-icon.png"), url("dark-icon.png")). Status na propria pagina: Baseline 2024, newly available desde maio de 2024, com a ressalva de suporte irregular em dispositivos e navegadores mais antigos.

**O que aproveitar:** O par color-scheme + light-dark() como CAMADA DE MELHORIA, nao como base. Base: declarar todos os tokens em :root puro (--bg, --surface, --text, --text-mute, --line, --brand) na versao clara, redefinir apenas os tokens dentro de @media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { ... } } e redefinir de novo em :root[data-theme="dark"] { ... }. Por cima disso, declarar color-scheme: light dark em :root e color-scheme: light / dark nos seletores [data-theme], que e o que faz scrollbar, campos de formulario e autofill do navegador acompanharem o tema (isso light-dark sozinho nao resolve e a maioria esquece).

**Por que é relevante:** Baseline 2024 e recente demais para um site cujo publico abre a pagina em maquina de camara municipal com Windows e navegador desatualizado. Usar light-dark() como unica fonte de cor significa pagina sem cor nenhuma nesse cenario. A recomendacao honesta e tokens classicos como base, light-dark apenas onde falhar for inofensivo.

### Color themes with Baseline CSS features (web.dev)

<https://web.dev/patterns/theming/theme-switch/>

**O que funciona:** Carreguei e confirmei. E a referencia que responde exatamente ao caso do usuario que NAO escolheu tema. O truque e que o estado padrao nao e uma terceira variavel, e a ausencia do atributo: html { color-scheme: light dark; } sozinho ja significa "siga o sistema". A escolha explicita e feita mudando color-scheme no MESMO elemento via atributo de dado, confirmado na pagina: html { color-scheme: light dark; &[data-scheme="light"] { color-scheme: light; } &[data-scheme="dark"] { color-scheme: dark; } }. Os tokens ficam em light-dark() e passam a resolver sozinhos. A pagina tambem recomenda declarar <meta name="color-scheme" content="light dark"> no head.

**O que aproveitar:** Os tres estados modelados como (a) sem atributo = sistema, (b) data-theme="light", (c) data-theme="dark", com o botao ciclando entre os tres e nao apenas dois (rotulos: Sistema, Claro, Escuro). Mais o script antiflash de uma linha no <head>, ANTES do CSS: <script>(function(){var t=localStorage.getItem('tema'); if(t) document.documentElement.dataset.theme=t;})();</script>. Sem ele a pagina pisca branco antes de virar escura, defeito que qualquer visitante percebe e associa a site mal feito.

**Por que é relevante:** Um presidente de camara nunca vai clicar num botao de tema. Ele vai abrir num Windows configurado em claro e o site precisa estar claro, institucional e legivel, sem depender de escolha. Ja um gestor de TI procurando DPO terceirizado normalmente tem o sistema em escuro e reparar que o site respeitou a preferencia dele e sinal barato e eficaz de competencia tecnica.

## animacao-entrada-scroll

### Scroll-Driven Animations (Josh W. Comeau)

<https://www.joshwcomeau.com/animation/scroll-driven-animations/>

**O que funciona:** Carreguei e confirmei. Mostra que a animacao de entrada por scroll sem JavaScript cabe em quatro linhas: .elem { animation: fadeIn linear; animation-timeline: view(); animation-range: entry; }. Explica que animation-timeline: view() troca tempo por progresso de visibilidade no viewport, e que animation-range: entry limita a animacao ao trecho em que o elemento esta entrando. Alerta para incluir backwards no fill mode e evitar pulo visual antes do inicio. Traz o embrulho de preferencia, @media (prefers-reduced-motion: no-preference) { ... }, e o de deteccao, @supports (animation-timeline: view()) { ... }. Cita cerca de 85% de suporte global e menciona que o polyfill existe mas tem limitacoes com recursos avancados.

**O que aproveitar:** O aninhamento @media (prefers-reduced-motion: no-preference) POR FORA de @supports (animation-timeline: view()) POR FORA da regra. E o keyframe da entrada indo de opacity:0 e translateY(1.5rem) para opacity:1 e transform:none, com animation-range: entry 10% cover 30% (comeca quando 10% do bloco apareceu e termina cedo, para o conteudo nao ficar meio transparente enquanto a pessoa le). Aplicar em pouca coisa e com sobriedade: os 4 cards de servico, a linha de numeros (10+ anos, 8 camaras, 15+ clientes) e os depoimentos. NAO aplicar no hero nem na faixa de logos.

**Por que é relevante:** O cliente pediu explicitamente que nao pareca startup do Vale do Silicio. Movimento de entrada discreto e curto (250ms de percurso, deslocamento de 24px, nunca escala nem rotacao) da vida a pagina sem virar showreel de agencia. E como e CSS puro, dispensa AOS.js e similares, o que casa com a restricao de nao ter build nem CDN externo.

## animacao-entrada-suporte

### animation-timeline: view() (MDN)

<https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline/view>

**O que funciona:** Carreguei e confirmei, e o dado mais importante e desconfortavel: a propria pagina do MDN classifica o recurso como Limited availability, explicitamente NAO Baseline, porque nao funciona em alguns dos navegadores mais usados. Documenta a sintaxe completa: view() sem parametro; com eixo, view(block), view(inline), view(x), view(y), sendo block o padrao; com inset, view(20%), view(200px), view(20% 40%); e combinado, view(block auto), view(inline 20%), view(x 200px auto). Insets positivos encolhem a area considerada visivel, negativos expandem. Exemplo confirmado: .animation { animation-timeline: view(block 50% 10%); animation-name: grow; animation-timing-function: linear; }.

**O que aproveitar:** O parametro de inset, que quase ninguem usa e resolve um incomodo real: view(block 15% 25%) faz a animacao terminar bem antes de o elemento chegar ao centro da tela, evitando o efeito irritante de texto que ainda esta clareando quando o leitor ja comecou a ler. E, principalmente, roubar a disciplina: como o proprio MDN marca como Limited availability, a animacao de scroll entra como enfeite descartavel e NUNCA como algo de que a legibilidade dependa.

**Por que é relevante:** Fecha a duvida da tarefa sobre o que precisa de fallback em 2026. Chrome e Edge desde a 115 e Firefox desde a 132 suportam, o suporte global fica em torno de 84 a 85%, mas o MDN ainda nao chama de Baseline. Traducao pratica para uma camara com navegador velho: cerca de 1 em cada 6 visitantes nao vera a animacao, e isso e aceitavel desde que a pagina fique perfeita sem ela.

## performance-core-web-vitals

### Optimize Cumulative Layout Shift (web.dev)

<https://web.dev/articles/optimize-cls>

**O que funciona:** Carreguei e confirmei os numeros. Meta de CLS: 0,1 ou menos em pelo menos 75% das visitas; acima de 0,25 e considerado ruim. A causa numero um sao imagens sem dimensao, e a solucao confirmada e a dupla atributo no HTML mais CSS fluido: <img src="puppy.jpg" width="640" height="360" alt="..."> com img { height: auto; width: 100%; }. Navegadores modernos derivam um aspect-ratio padrao dos atributos width e height, reservando o espaco antes do arquivo chegar. Para <picture> com art direction, os atributos width e height precisam estar em cada <source> E no <img>. Sobre fontes, confirma font-display: optional para evitar reflow, preload da fonte critica, fallback declarado (font-family: "Google Sans", sans-serif) e size-override para aproximar as metricas da fonte substituta.

**O que aproveitar:** Atributo width e height em TODOS os 15 logos da faixa, com os valores intrinsecos reais do SVG, mais height:auto no CSS. Isso mata o CLS da faixa e ainda alimenta o calculo de area do item 5, ou seja, o mesmo par de numeros serve para performance e para normalizacao optica. Do lado das fontes, se usar Google Fonts, preload apenas do woff2 do peso do titulo, font-display: swap no corpo e uma pilha de fallback declarada de verdade.

**Por que é relevante:** Uma faixa de 15 logos e o pior gerador de CLS possivel numa pagina estatica: todos chegam juntos e, sem dimensao, empurram a secao inteira quando carregam. Como o publico chega por busca ("e-mail interlegis desativado", "e-mail .leg.br"), Core Web Vitals afeta ranqueamento, e um site de fornecedor de TI que pontua mal no PageSpeed e um argumento pronto na mao do concorrente.

## performance-imagens

### Browser-level image lazy loading (web.dev)

<https://web.dev/articles/browser-level-image-lazy-loading>

**O que funciona:** Carreguei e confirmei. Uso: <img src="image.png" loading="lazy" alt="..." width="200" height="200">, com dois valores, lazy e eager. O aviso e categorico: nao aplicar lazy em imagens provavelmente visiveis no carregamento, sobretudo na imagem de LCP. Reforca que width e height sao obrigatorios junto com lazy, porque sem eles a imagem parte de 0x0 e o navegador pode acabar baixando tudo de uma vez. Limiares de distancia do viewport no Chrome apos julho de 2020: 1250px em 4G (era 3000px) e 2500px em 3G ou pior (era 4000px). Mede que 97,5% das imagens com lazy loading terminaram de carregar em ate 10ms depois de ficarem visiveis em 4G.

**O que aproveitar:** Regra de decisao por posicao, nao por reflexo: se a faixa de logos ficar acima da dobra (logo abaixo do hero, que e onde ela funciona melhor comercialmente), NAO colocar loading="lazy" nela, so decoding="async". Se ficar mais para baixo, lazy resolve sozinho por causa do limiar de 1250px. E o detalhe que economiza banda de graca: a faixa duplica a marcacao, mas os dois tracks apontam para as MESMAS URLs, entao o navegador baixa cada logo uma unica vez. Duplicar o HTML nao duplica requisicoes.

**Por que é relevante:** O site roda em nginx em container no servidor proprio, sem CDN externo, entao cada byte sai da banda da Eveo e o tempo ate a primeira tela depende de escolhas manuais. Logo institucional deve ser SVG (arquivo minusculo, nitido em qualquer tela, imune a retina) e brasao municipal detalhado que so exista em bitmap vira AVIF com WebP de fallback via <picture>, sempre com width e height declarados.


---

## Padrões recorrentes que funcionam

- Faixa de exatamente 4 números logo abaixo da dobra, antes de qualquer produto, com prefixo pequeno ("MAIS DE", "+") separado do número em corpo grande e rótulo em duas linhas. Presente em Instar (20 anos / 28 colaboradores / 17 estados / 490 órgãos), Fiorilli (+1.000 / +25 / +50 / 27), PublicSoft (300 / 06 / 3000 / 600), 1Doc (100% / +900 / R$ 1 bilhão / 25%) e IPM (+30 milhões / +R$ 8 bilhões / +850). É o único elemento que aparece em praticamente todos os sites do setor, e o público já o lê como resumo executivo do fornecedor.
- Citar a lei pelo número dentro do texto do serviço, e não em selo genérico. Lei 12.527/2011, LC 131/2009, Lei 13.460/2017, Lei 14.063/2020, LGPD 13.709/2018. E nomear o destinatário do relatório: Fiorilli descreve o SCIM como quem produz "os relatórios exigidos pelos Tribunais de Contas Estaduais"; Câmaras e Prefeituras coloca a norma entre parênteses no título de cada serviço; Nuvem Legislativa abre cada seção com a lei em texto corrido.
- Mapa do Brasil com contagem por estado. O formato é herdado do próprio Interlegis ("Casas Legislativas atendidas": MG 485, RS 252, GO 224, PR 218, SP 202), Nuvem Legislativa usa uma versão pobre (mapa mais a frase "11 estados") e 1Doc usa a versão textual ("100% Presente nos 26 estados brasileiros"). É reconhecível pelo público e a Intelecto tem dado proprietário do radar DNS para preenchê-lo com informação que nenhum concorrente possui.
- Prova por link ao vivo em vez de logo. A Nuvem Legislativa aponta seis links para telas específicas de portais de clientes em produção ("Presença em plenário", "Exemplo de ata gerada pelo sistema"). Com o Mirante já em produção em 8 câmaras, isso é reproduzível hoje e vale mais que qualquer carrossel.
- Brasão oficial do município como logo de cliente, nunca logotipo estilizado (Elotech com 10 brasões, Legiflow com 11). E sempre com uma frase que enquadra a faixa: "Grandes entidades utilizam os softwares da Elotech". Sem a frase, a tira de logos vira decoração.
- Barra de acessibilidade fixa no topo com atalhos de teclado Alt+1 a Alt+6, alternador de contraste e página /acessibilidade dedicada (Instar), ou botão flutuante circular de acessibilidade (Portal Fácil). É assinatura visual imediata de fornecedor do setor público brasileiro e cabe em HTML e CSS puros.
- Catálogo em cartões nomeados: sigla ou nome de produto em corpo grande, uma linha de definição, parágrafo curto e link "Conhecer". Fiorilli (SCPI, SIP, SIA, SCIM, SIS, SIE), Portal Fácil (15 caixas) e Grupo Assessor, que usa família de marca com prefixo comum e sufixo por domínio (ASSESSOR Digital, Sociais, Administrativo, Tributário, RH, Conecta). Mirante e Conformis já são nomes e pedem esse tratamento.
- Hero como manchete de conformidade com prazo, não como slogan. Betha coloca "Reforma Tributária ... Nota Técnica nº 004 ... obrigatoriedade que inicia em agosto" no topo absoluto da home; Fiorilli reforça com comunicado datado ("Comunicado nº 570 ... 12/08/2026") logo abaixo do hero. É o modelo exato para o gatilho de maio/2027.
- Prova de terceiro como manchete de credibilidade: "Portais com avaliação nota 10 pelo MPF" (Portal Fácil), "ranking Siconfi com nota A" e "classificação A no CAPAG" (Betha), logos de Terra, GZH, O Globo e Valor Econômico (Legiflow). A Intelecto tem o equivalente sem usar: a nota PNTP dos portais Mirante atribuída pelo Tribunal de Contas.
- Bloco "Como contratar" explícito. Nuvem Legislativa dedica uma seção inteira ao caminho de aquisição; Câmaras e Prefeituras entrega três pacotes com "Indicado:" e checklist no formato de termo de referência. É assim que o setor resolve licitação na prática, sem transformar o site num tratado sobre a Lei 14.133.
- Links de governança nomeados no rodapé: "Conformidade e Integridade", "LGPD", "Canal de Denúncias" (Betha); "Portal da Privacidade", "Código de Conduta e Ética" (Grupo Assessor); "Política de Qualidade" (Instar). Custa poucas páginas simples e é o que o controlador interno procura antes de recomendar um fornecedor.
- Isca de conteúdo com formulário: e-books (PublicSoft), diagnóstico de maturidade digital (1Doc), auditoria gratuita do portal (Câmaras e Prefeituras) e busca por município já no hero (CESPRO, com o campo "Informe o nome do município", verificado). A Intelecto já tem a isca pronta no PDF do alerta Interlegis.
- CTA único, repetido em toda a página, com verbo de baixo compromisso: "FALE COM VENDAS" (1Doc), "Solicite uma demonstração" (IPM), "Falar com o Comercial" (Legiflow), "Solicite uma visita" (Câmaras e Prefeituras), "Iniciar conversa" (Nuvem Legislativa). Nenhum site do setor mostra preço, e nenhum pede "compre agora".
- Telefone visível no topo, ao lado do logo, quase sempre 0800: Instar 0800 404 4460, Nuvem Legislativa 0800 819 9004, Portal Fácil 0800 006 0927, Betha 0800 600 0735, PublicSoft (83) 3022 0800. Para presidente de câmara de cidade pequena, telefone no topo é a prova de que existe gente do outro lado.
- Portfólio segmentado por tipo de órgão, em abas: PREFEITURAS / CÂMARAS / AUTARQUIAS / DIVERSOS (Instar). Encaixa exatamente na carteira real da Intelecto, que tem câmaras, prefeituras, consórcio, autarquias de água e esgoto, instituto de previdência e privado.
- Grade de garantias operacionais com ícone e duas linhas de texto: implantação, backup, suporte 24 horas, atualização gratuita, treinamento, acessibilidade validada, hospedagem de e-mails (Instar, com 9 itens). É a seção que o comprador público transcreve para o processo, e é onde a Intelecto tem mais munição real do que o concorrente.
- H1 fala do resultado para o orgao, nunca do produto. Nos 12 sites o nome do software nao e o sujeito da frase principal: "The Best-Run Local Governments Run on CivicPlus", "We Empower the Public Sector to Create Smarter, Safer, and Stronger Communities", "Modern government, accelerated", "Plan, budget, report, and engage with confidence". O produto so aparece a partir da segunda dobra.
- Faixa numerica imediatamente abaixo do hero, com 3 a 6 numeros, numero grande em cima e rotulo curto embaixo. Sempre. CivicPlus (13K+ / 100K+ / 340M+ / 25 anos / 98%), Accela (900+ / 50%+ / 300M+ / 25+), OpenGov (1 em 3 / 2.000+ / 4.500+ / $670B+), ClearGov (2.000+ / $540B / 98%), Zencity (250M+ / 100.000 / 1.2M+). Quando o numero de clientes e pequeno, o mercado maduro troca por numero de ALCANCE ou de OPERACAO (pessoas atendidas, dados processados, anos de casa), mas nunca omite a faixa.
- Bloco de problema escrito na voz do comprador ANTES de qualquer produto. Accela lista pressoes reais em frases curtas (mais expectativa do cidadao, departamentos em silo, complexidade regulatoria, falta de gente, incerteza de verba) e so entao apresenta a solucao. Streamline faz a versao emocional ("finally get to stop worrying about... They get their time and control back").
- Case como unidade fechada de tres partes: numero mais citacao verbatim mais pessoa identificada com cargo exato e cidade/estado. GovPilot ("24 Days Saved" com Lawrence Vaupel, Director of Tourism Management, Big Bear Lake CA), Accela ("3 days" com Luis Vasquez, Chief Building Official, McAllen TX), Granicus (Veterans Affairs "71% increase in audience reach"). O cargo e sempre o cargo tecnico real, nunca "gestor" ou "cliente satisfeito".
- Navegacao por CARGO e por TIPO DE ORGAO, alem de por produto. CivicPlus tem abas para City Manager, PIO, Clerk, Recreation Director, Community Development Director, IT e Elected Officials; Tyler tem fichas para Federal/States/Counties/Municipalities/K-12/Special Districts; OpenGov tem menu inteiro por Departamento; Clariti oferece quiz "Which solution is right for me?". O visitante nunca precisa saber o nome do produto para se localizar.
- Frase-faca de posicionamento contra software generico, repetida em varios sites quase igual: "built for the public sector, not adapted to it" (ClearGov), "It's not a horizontal platform trying to fit government workflows" (OpenGov), "AI built for government. Not adapted for it" (Accela), "Built exclusively for government" (Tyler). E o argumento mais barato e mais eficaz que existe nesse mercado.
- Promessa de servico QUANTIFICADA, nao adjetivada. Streamline: "a real human will get back to you in less than an hour", "about 20 hours per month saved", "No long-term contracts or hidden fees". Accela: "8-year average tenure and a 100% implementation success rate over five years". OpenGov: "We show up. We deliver. We stay" com tres paragrafos concretos. Ninguem escreve "suporte de qualidade".
- FAQ de procurement na propria home, respondendo objecao de contrato e nao duvida de uso. OpenGov responde prazo de implantacao (3 a 6 meses), seguranca, quem usa e por que e diferente. Streamline responde preco, lock-in, desconto por associacao estadual e suporte. Esse bloco e o que o comprador publico le antes de marcar reuniao.
- Biblioteca de casos filtravel por regiao e por tipo de orgao, com etiqueta geografica visivel no cartao e titulo narrativo comecando pelo que mudou. Granicus ANZ filtra por estado; ClearGov por regiao (Northeast/Midwest/South/West) e por publico; paginacao por "Load More" para a biblioteca parecer maior do que a primeira tela mostra.
- Clientes apresentados como NOME mais LUGAR em texto quando o logo e fraco. GovPilot lista cerca de 20 pares cidade/estado; Jadu lista os councils por extenso. O reconhecimento vem do toponimo, nao do brasao.
- Diagnostico gratuito como topo de funil, ligado ao produto. Streamline aponta para um scanner de acessibilidade publico no rodape; Accela mantem um "ROI Calculator" no menu principal; Clariti oferece "Permit Software Buyer's Guide". A isca sempre entrega um veredito sobre a situacao do proprio orgao do visitante.
- Selo de terceiro para suprir falta de marca. GovPilot exibe Capterra 4.6/5 e GovTech100 por 8 anos consecutivos; Zencity exibe Fast Company e GovTech Top 100 de 2022 a 2025. Validacao externa substitui volume de clientes.
- Explicar a LOGICA do preco mesmo sem publicar valor. GovPilot: "pricing based on population and number of modules selected", com quatro faixas nomeadas e "Unlimited Users & Support" em todas. Streamline nomeia planos por intencao (Compliance Essentials, Community Pro, Operations Pro) com tabela comparativa linha a linha.
- Pauta regulatoria em andamento vira secao fixa da home, nao post de blog. Jadu mantem um bloco sobre a reorganizacao do governo local britanico com CTA proprio. E o padrao que a Intelecto pode usar melhor que todos eles, porque tem prazo com data: maio/2027.
- CTA final em forma de pergunta dirigida ao cargo, nao "Fale conosco": "Ready to deliver exceptional outcomes?" (Granicus), "Ready to modernize your finance cycle?" (ClearGov), "Ready to modernize at speed?" (Accela).
- Normalizar por ALTURA optica fixa, nunca por largura. O padrao repetido em todos os casos bons e `height: 40px a 80px; width: auto; object-fit: contain; max-width: none` na imagem, dentro de uma celula flex com `align-items:center; justify-content:center`. OpenGov usa 80px, Supabase usa celula de 40px com logo de 32 a 48px. Largura fixa quebra: brasao redondo encolhe e logo horizontal estoura.
- Monocromatizar por SVG inline com `fill="currentColor"` em vez de `filter: grayscale()`. Supabase faz assim e ganha de brinde tema claro/escuro, acessibilidade (`role="img"` + `aria-label`) e zero arquivo extra. Para site estatico autocontido sem build, e a tecnica certa.
- Para brasao heraldico policromatico, o filtro correto NAO e grayscale e sim `filter: brightness(0) invert(1)` (silhueta branca em fundo escuro) ou `brightness(0)` (silhueta preta em fundo claro). OpenGov usa isso com selos de cidade americana. Grayscale em brasao produz um mingau cinza de contraste baixo e ilegivel.
- Ordem canonica da secao: rotulo pequeno em caixa alta e cinza (overline, 11 a 13px), depois numero agregado, depois as logos. Granicus e Deel seguem isso. O rotulo nunca e um `<h2>` grande, porque prova social deve ser lida perifericamente e nao competir com a manchete.
- Posicao: imediatamente ABAIXO do hero, antes de qualquer bloco de recurso. OpenGov, Vanta, Clerk, WorkOS, Deel e Supabase colocam ali. E a primeira coisa que o visitante ve depois da promessa, e serve de fiador dela.
- Um numero agregado ao lado das logos multiplica o valor de cada logo ("7.000+ clientes" no Granicus, "600+ cidades" no Zencity, "16.000+" na Vanta). Sem o numero, N logos comunicam "tenho exatamente N clientes". Com o numero, comunicam "esta e uma amostra".
- Quando ha poucas logos, pendurar um micro-resultado embaixo de cada uma (Vanta: "2.000 hrs. saved annually", "20% faster deal cycles"). Nove logos com dado batem trinta logos mudas.
- Legenda de fechamento discreta do tipo "And thousands more..." (Cloudflare) sinaliza recorte sem inflar numero.
- Marquee correto exige tres regras juntas: duplicar o grupo de logos e animar de `translate3d(0)` ate `translate3d(-50%)` para loop sem emenda; `:hover { animation-play-state: paused }`; e `@media (prefers-reduced-motion: reduce) { animation: none }`. OpenGov e Sanity implementam as tres.
- Velocidade de marquee institucional e lenta a ponto de quase nao se notar: OpenGov usa 90s por ciclo. Nada perto dos 10 a 20s tipicos de SaaS. Movimento lento le como calma; movimento rapido le como anuncio.
- Normalizar no pipeline de asset, nao so no CSS: Zencity exporta cada selo de cidade num canvas quadrado unico (280x280, 372x372) com a margem ja embutida. Reduz o CSS a quase nada e elimina a briga entre formatos.
- Alt text descritivo e completo em cada logo (1Doc: `alt="Brasao da Prefeitura de Americana, que e cliente 1Doc"`). Serve acessibilidade e faz o nome de cada cidade virar texto indexavel.
- Misturar cliente publico e cliente privado na mesma faixa (Cloudflare poe Department of Homeland Security entre Visa e Roche). O publico prova conformidade, o privado prova competencia tecnica.
- Faixa delimitada por bordas de 1px (Supabase usa `border-y` e `border-x`) em vez de fundo colorido. Marca o territorio da secao sem gritar, o que casa com tom institucional.
- Barra de metricas horizontal logo abaixo do hero, antes de qualquer secao de produto. Transcend ($1.9B / 174B / 418M / 99%), Drata (8.500+ clientes e 4.8 no G2), Usercentrics (2,4 milhoes de sites, 195 paises, 99% de retencao) e DataGuard (4.000 organizacoes, 1,5 milhao de horas) fazem exatamente isso. Sempre numero grande e rotulo pequeno em cima. Para a Intelecto: 10+ anos, 8 camaras municipais, 482 camaras com prazo ate mai/2027, ~83 criterios PNTP.
- Logo de cliente com resultado colado, nunca logo mudo. Vanta atribui um numero a cada empresa ('2.000 h/ano economizadas' na Snowflake, '20% deal cycles' na Clay). Faixa de logo sem contexto e decoracao; logo com metrica e argumento.
- Hero em duas frases que criam tensao antes de oferecer solucao. Transcend: 'Your AI initiatives are ready. Your data is not.' Infolock: 'A LGPD exige DPO. Sua empresa ja tem um encarregado de dados atuante?'. Afirma um fato incontestavel e depois abre a lacuna.
- Pagina de servico organizada como escada de etapas numeradas. Infolock detalha o DPO as a Service em 6 etapas nomeadas (nomeacao e registro, canal de titulares, interface com a ANPD, treinamentos, relatorios, preparacao para auditoria). Transforma servico intangivel em entregavel contavel, que e o que permite montar termo de referencia.
- Comparacao em duas colunas 'como e hoje' contra 'como fica com a gente'. Didomi ('Your data pipeline today' vs 'with Didomi'), DPOnet (o que voce acha que e adequacao vs o que realmente e), Infolock (bloco problema vs solucao). E o tradutor de juridiques mais eficiente que existe.
- Risco regulatorio com dado especifico e datado, nunca com valor de multa isolado. Osano cita '21 leis estaduais distintas em 2026', '130 milhoes de consumidores com direito a DSAR', 'US$ 1 bilhao em multas em 2024'. Infolock nao cita valor nenhum e usa a frase mais forte da pesquisa: 'nao ter encarregado nomeado ja e descumprimento da lei'. Fato verificavel assusta mais e ofende menos que numero redondo de multa.
- Terceiro validador tratado como conteudo de primeira classe, com nome, titulo e trimestre. OneTrust cita 'Leader in The Forrester Wave for Privacy Management Software, Q4 2025'; Securiti empilha Gartner, Forrester, IDC, IAPP e G2 numa faixa. No setor publico municipal o equivalente e citar a norma com nome, orgao e ano (Cartilha PNTP 2026 da Atricon, Lei 14.133, Resolucao CD/ANPD).
- Grid de normas ou frameworks como selos visuais. Vanta mostra 8 (SOC 2, ISO 27001, GDPR, HIPAA, HITRUST, ISO 42001, FedRAMP, DORA); Drata mostra 6 com '+ More'; DPOnet mostra ISO 27001 e 27701. Comunica dominio regulatorio em um relance para quem so bate o olho.
- Nomear a plataforma ou a metodologia, de preferencia com marca. Securiti 'DataAI Command Graph(TM)', OneTrust 'AI-Ready Governance Platform(TM)', Osano 'The Osano Way'. Metodologia nomeada vira produto; 'nossa consultoria' continua sendo commodity.
- Segmentacao explicita por perfil de quem le, em vez de por catalogo de produto. Securiti divide em quatro tipos de equipe, Vanta e Drata em Startup / Mid-market / Enterprise, Usercentrics em 8 verticais. Cada visitante encontra em segundos o paragrafo escrito para ele.
- CTA duplo com temperaturas diferentes: um de alto compromisso e um de baixo compromisso. Legal Comply oferece 'Quero contratar' e 'Quero um diagnostico gratuito'; Infolock oferece 'Falar sobre DPO as a Service' e 'Quero entender minha situacao'; Usercentrics oferece 'Start free' e 'Explore Demo'. O botao frio captura o lead que ainda nao tem autorizacao para decidir.
- Rosto humano com credencial nomeada, no lugar de foto de banco de imagens. Infolock coloca foto e depoimento da CEO com a frase 'CEO certificada pela DPO: nao terceirizamos conhecimento'; DPO Oficial lista EXIN DPO, IAPP e ISO 27701. Em servico intangivel, a credencial da pessoa e o produto.
- Escopo detalhado antes do preco. Legal Comply lista 9 atividades incluidas e so entao mostra 'a partir de R$350 mensal'. O numero chega ancorado, e o comprador publico sai da pagina com escopo e faixa de valor prontos para o processo interno.
- FAQ em accordion no fim da pagina de servico, respondendo objecao comercial e nao duvida tecnica. Infolock usa 6 perguntas, DPOnet usa um FAQ extenso. E onde entram 'e se ja temos alguem nomeado?', 'como isso entra na licitacao?', 'quem responde a ANPD?'.
- Metrica de profundidade quando nao ha metrica de escala. DataGuard vende '1,5 milhao de horas de experiencia da equipe' e DPO Oficial vende '5+ anos'. Operacao pequena troca contador de clientes por tempo, por certificacao nomeada e por cliente nominal identificavel.
- Hero em 5 camadas na ordem fixa que converte em B2B tecnico 2025/2026: (1) kicker curto em monospace ou caixa alta pequena com o contexto ou a urgencia, por exemplo 'FIM DO E-MAIL LEGISLATIVO DO INTERLEGIS EM MAIO/2027'; (2) H1 de uma frase que diz o que a empresa faz, nao o que o cliente sente, com 44 a 60px no desktop e 30 a 34px no mobile; (3) subtitulo de uma ou duas linhas nomeando para quem e (camaras, prefeituras, autarquias) e o que substitui; (4) dois CTAs em ordem (acao concreta primeiro, conversa depois); (5) uma linha fina de reforco factual logo abaixo dos botoes (CNPJ, 10+ anos, 8 camaras atendidas). Verificado nesse formato em Tailscale, Oxide e Fastmail.
- Titulo grande em peso regular ou semibold, nunca extrabold. Oxide renderiza o H1 a 65px com font-weight 400 e letter-spacing -1.625px (cerca de -0.025em) e line-height 1.0; Migadu usa 45px, peso 700 e line-height 1.2. Peso 400 a 600 com tracking negativo le como editorial institucional; peso 800 le como anuncio de agencia. Para portugues, que tem palavras mais longas que o ingles, ficar em line-height 1.1 a 1.15 no H1 e usar text-wrap: balance.
- Faixa de prova social imediatamente abaixo do hero, antes de qualquer descricao de servico. Tailscale coloca o numero ('40,000 businesses') antes dos logos, e os logos antes dos casos. Para a Intelecto a sequencia certa e: numero verificavel (8 camaras municipais, 2 prefeituras, 1 consorcio, 3 autarquias de agua e esgoto, 1 instituto de previdencia), depois a faixa de brasoes/logos, depois duas ou tres frases de resultado com nome do orgao.
- Carrossel de logos sem biblioteca: duplicar a lista de logos no HTML, animar o container com @keyframes translateX(-50%) em animation: scroll 40s linear infinite, pausar com :hover e com :focus-within, e dentro de @media (prefers-reduced-motion: reduce) desligar a animacao e transformar em grid estatico de 4 colunas. Zero JS, zero CDN, e acessivel. Os logos de orgao publico devem aparecer coloridos e legiveis, nunca em cinza com opacity 0.4, porque o brasao e a prova.
- Medida de linha entre 60 e 70 caracteres. Migadu usa container de aproximadamente 660px para texto a 14px. Para 17px em portugues, isso da algo entre 62ch e 68ch. Definir --medida: 65ch e aplicar max-width: var(--medida) em todo p e li, mesmo dentro de grids largos.
- Escala tipografica modular fixa em tokens, nunca font-size solto. O gov.br usa Minor Third (1.2) sobre base de 14px. Para este publico recomendo base 17px com razao 1.25 (Major Third): 13.6 / 17 / 21.25 / 26.5 / 33.2 / 41.5 / 51.9px, expostos como --step--1 ate --step-5 em :root, e usar clamp() para o titulo (por exemplo clamp(2rem, 1.2rem + 3.2vw, 3.25rem)) para nao precisar de breakpoint no H1.
- Alinhar o azul de acao ao azul institucional brasileiro. Medi ao vivo no portal gov.br: --color-primary-default e --interactive valem #1351b4. Contraste de #1351B4 sobre branco e 7.3:1 (passa AAA); o #2563EB atual da Intelecto da 5.17:1 (passa so AA). Recomendacao: navy #1E3A5F para texto e cabecalho (11.5:1 no branco), #1351B4 para link e botao primario, #2563EB reservado para hover e estados ativos.
- Cuidado com o cinza #6B7280 da paleta atual: sobre branco ele da 4.83:1, que passa AA por margem minima, mas sobre qualquer painel levemente tintado (por exemplo #F1F5F9) cai para 4.41:1 e reprova. Regra pratica: texto secundario nunca abaixo de #4B5563, e nenhum texto cinza sobre fundo cinza.
- Estado de foco visivel copiado do GOV.UK: :focus-visible com fundo amarelo #FFDD00, texto preto #0B0C0C e box-shadow de 0 -2px #FFDD00 mais 0 4px #0B0C0C. Funciona sobre navy, sobre azul e sobre branco com uma unica regra, e atende o SC 1.4.11 nivel AA. Adicionar scroll-margin-top igual a altura do header sticky em todo alvo de ancora, para atender o SC 2.4.11 Focus Not Obscured.
- Alvos de toque com no minimo 24x24 pixels CSS (WCAG 2.2 SC 2.5.8, nivel AA), e 44x44 nos botoes principais e nos itens de menu mobile. Os pontos de falha tipicos sao icones de rede social no rodape, setas de carrossel e links dentro de tabela de precos.
- Barra de acessibilidade eMAG funcional no topo de todas as paginas: 'Ir para o conteudo [1]' com accesskey=1, 'Ir para o menu [2]' com accesskey=2, 'Ir para a busca [3]' com accesskey=3, mais controles de contraste e de tamanho de fonte persistidos em localStorage, mais uma pagina /acessibilidade descrevendo os atalhos. Isso e exigido pela Portaria n. 3 de 2007 nos orgaos, e no site da fornecedora funciona como demonstracao de competencia.
- Dark mode com color-scheme e light-dark() (Baseline desde maio/2024): declarar :root { color-scheme: light dark; } e definir cada token uma unica vez, por exemplo --superficie: light-dark(#FFFFFF, #0F172A). O toggle so escreve color-scheme: light ou dark na raiz. Oferecer tres estados (sistema, claro, escuro) e comecar em sistema. No escuro, nao usar o navy #1E3A5F como fundo (fica lamacento): usar #0F172A ou #111827 e reservar o navy para superficies elevadas.
- Bento box com disciplina: usar em uma unica secao (a de servicos), com grid de 12 colunas e 6 blocos, sendo um bloco destaque ocupando 2x2 (o produto carro-chefe, Mirante ou e-mail .leg.br) e os demais 1x1 ou 2x1. Cada bloco precisa conter uma ideia completa: titulo, uma frase e um dado ou visual. Se todos os blocos tiverem o mesmo tamanho, nao e bento, e so um grid de cards.
- Paginas de servico construidas como documentacao, nao como landing page: sumario lateral sticky em desktop com ancoras, secoes na ordem problema, o que entregamos, como funciona tecnicamente (com diagrama), prova (clientes reais linkados em producao), preco de referencia, e como contratar. Esse formato sobrevive a impressao e a colagem em processo administrativo, que e o uso real do comprador publico.
- Bloco de enquadramento juridico em cada pagina de servico, com numeros de artigo citaveis: Lei 14.133/2021 (inclusive as hipoteses de dispensa por valor), LGPD 13.709/2018 para o Conformis, cartilha PNTP para o Mirante, Portaria n. 3/2007 e eMAG para acessibilidade. E o material que o diretor administrativo precisa para justificar a contratacao, e quase nenhum concorrente entrega mastigado.
- Pagina ou secao de limites, no espirito do /procon/ da Migadu ('We do not want you to use our services if they do not fit your requirements'). Para a Intelecto: o reapontamento depende de oficio assinado pelo Presidente e de chamado no Interlegis, com prazo fora do controle da fornecedora; reapontamento nao e delegacao de NS e por que a Camara nao deve pedir troca de NS; janela de migracao de caixas; o que nao esta incluso. Admitir limite reduz risco percebido em comprador que teme auditoria.
- Preco visivel (o fator 'upfront disclosure' da NN/G). Publicar ao menos a ancoragem ('a partir de R$ 500/mes para ate 10 contas, implantacao a partir de R$ 900') em vez de esconder atras de formulario. Formatar a tabela com font-variant-numeric: tabular-nums e usar overflow-x: auto no container para nao quebrar o layout no celular.
- Microinteracoes que valem a pena em CSS puro, e so essas: transition de 120 a 180ms com ease-out em background-color, border-color e transform em botoes e cards; translateY(-2px) mais aumento sutil de sombra no hover de card; underline com text-underline-offset: 3px que engrossa no hover; :focus-visible sempre pareado com o hover; e @media (hover: hover) para nao disparar estado de hover em toque. Tudo dentro de um bloco final @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; } }.
- text-wrap: balance em h1, h2 e blockquote (Baseline desde outubro/2024, limitado a 6 linhas no Chromium e 10 no Firefox) e text-wrap: pretty em p. E o maior ganho de qualidade tipografica por linha de CSS escrita, e resolve o problema de titulo em portugues terminando com uma palavra sozinha na ultima linha.
- Diagrama tecnico real no lugar de ilustracao decorativa: um SVG inline mostrando o fluxo DNS do reapontamento (dominio .leg.br permanece no Interlegis, registros MX/SPF/DKIM apontam para a infraestrutura da Intelecto, Portal Modelo e SAPL continuam intactos), legendado no estilo 'FIG. 1' que o Oxide usa. SVG inline nao viola a restricao de pagina autocontida, escala em qualquer tela, e pode herdar currentColor para funcionar em dark mode.
- Secao assinada pelo operador, com foto real: bloco curto em primeira pessoa do Luiz, com 10+ anos de mercado, telefone direto e horario de atendimento. Basecamp faz isso com o recado do fundador e com dados de tempo de casa do suporte. Empresa de uma pessoa vira vantagem declarada (voce fala com quem resolve) em vez de fragilidade descoberta depois.
- Bloco de perguntas rapidas com respostas de uma linha, no formato do Basecamp: 'O Portal Modelo continua funcionando? Sim.' / 'Precisa trocar o dominio da Camara? Nao.' / 'A Camara perde os e-mails antigos? Nao, migramos as caixas.' / 'Da para contratar por dispensa de licitacao? Depende do valor, veja o enquadramento na Lei 14.133.' Mata objecao antes da reuniao e e otimo para SEO de cauda longa.
- Links para fora como prova (o quarto fator de credibilidade da NN/G): linkar os portais das camaras clientes em producao, a pagina do Interlegis sobre a descontinuacao, o texto da Lei 14.133 e a cartilha PNTP. Fonte externa verificavel pesa mais que qualquer selo desenhado, e o comprador vai clicar.
- Rodape institucional completo em todas as paginas: razao social, CNPJ 12.286.292/0001-50, endereco, telefone, e-mail, horario de atendimento, link de acessibilidade, link de politica de privacidade e encarregado de dados (LGPD). Custa nada e responde exatamente a pergunta que o controlador interno faz antes de abrir processo.
- MARQUEE, ESTRUTURA CANONICA: dois <ul> irmaos identicos, o segundo com aria-hidden="true", dentro de um container flex com overflow:hidden. CSS minimo: .marquee{--gap:4rem;--duration:60s;display:flex;gap:var(--gap);overflow:hidden} .marquee__track{display:flex;gap:var(--gap);align-items:center;flex-shrink:0;min-width:100%;margin:0;padding:0;list-style:none;animation:marquee var(--duration) linear infinite} @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(calc(-100% - var(--gap)))}}. O min-width:100% impede faixa vazia quando ha poucos logos; o calc(-100% - var(--gap)) e o que elimina o salto.
- MARQUEE, VELOCIDADE PROPORCIONAL AO CONTEUDO: nao fixar duracao em segundos, derivar do numero de logos. Com --items:15 e --seg:4s por logo, animation-duration: calc(var(--items) * var(--seg)) da 60s. Assim, quando entrar o 16o cliente, a faixa nao acelera sozinha. Para um site institucional, algo entre 3,5s e 4,5s por logo e o ritmo certo: perceptivel, nunca apressado.
- MARQUEE, BORDAS EM FADE: mask-image: linear-gradient(to right, transparent, #000 8rem, #000 calc(100% - 8rem), transparent) no container. mask-image e Baseline widely available desde dezembro de 2023 e nao precisa de prefixo -webkit- em navegador moderno (verificado no MDN). Degrada de forma inofensiva: sem suporte, o logo simplesmente e cortado na borda em vez de sumir suave.
- MARQUEE, PAUSA EM TRES GATILHOS: .marquee:hover .marquee__track, .marquee:focus-within .marquee__track e [data-motion="paused"] .marquee__track, todos setando animation-play-state:paused. O terceiro vem de um <button aria-pressed> visivel, exigencia de WCAG 2.2.2 para conteudo que se move mais de 5 segundos. Hover sozinho nao cumpre o criterio.
- MARQUEE, MODO REDUZIDO: em @media (prefers-reduced-motion: reduce), o container perde overflow:hidden e mask-image, o track recebe animation:none, flex-wrap:wrap e justify-content:center, e o track duplicado recebe display:none. Resultado: grade estatica centralizada dos 15 clientes, que e uma secao legitima e bonita, nao uma faixa quebrada.
- LOGOS, NORMALIZACAO POR AREA (9elements metodo 3): cada logo embrulhado numa div com as dimensoes reais inline, <li class="logo" style="--w:228;--h:48">. O fator de escala e a raiz de (altura base ao quadrado / (largura x altura)), o que iguala AREA em vez de altura. Como os valores sao fixos, pre-calcular e escrever style="--scale:0.82" direto no HTML dispensa sqrt() em CSS. Aplicar forca de interpolacao em torno de 0,7 para nao exagerar em proporcoes extremas, e piso de altura em 50% da base para nada sumir.
- LOGOS, PARAMETROS CONCRETOS PARA ESTE CLIENTE: altura base 2.75rem (44px) calibrada pelo brasao quadrado de Jaguariuna; logotipo horizontal amplo (TRB Pharma, Fracttal, Pieralisi) cai para perto de 1.9rem; max-width de 12rem por item como trava dura; gap de 4rem entre logos, porque brasao municipal tem muito detalhe fino e precisa de ar para nao virar mancha.
- LOGOS, REDE DE SEGURANCA: por baixo do calculo por area, manter .logo img{max-width:12rem;height:auto;object-fit:contain} para que um logo novo sem --w/--h medidos ainda assim nao estoure a faixa. Nunca aplicar object-fit:cover em logo: corta o brasao.
- LOGOS EM TEMA ESCURO: brasao municipal e identidade heraldica oficial e deve permanecer COLORIDO nos dois temas. O ajuste correto para o escuro nao e filtro, e uma pastilha: .logo{background:var(--logo-plate);border-radius:.5rem;padding:.75rem 1rem} com --logo-plate: transparent no claro e algo como rgba(255,255,255,.92) no escuro. Se um logo especifico for monocromatico preto (caso comum em logotipo corporativo), tratar so ele com uma classe .logo--mono { filter: invert(1) } dentro do bloco de tema escuro.
- TEMA, TRES ESTADOS SEM DUPLICAR PALETA: estado padrao e a AUSENCIA de atributo. Tokens completos em :root puro na versao clara; redefinir apenas os tokens em @media (prefers-color-scheme: dark){ :root:not([data-theme="light"]){...} }; redefinir de novo em :root[data-theme="dark"]{...}. Nenhuma cor pode existir SO dentro de media query, senao o tema forcado quebra. Botao cicla Sistema, Claro, Escuro (tres estados, nao dois).
- TEMA, COLOR-SCHEME E OBRIGATORIO: :root{color-scheme:light dark} mais :root[data-theme="light"]{color-scheme:light} e :root[data-theme="dark"]{color-scheme:dark}. E o que faz scrollbar, <select>, checkbox e autofill do navegador acompanharem o tema. Sem isso o site escuro exibe campos de formulario brancos, defeito classico. Somar <meta name="color-scheme" content="light dark"> no head.
- TEMA, SCRIPT ANTIFLASH: uma linha sincrona no <head> ANTES do CSS, (function(){var t=localStorage.getItem('tema');if(t)document.documentElement.dataset.theme=t})(). Sem isso a pagina pisca branco antes de escurecer, e o piscar e percebido como site mal feito.
- TEMA, TOKENS PARA ESTE CLIENTE: partir da paleta das propostas e escurecer com criterio. Claro: --bg #FFFFFF, --surface #F6F8FB, --text #1E3A5F (o navy vira cor de texto, nao so de bloco), --text-mute #6B7280, --line #E3E8EF, --brand #2563EB. Escuro: --bg #0E1621, --surface #16202D, --text #E8EDF4, --text-mute #9AA7B8, --line #24313F, --brand #6A9BFF (o azure #2563EB puro nao alcanca contraste 4.5:1 sobre fundo escuro e precisa clarear).
- SCROLL, ANIMACAO DE ENTRADA EM TRES CAMADAS: @media (prefers-reduced-motion: no-preference){ @supports (animation-timeline: view()){ .reveal{animation:reveal linear both;animation-timeline:view();animation-range:entry 10% cover 30%} @keyframes reveal{from{opacity:0;transform:translateY(1.5rem)}to{opacity:1;transform:none}} } }. O estado natural do elemento no CSS base e o estado FINAL, entao quem nao tem suporte ve a pagina completa e correta, sem polyfill.
- SCROLL, ONDE APLICAR E ONDE NAO: aplicar nos 4 cards de servico (com atraso escalonado leve), na linha de numeros e nos depoimentos. Nunca no hero (precisa aparecer instantaneo), nunca na faixa de logos (ja tem movimento proprio), nunca em texto corrido longo. Deslocamento maximo 24px, so opacity e transform, nunca scale nem rotate: fora disso vira portfolio de agencia.
- PERFORMANCE, FORMATO POR NATUREZA DO ARQUIVO: logotipo vetorial vira SVG otimizado (poucos KB, nitido em qualquer densidade). Brasao municipal detalhado que so exista em bitmap vira AVIF com WebP de fallback dentro de <picture>, servido em 2x da caixa exibida. Nunca JPG com fundo branco.
- PERFORMANCE, DIMENSAO SEMPRE: width e height intrinsecos em todo <img>, mais height:auto no CSS. Isso zera o CLS da faixa (meta: CLS abaixo de 0,1 em 75% das visitas) e os mesmos numeros alimentam o calculo de area optica. Um par de atributos servindo a dois propositos.
- PERFORMANCE, LAZY POR POSICAO: decoding="async" em todos os logos, mas loading="lazy" APENAS se a faixa ficar abaixo da dobra. O limiar do Chrome e 1250px em 4G, entao secao a meia altura da pagina ja se beneficia sozinha. Duplicar o track NAO duplica downloads: as URLs sao as mesmas e o cache do navegador resolve.
- PERFORMANCE, ANIMAR SO O QUE E COMPOSITADO: transform e opacity apenas, nunca left, margin, width ou height. A faixa roda na thread de composicao a 60fps sem tocar em layout. will-change:transform so no .marquee__track, e so se houver jank medido, porque abusar de will-change consome memoria de GPU.
- PERFORMANCE, SECOES ABAIXO DA DOBRA: content-visibility:auto junto com contain-intrinsic-size na altura aproximada da secao pula renderizacao do que nao esta visivel. Sem o contain-intrinsic-size vira gerador de CLS, entao os dois andam juntos ou nenhum dos dois.
- FONTES: se usar Google Fonts (permitido), preconnect para fonts.googleapis.com e fonts.gstatic.com, preload apenas do woff2 do peso usado nos titulos, font-display:swap e pilha de fallback declarada de verdade. Um par serifada para titulo mais sans para texto passa institucional; sans geometrica sozinha passa startup.

## Antipadrões a evitar

- Texto do hero embutido dentro da imagem do carrossel (Instar SWOP). Fica ilegível no celular, invisível para leitor de tela e para o Google, e não responde ao alternador de contraste da própria empresa. Título e subtítulo do hero têm que ser HTML.
- Números inconsistentes entre páginas ou domínios da mesma empresa. A Instar publica "9 Estados Atendidos" e "35 colaboradores" em instar.com.br e "17 ESTADOS" e "28 COLABORADORES" em instarswop.com.br. Qualquer auditor ou concorrente que compare desmonta a credibilidade em dez segundos.
- Contadores animados que renderizam zero quando o JS não dispara. Legiflow exibe "0+" em tramitações, proposições, usuários e anos; Grupo Assessor exibe "+0 mi" de cidadãos impactados. Em site estático sem build, número precisa ser texto no HTML, com a animação apenas como enfeite opcional.
- Foto de banco de imagem com modelo jovem sorrindo diante de notebook no hero (Portal Fácil). O leitor é presidente de câmara, diretor administrativo e controlador interno, e nenhum deles se reconhece ali. Screenshot real do portal, brasão do município e prédio da câmara convertem muito melhor.
- Erros de português e de digitação visíveis. Instar: "PORTIFÓLIO" no menu e "VANTANGENS COMPETITIVAS" em título de seção. Portal Fácil: "à serviço do setor público" na headline principal. Câmaras e Prefeituras: "manutenação", "estatíscas", "protocolo eletrönico", "muncípio". Para quem vai defender a contratação numa auditoria, isso é sinal de fornecedor frágil.
- Title tag de palavra-chave, incluindo o nome dos concorrentes. Câmaras e Prefeituras lista "webline sistemas, marilia, instar penapolis, king page, plenus maringa, inga digital" dentro do próprio título da página. Prática de 2008 que hoje só destrói a percepção de seriedade.
- Homepage que não diz para quem é nem o que resolve. PublicSoft abre com "Soluções em Tecnologia da Informação e Comunicação" e CESPRO abre com "Bem vindo ao mundo CESPRO". Frase de boas-vindas queima a dobra inteira, que é o único espaço garantido de leitura.
- Selos irrelevantes para o comprador público. A IPM enfileira GPTW, "Melhores empresas para trabalhar" e "Empresa Amiga dos Animais" exatamente onde deveria haver prova de conformidade. Selo que não ajuda a justificar contratação ao Tribunal de Contas é ruído visual.
- Datas desatualizadas ou contraditórias. CESPRO com "2021 - CESPRO" no rodapé, Betha com "Copyrights 2024", Câmaras e Prefeituras com "15 anos no mercado" no hero e "Desde 2002" no institucional. Sinaliza site abandonado, que é o oposto do que uma empresa de infraestrutura precisa transmitir.
- Nenhum caminho administrativo de contratação. Elotech, Betha, IPM e 1Doc terminam em "fale com o comercial" e não dizem uma palavra sobre licitação, dispensa, Lei 14.133, minuta de termo de referência ou documentação de habilitação. É justamente aí que a venda para câmara pequena morre, porque o diretor administrativo sai da página sem saber qual é o próximo passo.
- Camadas de interrupção antes da primeira frase lida. Chatbot que abre sozinho (PublicBot na PublicSoft), widget "Fale Conosco" fixo cobrindo conteúdo (Nuvem Legislativa) e banner de cookies ocupando um terço da dobra (Instar SWOP, Portal Fácil, Betha, que ainda empilha um segundo aviso de cookies).
- Vender apenas por revendedor sem exibir um único cliente nomeado. Nuvem Legislativa escreve "as Câmaras Municipais devem contatar os revendedores autorizados", não mostra nenhum brasão e informa endereço de apartamento. A Intelecto vende direto e opera a própria infraestrutura, e precisa dizer isso explicitamente como diferencial.
- Empilhar jargão de tecnologia como prova. Betha lista Machine Learning, IoT, Reconhecimento Facial, Big Data e Telemedicina para quem administra uma câmara de 8 mil habitantes; Elotech expõe logos de React, Angular e Flutter. Para esse público, "onde ficam meus dados, quem responde no telefone e o que acontece se cair" vale mais que o stack.
- Hero genérico e intercambiável entre concorrentes. "Gestão pública eficiente, inovadora e transparente" (Elotech), "Gestão pública com eficiência e transparência" (Fiorilli), "Tecnologia e inovação à serviço do setor público" (Portal Fácil), "Tecnologia para uma gestão conectada, integrada e eficiente" (Grupo Assessor). Se a frase serve para qualquer um dos concorrentes, ela não posiciona ninguém. A Intelecto tem uma frase que só ela pode dizer, com data e número, e precisa usá-la.
- Catálogo raso disfarçado de home. CESPRO entrega uma grade "ACESSO RÁPIDO" de seis ícones, quatro notícias e nada mais: sem número de clientes, sem cidade atendida, sem preço, sem próximo passo. Plenus e Legislarr listam dez funcionalidades e zero prova social. Grade de ícones sem prova ao lado não convence quem precisa justificar gasto público.
- CTA vago ou mal escrito, como "Fale com um consultor...." com quatro pontos (Câmaras e Prefeituras) ou múltiplos rótulos diferentes na mesma página ("Saiba mais", "Conheça", "Clique para ver mais", "Quero conhecer", "Ver Depoimentos" convivendo na Instar). Um rótulo só, repetido, converte mais.
- Home-catalogo: despejar o portfolio inteiro no megamenu e deixar o corpo da pagina vazio. Tyler tem mais de 100 links de solucao no menu e um corpo com pouco mais que o H1, uma faixa de atalhos e seis fichas de segmento. Para uma empresa de uma pessoa com 7 linhas de produto isso e suicidio: parece grande sem provar nada.
- Nomenclatura abstrata de plataforma que o comprador nao consegue traduzir. Granicus vende "Service Cloud", "Operations Cloud", "Engagement Cloud" e "Destination Experience Cloud": um presidente de camara nao sabe qual deles resolve o e-mail dele. Nomear pelo problema ("E-mail oficial .leg.br", "Portal da Transparencia"), nunca por metafora.
- Carrossel de proposta de valor com verbo sem objeto: "Reduce friction", "Grow your audience", "Turn insights into impact" (Granicus). Seis slides que nao dizem o que o produto faz, e que em pagina estatica ainda custam peso e movimento sem entregar informacao.
- Colocar IA como promessa principal do hero. OpenGov usa "The AI platform that connects every department" e Jadu "AI-driven digital self-service". Para o publico descrito (politico nao tecnico, controlador com medo de auditoria do TCE), IA no H1 levanta duvida sobre responsabilidade e alucinacao antes de gerar interesse. Se entrar, entra depois e com a ressalva que a propria Accela usa: "explainable, auditable, and accountable".
- Voz informal com emoji no corpo institucional. Streamline usa emoji em quase todo titulo ("You can finally have it all", "Special Districts Strong", coracoes e biceps). Funciona na cultura de special district americano e e desastroso num site que precisa ser anexado a processo licitatorio brasileiro sob a Lei 14.133.
- Preco com placeholder "$----" atras de formulario. GovPilot mostra quatro faixas e nenhum valor ate o visitante entregar estado, tipo de orgao e e-mail. A logica publicada e boa, a parede e ruim: cria a sensacao de que o preco depende de quem esta perguntando.
- Depoimento sem pessoa. Accela mistura citacoes fortes com atribuicoes anonimas ("Office Services Coordinator, Building safety, City of Rochester, MN" e "Director, Community Development, Citrus County, FL", sem nome). A citacao sem nome le como inventada, ainda mais em site de fornecedor pequeno.
- Case composto e sem dono. A success story da Granicus sobre Service Cloud abre sem nome de orgao nem logo no topo e mistura sete cidades (Grand Rapids, Manchester, Grand Prairie, Kalamazoo, Cranbrook, Gainesville, Dunedin) sob metricas agregadas. Um case sem um unico orgao responsavel nao serve como referencia comercial nem como prova em licitacao.
- Deixar lixo de marcacao vazar para a tela. Na home da Tyler aparece renderizado o fragmento cru '" aria-describedBy="desc_559">'. Num site cujo argumento e competencia tecnica e confianca institucional, um erro visivel de HTML custa mais do que qualquer decisao de design.
- Menu de modulos sem caminho de auto-selecao. Nove dos doze listam dezenas de solucoes e nao oferecem nenhuma pergunta que ajude o visitante a se localizar. So Clariti ("Which solution is right for me?" e quiz) e CivicPlus (abas por cargo) resolvem. Para a Intelecto, com publicos tao distintos quanto camara de 5 mil habitantes e farmaceutica suica, a ausencia desse caminho e o defeito mais caro possivel.
- Tratar o prazo legal como nota de rodape. Nenhum dos 12 tem uma data-limite tao concreta quanto maio/2027 e mesmo assim varios constroem secao inteira sobre mudanca regulatoria. Enterrar o fim do E-mail Legislativo dentro de um paragrafo de servico, em vez de fazer dele a espinha da home e de uma pagina propria com URL semantica, joga fora a unica vantagem estrutural que a Intelecto tem sobre a Instar.
- Prova social generica em mural mudo de logos. Granicus e CivicPlus conseguem porque tem 7.000 e 13.000 clientes. Com 14 clientes, um mural de brasoes de camara municipal sem contexto parece escasso e amador. Ou vem com nome, lugar e um numero por cliente, ou nao vem.
- Bloqueio de rastreamento como sintoma de site fechado: revize.com, publicinput.com, civica.com e rocksolid.com respondem 403 a qualquer cliente que nao seja navegador. Alem de nao terem podido ser verificados aqui, isso indica configuracao de WAF que tambem penaliza indexacao e ferramentas de acessibilidade. Para a Intelecto, cujo trafego vai depender de busca organica por "e-mail interlegis desativado", fechar o site para crawler e um erro caro.
- Usar marquee animado com menos de 12 logos. Este e o erro mais provavel para a Intelecto, que tem 8 brasoes de camara. Com poucos itens o ciclo se fecha em segundos e o visitante ve os MESMOS brasoes passando de novo, o que grita "tenho pouquissimos clientes". Abaixo de 12 logos, grade estatica; de 15 para cima, marquee passa a fazer sentido. Supabase mostra 6 logos numa grade estatica justamente por isso.
- Animar a faixa quando o objetivo e o leitor ENCONTRAR um nome especifico. O presidente de camara de cidade pequena procura a cidade vizinha para se espelhar e para ligar pedindo referencia. Carrossel torna essa busca impossivel: o alvo passa e some. Grade estatica de 8 brasoes em 4x2 e escaneavel, contavel e permite parar em cima de Jaguariuna. Granicus (grade) acerta, e para este publico a grade converte mais.
- Marquee sem pausa no hover e sem `prefers-reduced-motion`. Movimento automatico com mais de 5 segundos e sem controle de parada viola o criterio WCAG 2.2.2 (Pause, Stop, Hide), replicado no eMAG. Quem vende portal de transparencia com acessibilidade cobrada em edital nao pode ter isso no proprio site.
- Aplicar `filter: grayscale(100%)` em brasao municipal. Brasao tem faixa de texto, fita, ramos e contornos finos: dessaturado vira uma mancha cinza de contraste baixo, ilegivel em 80px de altura. Ou mantem colorido (como o 1Doc faz), ou achata para silhueta solida com `brightness(0)`, mas nunca meio termo.
- Servir logo em JPG. Granicus faz isso (`home-DFPISeal-logo.jpg`, `home-austin-texas-logo.jpg`) e so nao aparece porque a secao e branca. Em qualquer fundo navy #1E3A5F vira um retangulo branco em volta do brasao. Logo e SVG ou PNG com transparencia, sempre.
- Empilhar 25 ou 30 logos para parecer maior. Vira textura, ninguem le nenhuma, e o efeito e inverso ao pretendido. Vanta usa 9. Poucos e legiveis, com dado ao lado.
- Deixar cada logo com a largura que veio do arquivo. Produz o efeito serrilhado onde uma marca horizontal parece tres vezes mais relevante que a vizinha redonda. Toda logo entra numa celula de dimensao igual, centrada, limitada por `max-height` e `max-width`.
- Titulo generico e vazio do tipo "Nossos clientes" ou "Parceiros". Os bons sao especificos e contaveis: "Trusted by 600+ cities, counties, state agencies, and law enforcement organizations" (Zencity). Um titulo que cita o TIPO de orgao faz o leitor se reconhecer.
- Rotulo da faixa em corpo grande, competindo com a manchete. Deel resolve com overline uppercase de corpo pequeno em cinza. Na pagina da Intelecto a mensagem dominante precisa continuar sendo o prazo de maio/2027.
- Faixa de logos jogada no rodape. Trust signal no rodape e trust signal desperdicado: tem que estar logo abaixo do hero, onde a promessa ainda precisa de fiador.
- Publicar brasao oficial de camara sem autorizacao. Brasao municipal e simbolo oficial do municipio, nao marca comercial de uso livre. Se alguma camara nao autorizar, usar o formato de Accela e CivicPlus (quatro numeros no lugar das logos, mais depoimento nominal com cidade) em vez de arriscar.
- Reduzir a prova social a estatistica quando VOCE TEM as logos. Accela e CivicPlus so numeros funciona porque tem 900 e 13.000 clientes. Com 14 clientes, numero sozinho e fraco: os brasoes reconheciveis carregam mais peso que "14 orgaos atendidos".
- Esquecer mascara de fade nas bordas do marquee. Sem `mask-image` com gradiente transparente nas pontas, os logos aparecem e somem cortados na borda da tela, o que le como bug e nao como movimento continuo.
- Fazer a faixa saltar no mobile mantendo a mesma altura de logo do desktop. Brasao a 80px em tela de 375px come metade do viewport. Reduzir a altura da celula e o gap em breakpoint, como o OpenGov faz com media query dedicada.
- Contador de prova social quebrado. A dpoexpert.com.br exibe literalmente '0 +' no lugar do numero de empresas atendidas, provavelmente por falha do script de animacao. Um site que vende confianca e proteccao de dados exibindo zero como prova social destroi mais credibilidade do que a ausencia da secao. Se o numero for dinamico, testar; se for pequeno, escrever fixo em texto.
- Headline abstrata que nao diz o que a empresa faz. 'Explore the World of Agentic Trust' (Drata) so funciona porque abaixo vem '8.500+ clientes' e um grid de normas. Para a Intelecto seria suicidio: o presidente de camara precisa entender em 3 segundos que ali se vende portal de transparencia, e-mail oficial e adequacao a LGPD.
- Hero que nao corresponde ao que o visitante procurou. A home da DataGuard, empresa que nasceu de DPO externo, abre com 'Achieve ISO 27001 Certification' e nao menciona DPO as a service em lugar nenhum. Quem chegou buscando encarregado terceirizado nao se reconhece. Cada pagina de servico da Intelecto precisa abrir com o vocabulario exato que o comprador digitou.
- Numero de multa como argumento principal. 'Multas de ate R$ 50 milhoes' e o clique barato do mercado brasileiro de LGPD. Nenhuma das quatro brasileiras que carreguei publica valor de multa; DPOnet, DPO Oficial e DPO Expert nao citam cifra nenhuma. Para politico eleito isso soa a chantagem e queima o vendedor. O que funciona e o fato regulatorio verificavel.
- Citar artigo de lei sem traduzir a consequencia pratica. 'Conforme o artigo 41 da LGPD' nao significa nada para um vereador. A versao que funciona e a da Infolock: 'se a ANPD solicitar informacoes, a empresa precisa de um DPO para responder'. Sempre lei traduzida em cena concreta, nunca numero de artigo solto.
- Prova social anonima ou generica. 'Clientes satisfeitos', '+5 mil empresas' sem nenhuma nomeada, depoimento assinado por 'Joao S., empresario'. Osano, Vanta, OneTrust e DPO Oficial nomeiam sempre empresa e pessoa. A Intelecto tem oito camaras reais e a TRB Pharma; nomear vale infinitamente mais que contar.
- Faixa de logos sem contexto nenhum. Grid cinza de 24 logos repetidos (Drata) e ruido visual. Se a Intelecto tem 15 a 20 clientes, o formato correto e carrossel com nome do orgao legivel mais uma linha do que foi entregue, nao um mosaico anonimo.
- Muro de texto no lugar de etapas. Paginas de servico que descrevem a metodologia em tres paragrafos corridos nao permitem ao controlador interno extrair escopo. Etapas numeradas com titulo e uma frase (Infolock, DataGuard) sao lidas; paragrafo nao e.
- CTA unico e de alto compromisso. So 'Solicitar proposta' exclui o servidor que esta pesquisando sem autorizacao para negociar. Sempre ter uma porta fria (diagnostico, checklist, PDF do alerta do fim do e-mail Interlegis).
- Numero redondo sem fonte nem data. 'Automate up to 40% of tasks' e '100% success rate' (DataGuard) sao inverificaveis e por isso pesam pouco. Todo numero no site da Intelecto precisa de origem checavel: quantas camaras, desde quando, segundo qual cartilha, em que ano.
- Estetica de startup de software: gradiente roxo, ilustracao isometrica, blob animado, emoji em titulo, 'revolucione', 'descomplique', 'transforme'. Isso e exatamente o que o briefing proibe e o que faz um controlador interno duvidar de que exista empresa por tras.
- Prometer conformidade ou ausencia de multa. Osano so pode oferecer garantia de US$ 500 mil porque tem estrutura e seguro. Uma operacao de uma pessoa que promete 'conformidade garantida' cria passivo juridico real. Garantir processo e prazo (SLA de resposta ao titular, entrega de evidencia para auditoria), nunca resultado regulatorio.
- Quadrante comparativo nomeando concorrentes. Transcend nomeia OneTrust, Securiti, BigID e Ketch num grafico. Num mercado de camaras do interior, onde todo mundo se conhece e o concorrente as vezes ja e o fornecedor do portal, atacar nominalmente a Instar cria atrito politico e nenhum ganho.
- Falar de plataforma quando o comprador quer gente. O publico da Intelecto nao quer 'automacao inteligente', quer saber quem atende o telefone quando o Tribunal de Contas cobrar. O modelo 'experts in the loop' da DataGuard e o certo: a plataforma aparece a servico da pessoa responsavel, nunca no lugar dela.
- Hero com gradiente mesh roxo/rosa desfocado, blob animado ou aurora de fundo. E o clichê mais datado de 2023/2024 e sinaliza 'startup', que e o oposto do que um presidente de camara quer contratar. Se precisar de textura no fundo, usar um grid de pontos ou linhas sutil em opacity baixa, como o Oxide faz.
- Headline generica de agencia: 'Transforme a gestao do seu municipio', 'Solucoes inteligentes em tecnologia', 'Inovacao que conecta pessoas'. Nao diz o que a empresa faz e some no meio de dez concorrentes. O titulo tem que conter o substantivo do produto (portal de transparencia, e-mail em dominio .leg.br, DPO terceirizado).
- Glassmorphism, neumorphism e cards com backdrop-filter: blur. Alem de datado, blur derruba contraste de texto e reprova WCAG, o que e autossabotagem para quem vende conformidade.
- Contador regressivo animado ate maio/2027. A urgencia e real e nao precisa de teatro: uma linha de texto com a data e a fonte (link para o Interlegis) e mais credivel e nao piscando na tela. Countdown piscante em site de fornecedor de orgao publico le como golpe.
- Foto de banco de imagens: aperto de maos, gente de terno apontando para grafico, ilustracao isometrica de pessoa com laptop e planta. Migadu e Oxide nao tem nenhuma e sao os dois exemplos mais confiaveis desta lista. Se precisar de imagem, usar captura real de tela do Mirante e brasoes reais dos clientes.
- Emoji como icone de servico. Usar SVG inline de traco uniforme (1.5px a 2px) com currentColor, ou nenhum icone.
- Carrossel de depoimentos com autoplay rapido e sem controle de pausa. Viola o SC 2.2.2 (Pause, Stop, Hide) e faz o visitante perder o texto no meio. Se houver depoimento, mostrar dois ou tres estaticos em grid.
- Animacao de entrada em toda secao ao rolar (o padrao AOS/fade-up). Deixa a pagina lenta em maquina antiga, que e o parque tipico de camara municipal, e cria a sensacao de site de agencia. Se usar, apenas opacity com duracao curta e sempre desligado em prefers-reduced-motion.
- Construir estrutura visual sobre animation-timeline com scroll() ou view(). A propria MDN marca o recurso como 'Limited availability, not Baseline' porque nao funciona em alguns dos navegadores mais usados. So dentro de @supports, e so como enfeite descartavel.
- Scroll-jacking, parallax pesado, cursor customizado e efeito de texto que revela letra por letra. Tudo isso atrapalha leitura, quebra teclado e some em leitor de tela.
- CTA unico do tipo 'Comece agora gratis' ou 'Teste gratis por 14 dias'. Nao existe trial em contratacao publica: o caminho e diagnostico, proposta, oficio e processo. Os CTAs certos sao 'Ver diagnostico do dominio da sua Camara', 'Baixar o alerta sobre o fim do e-mail Interlegis' e 'Falar no WhatsApp'.
- Esconder preco atras de formulario obrigatorio. A NN/G lista 'upfront disclosure' como um dos quatro fatores de credibilidade e cita justamente conteudo com barreira como destruidor de confianca. Publicar ao menos a faixa de ancoragem.
- Numeros inventados ou vagos: '+500 clientes satisfeitos', '99% de satisfacao', 'lider de mercado'. Comprador publico checa. Usar so o que e verificavel e nomeavel: 8 camaras, 2 prefeituras, o CONSISP, tres autarquias de agua e esgoto, a TRB Pharma.
- Dark mode implementado so com @media (prefers-color-scheme: dark) e sem tokens no :root claro, ou com cores definidas exclusivamente dentro da media query. Resultado: fundo transparente e texto ilegivel quando o tema muda. Definir a paleta completa em :root e trocar com light-dark() ou com [data-theme].
- Barra de acessibilidade decorativa: links de atalho que nao apontam para id nenhum, botao de contraste que so troca uma cor, ou widget de acessibilidade carregado de CDN externo. Alem de quebrar a restricao de pagina autocontida (e o CSP), um widget que nao funciona e pior que nenhum, porque o auditor testa.
- Carregar o VLibras (ou qualquer plugin de acessibilidade) por script de CDN externo sem avaliar o impacto: viola a restricao de site autocontido, adiciona dependencia de terceiro no carregamento e costuma ser o gargalo de performance da pagina. Se for entrar, entrar consciente e isolado, nunca no caminho critico.
- Bento grid com 9 ou 12 cards todos do mesmo tamanho. Sem assimetria e sem um bloco dominante, nao ha hierarquia: e so um grid de cards, e o visitante nao sabe qual e o produto principal.
- Tipografia com personalidade de agencia: Poppins, Montserrat, Nunito, Baloo, qualquer geometrica arredondada em titulo. Puxam a leitura para 'marketing digital'. Ficar em grotescas neutras (Public Sans, Inter, Libre Franklin, IBM Plex Sans) ou serifa de texto (Source Serif 4, Newsreader).
- Carregar 4 ou 5 familias com 8 pesos cada 'para ter opcao'. Duas familias e tres pesos resolvem o site inteiro, e cada peso extra e mais um arquivo no caminho critico de uma camara com internet ruim.
- Menu hambúrguer no desktop e navegacao que esconde os quatro servicos. Com apenas 4 paginas de servico, todas devem estar visiveis na barra em desktop; esconder tudo atras de um icone e um padrao de portfolio criativo, nao de fornecedor institucional.
- Logos de clientes em escala de cinza com opacity 0.4 e todos do mesmo tamanho. Para orgao publico, o brasao da camara e a prova mais forte que existe: mostrar colorido, legivel e, se possivel, com link para o portal em producao.
- Copiar a estetica de Linear, Vercel e Stripe (dark com glow neon, capturas de UI flutuando em perspectiva, gradiente animado no titulo). Sao referencias de rhythm de secao e de metricas em tipo grande, nao de identidade: replicar a superficie faz um site de TI para camara municipal parecer produto de developer tooling, e o comprador nao se reconhece nele.
- Usar translateX(-50%) no keyframe quando existe gap entre os itens. Falta exatamente meia goteira e a faixa da um tranco visivel a cada volta. Ou se usa calc(-100% - var(--gap)) com dois tracks, ou se usa calc(-50% - var(--gap)/2) com a lista dobrada dentro de UM unico track. Misturar as duas contas e a origem de praticamente todo marquee quebrado.
- Duplicar o conjunto tres ou quatro vezes 'por seguranca'. Nao conserta o salto (que e problema de matematica, nao de quantidade), triplica marcacao para manter na mao num HTML estatico e ainda infla o DOM.
- Esquecer aria-hidden="true" no track duplicado. O leitor de tela le a lista inteira de clientes duas vezes seguidas, e o site vendido como referencia em acessibilidade falha no proprio rodape.
- Aplicar filter: grayscale(1) em todos os logos e colorir no hover. Alem de ser o clichê visual de agencia de marketing digital que o cliente pediu para evitar, apaga as cores heraldicas de brasoes municipais, que sao identidade oficial, nao decoracao. Camara nao gosta de ver o brasao dessaturado.
- Usar mix-blend-mode: multiply para dissolver fundo branco de logo. Funciona no tema claro e apaga o logo inteiro no tema escuro. Fundo se limpa no arquivo, uma vez, nao em runtime.
- Definir uma cor apenas dentro de @media (prefers-color-scheme: dark) sem ter o token equivalente em :root puro. Quando o usuario forcar o tema pelo botao, a variavel nao existe e o elemento herda cor errada ou transparente.
- Confiar so em light-dark() para toda a paleta. E Baseline apenas desde maio de 2024 e o publico do site abre a pagina em maquina de camara municipal com navegador antigo. Sem suporte, a pagina fica sem cor nenhuma. Serve como camada extra, nunca como base.
- Botao de tema com apenas dois estados. Quem entra sem escolher fica preso na primeira alternancia e nunca mais volta a seguir o sistema operacional. Sao tres estados: sistema, claro, escuro.
- Trocar o tema sem o script sincrono no <head>. A pagina pisca branco antes de escurecer e o visitante registra isso como site mal feito, mesmo sem saber nomear o que viu.
- Escrever opacity:0 ou transform:translateY(...) no CSS BASE do elemento e depois animar para o estado visivel. Se o navegador nao suportar animation-timeline (o MDN ainda classifica view() como Limited availability, nao Baseline), a secao inteira fica invisivel para sempre. O estado base tem que ser o estado final.
- Carregar AOS.js, ScrollReveal ou similar para reveals de entrada. Sao dezenas de KB de JavaScript para algo que o CSS faz em quatro linhas, contra a restricao explicita do projeto de nao ter build nem CDN externo.
- Fazer a faixa de logos rodar rapido. Movimento veloz e continuo enjoa ate quem nao ativou reduced-motion e transmite pressa, o oposto de confiabilidade institucional. Menos de 3 segundos por logo ja e rapido demais para este publico.
- Oferecer pausa apenas no :hover. Nao serve para teclado nem para toque, e nao cumpre WCAG 2.2.2. Precisa de :focus-within e de um botao real.
- Colocar loading="lazy" na faixa de logos quando ela esta logo abaixo do hero. Atrasa exatamente a prova social que precisa aparecer primeiro e, se um dos logos for o elemento de LCP, piora a metrica sem ganho nenhum.
- Publicar <img> de logo sem os atributos width e height. Quinze imagens chegando juntas sem espaco reservado empurram a pagina e mandam o CLS para bem acima de 0,25.
- Igualar a altura de todos os logos. E o metodo 1 do 9elements e o erro mais comum de faixa de clientes: logotipo horizontal 6:1 ocupa varias vezes a area de um brasao quadrado e domina a faixa, o que neste caso faz a Intelecto parecer fornecedora de farmaceutica que atende umas camaras, quando o argumento comercial e o inverso.
- Aplicar object-fit: cover em logo. Corta o brasao. Em logo, sempre contain.
- Animar left, margin-left, width ou background-position no marquee. Forca layout e paint a cada frame, engasga em maquina fraca de camara e esquenta o celular do vereador.
- Usar o elemento <marquee>. Obsoleto, sem controle de acessibilidade e sinal imediato de site amador para qualquer pessoa tecnica que abrir o inspetor.
- Colocar overflow:hidden no body ou no <html> para conter a faixa. Quebra rolagem, quebra scroll-driven animations e quebra ancoras internas. O overflow pertence ao container do marquee.
- Espalhar will-change:transform em muitos elementos. Cada declaracao reserva memoria de GPU; usado sem medir, piora a performance que pretendia melhorar.
- Usar content-visibility:auto sem contain-intrinsic-size. Vira gerador de layout shift quando a secao entra em cena, trocando um problema de renderizacao por um problema de CLS.