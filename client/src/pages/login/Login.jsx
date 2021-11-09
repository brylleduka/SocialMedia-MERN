import './login.css';

export default function Login() {
	return (
		<div className='login'>
			<div className='login-wrapper'>
				<div className='login-left'>
					<h3 className='login-logo'>SocialTambayan</h3>
					<span className='login-description'>Connect with friends and the world around you katambay on SocialTambayan</span>
				</div>
				<div className='login-right'>
					<div className='login-box'>
						<input type='text' placeholder='Email' className='login-field' />
						<input type='password' placeholder='Password' className='login-field' />
						<button className='login-btn'>Log In</button>
						<span className='login-forgot'>Forgot Password?</span>
						<button className='login-register'>Create a New Account</button>
					</div>
				</div>
			</div>
		</div>
	);
}
