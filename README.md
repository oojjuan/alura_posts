# Projeto Teste / React Router DOM

Esse projeto foi criado com o intuito de aprender a como utilizar o 'react-router-dom', uma blibioteca do React que permite gerenciar as rotas nas suas aplicações.

PS: O projeto foi criado com base em um curso da Alura, "React: Desenvolvendo em React Router com JavaScript"

## Infos sobre a utilização do REACT-ROUTER-DOM
-`<Routes>` : Funciona como uma lista para armazenar os pathnames que serão utilizados.

-`<Route>` : Item dentro de "`<Routes>`" que carrega o que for desejado quando o pathname da página for o mesmo que a propriedade fornecida dentro de Route.

EX: `<Route path="/" element={<Inicio />}>`
Caso a path seja padrão, carregar o componente `<Inicio />`

-`<Route path="*">` : Caso o pathname não seja o mesmo de nenhuma Route, renderiza esse Route, que funciona como um coringa (Geralmente utilizado para uma página de 'erro 404').

-`<Link>` : Ao invés de utilizar a tag `<a>` para funcionar como um direcionamento para outra página, utilizamos o `<Link>`, visto que `<a>` executa um refresh na página, enquanto o `<Link>` só carrega aquele componente que irá mudar.

-`useLocation()` : Retorna um objeto com propriedades da página, como o pathname. Exclusivo do React Router Dom.

-`<NavLink>` : Uma tag exclusiva da biblioteca que permite uma customização melhor dos links, utilizando parâmetros como 'isActive' e 'isPending', que identificam se o link está ativo ou não.

-`<Route> <Route> </Route>` : Esse código, também chamado de **Rotas Aninhadas**, faz com que a barra de navegação apareça em todas as rotas, que renderizam as rotas aninhadas dependendo do path dela. Para explicar melhor, ao observar a estrutura em **routes.js**, podemos enxergar o código onde o Inicio e o Sobre mim estão localizados:

Na rota **'/'**, a estrutura a ser renderizada é:

`<PaginaPadrao>`
    `<Inicio />`
`</PaginaPadrao>`
        
Na rota **'/sobremim'**, a estrutura a ser renderizada é:

`<PaginaPadrao>`
    `<SobreMim />`
`</PaginaPadrao>`

-`<Outlet />` : Esse componente, utilizado quando existe rotas aninhadas, indica AONDE o conteúdo das rotas filhas devem ser renderizadas.

-`<Route index element={<Inicio />}` : O index é usado no lugar de path quando queremos que tal rota seja a mesma que o elemento pai. Sendo assim, ao invés de repetir `path='/'`, colocamos **index**.

-`useParams()` : Um hook exclusivo do react router, assim como o `useLocation()`, que permite acessar os parâmetros da rota atual, que é bem útil quando temos rotas dinâmicas onde parte da URL é usada para identificar um recurso específico.

EX: Quando definimos uma rota dinâmica, como "/posts/:id", o `useParams()` extrai o valor do parâmetro 'id' da URL. Nesse contexto, esse hook permite que acessamos o componente `Post` correto, existente no arquivo **posts.json**.