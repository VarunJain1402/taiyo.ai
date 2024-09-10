import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

type ContactFormProps = {
  fName?: string;
  lName?: string;
  stat?: boolean;
  handleClick: (firstName: string, lastName: string, status: boolean) => void;
};

export default function ContactForm({
  fName = '',
  lName = '',
  stat = false,
  handleClick,
}: ContactFormProps) {
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
    <Formik
      initialValues={{
        firstName: fName,
        lastName: lName,
        status: stat,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleClick(values.firstName, values.lastName, values.status);
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
            Submit Contact
          </button>
        </Form>
      )}
    </Formik>
  );
}



// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// type ContactFormProps = {
//   fName?: string;
//   lName?: string;
//   stat?: boolean;
//   handleClick: (firstName: string, lastName: string, status: boolean) => void;
// };

// export default function ContactForm({
//   fName = '',
//   lName = '',
//   stat = false,
//   handleClick,
// }: ContactFormProps) {
//   // Yup schema for validation
//   const validationSchema = Yup.object({
//     firstName: Yup.string()
//       .matches(/^[a-zA-Z]+$/, 'Only uppercase or lowercase letters allowed')
//       .required('First Name is required'),
//     lastName: Yup.string()
//       .matches(/^[a-zA-Z]+$/, 'Only uppercase or lowercase letters allowed')
//       .required('Last Name is required'),
//     status: Yup.boolean().required('Status is required'),
//   });

//   return (
//     <Formik
//       initialValues={{
//         firstName: fName,
//         lastName: lName,
//         status: stat,
//       }}
//       validationSchema={validationSchema}
//       onSubmit={(values, { setSubmitting }) => {
//         setSubmitting(true);
//         handleClick(values.firstName, values.lastName, values.status);
//         setSubmitting(false);
//       }}
//     >
//       {({ isSubmitting, values, setFieldValue }) => (
//         <Form className="mx-auto w-96 p-6 border-2 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-gray-200">
//           <div className="mb-6">
//             <label
//               htmlFor="firstName"
//               className="mb-2 block font-bold text-gray-700"
//             >
//               First Name:
//             </label>
//             <Field
//               id="firstName"
//               name="firstName"
//               type="text"
//               className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md appearance-none focus:outline-none focus:border-cyan-500"
//             />
//             <ErrorMessage
//               name="firstName"
//               component="div"
//               className="text-red-500 text-sm"
//             />
//           </div>

//           <div className="mb-6">
//             <label
//               htmlFor="lastName"
//               className="mb-2 block font-bold text-gray-700"
//             >
//               Last Name:
//             </label>
//             <Field
//               id="lastName"
//               name="lastName"
//               type="text"
//               className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md appearance-none focus:outline-none focus:border-cyan-500"
//             />
//             <ErrorMessage
//               name="lastName"
//               component="div"
//               className="text-red-500 text-sm"
//             />
//           </div>

//           <div className="mb-6 flex flex-col sm:flex-row justify-between">
//             <span className="mb-2 block font-bold text-gray-700 sm:mb-0">
//               Status:
//             </span>
//             <div className="flex flex-col sm:flex-row">
//               <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
//                 <Field
//                   id="active"
//                   name="status"
//                   type="radio"
//                   value="true"
//                   checked={values.status === true}
//                   onChange={() => setFieldValue('status', true)}
//                   className="mr-1"
//                 />
//                 <label htmlFor="active">Active</label>
//               </div>
//               <div className="flex items-center">
//                 <Field
//                   id="inactive"
//                   name="status"
//                   type="radio"
//                   value="false"
//                   checked={values.status === false}
//                   onChange={() => setFieldValue('status', false)}
//                   className="mr-1"
//                 />
//                 <label htmlFor="inactive">Inactive</label>
//               </div>
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="block mx-auto py-3 px-6 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600"
//           >
//             Submit Contact
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// }
