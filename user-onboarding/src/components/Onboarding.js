import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup"


const Onboarding = (props) => {
    const [users, setUsers] = useState([]); 
    const { 
            values, 
            errors,
            touched } = props;
    console.log(values);
    return (
        <div className="onboarding-form">
            <Form>

                <label htmlFor="name">Name</label>
                <Field type="text" name="name" id="name" />
                {/* errors */}
                {touched.name && errors.name && (<p className="errors">{errors.name}</p>)}
                <label htmlFor="email">Email</label>
                <Field type="text" name="email" id="email" />
                 {/* errors */}
                {touched.email && errors.email && (<p className="errors">{errors.email}</p>)}
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" id="password" />
                {/* errors */}
                {touched.password && errors.password && (<p className="errors">{errors.password}</p>)}

                <label htmlFor="terms">Terms of Service</label>
                <Field 
                    type="checkbox" 
                    name="terms" 
                    id="terms"
                    checked={values.terms}
                     />
                     {/* errors */}
                {touched.errors && errors.terms && (<p className="errors">{errors.terms}</p>)}

                <button>Submit</button>

            </Form>
        </div>
    )

}
const FormikOnboarding = withFormik({
    mapPropsToValues: (props) => (
        {
            name: props.name || '',
            email: props.email || '',
            password: props.password || '',
            terms: props.terms || ''

        }
    ),
    //Yup
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, "Must be 3 characters or more").required("Required"),
        email:Yup.string().email("Invalid email address").required("Required"),
        password:Yup.string().min(3, "3 or more characters").matches('^(?=.*[0-9]$)(?=.*[a-zA-Z])', "Password must contain atleast 1 letter and 1 number").required("Required"),
        terms:Yup.boolean().required("Required")
    })

})(Onboarding);

export default FormikOnboarding;