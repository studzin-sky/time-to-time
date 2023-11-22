<script>
    import { supabase } from '../clients/supabaseClient';
    import userStore from '../stores/userStore';
  
    async function handleLogout() {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error during logout:', error);
      } else {
        userStore.set({ email: '', id: null });
      }
    }
  </script>
  
  
  <button on:click={handleLogout}>Logout</button>