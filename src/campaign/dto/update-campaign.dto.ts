import { PartialType } from '@nestjs/mapped-types';
import { CreateCampaignDto } from './create-campaign.dto';

export class UpdateCampaignDto extends PartialType(CreateCampaignDto) {
    companyName: string;
    campaignName: string;
    startDate: string;
    endtDate: string;
    expectedRevinue: number;
    ActualCost: number;
    numberSent: number;
    type: string;
    budgetedCost: number;
    expectedCost: number;
    assignedBD: string;
    description: string;
    status: string;
    isDeleted: boolean;
}
