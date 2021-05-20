import { ContainerFluid, CardDeck } from '../components/Wrappers';
import SectionTitleAndDescription from '../components/SectionTitleAndDescription';
import { Card } from '../components/Cards';

const IndexBlogSection = () => {
  return (
    <ContainerFluid>
      <SectionTitleAndDescription title='OUR BLOG'>
        Our Recent Events
      </SectionTitleAndDescription>
      <CardDeck>
        <Card
          thumbnail='/blog_thumb.jpg'
          category='Rooms'
          title='New Rooms'
          link='#'
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis qui
          nihil libero at excepturi, non consequatur enim eum illum cum velit
          obcaecati? Placeat dicta aspernatur quos iste quibusdam, labore quasi.
        </Card>
        <Card
          thumbnail='/blog_thumb.jpg'
          category='Rooms'
          title='New Rooms'
          link='#'
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis qui
          nihil libero at excepturi, non consequatur enim eum illum cum velit
          obcaecati? Placeat dicta aspernatur quos iste quibusdam, labore quasi.
        </Card>
        <Card
          thumbnail='/blog_thumb.jpg'
          category='Rooms'
          title='New Rooms'
          link='#'
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis qui
          nihil libero at excepturi, non consequatur enim eum illum cum velit
          obcaecati? Placeat dicta aspernatur quos iste quibusdam, labore quasi.
        </Card>
      </CardDeck>
    </ContainerFluid>
  );
};

export default IndexBlogSection;
