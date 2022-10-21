import { prisma } from "../../../../database/prismaClient";

class FindAllDeliveriesUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: id_client
      },
      include: {
        Deliveries: true
      },
    });

    return deliveries;
  }
}

export { FindAllDeliveriesUseCase };