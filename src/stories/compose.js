// This is our container building library.
import React from 'react';

const { Tracker } = global;
export default function (Comp) {
  const NewComp = () => {
    // This is our data loading function.
    // This works only if we are running this app inside a data source aware
    // context.
    const data = Tracker.getData();
    return (<Comp {...data} />);
  };

  NewComp.displayName = `Container(${Comp.displayName})`;
  return NewComp;
}
