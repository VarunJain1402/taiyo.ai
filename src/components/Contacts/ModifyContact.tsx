import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Redux/Store';
import { Contact, mutate } from '../../Redux/ContactsReducer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../../pages/ErrorPage';

export default function ModifyContact() {
  const contactsList = useSelector(
    (state: RootState) => state.contacts.listOfContacts
  );
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const currentContact: Contact | undefined = contactsList.find(
    (item) => item.id === Number(id)
  );

  if (!currentContact) {
    return <Error />;
  }

  // Yup schema for validation
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[a-zA-Z]+$/, 'Only uppercase or lowercase letters allowed')
      .required('First Name is required'),
    lastName: Yup.string()
      .matches(/^[a-zA-Z]+$/, 'Only uppercase or lowercase letters allowed')
      .required('Last Name is required'),
    status: Yup.boolean().required('Status is required'),
  });

  return (
    <div className="modify-contact-screen">
      <h2 className="font-bold text-2xl mb-9 text-center hover:text-blue-500 duration-300 cursor-default">
        Modify Contact Screen
      </h2>
      <Formik
        initialValues={{
          firstName: currentContact.firstName,
          lastName: currentContact.lastName,
          status: currentContact.status,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(mutate({ id: Number(id), ...values }));
          navigate(`/contacts`);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form className="mx-auto w-96 p-6 border-2 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-gray-200">
            <div className="mb-6">
              <label
                htmlFor="firstName"
                className="mb-2 block font-bold text-gray-700"
              >
                First Name:
              </label>
              <Field
                id="firstName"
                name="firstName"
                type="text"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md appearance-none focus:outline-none focus:border-cyan-500"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="lastName"
                className="mb-2 block font-bold text-gray-700"
              >
                Last Name:
              </label>
              <Field
                id="lastName"
                name="lastName"
                type="text"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md appearance-none focus:outline-none focus:border-cyan-500"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-6 flex flex-col sm:flex-row justify-between">
              <span className="mb-2 block font-bold text-gray-700 sm:mb-0">
                Status:
              </span>
              <div className="flex flex-col sm:flex-row">
                <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
                  <Field
                    id="active"
                    name="status"
                    type="radio"
                    value="true"
                    checked={values.status === true}
                    onChange={() => setFieldValue('status', true)}
                    className="mr-1"
                  />
                  <label htmlFor="active">Active</label>
                </div>
                <div className="flex items-center">
                  <Field
                    id="inactive"
                    name="status"
                    type="radio"
                    value="false"
                    checked={values.status === false}
                    onChange={() => setFieldValue('status', false)}
                    className="mr-1"
                  />
                  <label htmlFor="inactive">Inactive</label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="block mx-auto py-3 px-6 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600"
            >
              Submit Changes
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
