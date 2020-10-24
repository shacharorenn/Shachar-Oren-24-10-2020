import { HttpStatus, HttpException } from "@nestjs/common";

export class BreakException extends HttpException {
    constructor() {
      super('Break!', HttpStatus.CONTINUE);
    }
  }