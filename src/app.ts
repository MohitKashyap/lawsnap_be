import { Module } from '@nestjs/common';
import { BoatModule } from '@libs/boat';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BackendPermissionModule,
  BackendUserModule,
  EmployeeModule,
  BackendRoleModule,
  BackendUserPermissionModule,
  BackendUserRoleModule,
  MasterRoleModule,
  InvoiceModule,
  InvoiceItemModule,
  InvoiceTransactionModule,
  SubscriptionModule,
  PermissionModule,
} from './modules';
import { CustomLogger } from '@libs/boat/logger/customLogger';
@Module({
  imports: [
    BoatModule,
    EmployeeModule,
    BackendUserModule,
    BackendPermissionModule,
    BackendUserModule,
    BackendRoleModule,
    BackendUserPermissionModule,
    BackendUserRoleModule,
    MasterRoleModule,
    InvoiceModule,
    InvoiceItemModule,
    InvoiceTransactionModule,
    SubscriptionModule,
    PermissionModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/lawsnaps'),
  ],
  providers:[
    CustomLogger
  ]
})
export class AppModule {}
