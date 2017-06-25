import React from 'react';
import TranslationForm from '../components';
import { translate } from 'api/yoda';

class TranslationFormContainer extends React.Component {
  constructor(state, context) {
    super(state, context);

    this.onChange = this.onChange.bind(this);
    this.onTranslate = this.onTranslate.bind(this);

    this.state = {
      sentence: 'Master Obiwan has lost a planet.',
      translation: undefined,
      isTranslating: false
    };
  }

  onChange(e) {
    const sentence = e.target.value;
    this.setState({ sentence });
  }

  onTranslate(e) {
    this.setState({ isTranslating: true });
    const { sentence } = this.state;

    translate({ sentence })
      .then(({ translation }) =>
        this.setState({ isTranslating: false, translation })
      )
      .catch(error =>
        this.setState({ isTranslating: false, translation: error })
      );

    e.preventDefault();
    return false;
  }

  render() {
    const { sentence, translation, isTranslating } = this.state;

    return (
      <TranslationForm
        onTranslate={this.onTranslate}
        onChange={this.onChange}
        sentence={sentence}
        translation={translation}
        isTranslating={isTranslating}
      />
    );
  }
}

export default TranslationFormContainer;
