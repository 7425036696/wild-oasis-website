import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yjufkzaavdsklrnayrjp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqdWZremFhdmRza2xybmF5cmpwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczODkzODE0MSwiZXhwIjoyMDU0NTE0MTQxfQ.MpqS_ZEe5jkR63JoauhU7yxEEB3meMm10Pq47PH12MY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
