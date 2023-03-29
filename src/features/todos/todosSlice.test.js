import reducer, { setPosts1, todoAdded } from './todosSlice'

describe('to do slice', () => {
  test('should return the initial state', () => {
    // const initialState = [{ text: 'Use Redux', completed: false, id: 0 }];
    const initialState = [];
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  })

  test('should handle a todo being added to an empty list', () => {
    const previousState = [];

    expect(reducer(previousState, todoAdded('Run the tests'))).toEqual([
      { text: 'Run the tests', completed: false, id: 0 }
    ])
  })

  test('should handle a todo being added to an existing list', () => {
    const previousState = [{ text: 'Run the tests', completed: true, id: 0 }]

    expect(reducer(previousState, todoAdded('Use Redux'))).toEqual([
      { text: 'Run the tests', completed: true, id: 0 },
      { text: 'Use Redux', completed: false, id: 1 }
    ])
  })

  // it('Should return 1', () => {
  //   expect(reducer(undefined, setPosts1())).toEqual(1);
  // });
});