import { IsString, IsInt, Min, Max, Length, IsNotEmpty, IsDate, IsOptional } from 'class-validator';

//En Dto för att kontrollera/validerar inmatningar med post och i en partial class för put
//Denna är viktig för att data som lagras är av correkt typ eller längd enligt specifikationen nedan
//Denna klass använde Class-validator och vilkoren används även för att hjälpa min felhantering.
export class CreateApiDto {

    @IsString()
    title: string;

    @IsString()
    @Max(200)
    @IsOptional()
    description: string;

    @IsString()
    @IsOptional()
    isCompleted: string;

}
