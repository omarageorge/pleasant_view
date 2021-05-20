import Layout from '../components/Layout';
import BookSection from '../Sections/BookSection';
import SiteSection from '../Sections/SiteSection';

const book = () => {
  return (
    <div>
      <Layout
        pageTitle='Pleasant View: Book Now'
        thumbnail='/reserve_page.jpg'
        title='Reservation'
        description='Experience wonders while you stay with us.'
      >
        <BookSection />
        <SiteSection />
      </Layout>
    </div>
  );
};

export default book;
