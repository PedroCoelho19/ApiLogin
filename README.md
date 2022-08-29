# Api Tijuca Colabore
<strong>Stacks usadas:</strong>
<br/> <br/>
<img align="center" alt="Rafa-Js" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg">
<img align="center" alt="Rafa-Js" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
<img align="center" alt="Rafa-Js" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg">
<br /> <br />

<strong>A api é feita com base em Node(Javascript) utilizando o Express como framework. A api também utiliza o MongoDB como servidor para armazenar 
 os dados e o mongoose como biblioteca do MongoDB para fazer a conexão entre o próprio servidor e a interface do app.</strong>
 <br /> 
 
 <p>A aplicação trabalha com dois tipos de informações, as notícias do aplicativo e o cardápio do almoço. A api vai ser consumida tanto do app mobile
 quanto da parte da web, porém na parte mobile só serão utilizadas as rotas de get(Leitura dos dados) já na web será o CRUD completo, pois a web é a
 plataforma de gerenciamento onde os dados serão adicionados.</p>
 <br />
 
 <p>Na index.js veremos as 2 rotas "/news" e "/lunch" elas estão organizadas no padrão de pastas:</p>
<ul>
  <li>controllers</li>
  <li>models</li>
  <li>routes</li>
</ul>

<p>Em "routes" ambas as rotas estão organizadas por ordem do CRUD, e estão sendo direcionadas aos seus respectivos controllers, com exceção da rota do 
  cardápio (lunch) que tem um controller especial <strong>"singleControllerLunch"</strong> que recupera um cardápio por id.</p>
  
  
# ApiLogin
