# svelte-connection-status

Basic Svelte component and stores to detect offline & online changes.

## Installation

```bash
yarn add svelte-connection-status
# or:
npm i svelte-connection-status
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
