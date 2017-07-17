import _ from 'lodash';
import { gql, graphql } from 'react-apollo';
import ImageList from '../components';

const query = gql`
  {
    graphQLHub
    giphy {
      search(query: "cats", limit: 30) {
        id
        url
        images {
          fixed_width {
            url
            width
            height
          }
        }
      }
    }
  }
`;

const imagesSelector = function(data) {
  const images = _.get(data, 'giphy.search');
  if (!images) return images;

  return _.map(images, function(image) {
    const { fixed_width } = image.images;

    return {
      id: image.id,
      url: fixed_width.url,
      width: Number(fixed_width.width),
      height: Number(fixed_width.height)
    };
  });
};

const options = {
  props({ data }) {
    return {
      images: imagesSelector(data)
    };
  }
};

export default graphql(query, options)(ImageList);
