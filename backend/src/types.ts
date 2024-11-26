import { Types } from 'mongoose'
import { Role } from './schema'

//** Global types */
export interface TCurrentUser {
  _id: Types.ObjectId | string
  role: Role
}
