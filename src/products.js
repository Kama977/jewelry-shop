import { createClient } from "@supabase/supabase-js";
const mainUrl =
"https://vxudlkziagagiqhlqpty.supabase.co/rest/v1/store?select=*";

const apiKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4dWRsa3ppYWdhZ2lxaGxxcHR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNDU1MzAsImV4cCI6MjAyMjcyMTUzMH0.lXcNi2w3lFQBB7o81ir68zPoQYjkKnkBSNN0eCnvrSM";

export const supabase = createClient(mainUrl, apiKey);