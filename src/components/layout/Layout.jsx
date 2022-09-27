import {Outlet, Link} from "react-router-dom";
import Header from "../../../src/components/layout/Header";
import Footer from "../../../src/components/layout/Footer";

const Layout = () => {
	return (<>
		<Header/>
		
		<Outlet/> {/*  to render child component */}
			
			<Footer/>
	</>
	)
};
export default Layout;