import { Component } from '@angular/core';
// import { Customer } from '../bank/types/Customer';
import { CustomerTS } from '../../types/tstypes/Customerts';

@Component({
  selector: 'app-customerarray',

  templateUrl: './customerarray.component.html',
  styleUrls: ['./customerarray.component.css']
})
export class CustomerarrayComponent {
  customers: CustomerTS[] = [
    new CustomerTS("John Doe", "john@example.com", "john_doe", "password123", "User", "1"),
    new CustomerTS("John Doe1", "john1@example.com", "john_doe", "password123", "Admin", "2")
<<<<<<< HEAD
   ]
}
=======
<<<<<<< HEAD
  ]
}
=======
   ]
}
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
