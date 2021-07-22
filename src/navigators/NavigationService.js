import {createRef} from 'react';

export const navigationRef = createRef();

function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export default {
  navigate,
};
