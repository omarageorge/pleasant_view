import Layout from '../components/Layout';
import AboutSectionIndex from '../Sections/AboutSectionIndex';
import FeaturedRooms from '../Sections/FeaturedRooms';
import IndexBlogSection from '../Sections/IndexBlogSection';
import SiteSection from '../Sections/SiteSection';

const Home = () => {
  return (
    <Layout
      pageTitle='Welcome to Pleasant View Hotel'
      title='Welcome to Pleasant View Hotel'
      description='Enjoy your time while you stay with us.'
    >
      <AboutSectionIndex />
      <FeaturedRooms />
      <SiteSection />
      {/* <IndexBlogSection /> */}
    </Layout>
  );
};

export default Home;
