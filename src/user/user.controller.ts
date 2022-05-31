import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { query } from 'express';
import { from, retry } from 'rxjs';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    
    @Get() 
    public getUsers() {
        return this.userService.getUser();
    }

    @Post()
    public async postUser(@Body() user: UserDto) {
        return this.userService.postUser(user);
    }
    
    @Get(':id')
    public async getUserById(@Param('id') id: number) {
        return this.userService.getUserById(id);
    }
    
    @Delete(':id')
    public async deleteUser(@Param('id') id: number) {
        this.userService.deleteUserById(id);
        return;
    }
    
    @Put(':id')
    public async putUser(@Param('id') id: number, @Query() query) {
        const propertyName = query.property_name;
        const propertyValue = query.property_value;
        return this.userService.putUserById(id, propertyName, propertyValue);
    }

    
}
