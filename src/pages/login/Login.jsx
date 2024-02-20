import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup'

const Login = () => {
  const formik = useFormik ({
    initialValues: {
   
      email: '',
      password: '',
      
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required('please enter your email'),
      password: Yup.string().min(3).required('please enter your password'),
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  })
  return (
   
 <div class="container">
    
       <div class="row">
         <div class="col-sm-6 offset-sm-3">
           <div class="card box-shadow text-bg-dark border-primary">
             <div class="card-header">Login</div>
             <div class="card-body">
               <div>
                 <label for="email" class="form-label"> Email</label>
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
                   type="password"
                
                   id="password"
                   placeholder="Enter Your Password"
                   class={`form-control ${formik.errors.password && formik.touched.password ? 'is-invalid' : formik.touched.password ?'is-valid' : ''}  `}
                   value= {formik.values.password}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                 />
                 <div class="valid-feedback">Looks good!</div>
                 <div class="invalid-feedback">{formik.errors.password}</div>
               </div>
               <button type="button" class="btn btn-primary w-100 mt-3">
                 Login
               </button>
               <p class="text-center mt-3">
                 Dont Have Account? <a href="/register">Create Account</a>
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
    
  )
}

export default Login