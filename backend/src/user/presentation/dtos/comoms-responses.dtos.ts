import { ApiProperty } from "@nestjs/swagger"

export class ServerErrorResponseDto {
    @ApiProperty({
        example: 500,
        description: 'Código de status HTTP.'
    })
    statusCode!: number

    @ApiProperty({
        example: 'Internal server error',
        description: 'Mensagem explicativa'
    })
    message: string
}

export class BadRequestResponseDto {
  @ApiProperty({ 
    description: 'Lista de mensagens de erro de validação dos campos do registo.',
    example: [
      "O formato do campo_xxx é inválido.",
      "O campo_yyy deve ter pelo menos 8 caracteres.",
      "O campo_zzz deve estar no formato YYYY-MM-DD."
    ] 
  })
  message: string[];

  @ApiProperty({ 
    description: 'Tipo do erro HTTP.',
    example: 'Bad Request' 
  })
  error: string;

  @ApiProperty({ 
    description: 'Código de status HTTP.',
    example: 400 
  })
  statusCode: number;
}
