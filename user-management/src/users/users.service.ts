import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

 

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find(user => user.id === id);
  }

  create(user: User): User {
    user.id = this.idCounter++;
    this.users.push(user);
    return user;
  }

  update(id: number, updatedUser: User): User {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) return null;
    this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
    return this.users[userIndex];
  }

  delete(id: number): boolean {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) return false;
    this.users.splice(userIndex, 1);
    return true;
  }
}