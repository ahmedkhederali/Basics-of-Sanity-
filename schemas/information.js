// schemas/person.js
export default {
    name: 'person',
    title: 'Person',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
      {
        name: 'firstName',
        title: 'First Name',
        type: 'string',
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string',
      },
      {
        name: 'age',
        title: 'Age',
        type: 'number',
      },
      {
        name: 'nationality',
        title: 'Nationality',
        type: 'string',
      },
      
    ],
  };