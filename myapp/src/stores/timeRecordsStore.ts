import { writable, derived, get } from 'svelte/store';
import userStore from './userStore'; 
import { supabase } from '../clients/supabaseClient'; 

export type TimeRecord = {
  start: number;
  duration: number;
  title: string;
  user_id?: string; // Optional because it may not be present for all records
};

const timeRecords = writable<TimeRecord[]>([]);

export async function addTimeRecord(record: Omit<TimeRecord, 'user_id'>): Promise<void> {
  // Fetch the current user
  const currentUser = get(userStore);

  // Check if the user is set
  if (!currentUser || !currentUser.id) {
    console.error("User is not logged in.");
    return;
  }

  // Add the user ID to the record
  const recordWithUserId: TimeRecord = {
    ...record,
    user_id: currentUser.id
  };

  // Save to local store
  timeRecords.update(records => {
    records.push(recordWithUserId);
    records.sort((a, b) => b.duration - a.duration);
    return records;
  });

  // Save to Supabase
  const { data, error } = await supabase
    .from('time_records')
    .insert([recordWithUserId]);

  if (error) {
    console.error('Error saving to Supabase:', error);
  }
}

export const topFiveRecords = derived(timeRecords, $timeRecords => $timeRecords.slice(0, 5)); // Should be 5 to get top five records
