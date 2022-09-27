import {
    IsString,
    IsEmail,
    IsOptional,
    IsNotEmpty,
    IsNumber,
    IsArray,
    IsPhoneNumber,
    IsDate,
    IsBoolean
} from 'class-validator';

export class CreateCampaignDto { 
    id: string;

    @IsString()
    @IsNotEmpty()
    companyName: string;


    @IsString()
    @IsNotEmpty()
    campaignName: string;


    @IsString()
    @IsNotEmpty()
    startDate: string;


    @IsString()
    @IsNotEmpty()
    endDate: string;

    
    @IsNotEmpty()
    expectedRevinue: number;
    
    @IsNotEmpty()
    ActualCost: number;

    
    @IsNotEmpty()
    numberSent: number;
    
    @IsString()
    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    budgetedCost: number;
    
    @IsNotEmpty()
    expectedCost: number;


    @IsString()
    @IsNotEmpty()
    assignedBD: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    status: string;

    isDeleted: boolean;
}
