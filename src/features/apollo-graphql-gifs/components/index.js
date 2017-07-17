import React from 'react';
import PropTypes from 'prop-types';
import * as ImageModel from 'models/image';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry
} from 'react-virtualized';
import Cell from './cell';

const columnWidth = 200;
const spaceBetweenColumns = 10;

const columnCountFor = function(availableWidth) {
  return Math.floor(availableWidth / (columnWidth + spaceBetweenColumns));
};

class ImageList extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.cellRenderer = this.cellRenderer.bind(this);
    this.onResize = this.onResize.bind(this);
    this.setMasonryRef = this.setMasonryRef.bind(this);

    this.cache = new CellMeasurerCache({
      defaultHeight: 250,
      defaultWidth: columnWidth,
      fixedWidth: true
    });

    this.cellPositioner = createMasonryCellPositioner({
      cellMeasurerCache: this.cache,
      columnCount: 0,
      columnWidth: columnWidth,
      spacer: spaceBetweenColumns
    });
  }

  onResize({ width }) {
    this.cellPositioner.reset({
      columnCount: columnCountFor(width),
      columnWidth: columnWidth,
      spacer: spaceBetweenColumns
    });

    this.masonry.recomputeCellPositions();
  }

  cellRenderer({ index, key, parent, style }) {
    const image = this.props.images[index];

    return (
      <CellMeasurer cache={this.cache} index={index} key={key} parent={parent}>
        <Cell style={style} image={image} />
      </CellMeasurer>
    );
  }

  setMasonryRef(ref) {
    this.masonry = ref;
  }

  renderImages(images) {
    if (!images) {
      return <div>Loading...</div>;
    }

    return (
      <AutoSizer disableHeight onResize={this.onResize}>
        {({ width }) =>
          <Masonry
            ref={this.setMasonryRef}
            height={300}
            width={width}
            cellCount={images.length}
            cellMeasurerCache={this.cache}
            cellPositioner={this.cellPositioner}
            cellRenderer={this.cellRenderer}
          />}
      </AutoSizer>
    );
  }

  render() {
    const { images } = this.props;

    return (
      <div>
        <h2>Infinite Cats!</h2>

        {this.renderImages(images)}
      </div>
    );
  }
}

ImageList.propTypes = {
  images: PropTypes.arrayOf(ImageModel.PropTypes)
};

export default ImageList;
