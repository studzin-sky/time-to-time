import { writable, derived } from 'svelte/store';

const timeRecords = writable<{ start: number; duration: number; title: string }[]>([]);

export function addTimeRecord(record: { start: number; duration: number; title: string }): void {
  timeRecords.update(records => {
    records.push(record);
    records.sort((a, b) => b.duration - a.duration);
    return records;
  });
}

export const topFiveRecords = derived(timeRecords, $timeRecords => $timeRecords.slice(0, 5));
