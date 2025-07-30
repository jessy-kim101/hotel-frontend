import Footer from '../component/footer/footer';
import Hero from '../component/Hero';
import Navbar from '../component/nav';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
}
export default LandingPage;