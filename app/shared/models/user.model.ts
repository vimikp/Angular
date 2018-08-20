export class User {

  Id: number;
  Name: string;
  ProviderEmail: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
