import { Request, Response } from "express";
import { AuthenticateClientUseUseCase } from "./AuthenticateClientUseCase";

class AuthenticateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const authenticateClientUseCase = new AuthenticateClientUseUseCase();

    const result = await authenticateClientUseCase.execute({ username, password });

    return response.json(result);
  }
}

export { AuthenticateClientController };