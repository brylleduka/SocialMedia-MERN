import './register.css';

export default function Register() {
	return (
		<div className='register'>
			<div className='register-wrapper'>
				<div className='register-left'>
					<h3 className='register-logo'>SocialTambayan</h3>
					<span className='register-description'>Connect with friends and the world around you katambay on SocialTambayan</span>
				</div>
				<div className='register-right'>
					<div className='register-box'>
						<input type='text' placeholder='Username' className='register-field' />
						<input type='email' placeholder='Email' className='register-field' />
						<input type='password' placeholder='Password' className='register-field' />
						<input type='password' placeholder='Confirm Password' className='register-field' />
						<button className='register-btn'>Sign up</button>

						<button className='register-login'>Login to your Account</button>
					</div>
				</div>
			</div>
		</div>
	);
}
