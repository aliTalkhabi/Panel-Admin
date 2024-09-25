
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://jrnmnsqymqyvxkyywjrw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impybm1uc3F5bXF5dnhreXl3anJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1ODIwMTgsImV4cCI6MjA0MjE1ODAxOH0.Xy7ojkhjUMh212f6wogpF1RkTTGu4r4qLfu1UujYuQk'
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;