
/* =====================================
   SERVIÇOS ANGOLA — LIGAÇÃO AO SUPABASE
===================================== */

const SUPABASE_URL =
    'https://ubqvzpqrubyhwgnmkdjm.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
    'sb_publishable_lrjGAFTX6C0vW5nUIWvy7g_b4JAsoCV';

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log('Ligação ao Supabase inicializada.');
