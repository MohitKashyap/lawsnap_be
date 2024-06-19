import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackendRoleController } from '@app/controllers/backendRole.controller';
import { BackendRoleService } from '@app/services';
import {
  BackendRole,
  BackendRoleSchema,
} from '@app/schemas/backendRole.schema';
import { BackendRoleRepository } from '@app/repositories';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BackendRole.name, schema: BackendRoleSchema },
    ]),
  ],
  controllers: [BackendRoleController],
  providers: [
    BackendRoleService,
    { provide: 'backendRoleModule', useClass: BackendRoleRepository },
  ],
})
export class BackendRoleModule {}
