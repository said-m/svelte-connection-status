<script>
  import { ConnectionStatus, isOffline, isOnline } from 'svelte-connection-status';

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
    <span slot="online">online :)</span>
    <span slot="offline">offline :(</span>
  </ConnectionStatus>
</p>

<hr />
<p>you are {$isOnline ? 'online :)' : 'offline :('}</p>

{#if $isOffline}
  <hr />
  <p>check your network settings...</p>
{/if}
