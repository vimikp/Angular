
export class Appointment {

 public Id: number;
 public Description: string;
 public Start: Date;
 public End: Date;
 public Notes: string[]; // Collection of strings
 public Party: number[]; // Collection of integers
 public ProviderEmail: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
