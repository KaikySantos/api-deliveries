import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();

    const delivery = await updateDeliverymanUseCase.excute({
      id_deliveryman,
      id_delivery
    });

    return response.json(delivery);
  }
}

export { UpdateDeliverymanController };