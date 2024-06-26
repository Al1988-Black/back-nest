import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    example: "apiemail@mail.com",
    description: "Адрес электронной почты",
  })
  readonly email: string;

  @ApiProperty({ example: "12345gkjjgkj", description: "Пароль" })
  readonly password: string;
}
