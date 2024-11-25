import { PaginationDto } from "src/common/dto/pagination.dto";

export class ProductQuery extends PaginationDto {
    matches: Record<string, any>; // Filter conditions (e.g., { isDel: false })
}