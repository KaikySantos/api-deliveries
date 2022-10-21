import { Request, Response } from "express";
import { AuthenticateDeliverymantUseUseCase } from "./AuthenticateDeliverymanUseCase";

class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const authenticateDeliverymanUseCase = new AuthenticateDeliverymantUseUseCase();

    const result = await authenticateDeliverymanUseCase.execute({ username, password });

    return response.json(result);
  }
}

export { AuthenticateDeliverymanController };