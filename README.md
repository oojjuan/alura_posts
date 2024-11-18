# Projeto Teste / React Router DOM

Esse projeto foi criado com o intuito de aprender a como utilizar o 'react-router-dom', uma blibioteca do React que permite gerenciar as rotas nas suas aplicações.

PS: O projeto foi criado com base em um curso da Alura, "React: Desenvolvendo em React Router com JavaScript"

## Infos sobre a utilização do REACT-ROUTER-DOM
<Routes> : Funciona como uma lista para armazenar os pathnames que serão utilizados.

<Route> : Item dentro de "<Routes>" que carrega o que for desejado quando o pathname da página for o mesmo que a propriedade fornecida dentro de Route.

EX: <Route path="/" element={<Inicio />}>
Caso a path seja padrão, carregar o componente <Inicio />

<Route path="*"> : Caso o pathname não seja o mesmo de nenhuma Route, renderiza esse Route, que funciona como um coringa (Geralmente utilizado para uma página de 'erro 404').

<Link> : Ao invés de utilizar a tag <a> para funcionar como um direcionamento para outra página, utilizamos o <Link>, visto que <a> executa um refresh na página, enquanto o <Link> só carrega aquele componente que irá mudar.

useLocation() : Retorna um objeto com propriedades da página, como o pathname. Exclusivo do React Router Dom.

<NavLink> : Uma tag exclusiva da biblioteca que permite uma customização melhor dos links, utilizando parâmetros como 'isActive' e 'isPending', que identificam se o link está ativo ou não.