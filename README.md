# Real ou IA? — Desafio Visual

Um site interativo desenvolvido em HTML, CSS e JavaScript puro para explorar como fotografias reais e imagens geradas por IA podem se parecer. O objetivo é observar os detalhes, escolher qual imagem é a real e conferir o feedback instantâneo.

## Como o jogo funciona

1. **Rodadas dinâmicas:** O site exibe duas imagens lado a lado (uma fotografia real do Unsplash e uma gerada por inteligência artificial) dispostas de forma aleatória.
2. **Escolha e Feedback:** O usuário clica em qual imagem acredita ser a real. O aviso de acerto ou erro é exibido imediatamente acima das imagens, acompanhado de uma breve explicação analítica.
3. **Fim do desafio e créditos:** Após concluir todas as rodadas, a pontuação final é exibida, as imagens de IA saem de cena e são revelados os créditos oficiais e links para as fotografias reais utilizadas no projeto, com a opção de jogar novamente.

---

## Contexto do projeto e geração de imagens

Para cada uma das quatro fotografias reais do Unsplash escolhidas, gerei uma imagem sintética com tema e enquadramento parecidos, sem tentar reproduzir pixels da fotografia original. A ideia é comparar uma foto real e uma imagem gerada do mesmo tipo de cena para dificultar a identificação.

### Como as imagens de IA foram feitas

1. Abri o **Microsoft Designer** e escolhi a opção de criar imagem.
2. Copiei os prompts gerados pelo ChatGPT (abaixo). O Microsoft Designer permite usar uma foto real como contexto visual para a IA:
   * **Bolo de caramelo** e **Capa de celular sobre um livro:** Gerados **sem** a foto real como contexto visual direto.
   * **Abacaxi maduro** e **Cervo no campo:** Gerados **com** a foto real anexada como referência visual, permitindo analisar como o contexto afeta a qualidade e fidelidade da entrega.
3. Baixei as imagens em formato PNG e salvei-as dentro da pasta `images/`.

---

## PROMPTS (Gerados no ChatGPT):

### 1. Bolo de caramelo
> Fotografia culinária realista, enquadramento horizontal em close-up de um pedaço generoso de bolo de caramelo com fatias finas de maçã desidratada e pequenas nozes-pecã sobre a cobertura. A textura do bolo e do caramelo deve parecer natural, com algumas irregularidades e migalhas. Luz natural suave, fundo simples e discreto, aparência de fotografia casual tirada com câmera real. Mostrar apenas o bolo e o contexto imediato; não incluir mulheres, pessoas inteiras, paisagens, pontos turísticos, letras, logotipos ou ilustrações. Sem estilo de desenho 3D.
* **Referência real:** [Unsplash — Raymond Petrik](https://unsplash.com/pt-br/fotografias/bolo-de-caramelo-com-fatias-de-maca-seca-n1Q6MQ_wqHw)

### 2. Capa de celular sobre um livro
> Fotografia realista de produto, em orientação horizontal. Uma capa de celular marrom com pequenas bordas azuis está apoiada na diagonal sobre um livro cinza de capa dura, ambos sobre uma superfície simples. Perspectiva de uma foto casual de smartphone, iluminação lateral suave de janela, sombras de contato realistas e textura visível dos materiais. Manter a cena minimalista, com apenas a capa e o livro. Não incluir pessoas, mãos, cenários turísticos, outros celulares, palavras, letras, marcas ou logotipos. Sem aparência de render 3D ou ilustração.
* **Referência real:** [Unsplash — Sayan Majhi](https://unsplash.com/pt-br/fotografias/estojo-de-telefone-em-livro-capa-dura-MB6KOk3MueY)

### 3. Abacaxi maduro
> Fotografia de natureza-morta extremamente realista de um único abacaxi maduro inteiro, com coroa de folhas verdes e casca dourada com textura detalhada. Enquadramento próximo e simples, luz natural, sombras coerentes e pequenas variações naturais na cor e na superfície da fruta. Aparência de uma foto comum tirada com câmera real, não de catálogo digital. Mostrar somente o abacaxi e um fundo discreto; sem pessoas, mãos, óculos, chapéus, textos, logotipos, frutas extras ou objetos decorativos. Sem ilustração ou render 3D.
* **Referência real:** [Unsplash — Fernando Andrade](https://unsplash.com/photos/ripe-pineapple-fruit-nAOZCYcLND8)

### 4. Cervo no campo
> Fotografia de vida selvagem muito realista, orientação horizontal, de um cervo marrom adulto em pé sobre grama verde durante o dia. O animal deve ter pelo natural, pernas proporcionais e galhadas coerentes; o fundo de vegetação deve ficar suavemente desfocado, como numa fotografia com foco seletivo. Luz diurna natural e cores discretas, sem efeito cinematográfico exagerado. Mostrar o cervo como assunto principal, sem pessoas, construções turísticas, cercas evidentes, texto, marcas, criaturas extras ou elementos fantásticos. Não criar desenho, pintura ou render 3D.
* **Referência real:** [Unsplash — Laura College](https://unsplash.com/pt-br/fotografias/fotografia-de-foco-seletivo-de-cervos-marrons-em-pe-no-campo-de-grama-verde-durante-o-dia-K_Na5gCmh38)
