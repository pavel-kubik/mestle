import { mergeHistory } from './history';

test('test both non eog history', () => {
  const h1 = {
    guesses: ['Praha', 'Brno'],
    eog: false
  };
  const h2 = {
    guesses: ['Plzen', 'Ostrava'],
    eog: false
  };
  const merged = mergeHistory(h1, h2);
  expect(merged.guesses).toEqual(['Ostrava', 'Plzen', 'Praha', 'Brno']);
  expect(merged.eog).toEqual(false);
});

test('test only first history eog', () => {
  const h1 = {
    guesses: ['Praha', 'Brno'],
    eog: true
  };
  const h2 = {
    guesses: ['Plzen', 'Ostrava'],
    eog: false
  };
  const merged = mergeHistory(h1, h2);
  expect(merged.guesses).toEqual(['Ostrava', 'Plzen', 'Praha', 'Brno']);
  expect(merged.eog).toEqual(true);
});

test('test only second history eog', () => {
  const h1 = {
    guesses: ['Praha', 'Brno'],
    eog: false
  };
  const h2 = {
    guesses: ['Plzen', 'Ostrava'],
    eog: true
  };
  const merged = mergeHistory(h1, h2);
  expect(merged.guesses).toEqual(['Brno', 'Praha', 'Plzen', 'Ostrava']);
  expect(merged.eog).toEqual(true);
});

test('test both history eog', () => {
  const h1 = {
    guesses: ['Praha', 'Brno'],
    eog: true
  };
  const h2 = {
    guesses: ['Plzen', 'Brno'],
    eog: true
  };
  const merged = mergeHistory(h1, h2);
  expect(merged.guesses).toEqual(['Praha', 'Plzen', 'Brno']);
  expect(merged.eog).toEqual(true);
});

test('test only first history eog with duplicity', () => {
  const h1 = {
    guesses: ['Praha', 'Brno'],
    eog: true
  };
  const h2 = {
    guesses: ['Plzen', 'Brno'],
    eog: false
  };
  const merged = mergeHistory(h1, h2);
  expect(merged.guesses).toEqual(['Plzen', 'Praha', 'Brno']);
  expect(merged.eog).toEqual(true);
});

test('test only second history eog with duplicity', () => {
  const h1 = {
    guesses: ['Praha', 'Brno'],
    eog: false
  };
  const h2 = {
    guesses: ['Plzen', 'Brno'],
    eog: true
  };
  const merged = mergeHistory(h1, h2);
  expect(merged.guesses).toEqual(['Praha', 'Plzen', 'Brno']);
  expect(merged.eog).toEqual(true);
});

test('test first empty', () => {
  const h1 = {
    guesses: [],
    eog: false
  };
  const h2 = {
    guesses: ['Plzen', 'Brno'],
    eog: true
  };
  const merged = mergeHistory(h1, h2);
  expect(merged.guesses).toEqual(['Plzen', 'Brno']);
  expect(merged.eog).toEqual(true);
});

test('test second empty', () => {
  const h1 = {
    guesses: ['Praha', 'Brno'],
    eog: false
  };
  const h2 = {
    guesses: [],
    eog: false
  };
  const merged = mergeHistory(h1, h2);
  expect(merged.guesses).toEqual(['Praha', 'Brno']);
  expect(merged.eog).toEqual(false);
});

test('test both empty', () => {
  const h1 = {
    guesses: [],
    eog: false
  };
  const h2 = {
    guesses: [],
    eog: false
  };
  const merged = mergeHistory(h1, h2);
  expect(merged.guesses).toEqual([]);
  expect(merged.eog).toEqual(false);
});
