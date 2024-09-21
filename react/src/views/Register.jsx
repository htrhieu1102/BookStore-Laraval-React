import { useRef } from 'react'
import axiosClient from '../axios-client';
import { useStateConText } from '../contexts/ContextProvider';

export const Register = () => {
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef()

	const {setUser, setToken} = useStateConText();

	const onSubmit = (ev) => {
		ev.preventDefault()
		const payload = {
			name: nameRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value,
			password_confirmation: passwordConfirmRef.current.value,
		}
		axiosClient.post('/signup', payload)
			.then(({data})=> {
				setUser(data.user)
				setToken(data.token)
			}) 
			.catch(err => {
				const respone = err.respone
				if (respone && respone.status === 422) {
					console.log(respone.data.errors);
					
				}
			})
		
	}
	return (
		<section className="bg-light py-3 py-md-5">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
						<div className="card border border-light-subtle rounded-3 shadow-sm">
							<div className="card-body p-3 p-md-4 p-xl-5">
								<div className="text-center mb-3">
									<a href="#!">
										<img src="./assets/img/bsb-logo.svg" alt="BootstrapBrain Logo" width="175" height="57" />
									</a>
								</div>
								<h2 className="fs-6 fw-normal text-center text-secondary mb-4">Enter your details to register</h2>
								<form onSubmit={onSubmit}>
									<div className="row gy-2 overflow-hidden">
										<div className="col-12">
											<div className="form-floating mb-3">
												<input ref={nameRef} type="text" className="form-control" name="name" id="name" placeholder="First Name" required />
												<label className="form-label">Name</label>
											</div>
										</div>

										<div className="col-12">
											<div className="form-floating mb-3">
												<input ref={emailRef} type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required />
												<label  className="form-label">Email</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating mb-3">
												<input ref={passwordRef} type="password" className="form-control" name="password" id="password" placeholder="Password" required/>
												<label  className="form-label">Password</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating mb-3">
												<input ref={passwordConfirmRef} type="password" className="form-control" name="password_confirmation" id="passwordConfirm" placeholder="Password Confirm" required />
												<label className="form-label">Password Confirm</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-check">
												<input className="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required />
												<label className="form-check-label text-secondary" >
													I agree to the <a href="#!" className="link-primary text-decoration-none">terms and conditions</a>
												</label>
											</div>
										</div>
										<div className="col-12">
											<div className="d-grid my-3">
												<button className="btn btn-primary btn-lg" type="submit">Sign up</button>
											</div>
										</div>
										<div className="col-12">
											<p className="m-0 text-secondary text-center">Already have an account? <a href="#!" className="link-primary text-decoration-none">Sign in</a></p>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}