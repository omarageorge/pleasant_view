import Layout from '../components/Layout';
import AboutSectionAbout from '../Sections/AboutSectionAbout';
import { ContainerFluid, CardDeck } from '../components/Wrappers';
import SectionTitleAndDescription from '../components/SectionTitleAndDescription';
import { BioCard } from '../components/Cards';

const Home = () => {
  return (
    <Layout
      pageTitle='Welcome to Pleasant View Hotel'
      thumbnail='/about_page.jpg'
      title='About Pleasant View'
      description='The story of Pleasant View Hotel'
    >
      <AboutSectionAbout />
      <ContainerFluid>
        <SectionTitleAndDescription title='OUR KIND STAFF'>
          Our Staff
        </SectionTitleAndDescription>
        <CardDeck>
          <BioCard picture='/staff0.jpg' post='MANAGER' name='Stella Ayaa' />

          <BioCard
            picture='/staff1.jpg'
            post='HEADS OF ACCOUNTS'
            name='Stephen Komakech'
          />
        </CardDeck>
      </ContainerFluid>
    </Layout>
  );
};

export default Home;
