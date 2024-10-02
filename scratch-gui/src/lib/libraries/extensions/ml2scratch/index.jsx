import React from 'react';
import {FormattedMessage} from 'react-intl';

import ml2scratchIconURL from './ml2scratch.png';
import ml2scratchInsetIconURL from './ml2scratch-small.png';

const translationMap = {
    'ja': {
        'gui.extension.ml2scratch.description': '機械学習を使う'
    },
    'ja-Hira': {
        'gui.extension.ml2scratch.description': 'きかいがくしゅうをつかう'
    }
};

const entry = {
    name: 'ML2Scratch',
    extensionId: 'ml2scratch',
    extensionURL: 'https://tomonya.github.io/re-ML2/ml2scratch.mjs',
    collaborator: 'tomonya',
    iconURL: ml2scratchIconURL,
    insetIconURL: ml2scratchInsetIconURL,
    description: (
        <FormattedMessage
            defaultMessage="ML2Scratch Blocks."
            description="Description for ML2Scratch Blocks."
            id="gui.extension.ml2scratch.description"
        />
    ),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: true,
    helpLink: 'https://github.com/tomonya/re-ML2/',
    translationMap: translationMap
};

export {entry}; // loadable-extension needs this line.
export default entry;
