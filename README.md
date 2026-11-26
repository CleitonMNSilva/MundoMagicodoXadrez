# Mundo Mágico do Xadrez

Página infantil para aprender xadrez brincando, conhecer as peças, explorar historinhas, responder a um quiz e jogar contra o computador.

**Idealizador:** Cleiton M N Silva  
**Desenvolvimento original:** Claude (IA da Anthropic)  
**Revisão desta versão:** organização de todos os arquivos na raiz para publicação no GitHub.

## Como abrir

1. Baixe este repositório ou o ZIP.
2. Abra `index.html` no navegador. Não é necessário instalar nada.
3. Para editar, abra a pasta do repositório no Visual Studio Code. A extensão Live Server é opcional.

O jogo e as imagens locais funcionam sem internet. A conversa livre com IA só funciona dentro do ambiente que disponibilize a integração Claude; fora dele, as perguntas prontas continuam disponíveis.

## Organização dos arquivos

Todos os arquivos estão diretamente na raiz do projeto, sem subpastas. Os nomes dos recursos foram ajustados para evitar conflitos.

- `index.html`: estrutura da página, navegação e áreas de conteúdo.
- `style.css`: cores, responsividade, tabuleiros, personagens e cenários.
- `script.js`: lógica de xadrez, adversário do computador, partidas demonstrativas, quiz, voz e ajudante.
- `personagem-*.webp` e `fundo-xadrez.webp`: personagens e fundo preservados do ZIP original.
- `original-*.png`: arquivos PNG originais dos personagens, também preservados.
- `peca-*.svg`: 12 imagens vetoriais para as seis peças em branco e preto, usadas no tabuleiro.
- `cenario-*.svg`: três cenários vetoriais usados no cabeçalho e na historinha do reino.
- `LICENCAS-E-IMAGENS.md`: créditos, observações sobre licenças e links para recursos externos.

## Imagens e licenças

As novas peças e cenários SVG desta revisão foram desenhados especificamente para este pacote e estão armazenados localmente. Nenhum carregamento externo é necessário para exibi-los.

Os personagens WebP/PNG já faziam parte do ZIP enviado originalmente. Como o pacote original não continha registro de autoria/licença dessas imagens, elas foram preservadas sem atribuir a elas uma licença que não foi comprovada. Consulte `LICENCAS-E-IMAGENS.md` antes de publicar o jogo.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos deste pacote diretamente para a raiz do repositório (a mesma pasta em que está `index.html`).
3. Em **Settings > Pages**, escolha a branch `main` e a opção `/(root)`.
4. Aguarde a publicação e use o endereço HTTPS apresentado pelo GitHub.

**Observação:** o GitHub aceita subpastas normalmente, mas este pacote foi preparado sem subpastas, conforme solicitado.

## Privacidade e segurança

- A página não pede cadastro, não exibe anúncios e não usa rastreadores de publicidade.
- O jogo contra o computador é executado no próprio navegador.
- Para perguntas livres no ajudante, a versão integrada ao Claude pede autorização de um adulto e envia o texto para o serviço de IA. Fora desse ambiente, só as perguntas prontas funcionam.
- A voz usa a síntese de fala do navegador e depende do suporte do dispositivo.

Consulte também a seção **Privacidade e segurança** dentro da própria página.
