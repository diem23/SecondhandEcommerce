import {
  BadRequestException,
  ForbiddenException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { User, UserDocument } from 'src/schema/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async findAllProfiles(queryDto: {
    matches: any;
    page: number;
    limit: number;
    sort: string;
  }) {
    const { matches, page, limit, sort } = queryDto;
    const users = await this.userModel
      .find(matches)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
    return users;
  }

  // for auth-> register
  async createNewUser(createUserDto: RegisterDto) {
    try {
      const newUser = new this.userModel(createUserDto);
      const result = await newUser.save();
      return result;
    } catch (error) {
      throw new BadRequestException('Error when created record, check app log');
    }
  }

  // for auth-> register/login
  async findUser(
    fieldName: string,
    value: any,
    options?: { select?: string[] },
  ) {
    let query: any;

    if (fieldName === 'id') {
      query = this.userModel.findById(value);
    } else {
      query = this.userModel.findOne({ [fieldName]: value });
    }
    if (options) {
      const { select } = options;
      if (select) {
        query.select(select);
      }
    }
    const res = await query.lean().exec();
    return res;
  }
}
