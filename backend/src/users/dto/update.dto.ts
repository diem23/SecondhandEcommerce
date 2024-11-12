import { IsISO8601, IsOptional, IsString, MaxLength } from 'class-validator'

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  username: string

  @IsOptional()
  @IsString()
  @IsISO8601()
  date_of_birth: Date

  @IsOptional()
  @IsString()
  fullName: string

  @IsOptional()
  @IsString()
  location: string

  @IsOptional()
  @IsString()
  avatar: string
}
