import { Types } from 'mongoose'
import { Role } from './shema'

//** Global types */
export interface TCurrentUser {
  _id: Types.ObjectId | string
  role: Role
}
