import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  Param,
  Query,
  // Delete,
} from '@nestjs/common';
// import { PersonService } from './person.service';
// import { CreatePersonDto } from './dto/create-person.dto';
// import { UpdatePersonDto } from './dto/update-person.dto';

// @Controller  => 定义请求路径
@Controller('api/person')
export class PersonController {
  // constructor(private readonly personService: PersonService) {}
  // @Post()
  // create(@Body() createPersonDto: CreatePersonDto) {
  //   return this.personService.create(createPersonDto);
  // }
  // @Get()
  // findAll() {
  //   return this.personService.findAll();
  // }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.personService.findOne(+id);
  // }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
  //   return this.personService.update(+id, updatePersonDto);
  // }
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.personService.remove(+id);
  // }

  // 路由匹配顺序

  // api/person/find?name='1'&age=2
  // Get + Query
  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    return `received: name=${name}, age=${age}`;
  }

  // @Get 定义请求方式 , 第一个参数定义请求参数
  // @Param 定义请求参数的传参方式
  // ulParam 定义请求function
  // Get + Param
  // api/person/:id
  @Get(':id')
  ulParam(@Param('id') id: string) {
    return `received id = ${id}`;
  }
}
