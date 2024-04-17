import { createClient } from '@supabase/supabase-js'


const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4dWRsa3ppYWdhZ2lxaGxxcHR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNDU1MzAsImV4cCI6MjAyMjcyMTUzMH0.lXcNi2w3lFQBB7o81ir68zPoQYjkKnkBSNN0eCnvrSM'
const SUPABASE_URL = "https://vxudlkziagagiqhlqpty.supabase.co"
export const supabase = createClient(SUPABASE_URL,SUPABASE_KEY);
