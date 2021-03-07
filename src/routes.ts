import { response, Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json("OK");
});

routes.post('/login', (request, response) =>{
  var {user, pass} = request.body;

  if (user == "aguiar" && pass == "aguiar00")
    return response.json({message: "Login realizado com sucesso!"});
  
    return response.json({message:"Usuário ou senha incorretos!"});

});

export default routes;