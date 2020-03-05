import applepayAccount from './accounts/applepayAccount';
import cardAccount from './accounts/cardAccount';

export class Customer {
  readonly reference_id: string = '67457';
  readonly name: string = 'Ivan Ivanov';
  readonly phone: string = '3809654123';
  readonly email: string = 'email@ik.com';

  private accounts: object[] = [
    applepayAccount,
    cardAccount
  ];

  getAccounts(): object[] {
    return this.accounts;
  }

  setAccounts(accounts: object[]): void {
    this.accounts = accounts;
  }
}