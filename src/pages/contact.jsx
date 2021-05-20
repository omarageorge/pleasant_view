import Layout from '../components/Layout';
import ContactSection from '../Sections/ContactSection';
import SiteSection from '../Sections/SiteSection';

const contact = () => {
  return (
    <div>
      <Layout
        pageTitle='Pleasant View: Contact us'
        thumbnail='/contact_page.jpg'
        title='Contact Us'
        description='Get in touch and tell us what you have in mind'
      >
        <ContactSection />
        <SiteSection />
      </Layout>
    </div>
  );
};

export default contact;
