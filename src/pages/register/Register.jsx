import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cpassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2).max(25).required('please enter your name'),
      email: Yup.string().email().required('please enter your email'),
      password: Yup.string().min(3).required('please enter your password'),
      cpassword: Yup.string().required().oneOf([Yup.ref('password'),null], 'password must match')
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  })
  return (
    <div class="container">
      <div class="row ">
        <div class=" col-md-6 offset-md-3     ">
          <div class="card box-shadow text-bg-dark border-primary">
            <div class="card-header">Signup</div>
            <div class="card-body">
 
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <label for="name" class="form-label">First name</label>
                  <input
                    type="text"
                    class={`form-control ${formik.errors.name && formik.touched.name ? 'is-invalid' : formik.touched.name ?'is-valid' : ''}  `}
                    id="name"
                    placeholder="Enter your name"
                    name= 'name'
                    value= {formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">{formik.errors.name}</div>
                </div>
                <div class="mt-2">
                  <label for="email" class="form-label">First Email</label>
                  <input
                    type="text"
                    
                    id="email"
                    placeholder="Enter Your Email"
                    class={`form-control ${formik.errors.email && formik.touched.email ? 'is-invalid' : formik.touched.email ?'is-valid' : ''}  `}
                    name= 'email'
                    value= {formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">{formik.errors.email}</div>
                </div>
                <div class="mt-2">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="text"
                    
                    id="password"
                    placeholder="Enter Your Password"
                    name= 'password'
                    class={`form-control ${formik.errors.password && formik.touched.password ? 'is-invalid' : formik.touched.password ?'is-valid' : ''}  `}
                    value= {formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">{formik.errors.password}</div>
                </div>
                <div class="mt-2">
                  <label for="cpassword" class="form-label"
                  >Confirm Password</label
                  >
                  <input
                    type="text"
                    class={`form-control ${formik.errors.cpassword && formik.touched.cpassword ? 'is-invalid' : formik.touched.cpassword ?'is-valid' : ''}  `}

                    id="cpassword"
                    placeholder="Confirm Your Password"
                    name= 'cpassword'
                    value= {formik.values.cpassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">
                  {formik.errors.cpassword}
                  </div>
                </div>
                <button type="submit" class="btn btn-primary w-100 mt-3">
                  Signup
                </button>
              </form>
              <p class="text-center mt-3">
                Already Have Account? <a href="/">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register