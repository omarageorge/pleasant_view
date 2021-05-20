import styled from 'styled-components';
import Paragraph from '../components/Paragraph';
import SectionTitleAndDescription from '../components/SectionTitleAndDescription';

const Container = styled.div`
  width: 100%;
  padding: 5rem 0rem;
  background: #fff;
`;

const Text = styled.div`
  width: 75%;
  margin: auto;
`;

const AboutSection = () => {
  return (
    <Container>
      <SectionTitleAndDescription title='WHERE DID IT ALL BEGAN'>
        Our Story
      </SectionTitleAndDescription>
      <Text>
        <Paragraph>
          Pleasant View Enterprise Limited is a company that was inspired from
          the vision of the late Albino Olango, a renounced businessman in
          Kitgum district. The Late Albino Olango was commonly referred to as
          Ladit Oleo. The late Mzee Oleo was a hardworking businessman and a
          role model to many. As a father he strived to educate his children to
          a good level of education for them to secure a bright future in Life.
        </Paragraph>

        <Paragraph>
          He inspired his third born daughter to invest in the hospitality
          industry by establishing a hotel to take advantage of the opportunity
          of business in the strategically located northern Uganda town of
          Kitgum. The Hotel is located at the side of Hill Top with a very
          beautiful green scenery view overlooking First Jenge (Irene Gleeson
          School) all the way to Lamola area and visitors can enjoy the lovely
          view with fresh breeze of the hill. Hence, this is how the name
          “Pleasant View Hotel” came up. Pleasant View Hotel is also commonly
          referred by its nicknames as “Hotel Pa Oleo” by the locals.
        </Paragraph>

        <Paragraph>
          Pleasant View Enterprise ltd was not only developed to attain revenue
          or profit, but also to create an opportunity for the people that need
          it. We wish to give back to the community through creating employment
          opportunities for the local population in Kitgum and other people from
          various places and origins. We employed and support vulnerable members
          of the community in PVH. For example, PVH employs single mothers,
          youth and other people who are stigmatized in the community due to the
          conditions they find themselves with or in (e.g. being HIV positive).
        </Paragraph>

        <Paragraph>
          In order to empower these staff to support themselves and their
          families, PVH has a HR policy of equal opportunity for everyone who
          qualifies, and employs based on merits giving every person an equal
          opportunity.
        </Paragraph>
      </Text>
    </Container>
  );
};

export default AboutSection;
