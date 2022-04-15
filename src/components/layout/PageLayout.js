// import SideBar from './SideBar';
import HeadderBar from './HeadderBar';
import Footer from './Footer';



const PageLayout = (props) => {
    const { children } = props;

    return (
        <div >
            <HeadderBar />
            {children}
            <Footer/>
        </div>
    );
}

export default PageLayout;
