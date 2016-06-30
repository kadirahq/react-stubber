import React from 'react';
import { mount } from 'enzyme';
import { mayBeStubbed, setStubbingMode, stub } from '../index';
import { expect } from 'chai';
const { describe, it, after, before } = global;

const Comp = () => (<div>Hello</div>);
Comp.displayName = 'TheComp';

describe('React Stubber', () => {
  describe('is being asked not to stub', () => {
    before(() => {
      setStubbingMode(false);
    });

    it('should provide the original comp', () => {
      const Stubbed = mayBeStubbed(Comp);
      expect(Stubbed).to.be.equal(Comp);
    });
  });

  describe('is being asked to stub', () => {
    before(() => {
      setStubbingMode(true);
    });

    after(() => {
      setStubbingMode(false);
    });

    describe('and no custom stub generator', () => {
      it('should display the displayName', () => {
        const Stubbed = mayBeStubbed(Comp);
        const ref = mount(<Stubbed />);
        expect(ref.html()).match(/TheComp/);
      });
    });

    describe('and there is a custom stub generator', () => {
      it('should get the custom component', () => {
        const Stubbed = mayBeStubbed(Comp);

        stub(Stubbed, () => {
          return (<div>THECUSTOM</div>);
        });

        const ref = mount(<Stubbed />);
        expect(ref.html()).match(/THECUSTOM/);
      });

      it('generator should get props', () => {
        const Stubbed = mayBeStubbed(Comp);

        stub(Stubbed, (props) => {
          const total = props.a + props.b;
          return (<div>{total}</div>);
        });

        const ref = mount(<Stubbed a={10} b={20} />);
        expect(ref.html()).match(/30/);
      });
    });
  });
});
