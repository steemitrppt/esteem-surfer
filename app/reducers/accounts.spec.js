/* eslint-disable */
import accounts from './accounts';
import { setItem, removeItem } from '../helpers/storage';

import {
  ACCOUNT_ADDED,
  ACCOUNT_DELETED,
  ACCOUNT_ACTIVATED
} from '../actions/accounts';

import deepFreeze from 'deep-freeze';

describe('accounts reducer', () => {
  let state = undefined;

  it('(1) default state', () => {
    state = accounts(state, {});

    deepFreeze(state);

    expect(state).toMatchSnapshot();
  });

  it('(2) account "foo" added ', () => {
    const username = 'foo';

    setItem(`account_${username}`, { username });
    setItem(`active_account`, username);

    const action = {
      type: ACCOUNT_ADDED,
      payload: { username }
    };

    state = accounts(state, action);

    deepFreeze(state);

    expect(state).toMatchSnapshot();
  });

  it('(3) account "bar" added ', () => {
    const username = 'bar';

    setItem(`account_${username}`, { username });
    setItem(`active_account`, username);

    const action = {
      type: ACCOUNT_ADDED,
      payload: { username }
    };

    state = accounts(state, action);

    deepFreeze(state);

    expect(state).toMatchSnapshot();
  });

  it('(4) account "baz" added', () => {
    const username = 'baz';

    setItem(`account_${username}`, { username });
    setItem(`active_account`, username);

    const action = {
      type: ACCOUNT_ADDED,
      payload: { username }
    };

    state = accounts(state, action);

    deepFreeze(state);

    expect(state).toMatchSnapshot();
  });

  it('(5) account "baz" deleted', () => {
    const username = 'baz';

    removeItem(`account_${username}`);
    setItem(`active_account`, null);

    const action = {
      type: ACCOUNT_DELETED,
      payload: { username }
    };

    state = accounts(state, action);

    deepFreeze(state);

    expect(state).toMatchSnapshot();
  });

  it('(6) account "foo" activated', () => {
    const username = 'foo';

    setItem(`active_account`, username);

    const action = {
      type: ACCOUNT_ACTIVATED,
      payload: { username }
    };

    state = accounts(state, action);

    deepFreeze(state);

    expect(state).toMatchSnapshot();
  });

  it('(7) account "foo" deleted', () => {
    const username = 'foo';

    removeItem(`account_${username}`);
    setItem(`active_account`, null);

    const action = {
      type: ACCOUNT_DELETED,
      payload: { username }
    };

    state = accounts(state, action);

    deepFreeze(state);

    expect(state).toMatchSnapshot();
  });
});
