import { expect } from '@open-wc/testing';
import { fixture, query } from '../view-testing.js';
import { Counter } from './jsview-counter.js';

describe('Counter', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(Counter());
    expect(query(el, 'h2')?.textContent).to.eq('Hey there Nr. 5!');
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(Counter());
    query(el, 'button')!.click();
    await el.updateComplete;
    expect(query(el, 'h2')?.textContent).to.eq('Hey there Nr. 6!');
  });

  it('can override the title', async () => {
    const el = await fixture(Counter('Hello World'));
    expect(query(el, 'h2')?.textContent).to.eq('Hello World Nr. 5!');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(Counter());
    expect(el).to.be.accessible();
  });
});
