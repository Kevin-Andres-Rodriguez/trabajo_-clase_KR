import { Allow, IsNotEmpty, isNotEmpty, isNumber, isPositive, isString } from "class-validator";
import { ProductEntity } from "src/entities/product.entity";

export class BaseProductDto{
    @Allow()
    @IsNotEmpty()
    @isString()
    readonly title:ProductEntity

    @isNotEmpty()
    @isNumber()
    @isPositive()
    readonly price: ProductEntity
}

