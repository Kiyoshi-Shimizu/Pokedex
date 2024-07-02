import { FilterNamePipe } from './nameFilter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterNamePipe();
    expect(pipe).toBeTruthy();
  });
});
