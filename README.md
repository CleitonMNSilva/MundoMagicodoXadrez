
♟️ Mundo Mágico do Xadrez
Aprenda e jogue xadrez com amigos que cuidam de você!
Um mundo divertido, acolhedor e seguro para crianças aprenderem xadrez brincando.

📘 Documentação do projeto
Informação	Detalhe
Projeto	Mundo Mágico do Xadrez
Idealizador	Cleiton M N Silva
Desenvolvimento com IA	Claude (IA da Anthropic)
Data da documentação	26 de novembro de 2026
Público-alvo	Crianças pequenas, pré-leitoras e iniciantes, acompanhadas por responsáveis e educadores
📑 Sumário
Visão geral
Equipe e papéis
Personagens
Estrutura da página
Funcionalidades
Jogo contra o computador
Como o computador pensa
Tabuleiro fixo
Quadrinhos, historinhas e quiz
Ajudante de dúvidas
Arquitetura de software
Marketing
Proposta de valor
Públicos
Mensagens-chave
Planos de exemplo
Plano de divulgação
LGPD e proteção de crianças
O que a página coleta
Conversa livre com IA
Base legal
Política de privacidade
Checklist de conformidade
Segurança técnica
Como publicar
Limitações e próximos passos
Créditos
1. Visão geral
O Mundo Mágico do Xadrez é uma página moderna e divertida que ensina crianças a jogar xadrez. Ela reúne a história do xadrez em quadrinhos, peças com personagens, historinhas animadas de aberturas, um quiz, um jogo de verdade contra o computador com níveis de dificuldade e um ajudante de dúvidas.

Objetivo
Ensinar xadrez de forma lúdica, segura e sem coletar dados das crianças.

Inspiração
A ideia de um site infantil de xadrez como o ChessKid, com cores vivas, personagens e jogo guiado.

Público
Crianças pequenas (pré-leitoras e iniciantes), acompanhadas por mães, pais, responsáveis e escolas.

2. Equipe e papéis
O projeto foi organizado em quatro papéis. Os papéis foram desempenhados pelo Claude, conduzido pelo idealizador, que aprovou cada etapa.

Papel	O que fez no projeto
Líder de IA	Organizou o projeto, dividiu as tarefas, conduziu as rodadas de aprovação com o idealizador e priorizou os pedidos.
Arquiteto de software	Definiu a estrutura: HTML, CSS e JavaScript separados, módulos independentes (tabuleiro, motor de xadrez, historinhas, quiz e ajudante) e a regra de segurança de conteúdo.
Criador de skills	Criou os módulos reutilizáveis: componente de tabuleiro fixo com peças animadas, motor de xadrez com níveis, quiz sorteado e ajudante de dúvidas.
Desenvolvedor de marketing	Definiu a proposta de valor, o público, a mensagem, a identidade dos personagens e os planos de exemplo.
Idealizador: Cleiton M N Silva, responsável pela ideia, pelas escolhas (nomes, personagens, visual) e pelas aprovações.

3. Personagens
Os seis personagens foram fornecidos pelo idealizador como imagens. O fundo branco foi removido para que eles apareçam sobre o céu e o gramado.

Personagem	Peça	Papel na página
Rei Sábio	Rei	Narrador do reino, ensina paciência.
Rainha Estrela	Rainha	Adversária difícil, ensina coragem.
Bispo Sorriso	Bispo	Adversário fácil, anda na diagonal.
Cavalo Faísca	Cavalo	Adversário médio, pula em L.
Torre Forte	Torre	Corre reto, ensina responsabilidade.
Peão Valente	Peão	Adversário bem fácil e ajudante de dúvidas.
4. Estrutura da página
A ordem das seções foi pensada para a criança brincar logo no começo:

Topo: título, botão “Quero jogar!”, selo “Sem cadastro, sem anúncios” e os seis personagens sobre o gramado.
Jogue contra o computador: escolha do adversário, tempo opcional, dica e voltar jogada.
A história do xadrez: cinco quadrinhos (Índia, Pérsia, Europa, hoje em dia e “e agora?”).
O reino bagunçado: três quadrinhos baseados no roteiro Xadrez Encantado.
Conheça as peças: cartões com cada personagem e as três regras de ouro.
Historinhas e aberturas: tabuleiro animado com seis historinhas (Mate do Pastor, Mate do Louco, Abertura Italiana, O Roque, O Pulo do Cavalo e A Corrida da Torre).
Quiz do campeão: cinco perguntas sorteadas entre treze.
Privacidade e segurança: recado para os responsáveis.
Rodapé: créditos da equipe.
O Peão Valente aparece como botão no canto da tela, com perguntas prontas e conversa livre.

5. Funcionalidades
5.1 Jogo contra o computador
A criança joga com as peças brancas e começa.
Ao tocar numa peça, as casas possíveis são marcadas.
O jogo segue as regras:
Xeque;
Xeque-mate;
Empate por afogamento;
Roque;
Captura especial do peão (en passant);
Empate por falta de material.
O peão que chega ao fim vira rainha automaticamente, para simplificar.
Níveis de dificuldade
Adversário	Nível	Como joga
Peão Valente	Bem fácil	Escolhe jogadas ao acaso.
Bispo Sorriso	Fácil	Olha só a jogada seguinte e erra de propósito às vezes.
Cavalo Faísca	Médio	Calcula duas jogadas à frente.
Rainha Estrela	Difícil	Calcula quatro jogadas à frente.
Tempo opcional
Sem tempo;
3 minutos por jogador;
5 minutos por jogador;
10 minutos por jogador.
O relógio só começa depois da primeira jogada da criança.

Fim do jogo
Aparece uma tela com o personagem e o botão “Jogar de novo”. O tabuleiro volta ao início.

Recursos adicionais
Dica: mostra uma boa jogada.
Voltar jogada: permite desfazer uma jogada.
5.2 Como o computador pensa
O motor usa o algoritmo de busca com poda alfa-beta. Ele gera as jogadas legais, imagina as respostas e avalia as posições por:

Material (valor das peças);
Centro do tabuleiro;
Avanço dos peões.
Quanto maior o nível, mais jogadas ele calcula à frente.

5.3 Tabuleiro fixo
O tabuleiro é montado uma única vez. As casas nunca são redesenhadas. Só as peças se movem, deslizando de uma casa para outra.

As casas têm números (1 a 8) e letras (a até h), como no xadrez de verdade.
O tabuleiro usa as cores clássicas de madeira.
5.4 Quadrinhos, historinhas e quiz
Os quadrinhos têm cenas coloridas, legenda, personagem e balão de fala.
As historinhas mostram aberturas passo a passo no tabuleiro, com frases curtas.
No último passo da historinha, o botão vira “Ver de novo”.
O quiz sorteia cinco perguntas a cada rodada e mostra estrelas.
5.5 Ajudante de dúvidas (Peão Valente)
Aparece sozinho cerca de cinco segundos depois de a página abrir e pergunta se a criança quer ajuda.
Se ninguém mexer na página por 30 segundos, pergunta: “Ainda está aí? Quer continuar brincando?”
Se a criança responde “Agora não”, ele se despede e não pergunta de novo.
Perguntas prontas (nove) funcionam em qualquer lugar.
Conversa livre (digitar ou falar) usa uma IA para gerar a resposta e só funciona quando a página está aberta pelo Claude. Antes de usar, um adulto precisa autorizar.
É o único personagem com voz. Ela usa a voz do navegador, e o botão “Voz” no menu liga e desliga.
A IA foi instruída a falar só de xadrez, usar frases curtas, nunca pedir dados pessoais e orientar a criança a falar com um adulto de confiança se aparecer algo triste ou perigoso.
6. Arquitetura de software
Arquivos do projeto
Arquivo/pasta	Função
index.html	Estrutura das seções e regra de segurança de conteúdo (CSP).
style.css	Cores, tabuleiro, quadrinhos, layout responsivo, modo escuro e redução de movimento.
script.js	Lógica: componente de tabuleiro, motor de xadrez, jogo, historinhas, quiz e ajudante.
imagens/	Personagens em WebP leve e fundo; PNGs originais em imagens/originais/.
Decisões de projeto
Sem bibliotecas externas e sem fontes do Google. A página não faz pedidos a terceiros.
Um único componente de tabuleiro usado nas historinhas e no jogo.
Textos inseridos sempre como texto simples (nunca como HTML), o que evita injeção de código.
Responsivo: o tabuleiro tem até 540 pixels e se ajusta ao celular.
Acessibilidade: contraste reforçado nos botões, descrição das imagens, menu com rolagem no celular e respeito à preferência de reduzir animações.
7. Marketing
7.1 Proposta de valor
“Aprenda e jogue xadrez com amigos que cuidam de você.”

Um lugar seguro, sem cadastro e sem anúncios, onde a criança aprende brincando.

7.2 Públicos
Crianças: querem personagens, cores e jogo.
Mães, pais e responsáveis: querem segurança, privacidade e aprendizado.
Escolas e professores: querem material pronto para aulas de xadrez e raciocínio lógico.
7.3 Mensagens-chave
Sem cadastro e sem anúncios.
Historinhas e quadrinhos em vez de textos longos.
Joga contra personagens, do bem fácil ao difícil.
Ajudante que tira dúvidas, com autorização de um adulto.
7.4 Planos de exemplo (fictícios)
Os planos abaixo são usados apenas na apresentação. A página não cobra nem coleta dados.

Plano	Preço de exemplo	O que inclui
Explorador	Grátis	História e peças, duas historinhas animadas e quiz diário.
Família	R$ 19/mês	Todas as historinhas, painel dos pais, selos e troféus.
Escola	Sob consulta	Turmas e professores, plano de aulas e relatórios de progresso.
7.5 Plano de divulgação sugerido
Publicar a página no GitHub Pages e mostrar na turma.
Criar vídeos curtos dos personagens para redes sociais de escolas e grupos de pais.
Levar a página a escolinhas de xadrez e professores como material de apoio.
Medir interesse com conversas e formulários externos, sem rastrear crianças dentro da página.
Cuidado com a divulgação: publicidade dirigida a crianças tem regras próprias. A divulgação deve falar com os responsáveis.

8. LGPD e proteção de crianças
Aviso: esta seção organiza informações e boas práticas. Não é parecer jurídico. Para uso real, valide com o professor ou com um advogado.

8.1 O que a página coleta
Nada. Não há cadastro, formulário, cookies de propaganda, contador de visitas, anúncios, fontes externas nem armazenamento do que a criança faz. O jogo e o quiz funcionam no próprio aparelho.

8.2 O ponto de atenção: conversa livre com a IA
O texto digitado ou falado no ajudante vai para uma IA para gerar a resposta. A criança pode, sem querer, escrever um dado pessoal. Por isso:

Um adulto precisa tocar em “Sou o adulto responsável e autorizo” antes de digitar ou falar.
O aviso pede para não escrever nome, endereço nem telefone.
As perguntas prontas funcionam sem enviar nada.
A IA foi instruída a nunca pedir dados pessoais.
No GitHub, a conversa livre não funciona, e a página não envia nenhum texto para fora.
8.3 Base legal (resumo)
LGPD, art. 14: o tratamento de dados de crianças deve ser feito em seu melhor interesse e, no caso de crianças, com consentimento específico de pelo menos um dos pais ou responsável. O serviço não deve exigir mais dados do que o necessário para a atividade.
ECA Digital (Lei 15.211/2025): em vigor desde 17 de março de 2026 (conforme notícias consultadas em 26/11/2026). Cria obrigações para produtos e serviços digitais acessados por crianças e adolescentes, como proteção desde a concepção, verificação de idade, configurações protetivas, supervisão dos pais e canais de denúncia. A ANPD fiscaliza.
Como a página se apoia nisso: coleta zero, sem anúncios, sem perfil de uso, autorização de adulto antes da conversa e aviso claro aos responsáveis.

8.4 Política de privacidade (modelo curto)
Política de privacidade: Mundo Mágico do Xadrez
Esta página é um projeto acadêmico criado por Cleiton M N Silva, com apoio do Claude.
Não pedimos nome, e-mail, idade, foto, localização ou qualquer cadastro.
Não usamos anúncios, cookies de propaganda nem ferramentas de rastreio.
O jogo e o quiz funcionam no seu aparelho e não são enviados a ninguém.
A conversa livre com o ajudante só funciona quando um adulto autoriza. O texto digitado é enviado a uma IA para gerar a resposta e a página não o guarda. Peça à criança para nunca escrever dados pessoais.
Para tirar dúvidas, fale com o responsável pelo projeto, Cleiton M N Silva.
8.5 Checklist de conformidade

Sem cadastro e sem coleta de dados.

Sem anúncios e sem rastreio.

Sem fontes ou bibliotecas de terceiros.

Autorização de adulto antes da conversa livre.

Aviso aos responsáveis dentro da página.
Política de privacidade publicada em página própria.
Contato do responsável (e-mail) informado.
Revisão por professor ou advogado antes de uso real.
9. Segurança técnica
Medida	Como está no projeto
Regra de segurança de conteúdo (CSP)	No index.html: só carrega arquivos do próprio site, sem scripts de fora e sem formulários.
HTTPS	Automático no GitHub Pages.
Sem segredos no código	Nenhuma chave de API ou senha.
Sem injeção de código	Textos inseridos como texto simples.
Sem dependências	Não usa bibliotecas externas, então não há atualização pendente.
Sem formulários	Nada para enviar ou invadir.
Privacidade de origem	A página pede aos navegadores para não enviar a página de origem.
Limites
O GitHub Pages não permite configurar cabeçalhos de segurança do servidor. Para isso, seria preciso um serviço na frente do site.

Uma IA que responda em qualquer lugar exigiria um servidor com chave de API, o que traria novas obrigações de proteção de dados.

Como foi testado
O motor de xadrez foi comparado com contagens de jogadas conhecidas (testes de referência) e acertou nas posições de abertura, de roque e de captura especial.
Partidas completas foram jogadas por script nos quatro níveis, sem erros.
Os testes foram feitos por script. Falta testar em navegadores e aparelhos reais.
10. Como publicar (VS Code e GitHub)
Descompacte a pasta mundo-magico-xadrez-projeto.
Abra a pasta no VS Code e instale a extensão Live Server.
Clique com o botão direito em index.html e escolha Open with Live Server para testar.
No GitHub, crie um repositório e envie todos os arquivos da pasta.
Em Settings > Pages, escolha a branch main e a pasta / (root).
Aguarde alguns minutos e acesse o endereço informado.
Publique a política de privacidade da seção 8.4 e inclua o contato do responsável.
11. Limitações e próximos passos
Limitações atuais
A conversa livre do ajudante só funciona no Claude. Fora dele, só as perguntas prontas.
A voz do ajudante depende do navegador e só toca depois do primeiro toque na página.
As peças usam os símbolos do sistema, então o desenho muda um pouco de aparelho para aparelho.
O computador não detecta empate por repetição de posição.
O peão sempre vira rainha, sem escolha.
Os testes não cobrem todos os navegadores e celulares.
Próximos passos sugeridos
Conjunto de peças desenhado (imagens) para ficar igual em todo aparelho.
Servidor próprio para a IA responder em qualquer lugar, com proteção de dados.
Mais historinhas e mais níveis de jogo.
Página própria de privacidade e área para responsáveis e escolas.
Testes com crianças e responsáveis para ajustar textos e botões.
12. Créditos
Idealizador: Cleiton M N Silva.
Desenvolvimento: Claude (IA da Anthropic), organizado nos papéis de líder de IA, arquiteto de software, criador de skills e desenvolvedor de marketing.
Personagens: imagens fornecidas pelo idealizador.
Roteiro: Xadrez Encantado (base da historinha “O reino bagunçado”).
Referências: Lei Geral de Proteção de Dados (Lei 13.709/2018); ECA Digital (Lei 15.211/2025).
<p align="center"> <strong>♟️ Mundo Mágico do Xadrez — aprender, brincar e pensar! ♟️</strong> </p>




