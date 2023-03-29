<script>
    export let items = [];
    export let activeTabValue = 0;
  
    const handleClick = tabValue => () => (activeTabValue = tabValue);
  </script>

<div class="tab">
  <ul class="flex flex-wrap text-sm font-medium text-center text-gray-700 border-b border-gray-200 dark:border-gray-700 dark:text-gray-700">
    {#each items as item, i}
      <li class="{i === activeTabValue ? 'dark:bg-white border-b-blue-600 border-b-2' : 'bg-white'} rounded-t-lg border-t border-l border-gray-50 border-spacing-5">
        <button class="py-2 px-4 font-semibold focus:outline-none" on:click={() => activeTabValue = i}>
          {item.label}
        </button>
      </li>
    {/each}
  </ul>
  <div class="tab-content bg-white rounded-b-lg border-t border-l border-r border-gray-300 p-4">
    {#each items as item, i}
      <div class="tab-pane {i === activeTabValue ? 'block' : 'hidden'}">
        {#if item.component}
          <svelte:component this={item.component} />
        {:else}
          {item.content}
        {/if}
      </div>
    {/each}
  </div>
</div>