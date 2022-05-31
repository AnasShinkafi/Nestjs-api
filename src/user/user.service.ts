import { Injectable, HttpException } from '@nestjs/common';
import { resolve } from 'path';
import { USER } from './users.mock';
@Injectable()
export class UserService {
    private users = USER;
     
    public getUser() {
        return this.users;
    }

    public postUser(user) {
        return this.users.push(user);
    }

    public getUserById(id: number): Promise<any> {
        const userId = Number(id);
        return new Promise((resolve) => {
        const user = this.users.find((user) => user.id === userId);
        if (!user) {
            throw new HttpException('Not found', 404);
        }
        return resolve(user);
        });
    }

    public deleteUserById(id: number): Promise<any> {
        const userId = Number(id);
        return new Promise((resolve) => {
        const index = this.users.findIndex((user) => user.id === userId);
        if (index === -1) {
            throw new HttpException('Not found', 404);
        }
        this.users.splice(index, 1);
        return resolve(this.users);
    });
   }

    public putUserById(id: number, propertyName: string, propertyValue: string): 
    Promise<any> {
        const userId = Number(id);
        return new Promise((resolve) => {
        const index = this.users.findIndex((user) => user.id === userId);
        if (index === -1) {
            throw new HttpException('Not found', 404);
        }
        this.users[index] [propertyName] = propertyValue;
        return resolve(this.users);

    });
   }
}
