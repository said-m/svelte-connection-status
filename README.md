# svelte-connection-status

Basic Svelte component and stores to detect offline & online changes.

Uses `navigator.onLine` API and makes ping requests (if page is visible) to be sure of the connection status.
You can disable pinging or chage its settings: interval, url.

- [svelte-connection-status](#svelte-connection-status)
  - [Installation](#installation)
  - [Usage](#usage)
    - [component](#component)
    - [stores](#stores)
  - [Settings](#settings)
    - [default](#default)
    - [disable ping](#disable-ping)
    - [ping params](#ping-params)

## Installation

```bash
yarn add svelte-connection-status -T
# or:
npm i svelte-connection-status -E
```

## Usage

### component

```svelte
<script>
  import { ConnectionStatus } from 'svelte-connection-status';

  function handleChange({ detail }) {
    if (detail.isOffline) {
      console.log('>>> you are offline');
    }

    if (detail.isOnline) {
      console.log('>>> you are online');
    }
  }
</script>

<p>
  you are
  <ConnectionStatus on:change={handleChange}>
    <span slot="offline">offline :(</span>
    <span slot="online">online :)</span>
  </ConnectionStatus>
</p>
```

### stores

```svelte
<script>
  import { isOffline } from 'svelte-connection-status';
</script>

<p>you are {$isOffline ? 'offline :(' : 'online :)'}</p>
```

```svelte
<script>
  import { isOnline } from 'svelte-connection-status';
</script>

{#if !$isOnline}
  <p>check your network settings...</p>
{:else}
  <p>hello there</p>
{/if}
```

## Settings

### default

```js
{
  usePing: true,
  interval: 7000,
  url: 'https://github.com/sveltejs/svelte/blob/master/package.json',
}
```

### disable ping

```js
import { setSettings } from 'svelte-connection-status';
import App from './App.svelte';

setSettings({
  usePing: false;
});

const app = new App({
  target: document.body,
});

export default app;
```

### ping params

```js
import { setSettings } from 'svelte-connection-status';
import App from './App.svelte';

setSettings({
  interval: 5000,
  url: 'https://www.google.com',
});

const app = new App({
  target: document.body,
});

export default app;
```
