Conversao de Site Estatico para React
Introducao

Esse projeto foi feito pra transformar um site estatico de uma loja que usava so HTML e CSS em um projeto usando React.js. A ideia foi deixar o codigo mais organizado dividido em partes reutilizaveis componentes e mais facil de manter no futuro.

Alem disso agora da pra adicionar novas funcionalidades com mais facilidade como carrinho de compras filtros entre outras coisas.

Passo a passo da conversao

Criando o projeto com React

A gente usou o Vite pra criar o projeto porque ele e bem rapido e facil de usar.

Comandos usados:

npm create vite@latest nome-do-projeto --template react
cd nome-do-projeto
npm install
npm run dev

Dividindo o site em componentes

Ao inves de deixar todo o HTML junto o React permite separar as partes da tela em arquivos menores chamados componentes.

Exemplos de componentes criados:

Header.jsx (cabecalho do site)

MainBanner.jsx (banner principal)

Section.jsx (secoes do conteudo)

Footer.jsx (rodape)

Isso deixa o codigo mais limpo organizado e facil de editar.

Estilizacao

Usamos o CSS puro que ja estava no site antigo. Pegamos o conteudo do CSS original e colocamos dentro do arquivo App.css. Depois esse arquivo foi importado no componente principal do React.

Com isso conseguimos manter o visual que o site ja tinha so que agora funcionando com React.

Funcionalidade

Por enquanto o site ainda e mais visual sem muitas funcoes. Mas com a base feita em React fica muito mais facil adicionar interacoes no futuro como filtros buscas ou carrinho.

Testes e ajustes

Depois que tudo foi montado testamos o site no navegador e ajustamos o que era necessario principalmente na parte visual e responsiva pra funcionar bem em diferentes tamanhos de tela.

Como rodar o projeto

Clonar o repositorio:

git clone https://github.com/seu-usuario/seu-repositorio.git

Acessar a pasta do projeto:

cd nome-do-projeto

Instalar as dependencias:

npm install

Rodar o projeto:

npm run dev

Conclusao

Converter o site pro React foi um bom exercicio pra entender como dividir o codigo em partes menores e organizadas. No comeco foi um pouco desafiador adaptar o HTML e CSS pro jeito do React mas com o tempo ficou mais tranquilo.

Outra coisa importante foi aprender a usar o Git de forma mais organizada com commits que explicam bem o que foi feito. No geral o projeto serviu pra treinar boas praticas de front-end e preparar o codigo pra crescer com mais funcionalidades depois.
