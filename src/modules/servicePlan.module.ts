import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicePlanController } from '@app/controllers/servicePlan.controller';
import { ServicePlanService } from '@app/services';
import {
  ServicePlan,
  ServicePlanSchema,
} from '@app/schemas/servicePlan.schema';
import { ServicePlanRepository } from '@app/repositories';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ServicePlan.name, schema: ServicePlanSchema },
    ]),
  ],
  controllers: [ServicePlanController],
  providers: [
    ServicePlanService,
    { provide: 'servicePlanModule', useClass: ServicePlanRepository },
  ],
})
export class ServicePlanModule {}
