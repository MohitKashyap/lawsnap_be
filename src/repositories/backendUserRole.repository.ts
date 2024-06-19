import {
  BackendUserRole,
  BackendUserRoleSchemaDocument,
} from '@app/schemas/backendUserRole.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';

@Injectable()
export class BackendUserRoleRepository extends BaseRepository<BackendUserRoleSchemaDocument> {
  constructor(
    @InjectModel(BackendUserRole.name)
    private backendUserRoleModel: Model<BackendUserRoleSchemaDocument>,
  ) {
    super(backendUserRoleModel);
  }
}
