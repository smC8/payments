/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TransactionService } from "../transaction.service";
import { TransactionCreateInput } from "./TransactionCreateInput";
import { TransactionWhereInput } from "./TransactionWhereInput";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";
import { TransactionFindManyArgs } from "./TransactionFindManyArgs";
import { TransactionUpdateInput } from "./TransactionUpdateInput";
import { Transaction } from "./Transaction";

export class TransactionControllerBase {
  constructor(protected readonly service: TransactionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Transaction })
  async create(
    @common.Body() data: TransactionCreateInput
  ): Promise<Transaction> {
    return await this.service.create({
      data: data,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        payee: true,
        payer: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Transaction] })
  @ApiNestedQuery(TransactionFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Transaction[]> {
    const args = plainToClass(TransactionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        payee: true,
        payer: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Transaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: TransactionWhereUniqueInput
  ): Promise<Transaction | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        payee: true,
        payer: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Transaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: TransactionWhereUniqueInput,
    @common.Body() data: TransactionUpdateInput
  ): Promise<Transaction | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          amount: true,
          createdAt: true,
          id: true,
          payee: true,
          payer: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Transaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: TransactionWhereUniqueInput
  ): Promise<Transaction | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          id: true,
          payee: true,
          payer: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
