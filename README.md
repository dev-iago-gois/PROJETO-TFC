# :construction: Todos os commits "Initial commit" foram feitos pela @Trybe :construction:

<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você;
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->

## LISTAGEM DE REQUISITOS

Aqui está a lista de requisitos:

1. [x] Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de times
2. [x] Desenvolva testes que cubram no mínimo 5 por cento dos arquivos em `/app/backend/src`, com um mínimo de 7 linhas cobertas
3. [x] Desenvolva o endpoint `/teams` no back-end de forma que ele possa retornar todos os times corretamente
4. [x] Desenvolva testes que cubram no mínimo 10 por cento dos arquivos em `/app/backend/src`, com um mínimo de 19 linhas cobertas
5. [x] Desenvolva o endpoint `/teams/:id` no back-end de forma que ele possa retornar dados de um time específico
6. [x] Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de pessoas usuárias
7. [x] Desenvolva testes que cubram no mínimo 15 por cento dos arquivos em `/app/backend/src`, com um mínimo de 25 linhas cobertas
8. [x] Desenvolva o endpoint `/login` no back-end de maneira que ele permita o acesso com dados válidos no front-end
9. [x] Desenvolva testes que cubram no mínimo 20 por cento dos arquivos em `/app/backend/src`, com um mínimo de 35 linhas cobertas
10. [x] Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso com um email não cadastrado ou senha incorreta no front-end
11. [x] Desenvolva testes que cubram no mínimo 30 por cento dos arquivos em `/app/backend/src`, com um mínimo de 45 linhas cobertas
12. [x] Desenvolva um middleware de validação para o `token`, verificando se ele é válido, e desenvolva o endpoint `/login/role` no back-end de maneira que ele retorne os dados corretamente no front-end
13. [x] Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de partidas
14. [x] Desenvolva testes que cubram no mínimo 45 por cento dos arquivos em `/app/backend/src`, com um mínimo de 70 linhas cobertas
15. [x] Desenvolva o endpoint `/matches` de forma que os dados apareçam corretamente na tela de partidas no front-end
16. [x] Desenvolva o endpoint `/matches` de forma que seja possível filtrar somente as partidas em andamento, e também filtrar somente as partidas finalizadas, na tela de partidas do front-end
17. [x] Desenvolva o endpoint `/matches/:id/finish` de modo que seja possível finalizar uma partida no banco de dados
18. [x] Desenvolva o endpoint `/matches/:id` de forma que seja possível atualizar partidas em andamento
19. [x] Desenvolva testes que cubram no mínimo 60 por cento dos arquivos em `/app/backend/src`, com um mínimo de 80 linhas cobertas
20. [x] Desenvolva o endpoint `/matches` de modo que seja possível cadastrar uma nova partida em andamento no banco de dados
21. [x] Desenvolva o endpoint `/matches` de forma que não seja possível inserir uma partida com times iguais nem com um time que não existe na tabela de times
22. [x] Desenvolva o endpoint `/leaderboard/home` de forma que retorne as informações do desempenho dos times da casa com as seguintes propriedades: `name`, `totalPoints`, `totalGames`, `totalVictories`, `totalDraws`, `totalLosses`, `goalsFavor` e `goalsOwn`
23. [x] Desenvolva o endpoint `/leaderboard/home` de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end com os dados iniciais do banco de dados, incluindo as propriedades `goalsBalance` e `efficiency`, além das propriedades do requisito anterior
24. [x] Desenvolva o endpoint `/leaderboard/home` de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end, e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional
25. [x] Desenvolva o endpoint `/leaderboard/away` de forma que retorne as informações do desempenho dos times visitantes com as seguintes propriedades: `name`, `totalPoints`, `totalGames`, `totalVictories`, `totalDraws`, `totalLosses`, `goalsFavor` e `goalsOwn`
26. [x] Desenvolva o endpoint `/leaderboard/away`, de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end, com os dados iniciais do banco de dados, incluindo as propriedades `goalsBalance` e `efficiency`, além das propriedades do requisito anterior
27. [x] Desenvolva o endpoint `/leaderboard/away` de forma que seja possível filtrar a classificações dos times quando visitantes na tela de classificação do frontend e ao inserir a partida Corinthians 2 X 1 Internacional a tabela será atualizada
28. [x] Desenvolva o endpoint `/leaderboard` de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end com os dados iniciais do banco de dados
        (Bônus) 22. [ ] Desenvolva testes que cubram no mínimo 80 por cento dos arquivos em `/app/backend/src`, com um mínimo de 100 linhas cobertas
        (Bônus) 30. [x] Desenv
