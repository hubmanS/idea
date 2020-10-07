var logger = require('morgan')
require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');//para manejar la informacion en objetos.json

//importacion de modulos del folder model-routes para usarlo
import UserRoutes from './api/server/model-routes/UserRoutes';
import GroupRoute from './api/server/model-routes/GroupRoute';
import UserGR from './api/server/model-routes/UserGroupRoute';
import Invitation from './api/server/model-routes/InvitationRoute';

//instanciamos express para luego usarlo
var app = express();

//app.use(router);
app.listen(3000, function () {
  console.log('project on port 3000!');
});

/*para analizar el cuerpo de las solicitudes en formato json en los midlewares
antes que los controladores dispongar por medio de requestAnimationFrame.body
JSON: es un lenguaje de intercambio de informacion osea el intercambie de
informacion aqui igual se vaa a realizar en formeto json por eso la conf sgt.
analizador de cuerpo del objeto json que lleva la informacion el req o res.
esto es una copia de la documentacion de bodyparser(analizador del cuerpo de inf.)*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Logger(registrador) requests to the console, dev en vez de combined.
app.use(logger('dev'));
//app.use('/api/v1', router); para cada modulo segun se pone v1, v2,....vn
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/groups', GroupRoute);
app.use('/api/v1/user_groups', UserGR);
app.use('/api/v1/invitation', Invitation);

