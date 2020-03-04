import DefaultServices from './services/defaultServices';
import DefaultMethods from './methods/defaultMethods';

export class CommerceAccount {
  readonly name: string = 'PayCore.io';
  readonly logo: string = 'https://confluence.paymaxi.com/download/attachments/2392663/PC?version=9&modificationDate=1523488947000&api=v2';
  readonly website: string = 'https://paycore.io';

  private services: object[] = DefaultServices;
  private methods: object[] = DefaultMethods;

  setServices(services: object[]): void {
    this.services = services;
  }

  setMethods(methods: object[]): void {
    this.methods = methods;
  }

  getServices(): object[] {
    return this.services;
  }

  getMethods(): object[] {
    return this.methods;
  }
}