import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/AuthenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/CreateDeliverymanController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post("/authenticate/", authenticateClientController.handle);

routes.post("/client/", createClientController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);

export { routes };