// // import { useDispatch } from 'react-redux';
// // import { AppDispatch } from '../../Redux/Store';
// // import { FormEvent } from 'react';
// // import { add } from '../../Redux/ContactsReducer';
// // import { useNavigate } from 'react-router-dom';
// // import ContactForm from './ContactForm';

// // export default function CreateContact() {
// //   const dispatch: AppDispatch = useDispatch();
// //   const navigate = useNavigate();

// //   function addContact(
// //     e: FormEvent,
// //     firstName: string,
// //     lastName: string,
// //     status: boolean
// //   ) {
// //     e.preventDefault();
// //     dispatch(add({ firstName, lastName, status }));
// //     navigate(`/contacts`);
// //   }

// //   return (
// //     <div className="create-contact-screen">
// //       <h2 className="font-bold text-2xl mb-9 text-center hover:text-blue-500 duration-300 cursor-default">
// //         Create Contact Screen
// //       </h2>
// //       <ContactForm handleClick={addContact} />
// //     </div>
// //   );
// // }


// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../../Redux/Store';
// import { add } from '../../Redux/ContactsReducer';
// import { useNavigate } from 'react-router-dom';
// import ContactForm from './ContactForm';

// export default function CreateContact() {
//   const dispatch: AppDispatch = useDispatch();
//   const navigate = useNavigate();

//   function addContact(firstName: string, lastName: string, status: boolean) {
//     dispatch(add({ firstName, lastName, status }));
//     navigate(`/contacts`);
//   }

//   return (
//     <div className="create-contact-screen">
//       <h2 className="font-bold text-2xl mb-9 text-center hover:text-blue-500 duration-300 cursor-default">
//         Create Contact Screen
//       </h2>
//       <ContactForm handleClick={addContact} />
//     </div>
//   );
// }


import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Redux/Store';
import { Contact, mutate } from '../../Redux/ContactsReducer';
import ContactForm from './ContactForm';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../../pages/ErrorPage';

export default function CreateContact() {
  const contactsList = useSelector(
    (state: RootState) => state.contacts.listOfContacts
  );
  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  const currentContact: Contact | undefined = contactsList.find((item) => item.id === Number(id));

  if (!currentContact) {
    return <Error />;
  }

  // Removed the FormEvent parameter
  function editContact(firstName: string, lastName: string, status: boolean) {
    dispatch(mutate({ id: Number(id), firstName, lastName, status }));
    navigate(`/contacts`);
  }

  return (
    <div className="create-contact-screen">
      <h2 className="font-bold text-2xl mb-9 text-center hover:text-blue-500 duration-300 cursor-default">
        Edit Contact Screen
      </h2>
      {/* Pass only the mutation behavior to the child */}
      <ContactForm
        fName={currentContact.firstName}
        lName={currentContact.lastName}
        stat={currentContact.status}
        handleClick={editContact}
      />
    </div>
  );
}
