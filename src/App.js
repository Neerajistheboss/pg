import React, { useEffect, useState, useCallback, useRef } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'
// import Header from './Components/Navbar'
import HomePage from './pages/HomePage/HomePage'
import { AuthContextProvider } from './context/auth-context'
// import LoginPage from './Pages/LoginPage'
// import RegisterPage from './Pages/RegisterPage'
// // import BookingPage from './Pages/BookingPage'
// import SearchPage from './Pages/SearchPage'
// import Footer from './Components/Footer'
// import FailedPage from './Pages/FailedPage'
// import SuccessPage from './Pages/SuccessPage'
// import MyAccountPage from './Pages/MyAccountPage'
// import AboutPage from './Pages/AboutPage'
// import ContactPage from './Pages/ContactPage'
// import FaqPage from './Pages/FAQPage'
// import RefundPage from './Pages/RefundPage'
// import TermsPage from './Pages/TermsPage'
// import GetOnBoardPage from './Pages/GetOnBoard'
// import TeamPage from './Pages/TeamPage'
// import moment from 'moment'
import SignUpPage from './pages/SignUpPage/SignUpPage'

// import Path2 from './images/path2.png';

function App() {

	// const [token, setToken] = useState(localStorage.getItem("token"))
	// const container = useRef(null)
	// console.log("TOKEN" + token + (token != "null"))
	let routes
	// if (token == null) {
	// 	console.log("HAS TOKEN")
	// }
	// if (token) {
	// 	console.log("switching route with token")
		// routes = (
		// 	<Switch>
				{/* <Route path='/search/:id' component={SearchPage} />
				<Route path='/search'>
					<SearchPage />
				</Route>
				<Route path='/booking'>
					<BookingPage />
				</Route>
				<Route path='/account'>
					<MyAccountPage />
				</Route>
				<Route path='/fail'>
					<FailedPage />
				</Route>
				<Route path='/success'>
					<SuccessPage />
				</Route>
				<Route path='/about'>
					<AboutPage />
				</Route>
				<Route path='/faqs'>
					<FaqPage />
				</Route>
				<Route path='/refunds'>
					<RefundPage />
				</Route>
				<Route path='/contact'>
					<ContactPage />
				</Route>
				<Route path='/terms'>
					<TermsPage />
				</Route>
				<Route path='/team'>
					<TeamPage />
				</Route>
				<Route path='/ambulance'>
					<AmbulancePage />
				</Route>
				<Route path="/getonboard">
					<GetOnBoardPage />
				</Route>
				<Route path='/team'>
					<TeamPage/>
				</Route>

				<Route path='/'>
					<HomePage />
				</Route> */}
				// <Redirect to='/' />
			// </Switch>
		// )
	// } else {
	// 	console.log('switching route without token')
		routes = (
			<Switch>
	{/* // 			<Route path='/auth/google/:token/:id' component={HomePage} />

	// 			<Route path='/login'>
	// 				<LoginPage />
	// 			</Route>
	// 			<Route path='/account'>
	// 				<MyAccountPage />
	// 			</Route>
	// 			<Route path='/booking'>
	// 				<BookingPage />
	// 			</Route> */}
				<Route path='/signup'>
					<SignUpPage />
				</Route>
	{/* // 			<Route path='/search/:id' component={SearchPage} />
	// 			<Route path='/search'>
	// 				<SearchPage />
	// 			</Route>

	// 			<Route path='/about'>
	// 				<AboutPage />
	// 			</Route>
	// 			<Route path='/faqs'>
	// 				<FaqPage />
	// 			</Route>
	// 			<Route path='/refunds'>
	// 				<RefundPage />
	// 			</Route>
	// 			<Route path='/contact'>
	// 				<ContactPage />
	// 			</Route>
	// 			<Route path="/getonboard"><GetOnBoardPage /></Route>
	// 			<Route path='/terms'>
	// 				<TermsPage />
	// 			</Route>
	// 			<Route path='/team'>
	// 				<TeamPage />
	// 			</Route>
	// 			<Route path='/success'>
	// 				<SuccessPage />
	// 			</Route>
	// 			<Route path='/ambulance'>
	// 				<AmbulancePage />
	// 			</Route>*/}

	 			<Route exact path='/'>
	 				<HomePage /> 
	 			</Route> 
	 			<Redirect to='/' />
			</Switch>
		)
	// }

	return (
		<AuthContextProvider>
			<Router>
				{/* <Header /> */}
				<Switch> {routes} </Switch>
         {/* <Footer /> */}
			</Router>
		</AuthContextProvider>
	)
}

export default App
