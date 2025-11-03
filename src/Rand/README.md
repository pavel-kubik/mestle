# Rand Module

## Overview

The rand module provides deterministic random number generation with uniqueness constraints, designed for selecting globally same random cities in the Mestle game.

## Random function

- Squaring
- Cubic
- Sextic

## Architecture

1. **Random Generation** - Pure functions that generate random numbers
2. **History Management** - Track previously generated numbers
3. **Uniqueness Logic** - Find numbers that don't collide with history
4. **Backward Compatibility** - Maintain historical algorithm switches

### Distribution Functions

```javascript
// Uniform distribution (0 to max)
randomSimple(seed, max);

// Prefer smaller numbers (value^2)
randomPreferSmallSquaring(seed, max);

// Prefer smaller numbers more (value^3)
randomPreferSmallCubic(seed, max);

// Prefer smaller numbers heavily (value^6)
randomPreferSmallSextic(seed, max);
```

### Algorithm Configuration Map

The module uses a map-based configuration system to manage algorithm switches over time:

```javascript
const ALGORITHM_CONFIG = [
  {
    seed: 0,
    randomFunc: randomSimple,
    collisionHandler: null,
    description: 'Simple uniform distribution (no uniqueness)'
  },
  {
    seed: 19135,
    randomFunc: randomPreferSmallSquaring,
    collisionHandler: defaultCollisionHandler,
    description: 'Square distribution with uniqueness'
  },
  {
    seed: 19770, // dateOfSwitchToCubic + 1
    randomFunc: randomPreferSmallCubic,
    collisionHandler: defaultCollisionHandler,
    description: 'Cubic distribution with uniqueness'
  },
  {
    seed: 19771, // dateOfSwitchToSextic + 1
    randomFunc: randomPreferSmallSextic,
    collisionHandler: defaultCollisionHandler,
    description: 'Sextic distribution with uniqueness'
  }
];
```

**Key Features:**
- Each entry specifies the starting seed, random function, and collision handler
- Ordered by seed for efficient lookup
- Easy to add new algorithms in the future without modifying existing code
- Supports custom collision handling strategies per algorithm

### Backward Compatibility

History should not change. We can change random function and handling collision just for future. It is mainly because of remembering last 21 cities window.

The configuration map ensures:
- All historical seeds produce the same results
- New algorithms can be added without affecting past behavior
- Custom collision handlers can be tested independently

## New Testable Functions

### 1. `generateHistoryWithFunction(seed, max, randomFunc, memoryWindow, startSeed)`

Generate history of previous random numbers using a custom function.

**Parameters:**

- `seed` - Current seed
- `max` - Maximum value
- `randomFunc` - Custom random function to use
- `memoryWindow` - Number of previous values to track (default: MEMORY)
- `startSeed` - Starting seed for history (default: dateOfSwitchToRandomPreferSmallUnique)

**Example:**

```javascript
import { generateHistoryWithFunction, exportedForTesting } from './rand';
const { randomPreferSmallCubic, MEMORY } = exportedForTesting;

const seed = 20000;
const max = 100;
const history = generateHistoryWithFunction(seed, max, randomPreferSmallCubic, MEMORY, 19769);

console.log(`Generated ${history.size} historical values`);
```

### 2. `findUniqueNumber(seed, max, history, randomFunc, collisionHandler)`

Find a random number that doesn't collide with history.

**Parameters:**

- `seed` - The seed for random generation
- `max` - Maximum value
- `history` - Set of numbers to avoid
- `randomFunc` - Random function to use
- `collisionHandler` - Optional collision handler (uses default if not provided)

**Example:**

```javascript
import { findUniqueNumber, exportedForTesting } from './rand';
const { randomPreferSmallSquaring, defaultCollisionHandler } = exportedForTesting;

const seed = 20000;
const max = 50;
const history = new Set([5, 10, 15, 20]);

// Using default collision handler
const uniqueNumber = findUniqueNumber(seed, max, history, randomPreferSmallSquaring);
console.log(`Found unique number: ${uniqueNumber}`);

// Using custom collision handler
const customHandler = (seed, max, history, randomFunc) => {
  // Try sequential seeds instead of negative seeds
  let attempt = 1;
  let number;
  do {
    number = randomFunc(seed + attempt++, max);
    if (attempt > max * 2) break; // Safety limit
  } while (history.has(number));
  return number;
};

const customNumber = findUniqueNumber(seed, max, history, randomPreferSmallSquaring, customHandler);
console.log(`Found unique number with custom handler: ${customNumber}`);
```

### 3. `randomWithUniqueConstraint(seed, max, randomFunc, options)`

Generate random numbers with uniqueness using any custom function.

**Parameters:**

- `seed` - The seed for random generation
- `max` - Maximum value
- `randomFunc` - Custom random function to use
- `options` - Configuration object:
  - `memoryWindow` - Number of previous values to avoid (default: 21)
  - `startSeed` - Starting seed for history (default: 19135)
  - `useCache` - Whether to use caching (default: false)
  - `customCache` - Custom cache object to use
  - `collisionHandler` - Custom collision handler function (default: defaultCollisionHandler)

**Example:**

```javascript
import { randomWithUniqueConstraint, exportedForTesting } from './rand';
const { randomPreferSmallSextic } = exportedForTesting;

// Test sextic distribution with custom memory window
const customCache = {};
const startSeed = 20000;
const numbers = [];

for (let i = 0; i < 50; i++) {
  const number = randomWithUniqueConstraint(startSeed + i, 100, randomPreferSmallSextic, {
    memoryWindow: 10, // Only 10 previous numbers
    startSeed,
    useCache: true,
    customCache
  });
  numbers.push(number);
}

console.log('Generated numbers:', numbers);

// Example with custom collision handler
const customCollisionHandler = (seed, max, history, randomFunc) => {
  // Try prime number offsets
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  for (const prime of primes) {
    const number = randomFunc(seed * prime, max);
    if (!history.has(number)) return number;
  }
  // Fallback to default
  return defaultCollisionHandler(seed, max, history, randomFunc);
};

const numbersWithCustomHandler = [];
for (let i = 0; i < 50; i++) {
  const number = randomWithUniqueConstraint(startSeed + i, 100, randomPreferSmallCubic, {
    memoryWindow: 21,
    startSeed,
    collisionHandler: customCollisionHandler
  });
  numbersWithCustomHandler.push(number);
}
```

### 4. `clearCache()`

Clear the internal cache (useful for testing).

**Example:**

```javascript
import { clearCache } from './rand';

// Clear cache before each test
beforeEach(() => {
  clearCache();
});
```

## Usage Examples

### Example 1: Test Different Distribution Functions

```javascript
import { randomWithUniqueConstraint, exportedForTesting } from './rand';

const { randomPreferSmallSquaring, randomPreferSmallCubic, randomPreferSmallSextic } = exportedForTesting;

const testDistribution = (randomFunc, name) => {
  const max = 100;
  const results = [];

  for (let seed = 1000; seed < 1100; seed++) {
    const number = randomWithUniqueConstraint(seed, max, randomFunc, { memoryWindow: 21, startSeed: 1000 });
    results.push(number);
  }

  const avg = results.reduce((a, b) => a + b, 0) / results.length;
  const small = results.filter((x) => x < max / 4).length;

  console.log(`${name}:`);
  console.log(`  Average: ${avg.toFixed(2)}`);
  console.log(`  Values < 25: ${small}%`);
};

testDistribution(randomPreferSmallSquaring, 'Square');
testDistribution(randomPreferSmallCubic, 'Cubic');
testDistribution(randomPreferSmallSextic, 'Sextic');
```

### Example 2: Test Uniqueness with Custom Memory Window

```javascript
import { randomWithUniqueConstraint, exportedForTesting } from './rand';
const { randomPreferSmallCubic } = exportedForTesting;

const testUniqueness = (memoryWindow) => {
  const max = 50;
  const startSeed = 5000;
  const numbers = [];

  for (let i = 0; i < 100; i++) {
    const number = randomWithUniqueConstraint(startSeed + i, max, randomPreferSmallCubic, { memoryWindow, startSeed });
    numbers.push(number);
  }

  // Check uniqueness within windows
  let violations = 0;
  for (let i = memoryWindow; i < numbers.length; i++) {
    const window = numbers.slice(i - memoryWindow, i);
    if (window.includes(numbers[i])) {
      violations++;
    }
  }

  console.log(`Memory window: ${memoryWindow}`);
  console.log(`Uniqueness violations: ${violations}`);
  console.log(`Success rate: ${((1 - violations / (numbers.length - memoryWindow)) * 100).toFixed(2)}%`);
};

testUniqueness(5);
testUniqueness(10);
testUniqueness(21);
```

### Example 3: Compare Algorithm Performance

```javascript
import { generateHistoryWithFunction, findUniqueNumber, exportedForTesting } from './rand';

const { randomPreferSmallSquaring, randomPreferSmallCubic } = exportedForTesting;

const compareAlgorithms = (seed, max) => {
  const algorithms = [
    { name: 'Square', func: randomPreferSmallSquaring },
    { name: 'Cubic', func: randomPreferSmallCubic }
  ];

  algorithms.forEach(({ name, func }) => {
    const history = generateHistoryWithFunction(seed, max, func, 21, seed - 100);
    const start = performance.now();
    const number = findUniqueNumber(seed, max, history, func);
    const elapsed = performance.now() - start;

    console.log(`${name}:`);
    console.log(`  Generated: ${number}`);
    console.log(`  History size: ${history.size}`);
    console.log(`  Time: ${elapsed.toFixed(4)}ms`);
  });
};

compareAlgorithms(20000, 100);
```

## Testing Strategy

The refactored module allows comprehensive testing:

1. **Unit Tests** - Test each function independently
2. **Integration Tests** - Test the complete flow
3. **Performance Tests** - Compare algorithm efficiency
4. **Distribution Tests** - Verify statistical properties
5. **Uniqueness Tests** - Ensure no repeats in memory window
6. **Backward Compatibility Tests** - Verify historical results unchanged

See [rand.test.jsx](rand.test.jsx) for complete test examples.

## Migration Notes

### For Existing Code

No changes required - all existing functions maintain their original behavior:

- `random(seed, max)` - Main function (unchanged)
- `getRandCity(cities, seed)` - City selection (unchanged)
- `getSeedFromDate(time, zone)` - Date to seed conversion (unchanged)

### For New Testing Code

Use the new exported functions for flexible testing:

```javascript
import { randomWithUniqueConstraint, generateHistoryWithFunction, findUniqueNumber, clearCache } from './rand';
```

## Performance Considerations

- **Cache Usage**: Enable caching for repeated seed access
- **Memory Window**: Smaller windows = fewer collisions = better performance
- **Max Value**: Larger max values = more space = fewer collisions
- **Distribution**: Sextic has more collisions than cubic, cubic more than square

## Future Enhancements

Potential improvements while maintaining backward compatibility:

1. Add more distribution functions (exponential, logarithmic)
2. Implement collision prediction
3. Add performance metrics
4. Support custom collision resolution strategies
5. Add visual distribution analysis tools
