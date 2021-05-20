import Layout from '../components/Layout';
import { ContainerFluid, CardDeck } from '../components/Wrappers';
import { Card } from '../components/Cards';

const Blog = () => {
  return (
    <Layout
      thumbnail='/thumb0.jpg'
      pageTitle='PleasantView Hotel Blog Posts'
      title='News &amp; Events'
      description='Read our daily news and events of our pleasant view hotel.'
    >
      <ContainerFluid>
        <CardDeck>
          <Card
            thumbnail='/blog_thumb.jpg'
            category='Rooms'
            title='New Rooms'
            link='#'
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            qui nihil libero at excepturi, non consequatur enim eum illum cum
            velit obcaecati? Placeat dicta aspernatur quos iste quibusdam,
            labore quasi.
          </Card>

          <Card
            thumbnail='/blog_thumb.jpg'
            category='Rooms'
            title='New Rooms'
            link='#'
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            qui nihil libero at excepturi, non consequatur enim eum illum cum
            velit obcaecati? Placeat dicta aspernatur quos iste quibusdam,
            labore quasi.
          </Card>

          <Card
            thumbnail='/blog_thumb.jpg'
            category='Rooms'
            title='New Rooms'
            link='#'
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            qui nihil libero at excepturi, non consequatur enim eum illum cum
            velit obcaecati? Placeat dicta aspernatur quos iste quibusdam,
            labore quasi.
          </Card>

          <Card
            thumbnail='/blog_thumb.jpg'
            category='Rooms'
            title='New Rooms'
            link='#'
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            qui nihil libero at excepturi, non consequatur enim eum illum cum
            velit obcaecati? Placeat dicta aspernatur quos iste quibusdam,
            labore quasi.
          </Card>

          <Card
            thumbnail='/blog_thumb.jpg'
            category='Rooms'
            title='New Rooms'
            link='#'
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            qui nihil libero at excepturi, non consequatur enim eum illum cum
            velit obcaecati? Placeat dicta aspernatur quos iste quibusdam,
            labore quasi.
          </Card>

          <Card
            thumbnail='/blog_thumb.jpg'
            category='Rooms'
            title='New Rooms'
            link='#'
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            qui nihil libero at excepturi, non consequatur enim eum illum cum
            velit obcaecati? Placeat dicta aspernatur quos iste quibusdam,
            labore quasi.
          </Card>
        </CardDeck>
      </ContainerFluid>
    </Layout>
  );
};

export default Blog;
