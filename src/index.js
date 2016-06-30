import React from 'react';
let stubbingMode = false;

export function mayBeStubbed(Comp) {
  if (stubbingMode) {
    const displayName = Comp.displayName || Comp.name || 'Component';
    return class StubComponent extends React.Component {
      render() {
        if (StubComponent.__getComponent) {
          return StubComponent.__getComponent(this.props);
        }

        const label = `<${displayName}/>`;
        return (
            <span>{label}</span>
          );
      }
      };
  }

  return Comp;
}

export function setStubbingMode(mode) {
  stubbingMode = mode; /* eslint no-param-reassign:0 */
}

export function stub(Comp, fn) {
  Comp.__getComponent = fn;
}
