import { AppService } from './app.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpCode,
  ParseUUIDPipe,
  ParseEnumPipe,
} from '@nestjs/common';

import {
  CreateReportDto,
  UpdateReportDto,
  ReportResponseDto,
} from './dtos/report.dto';
import { ReportType } from './data';
import {} from './app.service';
@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ): ReportResponseDto[] {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;

    return this.appService.getAllReports(reportType);
  }
  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponseDto {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getReportById(reportType, id);
  }

  @Post()
  createReport(
    @Body() { amount, source }: CreateReportDto,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ): ReportResponseDto {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.createReport(reportType, { amount, source });
  }

  @Put(':id')
  updateReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateReportDto,
  ): ReportResponseDto {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.updateReport(reportType, id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id') id: string) {
    return this.appService.deleteReport(id);
  }
}
