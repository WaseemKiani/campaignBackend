import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';

@Injectable()
export class CampaignService {
  constructor(private prisma:PrismaService){}

  create(createCampaignDto: Prisma.CampaignCreateInput) {
    console.log("first Hitted");
    return this.prisma.campaign.create({
      data: createCampaignDto,
    });
  }

  findAll() {
    return this.prisma.campaign.findMany({
      where: {isDeleted: false} ,
      skip: 3,
      take: 1 
    });
  }

  findOne(id: number) {
    return this.prisma.campaign.findUnique({
      where: {id}
    });
  }

  update(id: number, updateCampaignDto: Prisma.CampaignUpdateInput) {
    return this.prisma.campaign.update({
      where: {id},
      data: updateCampaignDto,
    })
  }

  remove(id: number) {
    return this.prisma.campaign.update({
      where: {id},
      data: {isDeleted: true}
    })
  }
}
