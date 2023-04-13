<script lang='ts'>
    import {topFiveRecords} from '../stores/timeRecordsStore'

</script>

<h3>Top 5 Longest Time Records</h3>
<ul>
  {#each $topFiveRecords as record, i}
    <li>
      {i + 1}. {record.title}: {record.duration.toFixed(3)} seconds
    </li>
  {/each}
</ul>