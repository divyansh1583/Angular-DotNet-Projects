import { Component } from '@angular/core';

@Component({
  selector: 'app-table-binding',
  templateUrl: './table-binding.component.html',
  styleUrls: ['./table-binding.component.scss']
})
export class TableBindingComponent {
  items = [
    {
        'firstname': 'Divyansh',
        'lastname': 'Chauhan',
        'age': 19,
        'gender': 'male',
        'address': '123 St Alpine Woods, Washington, USA',
        'favourite_subject': 'Forms'
    },
    {
        'firstname': 'Sophia',
        'lastname': 'Anderson',
        'age': 22,
        'gender': 'female',
        'address': '456 Oak Street, Seattle, USA',
        'favourite_subject': 'History'
    },
    {
        'firstname': 'Ethan',
        'lastname': 'Smith',
        'age': 20,
        'gender': 'male',
        'address': '789 Elm Avenue, New York, USA',
        'favourite_subject': 'Mathematics'
    },
    {
        'firstname': 'Aisha',
        'lastname': 'Kumar',
        'age': 21,
        'gender': 'female',
        'address': '321 Pine Road, Los Angeles, USA',
        'favourite_subject': 'Literature'
    },
    {
        'firstname': 'William',
        'lastname': 'Brown',
        'age': 19,
        'gender': 'male',
        'address': '567 Maple Lane, Chicago, USA',
        'favourite_subject': 'Science'
    },
    {
        'firstname': 'Ananya',
        'lastname': 'Singh',
        'age': 20,
        'gender': 'female',
        'address': '890 Cedar Court, Houston, USA',
        'favourite_subject': 'Art'
    },
    {
        'firstname': 'James',
        'lastname': 'Taylor',
        'age': 22,
        'gender': 'male',
        'address': '234 Birch Street, San Francisco, USA',
        'favourite_subject': 'Music'
    },
    {
        'firstname': 'Olivia',
        'lastname': 'Garcia',
        'age': 19,
        'gender': 'female',
        'address': '678 Walnut Drive, Miami, USA',
        'favourite_subject': 'Languages'
    },
    {
        'firstname': 'Advik',
        'lastname': 'Sharma',
        'age': 21,
        'gender': 'male',
        'address': '901 Spruce Avenue, Boston, USA',
        'favourite_subject': 'Physical Education'
    },
    {
        'firstname': 'Kavya',
        'lastname': 'Patel',
        'age': 20,
        'gender': 'female',
        'address': '345 Cedar Lane, Dallas, USA',
        'favourite_subject': 'Computer Science'
    }
];
}
