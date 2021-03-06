import React from 'react'
import SubmitBtn from '../../components/SubmitButton/SubmitBtn'
import { NavLink } from 'react-router-dom'
import './SignUpPage.css'
import Background from '../../assets/background.jpg'
class SignUpPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = { name: '', email: '', phone: '', password: '', code: '' }
		this.handleNameChange = this.handleNameChange.bind(this)
		this.handlePhoneChange = this.handlePhoneChange.bind(this)
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		this.handleReferralCodeChange = this.handleReferralCodeChange.bind(this)
	}
	

	handleNameChange(event) {
		this.setState({ name: event.target.value })
	}
	handleEmailChange(event) {
		this.setState({ email: event.target.value })
	}
	handlePhoneChange(event) {
		this.setState({ phone: event.target.value })
	}
	handlePasswordChange(event) {
		this.setState({ password: event.target.value })
	}
	handleReferralCodeChange(event) {
		this.setState({ code: event.target.value })
	}

	render() {
		return (
			<div style={{overflow: 'hidden'}}>
				<div className='login' style={{backgroundImage:`url(${Background})`}}>
					<div className='row'>
						<div className=' mx-auto' >
							<div id='first'>
								<div className='myform form d-flex flex-column ' style={{minHeight:'100vh'}}>
									
									<div  style={{display:'flex', flexDirection:'column',justifyContent: 'flex-end',flex: 1}}>
                                    <div name='register' className="reg" >
										{/* <div className='form-group'>
											<label htmlFor='exampleInputEmail1'>Name:</label>
											<input
												value={this.state.name}
												onChange={this.handleNameChange}
												type='text'
												name='name'
												className='form-control'
												id='name'
												aria-describedby='nameHelp'
												placeholder='Enter name'
												required ></input>
										</div> */}
										{/* <div className='form-group'>
											<label htmlFor='exampleInputEmail1'>Email address:</label>
											<input
												value={this.state.email}
												onChange={this.handleEmailChange}
												type='email'
												name='email'
												className='form-control'
												id='email'
												aria-describedby='emailHelp'
												placeholder='Enter email'
												required ></input>
										</div> */}

										{/* <div className='form-group'>
											<label htmlFor='exampleInputEmail1'>Phone:</label>
											<input
												value={this.state.phone}
												onChange={this.handlePhoneChange}
												type='text'
												name='phone'
												className='form-control'
												id='phone'
												aria-describedby='emailHelp'
												placeholder='Enter Phone Number'
												required ></input>
										</div> */}
										<div className='form-group'>
											<label className='m-0' htmlFor='exampleInputEmail1'>Password:</label>
											<input
												value={this.state.password}
												onChange={this.handlePasswordChange}
												type='password'
												name='password'
												id='password'
												className='form-control'
												aria-describedby='emailHelp'
												placeholder='Enter Password'
												required ></input>
										</div>
										<div className='form-group'>
											<label className='m-0' htmlFor='exampleInputEmail1'>If Refferal Code:</label>
											<input
												value={this.state.code}
												onChange={this.handleReferralCodeChange}
												type='text'
												name='referralCode'
												className='form-control'
												// id='name'
												// aria-describedby='nameHelp'
												placeholder='Enter Code' ></input>
										</div>
										{/* <div className='form-group'>
											<p>
												By signing up you accept our{' '}
												<NavLink to='/terms' style={{color:"#00D0CC"}}>Terms Of Use</NavLink>
											</p>
										</div> */}
										<div >
											<SubmitBtn
												fun='register'
												className=' btn btn-block mybtn btn-primary tx-tfm'
												text='Register'
												name={this.state.name}
												email={this.state.email}
												phone={this.state.phone}
												password={this.state.password}
												referralCode={this.state.code}
											/>
											<NavLink  to='/'>Homepage</NavLink>
										</div>
										{/* <div className='col-md-12 '>
											<div className='login-or text-center'>
												<hr className='hr-or'></hr>
												<span className='span-or text-center font-weight-bold'>OR</span>
											</div>
										</div>
										<div className='col-md-12 mb-3'>
											<p className='text-center'></p>
										</div>
										<div className='form-group'>
											<p className='text-center'>
												Already have account?{' '}
												<NavLink to='/login' id='login' style={{color:"#00D0CC"}}>
													Login here
												</NavLink>
											</p>
										</div> */}
									</div>
                                    </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default SignUpPage
