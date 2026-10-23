# Contexto do projeto e geração de imagens

Um site que mostra duas fotografias lado a lado com opção de escolha de qual é a imagem gerada por IA Quatro fotografias reais do Unsplash. Para cada uma, gerei uma imagem de IA com tema e enquadramento parecidos, mas não tentei reproduzir pixels da fotografia original. O jogo compara uma foto real e uma imagem sintética do mesmo tipo de cena, pra dificultar a identificação da imagem real.

## Como foi feito as imagens

1. Abri o Microsoft Designer e escolhi a opção de criar imagem.
2. Copiei os prompts abaixo que foram gerados pelo ChatGPT. O Microsto Designer permite usar uma foto real para dar de contexto a IA, as fotos do bolo e da capa de celular eu não anexei a foto real como contexto, já as demais sim, serve para identificarmos como a entrega de um contexto visual do que eu quero pode afetar na qualidade da imagem gerada.
4. Baixei as imagens como png e salvei o arquivo dentro da pasta `images/`.

# PROMPTS (Gerados no ChatGPT):

## 1. Bolo de caramelo

> Fotografia culinária realista, enquadramento horizontal em close-up de um pedaço generoso de bolo de caramelo com fatias finas de maçã desidratada e pequenas nozes-pecã sobre a cobertura. A textura do bolo e do caramelo deve parecer natural, com algumas irregularidades e migalhas. Luz natural suave, fundo simples e discreto, aparência de fotografia casual tirada com câmera real. Mostrar apenas o bolo e o contexto imediato; não incluir mulheres, pessoas inteiras, paisagens, pontos turísticos, letras, logotipos ou ilustrações. Sem estilo de desenho 3D.

Foto real usada como referência: [Unsplash — Raymond Petrik](https://unsplash.com/pt-br/fotografias/bolo-de-caramelo-com-fatias-de-maca-seca-n1Q6MQ_wqHw).

## 2. Capa de celular sobre um livro

> Fotografia realista de produto, em orientação horizontal. Uma capa de celular marrom com pequenas bordas azuis está apoiada na diagonal sobre um livro cinza de capa dura, ambos sobre uma superfície simples. Perspectiva de uma foto casual de smartphone, iluminação lateral suave de janela, sombras de contato realistas e textura visível dos materiais. Manter a cena minimalista, com apenas a capa e o livro. Não incluir pessoas, mãos, cenários turísticos, outros celulares, palavras, letras, marcas ou logotipos. Sem aparência de render 3D ou ilustração.

Foto real usada como referência: [Unsplash — Sayan Majhi](https://unsplash.com/pt-br/fotografias/estojo-de-telefone-em-livro-capa-dura-MB6KOk3MueY).

## 3. Abacaxi maduro

> Fotografia de natureza-morta extremamente realista de um único abacaxi maduro inteiro, com coroa de folhas verdes e casca dourada com textura detalhada. Enquadramento próximo e simples, luz natural, sombras coerentes e pequenas variações naturais na cor e na superfície da fruta. Aparência de uma foto comum tirada com câmera real, não de catálogo digital. Mostrar somente o abacaxi e um fundo discreto; sem pessoas, mãos, óculos, chapéus, textos, logotipos, frutas extras ou objetos decorativos. Sem ilustração ou render 3D.

Foto real usada como referência: [Unsplash — Fernando Andrade](https://unsplash.com/photos/ripe-pineapple-fruit-nAOZCYcLND8).

## 4. Cervo no campo

> Fotografia de vida selvagem muito realista, orientação horizontal, de um cervo marrom adulto em pé sobre grama verde durante o dia. O animal deve ter pelo natural, pernas proporcionais e galhadas coerentes; o fundo de vegetação deve ficar suavemente desfocado, como numa fotografia com foco seletivo. Luz diurna natural e cores discretas, sem efeito cinematográfico exagerado. Mostrar o cervo como assunto principal, sem pessoas, construções turísticas, cercas evidentes, texto, marcas, criaturas extras ou elementos fantásticos. Não criar desenho, pintura ou render 3D.

Foto real usada como referência: [Unsplash — Laura College](https://unsplash.com/pt-br/fotografias/fotografia-de-foco-seletivo-de-cervos-marrons-em-pe-no-campo-de-grama-verde-durante-o-dia-K_Na5gCmh38).

## Observação importante

O quiz revela a resposta depois da escolha e mostra o crédito da fotografia real. As fotografias reais vêm do Unsplash; as imagens de IA devem ser geradas por você e salvas nos nomes especificados acima. A lista de desafios incompletos aparece na página até que você adicione os arquivos correspondentes.